import React, { Component } from 'react'
import './ingredients.css'

class Ingredients extends Component {
  render () {
    return (
      <div className="ingredients">
        <table className="ingredients--table">
          <tbody>
          <tr>
            <th className="ingredients--table-header">Ingredient</th>
            <th className="ingredients--table-header">Amount</th>
          </tr>
          <tr>
            <td>Bananas</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Oats</td>
            <td>50g</td>
          </tr>
          <tr>
            <td>Eggs</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Baking soda</td>
            <td>1 Teaspoon</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Ingredients
