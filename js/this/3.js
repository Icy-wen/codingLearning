function foo() {
    console.log(this.a);
  }
  
  const obj1 = { a: 1, foo: foo };
  const obj2 = { a: 2 };
  
  obj1.foo.call(obj2); // 2（显式绑定 > 隐式绑定）
  new obj1.foo(); // undefined（new 绑定 > 隐式绑定）