import React from 'react'
import NumberButton from './NumberButton' 
import 'bootstrap/dist/css/bootstrap.min.css'

class NumberRow extends React.Component {
  
  render() {

    // Returns a div containing two NumberButton components.
    // Each button is also passed a number from props, which will be displayed as the button text.
    return (
      <div className="d-flex justify-content-around mb-4 border-bottom pb-2">
        <NumberButton 
          number={this.props.number1} 
          color="red" 
          onClick={this.props.onClick} 
          clickedNumber={this.props.clickedNumber}
        />
        <NumberButton 
          number={this.props.number2} 
          color="green" 
          onClick={this.props.onClick} 
          clickedNumber={this.props.clickedNumber}
        />
      </div>
    )
  }
}

export default NumberRow