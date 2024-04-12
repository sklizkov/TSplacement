import { UAParser } from 'ua-parser-js'


export const parser = new UAParser()

export const browser = parser.getResult().browser