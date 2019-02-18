import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PizzaSizes from '../PizzaSizes/container'
import PizzaToppings from '../PizzaToppings/container'

export default class PizzaOrder extends Component {
  constructor() {
    super()
    this.state = {
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
        return <div></div>
      default:
        return <div></div>
    }
  }

  handleNext = () => {
    const { activeStep } = this.state
    this.setState({
      activeStep: activeStep + 1,
    })
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleSendOrder = () => {
    console.log('SEND ORDER!')
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
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={this.handleSendOrder}>
                Send Order
              </Button>
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
                  Back
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
  currentPizzaSize: PropTypes.string,
}
