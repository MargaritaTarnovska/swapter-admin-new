import { FC, ReactNode } from 'react';

import { HeaderComponent } from '@modules/header/header.component.tsx';
import { SidebarModule } from '@modules/sidebar/sidebar.module.tsx';

export const BaseLayout: FC<IPropsBaseLayout> = ({ children }) => {
  return (
    <div className="bg-brand-background w-full h-full min-h-screen flex items-start">
      <img src="/img/bg/global-bg.png" alt="" className="absolute z-0 w-full h-full" />
      <SidebarModule />
      <div className="w-full">
        <HeaderComponent />
        <div className="z-50">{children}</div>
      </div>
    </div>
  );
};

export type IPropsBaseLayout = {
  children: ReactNode;
};
