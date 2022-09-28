import axios from 'axios'
import { herokuUrl } from './settings'


export const createPieChartObject = (labels, title, data) => {
  const backgroundColors = [
    '#68a4d894',
    '#68bad894',
    '#1f78a894',
    '#346ed994',
    '#68a4d894',
    '#1e63b894',
    '#363a7594'
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
    '#68a4d894',
    '#68bad894',
    '#1f78a894',
    '#346ed994',
    '#68a4d894',
    '#1e63b894',
    '#345b7094',
    '#363a7594',
    '#6349f794',
    '#5f91ed94',
    '#4b66b194',
    '#1767fc94'
  ]
  const borderColors = [
    '#68a4d8',
    '#68bad8',
    '#1f78a8',
    '#346ed9',
    '#68a4d8',
    '#1e63b8',
    '#345b70',
    '#363a75',
    '#6349f7',
    '#5f91ed',
    '#4b66b1',
    '#1767fc'
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
  let totalEmissionsYearly = 0
  for (let label of pieConfig.labels) {
    const totalEmissions = () => {
      const sumValues = obj => Object.values(obj).reduce((a, b) => a + b)
      for (let i = 1; i <= 12; i++) {
        barConfig.data[i-1] += data[label][i]
      }
      totalEmissionsYearly += sumValues(data[label])
      return sumValues(data[label])
    }
    pieConfig.data.push(totalEmissions())
  }
  const indexOfMaxEmissions = pieConfig.data.indexOf(Math.max(...pieConfig.data))
  const maxEmissionsCategory = pieConfig.labels[indexOfMaxEmissions]
  pieConfig.title = 'Our awful emissions'
  setPieConfig(createPieChartObject(pieConfig.labels, pieConfig.title, pieConfig.data))
  setBarConfig(createBarChartObject(barConfig.labels, barConfig.title, barConfig.data))
  console.log('bardata: ',barConfig)
  return {totalEmissionsYearly, maxEmissionsCategory}
}

export const fetchDataFromApi = async (data, cat, setData, userId) => {
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
  const optionsForDb = {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const newData = await axios.post(url, postingData, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  }).then(data => {
    const emissions = data.data.co2e
    setData(data.data, cat)
    axios.put( herokuUrl + '/users/' + userId + '/emissions', {co2: emissions, category: cat}, optionsForDb).then(res => console.log(res))
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
