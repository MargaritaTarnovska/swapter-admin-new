import { TitlePageComponent } from '@components/title-page.component.tsx';
import { HistoryTopStatisticsModule } from '@modules/history-top-statistic/history-top-statistics.module.tsx';

import { statisticList } from '../history-overview/history-overview.page.tsx';

export const HistoryBridgePage = () => {
  return (
    <div className="p-10">
      <TitlePageComponent>Bridge</TitlePageComponent>
      <HistoryTopStatisticsModule title="Bridge statistics" statisticList={statisticList} />
    </div>
  );
};
