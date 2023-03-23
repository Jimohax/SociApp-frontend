import React from 'react'
import Post from '../../components/Posts/Post'
import Profile from '../../components/profile/Profile'
import Trend from '../../components/Trend/Trend'

import './Home.css'

function Home() {
  return (
        <div className="home">
            <Profile/>
            <Post/>
            <Trend/>
        </div>
  )
}

export default Home