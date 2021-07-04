// alphavantage apiKey
const apiKey = "774T1PE5TSND5B1Q"
const baseURL = "https://www.alphavantage.co/query?"
const timePeriodOptions = {

  intraDay: { apiFunction: 'TIME_SERIES_INTRADAY', name: 'intraDay', deconstructName: '' },
  intraDayExtended: { apiFunction: 'TIME_SERIES_INTRADAY_EXTENDED', name: 'intraDayExtended', deconstructName: '' },

  daily: { apiFunction: 'TIME_SERIES_DAILY', name: 'daily', deconstructName: '' },
  dailyAdjusted: { apiFunction: 'TIME_SERIES_INTRADAY_EXTENDED', name: 'dailyAdjusted', deconstructName: '' },

  weekly: { apiFunction: 'TIME_SERIES_DAILY', name: 'weekly', deconstructName: '' },
  weeklyAdjusted: { apiFunction: 'TIME_SERIES_INTRADAY_EXTENDED', name: 'weeklyAdjusted', deconstructName: '' },

  monthly: { apiFunction: 'TIME_SERIES_DAILY', name: 'monthly', deconstructName: '' },
  monthlyAdjusted: { apiFunction: 'TIME_SERIES_INTRADAY_EXTENDED', name: 'monthlyAdjusted', deconstructName: '' },

}

// FUNCTIONS
const inputClickHandle = () => {
  fetchInformation()
}

const urlGenerator = (func, symbol) => {
  return `${baseURL}function=${func}&symbol${symbol}&apikey=${apiKey}`
}

const fetchIinformation = () => {
  debugger
  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo')
    .then(response => response.json())
    .then((data) => {
      

      console.log(data)
    });
}


