import axios from 'axios'

const ROOT_URL = 'https://api.iextrading.com/1.0/stock/market/batch'

export const FETCH_STOCKS = 'FETCH_STOCKS'

export function fetchStocks (ticker) {
  const url = `${ROOT_URL}?symbols=${ticker}&types=quote`
  const request = axios.get(url)

  return {
    type: FETCH_STOCKS,
    payload: request
  }
}
