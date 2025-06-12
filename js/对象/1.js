const obj = {
    name: '张三',
    age: 18,
    address: '北京',
}//引用地址不被修改，但是引用地址中的值可以修改
delete obj.name;
obj['name'] = '李四'