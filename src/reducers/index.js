import { combineReducers } from 'redux'
import StocksReducer from './stocksReducer'

const rootReducer = combineReducers(
  { stocks: StocksReducer }
)

export default rootReducer
