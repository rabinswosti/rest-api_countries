import {useState, createContext} from 'react'

export const CountriesArrayContext = createContext({
    countriesArray: [],
    setCountriesArray: null
})

export const CountriesArrayProvider = ({children}) => {
 const [ countriesArray, setCountriesArray ] = useState([])
 const value = {countriesArray, setCountriesArray}

 return (
    <CountriesArrayContext.Provider value = {value}>{children}</CountriesArrayContext.Provider>
 )
}

