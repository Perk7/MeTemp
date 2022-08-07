import logo from './logo.svg';
import './App.css';
import { PuffLoader } from 'react-spinners'

import TodayBlock from './components/todayBlock/TodayBlock';
import DaysBlock from './components/daysBlock/DaysBlock';

import { useEffect, useState } from 'react';

async function get_weather() {
  let json;
  await new Promise(resolve => 
    navigator.geolocation.getCurrentPosition(async obj => {
      const res = await fetch('http://' + process.env.REACT_APP_SERVER + `:8000?lat=${obj.coords.latitude}&lon=${obj.coords.longitude}`)
      json = await res.json()
      resolve()
    })
  ).then(() => {})
  
  console.log(json)
  return json
}

function App() {
  const [weather, setWeather] = useState(false)

  useEffect(() => {
    if (!weather) {
      const recieve = async () => {
        const data = await get_weather()
        setWeather(JSON.parse(data))
      }
      recieve()
    }
  }, [weather])

  return (
    weather
      ? (<>
          <TodayBlock weather={weather} />
          <DaysBlock weather={weather} />
        </>)
      : <div className='spinner-bg'>
            <h2 className='spinner-bg__heading'>MeTemp</h2>
            <PuffLoader color={'#FFFFFF'} size={100} />
        </div>
    
   );
}

export default App;
