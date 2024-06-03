import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={changeBodyHandler}
            // onAuthorChange={onAuthorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Manual" body="Check out the course!" />
      </ul>
    </>
  );
}

export default PostList;
