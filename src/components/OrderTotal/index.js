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
    <div className="section total">
      <Grid container justify="center" spacing={40}>
        {pizzas.pizzas.map((pizza, index) =>
          <Grid item key={index}>
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
            <div className="total total-final">Total:</div>
            <div className="total total-final">${(total).toFixed(2)}</div>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

OrderTotal.propTypes = {
  pizzas: PropTypes.array,
}

export default OrderTotal
