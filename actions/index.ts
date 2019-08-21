import * as types from '../constants/index'
import fetch from '../fetch'

export const fetchData = () => async dispatch => {
    dispatch({
        type: types.FETCH_HOME_DATA_REQUEST
    })
    const data = await fetch.home().catch(() => {
      dispatch({
        type: types.FETCH_HOME_DATA_FAILURE
      })
    })
    dispatch({
        type: types.FETCH_HOME_DATA_SUCCESS,
        payload: data
    })
}

