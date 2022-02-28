import React, { Component } from "react";

class Login extends Component {
  state = {
    count: 0,
    names:[]
  };

  render() {
    let addbuttonClass = this.setAddbuttonclass();
    let deletebuttonClass = this.setDeletebuttonclass();


    return (
      <React.Fragment>
        <h1>{this.state.count}</h1>
        <button className={addbuttonClass} onClick={this.increment}>
          add
        </button>
        <button className={deletebuttonClass}  disabled={this.state.count===0} onClick={this.decrement}>
          delete
        </button>
        <ul>
          {this.state.names.map(name=><li key={name}>{name}</li>)}
        </ul>
      </React.Fragment>
    );
  }

  increment = () => {
    let { count,names } = this.state;
    count = count + 1;
    names= [...names,count];
    
    this.setState({
      count: count,
      names:names
    });
  };

  decrement = () => {
    let { count,names } = this.state;
    count = count -1;
    names= [...names.slice(0,-1)];
    
    this.setState({
      count: count,
      names:names
    });
  };

  setAddbuttonclass() {
    let buttonClass = "btn btn-";
    buttonClass += this.state.count === 0 ? "primary mr-1" : "secondary mr-1";
    return buttonClass;
  }

  setDeletebuttonclass() {
    let buttonClass = "btn btn-";
    buttonClass += this.state.count === 0 ? "danger mr-1 btn-lg" : "danger mr-1 ";
    return buttonClass;
  }
}

export default Login;
