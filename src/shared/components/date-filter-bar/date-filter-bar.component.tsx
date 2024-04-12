import { FC } from 'react';

import { filterBarList } from '@components/date-filter-bar/date-filter-bar.helper.tsx';
import clsx from 'clsx';

export const DateFilterBarComponent: FC<IPropsDateFilterBar> = ({ val, setVal }) => {
  return (
    <div className="flex items-center justify-start">
      {filterBarList.map((item, key) => (
        <div
          key={key}
          onClick={() => setVal(item?.val)}
          className={clsx(
            val === item?.val ? 'bg-active' : 'bg-primary',
            key === 0 ? 'rounded-l-md border-l' : '',
            key === filterBarList.length - 1 ? 'rounded-r-md' : '',
            'flex items-center justify-start px-4 py-2.5 border-r border-b border-t border-solid border-primary cursor-pointer',
          )}
        >
          {item?.icon ? (
            <span className="mr-1">{val === item?.val ? item?.activeIcon : item?.icon}</span>
          ) : null}
          <p
            className={clsx(
              val === item?.val ? 'text-brand-primary-900' : 'text-secondary-700',
              'text-sm font-semibold',
            )}
          >
            {item?.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export type IPropsDateFilterBar = {
  val?: string;
  setVal: (val?: string) => void;
};
