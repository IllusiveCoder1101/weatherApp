import React from 'react'
import Search from './Search'
import { AppContext } from '../context/context'
function Sidebar() {
  const { changeState, weatherData, getDate } = React.useContext(AppContext)
  return (
    <div className='sidebar'>
      <Search />
      <header className='head'>
        <button className='btn' onClick={() => { changeState("open") }}>Search for places</button>
        <div className="iconContainer">
          <img src="assets/icon.png" alt="" className='iconImg' />
        </div>

      </header>
      <section className='weather'>
        <img src={`https://openweathermap.org/img/wn/${(weatherData) ? weatherData.list[0].weather[0].icon : "02d"}@4x.png`} className='weatherIcon' alt="" />
        <div className="place">
          <h1 className='temp'><span>{Math.round((weatherData) ? weatherData.list[0].main.temp : 0)}</span> 'C</h1>
          <h2 className='forecast'>{(weatherData) ? weatherData.list[0].weather[0].main : "none"}</h2>
          <div className="desc">
            <p>Today</p>
            <hr />
            <p>{((weatherData) ? getDate(weatherData.list[0].dt_txt.substring(0, 10)) : "00-00-0000")}</p>
          </div>
          <p className='location'>{(weatherData) ? weatherData.city.name : "none"}</p>
        </div>
      </section>

    </div>
  )
}

export default Sidebar