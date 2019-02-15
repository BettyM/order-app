import React, { Component } from 'react'
import PizzaSizes from './PizzaSizes'

export default class Order extends Component {
  render() {
    return (
      <div>Choose your pizza!
        <PizzaSizes />
      </div>
    )
  }
}
