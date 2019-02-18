import { combineReducers } from 'redux'
import currentPizza from './currentPizza'
import pizzas from './pizzas'
import servicePizza from './servicePizzas'

const rootReducer = combineReducers({
  pizzas,
  currentPizza,
  servicePizza
})

export default rootReducer
