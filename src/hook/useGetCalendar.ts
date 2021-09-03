import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import { useState, useCallback } from 'react';

dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

export const useGetCalendar = () => {
  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState<Dayjs>();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const handleSelect = useCallback((day: Dayjs) => {
    setSelectDate(day);
  }, []);

  const handleChangeMonth = useCallback(
    (next: boolean) => setViewDate(next ? viewDate.add(1, 'month') : viewDate.subtract(1, 'month')),
    [viewDate],
  );

  const createCalendar = useCallback(() => {
    const startWeek = viewDate.startOf('month').week();
    const endWeek = viewDate.endOf('month').week() === 1 ? 53 : viewDate.endOf('month').week();
    const calenderDayjs = [];

    // eslint-disable-next-line no-plusplus
    for (let week = startWeek; week <= endWeek; week++) {
      calenderDayjs.push(
        Array(7)
          .fill(0)
          .map((num, i) =>
            viewDate.format('MM') === '12'
              ? viewDate
                  .startOf('week')
                  .week(week - 52)
                  .add(num + i, 'day')
              : viewDate
                  .startOf('week')
                  .week(week)
                  .add(num + i, 'day'),
          ),
      );
    }

    return calenderDayjs;
  }, [viewDate]);

  return { dayOfWeek, today, selectDate, viewDate, createCalendar, setViewDate, handleSelect, handleChangeMonth };
};
