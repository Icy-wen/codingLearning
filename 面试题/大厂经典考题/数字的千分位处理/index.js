const oldNum = 111245654321145.22234   // 1,245,654,321,145.22

// function toThousand(num) {
//   const [integer, decimal] = String.prototype.split.call(num, '.')
//   const arr = []
//   let j = 0
//   for (let i = integer.length - 1; i >= 0; i--) {
//     arr.unshift(integer[i])
//     j++
//     if (j % 3 === 0 && i !== 0) {
//       arr.unshift(',')
//     }
//   }
//   if (decimal) {
//     return `${arr.join('')}.${decimal}`
//   }
//   return arr.join('')
  
  
// }

function toThousand(num) {
  let [integer, decimal] = String.prototype.split.call(num, '.')
  integer = integer.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
  return `${integer}${decimal ? `.${decimal}` : ''}`
}
console.log(toThousand(oldNum));
