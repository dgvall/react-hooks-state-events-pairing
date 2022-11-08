import React from "react"
import Comment from "./Comment"

function CommentBox({comments, commentStatus}) {
  return (
    <div>
      <h2>{`${comments.length} Comments`}</h2>
      {comments.map((comment) => {
        if (commentStatus === "Hide Comments") {
          return (
            <Comment
            key = {comment.id}
            user = {comment.user}
            comment = {comment.comment}
            />
            )
        }
      })}
    </div>
  )
}

export default CommentBox