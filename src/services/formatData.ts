import { TypeFormatActivity } from '../Types'

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
