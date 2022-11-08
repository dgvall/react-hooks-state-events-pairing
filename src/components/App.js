import React, {useState} from "react"
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer"
import VideoInfo from "./VideoInfo"
import CommentBox from "./CommentBox"

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [commentStatus, setCommentStatus] = useState("Hide Comments")

  function changeComment() {
    if (commentStatus === "Hide Comments") {
      setCommentStatus("Show Comments")
    }
    if (commentStatus === "Show Comments") {
      setCommentStatus("Hide Comments")
    }
  }

  return (
    <div className="App">
      <VideoPlayer url = {video.embedUrl}/>
      <VideoInfo
      title = {video.title}
      views = {video.views}
      date = {video.createdAt}
      upvotes = {upvotes}
      downvotes = {downvotes}
      commentStatus = {commentStatus}
      setCommentStatus = {setCommentStatus}
      changeComment = {changeComment}
      setUpvotes = {setUpvotes}
      setDownvotes = {setDownvotes}
      />
      <CommentBox
      comments = {video.comments}
      commentStatus = {commentStatus}
      />
    </div>
  );
}

export default App;
