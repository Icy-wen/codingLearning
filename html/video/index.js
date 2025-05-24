//鼠标在白色区域移动控制彩色区域的高度

//在白色容器内监听鼠标移动事件

//1.获取元素
var speed = document.querySelector(".speed");
var bar = document.querySelector(".speed-bar");
var video = document.querySelector(".flex");

speed.addEventListener("mousemove", function (e) {
    //控制bar的高度
    //获取鼠标在白色容器的位置
var y = e.pageY - speed.offsetTop;
var percent = y / speed.offsetHeight;
var height = Math.round(percent * 100) + "%";
bar.style.height = height;
//控制数值
var min =0.4;
var max = 4;
var playbackRate = percent * (max - min) + min;
bar.textContent = playbackRate.toFixed(2) + "x";
//控制视频播放速度
video.playbackRate = playbackRate;
});
