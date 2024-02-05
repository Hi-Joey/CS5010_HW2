import React, { useState } from "react";

function CreatePost(props) {
  const [post, setPost] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  }

  function handleClick(event) {
    console.log("click", post);
    props.onAddPost(post);
    setPost({ title: "", content: "" });
    //event.preventDefault();
  }

  return (
    <div>
      <div className="mt-3 mb-3">
        <label htmlFor="Title" className="form-label">
          Enter Title
        </label>
        <input
          type="text"
          className="form-control"
          id="Title"
          placeholder="Title"
          name="title"
          onChange={handleChange}
          value={post.title}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Content" className="form-label">
          Enter content:
        </label>
        <textarea
          className="form-control"
          id="Content"
          rows={3}
          type="text"
          name="content"
          placeholder="Write yout post content"
          onChange={handleChange}
          value={post.content}
        />
      </div>
      <div className="post_button">
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit"
          onClick={handleClick}
        />
      </div>

      {/* <form onSubmit={handleClick}>
        <label>
          Enter Title:
          <br />
          <textarea
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={post.title}
          ></textarea>
        </label>
        <br />
        <label>
          Enter content:
          <br />
          <textarea
            type="text"
            name="content"
            placeholder="Write yout post content"
            onChange={handleChange}
            rows={3}
            value={post.content}
          ></textarea>
        </label>
        <br />

        <button type="submit">Post</button>
      </form> */}
    </div>
  );
}

export default CreatePost;
