// styling
import styles from './style.module.scss';

// components
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {NavLink} from 'react-router-dom';
import Switch from '@ui/Switch';

// hooks
import {useSidebar} from '@contexts/sidebarContext';
import {useWindowSize} from 'react-use';
import {useThemeProvider} from '@contexts/themeContext';
import {useModal} from '@contexts/modalContext';
import useAuthRoute from '@hooks/useAuthRoute';

// utils
import {memo} from 'react';

// constants
import LINKS from '@constants/links';
import notifications from '@db/notifications.js';

// assets
import logo from '@assets/logo.svg';
import avatar from '@assets/avatar.webp';

const Sidebar = () => {
    const {open, setOpen} = useSidebar();
    const {modal, handleOpen} = useModal();
    const {theme, setTheme} = useThemeProvider();
    const isTemporary = useWindowSize().width < 1920;
    const unreadNotifications = notifications.filter(notification => !notification.read).length;
    const isActive = (path) => window.location.pathname === path;
    const isAuthRoute = useAuthRoute();

    return (
        <>
            {
                !isAuthRoute ? (
                    <SwipeableDrawer
                        anchor="left"
                        open={isTemporary ? open : true}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        variant={isTemporary ? 'temporary' : 'persistent'}
                        PaperProps={{
                            sx: {
                                width: 310,
                                padding: '32px 32px 40px',
                                backgroundColor: 'var(--widget)',
                                color: theme === 'light' ? 'var(--header)' : 'var(--text)',
                                fontSize: '1rem',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                height: '100%',
                                fontWeight: '600 !important'
                            }
                        }}>
                        <NavLink className={styles.logo} to="/">
                            <img src={logo} alt="logo" style={{width: 33}}/>
                            <span className="h1">InCrypto</span>
                        </NavLink>
                        <div className={`${styles.list} flex-1`}>
                            {LINKS.map(link => (
                                <NavLink className={`nav-link nav-link--sidebar ${styles.list_item}`}
                                         key={link.desktop}
                                         to={link.path}>
                            <span className="wrapper">
                                <i className={`icon icon-${link.icon === 'home' ? 'dashboard' : link.icon} ${link.icon === 'collections' ? styles.sm : ''} ${isActive(link.path) ? '' : 'active'}`}/>
                                <i className={`icon icon-fill ${isActive(link.path) ? 'active' : ''} icon-${link.icon === 'home' ? 'dashboard' : link.icon}${link.icon !== 'trade' ? '-active' : ''} ${link.icon === 'collections' ? styles.sm : ''}`}/>
                            </span>
                                    {link.desktop}
                                </NavLink>
                            ))}
                        </div>
                        <div className="d-flex flex-column g-40 w-100">
                            <div className={styles.list}>
                                <button className={`nav-link nav-link--sidebar ${styles.list_item} ${modal === 'support' ? 'active' : ''}`}
                                        onClick={() => handleOpen('support')}>
                            <span className="wrapper">
                                <i className={`icon icon-headset ${styles.sm} ${modal !== 'support' ? 'active' : ''}`}/>
                                <i className={`icon icon-headset icon-fill ${styles.sm} ${modal === 'support' ? 'active' : ''}`}/>
                            </span>
                                    Support
                                </button>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className={`nav-link nav-link--sidebar ${styles.list_item} ${modal === 'notifications' ? 'active' : ''}`}
                                            onClick={() => handleOpen('notifications')}>
                                 <span className="wrapper">
                                    <i className={`icon icon-notification ${styles.sm} ${modal !== 'notifications' ? 'active' : ''}`}/>
                                    <i className={`icon icon-notification-active icon-fill ${styles.sm} ${modal === 'notifications' ? 'active' : ''}`}/>
                                </span>
                                        Notifications
                                    </button>
                                    <span className="indicator indicator--text">{unreadNotifications}</span>
                                </div>
                                <button className={`nav-link nav-link--sidebar ${styles.list_item} ${modal === 'info' ? 'active' : ''}`}
                                        onClick={() => handleOpen('info')}>
                            <span className="wrapper">
                                 <i className={`icon icon-info ${modal !== 'info' ? 'active' : ''}`}/>
                                 <i className={`icon icon-info-active icon-fill ${modal === 'info' ? 'active' : ''}`}/>
                            </span>
                                    InCrypto Info
                                </button>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className={styles.list_item}>
                                <span>
                                    <i className={`${styles.sm} icon-theme`}/>
                                </span>
                                        Dark Theme
                                    </div>
                                    <Switch id="theme"
                                            checked={theme === 'dark'}
                                            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
                                </div>
                            </div>
                            <div className="d-flex align-items-center g-16 text-header">
                                <img className="avatar" src={avatar} alt="Dan Tourlan"/>
                                <button className="text-600" onClick={() => handleOpen('account')}>
                                    Dan Tourlan
                                </button>
                            </div>
                        </div>
                    </SwipeableDrawer>
                ) : null
            }
        </>
    )

}

export default memo(Sidebar);