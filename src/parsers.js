export function parseDate(dateStamp) {
    if (dateStamp === 'today') {
      return 'Сегодня'
    }
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    let splitted_dateStamp = dateStamp.split(' ')
    return `${splitted_dateStamp[0]} ${months[parseInt(splitted_dateStamp[1])-1]} ${splitted_dateStamp[2]}`
}

export function makeIconPath(weatherType) {
  const date = new Date().getHours()
  switch (weatherType) {
    case 'sunny':
      return `weather-icons-big/${date > 22 || date < 5 ? 'sunny_night' : 'sunny'}.png`
    case 'cloudly':
      return `weather-icons-big/${date > 22 || date < 5 ? 'cloudly_night' : 'cloudly'}.png`
    case 'overcloudly':
      return `weather-icons-big/overcloudly.png`
    case 'low_rain':
      return `weather-icons-big/low_rain.png`
    case 'rain':
      return `weather-icons-big/rain.png`
    case 'hard_rain':
      return `weather-icons-big/hard_rain.png`
    case 'thunder':
      return `weather-icons-big/thunder.png`
    default:
      return `weather-icons-big/cloudly.png`
  }
}