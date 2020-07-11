import React, { Component } from "react";

const Blogs = ({ blogs, handleDelete }) => {
  const allblogs = blogs.length ? (
    blogs.map((blog) => {
      return (
        <div className="collection-item" key={blog.id}>
          <span
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            {blog.text}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">Start creating</p>
  );
  return <div className="blogs collection">{allblogs}</div>;
};

export default Blogs;
