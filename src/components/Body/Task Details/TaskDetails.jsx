import React from 'react'
import "./TaskDetails.css"

function TaskDetails() {
    return (
        <div className='task-details-main-body'>
            <div className='task-bar'>
                <p className='task-bar-p1'>Task To Complete</p>
                <p className='task-bar-p2'>100 Points</p>
            </div>

            <div className='task-board'>

               <div className='task-nav'>
                <p id='details-btn'>Details</p>
                <p id='earnings-btn'>Earnings</p>
                <p id='disclaimer'>Disclaimer</p>
               </div>

               <div id='details-tab'>
                <p className='task-mt'>Title</p>
                <p>Do The Task</p>
                <p className='task-mt'>Description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptates?</p>
                <div className='start'>
                <p className='task-mt'>Task Link :- </p>
                <p className='start-t'>Start Task</p>
                </div>
                <div className='points'>
                <p className='task-mt'>Points :-</p>
                <p className='points-t'>10</p>
                </div>
                <div className='select'>
                    <input type="file" />
                    <p className='select-p'>Submit</p>
                </div>
               </div>
            </div>
        </div>
    )
}

export default TaskDetails