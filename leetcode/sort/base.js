//数组 有序 线性 索引
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.unshift("hello"); // 头部添加元素
// arr.shift(); // 头部删除元素
// arr.push("world"); // 尾部添加元素
// arr.pop(); // 尾部删除元素
// arr.splice(2,0,"a"); // 位置2不删除添加a
// arr.splice(4,1); // 位置4移除一个元素
// console.log(arr[0]);

const arr = [5, 3, 7, 2, 0];

arr.sort(function (a, b) {
  return b - a;
});

console.log(arr);
