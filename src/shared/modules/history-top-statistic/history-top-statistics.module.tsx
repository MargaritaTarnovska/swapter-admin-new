import { FC, ReactNode } from 'react';

export const HistoryTopStatisticsModule: FC<IPropsHistoryTopStatistic> = ({
  title,
  description,
  statisticList,
}) => {
  return (
    <div className="bg-primary/[70] p-4 border border-solid border-secondary rounded-xl">
      <p className="text-primary-900 text-base font-semibold mb-1">{title}</p>
      {description ? <p className="text-tertiary-600 mb-5">{description}</p> : null}
      <div className="flex items-start justify-start">
        {statisticList?.map((item, key) => (
          <div className="max-w-[20%] w-full" key={key}>
            <p className="mb-2 text-tertiary-600 font-medium text-sm">{item.title}</p>
            <div className="flex items-center justify-start">
              <span className="mr-1">{item.icon}</span>
              <p className="text-primary-900 font-semibold text-2xl">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export type IPropsHistoryTopStatistic = {
  title: string;
  description?: string;
  statisticList?: statisticItem[];
};

export type statisticItem = {
  title: string;
  value: string;
  icon?: ReactNode;
};
