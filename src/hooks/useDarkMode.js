import { useLocalStorage } from './useLocalStorage'


export const useDarkMode = (initialValue) => {

const [someValue, setSomeValue] = useLocalStorage("darkmode", initialValue)




return [someValue, setSomeValue]

}