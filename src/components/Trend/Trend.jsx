import React from 'react'
import './Trend.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import { useState } from 'react'
import {Link} from 'react-router-dom'

import { ShareModal } from '../ShareModal/ShareModal'

const Trend = () => {
  const [modalOpened, setModalOpened] = useState(false)

  return (

    <div className="Trend">
        <div className="NavIcons">
          <Link to= '../home'>
          <img src={Home} alt="" />
          </Link>
            
            <UilSetting/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />

        </div>
        <TrendCard/>
        <button className="button r-button" onClick={()=>setModalOpened(true)} >
        
          Share
        </button>
        <ShareModal 
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            />
    </div>
  )
}

export default Trend