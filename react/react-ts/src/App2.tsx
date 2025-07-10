import Calendar from './components/calendar/index.tsx'
import dayjs from 'dayjs'
function App(){
    return(
        <div>
        <Calendar value={dayjs(2025-7-1)}/>
        </div>
    )
}
export default App
