export function parseDate(dateStamp) {
    if (dateStamp === 'today') {
      return 'Сегодня'
    }
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    let splitted_dateStamp = dateStamp.split(' ')
    return `${splitted_dateStamp[0]} ${months[parseInt(splitted_dateStamp[1])-1]} ${splitted_dateStamp[2]}`
}

const weekDayName = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

function weatherCodeToDescription(code) {
  const weatherCodes = {
    '0': 'sunny',
    '1': 'cloudly',
    '2': 'cloudly',
    '3': 'overcloudly',
    '45': 'overcloudly',
    '48': 'overcloudly',
    '51': "low_rain",
    '53': "low_rain",
    '55': "rain",
    '61': "rain",
    '63': "rain",
    '65': "hard_rain",
    '80': "rain",
    '81': "hard_rain",
    '82': "hard_rain",
    '95 *': "thunder",
    '95': "thunder",
    '*': "thunder",
    '96': "thunder",
    '98':  "thunder",

    //56, 57	Freezing Drizzle: Light and dense intensity
    //66, 67	Freezing Rain: Light and heavy intensity
    //71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
    //77	Snow grains
    //85, 86	Snow showers slight and heavy
  };
  return weatherCodes[code.toString()] || 'thunder';
}

export function makeIconPath(weatherType) {
  const date = new Date().getHours()
  let imagePath = ''
  let path = '/weather-icons-big/'
  switch (weatherType) {
    case 'sunny':
      imagePath = `${date > 22 || date < 5 ? 'sunny_night' : 'sunny'}.png`
      break;
    case 'cloudly':
      imagePath = `${date > 22 || date < 5 ? 'cloudly_night' : 'cloudly'}.png`
      break;
    case 'overcloudly':
      imagePath = `overcloudly.png`
      break;
    case 'low_rain':
      imagePath = `low_rain.png`
      break;
    case 'rain':
      imagePath =`rain.png`
      break;
    case 'hard_rain':
      imagePath = `hard_rain.png`
      break;
    case 'thunder':
      imagePath = `thunder.png`
      break;
    default:
      imagePath = `sunny.png`
  }

  return path + imagePath
}

export function parseResponse(data) {
  console.log(data)
  const currentWeather = {
    humidity: data.current.relative_humidity_2m / 100,
    temperature: Math.round(data.current.temperature_2m),
    weather: weatherCodeToDescription(data.current.weather_code),
    wind: data.current.wind_speed_10m
  };

  const weekForecast = {}
  for (let i=0; i<7;i++) {
    const date = new Date(data.daily.time[i])
    const key = date.getDate() === new Date().getDate() 
      ? 'today' 
      : `${date.getDate()} ${date.getMonth()+1} ${weekDayName[date.getDay()]}`
      
    weekForecast[key] = {
      'default_weather': weatherCodeToDescription(data.daily.weather_code[i]),
      'default_temperature': Math.round((data.daily.temperature_2m_max[i] + data.daily.temperature_2m_max[i])/2),
    }

    for (let hour=0; hour<24; hour++) {
      const time = new Date(data.hourly.time[hour + i*24])
      const index = [time.getHours(), time.getMinutes()]
        .map(el => el < 10 ? "0" + el : el).join(":")
      
      weekForecast[key][index] = {
        'temperature': Math.round(data.hourly.temperature_2m[hour + i*24]), 
        'weather': weatherCodeToDescription(data.hourly.weather_code[hour + i*24]),
      }
    }
  }

  return {
    now: currentWeather,
    week: weekForecast
  };
}