import sortArray from "./sortArray.js";
export default function getArray(num = 100) {
  const array = [];

  for (let i = 0; i <= num; i++) {
    const random = Math.floor(Math.random() * 100);
    array.push(random);
  }
  return sortArray(array);
}
