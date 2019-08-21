import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${ ({ theme }) => theme.color.secondaryFontHover };
  font-size: 14px;
  letter-spacing: 2px;
`

type P = {
  loading: boolean,
  children: any
}

const Loading: React.FunctionComponent<P> = props => {
  const { loading = false, children } = props
  return (
    loading ? <LoadingBox>加载中...</LoadingBox> : children
  )
}

Loading.propTypes = {
}

export default Loading

