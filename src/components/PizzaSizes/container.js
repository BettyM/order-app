import { connect } from 'react-redux'
import { pizzaActions } from '../../store/actions'
import { getCurrentPizzaSize } from '../../store/reducers/selectors'
import PizzaSizes from './index'

const mapDispatchToProps = {
  saveCurrentPizzaSize: pizzaActions.saveCurrentPizzaSize,
  savePizzaSize: pizzaActions.savePizzaSize
}

const mapStateToProps = (state) => {
  return {
    currentPizzaSize: getCurrentPizzaSize(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaSizes)
