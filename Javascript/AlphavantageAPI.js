// alphavantage apiKey
const apiKey = "774T1PE5TSND5B1Q"
const baseURL = "https://www.alphavantage.co/query?"
const timePeriodOptions = {

  intraDay: { apiFunction: 'TIME_SERIES_INTRADAY', name: 'intraDay', deconstructName: '' },
  intraDayExtended: { apiFunction: 'TIME_SERIES_INTRADAY_EXTENDED', name: 'intraDayExtended', deconstructName: '' },

  daily: { apiFunction: 'TIME_SERIES_DAILY', name: 'daily', deconstructName: 'Time Series (Daily)' },
  dailyAdjusted: { apiFunction: 'TIME_SERIES_INTRADAY_EXTENDED', name: 'dailyAdjusted', deconstructName: '' },

  weekly: { apiFunction: 'TIME_SERIES_DAILY', name: 'weekly', deconstructName: '' },
  weeklyAdjusted: { apiFunction: 'TIME_SERIES_INTRADAY_EXTENDED', name: 'weeklyAdjusted', deconstructName: '' },

  monthly: { apiFunction: 'TIME_SERIES_DAILY', name: 'monthly', deconstructName: '' },
  monthlyAdjusted: { apiFunction: 'TIME_SERIES_INTRADAY_EXTENDED', name: 'monthlyAdjusted', deconstructName: '' },

}

// FUNCTIONS
const urlGenerator = (func, symbol) => {
  return `${baseURL}function=${func}&symbol=${symbol}&apikey=${apiKey}`
}

const exportCSVHandle = () => {
  console.log("export CSV")
}


const fetchIinformation = (func, symbol, deconstructName) => {
  fetch(urlGenerator(func, symbol))
    .then(response => response.json())
    .then((data) => {
      displayData(data[deconstructName])
    })
    .catch(e => console.log(e))
    ;
};

const displayData = (data) => {

  let dates = Object.keys(data);
  let columns = ["dates"].concat(Object.keys(data[dates[0]]));

  removeAllChildNodes(tableEl);

  // creates header
  let columnEl = document.createElement("tr");
  columns.forEach(columnName => {
    let columEl = document.createElement("th")
    columEl.innerText = columnName
    columnEl.appendChild(columEl)
  });
  tableEl.appendChild(columnEl)


  // populating the table
  dates.forEach(date => {
    let rowEl = document.createElement("tr");
    let rowItems = [date].concat(Object.values(data[date]));

    
    rowItems.forEach(rowItem => {
      let rowColEl = document.createElement("td");
      rowColEl.innerText = rowItem
      // debugger

      rowEl.appendChild(rowColEl)
    });

    // debugger
    tableEl.appendChild(rowEl)

    // console.log(rowItems)
  })


}

// const createRow = () => {

// }



const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


