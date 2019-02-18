import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const getTotal = data => {
  let total = 0
  _.map(data.pizzas, pizza => {
    _.map(pizza.toppings, data => {
      if(data.defaultSelected) {
        total = data.topping.price + total
      }
    })
    total = pizza.size.basePrice + total
  })

  return total
}

const OrderTotal = pizzas => {
  const total = getTotal(pizzas)
  return(
    <div className="total">
      <Grid container justify="center" spacing={40}>
        <Grid item xs={12}>
        {pizzas.pizzas.map((pizza, index) =>
          <Grid item xs={12} key={index}>
            <div className="total-text">
              {pizza.size.name}
            </div>
            <div className="total-number">
              ${(pizza.size.basePrice).toFixed(2)}
            </div>
            {pizza.toppings.map((data, index) =>
              <div className="total-extras" key={index}>
                {data.defaultSelected &&
                  <div>
                    <div className="total-text">{data.topping.name}</div>
                    <div className="total-number">
                      ${(data.topping.price).toFixed(2)}
                    </div>
                  </div>
                }
              </div>
            )}
          </Grid>
        )}
        </Grid>
        <div className="total-final">Total:</div>
        <div className="total-final">${(total).toFixed(2)}</div>
      </Grid>
    </div>
  )
}

OrderTotal.propTypes = {
  pizzas: PropTypes.array,
}

export default OrderTotal
