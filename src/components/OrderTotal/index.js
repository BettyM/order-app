import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const getTotal = data => {
  let total = 0
  _.map(data, pizza => {
    _.map(pizza.toppings, data => {
      if(data.defaultSelected) {
        total = data.topping.price + total
      }
    })
    total = pizza.size.basePrice + total
  })

  return total
}

const OrderTotal = ({ pizzas, removeItem }) => {
  const total = getTotal(pizzas)
  return(
    <div className="total">
      <Grid container justify="center" spacing={40}>
        <Grid item xs={12}>
        {pizzas.map((pizza, indexPizza) =>
          <Grid item xs={12} key={indexPizza}>
            <div className="total-text">
              {pizza.size.name}
            </div>
            <div className="total-number">
              ${(pizza.size.basePrice).toFixed(2)}
              <IconButton aria-label="Delete"
                className="item"
                id="item"
                onClick={() => removeItem(indexPizza)}>
                <DeleteIcon />
              </IconButton>
            </div>
            {pizza.toppings.map((data, indexTopping) =>
              <div className="total-extras" key={indexTopping}>
                {data.defaultSelected &&
                  <div>
                    <div className="total-text">{data.topping.name}</div>
                    <div className="total-number">
                      ${(data.topping.price).toFixed(2)}
                      <IconButton aria-label="Delete"
                        className="item"
                        id="item"
                        onClick={() => removeItem(indexPizza, indexTopping)}>
                        <DeleteIcon />
                      </IconButton>
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
  removeItem: PropTypes.func,
}

export default OrderTotal
