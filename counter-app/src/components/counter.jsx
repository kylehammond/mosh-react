import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // // ONE way to bind event handlers
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   this.state.count++;
  //   console.log("Increment Clicked", this.state.count); // no access to this in this function
  // }

  // another way to bind event handlers - using arrow function
  handleIncrement = () => {
    this.state.count++;
    console.log("Increment Clicked", this.state.count); // no access to this in this function
  };

  // // a way to bind from https://reactjs.org/docs/handling-events.html  NOT RECOMMENDED
  // handleIncrement() {
  //   this.state.count++;
  //   console.log("Increment Clicked", this.state.count); // no access to this in this function
  // }
  // <button onClick={() => this.handleIncrement()} className="{btn btn-secondary btn-sm}">Increment</button>

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="{btn btn-secondary btn-sm}"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
