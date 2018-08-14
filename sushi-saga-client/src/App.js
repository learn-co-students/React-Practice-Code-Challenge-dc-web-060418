import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allsushi: [],
      fourSushi:[],
      index: 0,
      balance: 150,
      eatenSushi: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(json => {
      const fourSushi = json.slice(0,4).map(sushi => {
        sushi["eaten"] = false
        return sushi
      })
      this.setState({
        allsushi: json,
        fourSushi: fourSushi
        
      })
    })
  }

  getFourNewSushi = () => {
    const newIndex = this.state.index + 4
    const nextFourSushi = this.state.allsushi.slice(newIndex, newIndex + 4).map(sushi => {
      sushi["eaten"] = false
      return sushi
    })
    this.setState({
      fourSushi: nextFourSushi,
      index: newIndex
    })
  }

  eatSushi = (id) => {
    const sushiToEat = this.state.fourSushi.find(sushi => sushi.id === id)
    if (this.state.balance - sushiToEat.price >= 0) {
      sushiToEat["eaten"] = true
      const index = this.state.fourSushi.indexOf(sushiToEat)
      const newSushis = this.state.fourSushi
      newSushis.splice(index, 1, sushiToEat)
      this.setState({
        fourSushi: newSushis,
        balance: this.state.balance - sushiToEat.price,
        eatenSushi: [...this.state.eatenSushi, sushiToEat]
      })
    } else {
      console.log("You dont have enough money to buy this sushi piece")
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  
        sushis={this.state.fourSushi}
        getNextFour={this.getFourNewSushi}
        eatSushi={this.eatSushi}
         />
        <Table 
        balance={this.state.balance}
        eatenSushi={this.state.eatenSushi}
        />
      </div>
    );
  }
}

export default App;