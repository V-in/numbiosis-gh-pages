import React from 'react'
import './Header.css'

class Header extends React.Component{
  render() {
    return(
      <div className="appHeader">
        <img className="logo" width={30} src={require('../../assets/icons/mini_logo.png')} />
      </div>
    )
  }
}

export default Header
