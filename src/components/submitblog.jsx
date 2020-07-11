import React, { Component } from "react";

class SubmitBlog extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitBlog(this.state);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Start your blog here...</label>
          <p>
            <input
              onChange={this.handleChange}
              className="textarea"
              value={this.state.text}
            />
          </p>
        </form>
      </div>
    );
  }
}

export default SubmitBlog;
