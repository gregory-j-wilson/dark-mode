import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = (initialValue) => {

const [someValue, setSomeValue] = useLocalStorage("darkmode", initialValue)




return [someValue, setSomeValue]

}