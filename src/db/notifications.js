import dayjs from 'dayjs';

const notifications = [
    {
        id: 'notification-1',
        title: 'Withdraw Successful',
        text: `You have successful withdraw 243.44870000 WLKN from your account. Vestibulum mattis ullamcorper velit sed
               ullamcorper morbi tincidunt ornare. Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla
               pellentesque dignissim`,
        read: false,
        date: dayjs(),
    },
    {
        id: 'notification-2',
        title: 'Deposit Comfirmed',
        text: `You have successful deposit 243.44870000 WLKN from your account. Vestibulum mattis ullamcorper velit sed
               ullamcorper morbi tincidunt ornare. Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla
               pellentesque dignissim`,
        read: false,
        date: dayjs().subtract(2, 'day'),
    },
    {
        id: 'notification-3',
        title: 'Withdraw Successful',
        text: `You have successful withdraw 243.44870000 WLKN from your account. Vestibulum mattis ullamcorper velit sed
               ullamcorper morbi tincidunt ornare. Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla
               pellentesque dignissim`,
        read: true,
        date: dayjs().subtract(3, 'day'),
    },
    {
        id: 'notification-4',
        title: 'Deposit Comfirmed',
        text: `You have successful deposit 243.44870000 WLKN from your account. Vestibulum mattis ullamcorper velit sed
               ullamcorper morbi tincidunt ornare. Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla
               pellentesque dignissim`,
        read: true,
        date: dayjs().subtract(3, 'day').subtract(1, 'hour'),
    },
    {
        id: 'notification-5',
        title: 'Deposit Comfirmed',
        text: `You have successful deposit 243.44870000 WLKN from your account. Vestibulum mattis ullamcorper velit sed
               ullamcorper morbi tincidunt ornare. Justo donec enim diam vulputate ut pharetra. Ut placerat orci nulla
               pellentesque dignissim`,
        read: true,
        date: dayjs().subtract(7, 'day').subtract(2, 'hour'),
    },
];

export default notifications