/**
 * @author QIN Fen
 * @email hellowd93@gmail.com
 * @create date 2019-07-22 18:32:10
 * @modify date 2019-07-22 18:32:10
 * @desc request github api, node env
 */

import axios from 'axios'

export default axios.create({
  baseURL: ``,
  headers: {
  },
  validateStatus: status => {
    if ((status >= 200) && (status < 300)) {
      return true
    } else {
      console.log('Nodejs fetch failed')
      // alert('browser fetch failed')
      // handleError(status)
    }
  },
})
