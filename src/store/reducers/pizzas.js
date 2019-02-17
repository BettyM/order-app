import { handleActions } from 'redux-actions'

const defaultState = {
  type: []
}

const reducerMap = {
  'SET_PIZZA_SIZE': (state, {payload}) => {
    return {
      ...state,
      type: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
