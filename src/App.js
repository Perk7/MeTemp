import logo from './logo.svg';
import './App.css';
import { PuffLoader } from 'react-spinners'

import TodayBlock from './components/todayBlock/TodayBlock';
import DaysBlock from './components/daysBlock/DaysBlock';

import { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState(false)
  const [geoAccess, setGeoAccess] = useState(true)

  async function get_weather() {
    let json;
    await new Promise(resolve => 
      navigator.geolocation.getCurrentPosition(async obj => {
        setGeoAccess(prevState => true)
        const res = await fetch('https://' + process.env.REACT_APP_SERVER + `:8000?lat=${obj.coords.latitude}&lon=${obj.coords.longitude}`).catch((e) => console.log(e))
        json = await res.json()
        resolve()
      }, async err => {
        setGeoAccess(prevState => false)
        await get_weather()
      })
    ).then(() => {})
    return json
  }

  useEffect(() => {
    if (!weather) {
      const recieve = async () => {
        const data = await get_weather()
        setWeather(prevState => JSON.parse(data))
      }
      recieve()
    }
  })

  return (
    weather
      ? (<>
          <TodayBlock weather={weather} />
          <DaysBlock weather={weather} />
        </>)
      : <div className='spinner-bg'>
            <h2 className='spinner-bg__heading'>MeTemp</h2>
            <PuffLoader color={'#FFFFFF'} size={100} />
            {!geoAccess && <h3 className='spinner-bg__geo-alert'>Разрешите доступ к геолокации</h3>}
        </div>
   );
}

export default App;
