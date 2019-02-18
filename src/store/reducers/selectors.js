import { createSelector } from 'reselect'

const currentPizzaStore = state => state.currentPizza || null
const pizzaStore = state => state.pizzas || []
const serviceStore = state => state.servicePizza || []

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

export const getPizzas = createSelector(
  pizzaStore,
  pizzas => pizzas.order
)

export const getPizzaSizes = createSelector(
  serviceStore,
  pizzas => pizzas.sizes
)
