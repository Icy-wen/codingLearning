const arr = [5, 3, 7, 2, 0];

//冒泡排序  把最大的冒泡到最后面
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 每次循环都把最大的冒泡到最后面
      if (arr[j] > arr[j + 1]) {
        // 比较相邻的两个元素，如果前一个比后一个大，就交换它们的位置
        // let temp = arr[j]; // 交换两个元素的位置
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr)); // [0, 2, 3, 5, 7]



//插入排序  每次循环把当前元素插入到前面的有序序列中
function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    var preIndex = i - 1; // 已排序序列的末尾位置
    var current = arr[i]; // 当前待排序元素
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]; // 向后移动已排序序列
      preIndex--; // 继续向前比较
    }
    arr[preIndex + 1] = current; // 插入到正确位置
  }
  return arr;
}


