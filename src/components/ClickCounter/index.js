import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  clickButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="count">{count}</span> times
        </h1>
        <p className="text">Click the button to increase the count!</p>
        <div className="button-container">
          <button type="button" className="btn" onClick={this.clickButton}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
