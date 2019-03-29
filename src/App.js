import React, { Component } from "react";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import "./config/reactotron";

class App extends Component {
  render() {
    console.tron.log("aaa");
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
