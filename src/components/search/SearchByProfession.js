import * as React from 'react'

import TableHead from '../Table/TableHead'
import Table from '../Table/Table'

const SearchByProfession = ({
  filterProfession,
  filterByProfession,
  handleChange,
  profession,
}) => {
  React.useEffect(() => {
    if (filterByProfession) {
      console.log('component updated with values ', filterProfession)
    }
  }, [filterByProfession])
  return (
    <>
      <h3 className='search-title'>Search by Profession:</h3>
      <div className='flex-form'>
        <input
          name='profession'
          onChange={handleChange}
          type='text'
          className='large'
          placeholder='Search for Profession'
        />
        <button
          className='submit-btn'
          onClick={filterByProfession}
          disabled={!profession}
        >
          Submit
        </button>
      </div>

      <div>
        <TableHead />
        {filterProfession.map((profession) => (
          <Table key={profession.id} filterResult={profession} />
        ))}
      </div>
    </>
  )
}

export default SearchByProfession
