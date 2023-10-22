import axios from "axios";

export function makeForecastRequest(lat, lon) {
    return axios.get(`http://192.168.0.11:8000?lat=${lat}&lon=${lon}`)
}

export function getPosition() {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject)
    );
}

export function makeForecastOffline() {
    return new Promise((resolve, reject) => {
        resolve({'data': JSON.stringify(
        {'now': {'humidity': 0.56,
            'pressure': 745,
            'temperature': 23,
            'weather': 'cloudly',
            'wind': 4.0},
            'week': {'today': {'20:00': {'temperature': 23, 'weather': 'cloudly'},
                            '21:00': {'temperature': 22, 'weather': 'cloudly'},
                            '22:00': {'temperature': 20, 'weather': 'cloudly'},
                            'default_temperature': 28,
                            'default_weather': 'sunny',
                            },
                '10 7 ср': {'default_temperature': 29,
                        'default_weather': 'sunny',
                        'night': {'temperature': 20, 'weather': 'sunny'},
                        'morning': {'temperature': 20, 'weather': 'sunny'},
                        'day': {'temperature': 27, 'weather': 'cloudly'},
                        'evening': {'temperature': 25, 'weather': 'sunny'},
                        },
                '11 7 чт': {'default_temperature': 29,
                        'default_weather': 'sunny',
                        'night': {'temperature': 20, 'weather': 'sunny'},
                        'morning': {'temperature': 20, 'weather': 'sunny'},
                        'day': {'temperature': 27, 'weather': 'cloudly'},
                        'evening': {'temperature': 25, 'weather': 'sunny'},
                        },
                '12 7 пт': {'default_temperature': 29,
                        'default_weather': 'sunny',
                        'night': {'temperature': 20, 'weather': 'sunny'},
                        'morning': {'temperature': 20, 'weather': 'sunny'},
                        'day': {'temperature': 27, 'weather': 'cloudly'},
                        'evening': {'temperature': 25, 'weather': 'sunny'},
                        },
                '13 7 сб': {'default_temperature': 29,
                        'default_weather': 'sunny',
                        'night': {'temperature': 20, 'weather': 'sunny'},
                        'morning': {'temperature': 20, 'weather': 'sunny'},
                        'day': {'temperature': 27, 'weather': 'cloudly'},
                        'evening': {'temperature': 25, 'weather': 'sunny'},
                        },
                '14 7 вс': {'default_temperature': 29,
                        'default_weather': 'sunny',
                        'night': {'temperature': 20, 'weather': 'sunny'},
                        'morning': {'temperature': 20, 'weather': 'sunny'},
                        'day': {'temperature': 27, 'weather': 'cloudly'},
                        'evening': {'temperature': 25, 'weather': 'sunny'},
                        },
                '15 7 пн': {'default_temperature': 29,
                        'default_weather': 'sunny',
                        'night': {'temperature': 20, 'weather': 'sunny'},
                        'morning': {'temperature': 20, 'weather': 'sunny'},
                        'day': {'temperature': 27, 'weather': 'cloudly'},
                        'evening': {'temperature': 25, 'weather': 'sunny'},
                        },
                '16 7 вт': {'default_temperature': 29,
                        'default_weather': 'sunny',
                        'night': {'temperature': 20, 'weather': 'sunny'},
                        'morning': {'temperature': 20, 'weather': 'sunny'},
                        'day': {'temperature': 27, 'weather': 'cloudly'},
                        'evening': {'temperature': 25, 'weather': 'sunny'},
                        },
                }
        })})
    })
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
                  
                  'weather-icons/weather-sprite.svg', 

                  'arrow-icons/arrow-left.svg',
                  'arrow-icons/arrow-right.svg',

                  'fonts/Comfortaa-Light.ttf',
                 ]

export async function cacheImages() {
    return new Promise(resolve => {
        srcArray.forEach((picture) => {
            const img = new Image()
            try {
                img.src = picture
            } catch (error) {}
        });
        resolve()
    })
}