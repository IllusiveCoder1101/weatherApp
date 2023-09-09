import React from 'react'
import { AppContext } from '../context/context'
function Search() {
  const [tmp, setTmp] = React.useState("")
  const { state, changeState, changeLocation, isLoading, error } = React.useContext(AppContext)
  return (
    <div className={`searchBox ${state}`}>
      <button onClick={() => changeState("close")} className='closeBtn'>
        Close
      </button>
      <div className="search">
        <input type="text" placeholder='Search Location' className={`${(error) ? "errorInput searchInput" : "searchInput"}`} onChange={(e) => setTmp(e.target.value)} value={tmp} />
        <button className='searchBtn' onClick={() => { changeLocation(tmp); setTmp(""); isLoading(true) }}>Search</button>
      </div>
      {(error) ? <p className='errorText'>No such location exist.</p> : <></>}
    </div>
  )
}

export default Search