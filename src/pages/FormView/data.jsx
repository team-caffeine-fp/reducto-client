const data = [
    {
        category: "Travel Flights",
        fields: [{name: "From", options: []}, {name: "Destination", options: []}, {name: "passengers", options: []}, {name: "flight class", options: []}]
    },
    {
        category: "Freight Flights",
        fields: [{name: "From", options: []}, {name: "Destination", options: []},{name: "Cargo Weight", options:["kg"]}]
    },
    {
        category: "Road Freight",
        fields: [{name: "Distance", options: []}, {name: "Cargo Weight", options:["kg"]}]
    },
    {
        category: "Electricity",
        fields: [{name: "Country", options: []}, {name: "Energy Amount", options:["kWh", "TJ", "GJ", "MMBTU"]}]
    },
    {
        category: "Cloud Computing (CPU)",
        fields: [{name: "Provider", options: ["GCP", "Azure", "AWS"]}, {name: "Region", options:["Asia East 1","Asia East 2","Asia Northeast 1","Asia Northeast 2","Asia Northeast 3","Asia South 1","Asia Southeast 1","Asia Southeast 2","Australia Southeast  1","Europe North 1","Europe West 1","Europe West 2","Europe West 3","Europe West 4","Europe West 5","Europe West 6","North America Northeast 1","South America East 1","US Central 1","US East 1","US East 4","US West 1","US West 2","US West 3","US West 4"]}, {name: "CPU Count", options:[]}, {name: "CPU Load", options:[]}, {name: "Duration", options:["hour", "day"]}]
    },
    {
        category: "Cloud Computing (Storage)",
        fields: [{name: "Provider", options: ["GCP", "Azure", "AWS"]}, {name: "Region", options:["Asia East 1","Asia East 2","Asia Northeast 1","Asia Northeast 2","Asia Northeast 3","Asia South 1","Asia Southeast 1","Asia Southeast 2","Australia Southeast  1","Europe North 1","Europe West 1","Europe West 2","Europe West 3","Europe West 4","Europe West 5","Europe West 6","North America Northeast 1","South America East 1","US Central 1","US East 1","US East 4","US West 1","US West 2","US West 3","US West 4"]}, {name: "Storage Type", options:[]}, {name: "Data", options:[]}, {name: "Duration", options:["hour", "day"]}]
    },
    {
        category: "Cloud Computing (Memory)",
        fields: [{name: "Provider", options: ["GCP", "Azure", "AWS"]}, {name: "Region", options:["Asia East 1","Asia East 2","Asia Northeast 1","Asia Northeast 2","Asia Northeast 3","Asia South 1","Asia Southeast 1","Asia Southeast 2","Australia Southeast  1","Europe North 1","Europe West 1","Europe West 2","Europe West 3","Europe West 4","Europe West 5","Europe West 6","North America Northeast 1","South America East 1","US Central 1","US East 1","US East 4","US West 1","US West 2","US West 3","US West 4"]}, {name: "Data", options:[]}, {name: "Duration", options:["hour", "day"]}]
    }
]

export default data
