import React from 'react'
import { AppContext } from '../context/context'
function Forecast(index, dt) {
    const { weatherData } = React.useContext(AppContext)
    return (
        <div className="weather1">
            <h3 className='date'>{dt}</h3>
            <img src={`https://openweathermap.org/img/wn/${(weatherData) ? weatherData.list[index].weather[0].icon : "02d"}@2x.png`} className='weatherImg' alt="" />
            <div className="tempData">
                <p>{`${Math.round((weatherData) ? weatherData.list[index].main.temp_min : 0)}'C`}</p>
                <p>{`${Math.round((weatherData) ? weatherData.list[index].main.temp_max : 0)}'C`}</p>
            </div>
        </div>
    )
}

export default Forecast