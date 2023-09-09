import React from 'react'

const AppContext = React.createContext()

function AppProvider({ children }) {
  const [state, setState] = React.useState("close")
  const [location, setLocation] = React.useState("Australia")
  const [place, setPlace] = React.useState({ lat: 40, lon: 40 })
  const [weatherData, setWeatherData] = React.useState(undefined)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  React.useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=0b6d0f6c2c926539a32079e6addce92f`)
      .then(res => res.json())
      .then(data => {
        setPlace({ lat: (data.length) ? data[0].lat : undefined, lon: (data.length) ? data[0].lon : undefined })
      })

  }, [location])
  React.useEffect(() => {
    (place.lat) ? fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${place.lat}&lon=${place.lon}&units=metric&appid=0b6d0f6c2c926539a32079e6addce92f`)
      .then(res => res.json())
      .then(data => {
        setWeatherData(data)
        setError(false)

      }) : setError(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, [place])
  React.useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 4000)
  }, [error])
  const changeLocation = (value) => {
    setLocation(value)
  }
  const changeState = (value) => {
    setState(value)
  }
  const isLoading = (value) => {
    setLoading(value)
  }
  const getDate = (value) => {
    const dt = new Date(value)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return `${day[dt.getDay()]}, ${dt.getDate()} ${months[dt.getMonth()]} `
  }
  const getDtList = (index) => {
    const l = []

    weatherData.list.map((item) => {
      if (l.indexOf(item.dt_txt.substring(0, 10)) == -1) {
        l.push(item.dt_txt.substring(0, 10))
      }
    })
    return l[index]
  }
  return (
    <AppContext.Provider value={{ weatherData, location, changeLocation, state, changeState, getDate, getDtList, loading, isLoading, error }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }