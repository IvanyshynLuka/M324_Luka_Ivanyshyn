/* global describe, it */

import { strict as assert } from 'assert'
import { sum } from './index.js'

describe('sum', () => {
  it('should add 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3)
  })

  it('should add 1.5 + 2.25 to equal 3.75', () => {
    assert.equal(sum(1.5, 2.25), 3.75)
  })
})
