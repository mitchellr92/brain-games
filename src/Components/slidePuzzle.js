import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./slidePuzzle.css";

class SlidePuzzle extends Component {
  constructor() {
    super();
    this.state = {
      nums: [1, 2, 3, 4, 5, 6, 7, "", 8],
      timer: 0,
      winner: false,
      intervalID: null
    };
  }

  componentDidMount() {
      this.randomize();
      this.startTimer();
  }

  componentDidUpdate() {
    if (
      [...this.state.nums] === [1, 2, 3, 4, 5, 6, 7, 8, ""] ||
      [...this.state.nums] === [3, 2, 1, 6, 5, 4, "", 8, 7]
    ) {
      this.setState({ winner: true });
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    if (!this.intervalID) {
      let intervalID = setInterval(() => {
        this.setTime();
      }, 1000);
      this.setState({ intervalID });
    }
  }

  stopTimer() {
    clearInterval(this.state.intervalID);
  }

  randomize = () => {
    this.setState({ timer: 0 });
    let newNums = [...this.state.nums];
    let randArr = [];
    let i = newNums.length;
    while (i > 0) {
      let randInt = this.findRandomNum(newNums);
      let randValue = newNums[randInt];
      newNums = newNums.filter(num => num !== randValue);
      randArr.push(randValue);
      i--;
    }
    this.setState({ nums: randArr });
  };

  findRandomNum = newNums => {
    let num = Math.floor(Math.random() * newNums.length);
    return num;
  };

  setTime = () => {
    let timer = this.state.timer + 1;
    this.setState({ timer });
  };

  render() {
    return (
      <div className="container">
        <div className="button">Randomize</div>
        {this.setState.winner && <h2>Winner!</h2>}
        <div className="timer">Time: {this.state.timer} seconds</div>
        <div className="slideBoard">
          {this.state.nums.map((num, i) => {
            return (
              <div key={i} className="tile">
                {num}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SlidePuzzle;
