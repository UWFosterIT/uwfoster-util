import 'source-map-support/register';

export function createNestedFromArray(arr, start) {

  if (!start) {
    start = {};
  }

  return arr.reduceRight((obj, level) => {
    let  newObj = {};
    newObj[level] = obj;
    return newObj;
  }, start);
}