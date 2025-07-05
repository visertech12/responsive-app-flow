import {ReactComponent as DepositIcon} from '@assets/icons/deposit.svg';
import {ReactComponent as CryptoIcon} from '@assets/icons/crypto.svg';
import {ReactComponent as WithdrawIcon} from '@assets/icons/withdraw.svg';
import {ReactComponent as ExchangeIcon} from '@assets/icons/exchange.svg';
import {ReactComponent as StakingIcon} from '@assets/icons/staking.svg';
import {ReactComponent as NFTIcon} from '@assets/icons/nft.svg';
import {ReactComponent as AMLIcon} from '@assets/icons/aml.svg';
import {ReactComponent as CupIcon} from '@assets/icons/cup.svg';
import {ReactComponent as InviteIcon} from '@assets/icons/invite.svg';
import {ReactComponent as SupportIcon} from '@assets/icons/support.svg';

const ACTIONS = [
    {
        title: 'Deposit',
        icon: <DepositIcon />,
        primary: true,
    },
    {
        title: 'Buy Crypto',
        icon: <CryptoIcon />,
        primary: true,
    },
    {
        title: 'Withdraw',
        icon: <WithdrawIcon />,
    },
    {
        title: 'Exchange',
        icon: <ExchangeIcon />,
    },
    {
        title: 'Staking',
        icon: <StakingIcon />,
    },
    {
        title: 'NFT',
        icon: <NFTIcon />,
    },
    {
        title: 'AML',
        icon: <AMLIcon />,
    },
    {
        title: 'Leaders',
        icon: <CupIcon />,
    },
    {
        title: 'Invite',
        icon: <InviteIcon />,
    },
    {
        title: 'Support',
        icon: <SupportIcon />,
    }
];

export default ACTIONS