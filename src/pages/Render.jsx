import React from 'react'
import { Geolocation } from './Geolocation';

const Render = () => {
  const location= Geolocation();
  return (
    <div>
      {
        location.loaded? JSON.stringify(location): "Location Data unavailable"
      }
    </div>
  )
}
export default Render;