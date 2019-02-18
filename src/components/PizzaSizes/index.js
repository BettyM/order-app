import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'

export default class PizzaSizes extends Component {
  componentDidMount = () => {
    this.props.loadPizzaSizes()
  }

  getLabel(data) {
    const maxToppingLabel = data.maxToppings ?
      `1 to ${data.maxToppings} Ingredients` : 'No limit of ingredients'

    return (
      <div className="size-label">
        <div className="font-normal">{data.name}</div>
        <div className="font-disabled">{maxToppingLabel}</div>
        <div className="font-small">${data.basePrice}</div>
      </div>
    )
  }

  getSizeState = size => {
    const { currentPizzaSize } = this.props
    return !!currentPizzaSize ? currentPizzaSize.name === size : null
  }

  handleSizeChange = e => {
    const { pizzaSizes } = this.props
    this.props.saveCurrentPizzaSize(pizzaSizes[e.target.id])
  }

  render() {
    const { currentPizzaSize, pizzaSizes } = this.props

    return(
      <div className="section">
        {!!pizzaSizes &&
          <Grid container justify="center" spacing={40}>
            <FormGroup row>
              {pizzaSizes.map((pizza, index) =>
                <Grid item key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          currentPizzaSize ?
                            currentPizzaSize.name === pizza.name :
                            false
                        }
                        id={(index).toString()}
                        onChange={e => this.handleSizeChange(e)}
                        value={pizza.name} />
                    }
                    label={this.getLabel(pizza)}
                    key={pizza.name}
                  />
                </Grid>
              )}
            </FormGroup>
          </Grid>
        }
      </div>
    )
  }
}

PizzaSizes.propTypes = {
  currentPizzaSize: PropTypes.object,
  loadPizzaSizes: PropTypes.func,
  pizzaSizes: PropTypes.array,
  saveCurrentPizzaSize: PropTypes.func,
  savePizzaSize: PropTypes.func,
}
