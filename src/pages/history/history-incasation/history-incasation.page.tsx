import { TitlePageComponent } from '@components/title-page.component.tsx';
import { HistoryTopStatisticsModule } from '@modules/history-top-statistic/history-top-statistics.module.tsx';

import { statisticList } from '../history-overview/history-overview.page.tsx';

export const HistoryIncasationPage = () => {
  return (
    <div className="p-10">
      <TitlePageComponent>Incasation</TitlePageComponent>
      <HistoryTopStatisticsModule title="Incasation statistics" statisticList={statisticList} />
    </div>
  );
};
