import React, { Component } from "react";
import { Link } from "react-router-dom";
import bg from "../16_9.jpg";

class Page extends Component {
  state = {};
  render() {
    return (
      <div className="blog-page container-{brealpoint}">
        <h1>Hello World</h1>
        <img src={bg} alt="" className="img-fluid" />
        <form onSubmit={this.handleSubmit}>
          <label>
            Start your blog here...
            <p>
              <textarea
                onChange={this.handleChange}
                className="textarea"
                value={this.state.text}
              />
            </p>
          </label>
          <p>
            <input type="submit" value="Submit" className="sub-b" />
          </p>
        </form>
        <button onClick={this.handleDelete} className="del-b">
          Delete
        </button>
      </div>
    );
  }
}

export default Page;
