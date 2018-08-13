import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      //sushi object: {id: x, img_url: y, name: z, price: a} and you need to add eaten: boolean
      fourSushis: [],
      allSushis: [],
      sushiIndex: 0,
      balance: 100,
      eatenSushis: []
    }
  }

  componentDidMount() {
    fetch(API).then(r => r.json()).then(data => {
      const fourSushis = data.slice(0, 4).map(sushi => {
        sushi["eaten"] = false
        return sushi
      })
      this.setState({
      allSushis: data,
      fourSushis: fourSushis
      })
    }
    )
  }

  getFourNewSushis = () => {
    const newIndex = this.state.sushiIndex+4
    const newSet = this.state.allSushis.slice(newIndex, newIndex+4).map(sushi => {
      sushi["eaten"] = false
      return sushi
    })
    this.setState({fourSushis: newSet, sushiIndex: newIndex})
  }

  eatSushi = (id) => {
    const sushiToEat = this.state.fourSushis.find(sushi => sushi.id === id)
    if(this.state.balance-sushiToEat["price"] >= 0) {
      const index = this.state.fourSushis.indexOf(sushiToEat)
      sushiToEat["eaten"] = true
      const newFourSushis = this.state.fourSushis
      newFourSushis.splice(index, 1, sushiToEat)
      this.setState({
        fourSushis: newFourSushis, 
        balance: this.state.balance-sushiToEat.price,
        eatenSushis: [...this.state.eatenSushis, sushiToEat]
      })
    } else {
      console.log("you don't have enough money for this sushi")
    }
    
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  
        sushis={this.state.fourSushis} 
        getFourNewSushis={this.getFourNewSushis}
        eatSushi={this.eatSushi}/>
        <Table balance={this.state.balance} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;