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

export type TypeFormatSession = {
  day: string
  sessionLength: number
}[]

export type TypeSession =
  | {
      day?: string | number
      value: number
    }[]
  | undefined

export type TypeCursor = {
  points: {
    x: number
    y: number
  }[]
  width: number
  height: number
}

export type TypePerformance =
  | {
      category: string
      value: number
    }[]
  | undefined

export type TypeCard = {
  lipidCount?: number
  carbohydrateCount?: number
  proteinCount?: number
  calorieCount?: number
  userKeyData?: number
  className: string
  subtitle: string
  logo: string
  unit: string
}
