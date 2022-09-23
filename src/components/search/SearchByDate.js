import * as React from 'react'
import Table from '../Table/Table'

const SearchByDate = ({ filterDate, handleChange, filterbyDate }) => {
  React.useEffect(() => {
    if (filterDate) {
      console.log('component updated with values', filterDate)
    }
  }, [filterDate])
  return (
    <>
      <h3 className='search-title'>Search by Date:</h3>
      <div className='flex-form'>
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
        <button className='submit-btn' onClick={filterbyDate}>
          Search
        </button>
      </div>

      {filterDate.length === 0 ? (
        <h3 style={{ textAlign: 'center' }}>No data</h3>
      ) : (
        filterDate.map((date) => <Table key={date.id} filterResult={date} />)
      )}
    </>
  )
}

export default SearchByDate
