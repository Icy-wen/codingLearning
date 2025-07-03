import { useState } from "react";
function App(){
    let [num,setNum] = useState(1);//返回[1,function]
    function handle(){
        setNum(++num);//修改值并触发视图更新
        console.log(num);
    }
    return (
        <div>
            <button onClick={handle}>{num}</button>
        </div>
    )
}
export default App;
