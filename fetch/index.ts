import requestInstance from './fetchInstance'

interface IFetch {
  home: string
}

const fetch: IFetch = {
  // /pages/api/...
  home: `/home`,
}

export default {
  home: async () => (await requestInstance.get(fetch.home)).data
}
