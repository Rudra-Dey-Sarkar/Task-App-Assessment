import React from 'react'
import "./Task.css"
import { Link } from 'react-router-dom'

function Task() {
    return (
        <div className='task-body'>
            <p className='task-main-txt'>All Task</p>
            <Link to="/task-details" className='task'>Task 1</Link>
            <Link to="/task-details" className='task'>Task 2</Link>
            <Link to="/task-details" className='task'>Task 3</Link>
            <Link to="/task-details" className='task'>Task 4</Link>
            <Link to="/task-details" className='task'>Task 5</Link>
            <Link to="/task-details" className='task'>Task 6</Link>
        </div>
    )
}

export default Task