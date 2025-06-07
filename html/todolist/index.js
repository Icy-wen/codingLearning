//点击按钮操作
//1. 获取用户输入的内容
//2. 把内容添加到列表中

//监听按钮点击事件
//获取按钮
const form=document.querySelector('form');
const input=document.querySelector('input');
const ul=document.querySelector('ul');

const toDoListArray=[];
form.addEventListener('submit',function(e){
    e.preventDefault();//阻止表单默认刷新
    let itemId=String(Date.now());//生成一个id
    let toDoItem=input.value;//获取用户输入的内容
    addItemToArray(itemId,toDoItem);//添加到数组中
    addItemToDom(itemId,toDoItem);//添加到dom中
    input.value='';//清空输入框
})

function addItemToArray(itemId,toDoItem){
   toDoListArray.push({
    id:itemId,
    item:toDoItem
   }) 
}
function addItemToDom(itemId,toDoItem){
  //创建li元素
  const li=document.createElement('li');
  //给li设置值
  li.setAttribute('id',itemId);
  li.textContent=toDoItem;
  //加入ul
  ul.appendChild(li);
}

//移除待办
ul.addEventListener('click',function(e){
 //获取被点击元素的id
 let clickedItemId=e.target.getAttribute('id'); 
 removeItemFromArray(clickedItemId);
 removeItemFromDom(clickedItemId)
})

function removeItemFromArray(clickedItemId){
    for(let i=0;i<toDoListArray.length;i++){
        if(toDoListArray[i].id===clickedItemId){
            toDoListArray.splice(i,1);
        }
    }
}
function removeItemFromDom(clickedItemId){
    const li=document.getElementById(clickedItemId);
    li.remove();
}