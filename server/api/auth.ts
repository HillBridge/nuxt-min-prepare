
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  await setUserSession(event, {
    user: {
      t: query?.t
    },
  })
});
