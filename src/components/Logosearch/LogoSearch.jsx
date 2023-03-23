import React from 'react'
import logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={logo}  alt="" />
        <div className="search">
            <input type="text" placeholder='#Explore' />
            <div className="SearchIcon"><UilSearch/></div>
        </div>
    </div>
  )
}

export default LogoSearch