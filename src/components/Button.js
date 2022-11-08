import React from "react"

function Button({upvotes, downvotes, votes, emoji, setUpvotes, setDownvotes}) {
  return (
    <button
    onClick = {(e) => {
      if(upvotes) {
        setUpvotes(() => upvotes + 1)
      }
      if(downvotes) {
        setDownvotes(() => downvotes + 1)
      }
    }}
    >{`${votes} ${emoji}`}</button>
  )
}

export default Button