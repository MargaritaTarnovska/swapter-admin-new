import { FC } from 'react';

import { SearchIcon } from '@jsx-icons/search.icon.tsx';

export const InputSearchComponent: FC<IPropsInputSearch> = ({ placeholder }) => {
  return (
    <div className="relative min-w-80 max-w-80 w-full border border-solid border-primary rounded-md overflow-hidden">
      <span className="absolute left-4 top-0 bottom-0 m-auto w-5 h-5">
        <SearchIcon />
      </span>
      <input
        placeholder={placeholder ?? 'Search'}
        className="w-full bg-primary px-3.5 py-2.5 pl-11 text-white text-sm"
      />
    </div>
  );
};

export type IPropsInputSearch = {
  placeholder?: string;
};
