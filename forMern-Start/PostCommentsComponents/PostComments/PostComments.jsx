import React from "react";
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import Comment from "../Comment/Comment.jsx";
import styles from "./PostComments.css";

const PostComments = (props) => {
  return (
    <React.Fragment>
      <AddCommentForm onAddComment={props.onAddComment} />
      {props.comments.map((comment) => (
        <Comment
          onDeleteComment={props.onDeleteComment}
          key={comment.createDate}
          {...comment}
        />
      ))}
      <div
        onClick={props.handleToggleComments}
        className={styles["collapse-comments"]}
      >
        Collapse comments
      </div>
    </React.Fragment>
  );
};

export default PostComments;
