import { Route, Routes } from 'react-router-dom';

import { DashboardPage } from './pages/dashboard/dashboard.page.tsx';
import { HistoryAffiliatePayoutsPage } from './pages/history/history-affiliate-payouts/history-affiliate-payouts.page.tsx';
import { HistoryBridgePage } from './pages/history/history-birdge/history-bridge.page.tsx';
import { HistoryDepositsPage } from './pages/history/history-deposits/history-deposits.page.tsx';
import { HistoryIncasationPage } from './pages/history/history-incasation/history-incasation.page.tsx';
import { HistoryOrdersPage } from './pages/history/history-orders/history-orders.page.tsx';
import { HistoryOverviewPage } from './pages/history/history-overview/history-overview.page.tsx';
import { HistorySwapsPage } from './pages/history/history-swaps/history-swaps.page.tsx';
import { HistoryTransferPage } from './pages/history/history-transfer/history-transfer.page.tsx';
import { HistoryWithdrawalPage } from './pages/history/history-withdrawal/history-withdrawal.page.tsx';
import { UsersOverviewPage } from './pages/users/users-overview/users-overview.page.tsx';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />

      {/*History*/}
      <Route path="history/overview" element={<HistoryOverviewPage />} />
      <Route path="history/swaps" element={<HistorySwapsPage />} />
      <Route path="history/bridge" element={<HistoryBridgePage />} />
      <Route path="history/incasation" element={<HistoryIncasationPage />} />
      <Route path="history/orders" element={<HistoryOrdersPage />} />
      <Route path="history/deposits" element={<HistoryDepositsPage />} />
      <Route path="history/withdrawal" element={<HistoryWithdrawalPage />} />
      <Route path="history/transfer" element={<HistoryTransferPage />} />
      <Route path="history/affiliate-payouts" element={<HistoryAffiliatePayoutsPage />} />

      {/*Users*/}
      <Route path="users/overview" element={<UsersOverviewPage />} />

      {/*Partners*/}
      {/*Control*/}
      {/*Nodes*/}
    </Routes>
  );
}

export default App;
