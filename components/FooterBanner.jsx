import React,{useState} from 'react';
import Link from 'next/link';


import {urlFor} from '../lib/client';

//know your artist section
const FooterBanner = ({footerBanner:{discount,desc, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image}}) => {
  
  const [clicked, setClicked] = useState(false);

  const copyToClip = async()=> {
    setClicked(true)
    await navigator.clipboard.writeText('vanshika@gmail.com')
  }
  
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
        
          <h3>Know your artist</h3>
          <h4>Vanshika</h4>
       
        </div>
        <div className="right">
          <p>Contemporary artist based in India</p>
          <h3>Self-taught </h3>
          <p>Her sensitive observations about the digital landscape <br/> are sure to draw you in!</p>
          <p> You can place your requests via instagram or email </p>
          
          <button type="button" onClick={copyToClip}>{clicked ? 'Email Copied!'  :  'Contact'}</button>
        
        </div>
      
      </div>
      
      
    </div>
  )
}

export default FooterBanner
