export default function Child({ list }) {
  console.log(list);
  
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