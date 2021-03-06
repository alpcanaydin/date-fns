// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var addWeeks = require('./')
var moment = require('moment')

suite('addWeeks', function () {
  benchmark('date-fns', function () {
    return addWeeks(this.date, 2)
  })

  benchmark('Moment.js', function () {
    return this.moment.add(2, 'weeks')
  })
}, {
  setup: function () {
    this.date = new Date()
    this.moment = moment()
  }
})
