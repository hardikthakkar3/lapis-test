export const environment = {
  production: false,
  appApi: {
    baseUrl: 'https://reqres.in/api'
  },
  socketConfig: {
    url: 'https://reqres.in',
    opts: {
      transports: ['websocket']
    }
  }
};
