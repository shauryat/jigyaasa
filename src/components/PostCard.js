import React from 'react'
import { Link } from 'gatsby'
import Image from './Image'
import { FiNavigation } from '@react-icons/all-files/fi/FiNavigation'
import { FiMic } from '@react-icons/all-files/fi/FiMic'

import './PostCard.css'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  author,
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    {featuredImage && (
      <div className="PostCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="PostCard--Content">
      {title && <h1 className="PostCard--Title">{title}</h1>}
      <div className="PostCard--Category">
        {categories &&
          categories
            .filter(cat => cat.category !== 'Story of The Day')
            .map(cat => cat.category)
            .join(', ')}
      </div>
      {/* // TODO imporve The css here */}

      <div className="dist">XX Kilometers away</div>

      <div className="iconz">
        <FiNavigation color="#39AEA9" size="30px" className="dir" />
        <FiMic color="#39AEA9" size="30px" />
      </div>
    </div>
  </Link>
)

export default PostCard
