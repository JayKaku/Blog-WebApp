import React, { Component } from "react";
import "../home.css";
import { Link } from "react-router-dom";
import bg from "../16_9.jpg";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="bag">
        <img src={bg} alt="background" />
        <h2>PARTUM</h2>
        <p>where ideas come to life</p>

        <Link to="/category">
          <button>CREATE</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
