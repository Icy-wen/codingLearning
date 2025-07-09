import './App.css'
import List from './components/List'
function App() {//根组件 父组件
  const name = 'ct-jsx';
  const songs = [
    {
      id:1,
      name:'hello world',

    },
    {
      id:2,
      name:'hello jsx',
    },
    {
      id:3,
      name:'hello react',
    },
    {
      id:4,
      name:'hello hooks',
    },
    {
      id:5,
      name:'hello router',
    },
  ]
  const flag = true
  const styleObj={
    color:'green'
  }

  return (
    <div className="App">
      {/* <h1>Hello {name}</h1> */}
      {/* <ul>
        {
          songs.map((item,index)=>{
            return <li key={index}>{index+1}.{item.name}</li>
          })
        }
      </ul> */}
      {/* <h3>
        {
          flag? '真有意思' : '真难'
        }
      </h3> */}
      {/* <div style={{color:'red'}}>红色</div>
      <div style={styleObj}>绿色</div>
      <div className="person">粉色</div> */}
      {/* <div className={flag?'title':null}>测试</div> */}
      <h1>hello react</h1>
      <List data={songs}></List>
    </div>

  );
}
export default App;