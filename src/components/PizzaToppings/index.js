import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'

export default class PizzaToppings extends Component {
  constructor() {
    super()
    this.state = {
      disable: false,
      toppingCount: 0
    }
  }

  componentDidMount() {
    const { currentPizzaToppings } = this.props

    const checkedToppings = _.filter(currentPizzaToppings,
      {defaultSelected: true})
    this.setState({ toppingCount: checkedToppings.length })
  }

  getLabel(data) {
    return (
      <div className="size-label">
        <div className="font-normal">{data.name}</div>
        <div className="font-small">${data.price}</div>
      </div>
    )
  }

  updateToppingCount = checked => {
    const { currentPizzaMaxToppings } = this.props
    const { toppingCount } = this.state

    if(checked) {
      this.setState({ toppingCount: toppingCount + 1})
      if(currentPizzaMaxToppings === toppingCount + 1) {
        this.setState({ disable: true })
      }
    } else {
      this.setState({ toppingCount: toppingCount - 1})
      if(currentPizzaMaxToppings !== toppingCount - 1) {
        this.setState({ disable: false })
      }
    }
  }

  handleToppingChange = e => {
    const {
      currentPizzaToppings,
      saveCurrentPizzaToppings
    } = this.props

    const index = _.findIndex(currentPizzaToppings,
      {topping: { name: e.target.value} })
    const enableState = currentPizzaToppings[index].defaultSelected
    currentPizzaToppings[index].defaultSelected = !enableState

    saveCurrentPizzaToppings(currentPizzaToppings)
    this.updateToppingCount(currentPizzaToppings[index].defaultSelected)
  }

  render() {
    const { currentPizzaToppings } = this.props
    const { disable } = this.state
    return(
      <div className="section">
        <Grid container justify="center" spacing={40}>
          <FormGroup row>
            {currentPizzaToppings.map((data, index) =>
              <Grid item xs key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.defaultSelected}
                      disabled={!data.defaultSelected && disable}
                      onChange={e => this.handleToppingChange(e)}
                      value={data.topping.name} />
                    }
                  label={this.getLabel(data.topping)}
                  key={index}
                />
              </Grid>
            )}
          </FormGroup>
        </Grid>
      </div>
    )
  }
}

PizzaToppings.propTypes = {
  currentPizzaToppings: PropTypes.array,
  currentPizzaMaxToppings: PropTypes.number,
  saveCurrentPizzaToppings: PropTypes.func,
}
