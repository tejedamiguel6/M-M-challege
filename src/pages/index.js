import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import PeopleInfo from '../components/PeopleInfo'
import SearchByName from '../components/search/SearchByName'
import SearchByProfession from '../components/search/SearchByProfession'
import SearchByDate from '../components/search/SearchByDate'
// helper function for lowercasing strings
import { lowerCase } from '../helpers/lowerCase'

// calling query
export const query = graphql`
  query {
    allUserInformationCsv {
      nodes {
        id
        firstname
        lastname
        email
        country
        city
        profession
        dateCreated
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: '',
    profession: '',
    dateCreated: '',
    dateEnded: '',
  })
  const [filterByName, setFilterByName] = React.useState([])
  const [filterProfession, setFilterbyProfession] = React.useState([])
  const [filterDate, setFilterDate] = React.useState([])
  const [toggle, setToggle] = React.useState(false)
  const [toggleDate, setToggleDate] = React.useState(false)

  const allCsvProfiles = data.allUserInformationCsv.nodes

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

  // toggle between 2 components
  const handleToggle = () => {
    setToggle((prevState) => !prevState)
  }

  // Filter user by first name or last name or both
  const filterUser = () => {
    const fullName = allCsvProfiles.filter(
      (name) =>
        lowerCase(name.firstname) === lowerCase(formData.firstname) &&
        lowerCase(name.lastname) === lowerCase(formData.lastname)
    )
    // filtering by first name
    const filterByFirstName = allCsvProfiles.filter(
      (name) => lowerCase(name.firstname) === lowerCase(formData.firstname)
    )
    // filtering by last name
    const filterByLastname = allCsvProfiles.filter(
      (name) => lowerCase(name.lastname) === lowerCase(formData.lastname)
    )

    if (formData.firstname && formData.lastname) {
      setFilterByName(fullName)
    } else if (formData.firstname) {
      setFilterByName(filterByFirstName)
    } else {
      setFilterByName(filterByLastname)
    }
  }

  // filter by profession
  const filterByProfession = () => {
    const filterProfession = allCsvProfiles.filter(
      (name) => name.profession === lowerCase(formData.profession)
    )
    setFilterbyProfession(filterProfession)
  }

  // filter by specific date
  //CUSTOM ENDPOINT
  const filterbyDate = () => {
    const filterDate = allCsvProfiles.filter(
      (date) => date.dateCreated === formData.dateCreated
    )
    setFilterDate(filterDate)
  }

  // filter Date Range
  // const filterDateRange = () => {
  // 1) get start date from formData
  // 2) get end date from formData
  // 3) create empty array
  // 3b) find a way to include the dates in between from start and end date
  // 4) if they are both there push dates into array
  // 5) filter through that array you pushed the dates into
  // 6) setstate

  //   const startDate = formData.dateCreated
  //   const endDate = formData.dateEnded
  //   const dateRangeFilter = allCsvProfiles.filter((dates) => {
  //     let dateRange = []
  //     if (startDate && endDate) {
  //       dateRange.push(dates.dateCreated)
  //     }
  //     console.log(dateRange, 'kjsdkj')
  //   })

  //   console.log(dateRangeFilter, 'get the date')
  // }
  return (
    <div>
      <Layout>
        <div>
          <div className='btn-flex-option'>
            <button className='name-profession' onClick={handleToggle}>
              {toggle ? 'Search By Profession' : 'Search By Name'}
            </button>
            <button onClick={() => setToggleDate((prevState) => !prevState)}>
              toggle Date picker
            </button>
          </div>

          {toggle ? (
            <SearchByName
              name={formData}
              filterbyName={filterByName}
              filterUser={filterUser}
              handleChange={handleChange}
            />
          ) : (
            <div>
              <SearchByProfession
                profession={formData.profession}
                filterProfession={filterProfession}
                filterByProfession={filterByProfession}
                handleChange={handleChange}
              />
            </div>
          )}
        </div>
        <div className='date-picker' style={{ textAlign: 'center' }}>
          {toggleDate && (
            <SearchByDate
              filterDate={filterDate}
              filterbyDate={filterbyDate}
              handleChange={handleChange}
            />
          )}
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
