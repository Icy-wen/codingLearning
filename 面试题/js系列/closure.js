//颗粒化 柯里化
function getArea(width){
    return (height)=>{
        width*height
    }
}
const getTenWidthArea=getArea(10)
const area=getTenWidthArea(30)