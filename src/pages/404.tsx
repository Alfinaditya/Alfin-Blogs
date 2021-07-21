import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

const NotFound = () => {
  return (
    <div>
      <Seo title={'404'} description={'Error 404'} />
      <h1>Error 404</h1>
      <Link to='/'>Back to Homepage</Link>
    </div>
  )
}

export default NotFound
