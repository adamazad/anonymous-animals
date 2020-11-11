import animals from './animals.json'

export const get = (): string => animals[(animals.length * Math.random()) | 0]

export interface AnonymousAnimals {
  get(): string
}

const anonymousAnimals: AnonymousAnimals = {
  get,
}

export default anonymousAnimals
