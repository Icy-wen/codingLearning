let a:number=1
function add(a:number,b:number){
    return a+b
}
console.log(add(1,a))

let b:any=1;
b='hello'
b=true


let arr:(number | string)[]=[1,'hello']
let arr2:Array<number|string>=arr

let tuple:[number,string]=[1,'hello']
