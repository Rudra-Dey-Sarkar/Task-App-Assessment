import React from 'react'
import "./HomePage.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '145px',
  borderRadius: "10px",
  zIndex:'1',
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

function HomePage() {
  return (
    <div className='home-body'>
      <div className='money-zone'>
        <div className='wallet'>
          <p className='mt1'>Wallet</p>
          <p className='mt2'>₹0 <ion-icon name="wallet-outline" id="wallet-icon"></ion-icon></p>
        </div>

        <div className='earnings'>
          <p className='mt1'>Earnings</p>
          <p className='mt2'>₹0 <label>$</label></p>
        </div>

        <div className='referrals'>
          <p className='mt1'>Referrals</p>
          <p className='mt2'>₹0 <ion-icon name="share-social-outline"></ion-icon></p>
        </div>
      </div>

      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className='social-task'>
        <p className='stt'>Social Media Task</p>
        <div className='social-task-apps'>

          <div className='social-task-apps1'>
            <Link to="/task" id='insta-task'>
              <ion-icon name="logo-instagram" id="insta-icon"></ion-icon>
              <p>Instagram</p>
            </Link>
            <Link to="/task" id='fb-task'>
              <ion-icon name="logo-facebook" id="fb-icon"></ion-icon>
              <p>Facebook</p>
            </Link>
            <Link to="/task" id='x-task'>
              <ion-icon name="logo-twitter" id="x-icon"></ion-icon>
              <p>X</p>
            </Link>
          </div>

          <div className='social-task-apps2'>
            <Link to="/task" id='yt-task'>
              <ion-icon name="logo-youtube" id="yt-icon"></ion-icon>
              <p>Youtube</p>
            </Link>
            <Link to="/task" id='tele-task'>
              <ion-icon name="paper-plane-outline" id='tele-icon'></ion-icon>
              <p>Telegram</p>
            </Link>
            <Link to="/task" id='li-task'>
              <ion-icon name="logo-linkedin" id='li-icon'></ion-icon>
              <p>Linkedin</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className='links'>
        <p className='lmt'>Share You Refer Link</p>

        <div className='links-all'>

          <div id='cl'>
            <ion-icon name="copy-outline" id="cl-icon"></ion-icon>
            <p>Copy Link</p>
          </div>

          <div id='wpl'>
            <ion-icon name="logo-whatsapp" id="wpl-icon"></ion-icon>
            <p>Whatsapp</p>
          </div>

          <div id='fbl'>
            <ion-icon name="logo-facebook" id="fbl-icon"></ion-icon>
            <p>Facebook</p>
          </div>

          <div id='tgl'>
            <ion-icon name="paper-plane-outline" id="tgl-icon"></ion-icon>
            <p>Telegram</p>
          </div>
        </div>
      </div>

      <div className='options'>
        <div id="opt1">
          <ion-icon name="diamond-outline" id="opt1-icon"></ion-icon>
          <p>Premium Membership</p>
        </div>
        <div id="opt2">
          <ion-icon name="people-outline" id="opt2-icon"></ion-icon>
          <p>My Leads</p>
        </div>
      </div>

      <div className='contacts'>
        <p>Connected With Us</p>
        <div className='contact-links'>
        <ion-icon name="logo-whatsapp" id="cwp-icon"></ion-icon>
        <ion-icon name="paper-plane-outline" id="ctg-icon"></ion-icon>
        <ion-icon name="logo-youtube" id="cyt-icon"></ion-icon>
        <ion-icon name="logo-twitter" id="ct-icon"></ion-icon>
        <ion-icon name="logo-instagram" id="cin-icon"></ion-icon>
        <ion-icon name="logo-facebook" id="cfb-icon"></ion-icon>
        </div>
      </div>

    </div>
  )
}

export default HomePage