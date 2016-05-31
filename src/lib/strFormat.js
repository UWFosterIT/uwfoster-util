/**
 * Created by gabugabu on 5/27/16.
 */
import {install} from 'source-map-support';
import _ from 'lodash';

install();

export function daysOfWeek(days) {
  if (typeof days === 'string') {
    days = days.split(/, +/);
  } else {
    days = days.map((day) => {
      return day.Name;
    });
  }
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let formattedDays = '';
  weekdays.forEach((day) => {
    if (_.includes(days, day)) {
      formattedDays += day[0];
    } else {
      formattedDays += ' ';
    }
  });
  return formattedDays;
}

export function padAndTrim(str, length) {
  let trimmedStr = str.substring(0, length);
  return _.padEnd(trimmedStr, length);
}

export function truncateOnLastComma(str, length) {
  return _.truncate(str, {length: length, separator: /,? +/});
}
