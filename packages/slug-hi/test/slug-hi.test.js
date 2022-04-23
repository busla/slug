/* global beforeEach, chai, describe, it */

import slug from '../slug.js'

let assert
if (typeof chai === 'undefined') {
  assert = (await import('node:assert')).default
} else {
  assert = chai.assert
}

describe('slug', function () {
  beforeEach(slug.reset)

  it('should replace hindi chars', function () {
    const charMap = {
      अ: 'a',
      आ: 'aa',
      ए: 'e',
      ई: 'ii',
      ऍ: 'ei',
      ऎ: 'ae',
      ऐ: 'ai',
      इ: 'i',
      ओ: 'o',
      ऑ: 'oi',
      ऒ: 'oii',
      ऊ: 'uu',
      औ: 'ou',
      उ: 'u',
      ब: 'B',
      भ: 'Bha',
      च: 'Ca',
      छ: 'Chha',
      ड: 'Da',
      ढ: 'Dha',
      फ: 'Fa',
      फ़: 'Fi',
      ग: 'Ga',
      घ: 'Gha',
      ग़: 'Ghi',
      ह: 'Ha',
      ज: 'Ja',
      झ: 'Jha',
      क: 'Ka',
      ख: 'Kha',
      ख़: 'Khi',
      ल: 'L',
      ळ: 'Li',
      ऌ: 'Li',
      ऴ: 'Lii',
      ॡ: 'Lii',
      म: 'Ma',
      न: 'Na',
      ङ: 'Na',
      ञ: 'Nia',
      ण: 'Nae',
      ऩ: 'Ni',
      ॐ: 'oms',
      प: 'Pa',
      क़: 'Qi',
      र: 'Ra',
      ऋ: 'Ri',
      ॠ: 'Ri',
      ऱ: 'Ri',
      स: 'Sa',
      श: 'Sha',
      ष: 'Shha',
      ट: 'Ta',
      त: 'Ta',
      ठ: 'Tha',
      द: 'Tha',
      थ: 'Tha',
      ध: 'Thha',
      ड़: 'ugDha',
      ढ़: 'ugDhha',
      व: 'Va',
      य: 'Ya',
      य़: 'Yi',
      ज़: 'Za'
    }
    for (const char in charMap) {
      const replacement = charMap[char]
      assert.strictEqual(slug('foo ' + char + ' bar baz'), 'foo-' + replacement.toLowerCase() + '-bar-baz', 'replacing \'' + char + '\'')
    }
  })
})
