import React from 'react'
import NewPosts from '../NewPosts/NewPosts'
import PostShare from '../PostShare/PostShare'
import './Post.css'

const Post = () => {
  return (
    <div className="Post">
        <PostShare/>
        <NewPosts />
    </div>
  )
}

export default Post