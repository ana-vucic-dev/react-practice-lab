import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <fieldset>
          <legend className='visually-hidden'>Search</legend>
          <label>
            <input
              type='search'
              name='search'
              placeholder='Search for location'
              value={this.props.location}
              onChange={this.props.handleLocationChange}
            />
          </label>
        </fieldset>
      </form>
    );
  }
}
