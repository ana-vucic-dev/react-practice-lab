import React from 'react';
import Header from './components/Header.jsx';
import convertToFlag from './utils/convertToFlag.js';
import Weather from './components/Weather.jsx';
import SearchBar from './components/SearchBar.jsx';
import Footer from './components/Footer.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      isLoading: false,
      displayLocation: '',
      country: '',
      countryFlag: '',
      weather: {}
    };

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  async fetchWeather() {
    if (this.state.location.length < 2) {
      return this.setState({ weather: {} });
    }

    try {
      this.setState({
        isLoading: true,
        displayLocation: '',
        country: '',
        countryFlag: '',
        weather: {}
      });

      const params = new URLSearchParams({
        name: this.state.location
      });

      const geoResult = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?${params}`
      );

      if (!geoResult.ok) {
        throw new Error('Failed to fetch location data');
      }

      const geoData = await geoResult.json();

      if (!geoData.results?.length) {
        throw new Error('Location not found');
      }

      const { latitude, longitude, timezone, name, country, country_code } =
        geoData.results.at(0);

      const weatherResult = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min,temperature_2m_mean&temperature_unit=celsius`
      );

      if (!weatherResult.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const weatherData = await weatherResult.json();

      this.setState({
        displayLocation: name,
        country,
        countryFlag: convertToFlag(country_code),
        weather: weatherData.daily
      });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleLocationChange = e => {
    this.setState({ location: e.target.value });
  };

  componentDidMount() {
    this.setState({ location: localStorage.getItem('location') || '' });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.location !== prevState.location) {
      this.fetchWeather();

      localStorage.setItem('location', this.state.location);
    }
  }

  render() {
    return (
      <div className='app'>
        <div className='layout-wrapper'>
          <Header />

          <main>
            <SearchBar
              location={this.state.location}
              handleLocationChange={this.handleLocationChange}
            />

            <p className={`loader ${this.state.isLoading ? 'is-loading' : ''}`}>
              Loading...
            </p>

            <div className='location-forecast-wrapper'>
              {this.state.weather.weathercode && (
                <Weather
                  weather={this.state.weather}
                  location={this.state.displayLocation}
                  country={this.state.country}
                  flag={this.state.countryFlag}
                />
              )}
            </div>
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}
