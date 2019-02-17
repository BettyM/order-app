import React, { Component } from 'react'
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

  handleSizeChange = e => {
    console.log('size change', e.target)
  }

  render() {
   return(
      <Query query={SIZE_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>LOADING...</div>
        if (error) return <div>ERROR</div>
        return (
          <div className="sizes-section">
          <Grid container justify="center" spacing={40}>
            <FormGroup row>
              {data.pizzaSizes.map((pizza, index) =>
                <Grid item key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={false}
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
          </div>
        )
      }}
      </Query>
    )
  }
}
