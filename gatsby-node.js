const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const peopleTemplate = path.resolve(`./src/templates/people.js`)
  const res = await graphql(`
    query {
      allUserInformationCsv {
        edges {
          node {
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
    }
  `)
  res.data.allUserInformationCsv.edges.forEach((edge) => {
    // const slug = edge.node.firstname + '-' + edge.node..lastname
    createPage({
      component: peopleTemplate,
      path: `/people/${edge.node.firstname}`,
      context: {
        firstname: edge.node.firstname,
      },
    })
  })
}
