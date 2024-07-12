export default defineEventHandler(async (event) => {
    // const cookies = parseCookies(event)
    const type = getRouterParam(event, 'type')
    const { token } = getQuery(event)
    // console.log('动态路由', cookies)
    if (type === 'set') {
      return await setUserSession(event, {
        user: {
          t: token
        },
      })
    }
    if (type === 'get') {
      return await getUserSession(event)
    }
  });