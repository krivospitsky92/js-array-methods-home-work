// 1. Массив чисел от 5 до 10 добавить в конец другого массива

const arr1 = [1, 2, 3, 4];

const arr2 = [5, 6, 7, 8, 9, 10];

let result = arr1.concat(arr2);

console.log(result);

// 2. Дан массив чисел [4, 9, 16, 25, 36, 49]. На его основе создать массив с квадратными корнями чисел (Math.sqrt)

const arr = [4, 9, 16, 25, 36, 49];

const result = arr.map((elem) => Math.sqrt(elem));

console.log(result);

// 3. Дан массив чисел 1...20. Вычислить сумму нечетных чисел массива

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const result = arr
  .filter((element) => element % 2 === 1)
  .reduce((acc, num) => acc + num);
console.log(result);

// 4. * Дан массив чисел 1 до 10. Удалить у него каждое нечетное значение

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrCopy = arr.filter(function (num) {
  if (num % 2 === 0) {
    return num;
  }
});
