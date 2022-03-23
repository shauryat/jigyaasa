import React from 'react'
import './Footer.css'
import SocialButtonsContainer from 'react-social-media-buttons'

export default () => (
  <div>
    <div className="container">
      <h1 className="follow">Follow US</h1>
      <SocialButtonsContainer
        links={[
          'https://www.facebook.com/EconZest',
          // 'https://twitter.com/Twitter',
          'https://www.instagram.com/econzest/',
          'https://www.linkedin.com/company/econzest'
        ]}
        buttonStyle={{
          margin: '0px 10px',
          backgroundColor: '#00c2bd',
          borderRadius: '30%'
        }}
        iconStyle={{ color: '#fff' }}
        openNewTab={true}
      />
    </div>
    <footer className="footer">
      <div className="container">
        <span>© Copyright {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  </div>
)
