import { connect } from 'react-redux'
import { pizzaActions } from '../../store/actions'
import {
  getCurrentPizzaSize,
  getCurrentPizzaToppings,
} from '../../store/reducers/selectors'
import PizzaToppings from './index'

const mapDispatchToProps = {
  saveCurrentPizzaToppings: pizzaActions.saveCurrentPizzaToppings
}

const mapStateToProps = (state) => {
  return {
    currentPizzaSize: getCurrentPizzaSize(state),
    currentPizzaToppings: getCurrentPizzaToppings(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaToppings)
