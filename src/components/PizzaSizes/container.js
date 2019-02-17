import { connect } from 'react-redux'
import { pizzaActions } from '../../store/actions'
import PizzaSizes from './index'

const mapDispatchToProps = {
  savePizzaSize: pizzaActions.savePizzaSize
}

const mapStateToProps = (state) => {
  console.log('STATE', state)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PizzaSizes)
