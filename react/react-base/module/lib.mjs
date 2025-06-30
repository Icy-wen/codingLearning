function add(a,b){
    return a+b
}
export {add}
//export default add 只能有一个

export default function (a,b){
    return a-b
}//等同于上面的