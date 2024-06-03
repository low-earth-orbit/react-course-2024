import { useState } from "react";

import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
    setPosts((existingPost) => [postData, ...existingPost]); // update state if new state depends on previous state
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
