/**
 * Created by gabugabu on 5/31/16.
 */
import './setup';

describe('daysOfWeek', () => {
  it('should return a 7-character string from a string of days', () => {
    let dayStr = uwutil.strFormat.daysOfWeek('Sunday, Tuesday, Thursday, Saturday');
    expect(dayStr).to.equal('S T T S');
  });

  it('should return a 7 character string from an array of day objects', () => {
    let dayAry = [
      {Name: 'Monday'},
      {Name: 'Wednesday'},
      {Name: 'Friday'}
    ];
    let dayStr = uwutil.strFormat.daysOfWeek(dayAry);
    expect(dayStr).to.equal(' M W F ');
  });
});

describe('padAndTrim', () => {
  it('should return a padded string when string is shorter than specified length', () => {
    expect(uwutil.strFormat.padAndTrim('short', 10).length).to.equal(10);
  });

  it('should return a trimmed string when string is longer than specified length', () => {
    expect(uwutil.strFormat.padAndTrim('The quick brown fox jumps over the lazy dog.', 20).length).to.equal(20);
  });
});

describe('truncateOnLastComma', () => {
  it('should truncate a comma-separated list and add ellipsis', () => {
    let result = uwutil.strFormat.truncateOnLastComma('this, that, and the other', 16);
    expect(result.length).to.be.most('16');
    expect(result).to.match(/...$/);
  });
});