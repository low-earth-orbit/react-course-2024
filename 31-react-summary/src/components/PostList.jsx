import { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList(props) {

   const [modalIsVisible, setModalIsVisible] = useState(true);
   const [enteredBody, setEnteredBody] = useState("");
   const [enteredAuthor, setEnteredAuthor] = useState("");

   function hideModalHandler() {
     setModalIsVisible(false);
   }

   function changeBodyHandler(event) {
     setEnteredBody(event.target.value);
   }

   function onAuthorChangeHandler(event) {
     setEnteredAuthor(event.target.value);
   }

   return (
     <>
       {modalIsVisible && (
         <Modal onClose={hideModalHandler}>
           <NewPost
             onBodyChange={changeBodyHandler}
             onAuthorChange={onAuthorChangeHandler}
           />
         </Modal>
       )}

       <ul className={classes.posts}>
         <Post author={enteredAuthor} body={enteredBody} />
         <Post author="Manual" body="Check out the course!" />
       </ul>
     </>
   );
}

export default PostList;
