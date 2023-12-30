export const formatActivity = (data) => {
  const dataFormated = data.map((activity, index) => {
    return {
      day: index + 1,
      kilogram: activity.kilogram,
      calories: activity.calories,
    }
  })
  return dataFormated
}
