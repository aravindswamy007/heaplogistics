/*
What is an API?
Before we dive into the technical details of calling an API in JavaScript,
let's start with the basics. An API, or Application Programming Interface,
**is like a bridge that allows two different software systems to communicate with each other.
It defines a set of rules and protocols for requesting and exchanging data.


APIs can be used to retrieve information from external sources, send data to external services,
or perform various other actions. They are widely used in web development to access data from various online
services such as social media platforms, weather data, financial information, and more.

How to Choose an API
The first step in calling an API is choosing the one that suits your needs.
There are countless APIs available, providing data on a wide range of topics.

Some of the popular types of APIs include:

RESTful APIs: These are widely used for simple data retrieval and manipulation.
They use standard HTTP methods like GET, POST, PUT, and DELETE.

Third-Party APIs: Many online services offer APIs that allow you to access their data,
such as the Twitter API for tweets or the Google Maps API for location data.

Weather APIs: If you need weather data, APIs like OpenWeatherMap or the WeatherAPI are good choices.

Financial APIs: To fetch financial data like stock prices, you can use APIs like Alpha Vantage or Yahoo Finance.
*/

const url = 'https://gold-price-live.p.rapidapi.com/get_metal_prices';

fetch(url).then((response)=>{
  console.log(response);
  if(!response.ok){
    throw new Error('this is a custom error');
  }
  return response.json();
}).then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log(err);
});

const apiURL = 'https://catfact.ninja/fact';
const data = {
  name:'aravind',
  age:45
}
const requestOptions = {
  method:'POST',
  headers:{
    'Content-Type' : 'application/json'
  },
  body:JSON.stringify(data)
}

fetch(apiURL,requestOptions).then(response=>{
  if(!response.ok){
    throw new Error('new error was thrown');
  }
  return response.json();
}).then(data=>{
  console.log(data);
}).catch(err=>{
  console.log(err);
})

const urlGold = 'https://www.weatherapi.com/docs/#';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'gold-price-live.p.rapidapi.com'
	}
};

fetch(urlGold,options).then(response =>{
  console.log(response);
  return response.json();
}).then(data =>{
  console.log(data);
}).catch(err =>{
  console.log(err);
})


const apiKey = '815a2db0922f600f672aac6e2a3c126f';
const whetherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}';

fetch(apiKey).then(response =>{
  if(!response.ok){
    throw new Error('response was not ok')
  }
  return response.json();
}).then(data =>{
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;
    console.log(temperature,description,location);
}).catch(err =>{
  console.log(err);
})
