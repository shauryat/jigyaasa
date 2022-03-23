import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <React.Fragment>
   
  <div className="PostCategoriesNav">
    {/* <Link className="NavLink" exact="true" to={`/post-categories/story-of-the-day/`}>
      SOTD
    </Link> */}

    {categories.filter(cat => cat.title !== "Story of The Day").map((category, index) => (
      <Link
        exact="true"
        className="NavLinky"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}

    {enableSearch && <BlogSearch />}
  </div>
  </React.Fragment>
)

export default PostCategoriesNav
