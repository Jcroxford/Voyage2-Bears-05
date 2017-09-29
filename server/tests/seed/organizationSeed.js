const { ObjectID } = require('mongodb')

const Organizations = require('../../models/organizationModel')

const organizations = [
  {
    _id:   new ObjectID(),
    name:  'Kalicos'
  },
  {
    _id:   new ObjectID(),
    name:  'test'
  }
]

const populateOrganizations = (done) => {
  Organizations
    .remove({})
    .then(() => {
      const addOrganizations = []

      organizations.forEach(organization => {
        addOrganizations.push(new Organizations(organization).save())
      })

      return Promise.all(addOrganizations)
    })
    .then(() => done())
    .catch(err => done(err))
}

module.exports = {
  organizations,
  populateOrganizations
}
