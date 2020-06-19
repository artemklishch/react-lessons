import React, { Component } from "react";
import styles from "./Comment.css";
import ChangeCommentForm from "../ChangeCommentForm/ChangeCommentForm";
import { resetHistory } from "sinon";

class Comment extends Component {
  state = {
    date: new Date(this.props.createDate).toLocaleDateString(),
    isShowChangeForm: false,
  };
  onShowChangeForm = () => {
    this.setState({
      isShowChangeForm: !this.state.isShowChangeForm,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles["comment-block"]}>
          {this.state.isShowChangeForm && (
            <ChangeCommentForm
              comment={this.props}
              onShowChangeForm={this.onShowChangeForm}
            />
          )}
          <p className={styles["comment-text"]}>{this.props.text}</p>
          <div className={styles["comment-data-block"]}>
            <span className={styles["comment-data"]}>
              Comment was written by {this.props.name}
            </span>
            <span className={styles["comment-data"]}>
              Created: {this.state.date}
            </span>
          </div>
          <div className={styles["comment-btns-block"]}>
            <button
              onClick={this.onShowChangeForm}
              className={styles["comment-btn"]}
            >
              Edit comment
            </button>
            <button
              onClick={() => this.props.onDeleteComment(this.props.createDate)}
              className={styles["comment-btn"]}
            >
              Delete comment
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Comment;
