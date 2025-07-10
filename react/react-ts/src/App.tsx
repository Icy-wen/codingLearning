interface PersonProps{
    name:string;
    content?:React.ReactNode;//jsx类型
}

const Animal:React.FunctionComponent<PersonProps>=(props)=>{
    return(
        <div>
            <h2>狗{props.name}</h2>
        </div>
    )
}
function Person(props:PersonProps){
    return(
        <>
        <h1>hello{props.name}</h1>
        {props.content}
        </>
    )
}

function App(){
    return(
        <div>
        <h1>hello world</h1>
        <Person name='张三' content={<h1>hello</h1>}/>
        <Animal name='小白'/>
        </div>
    )
}
export default App