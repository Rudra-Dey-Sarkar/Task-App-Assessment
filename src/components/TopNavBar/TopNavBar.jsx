import React from 'react'
import "./TopNavBar.css"

function TopNavBar() {
  return (
    <div className='top-nav-whole'>
        <p id='logo'>Home</p>
        <div className='top-nav'>
        <p id="m1-icon"><ion-icon name="gift-outline"></ion-icon>10</p>
        <p id="m1">₹0.00</p>
        <p id="m2">₹1000</p>
        <ion-icon name="person-outline" id="user-icon"></ion-icon>
        </div>
    </div>
  )
}

export default TopNavBar