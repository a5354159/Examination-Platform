import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { inject, observer } from "mobx-react";
// console.log(observer)
@inject("count", "ordev")
@observer
class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={() => this.props.count.changeCount("+")}>+</button>
        <span>{this.props.count.count}</span>
        <button onClick={() => this.props.count.changeCount("-")}>-</button>
      </div>
    );
  }
}

export default App;
