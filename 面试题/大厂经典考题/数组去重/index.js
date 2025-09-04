function unique(arr) {
  arr.sort()
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i]===arr[i-1]){
      arr.splice(i,1)
    }

  }
  return arr
}


