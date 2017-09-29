
const mongoose = require('mongoose')

const OrganizationsSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    trim: true
  },
  org_type: {
    type: String,
    enum: ['NONPROFIT', 'EDUCATIONAL', 'LANDMARK', 'MUSEUM'],
    default: 'NONPROFIT'
  },
  description: {
    type: String
  },
  address: {
    type: String
  },
  events: {
    type: String,
    default: ''
  },
  items_needed: {
    type: [String],
    default: []
  },
  membership: {
    type: Boolean,
    default: false
  },
  has_shop: {
    type: Boolean,
    default: false
  },
  amazon_smile: {
    type: Boolean,
    default: false
  },
  amazon_wishlist: {
    type: Boolean,
    default: false
  },
  donate_airline_miles: {
    type: Boolean,
    default: false
  },
  short_term_volunteering: {
    type: Boolean,
    default: false
  },
  long_term_volunteering: {
    type: Boolean,
    default: false
  },
  unique_donation: {
    type: Boolean,
    default: false
  }
})

const Organizations = mongoose.model('Organizations', OrganizationsSchema)

module.exports = Organizations
