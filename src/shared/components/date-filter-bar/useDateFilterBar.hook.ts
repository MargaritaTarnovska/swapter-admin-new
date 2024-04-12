import { useState } from 'react';

export const useDateFilterBar = () => {
  const [dateFilterBarVal, setDateFilterBarVal] = useState<string | undefined>('today');

  return { dateFilterBarVal, setDateFilterBarVal };
};
