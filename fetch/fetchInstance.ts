/**
 * @author QIN Fen
 * @email hellowd93@gmail.com
 * @create date 2019-07-22 18:33:04
 * @modify date 2019-07-22 18:33:04
 * @desc fetch /pages/api, browser env
 */
import axios from 'axios'

export default axios.create({
  baseURL: `/api`,
  validateStatus: status => {
    if ((status >= 200) && (status < 300)) {
      return true
    } else {
      console.error('Fetching data failed')
      // alert('browser fetch failed')
      // handleError(status)
    }
  },
})
