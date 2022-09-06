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
  let imagePath = ''
  let path = 'weather-icons-big/'
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