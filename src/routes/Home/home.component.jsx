import {useState, useEffect, useContext} from 'react'
import Country from '../../components/country/country.component'
import { useNavigate, Routes, Route, Outlet } from 'react-router-dom'
import { CountriesArrayContext } from '../../context/countriesArrayJSX.context' 
import './home.styles.css'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const {countriesArray, setCountriesArray} = useContext(CountriesArrayContext)
  const [filteredCountriesByRegion, setFilteredCountriesByRegion] = useState([])
  const navigate = useNavigate()
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const regionType = searchParams.get('region')
  console.log("searchParams is", searchParams.toString())
  const regions = ["Americas", "Asia", "Europe", "Oceania", "Africa"]
  useEffect(() => {
    const dummy = async() => {
      const apiUrl = "https://restcountries.com/v3.1/all/"
      const fetchCountries = async () => {
          fetch(apiUrl)
          .then(response => response.json())
          .then(data => {setCountriesArray(data)
          })
      }
      await fetchCountries()
      console.log("useEffect fired")
    }
  dummy()},[])
  
  useEffect( () => {
    const filteredCountriesArrayByRegion = !regionType 
    ? countriesArray : countriesArray.filter(country => {
      return country.region.toLowerCase() === regionType.toLowerCase()
    })

  console.log("filtered countries by region" ,filteredCountriesArrayByRegion)
  setFilteredCountriesByRegion(filteredCountriesArrayByRegion)
  setFilteredCountries(filteredCountriesArrayByRegion)
  }, [countriesArray, regionType]
  )


  const filterCountriesByName = (event) => {
    const filteredCountriesArrayByName = filteredCountriesByRegion.filter(country => {
      return country.name.official.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilteredCountries(filteredCountriesArrayByName)
  }

  const styles = {fontWeight: 900, fontSize: 18}
  // const filterCountriesByRegion = () => {
  //   // navigate(`?${searchParams.toString()}`)
  //   navigate(`?Americas`)
  //   const filteredCountriesArrayByRegion = countriesArray.filter(country => {
  //     return country.region.toLowerCase() === "americas"
  //     // searchParams.get('region')
  //   })
  //   console.log(filteredCountriesArrayByRegion)
  //   setFilteredCountries(filteredCountriesArrayByRegion)
    
  // }
  // const filterByRegion = async (region) => {
  //   const url = `https://restcountries.com/v3.1/region/${region}`
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   console.log("filtered by region", data)
  //   setFilteredCountries(data)
  // }



  return (
    <div style={{textAlign: "center"}}>
      <br />
      <input type = 'search' placeholder = 'Search for country' onChange = {filterCountriesByName} />
      <span style = {styles}> Filter by: </span>
      {
        regions.map(region => {
          return (
            <>
              <button key = {region} onClick = {() => navigate(`?region=${region}`)}> 
                <span style = {styles}> {region} </span> 
              </button>
            </>
          )
        })
      }

      
      {/* <select onChange={(e) => filterByRegion(e.target.value)}>
        <option value="Filter by region"> Filter by region </option>
        <option value="Africa"> Africa </option>
        <option value="America"> America </option>
        <option value="Europe"> Europe </option>
        <option value="Asia"> Asia </option>
        <option value="Oceania"> Oceania </option>
      </select> */}
      <div className = "countries-container">
        {
            filteredCountries.length===0 ? <h1>Loading...</h1> :
            filteredCountries.map((country, idx) => {
              return (
                <Country className = "country-container" onClick = {() => navigate(`${country.name.official}`)} key = {idx} countryDetails = {country} />
              )
            })   
        } 
      </div>
    </div>
   )
}
export default Home
