import { formatActivity } from './formatData'

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

export const getUserActivity = async (id?: string) => {
  try {
    const res = await fetch(`${env.VITE_URL_API}/user/${id}/activity`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const result = await res.json()
    return formatActivity(result.data.sessions)
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}

export const getUserSession = async (id?: string) => {
  try {
    const res = await fetch(`${env.VITE_URL_API}/user/${id}/average-sessions`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const result = await res.json()
    return result.data.sessions
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}
