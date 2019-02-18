import { connect } from 'react-redux'
import { getCurrentPizzaSize } from '../../store/reducers/selectors'
import PizzaOrder from './'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => {
  return {
    currentPizzaSize: getCurrentPizzaSize(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaOrder)