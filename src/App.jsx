import React, { Component, useState } from "react";
import Nav from "./components/Nav";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  function addPosts(post) {
    console.log("add", post);
    setPosts([...posts, post]);
  }

  return (
    <div className="contaner">
      <Nav></Nav>
      <CreatePost onAddPost={addPosts}></CreatePost>
      <h1>Post</h1>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <Post
                id={index}
                key={index}
                title={post.title}
                content={post.content}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
