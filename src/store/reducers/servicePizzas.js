import { handleActions } from 'redux-actions'

const defaultState = {
  sizes: []
}

const reducerMap = {
  'SET_PIZZA_SERVICE': (state, {payload}) => {
    return {
      ...state,
      sizes: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
