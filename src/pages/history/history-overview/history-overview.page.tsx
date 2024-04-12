import { DateFilterBarComponent } from '@components/date-filter-bar/date-filter-bar.component.tsx';
import { useDateFilterBar } from '@components/date-filter-bar/useDateFilterBar.hook.ts';
import { TitlePageComponent } from '@components/title-page.component.tsx';
import { TetherCoinIcon } from '@jsx-icons/coins/tether.coin-icon.tsx';
import { HistoryTopStatisticsModule } from '@modules/history-top-statistic/history-top-statistics.module.tsx';

export const statisticList = [
  {
    title: 'Total transactions',
    value: '1,658',
  },
  {
    icon: <TetherCoinIcon />,
    title: 'Total volume',
    value: '25,000',
  },
  {
    title: 'Users',
    value: '1,450',
  },
];

export const HistoryOverviewPage = () => {
  const { dateFilterBarVal, setDateFilterBarVal } = useDateFilterBar();
  return (
    <div className="p-10">
      <div className="flex mb-8 justify-between items-center">
        <TitlePageComponent>Overview</TitlePageComponent>
        <DateFilterBarComponent val={dateFilterBarVal} setVal={setDateFilterBarVal} />
      </div>

      <HistoryTopStatisticsModule
        title="Transaction Overview"
        description="3,278 transactions / 1,256 users"
        statisticList={statisticList}
      />
    </div>
  );
};
