import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'

const SIZE_QUERY = gql`
  {
    pizzaSizes {
      name
      maxToppings
      basePrice
    }
  }
`

export default class PizzaSizes extends Component {
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
    return currentPizzaSize === size
  }

  handleSizeChange = e => {
    this.props.saveCurrentPizzaSize(e.target.value)
  }

  render() {
    const { currentPizzaSize } = this.props

    return(
      <div className="section">
        <Query query={SIZE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>LOADING...</div>
          if (error) return <div>ERROR</div>
          return (
            <Grid container justify="center" spacing={40}>
              <FormGroup row>
                {data.pizzaSizes.map((pizza, index) =>
                  <Grid item key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={currentPizzaSize === pizza.name}
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
          )
        }}
        </Query>
      </div>
    )
  }
}

PizzaSizes.propTypes = {
  currentPizzaSize: PropTypes.string,
  saveCurrentPizzaSize: PropTypes.func,
  savePizzaSize: PropTypes.func,
}
