import { createSelector } from 'reselect'

const currentPizzaStore = state => state.currentPizza || {}

export const getCurrentPizzaSize = createSelector(
  currentPizzaStore,
  pizza => pizza.size
)
