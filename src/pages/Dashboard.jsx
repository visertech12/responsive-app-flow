// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import WalletOverview from '@widgets/WalletOverview';
import BuyCrypto from '@widgets/BuyCrypto';
import LeaderBoard from '@widgets/LeaderBoard';
import QuickActions from '@widgets/QuickActions';
import Notifications from '@widgets/Notifications';

const widgets = {
    wallet: <WalletOverview/>,
    buy: <BuyCrypto variant="overview"/>,
    leaders: <LeaderBoard/>,
    actions: <QuickActions/>,
    notifications: <Notifications/>
}

const Dashboard = () => {
    return (
        <AppLayout>
            <PageHeader title="Dashboard" variant="dashboard"/>
            <AppGrid id="dashboard" widgets={widgets}/>
        </AppLayout>
    )
}

export default Dashboard