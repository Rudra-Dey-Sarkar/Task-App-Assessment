import React, { useEffect } from 'react'
import "./LeaderBoard.css"
import Countdown from 'react-countdown';


function BtnActivate(e) {
    if (e.id === "daily") {
        e.classList.add("lb-btns-active");
        document.getElementById("weekly").classList.remove("lb-btns-active");
        document.getElementById("monthly").classList.remove("lb-btns-active");
    } else if (e.id === "weekly") {
        e.classList.add("lb-btns-active");
        document.getElementById("daily").classList.remove("lb-btns-active");
        document.getElementById("monthly").classList.remove("lb-btns-active");
    } else {
        e.classList.add("lb-btns-active");
        document.getElementById("daily").classList.remove("lb-btns-active");
        document.getElementById("weekly").classList.remove("lb-btns-active");
    }
}

function LeaderBoard() {
    useEffect(() => {
        document.getElementById("daily").classList.add("lb-btns-active");
    }, [])
    return (
        <div className='leader-board-body'>

            <div id='user-all'>
                <div className='dp-n-r'>
                    <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                    <div>
                        <p className='n'>You</p>
                    </div>
                </div>
                <p className='u-po'>0</p>
            </div>

            <div className='lb-btns'>
                <p id='daily' onClick={(e) => { BtnActivate(e.target) }}>Daily</p>
                <p id='weekly' onClick={(e) => { BtnActivate(e.target) }}>Weekly</p>
                <p id='monthly' onClick={(e) => { BtnActivate(e.target) }}>Monthly</p>
            </div>

            <div className='leader-board'>

                <div id='gb'>
                    <ion-icon name="gift-outline" id="gb-icon"></ion-icon>
                </div>

                <div id='user1' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div>
                        <p className='user1-t1'>2</p>
                        <p className='user1-t2'>▼</p>
                        <div id='user1-icon'>
                            <ion-icon name="person-outline"></ion-icon>
                        </div>
                        <p className='user1-t3'>User1</p>
                        <p className='user1-t4'>100</p>
                        <p className='user1-t5'>Prize:- ₹10</p>
                    </div>
                </div>

                <div id='user2' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div>
                        <p className='user2-t1'>1</p>
                        <div id='trophy-icon'>
                            <ion-icon name="trophy-outline"></ion-icon>
                        </div>
                        <div id='user2-icon'>
                            <ion-icon name="person-outline" ></ion-icon>
                        </div>
                        <p className='user2-t2'>User2</p>
                        <p className='user2-t3'>100</p>
                        <p className='user2-t4'>Prize:- ₹10</p>
                    </div>
                </div>

                <div id='user3' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div>
                        <p className='user3-t1'>3</p>
                        <p className='user3-t2'>▼</p>
                        <div id='user3-icon'>
                            <ion-icon name="person-outline" ></ion-icon>
                        </div>
                        <p className='user3-t3'>User3</p>
                        <p className='user3-t4'>100</p>
                        <p className='user3-t5'>Prize:- ₹10</p>
                    </div>
                </div>

                <div id='time'>
                    <ion-icon name="timer-outline" id='time-icon'></ion-icon>
                </div>
            </div>

            <div id='info'>
                <div className='close'>
                    <p id='close-btn' onClick={() => document.getElementById("info").style.display = "none"}>Close</p>
                </div>
                <ion-icon name="person-outline" id="info-dp"></ion-icon>
                <div className='info-user'>
                    <p className='p1'>User</p>
                    <p className='p2'>@user007</p>
                    <div>
                        <ion-icon name="male-outline" id="male"></ion-icon>
                        <p className='p3'>Male</p>
                    </div>
                </div>
                <p className='p4'>India</p>
                <p className='p5'>Member Since :- Thu Sep 02 2024</p>

                <div className='info-stats'>
                    <div className='stats1'>
                        <p>Daily</p>
                        <p>Weekly</p>
                        <p>Monthly</p>
                    </div>

                    <div className='stats2'>
                        <p>Points:- 100</p>
                        <p>Points:- 100</p>
                        <p>Points:- 100</p>
                    </div>

                    <div className='stats3'>
                        <p>10</p>
                        <p>10</p>
                        <p>10</p>
                    </div>
                </div>
            </div>

            <div id="timer">
                <Countdown date={Date.now() + 10000000} />
            </div>

            <div className='users'>
                <div id='user-all' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User4</p>
                            <p className='r'>Rank:- 4</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹10</p>
                    <p className='u-po'>90</p>
                </div>

                <div id='user-all' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User5</p>
                            <p className='r'>Rank:- 5</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹10</p>
                    <p className='u-po'>80</p>
                </div>

                <div id='user-all' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User6</p>
                            <p className='r'>Rank:- 6</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹10</p>
                    <p className='u-po'>70</p>
                </div>

                <div id='user-all' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User7</p>
                            <p className='r'>Rank:- 7</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹10</p>
                    <p className='u-po'>60</p>
                </div>

                <div id='user-all' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User8</p>
                            <p className='r'>Rank:- 8</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹10</p>
                    <p className='u-po'>50</p>
                </div>

                <div id='user-all' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User9</p>
                            <p className='r'>Rank:- 9</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹10</p>
                    <p className='u-po'>40</p>
                </div>

                <div id='user-all' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User10</p>
                            <p className='r'>Rank:- 10</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹10</p>
                    <p className='u-po'>30</p>
                </div>

                <div id='user-all' onClick={() => document.getElementById("info").style.display = "grid"}>
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User11</p>
                            <p className='r'>Rank:- 11</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹10</p>
                    <p className='u-po'>20</p>
                </div>

                <div id='user-all' >
                    <div className='dp-n-r'>
                        <ion-icon name="person-outline" id="user-all-icon"></ion-icon>
                        <div>
                            <p className='n'>User12</p>
                            <p className='r'>Rank:- 12</p>
                        </div>
                    </div>
                    <p className='u-pr'>Prize:- ₹12</p>
                    <p className='u-po'>20</p>
                </div>
            </div>

        </div>
    )
}

export default LeaderBoard