//选择排序  每次循环找到最小的放到前面
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
      minIndex = i;
      const currentMin=getMin(minIndex,len-1,arr);
      if (minIndex !== currentMin) { // 最小值不是当前元素，交换位置
        [arr[i], arr[currentMin]] = [arr[currentMin], arr[i]]; // 交换两个元素的位置
      }
    }
    return arr;
  }


  function getMin(i,j,arr){
    let min = Infinity,index=0;
    for(let k=i;k<=j;k++){
      if(arr[k]<min){
        min = arr[k];
        index = k; //记录下标 方便后面交换
      }
    }
    return index;
  }

  console.log(selectionSort([5, 3, 7, 2, 0]));