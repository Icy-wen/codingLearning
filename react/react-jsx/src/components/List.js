function List(props){//子组件
    return(
        <ul>
            {
                props.data.map((item)=>{
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
    )
}
export default List
