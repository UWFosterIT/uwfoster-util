/**
 * Created by gabugabu on 10/26/16.
 */
import 'source-map-support/register';

export function getFirstName(fullName) {
  return fullName.slice(0, fullName.indexOf(' '));
}

export function getLastName(fullName) {
  return fullName.slice(fullName.lastIndexOf(' ') + 1);
}

export function getFirstMiddleName(fullName) {
  return fullName.slice(0, fullName.lastIndexOf(' '));
}

export function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

export function getFullLastFirstName(firstName, lastName) {
  if (lastName) {
    return `${lastName}, ${firstName}`;
  }
  return getFullLastFirstName(getFirstMiddleName(firstName), getLastName(firstName));
}