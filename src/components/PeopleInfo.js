import * as React from 'react'

const PeopleInfo = ({ allCsvProfiles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>last Name</th>
          <th>Email address</th>
          <th>Date Created</th>
        </tr>
      </thead>
      <tbody>
        {allCsvProfiles.map((node) => (
          <tr key={node.id}>
            <th>{node.firstname}</th>
            <th>{node.lastname}</th>
            <th>{node.email}</th>
            <th>{node.dateCreated}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PeopleInfo
