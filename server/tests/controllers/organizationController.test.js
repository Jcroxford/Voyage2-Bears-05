const expect  = require('chai').expect
const request = require('supertest')

const app = require('../../server')

// seed data required for these tests
const { organizations, populateOrganizations } = require('../seed/organizationSeed')

describe('organizationController', () => {
  beforeEach(populateOrganizations)

  describe('POST /api/organization', () => {
    it('should return organization if given valid fields', (done) => {
      const organization = {
        name:  'Kalicos Project',
      }

      request(app)
        .post('/api/organization')
        .send(organization)
        .expect(200)
        .expect(res => {
          expect(res.body).to.have.all.keys(['_id', 'name'])
          expect(res.body.name).to.equal(organization.name)
        })
        .end(done)
    })

  })
})
