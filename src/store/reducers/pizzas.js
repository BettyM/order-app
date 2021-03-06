import { handleActions } from 'redux-actions'

const defaultState = {
  order: []
}

const reducerMap = {
  'SET_PIZZA': (state, {payload}) => {
    return {
      ...state,
      order: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
