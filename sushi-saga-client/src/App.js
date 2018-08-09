import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.allSushi = []
    this.state={
      displayedSushi: [],
      customerMoney: 100,
      numSushiEaten: 0
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res=>res.json())
    .then(sushiData=>{
      this.allSushi = sushiData
      this.setState({
        displayedSushi: this.newSushi()
      })
    })
  }

  moreSushi = ()=>{
    this.setState({
      displayedSushi: this.newSushi()
    })
  }

  newSushi = () => {
    let returnSushi = []
    for (let i = 0; i < 4; i++) {
      let randIndex = Math.floor(Math.random() * this.allSushi.length)
      returnSushi.push(this.allSushi[randIndex])
    }
    return returnSushi
  }

  eatSushi= (price) => {
    this.setState({
      customerMoney: this.state.customerMoney - price,
      numSushiEaten: this.state.numSushiEaten + 1
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer   displayedSushi={this.state.displayedSushi}
                          moreSushi={this.moreSushi}
                          eatSushi={this.eatSushi}
                          customerMoney={this.state.customerMoney}/>
        <Table            customerMoney={this.state.customerMoney}
                          numSushiEaten={this.state.numSushiEaten} />
      </div>
    );
  }
}

export default App;