+const expect = require('chai').expect
 +const fs = require('fs')
 +const jsdom = require('mocha-jsdom')
 +const path = require('path')
 +
 +describe('functions', () => {
 +  jsdom({
 +    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
 +  })
 +
 +  describe('happyHolidays', () => {
 +    it('returns "Happy holidays!"', () => {
 +      expect(happyHolidays()).to.equal('Happy holidays!')
 +    })
 +  })
 +
 +  describe('happyHolidaysTo(name)', () => {
 +    it('returns "Happy holidays, ${name}!"', () => {
 +      expect(happyHolidaysTo('you')).to.equal('Happy holidays, you!')
 +    })
 +  })
 +
 +  describe('happyHolidayTo(holiday, name)', () => {
 +    it('returns "Happy ${holiday}, ${name}!"', () => {
 +      expect(happyHolidayTo('Independence Day', 'you')).to.equal('Happy Independence Day, you!')
 +    })
 +  })
 +
 +  describe('daysUntilHoliday(days, holiday)', () => {
 +    it('returns "It\'s ${days} until ${holiday}!"', () => {
 +      expect(daysUntilHoliday(20, "Mother's Day")).to.equal("It's 20 days until Mother's Day!")
 +    })
 +  })
 +})
