import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  increment = () => {
    if (this.state.toggle) {
      this.setState((lastState) => ({
        counter: lastState.counter + 1,
      }));
    }
  };

  toggle = () => {
    this.setState((lastState) => ({
      toggle: !lastState.toggle,
    }));
  };

      render(){
        console.log("This is Simple Component")
        return(
            <div>
                <h1>Simple Component</h1>
                <p>{this.state.counter}</p>

                <button onClick={this.toggle}   style={{
            backgroundColor: this.state.toggle ? 'green' : 'red',
          }}>Toggle</button>
                
                <button onClick={this.increment}>Counter</button>
            </div>
        );
      }
    }
export default SimpleCounterComponent;
