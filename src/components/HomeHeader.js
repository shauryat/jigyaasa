import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './HomeHeader.css'

const HomeHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' HomeHeader-large'
  return (
    <div className={`HomeHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="HomeHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="HomeHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

HomeHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default HomeHeader