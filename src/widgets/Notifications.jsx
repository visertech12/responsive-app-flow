// components
import ModalContainer from '@components/ModalContainer';
import Notification from '@components/Notification';
import Spring from '@components/Spring';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useModal} from '@contexts/modalContext';
import {useThemeProvider} from '@contexts/themeContext';
import useMeasure from 'react-use-measure';

// utils
import dayjs from 'dayjs';
import {memo} from 'react';

// data placeholder
import notifications from '@db/notifications';
import classNames from 'classnames';

const WidgetWrapper = ({children, theme}) => {
    const [ref, {height}] = useMeasure();

    return (
        <Spring className={classNames('widget card h-100', {'card--no-bg': theme === 'light'})}>
            <h2 className="p-16" ref={ref}>Notifications</h2>
            <ScrollContainer height={height} bg="widget-bg">
                <div className="track border-12" style={{padding: '0 16px'}}>
                    <div className="d-flex flex-column g-8 pb-16 scroll-y">
                        {children}
                    </div>
                </div>
            </ScrollContainer>
        </Spring>
    )
}

const ModalWrapper = ({children, open, isSidebarWidget}) => {
    return (
        <ModalContainer open={open} isSidebarWidget={isSidebarWidget}>
            <div className="modal widget_body card scroll-y">
                {children}
            </div>
        </ModalContainer>
    )
}

const Notifications = ({isSidebarWidget}) => {
    const {theme} = useThemeProvider();
    const {open, modal} = useModal();

    const dates = notifications.map(item => {
        return {
            date: dayjs(item.date).format('YYYY-MM-DD'),
            timestamp: item.date
        }
    });

    const uniqueDates = [...new Map(dates.map(item => [item.date, item])).values()];

    const Wrapper = isSidebarWidget ? ModalWrapper : WidgetWrapper;

    const wrapperProps = isSidebarWidget ?
        {
            open: open && modal === 'notifications',
            isSidebarWidget: isSidebarWidget
        }
        :
        {
            theme: theme
        };

    return (
        <Wrapper {...wrapperProps}>
            {
                uniqueDates.map((item, index) => (
                    <div className="d-flex flex-column g-8" key={index}>
                            <span className="text-light text-10 text-600">
                                {
                                    dayjs(item.date).isSame(dayjs(), 'day') ?
                                        'Today'
                                        :
                                        dayjs(item.timestamp).format('DD.MM.YY, HH:mm')
                                }
                            </span>
                        {
                            notifications.map((notification, index) => (
                                dayjs(notification.date).format('YYYY-MM-DD') === item.date &&
                                <Notification data={notification} key={index} index={index}/>
                            ))
                        }
                    </div>
                ))
            }
        </Wrapper>
    )
}

export default memo(Notifications);