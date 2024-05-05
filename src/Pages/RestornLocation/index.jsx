import React from 'react'
import LocationHead from '../../Components/LocationHead'
import Locations from '../../locations'
import "./loc.css"

function RestLocations() {
  return (
    <div className='rest-loc'>
  <LocationHead/>
  <Locations/>
    </div>
  )
}

export default RestLocations