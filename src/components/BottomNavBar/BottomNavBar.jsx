import React,{useEffect} from 'react'
import "./BottomNavBar.css"
import { Link } from 'react-router-dom'

function BottomNavBar() {

  useEffect(()=>{
    if(window.location.pathname==="/"){
      document.getElementById("home-icon").classList.add("raised")
      document.getElementById("leader-icon").classList.remove("raised")
      document.querySelector(".home-txt").classList.add("txt-raised")
      document.querySelector(".leader-txt").classList.remove("txt-raised")
    }else if(window.location.pathname==="/leader-board"){
      document.getElementById("leader-icon").classList.add("raised")
      document.getElementById("home-icon").classList.remove("raised")
      document.querySelector(".leader-txt").classList.add("txt-raised")
      document.querySelector(".home-txt").classList.remove("txt-raised")
    }
   },[window.location.pathname])

  return (
    <div className='whole-bottom-nav'>
    <div className='bottom-nav'>
      <Link to="/" className='icons' id='home'>
        <ion-icon name="home-outline" id="home-icon"></ion-icon>
        <p className='home-txt'>Home</p>
      </Link>
      <div className='icons' id='task' onClick={()=>alert("Cooming Soon")}>
        <ion-icon name="clipboard-outline" id="task-icon"></ion-icon>
        <p className='task-txt'>Task</p>
      </div>
      <div className='icons' id='create' onClick={()=>alert("Cooming Soon")}>
        <ion-icon name="add-circle-outline" id="create-icon"></ion-icon>
        <p className='create-txt'>Create Task</p>
      </div>
      <div className='icons'id='manage' onClick={()=>alert("Cooming Soon")}>
        <ion-icon name="settings-outline" id="manage-icon"></ion-icon>
        <p className='manage-txt'>Manage Task</p>
      </div>
      <Link to="/leader-board" className='icons' id='leader'>
        <ion-icon name="podium-outline" id="leader-icon"></ion-icon>
        <p className='leader-txt'>Leader Board</p>
      </Link>
    </div>
    </div>
  )
}

export default BottomNavBar