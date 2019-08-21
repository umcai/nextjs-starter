import dayjs from 'dayjs'
import site from '../config/site'

export default (date = '') => dayjs(date).format(site.dateFormat)
