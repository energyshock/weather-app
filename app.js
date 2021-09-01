// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.querySelector('#w-change-btn').addEventListener('click', e => {
  const city = document.querySelector('#city').value;

  // Change location
  weather.changeLocation(city);

  // Set location in LS
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  // Close modal
  const myModal = document.querySelector('#locModal');
  const modal = bootstrap.Modal.getInstance(myModal);
  modal.hide();
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
