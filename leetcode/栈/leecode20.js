//遇到左括号就入栈，遇到右括号就去栈中寻找最近的左括号，看是否匹配。
var isValid = function(s) {
    let stack=[];
  if(s.length%2!==0){
    return false
  }
  for(let i=0;i<s.length;i++){
    if(s[i]==="("){
        stack.push(")");
    }else if(s[i]==="["){
        stack.push("]")
    }else if(s[i]==="{"){
        stack.push("}")
    }else if(stack[stack.length-1]===s[i]){
        stack.pop();
    }else{
        return false;
    }
  }
  
    return stack.length===0;
};



//字符串从左往右但凡是朝左的括号，就入栈，但凡碰到朝右的括号，就出栈一个元素，
//每一个出栈的都到obj中去查找另一半

var isValid = function(s) {
    let stack=[];
    let obj={
        "(":")",
        "[":"]",
        "{":"}"
    }
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]!==undefined){
            stack.push(s[i]) 
        }else{
            if(obj[stack.pop()]!==s[i]){
                return false;
            }
        }
    }
    return stack.length===0;
}