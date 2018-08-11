import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.allSushi = [];
    this.state = {
      displayedSushi: [],
      customerMoney: 100,
      sushiEaten: [],
      currentSushiIndex: 0
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(sushiList => {
        this.allSushi = sushiList;
        this.setState({
          displayedSushi: this.newSushi()
        });
      });
  }

  eatSushi = price => {
    let newAmountofMoney = this.state.customerMoney - price;
    this.setState({
      customerMoney: newAmountofMoney
    });
    let sushiEaten = [...this.state.sushiEaten];
    sushiEaten.push(1);
    this.setState({
      sushiEaten: sushiEaten
    });
  };

  newSushi = () => {
    let displayedSushi = [];
    let currentIndex = this.state.currentSushiIndex;

    if (currentIndex >= 100) {
      currentIndex = 0;
    }

    for (let i = currentIndex; i < currentIndex + 4; i++) {
      displayedSushi.push(this.allSushi[i]);
      console.log("this.allSushi[i]", this.allSushi[i]);
    }
    this.setState({
      currentSushiIndex: currentIndex + 4
    });
    console.log(displayedSushi);
    return displayedSushi;
  };

  moreSushi = () => {
    let displayedSushi = this.newSushi();
    console.log(displayedSushi);
    this.setState({
      displayedSushi: displayedSushi
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          customerMoney={this.state.customerMoney}
          eatSushi={this.eatSushi}
          moreSushi={this.moreSushi}
          displayedSushi={this.state.displayedSushi}
        />
        <Table
          sushiEaten={this.state.sushiEaten}
          customerMoney={this.state.customerMoney}
        />
      </div>
    );
  }
}

export default App;
