import React, { useState } from 'react'
import './NewPost.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../API/PostRequest'



const NewPost = ({data}) => {

  const {user} = useSelector((state)=>state.AuthReducer.authData)

  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = ()=>{
    setLiked((prev)=> !prev)
    likePost(data._id, user._id)
    liked? setLikes((prev)=> prev -1) : setLikes((prev)=> prev +1)
  }

  return (
    <div className="NewPost">
        <img src={data.image?  process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

       

        <div className="postReact">
            <img src={liked? Like : NotLike} alt="" style={{Cursor:"pointer"}} onClick={handleLike} />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{color: "var(--gray)", fontSize:"12px"}}>{likes} likes</span>
        <div className="detail">
          <span><b>{data.name}</b></span>
          <span> {data.desc}</span>
          {/* <span> {data.image}</span> */}
          {/* {console.log(data.image)} */}
        </div>
        
    </div>
  )
}

export default NewPost