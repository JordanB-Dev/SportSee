const env = import.meta.env

export const getUser = async (id?: string) => {
  try {
    const res = await fetch(`${env.VITE_URL_API}/user/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const user = await res.json()
    return user.data.userInfos
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}
