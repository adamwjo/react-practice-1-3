import React from 'react';

//**********components******************
import Titles from './components/titles'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = "6af3559efd69a77f75a44e63972b2b2f"


export default class App extends React.Component {

  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: null 
    })
  }

  render() {
    return(
      <div>
        Hello!
        <Titles/> 
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    )
  }
}