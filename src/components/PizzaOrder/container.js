import { connect } from 'react-redux'
import { pizzaActions } from '../../store/actions'
import {
  getCurrentPizzaSize,
  getCurrentPizzaToppings,
  getPizzas
} from '../../store/reducers/selectors'
import PizzaOrder from './'

const mapDispatchToProps = {
  saveCurrentPizza: pizzaActions.saveCurrentPizzaSize,
  savePizza: pizzaActions.savePizza
}

const mapStateToProps = (state) => {
  return {
    currentPizzaSize: getCurrentPizzaSize(state),
    currentPizzaToppings: getCurrentPizzaToppings(state),
    pizzas: getPizzas(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaOrder)
