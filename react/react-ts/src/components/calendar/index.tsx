import './index.scss'
import MonthCalendar from './MonthCalendar';
import Header from './Header';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useState } from 'react';

export interface CalendarProps{
    value:Dayjs
}
function Calendar(props:CalendarProps){
    // 新增：内部状态管理
    const [current, setCurrent] = useState(props.value);
    const [selected, setSelected] = useState<Dayjs | null>(null);

    // 切换日期
    const handleChange = (date: Dayjs) => {
        setCurrent(date);
    };
    // 选中某天
    const handleSelect = (date: Dayjs) => {
        setSelected(date);
    };

    return(
        <div className='calendar'>
            <Header value={current} onChange={handleChange}/>
            <MonthCalendar value={current} selected={selected} onSelect={handleSelect}/>
        </div>
    )
}
export default Calendar
