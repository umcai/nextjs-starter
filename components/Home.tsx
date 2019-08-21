import React from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import { connect } from 'react-redux'
import Helmet from '../components/Helmet'

type P = {
  data: object,
  fetchData: Function
}

class Home extends React.Component<P> {
  static getInitialProps({ store, isServer }) {
    // console.log(store, isServer)
    return null
  }

  componentDidMount() {
    this.props.fetchData()
  }


  render() {
    const { data } = this.props
    return (
      <>
        <Helmet title='首页' />
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state.toJS()
  return {
    data
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
