import { formatActivity, formatPerformance, formatSession } from './formatData'

// fetch data of the user (name, lastname, etc...)
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

// fetch data of the user (kilogram, calories, etc...)
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

// fetch data for the average sessions chart
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

// fetch data for the performance chart
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

//fetch data for the score chart
export const getScore = async (id?: string) => {
  try {
    const res = await fetch('../../mocks/main_data.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const data = await res.json()

    return (
      data.find((score: { id?: number }) => score.id == id).todayScore * 100
    )
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}
// fetch data for the card Keydata
export const getKeyData = async (id?: string) => {
  try {
    const res = await fetch('../../mocks/main_data.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const result = await res.json()

    return result.find((key: { id?: number }) => key.id == id).keyData
  } catch (err) {
    console.log(JSON.stringify(err))
  }
}
