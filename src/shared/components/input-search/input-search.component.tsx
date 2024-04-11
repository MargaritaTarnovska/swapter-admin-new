import { FC } from 'react';

export const InputSearchComponent: FC<IPropsInputSearch> = ({ placeholder }) => {
  return (
    <div className="relative max-w-80 w-full border border-solid">
      <span className="absolute left-2 top-1 bottom-1 m-auto">
        <InputSearchComponent />
      </span>
      <input placeholder={placeholder ?? ''} className="w-full bg-primary px-3.5 py-2.5" />
    </div>
  );
};

export type IPropsInputSearch = {
  placeholder?: string;
};
