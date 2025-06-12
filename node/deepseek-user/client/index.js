//页面初次加载拿到用户数据
window.onload = async function () {
    const users = await fetchUser('all');//调用fetchUser函数，获取用户数据
    renderUser(users);
}
async function fetchUser(name){
    //向后端发送请求，获取用户数据
    const res= await fetch(`http://localhost:3000/api/users?name=${name}`);//接口地址
    const users = await res.json();//将数据转换为json格式
    return users.data;//打印返回的数据
}

function renderUser(users){//渲染用户数据

    const tbody = document.querySelector('tbody');//获取tbody元素
    tbody.innerHTML = '';//清空tbody元素
    for (let i = 0; i < users.length; i++) {//遍历用户数据
        const user = users[i];//获取用户数据
        const tr = document.createElement('tr');//创建tr元素
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            
        `;//将用户数据填充到tr元素中
        tbody.appendChild(tr);//将tr元素添加到tbody元素中
    }
}

//搜索功能
//给按钮添加点击事件，当点击按钮时，调用searchUser函数，获取用户数据，渲染用户数据

const btn = document.querySelector('.search-container button');//获取按钮元素
const input = document.querySelector('#nameSearch');//获取输入框元素
btn.addEventListener('click', async() =>{//添加点击事件
    //获取输入框的值
    //console.log(input.value);
    //将输入框的值传递给后端，向后端发送请求，获取用户数据
    const users=await fetchUser(input.value);
    renderUser(users);//渲染用户数据
    
})