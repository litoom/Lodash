/*
将数组（array）拆分成多个 size 长度的区块，
并将这些区块组成一个新数组。 如果array 无法
被分割成全部等长的区块，那么最后剩余的元素将
组成一个区块。
*/


function chunk(array, size = 1) {
  let arr = [];
  while (array.length >= size) {
    arr.push(array.splice(0, size));
  }
  if (array.length !== 0) {
    arr.push(array);
  }
  return arr;
}
console.log(chunk([1, 2, 3, 4], 3));
