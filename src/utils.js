import axios from 'axios'
import { herokuUrl } from './settings'
import { useData } from './context'


export const createPieChartObject = (labels, title, data) => {
  const backgroundColors = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(20, 99, 132)',
    'rgb(54, 162, 50)',
    'rgb(20, 99, 11)',
    'rgb(54, 55, 50)',
    'rgb(255, 205, 86)'
  ]
  return {
    type: 'pie',
    data: {labels: labels,
      datasets: [{
        label: title,
        data: data,
        backgroundColor: backgroundColors.slice(0, labels.length),
        hoverOffset: 4
      }],
    }
  }
}

export const createBarChartObject = (labels, title, data) => {
  const backgroundColors = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(255, 205, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(54, 255, 235, 0.8)',
    'rgba(153, 12, 255, 0.8)',
    'rgba(153, 1, 255, 0.8)',
    'rgba(54, 34, 235, 0.8)',
    'rgba(153, 12, 55, 0.8)',
    'rgba(201, 203, 207, 0.8)'
  ]
  const borderColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(54, 162, 12)',
    'rgb(153, 102, 45)',
    'rgb(153, 111, 22)',
    'rgb(54, 33, 12)',
    'rgb(33, 102, 45)',
    'rgb(201, 203, 207)'
  ]
  const barData = {
    labels: labels,
    datasets: [{
      label: title,
      data: data,
      backgroundColor: backgroundColors.slice(0, labels.length),
      borderColor: borderColors.slice(0, labels.length),
      borderWidth: 1
    }]
  }
  return {
    type: 'bar',
    data: barData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  }
}

export const createDataStructureForCharts = (data, setBarConfig, setPieConfig) => {
  console.log(data)
  const pieConfig = {}
  pieConfig.data = []
  pieConfig.labels = ['cloud computing', "cloud memory", "cloud storage", "travel flights", "freight flights", "road freight", "electricity"]
  const barConfig = {}
  barConfig.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  barConfig.labels = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  barConfig.title = 'Our emissions over the year'
  for (let label of pieConfig.labels) {
    const totalEmissions = () => {
      const sumValues = obj => Object.values(obj).reduce((a, b) => a + b)
      for (let i = 1; i <= 12; i++) {
        barConfig.data[i-1] += data[label][i]
      }
      return sumValues(data[label])
    }
    pieConfig.data.push(totalEmissions())
  }
  pieConfig.title = 'Our awful emissions'
  setPieConfig(createPieChartObject(pieConfig.labels, pieConfig.title, pieConfig.data))
  setBarConfig(createBarChartObject(barConfig.labels, barConfig.title, barConfig.data))
  console.log('bardata: ',barConfig)

}

export const fetchDataFromApi = async (data, cat, setData) => {
  const { userId } = useData()
  console.log(cat)
  const token = import.meta.env.VITE_CLIMATIQ_API_KEY
  let url = 'https://beta3.api.climatiq.io/'
  let postingData = {}
  if (cat == 'travel flights') {
    url = url + 'travel/flights'
    postingData =         
    {"legs": [
      {
        "from": data["From"],
        "to": data["Destination"],
        "passengers": parseInt(data["passengers"]),
        "class": data["flight class"]
      },
    ]}
  } else if (cat == 'freight flights') {
    url = url + 'freight/flights'
    postingData = {
      "legs": [
        {
            "from": data["From"],
            "to": data["Destination"],
            "weight": parseInt(data['Cargo Weight']),
            "weight_unit": "kg"
        }, ]
    }
  } else if (cat == 'road freight'){
    url = url + 'estimate'
    postingData = {
      "emission_factor": "freight_vehicle-vehicle_type_truck_medium_or_heavy-fuel_source_na-vehicle_weight_na-percentage_load_na",
      "parameters": {
        "weight": parseInt(data['Cargo Weight']),
        "distance": parseInt(data['Distance']),
        "weight_unit": "kg",
        "distance_unit": "km"
      }
    }
  } else if ( cat == 'electricity') {
    url = url + 'estimate'
    postingData = {
      "emission_factor": {
        "id": "electricity-energy_source_grid_mix",
        "region": "GB"
      },
      "parameters": {
        "energy": parseInt(data['Energy Amount']),
        "energy_unit": "kWh"
      }
    }
  } else if (cat == 'cloud computing') {
    url = 'https://beta3.api.climatiq.io/compute/'+ 'azure' +'/cpu'  // fix this, for some reason other providers don't work
    postingData = {
      "cpu_count": parseInt([data['CPU Count']]),
      "region": "uk_west", // the codes for the regions have to be mapped to what we've got in the object (data in formView)
      "cpu_load": parseInt([data['CPU Load']]),
      "duration": parseInt([data['Duration']]),
      "duration_unit": "h"
    }
  } else if ( cat == 'cloud storage') {
    url = 'https://beta3.api.climatiq.io/compute/aws/storage'
    postingData = {
      "region": "af_south_1", 
      "storage_type": "ssd",
      "data": 50,
      "data_unit": "GB",
      "duration": 1,
      "duration_unit": "day"
    }
  } else if ( cat == 'cloud memory') {
    url = 'https://beta3.api.climatiq.io/compute/gcp/memory'
    postingData = {
      "region": "us_west_2",
      "data": 8,
      "data_unit": "GB",
      "duration": 24,
      "duration_unit": "h"
    }
  }
  const newData = await axios.post(url, postingData, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }).then(data => {
    const emissions = data.data.co2e
    setData(data.data, cat)
    axios.put( herokuUrl + '/users/' + userId + '/emissions', {co2: emissions, category: cat}).then(res => console.log(res))
  })
  return newData 
}

export const createDataStructureForPie = (data, setPieConfig, month) => {
  console.log(data)

  const pieConfig = {}
  pieConfig.data = []
  pieConfig.labels = ['cloud computing', "cloud memory", "cloud storage", "travel flights", "freight flights", "road freight", "electricity"]
  
  for (let label of pieConfig.labels) {
    pieConfig.data.push(data[label][month])

    console.log('💥',data[label][month])
  }

  console.log(pieConfig.data)

  pieConfig.title = 'Our awful emissions'
  setPieConfig(createPieChartObject(pieConfig.labels, pieConfig.title, pieConfig.data))

}
