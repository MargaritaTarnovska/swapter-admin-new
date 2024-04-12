import { CalendarIcon } from '@jsx-icons/calendar.icon.tsx';

export const filterBarList = [
  {
    title: 'Today',
    val: 'today',
  },
  {
    title: '7 days',
    val: 'week',
  },
  {
    title: 'Month',
    val: 'month',
  },
  {
    title: '3 Months',
    val: '3-months',
  },
  {
    activeIcon: <CalendarIcon color="#7839EE" />,
    icon: <CalendarIcon />,
    title: 'Custom',
    val: 'calendar',
  },
];
