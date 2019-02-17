import { createActions } from 'redux-actions'

export const pizzaActions = createActions({
  SET_PIZZA_SIZE: undefined,
})

pizzaActions.savePizzaSize = pizza => async dispatch => {
  await dispatch(pizzaActions.setPizzaSize(pizza))
}
