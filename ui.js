class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    this.details = document.querySelector('#w-details');
    // this.icon = document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    // this.dewpoint = document.querySelector('#w-dewpoint');
    this.feelslike = document.querySelector('#w-feelslike');
    this.wind = document.querySelector('#w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp} °C`;
    // this.icon.setAttribute('src', weather.weat);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    // this.dewpoint.textContent = `Relative Humadity: ${weather.main.humidity}`;
    this.feelslike.textContent = `Feels Like: ${weather.main.feels_like} °C`;

    const windSpeed = Math.floor(weather.wind.speed * 3.6);
    this.wind.textContent = `Wind Speed: ${windSpeed} km/h`;
  }
}
