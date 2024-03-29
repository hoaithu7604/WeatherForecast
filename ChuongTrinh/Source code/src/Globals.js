export default {
  PRIMARY_COLOR: '#1EB262',
  API_KEY: '3a9cdaa1fe9c72bdebc6bf16c711f838',
  FONTSIZE_SMALL: 14.0,
  FONTSIZE_MEDIUM: 17.0,
  FONTSIZE_LARGE: 20.0,
  CURRENTWEATHER_API:
    'https://api.openweathermap.org/data/2.5/weather?units=metric',
  FORECAST_API: 'https://api.openweathermap.org/data/2.5/forecast?units=metric',
  DAY: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  MONTH: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  DAYL: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  MONTHL: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  getCurrentWeather(city) {
    var url = this.CURRENTWEATHER_API + '&appid=' + this.API_KEY + '&q=' + city;
    return fetch(url).then(response => response.json());
  },
  getForecast(city) {
    var url = this.FORECAST_API + '&appid=' + this.API_KEY + '&q=' + city;
    return fetch(url).then(response => response.json());
  },
  iconUrl(icon) {
    const url = 'http://openweathermap.org/img/wn/' + icon + '.png';
    return url;
  },
};
