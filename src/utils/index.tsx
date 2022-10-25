export function filterArrayDuplicates(array: any[]) {
  return array.filter((value, index) => array.indexOf(value) === index);
}
