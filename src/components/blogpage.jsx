import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Photography from "../photography.jpg";
import Blogs from "./blogs";
import SubmitBlog from "./submitblog";
//import "../blogpage.css";

class BlogPage extends Component {
  state = {
    title: null,
    blogs: [
      { id: 1, text: "hey there" },
      { id: 2, text: "hello world" },
    ],
  };

  componentDidMount = () => {
    const { handle } = this.props.match.params;

    fetch(`/${handle}`).then((title) => {
      this.setState({ title });
    });
  };

  handleDelete = (id) => {
    const blogs = this.state.blogs.filter((blog) => {
      return blog.id !== id;
    });
    this.setState({
      blogs,
    });
  };

  submitBlog = (blog) => {
    blog.id = Math.random();
    let blogs = [...this.state.blogs, blog];
    this.setState({
      blogs,
    });
  };

  render() {
    const { aboutProps } = this.props.location;
    if (aboutProps === undefined) {
      return <Redirect to="/category" />;
    }
    return (
      <div className="Blog">
        <h1 className="center blue-text">{aboutProps.name}</h1>
        <h2 className="center red-text">All Blogs</h2>
        <Blogs blogs={this.state.blogs} handleDelete={this.handleDelete} />
        <SubmitBlog submitBlog={this.submitBlog} />
      </div>
    );
  }
}

export default BlogPage;
