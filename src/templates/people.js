import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TableHead from '../components/Table/TableHead'
import { Link } from 'gatsby'

export const query = graphql`
  query ($firstname: String!) {
    userInformationCsv(firstname: { eq: $firstname }) {
      id
      firstname
      lastname
      email
      profession
      dateCreated
      country
      city
    }
  }
`

const people = ({ data }) => {
  // destructuring
  const {
    id,
    firstname,
    lastname,
    email,
    profession,
    country,
    city,
    dateCreated,
  } = data.userInformationCsv
  return (
    <Layout>
      <Link to='/'>Go home</Link>
      <h3>
        Info for: {firstname}-{lastname}
      </h3>
      <TableHead />
      <table>
        <tbody>
          <tr key={id}>
            <th>{firstname}</th>
            <th>{lastname}</th>
            <th>{email}</th>
            <th>{profession}</th>
            <th>{country}</th>
            <th>{city}</th>
            <th>{dateCreated}</th>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default people
