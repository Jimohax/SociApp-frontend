import React from 'react' 
import './ProfileLeft.css'
import LogoSearch from '../Logosearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'


const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft