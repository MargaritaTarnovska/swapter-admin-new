import { ArrowRightIcon } from '@assets/jsx-icons/arrow-right.icon.tsx';
import { BellIcon } from '@assets/jsx-icons/bell.icon.tsx';
import { HomeBreadcrumbIcon } from '@assets/jsx-icons/home-breadcrumb.icon.tsx';
import { InputSearchComponent } from '@components/input-search/input-search.component.tsx';
import { useLocation } from 'react-router-dom';

export const HeaderComponent = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean);

  return (
    <header className="w-full bg-alpha-white-90 backdrop-blur-md px-8 py-3 border-b border-solid border-primary z-50 flex items-center justify-between">
      <nav className="py-2 flex items-center justify-start">
        <a className="mr-2 p-1" href="/dashboard">
          <HomeBreadcrumbIcon />
        </a>
        {currentPath.map((item) => (
          <div className="flex items-center" key={item}>
            <span>
              <ArrowRightIcon />
            </span>
            <a
              className="text-white capitalize px-2 py-1 text-sm font-medium mx-2"
              href={'/' + item}
            >
              {item}
            </a>
          </div>
        ))}
      </nav>
      <div>
        <InputSearchComponent />
        <div className="w-10 h-10 bg-tertiary flex items-center justify-center rounded-md cursor-pointer relative">
          <BellIcon />
          <p className="absolute top-1.5 right-1.5 text-[8px] text-white rounded-full bg-error-primary h-3 min-w-3 text-center">
            3
          </p>
        </div>
      </div>
    </header>
  );
};
