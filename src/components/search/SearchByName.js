import * as React from 'react'
import Table from '../Table/Table'

import TableHead from '../Table/TableHead'
const SearchByName = ({ filterbyName, filterUser, handleChange, name }) => {
  React.useEffect(() => {
    if (name) {
      console.log('Component Ran', filterbyName)
    }
  }, [filterbyName])

  return (
    <>
      <h3 className='search-title'>Search by Name:</h3>
      <div className='flex-form'>
        <input
          name='firstname'
          onChange={handleChange}
          type='text'
          className='large'
          placeholder='Enter First Name'
        />
        <span>or</span>
        <input
          name='lastname'
          onChange={handleChange}
          type='text'
          className='large'
          placeholder='Enter Last name'
        />
        <button
          className='submit-btn'
          onClick={filterUser}
          disabled={!name.firstname && !name.lastname}
        >
          Submit
        </button>
      </div>
      <div>
        <TableHead />

        {filterbyName.length === 0 ? (
          <p style={{ textAlign: 'center' }}>no results yet</p>
        ) : (
          <div>
            {filterbyName.map((filterResult) => {
              return (
                <div key={filterResult.id}>
                  <Table filterResult={filterResult} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchByName
