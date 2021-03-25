importReact, { Component } from 'react';
classAppextendsComponent{
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = amount=>()=>
  this.setState(prevState=>({
    count: prevState.count + amount,
  }));

  increment = this.makeIncrementer(1);

  render() {
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment"onClick={this.increment}>Increment
        count</button>
      </div>
      )
    }
  }
  exportdefaultApp;