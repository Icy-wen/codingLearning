// 根据用户屏幕尺寸设置页面字体大小

(function(win,doc){
    //1. 获取用户屏幕宽度
    const screenWidth = win.innerWidth
    //2. 设置页面根字体大小
    doc.documentElement.style.fontSize = screenWidth / 18.75 + 'px'
    //3. 监听用户屏幕尺寸变化
    win.addEventListener('resize',()=>{
        //4. 重新设置页面根字体大小
        doc.documentElement.style.fontSize = win.innerWidth / 18.75 + 'px'
    })
})(window,document)
