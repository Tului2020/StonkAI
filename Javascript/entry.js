

let inputClick = document.getElementById("input-click");
inputClick.onclick = fetchInformation;



let timeSeriesDropDown = document.getElementById("time-series");
let timeSeriesArray = Object.keys(timePeriodOptions).map(name => timePeriodOptions[name].name);

// timeSeriesNames.forEach(name => {
//   let newOption = document.createElement("option");
//   newOption.value = name;
//   newOption.innerText = name;


//   timeSeriesDropDown.appendChild()
// })



















