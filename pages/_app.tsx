import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../store/index'
import { fromJS } from 'immutable'
// import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import '../assets/style.css'
import theme from '../config/theme'
import setJs from '../utils/setJs'
import sdk from '../config/sdk'
import 'reflect-metadata'
import connection from '../db/connection'

type P = {
  store: object
}

class MyApp extends App<P, {}> {
  static async getInitialProps ({ Component, ctx }) {
    // 连接数据库
    connection()
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    return { pageProps }
  }

  componentDidMount() {

    // iconfont代码
    setJs.insert({
      name: 'iconfont',
      src: sdk.iconfont
    })

    // router event
    Router.events.on('routeChangeComplete', url => {
    })
  }



  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(MyApp)
