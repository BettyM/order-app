import { connect } from 'react-redux'
import { pizzaActions } from '../../store/actions'
import {
  getCurrentPizzaSize,
  getPizzaSizes
} from '../../store/reducers/selectors'
import PizzaSizes from './index'

const mapDispatchToProps = {
  loadPizzaSizes: pizzaActions.loadPizzaSizes,
  saveCurrentPizzaSize: pizzaActions.saveCurrentPizzaSize,
  savePizzaSize: pizzaActions.savePizzaSize
}

const mapStateToProps = (state) => {
  return {
    currentPizzaSize: getCurrentPizzaSize(state),
    pizzaSizes: getPizzaSizes(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaSizes)
