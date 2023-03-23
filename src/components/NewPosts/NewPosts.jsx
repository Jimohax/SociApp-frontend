import React from 'react'
import './NewPosts.css'

import NewPost from '../NewPost/NewPost'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getTimelinePosts } from '../../Actions/PostAction'
import { useParams } from 'react-router-dom'

const NewPosts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.AuthReducer.authData)
  let {posts, loading} = useSelector((state)=> state.PostReducer )
  const params = useParams()

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  }, []);
  if(!posts) return "NO POSTS"
  
  if(params.id) posts = posts.filter((post)=> post.userId == params.id)
  return (
    <div className="NewPosts">
         {loading? "Fetching posts..." :
         posts.map((post, id)=>{
            return <NewPost 
            data={post}
            id={id}
            />
         })}
    </div>
  )
}

export default NewPosts