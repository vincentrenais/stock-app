import { FETCH_STOCKS } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_STOCKS:
      return [action.payload.data, ...state]
    default:
      return state
  }
}
