import React from "react";

function Post(props) {
  return (
    <div className="mt-3 mb-3">
      {/* <li>
        <p>Title:{props.title}</p>
        <p>Content:{props.content}</p>
      </li> */}

      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-header" >
            {props.title}
          </h5>
          <p className="card-text">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
