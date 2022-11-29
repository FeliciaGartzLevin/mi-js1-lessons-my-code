/**
 * OpenWeatherApp API
 *
 */
const API_KEY = "dd1addbd5798549d54ed647f75db5af1";
const BASE_URL= "https://api.openweathermap.org/data/2.5";

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 3000;

const getCurrentWeather = async city => {
    const errorEl = document.querySelector('#error');
    const forecast = document.querySelector('#forecast');
    const loadingSpinner = document.querySelector('#loading-spinner');
    // show loading spinner while waiting for result:
    errorEl.classList.add('hide');
    loadingSpinner.classList.remove('hide');
    forecast.classList.add('hide');

    try{
        // get weather for city from OpenWeatherMap API
        const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
        
         // fake a slow api
         FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY));
       
        // check if response is ok
        if(!response.ok){
            throw new Error(`We cannot find that city. Problem is: ${response.status} ${response.statusText}`);
        }
        // convert response from JSON
        const data = await response.json();

        // show forecast card, remove spinner
        forecast.classList.remove('hide');
        loadingSpinner.classList.add('hide');

        // return current weather
        return data;

    } catch (err) {
        console.log('Caught the error.', err);

        errorEl.innerText = err;
        errorEl.classList.remove('hide');
        forecast.classList.add('hide');
        loadingSpinner.classList.add('hide')
        
    }
}





