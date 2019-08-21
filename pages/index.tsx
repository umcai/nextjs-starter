import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Helmet from '../components/Helmet'

type P = {
  data: object
}

class Index extends React.Component<P> {
  static getInitialProps({ store, isServer }) {
    // console.log(store, isServer)
    return null
  }

  render() {
    return (
      <Layout>
        <Helmet />
        <Home />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  const { } = state.toJS()
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
