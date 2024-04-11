import { AggregatorsIcon } from '@jsx-icons/aggregators.icon.tsx';
import { BridgeIcon } from '@jsx-icons/bridge.icon.tsx';
import { ByActivityIcon } from '@jsx-icons/by-activity.icon.tsx';
import { ByAmlScoreIcon } from '@jsx-icons/by-aml-score.icon.tsx';
import { ByGeographicIcon } from '@jsx-icons/by-geographic.icon.tsx';
import { ByVolumeIcon } from '@jsx-icons/by-volume.icon.tsx';
import { ControlIcon } from '@jsx-icons/control.icon.tsx';
import { DashboardIcon } from '@jsx-icons/dashboard.icon.tsx';
import { DepositsIcon } from '@jsx-icons/deposits.icon.tsx';
import { HistoryIcon } from '@jsx-icons/history.icon.tsx';
import { IncasationsIcon } from '@jsx-icons/incasations.icon.tsx';
import { NodesIcon } from '@jsx-icons/nodes.icon.tsx';
import { OrdersIcon } from '@jsx-icons/orders.icon.tsx';
import { OverviewIcon } from '@jsx-icons/overview.icon.tsx';
import { PartnersIcon } from '@jsx-icons/partners.icon.tsx';
import { SwapsIcon } from '@jsx-icons/swaps.icon.tsx';
import { SwitchHorizontalIcon } from '@jsx-icons/switch-horizontal.icon.tsx';
import { TransferIcon } from '@jsx-icons/transfer.icon.tsx';
import { UsersIcon } from '@jsx-icons/users.icon.tsx';
import { WalletIcon } from '@jsx-icons/wallet.icon.tsx';
import { WithdrawalIcon } from '@jsx-icons/withdrawal.icon.tsx';

export const getSideBarList = () => {
  return [
    { icon: <DashboardIcon />, key: 'dashboard', title: 'Dashboard' },
    {
      icon: <HistoryIcon />,
      key: '/history',
      list: [
        { icon: <OverviewIcon />, key: '/history/overview', title: 'Overview' },
        { icon: <SwapsIcon />, key: '/history/swaps', title: 'Swaps' },
        { icon: <BridgeIcon />, key: '/history/bridge', title: 'Bridge' },
        { icon: <IncasationsIcon />, key: '/history/incasation', title: 'Incasation' },
        { icon: <OrdersIcon />, key: '/history/orders', title: 'Orders' },
        { icon: <DepositsIcon />, key: '/history/deposits', title: 'Deposits' },
        { icon: <DepositsIcon />, key: '/history/deposits', title: 'Deposits' },
        { icon: <WithdrawalIcon />, key: '/history/withdrawal', title: 'Withdrawal' },
        { icon: <TransferIcon />, key: '/history/transfer', title: 'Transfer' },
      ],
      title: 'History',
    },
    {
      icon: <UsersIcon />,
      key: '/users',
      list: [
        { icon: <OverviewIcon />, key: '/users/overview', title: 'Overview' },
        { icon: <ByActivityIcon />, key: '/users/by-activity', title: 'By activity' },
        { icon: <ByVolumeIcon />, key: '/users/by-volume', title: 'By volume' },
        { icon: <ByAmlScoreIcon />, key: '/users/by-aml-score', title: 'By AML score' },
        { icon: <ByGeographicIcon />, key: '/users/by-geographic', title: 'By Geographic' },
      ],
      title: 'Users',
    },
    {
      icon: <PartnersIcon />,
      key: '/partners',
      list: [
        { icon: <OverviewIcon />, key: '/partners/overview', title: 'Overview' },
        { icon: <SwitchHorizontalIcon />, key: '/partners/exchanges', title: 'Exchanges' },
        { icon: <AggregatorsIcon />, key: '/partners/aggregators', title: 'Aggregators' },
        { icon: <PartnersIcon />, key: '/partners/platforms', title: 'Platforms' },
        { icon: <WalletIcon />, key: '/partners/wallets', title: 'Wallets' },
      ],
      title: 'Partners',
    },
    {
      icon: <ControlIcon />,
      key: '/control',
      title: 'Control',
    },
    {
      icon: <NodesIcon />,
      key: '/nodes',
      title: 'Nodes',
    },
  ];
};
