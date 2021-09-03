import React from 'react';
import GreaterThanSign from '../icons/GreaterThanSign';
import { useGetCalendar } from '../../hook/useGetCalendar';
import * as Styles from './styles';

const Calendar = () => {
  const { dayOfWeek, today, selectDate, viewDate, createCalendar, handleSelect, handleChangeMonth } = useGetCalendar();
  const calenderNumber = createCalendar();
  return (
    <Styles.Wrapper>
      <Styles.Month>
        <Styles.Button onClick={() => handleChangeMonth(false)}>
          <GreaterThanSign left />
        </Styles.Button>
        <span>{viewDate.format('YYYY.MM')}</span>
        <Styles.Button onClick={() => handleChangeMonth(true)}>
          <GreaterThanSign />
        </Styles.Button>
      </Styles.Month>
      <Styles.Week>
        {dayOfWeek.map((ko) => (
          <Styles.Day key={ko}>{ko}</Styles.Day>
        ))}
      </Styles.Week>
      {calenderNumber.map((row) => (
        <Styles.Week>
          {row.map((num) => (
            <Styles.Day
              onClick={() => handleSelect(num)}
              selected={selectDate?.format('YYYYMMDD') === num.format('YYYYMMDD')}
              isToday={today.format('YYYYMMDD') === num.format('YYYYMMDD')}
              disabled={num.format('MM') !== viewDate.format('MM')}>
              {num.format('D')}
            </Styles.Day>
          ))}
        </Styles.Week>
      ))}
    </Styles.Wrapper>
  );
};

export default Calendar;
