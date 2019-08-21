import React from 'react'
import styled from 'styled-components'
import theme from '../config/theme'
import { Flex } from 'rebass'

import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import { connect } from 'react-redux'

const LayoutRoot = styled(Flex)`
  background: ${theme.color.white};
  overflow: hidden;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const Layout = ({ children }) => (
  <LayoutRoot>
    {children}
  </LayoutRoot>
)

Layout.propTypes = {}

const mapStateToProps = state => {
  const {  } = state.toJS()
  return {

  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
