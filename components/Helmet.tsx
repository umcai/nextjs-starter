import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import site from '../config/site'

export default props => {
  const { children = '', title = '' } = props
  return (
    <Helmet>
      <title>
        {title ? `${title} - ${site.title}` : site.title}
      </title>
      {children}
    </Helmet>
  )
}
