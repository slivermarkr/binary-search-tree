import sortArray from "./removeDuplicate.js";
export default function () {
  const array = [];

  for (let i = 0; i <= 100; i++) {
    const random = Math.floor(Math.random() * 100);
    array.push(random);
  }
  return sortArray(array);
}
