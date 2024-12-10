import sortArray from "./sortArray.js";
let arr = null;
export default function getArray(num = 100) {
  if (arr) return arr;
  const array = [];

  for (let i = 0; i <= num; i++) {
    const random = Math.floor(Math.random() * 100);
    array.push(random);
  }
  arr = sortArray(array);
  return arr;
}
