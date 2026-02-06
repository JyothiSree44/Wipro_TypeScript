import React, { Component, createRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

class StockDashboard extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
      price: null,
      theme: "light"
    };

    this.previousSearches = createRef(); // uncontrolled
  }

  componentDidMount() {
    socket.on("stockUpdate", data => {
      this.setState({ price: data.price });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.symbol !== this.state.symbol) {
      console.log("Stock symbol updated:", this.state.symbol);
    }
  }

  handleChange = e => {
    this.setState({ symbol: e.target.value });
  };

  addSearch = () => {
    const li = document.createElement("li");
    li.innerText = this.state.symbol;
    this.previousSearches.current.appendChild(li);
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    });
  };

  render() {
    return (
      <div className={`card p-4 ${this.state.theme}`}>
        <h2>📈 Stock Dashboard</h2>

        {/* Controlled Component */}
        <input
          className="form-control mb-2"
          placeholder="Enter Stock Symbol"
          value={this.state.symbol}
          onChange={this.handleChange}
        />

        <button className="btn btn-primary mb-3" onClick={this.addSearch}>
          Save Symbol
        </button>

        <h4>Live Price: ₹{this.state.price}</h4>

        {/* Uncontrolled Component */}
        <h5 className="mt-3">Previous Searches</h5>
        <ul ref={this.previousSearches}></ul>

        {/* Bonus */}
        <button
          className="btn btn-secondary mt-3"
          onClick={this.toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    );
  }
}

export default StockDashboard;
