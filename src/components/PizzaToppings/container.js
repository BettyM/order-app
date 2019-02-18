import { connect } from 'react-redux'
import { pizzaActions } from '../../store/actions'
import {
  getCurrentPizzaToppings,
  getCurrentPizzaMaxToppings,
} from '../../store/reducers/selectors'
import PizzaToppings from './index'

const mapDispatchToProps = {
  saveCurrentPizzaToppings: pizzaActions.saveCurrentPizzaToppings
}

const mapStateToProps = (state) => {
  return {
    currentPizzaToppings: getCurrentPizzaToppings(state),
    currentPizzaMaxToppings: getCurrentPizzaMaxToppings(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaToppings)
