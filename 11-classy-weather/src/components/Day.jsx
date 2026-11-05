import React from 'react';
import getWeatherIcon from '../utils/getWeatherIcon.js';
import formatWeekday from '../utils/formatWeekday.js';

export default class Day extends React.Component {
  render() {
    const { date, max, min, mean, code, isToday } = this.props;

    return (
      <li className='day'>
        <p>{isToday ? 'Today' : formatWeekday(date)}</p>

        <span
          className='weather-icon'
          aria-hidden='true'>
          {getWeatherIcon(code)}
        </span>

        <p className='mean-temp'>
          <span className='visually-hidden'>Mean temperature:</span>
          <span
            className='mean-temp-label'
            aria-hidden='true'>
            Mean
          </span>{' '}
          {Math.round(mean)} °C
        </p>

        <p className='min-max-temp'>
          <span className='visually-hidden'>Minimum temperature:</span>
          {Math.floor(min)}
          <span aria-hidden='true'> &ndash; </span>
          <span className='visually-hidden'>Maximum temperature:</span>
          {Math.ceil(max)} °C
        </p>
      </li>
    );
  }
}
