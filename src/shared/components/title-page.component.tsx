import { FC, PropsWithChildren } from 'react';

export const TitlePageComponent: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="text-primary-900 text-[30px] font-semibold">{children}</h2>;
};
