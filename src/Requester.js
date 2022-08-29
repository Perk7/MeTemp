import axios from "axios";

export function makeForecastRequest(lat, lon) {
    return axios.get(`https://me-temp.herokuapp.com?lat=${lat}&lon=${lon}`)
}

export function getPosition() {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

export const srcArray = ['weather-icons-big/cloudly_night.png', 
                  'weather-icons-big/cloudly.png', 
                  'weather-icons-big/sunny_night.png', 
                  'weather-icons-big/sunny.png',
                  'weather-icons-big/overcloudly.png',
                  'weather-icons-big/low_rain.png',
                  'weather-icons-big/rain.png',
                  'weather-icons-big/hard_rain.png',
                  'weather-icons-big/thunder.png',
                  
                  'weather-icons/cloudly.svg', 
                  'weather-icons/sunny.svg',
                  'weather-icons/overcloudly.svg',
                  'weather-icons/low_rain.svg',
                  'weather-icons/rain.svg',
                  'weather-icons/hard_rain.svg',
                  'weather-icons/thunder.svg',

                  'arrow-icons/arrow-left.svg',
                  'arrow-icons/arrow-right.svg',

                  'fonts/Comfortaa-Light.ttf',
                 ]

export async function cacheImages() {
    return new Promise((resolve, reject) => {
        srcArray.forEach((picture) => {
            const img = new Image()
            img.src = picture
            console.log(img)
        });
        resolve()
    })
}