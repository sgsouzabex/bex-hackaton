import { STEPS_NUMBER } from '~/constants'

const numberToStep = (number: number) => STEPS_NUMBER[number - 1]

export { numberToStep }
