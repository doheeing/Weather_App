import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = () => {
    let changeLocation = () =>{}
  return (
    <div>
      <Button variant="primary">Current</Button>{' '}
      <Button variant="primary" onClick={()=>changeLocation("jeju")}>Jeju</Button>{' '}
      <Button variant="primary">Busan</Button>{' '}
      <Button variant="primary">Tokyo</Button>{' '}
    </div>
  )
}

export default WeatherButton
