import { createActions } from 'redux-actions'
import {
  getPizzaSizes,
  getPizzaToppings
} from '../../services'

export const pizzaActions = createActions({
  SET_CURRENT_PIZZA_MAX_TOPPINGS: undefined,
  SET_CURRENT_PIZZA_SIZE: undefined,
  SET_CURRENT_PIZZA_TOPPINGS: undefined,
  SET_PIZZA: undefined,
  SET_PIZZA_SERVICE: undefined,
})

pizzaActions.loadPizzaSizes = () => async dispatch => {
  const data = await getPizzaSizes()
  await dispatch(pizzaActions.setPizzaService(data))
}

pizzaActions.saveCurrentPizzaSize = size => async dispatch => {
  if(size) {
    const data = await getPizzaToppings(size)
    await dispatch(pizzaActions.setCurrentPizzaToppings(data.toppings))
    await dispatch(pizzaActions.setCurrentPizzaMaxToppings(data.maxToppings))
  }
  await dispatch(pizzaActions.setCurrentPizzaSize(size))
}

pizzaActions.saveCurrentPizzaToppings = toppings => async dispatch => {
  await dispatch(pizzaActions.setCurrentPizzaToppings(toppings))
}

pizzaActions.savePizza = pizza => async dispatch => {
  await dispatch(pizzaActions.setPizza(pizza))
}
