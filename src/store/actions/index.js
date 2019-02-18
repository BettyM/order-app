import { createActions } from 'redux-actions'
import { getPizzaToppings } from '../../services'

export const pizzaActions = createActions({
  SET_CURRENT_PIZZA_MAX_TOPPINGS: undefined,
  SET_CURRENT_PIZZA_SIZE: undefined,
  SET_CURRENT_PIZZA_TOPPINGS: undefined,
  SET_PIZZA: undefined,
})

pizzaActions.saveCurrentPizzaSize = size => async dispatch => {
  const data = await getPizzaToppings(size)
  await dispatch(pizzaActions.setCurrentPizzaSize(size))
  await dispatch(pizzaActions.setCurrentPizzaToppings(data.toppings))
  await dispatch(pizzaActions.setCurrentPizzaMaxToppings(data.maxToppings))
}

pizzaActions.saveCurrentPizzaToppings = toppings => async dispatch => {
  await dispatch(pizzaActions.setCurrentPizzaToppings(toppings))
}

pizzaActions.savePizzaSize = pizza => async dispatch => {
  await dispatch(pizzaActions.setPizzaSize(pizza))
}
