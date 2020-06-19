import React, { Component } from "react";
import styles from "./ChangeCommentForm.css";

class ChangeCommentForm extends Component {
  state = {
    formCommentText: "",
  };
  handleCommentText = (text) => {
    this.setState({
      formCommentText: text,
    });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    // this.props.onAddComment(
    //   this.props.formCommentName,
    //   this.state.formCommentText
    // );
  };
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.onSubmitForm} className={styles["add-comment-form"]}>
        <label htmlFor="text-comment">Text of Your comment</label>
        <textarea
          className={styles["comment-filed"]}
          name=""
          id="text-comment"
          onChange={(e) => this.handleCommentText(e.target.value)}
          value={this.state.formCommentText}
        ></textarea>
        <button className={styles["btn-add-comment"]} type="submit">
          Save
        </button>
        <button
          // onClick={this.props.onShowChangeForm}
          className={styles["btn-add-comment"]}
        >
          Deny
        </button>
      </form>
    );
  }
}

export default ChangeCommentForm;
