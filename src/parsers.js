export function parseDate(dateStamp) {
    if (dateStamp === 'today') {
      return 'Сегодня'
    }
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    let splitted_dateStamp = dateStamp.split(' ')
    return `${splitted_dateStamp[0]} ${months[parseInt(splitted_dateStamp[1])-1]}`
}