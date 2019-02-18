import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'

const sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

export default class PizzaToppings extends Component {
  constructor(props) {
    super(props)

    this.TOPPING_QUERY = this.getQuery(props.currentPizzaSize)
  }

  getQuery = size => {
    size = Object.keys(sizes).find(x => sizes[x].includes(size))

    return gql`
      {
        pizzaSizeByName(name: ${size}) {
          toppings {
            topping {
              name
              price
            }
            defaultSelected
          }
        }
      }
    `
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
    console.log('topping change', e.target)
  }

  render() {
    return(
      <div className="section">
        <Query query={this.TOPPING_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>LOADING...</div>
          if (error) return <div>ERROR</div>
          return (
            <Grid container justify="center" spacing={40}>
              <FormGroup row>
                {data.pizzaSizeByName.toppings.map((data, index) =>
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
          )
        }}
        </Query>
      </div>
    )
  }
}

PizzaToppings.propTypes = {
  currentPizzaSize: PropTypes.string,
}
