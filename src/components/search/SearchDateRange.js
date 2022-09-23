import React from 'react'

const SearchDateRange = ({ filterDateRange }) => {
  return (
    <div>
      SearchDateRange:
      <h3>Filter by date range:</h3>
      <div className='filter-date'>
        <label htmlFor='start'>Start date:</label>
        <input
          type='date'
          id='start'
          onChange={handleChange}
          name='dateCreated'
          min='2020-01-01'
          max='2021-12-31'
        />
      </div>
      <div className='filter-date'>
        <label htmlFor='end'>Start date:</label>
        <input
          type='date'
          id='end'
          onChange={handleChange}
          name='dateEnded'
          min='2020-01-01'
          max='2021-12-31'
        />
      </div>
      <button className='submit-btn' onClick={filterDateRange}>
        Search
      </button>
    </div>
  )
}

export default SearchDateRange
