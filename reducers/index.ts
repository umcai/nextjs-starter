import * as types from '../constants/index'
import initialState from './initialState'

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.FETCH_HOME_DATA_REQUEST:
      return state.merge({
        isFetchingHomeData: true
      })
    case types.FETCH_HOME_DATA_SUCCESS:
      return state.merge({
        data: payload,
        isFetchingHomeData: false
      })
    case types.FETCH_HOME_DATA_FAILURE:
      return state.merge({
        isFetchingHomeData: false
      })
    default:
      return state;
  }
}
