import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PizzaSizes from '../PizzaSizes/container'
import PizzaToppings from '../PizzaToppings/container'
import OrderTotal from '../OrderTotal'

export default class PizzaOrder extends Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      activeStep: 0
    }
  }

  getSteps() {
    return [
      'Select the size of your pizza',
      'Select toppings',
      'Send order!'
    ]
  }

  getStepContent = step => {
    switch (step) {
      case 0:
        return <PizzaSizes />
      case 1:
        return <PizzaToppings />
      case 2:
        return <OrderTotal
          pizzas={this.props.pizzas}
          removeItem={this.handleRemoveItem}
        />
      default:
        return <div></div>
    }
  }

  handleNext = () => {
    const {
      currentPizzaSize,
      currentPizzaToppings,
      pizzas,
      savePizza
    } = this.props
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep + 1,
    })

    if(activeStep === 1) {
      const pizzaData = {
        size: currentPizzaSize,
        toppings: currentPizzaToppings
      }
      pizzas.push(pizzaData)

      savePizza(pizzas)
    }
  }

  handleBack = () => {
    const { saveCurrentPizza } = this.props
    const { activeStep } = this.state
    if(activeStep === 2) {
      this.setState({ activeStep: 0 })
      saveCurrentPizza()
    } else {
      this.setState({ activeStep: activeStep - 1 })
    }
  }

  handleRemoveItem = (indexPizza, indexTopping = null) => {
    const { pizzas, savePizza } = this.props
    if(indexTopping) {
      pizzas[indexPizza].toppings[indexTopping].defaultSelected = false
      savePizza(pizzas)
      this.setState({ edit: true})
    } else {
      pizzas.splice(indexPizza, 1)
      savePizza(pizzas)
      this.setState({ edit: true})
    }
  }

  render() {
    const { currentPizzaSize } = this.props
    const { activeStep } = this.state
    const steps = this.getSteps()

    return (
      <div className="root">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography component={'span'}>
                <div className="section font-big">
                  We are preparing your order!!
                </div>
              </Typography>
            </div>
          ) : (
            <div>
              <Typography component={'span'}>
                {this.getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                >
                  {activeStep === steps.length - 1 ? 'Add Pizza' : 'Back'}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!currentPizzaSize}
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

PizzaOrder.propTypes = {
  currentPizzaSize: PropTypes.object,
  currentPizzaToppings: PropTypes.array,
  pizzas: PropTypes.array,
  saveCurrentPizza: PropTypes.func,
  savePizza: PropTypes.func,
}
