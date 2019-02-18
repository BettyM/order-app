import { handleActions } from 'redux-actions'

const defaultState = {
  size: null,
  toppings: [],
  maxToppings: null,
}

const reducerMap = {
  'SET_CURRENT_PIZZA_SIZE': (state, {payload}) => {
    return {
      ...state,
      size: payload,
    }
  },
  'SET_CURRENT_PIZZA_TOPPINGS': (state, {payload}) => {
    return {
      ...state,
      toppings: payload,
    }
  },
  'SET_CURRENT_PIZZA_MAX_TOPPINGS': (state, {payload}) => {
    return {
      ...state,
      maxToppings: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
