document.getElementById("input-value").value = "TSLA"

let fetchDataEl = document.getElementById("input-click");
fetchDataEl.onclick = () => {
  let chosenTicker = document.getElementById("input-value").value;
  let chosenTimeSeries = timePeriodOptions[document.getElementById("time-series").value].apiFunction;
  let deconstructName = timePeriodOptions[document.getElementById("time-series").value].deconstructName
  fetchIinformation(chosenTimeSeries, chosenTicker, deconstructName)
};

// export 
let exportCSVEl = document.getElementById("export-csv");
exportCSVEl.onclick = exportCSVHandle;


// table 
let tableEl = document.getElementById("result");



// Dropdown Option
let timeSeriesDropDown = document.getElementById("time-series");
let timeSeriesArray = Object.keys(timePeriodOptions).map(name => {
  return timePeriodOptions[name].name
});

timeSeriesArray.forEach(name => {
  let newOption = document.createElement("option");
  newOption.value = name;
  newOption.innerText = name;
  if (name === 'dailyAdjusted' || name=== 'daily')
    timeSeriesDropDown.appendChild(newOption)
});






















