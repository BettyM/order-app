import { handleActions } from 'redux-actions'

const defaultState = {
  size: null
}

const reducerMap = {
  'SET_CURRENT_PIZZA_SIZE': (state, {payload}) => {
    return {
      ...state,
      size: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
