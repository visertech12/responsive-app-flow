// utils
import {lazy} from 'react';

// data placeholder
import author from '@db/author';

// components
import AppLayout from '@components/AppLayout';
import AppGrid from '@components/AppGrid';
import PageHeader from '@components/PageHeader';
import Explore from '@widgets/ExploreNFT';
import Profile from '@widgets/Profile';
import PopularItems from '@widgets/PopularItems';
import ListModal from '@components/ListModal';
const NFTPayment = lazy(() => import('@components/NFTPayment'));
const NFTPaymentSuccess = lazy(() => import('@components/NFTPaymentSuccess'));

const widgets = {
    explore: <Explore/>,
    profile: <Profile author={author}/>,
    popular: <PopularItems/>
}

const NFT = () => {
    return (
        <AppLayout>
            <PageHeader title="NFT"/>
            <AppGrid id="nft" widgets={widgets}/>
            <ListModal/>
            <NFTPayment/>
            <NFTPaymentSuccess/>
        </AppLayout>
    )
}

export default NFT