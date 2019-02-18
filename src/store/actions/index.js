import { createActions } from 'redux-actions'
import { getPizzaToppings } from '../../services'

export const pizzaActions = createActions({
  SET_CURRENT_PIZZA_SIZE: undefined,
  SET_CURRENT_PIZZA_TOPPINGS: undefined,
  SET_PIZZA_SIZE: undefined,
})

pizzaActions.saveCurrentPizzaSize = size => async dispatch => {
  const toppings = await getPizzaToppings(size)
  await dispatch(pizzaActions.setCurrentPizzaSize(size))
  await dispatch(pizzaActions.setCurrentPizzaToppings(toppings))
}

pizzaActions.saveCurrentPizzaToppings = toppings => async dispatch => {
  await dispatch(pizzaActions.setCurrentPizzaToppings(toppings))
}

pizzaActions.savePizzaSize = pizza => async dispatch => {
  await dispatch(pizzaActions.setPizzaSize(pizza))
}
