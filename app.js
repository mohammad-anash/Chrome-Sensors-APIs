// Web Capability => Ability of web browser or web application to perform a specific task or function using typically a built in api.

// Green Api => apis available on every browser and every platform, when technically possible mature use them with confidence

// light green Api => available only on some browser, they matured within the supported, subgourp of browser, so that you can use the capability on them

// yellow Api => not yet mature,  they are only available on some browser, and within test or trials

// red Api => you can'nt use them, and plans to add themare still long term

// Good Resources for Api
// MDN
// Web.Dev
// CanIUse

// let's talk about sensor

// What's the sensor

// A sensor is a chipset that is available on one particular website, and measuring something

// Accelarometer => it measure gravity
// Magnetometer => it like compass, it tell us east west north south
// Proximity => when we talk to someone in call, it realize something is near me then, it off lock screen, for don't someting get wrong during the call
// light sensor => this sensor measure light arond us and handle our mobile brightness.

// APIs

// Geolocation API => this spi provide us device current location, in latitude and longitude form
// but how ? => it take helps from our device GPS, mobile tower, wifi network and IP address and calculate our location and give in coordication form.

// let's do some experiment with this API;

// the task is very simple, when i click on button i want my device location;

const button = document.getElementById('btn');

button.addEventListener('click', function () {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`lat: ${latitude} lon: ${longitude}`);
      },
      (error) => {
        console.log(error);
      },
      {
        maximumAge: 4000,
        enableHighAccuracy: false,
        timeout: 4000,
      }
    );
  }
});

// don't worry if you don't understand what's going on, i explain you every bit of the code.
// Explanation:

// * first i select my button and then i add click event on this.
// * after that i check the geolocation  api available or not in navigator object
// * the in operator is very simple it just check the given property is consist or not in object;
// * the navigator is a object and is part of browser, it tells information about browser and device.
// * the geolocation is also object, this is navigator object feature. it takes help from GPS, IP address, and mobile tower to detect our device location. first it takes permission after permission this, through IPaddress, GPS, WIFI network it calculate our exect location either approximate and provide us in coordinate form;
// * getCurrentPosition tries to get current location in latitude and longitude, it take three arguments, it recieve two callback function, the third one is optional argument.

// first arugment: is position when location comes successfully this function invoked
// second arguement: when something went wrong, this function invoked

// third argument = {
// enableHighAccuracy:  by defualt(false)
// first option: if you want to little exact location, but it takes more battery and takes more time, by default is false

// timeout: by defualt(Infinity)
// Second option: this is time limit, it can show location on how much time set, if it can't show then second argument invoked

// maximumAge: by default(0)
// Yeh setting batata hai ki kitna purana (cached) location data use kiya jaa sakta hai.
// }
