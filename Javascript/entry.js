let inputClick = document.getElementById("input-click");
inputClick.onclick = () => {
  let chosenTicker = document.getElementById("input-value").value;
  let chosenTimeSeries = document.getElementById("time-series").value;
  fetchIinformation(chosenTimeSeries, chosenTicker)
};




// Dropdown Option
let timeSeriesDropDown = document.getElementById("time-series");
let timeSeriesArray = Object.keys(timePeriodOptions).map(name => {

  return {
    value: timePeriodOptions[name].apiFunction,
    name: timePeriodOptions[name].name,
  }
});

timeSeriesArray.forEach(({value, name}) => {
  let newOption = document.createElement("option");
  newOption.value = value;
  newOption.innerText = name;
  timeSeriesDropDown.appendChild(newOption)
});






















