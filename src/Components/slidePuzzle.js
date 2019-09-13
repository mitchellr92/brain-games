import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./slidePuzzle";

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

    
}
