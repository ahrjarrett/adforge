import { IProject } from '../types'
import { breakPoints } from '../styles/mixins'

// returns a date with format 2019-03-30 to 03/30/2019
export const convertDateString = (str: string): string => {
  const [y, d, m] = [str.slice(0, 4), str.slice(5, 7), str.slice(8, 10)]
  return `${d}/${m}/${y}`
}

export const makeTagline = (tags: string[]): string => tags.join(' / ')

// String(2019-03-30) -> Number(20190330)
export const dateToInt = (YYYY_MM_DD: string): number => {
  const y = YYYY_MM_DD.slice(0, 4)
  const m = YYYY_MM_DD.slice(5, 7)
  const d = YYYY_MM_DD.slice(8, 10)
  return parseInt(y + m + d, 10)
}

export const dateSortFn = (a: IProject, b: IProject): number =>
  dateToInt(a.date) < dateToInt(b.date) ? 1 : -1

const aspectRatio = 1.5
const numColumns = 3
export const calculateHeight = (screenWidth: number) => {
  const outerGutters = screenWidth < breakPoints.lg ? screenWidth * 0.1 : 20
  const innerGutters = screenWidth < breakPoints.md ? 0 : 40
  const gutters = outerGutters + innerGutters
  const divisor = screenWidth <= breakPoints.md ? 1 : numColumns
  const height = (screenWidth - gutters) / divisor / aspectRatio
  return height
}
