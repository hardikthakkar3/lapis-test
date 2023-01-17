export const environment = {
  production: true,
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
