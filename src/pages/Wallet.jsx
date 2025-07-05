// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import WalletOverview from '@widgets/WalletOverview';
import Deposit from '@widgets/Deposit';
import Trade from '@widgets/Trade';
import Referral from '@widgets/Referral';
import History from '@widgets/History';
import Banner from '@widgets/Banner';

const widgets = {
    wallet: <WalletOverview/>,
    deposit: <Deposit/>,
    trade: <Trade/>,
    history: <History/>,
    referral: <Referral/>,
    banner: <Banner/>
}

const Wallet = () => {
    return (
        <AppLayout>
            <PageHeader title="Wallet"/>
            <AppGrid id="wallet" widgets={widgets}/>
        </AppLayout>
    )
}

export default Wallet