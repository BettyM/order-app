import { createActions } from 'redux-actions'

export const pizzaActions = createActions({
  SET_CURRENT_PIZZA_SIZE: undefined,
  SET_PIZZA_SIZE: undefined,
})

pizzaActions.saveCurrentPizzaSize = pizza => async dispatch => {
  await dispatch(pizzaActions.setCurrentPizzaSize(pizza))
}

pizzaActions.savePizzaSize = pizza => async dispatch => {
  await dispatch(pizzaActions.setPizzaSize(pizza))
}
