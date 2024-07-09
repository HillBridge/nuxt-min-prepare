export default defineEventHandler(async (event) => {
  const { type, token } = getQuery(event)
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
  // if (type === 'delete') {
  //   return await clearUserSession(event)
  // }
});
