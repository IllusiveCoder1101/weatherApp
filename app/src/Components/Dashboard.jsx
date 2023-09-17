import React from 'react'
import { AppContext } from '../context/context'
import Forecast from './Forecast'
function Dashboard() {
  const { weatherData, getDate, getDtList,isLoading } = React.useContext(AppContext)

  return (
    
    <div className='main-section'>
      <section className='foreCast'>
        {Forecast(6, "Tomorrow")}
        {Forecast(16, (weatherData) ? getDate(getDtList(2)) : "00-00-0000")}
        {Forecast(22, (weatherData) ? getDate(getDtList(3)) : "00-00-0000")}
        {Forecast(30, (weatherData) ? getDate(getDtList(4)) : "00-00-0000")}
        {Forecast(38, (weatherData) ? getDate(getDtList(5)) : "00-00-0000")}
      </section>
      <section className="details">
        <h3 className='header2'>Today's Highlights</h3>
        <section className='other'>
          <div className="detail">
            <h4 className='status'>Wind Status</h4>
            <h1 className='value'><span>{(weatherData) ? weatherData.list[0].wind.speed : 0}</span>mph</h1>
            <p>WSW</p>
          </div>
          <div className="detail">
            <h4 className='status'>Humidity</h4>
            <h1 className='value'><span>{(weatherData) ? weatherData.list[0].main.humidity : 0}</span>%</h1>
            <div className="range">
              <p>0</p>
              <p>50</p>
              <p>100%</p>
            </div>
            <div className="bar">
              <div className="progress" style={{ width: `${(weatherData) ? weatherData.list[0].main.humidity : 0}%` }}></div>
            </div>
          </div>
          <div className="detail">
            <h4 className='status'>Visibility</h4>
            <h1 className='value'><span>{(weatherData) ? weatherData.list[0].visibility / 100 : 0}</span> miles</h1>


          </div>
          <div className="detail">
            <h4 className='status' >Air Pressure</h4>
            <h1 className='value'><span>{(weatherData) ? weatherData.list[0].main.pressure : 0}</span> mb</h1>

          </div>
        </section>
      </section>
    </div>
  )
}

export default Dashboard