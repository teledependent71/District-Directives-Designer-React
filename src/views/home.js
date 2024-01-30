import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Directives Designer</title>
        <meta property="og:title" content="District Directives Designer" />
      </Helmet>
    </div>
  )
}

export default Home
