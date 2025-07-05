// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import BuyCrypto from '@widgets/BuyCrypto';
import WalletOverview from '@widgets/WalletOverview';
import History from '@widgets/History';
import Market from '@widgets/Market';
import TopCrypto from '@widgets/TopCrypto';

const widgets = {
    market: <Market/>,
    buy: <BuyCrypto variant="form"/>,
    wallet: <WalletOverview/>,
    top: <TopCrypto/>,
    history: <History/>
}

const Trade = () => {
    return (
        <AppLayout>
            <PageHeader title="Trade"/>
            <AppGrid id="trade" widgets={widgets}/>
        </AppLayout>
    )
}

export default Trade