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

  swapper = num => {
    if (num === "") return;
    let newNums = [...this.state.nums];
    //index 0
    if (this.state.nums.indexOf(num) === 0) {
      if (this.state.nums[1] === "") {
        let temp = newNums[0];
        newNums[0] = newNums[1];
        newNums[1] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[3] === "") {
        let temp = newNums[0];
        newNums[0] = newNums[3];
        newNums[3] = temp;
        this.setState({ nums: newNums });
      }
    }
    //index 1
    if (this.state.nums.indexOf(num) === 1) {
      if (this.state.nums[0] === "") {
        let temp = newNums[0];
        newNums[0] = newNums[1];
        newNums[1] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[2] === "") {
        let temp = newNums[1];
        newNums[1] = newNums[2];
        newNums[2] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[4] === "") {
        let temp = newNums[1];
        newNums[1] = newNums[4];
        newNums[4] = temp;
        this.setState({ nums: newNums });
      }
    }
    //index 2
    if (this.state.nums.indexOf(num) === 2) {
      if (this.state.nums[1] === "") {
        let temp = newNums[2];
        newNums[2] = newNums[1];
        newNums[1] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[5] === "") {
        let temp = newNums[2];
        newNums[2] = newNums[5];
        newNums[5] = temp;
        this.setState({ nums: newNums });
      }
    }
    //index 3
    if (this.state.nums.indexOf(num) === 3) {
      if (this.state.nums[0] === "") {
        let temp = newNums[3];
        newNums[3] = newNums[0];
        newNums[0] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[4] === "") {
        let temp = newNums[4];
        newNums[4] = newNums[3];
        newNums[3] = temp;
        this.setState({ nums: newNums });
      } else if (this.state.nums[6] === "") {
        let temp = newNums[6];
        newNums[6] = newNums[3];
        newNums[3] = temp;
        this.setState({ nums: newNums });
      }
    }
		//index 4
		if (this.state.nums.indexOf(num) === 4) {
			if (this.state.nums[1] === "") {
				let temp = newNums[4];
				newNums[4] = newNums[1];
				newNums[1] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[3] === "") {
				let temp = newNums[4];
				newNums[4] = newNums[3];
				newNums[3] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[5] === "") {
				let temp = newNums[4];
				newNums[4] = newNums[5];
				newNums[5] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[7] === "") {
				let temp = newNums[4];
				newNums[4] = newNums[7];
				newNums[7] = temp;
				this.setState({ nums: newNums });
			}
		}
		//index 5
		if (this.state.nums.indexOf(num) === 5) {
			if (this.state.nums[2] === "") {
				let temp = newNums[5];
				newNums[5] = newNums[2];
				newNums[2] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[4] === "") {
				let temp = newNums[5];
				newNums[5] = newNums[4];
				newNums[4] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[8] === "") {
				let temp = newNums[5];
				newNums[5] = newNums[8];
				newNums[8] = temp;
				this.setState({ nums: newNums });
			}
		}
		//index 6
		if (this.state.nums.indexOf(num) === 6) {
			if (this.state.nums[3] === "") {
				let temp = newNums[6];
				newNums[6] = newNums[3];
				newNums[3] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[7] === "") {
				let temp = newNums[6];
				newNums[6] = newNums[7];
				newNums[7] = temp;
				this.setState({ nums: newNums });
			}
		}
		//index 7
		if (this.state.nums.indexOf(num) === 7) {
			if (this.state.nums[6] === "") {
				let temp = newNums[7];
				newNums[7] = newNums[6];
				newNums[6] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[4] === "") {
				let temp = newNums[7];
				newNums[7] = newNums[4];
				newNums[4] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[8] === "") {
				let temp = newNums[7];
				newNums[7] = newNums[8];
				newNums[8] = temp;
				this.setState({ nums: newNums });
			}
		}
		//index 8
		if (this.state.nums.indexOf(num) === 8) {
			if (this.state.nums[5] === "") {
				let temp = newNums[8];
				newNums[8] = newNums[5];
				newNums[5] = temp;
				this.setState({ nums: newNums });
			} else if (this.state.nums[7] === "") {
				let temp = newNums[8];
				newNums[8] = newNums[7];
				newNums[7] = temp;
				this.setState({ nums: newNums });
			}
		}
  };

  render() {
    return (
      <div className="container">
        <div className="button" onClick={this.randomize}>Randomize</div>
        {this.setState.winner && <h2>Winner!</h2>}
        <div className="timer">Time: {this.state.timer} seconds</div>
        <div className="slideBoard">
          {this.state.nums.map((num, i) => {
            return (
              <div key={i} className="tile" onClick={() => this.swapper(num)}>
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
