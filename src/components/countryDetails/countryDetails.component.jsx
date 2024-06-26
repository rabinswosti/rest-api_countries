import {useContext} from 'react'
import { CountriesArrayContext } from '../../context/countriesArrayJSX.context'
import { useParams, useNavigate } from 'react-router-dom'

const CountryDetails = () => {
    const {countriesArray} = useContext(CountriesArrayContext)
    const { countryName } = useParams()
    const navigate = useNavigate()
    const [desiredCountry] = countriesArray.filter(country => countryName === country.name.official)
    const {
        name: {official},
        // name: {nativeName: {eng}},
        capital, 
        population, 
        region, 
        subregion,
        tld,
        // currencies: {USD},
        languages,
        flags: {svg} 
    } = desiredCountry
    console.log(desiredCountry)
    return (
        <>
            <div> 
                <button onClick = {() => navigate('..')}> Back </button>
            </div>
            <div> 
                <img src = {svg} />  
                <div>
                    <h1> {official} </h1>    
                    {/* <h4> Native Name: <span>{eng.official}</span></h4> */}
                    <h4> Population: <span>{population}</span></h4>
                    <h4> Region: <span>{region}</span></h4>
                    <h4> Sub Region: <span>subregion</span></h4>
                    <h4> Capital: <span>{capital}</span></h4>
                    <h4> Top Level Domain: <span>{tld[0]}</span></h4>
                    {/* <h4> Currencies: <span>{USD.name}</span></h4> */}
                    <h4> Languages: <span>{languages.eng}</span></h4>
                    
                </div> 
            </div>
        </>
    )
}

export default CountryDetails