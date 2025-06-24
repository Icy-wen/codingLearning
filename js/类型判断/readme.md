# typeof
1. typeof 可以准确判断除了null以外的基本类型
2. typeof 对于引用类型来说，除了function会返回function，其他的都返回object

- typeof 是通过将值转换为二进制来判断类型的，对于二进制前三位是 0 的统一识别为对象，所有的引用类型二进制前三位都是0，而null全是0


# instanceof
1. instanceof 可以准确的判断复杂引用类型，但是不能正确判断基本数据类型
2. instanceof 内部机制是通过判断对象的原型链中是不是能找到类型的prototype
- 但是不能正确判断基本数据类型
基本类型默认不访问原型



# Object.propotype.toString.call()


# Array.isArray()