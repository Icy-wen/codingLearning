function xq() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('相亲成功');
        resolve()  // 成功状态
      }, 1000)
    })
  }
  
  function marry() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('结婚了');
        resolve()
      }, 2000)
    })
  }
  
  function baby() {
    setTimeout(() => {
      console.log('小孩出生');
    }, 500)
  }
  
  // 1. 执行 xq 函数，立即返回一个promise 实例对象，但是此时改对象的状态是 pending （等待状态）
  // 2. .then立即触发，但是 then 里面的回调函数没有触发
  // 3. 等待 xq 函数里面的reslove()执行完毕，此时实例对象的状态会变更为 fulfilled （成功状态），此时 .then 里面的回调函数会触发执行
  
  xq()  // 里面执行到了 reslove()
  .then(() => {  // then的源码里面也返回了一个 promise 实例对象，状态默认继承自 xq 函数返回的对象的状态
    return marry()
  })
  .then(() => { // 保正第一个 then 返回的对象状态继承于marry 函数返回的对象状态
    baby()
  })
  
  
  // xq()
  // .then(() => {
  //   marry().then(() => {
  //     baby()
  //   })
  // })