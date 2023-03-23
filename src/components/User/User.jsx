import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../Actions/UserAction';

const User = ({person}) => { 

    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.AuthReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id))
        
    const handleFollow = ()=>{
        following?
        dispatch(unFollowUser(person._id, user)): 
        dispatch(followUser(person._id, user)); 

        setFollowing ((prev)=>!prev)
    }

    const clicko = ()=>{
        console.log("Hey boss");
    }

  return (
    <div className="followers">
                    <div>
                        <img src={person.profilePicture? serverPublic + person.profilePicture : serverPublic + "profileimg.jpg"} alt="" className='followerImg' />
                        <div className="name">
                            <span>{person.firstname}</span>
                            <span>{person.username}</span>
                            <button onClick={clicko}>click</button>
                        </div>
                    </div>
                    <button className={following ?"button  fc-button unfollowButton": "button fc-button"} onClick={handleFollow}>{following?"Unfollow":"Follow"}</button>
                </div>
  )
}

export default User