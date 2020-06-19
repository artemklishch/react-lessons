import React, { Component } from "react";
import styles from "./PostCommentsBlock.css";
import PostComments from "./PostComments/PostComments.jsx";

class PostCommentsBlock extends Component {
  state = {
    isOpenComments: false,
    comments: [],
  };
  handleToggleComments = () => {
    this.setState({
      isOpenComments: !this.state.isOpenComments,
    });
  };
  onAddComment = (name, text) => {
    const newComment = {
      name,
      text,
      createDate: new Date(),
    };
    const updatedComments = [...this.state.comments];
    updatedComments.unshift(newComment);
    this.setState({
      comments: updatedComments,
    });
  };
  onDeleteComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(
        (comment) => comment.createDate !== id
      ),
    });
  };
  // onEditComment = id => {

  // }
  render() {
    return (
      <div className={styles["wrapper-block"]}>
        {this.state.isOpenComments ? (
          <PostComments
            post={this.props.post}
            handleToggleComments={this.handleToggleComments}
            onAddComment={this.onAddComment}
            onDeleteComment={this.onDeleteComment}
            comments={this.state.comments}
          />
        ) : (
          <div
            onClick={this.handleToggleComments}
            className={styles["open-comments"]}
          >
            Comments, {this.state.comments.length}
          </div>
        )}
      </div>
    );
  }
}

export default PostCommentsBlock;
 