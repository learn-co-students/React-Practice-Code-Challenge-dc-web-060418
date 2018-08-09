import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushiList: [],
      sliceX: 0,
      sliceY: 4,
      eatenSushi: [],
      wallet: 100
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(json => {
        this.setState({sushiList: json})
      })
  }

  getMoreSushi = () => {
    this.setState({sliceX: (this.state.sliceX + 4), sliceY: (this.state.sliceY + 4)})
  }

  addToEatenSushiList = (sushi) => {
    if (!this.state.eatenSushi.includes(sushi)){
      this.setState({eatenSushi: [...this.state.eatenSushi, sushi], wallet: (this.state.wallet - sushi.price)})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.state.sushiList.slice(this.state.sliceX, this.state.sliceY)}
          moreButton={this.getMoreSushi}
          ateSushi={this.addToEatenSushiList}
          currentWallet={this.state.wallet}
        />
      <Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
