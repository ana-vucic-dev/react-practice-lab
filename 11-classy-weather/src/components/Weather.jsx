import React from 'react';
import Day from './Day.jsx';

export default class Weather extends React.Component {
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      temperature_2m_mean: mean,
      time: dates,
      weathercode: codes
    } = this.props.weather;

    return (
      <section
        aria-labelledby='location'
        className='location-forecast'>
        <h2 id='location'>
          {this.props.location}
          <span className='visually-hidden'>, {this.props.country}</span>
          <span aria-hidden='true'> {this.props.flag}</span>
        </h2>

        <ul className='weather'>
          {dates.map((date, i) => (
            <Day
              key={date}
              date={date}
              max={max.at(i)}
              min={min.at(i)}
              mean={mean.at(i)}
              code={codes.at(i)}
              isToday={i === 0}
            />
          ))}
        </ul>
      </section>
    );
  }
}
