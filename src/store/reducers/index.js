import { combineReducers } from 'redux'
import currentPizza from './currentPizza'
import pizzas from './pizzas'

const rootReducer = combineReducers({
  pizzas,
  currentPizza,
})

export default rootReducer
