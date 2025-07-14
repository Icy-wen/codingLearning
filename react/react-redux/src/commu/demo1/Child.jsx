export default function Child(props) {
  console.log(props);
  const list=props.list
  return (
    <div className="bd">
        <ul>
          {
            list.map((item) => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
  )
}