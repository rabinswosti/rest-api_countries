import React from 'react'
import './country.component.styles.css'

const Country = ({className, onClick, countryDetails}) => {
  const {name: {official}, capital, population, region, flags: {svg}} = countryDetails
  return (
    <div className = {className} onClick = {onClick}>
      <div className = "country-image-container">
        <img src = {svg} alt = {official} />
      </div> 
      <article className = "details-text-container">
        <h1> {official} </h1>
        <h4> Population : <span>{population}</span></h4>
        <h4> Region : <span>{region}</span></h4>
      </article>
    </div>
  )
}

export default Country