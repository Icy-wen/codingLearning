

import dayjs, { Dayjs } from 'dayjs';

interface HeaderProps {
  value: Dayjs;
  onChange?: (date: Dayjs) => void;
}

function Header({ value, onChange }: HeaderProps) {
  const handlePrevMonth = () => {
    onChange?.(value.subtract(1, 'month'));
  };
  
  const handleNextMonth = () => {
    onChange?.(value.add(1, 'month'));
  };
  
  const handleToday = () => {
    onChange?.(dayjs());
  };

  // 新增：年份切换
  const handlePrevYear = () => {
    onChange?.(value.subtract(1, 'year'));
  };
  const handleNextYear = () => {
    onChange?.(value.add(1, 'year'));
  };

  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={handlePrevYear}>{'<<'}</div>
        <div className="calendar-header-icon" onClick={handlePrevMonth}>&lt;</div>
        <div className="calendar-header-value">
          {`${value.year()}年${value.month() + 1}月`}
        </div>
        <div className="calendar-header-icon" onClick={handleNextMonth}>&gt;</div>
        <div className="calendar-header-icon" onClick={handleNextYear}>{'>>'}</div>
        <button className="calendar-header-btn" onClick={handleToday}>今天</button>
      </div>
    </div>
  );
}

export default Header