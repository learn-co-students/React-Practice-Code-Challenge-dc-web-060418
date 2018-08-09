import React, { Component } from 'react'

class Sushi extends Component {

  constructor() {
    super()
    this.state = {
      eaten: false
    }
  }

  eatSushi() {
    if (this.props.currentWallet - this.props.sushi.price > 0) {
      this.setState({eaten: true})
      this.props.ateSushi(this.props.sushi)
    }
  }

  render() {
    return(
      <div className="sushi">
        <div className="plate" onClick={() => this.eatSushi()}>
          { this.state.eaten ? null : <img src={this.props.sushi.img_url} alt={this.props.sushi.name} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
