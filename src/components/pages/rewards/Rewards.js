// This is the Rewards page. 
import React from 'react';
import { Link } from 'react-router-dom';

import flowChart from "../../../reward-img/flow-chart.png";
import fb from "../../../sm-icon/fb-logo.jpeg";
import ig from "../../../sm-icon/ig-logo.jpeg";
import twit from "../../../sm-icon/twitter-logo.png";
import "./Rewards.css";

import Points from '../../Points.js';
import badgeData from "../../../reward-data/badgeData.js"

import lev1RedBadge from '../../../reward-img/lev 1 red badge.png';
import lev1OrangeBadge from '../../../reward-img/lev 1 orange badge.png';
import lev1YelBadge from '../../../reward-img/lev 1 yel badge.png';
import lev1GrnBadge from '../../../reward-img/lev 1 grn_badge.png';
import lev1BluBadge from '../../../reward-img/lev_1_blu_badge.png';
import lev1IndigoBadge from '../../../reward-img/lev 1 indigo badge.png';
import lev1VioBadge from '../../../reward-img/lev 1 vio badge.png';
import unicornBadge from '../../../reward-img/unicorn badge.png';

import arrowDownImage from '../../../reward-img/down_arrow.png'
import arrowUpImage from '../../../reward-img/up_arrow.png'
function Rewards(props) {
  // props.hideNavBar();

  const badgeImages = [
    lev1RedBadge,
    lev1OrangeBadge,
    lev1YelBadge,
    lev1GrnBadge,
    lev1BluBadge,
    lev1IndigoBadge,
    lev1VioBadge,
    unicornBadge,
  ];

  const arrowImages =  [
    { src: arrowDownImage, className: 'arrow-down' },
    { src: arrowUpImage, className: 'arrow-up' },
  ];

  const badgeNames = badgeData.map(badge => badge.name);
  
  return (
    <div className='rewards-page'>
      <section className="header">

        <section className="top">
          {/* <h4 className='earn-header'>earn</h4> */}
          <h1 className='reward-header'>rewards</h1>
        </section>
        
        <section className="badges-container">
        <div className='badge-info'>
          {badgeImages.map((badge, index) => (
            <React.Fragment key={index}>
              <div className={`badge-item ${index === badgeImages.length - 1 ? 'last-badge' : ''}`}>
                <img
                  src={badge}
                  alt={`Badge ${index + 1}`}
                  // style={{ width: '70px', height: '70px' }}
                />
                <h1 className='badge-names'>{badgeNames[index]}</h1>
              </div>
              {index < badgeImages.length - 1 && (
                <img
                src={arrowImages[index % arrowImages.length].src}
                alt={`Arrow ${index + 1}`}
                className={`arrow-image ${arrowImages[index % arrowImages.length].className}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
      </section>

      <section className="reward-intro">
        <section className="middle">
          {/* <h2 className='earn-two'>earn &nbsp;</h2> */}
          <h1 >Points & Badges:</h1>
        </section>
        <p className='reward-pg'>
          Empower change with our revolutionary charity rewards!
          Earn badges, unlock exclusive perks, and channel your generosity toward causes you're passionate about.
          Join a vibrant community dedicated to making a lasting impact.
          {/* Introducing a groundbreaking charity rewards system that not only fosters generosity but also cultivates a culture of continuous giving.
          Donors earn badges for their contributions through monetary donations.
          We bring an exclusive opportunity to make a meaningful impact on the charity of your choice.
          You now have a convenient and efficient way to direct your generosity to the causes that matter most to you.
          With each milestone achieved, participants unlock exclusive rewards such as personalized certificates of appreciation that can be posted to social media.
          This integrated rewards system not only acknowledges the altruistic endeavors of individuals but also fosters a sense of belonging and purpose within the community, creating a powerful cycle of giving and gratitude. */}
        </p>
        <ul className='points-info'>
          <li> Earn points based on each recorded purchase.</li>
          <li>Sign up and earn a badge</li>
          <li>2 points for every dollar spent over $100</li>
        </ul>
      </section>

      <div className='rewards-footer'>
        {/* <img src={flowChart} alt="flow chart" className='flow-chart' /> */}
        <div className='bottom'>
        <div className='donate-button'>
        <Link to= "/charities"><button className="donate-bttn-badges">DONATE </button></Link>

        </div>
        <div className="social-media">
          {/* <h4 className='share-with'>Share with</h4> */}
          <a href="#" className='social-tag'>
            <img src={fb} alt='fb-logo' width="12%" height="5%"></img>
            <img src={ig} alt='ig-logo' width="12%" height="5%"></img>
            <img src={twit} alt='twitter' width="12%" height="5%"></img>
          </a>
        </div>
      </div>
      </div>
    </div>

    
  );
}

export default Rewards;
