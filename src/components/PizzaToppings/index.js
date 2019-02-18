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
      edit: false
    }
  }

  getLabel(data) {
    return (
      <div className="size-label">
        <div className="font-normal">{data.name}</div>
        <div className="font-small">${data.price}</div>
      </div>
    )
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
    this.setState({ edit: true})
  }

  render() {
    const { currentPizzaToppings } = this.props
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
  currentPizzaSize: PropTypes.string,
  currentPizzaToppings: PropTypes.array,
  saveCurrentPizzaToppings: PropTypes.func,
}
