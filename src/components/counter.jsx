import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //handle the onClick event to increment the counter
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/*<ul>*/}
        {/*{this.state.tags.map(tag => (*/}
        {/*<li key={tag}>{tag}</li>*/}
        {/*))}*/}
        {/*</ul>*/}
      </div>
    );
  }

  //set the badge classes
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  //format the counter
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
