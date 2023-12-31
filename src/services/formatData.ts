import { TypeFormatActivity, TypeFormatSession } from '../Types'

export const formatActivity = (data: TypeFormatActivity) => {
  const dataFormated = data.map((activity, index: number) => {
    return {
      day: index + 1,
      kilogram: activity.kilogram,
      calories: activity.calories,
    }
  })
  return dataFormated
}

export const formatSession = (data: TypeFormatSession) => {
  const dataFormated = data.map((user) => {
    return {
      day: dayConverter(user.day),
      value: user.sessionLength,
    }
  })
  return dataFormated
}

export const dayConverter = (day: string | number) => {
  switch (day) {
    case 1:
      return 'L'
    case 2:
      return 'M'
    case 3:
      return 'M'
    case 4:
      return 'J'
    case 5:
      return 'V'
    case 6:
      return 'S'
    case 7:
      return 'D'
  }
  return
}
