import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";
const initialMoneyBalance = 100;

class App extends Component {
  state = {
    allSushis: [],
    currentSushiIndex: 0,
    // sushiEaten: false,
    // eatenSushis: [],
  };

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushiArray) =>
        this.setState({
          allSushis: sushiArray.map((sushi) => {
            return { ...sushi, eaten: false };
          }),
        })
      );
  }

  display4Sushis = () => {
    return this.state.allSushis.slice(
      this.state.currentSushiIndex,
      this.state.currentSushiIndex + 4
    );
  };

  next4Sushis = () => {
    this.setState({
      currentSushiIndex: this.state.currentSushiIndex + 4,
    });
  };

  eatSushi = (sushi) => {
    let newArray = this.state.allSushis;
    newArray.map((clickedSushi) => {
      if (clickedSushi === sushi) {
        clickedSushi.eaten = true;
        // console.log(clickedSushi);
        this.setState({
          allSushis: newArray,
        });
      }
      return clickedSushi;
    });
    // console.log(sushi);
  };

  sumOfEatenSushisPrice = () => {
    let eatenSushiArray = this.state.allSushis.filter(
      (sushi) => sushi.eaten === true
    );
    let eatenSushisPrice = eatenSushiArray.map((sushi) => sushi.price);
    let sumOfPrices = eatenSushisPrice.reduce((a, b) => a + b, 0);
    {
      return sumOfPrices;
    }
  };

  runEatSushi = () => {
    // return  (5 > 4 ? 5+4 : "No")
    return initialMoneyBalance > this.sumOfEatenSushisPrice()
      ? this.eatSushi()
      : "NO";
  };

  render() {
    // console.log(this.runEatSushi());

    // eatenSushis(this.eatenSushis());
    return (
      <div className="app">
        <SushiContainer
          fourSushis={this.display4Sushis()}
          next4Sushis={this.next4Sushis}
          eatSushi={this.eatSushi}
          // eatSushi={this.runEatSushi}
        />
        <Table
          allSushis={this.state.allSushis}
          sumOfEatenSushisPrice={this.sumOfEatenSushisPrice()}
          initialMoneyBalance={initialMoneyBalance}
        />
      </div>
    );
  }
}

export default App;
