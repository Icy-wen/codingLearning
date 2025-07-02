//维护一个单调递减的栈

var dailyTemperatures = function (temperatures) {
    let stack = [];
    const len=temperatures.length;
    let res = new Array(len).fill(0);
    stack.push(0);
    for (let i = 1; i < len; i++) {
        if(temperatures[i]<=temperatures[stack[stack.length-1]]){
            stack.push(i); 
        }else{
            while(stack.length&&temperatures[i]>temperatures[stack[stack.length-1]]){
                const top=stack.pop();
                res[top]=i-top;
            }
            stack.push(i);
        }
    }
    return res;
}