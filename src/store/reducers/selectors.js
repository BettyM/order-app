import { createSelector } from 'reselect'

const currentPizzaStore = state => state.currentPizza || {}

export const getCurrentPizzaSize = createSelector(
  currentPizzaStore,
  pizza => pizza.size
)

export const getCurrentPizzaToppings = createSelector(
  currentPizzaStore,
  pizza => pizza.toppings
)

export const getCurrentPizzaMaxToppings = createSelector(
  currentPizzaStore,
  pizza => pizza.maxToppings
)
