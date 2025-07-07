import Calendar from "./calender"

// 通过 defaultValue 来串入初始值 date
// 修改 date 之后可以在 onChange 里拿到最新的值   --- 非受控


function App() {
  return <Calendar 
          defaultValue={new Date()}
          onChange={(newDate) => {
            alert(newDate.toLocaleDateString())
          }}
          ></Calendar>
}

export default App