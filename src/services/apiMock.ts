import { formatActivity } from './formatData'

export const getUser = async (id?: string) => {
  try {
    const res = await fetch('../../mocks/main_data.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await res.json()
    return data.find((user: { id: string }) => user.id == id).userInfos
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}

export const getUserActivity = async (id?: string) => {
  try {
    const res = await fetch('../../mocks/activity.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await res.json()
    return formatActivity(
      data.find((user: { userId?: number }) => user.userId == id).sessions,
    )
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}
