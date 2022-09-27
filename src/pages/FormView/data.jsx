const data = [
    {
        category: "travel flights",
        fields: [{name: "From", options: []}, {name: "Destination", options: []}, {name: "passengers", options: []}, {name: "flight class", options: ['economy', 'first', 'business']}]
    },
    {
        category: "freight flights",
        fields: [{name: "From", options: []}, {name: "Destination", options: []},{name: "Cargo Weight", options: [],units:["kg"]}]
    },
    {
        category: "road freight",
        fields: [{name: "Distance", options: []}, {name: "Cargo Weight", options: [] ,units:["kg"]}]
    },
    {
        category: "electricity",
        fields: [{name: "Energy Amount", options: [], units:["kWh", "TJ", "GJ", "MMBTU"]}]
    },
    {
        category: "cloud computing",
        fields: [{name: "Provider", options: ["GCP", "Azure", "AWS"]}, {name: "Region", options:["Asia East 1","Asia East 2","Asia Northeast 1","Asia Northeast 2","Asia Northeast 3","Asia South 1","Asia Southeast 1","Asia Southeast 2","Australia Southeast  1","Europe North 1","Europe West 1","Europe West 2","Europe West 3","Europe West 4","Europe West 5","Europe West 6","North America Northeast 1","South America East 1","US Central 1","US East 1","US East 4","US West 1","US West 2","US West 3","US West 4"]}, {name: "CPU Count", options:[]}, {name: "CPU Load", options:[]}, {name: "Duration", options: [],units:["hour", "day"]}]
    },
    {
        category: "cloud storage",
        fields: [{name: "Provider", options: ["GCP", "Azure", "AWS"]}, {name: "Region", options:["Asia East 1","Asia East 2","Asia Northeast 1","Asia Northeast 2","Asia Northeast 3","Asia South 1","Asia Southeast 1","Asia Southeast 2","Australia Southeast  1","Europe North 1","Europe West 1","Europe West 2","Europe West 3","Europe West 4","Europe West 5","Europe West 6","North America Northeast 1","South America East 1","US Central 1","US East 1","US East 4","US West 1","US West 2","US West 3","US West 4"]}, {name: "Storage Type", options:['SSD', 'HDD']}, {name: "Data", options:[]}, {name: "Duration", options: [], units:["hour", "day"]}]
    },
    {
        category: "cloud memory",
        fields: [{name: "Provider", options: ["GCP", "Azure", "AWS"]}, {name: "Region", options:["Asia East 1","Asia East 2","Asia Northeast 1","Asia Northeast 2","Asia Northeast 3","Asia South 1","Asia Southeast 1","Asia Southeast 2","Australia Southeast  1","Europe North 1","Europe West 1","Europe West 2","Europe West 3","Europe West 4","Europe West 5","Europe West 6","North America Northeast 1","South America East 1","US Central 1","US East 1","US East 4","US West 1","US West 2","US West 3","US West 4"]}, {name: "Data", options:[]}, {name: "Duration", options: [], units:["hour", "day"]}]
    }
]

export default data
