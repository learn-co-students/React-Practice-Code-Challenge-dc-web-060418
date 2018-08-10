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

  handleSushiRotation = () => {
    if (this.state.sliceY >= this.state.sushiList.length) {
      this.setState({sliceX: 0, sliceY: 4})
    } else {
      this.setState({sliceX: (this.state.sliceX + 4), sliceY: (this.state.sliceY + 4)})
    }
  }

  addToEatenSushiList = (sushi) => {
    if (!this.state.eatenSushi.includes(sushi)){
      this.setState({eatenSushi: [...this.state.eatenSushi, sushi], wallet: (this.state.wallet - sushi.price)})
    }
  }

  addMoneyToWallet = (e) => {
    e.preventDefault()
    // console.log(e.target.addAmount.value)
    this.setState({wallet: this.state.wallet + parseInt(e.target.addAmount.value)})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.state.sushiList.slice(this.state.sliceX, this.state.sliceY)}
          moreButton={this.handleSushiRotation}
          ateSushi={this.addToEatenSushiList}
          currentWallet={this.state.wallet}
          eatenSushi={this.state.eatenSushi}
        />
      <Table
        eatenSushi={this.state.eatenSushi}
        wallet={this.state.wallet}
        addMoneyToWallet={this.addMoneyToWallet}
      />
      </div>
    );
  }
}

export default App;
