import './App.sass';
import { PuffLoader } from 'react-spinners'

import TodayBlock from './components/todayBlock/TodayBlock';
import DaysBlock from './components/daysBlock/DaysBlock';

import { useEffect, useState } from 'react';
import { getPosition, makeForecastRequest, cacheImages } from './Requester';

function App() {
  const [weather, setWeather] = useState(false)
  const [geoAccess, setGeoAccess] = useState(true)
  const [loaded, setLoaded] = useState(false)

  function get_weather() {
    getPosition()
        .then(obj => {
            setGeoAccess(() => true)
            makeForecastRequest(obj.coords.latitude, obj.coords.longitude)
              .then(resp => { setWeather(() => JSON.parse(resp.data)) })
              .catch(() => {
                console.log('Request Error')
                setTimeout(get_weather, 3000)
              })
        })
        .catch(err => {
          console.log(err)
          setGeoAccess(() => false)
          setTimeout(get_weather, 2000)
        })
  }

  useEffect(() => {
    if (!loaded) {
      cacheImages()
        .then(() => {setLoaded(() => true)});
    }
    if (!weather) {
      get_weather()
    }
  })

  function resolveMainBg() {
    const hours = new Date().getHours()
    return hours >= 22 || hours <= 7
  }

  return (
    <div className={`main-wrapper main-bg_night`}>
      <div className='main-bg'>
          {weather && loaded
            ? <>
                <TodayBlock weather={weather} />
                <DaysBlock weather={weather} />
              </>
            : <div className='spinner-bg'>
                  <h2 className='spinner-bg__heading'>MeTemp</h2>
                  <PuffLoader className='spinner-bg__spinner' color={'#FFFFFF'} size={100} />
                  {!geoAccess && <h3 className='spinner-bg__geo-alert'>Разрешите доступ к геолокации</h3>}
              </div>}
      </div>
    </div>
  );
}

export default App;
