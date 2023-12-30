export type TypeUser = {
  firstName?: string
}

export type TypeFormatActivity = {
  kilogram: number
  calories: number
  day: number
}[]

export type TypeActivity =
  | {
      day: number
      kilogram: number
      calories: number
    }[]
  | undefined

export type TypeTooltip = {
  active: boolean
  payload: {
    value: number
  }[]
}
