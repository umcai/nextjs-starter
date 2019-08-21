import api from '../../config/api'
import crypto from '../../utils/crypto'
import requestInstance from './requestInstance'

export default async (req, res) => {
  const {
    status,
    data,
  } = await requestInstance.get(api)
  return res.status(status).json(data)
}
