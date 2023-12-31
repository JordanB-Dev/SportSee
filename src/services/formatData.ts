/* eslint-disable @typescript-eslint/ban-ts-comment */
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

export const formatPerformance = (data: {
  data: { kind: number; value: number }[]
}) => {
  const formattedKind = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  }

  return data.data.map((perf) => {
    return {
      // @ts-ignore
      category: formattedKind[perf.kind],
      value: perf.value,
    }
  })
}
