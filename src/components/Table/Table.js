import * as React from 'react'
import { Link } from 'gatsby'

const Table = ({ filterResult }) => {
  const userName = filterResult.firstname
  return (
    <table>
      <tbody>
        <tr>
          <th>
            <Link to={`/people/${userName}`}>{filterResult.firstname}</Link>
          </th>
          <th>{filterResult.lastname}</th>
          <th>{filterResult.email}</th>
          <th>{filterResult.profession}</th>
          <th>{filterResult.country}</th>
          <th>{filterResult.city}</th>
          <th>{filterResult.dateCreated}</th>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
