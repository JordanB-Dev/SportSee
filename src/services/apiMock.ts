import { formatActivity, formatPerformance, formatSession } from './formatData'

export const getUser = async (id?: string) => {
  try {
    const res = await fetch('../../mocks/main_data.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const result = await res.json()
    return result.find((user: { id: string }) => user.id == id).userInfos
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
    const result = await res.json()
    return formatActivity(
      result.find((user: { userId?: number }) => user.userId == id).sessions,
    )
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}

export const getUserSession = async (id?: string) => {
  try {
    const res = await fetch('../../mocks/average_sessions.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const result = await res.json()
    return formatSession(
      result.find((user: { userId?: number }) => user.userId == id).sessions,
    )
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}

export const getUserPerformance = async (id?: string) => {
  try {
    const res = await fetch('../../mocks/performance.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const result = await res.json()

    return formatPerformance(
      result.find((perf: { userId: string }) => perf.userId == id),
    )
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}
