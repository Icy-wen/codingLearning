import type { CalendarProps } from "./index";
import dayjs, { Dayjs } from 'dayjs'

interface MonthCalendarProps extends CalendarProps{
    selected?: Dayjs | null;
    onSelect?: (date: Dayjs) => void;
}
function getAllDays(date:Dayjs){
    const startDate = date.startOf('month'); // 这个月的一号
    const startDayOfWeek = startDate.day(); // 一号是星期几（0-周日, 6-周六）
    const daysInfo:Array<{date:Dayjs,currentMoth:boolean}>=[];
    // 补全上月
    for (let i = 0; i < startDayOfWeek; i++) {
        daysInfo.push({
            date: startDate.subtract(startDayOfWeek - i, 'day'),
            currentMoth: false
        });
    }
    // 本月
    const daysInMonth = date.daysInMonth();
    for (let i = 0; i < daysInMonth; i++) {
        const d = startDate.add(i, 'day');
        daysInfo.push({
            date: d,
            currentMoth: true
        });
    }
    // 补全下月
    const total = Math.ceil(daysInfo.length / 7) * 7;
    for (let i = daysInfo.length; i < total; i++) {
        daysInfo.push({
            date: daysInfo[daysInfo.length - 1].date.add(1, 'day'),
            currentMoth: false
        });
    }
    return daysInfo;
}
//渲染allDays
function renderDays(days:Array<{date:Dayjs,currentMoth:boolean}>, selected: Dayjs | null, onSelect: ((date: Dayjs) => void) | undefined) {
    const rows=[]
    for(let i=0;i<days.length/7;i++){
        const row=[]
        for(let j=0;j<7;j++){
            const item=days[i*7+j]
            const isSelected = selected && item.date.isSame(selected, 'day');
            const isToday = item.date.isSame(dayjs(), 'day');
            row[j]=<div 
                className={
                    "month-body-cell " + 
                    (item.currentMoth?'month-body-cell-current ':'') +
                    (isSelected ? 'month-body-cell-selected ' : '') +
                    (isToday ? 'month-body-cell-today ' : '')
                }
                onClick={() => onSelect?.(item.date)}
                key={item.date.format('YYYY-MM-DD')}
            >{item.date.date()}</div>
        }
        rows.push(<div className="month-body-row" key={i}>{row}</div>)
    }
    return rows
}
function MonthCalendar(props: MonthCalendarProps) {
  const { value, selected, onSelect } = props;
  const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const allDays = getAllDays(value);
  
  return (
    <div className='calendar-month'>
      <div className="calendar-month-weeklist">
        {weekList.map((week) => (
          <div key={week} className="weeklist-item">{week}</div>
        ))}
      </div>
      <div className="month-body">
        {renderDays(allDays, selected ?? null, onSelect)}
      </div>
    </div>
  );
}
export default MonthCalendar