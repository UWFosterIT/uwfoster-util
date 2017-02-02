/* global expect, uwutil */
import './setup';

let testString = 'David S. Pumpkins';

describe('getFirstName', () => {
  it('should return a first name', () => {
    let firstName = uwutil.nameParse.getFirstName(testString);
    expect(firstName).to.equal('David');
  });
});

describe('getLastName', () => {
  it('should return a last name', () => {
    let lastName = uwutil.nameParse.getLastName(testString);
    expect(lastName).to.equal('Pumpkins');
  });
});

describe('getFirstMiddleName', () => {
  it('should return a first and all middle names name', () => {
    let firstMiddleName = uwutil.nameParse.getFirstMiddleName(testString);
    expect(firstMiddleName).to.equal('David S.');
  });
});

describe('getFullName', () => {
  it('should return the full name', () => {
    let fullName = uwutil.nameParse.getFullName('David S.', 'Pumpkins');
    expect(fullName).to.equal(testString);
  });
});

describe('getFullLastFirstName', () => {
  it('should return the full name last first with comma when given first and last names', () => {
    let fullName = uwutil.nameParse.getFullLastFirstName('David S.', 'Pumpkins');
    expect(fullName).to.equal('Pumpkins, David S.');
  });

  it('should return the full name last first with comma when give full Name', () => {
    let fullName = uwutil.nameParse.getFullLastFirstName('David S. Pumpkins');
    expect(fullName).to.equal('Pumpkins, David S.');
  });
});