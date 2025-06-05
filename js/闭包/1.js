// function foo() {
//     var a = 1
//     let b = 2
//     {
//       let b = 3
//       var c = 4
//       let d = 5
//       console.log(a)// 输出：1  当前作用域没有a，就会去上一级作用域找
//       console.log(b)// 输出：3  当前作用域有b，就会直接使用
//     }
//     console.log(b)// 输出：2  输出当前作用域的b
//     console.log(c)// 输出：4  var声明的c发生变量提升
//     console.log(d)// 报错：ReferenceError: d is not defined  let声明的d不会发生变量提升
    
//   }
//   foo()

function outer() {
  let count = 0;
  console.log(count);
  function inner() {
      count++; // 内部函数访问外部函数的变量
      console.log(count);
  }
  return inner; // 返回闭包
}

const counter = outer();
counter(); // 输出 1
counter(); // 输出 2（变量 count 被闭包保留）




function createClosure() {
  const largeArray = new Array(1000).fill('x'); // 占用大量内存
  return function() {
      console.log(largeArray.length);
  };
}

const closure = createClosure(); // largeArray 不会被回收，因为被闭包引用