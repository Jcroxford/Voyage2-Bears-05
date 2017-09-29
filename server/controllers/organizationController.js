const Organizations = require('../models/organizationModel')

module.exports = {
  create(req, res) {
    const { name, org_type } = req.body

    const organization = new Organizations({ name, org_type })

    organization.save()
      .then(user => res.send(organization))
      .catch(err => res.status(400).send({ error: err.message }))
  }
}
