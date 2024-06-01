import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

function PostList(props) {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Max" body="React is awesome!" />
        <Post author="Manual" body="Check out the course!" />
      </ul>
    </>
  );
}

export default PostList;
