var c = 1; // 全局作用域
function foo(a, b) {
  console.log(a);
 
  a = 3
  b = 2
  console.log(b);
  function b() {}
  console.log(b);
}
foo(1)
console.log(c)
