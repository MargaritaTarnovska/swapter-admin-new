import { SettingsIcon } from '@assets/jsx-icons/settings.icon.tsx';
import { getSideBarList } from '@modules/sidebar/sidebar.helper.tsx';

export const SidebarModule = () => {
  const list = getSideBarList();
  return (
    <div className="bg-alpha-white-90 z-50 backdrop-blur-md relative">
      <div className="w-20 border-r borders-solid border-primary flex flex-col items-center pb-6">
        <div className="mb-4 h-20 flex items-center justify-center">
          <a>
            <img src="/img/logo/logo-swapter.svg" alt="Swapter" />
          </a>
        </div>
        <div className="mb-12">
          {list.map((item) => (
            <a
              href={item.key}
              className="flex items-center justify-center flex-col mb-3"
              key={item.key}
            >
              <span className="w-12 h-12 flex items-center justify-center">{item.icon}</span>
              <p className="text-primary-900 text-xs">{item.title}</p>
            </a>
          ))}
        </div>
        <div>
          <a href="/settings" className="flex items-center justify-center flex-col mb-6">
            <span className="w-12 h-12 flex items-center justify-center">
              <SettingsIcon />
            </span>
            <p className="text-primary-900 text-xs">Settings</p>
          </a>
          <div>
            <span className="w-12 h-12 rounded-full bg-red-500 block"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
