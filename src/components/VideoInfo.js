import React from "react"
import Button from "./Button"

function VideoInfo({title, views, date, upvotes, downvotes, commentStatus, setCommentStatus, changeComment, setUpvotes, setDownvotes}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{`${views} Views | Uploaded ${date}`}</p>
      <div>
        <Button upvotes = {upvotes} setUpvotes = {setUpvotes} votes = {upvotes} emoji = {"👍"}/>
        <Button downvotes = {downvotes} setDownvotes = {setDownvotes} votes = {downvotes} emoji = {"👎"}/>
      </div>
      <button
      onClick = {(e) => changeComment()}
      >{commentStatus}</button>
    </div>
  )
}

export default VideoInfo