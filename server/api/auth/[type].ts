export default defineEventHandler(async (event) => {
    const type = getRouterParam(event, 'type')
    const { token } = getQuery(event)
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