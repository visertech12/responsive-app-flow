// GA
import ReactGA from 'react-ga4';

// React
import { lazy, Suspense, useEffect, useRef } from 'react';

// Routing
import { Route, Routes } from 'react-router-dom';

// Hooks
import { useWindowSize } from 'react-use';

// Styles
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-resizable/css/styles.css';

// Providers
import { ThemeProvider as StyledThemeProvider } from 'styled-components'; // styled-components
import { ThemeProvider, useThemeProvider } from '@contexts/themeContext'; // your context
import { SidebarProvider } from './contexts/sidebarContext.jsx';
import { ModalProvider } from './contexts/modalContext.jsx';

// Components
import Loader from '@components/Loader';
import Sidebar from '@components/Sidebar';
import BottomNav from '@components/BottomNav';
import { ToastContainer } from 'react-toastify';

// Lazy-loaded pages
const Dashboard = lazy(() => import('@pages/Dashboard'));
const Trade = lazy(() => import('@pages/Trade'));
const Actions = lazy(() => import('@pages/Actions'));
const Wallet = lazy(() => import('@pages/Wallet'));
const NFT = lazy(() => import('@pages/NFT'));
const Collections = lazy(() => import('@pages/Collections'));

const AppContent = () => {
  const appRef = useRef(null);
  const { theme } = useThemeProvider(); // your context theme
  const { width } = useWindowSize();

  useEffect(() => {
    if (appRef.current) {
      appRef.current.scrollTo(0, 0);
    }
  }, []);

  const gaKey = import.meta.env.VITE_PUBLIC_GOOGLE_ANALYTICS || process.env.REACT_APP_PUBLIC_GOOGLE_ANALYTICS;
  if (gaKey) {
    ReactGA.initialize(gaKey);
  }

  return (
    <StyledThemeProvider theme={{ mode: theme }}> {/* pass theme to styled-components */}
      <ToastContainer theme="colored" autoClose={2000} toastStyle={{ borderRadius: 4 }} />
      <ModalProvider>
        <div ref={appRef}>
          {width < 768 ? <BottomNav /> : <Sidebar />}
          <Suspense fallback={<Loader visible />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/actions" element={<Actions />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/nft" element={<NFT />} />
              <Route path="/collections" element={<Collections />} />
            </Routes>
          </Suspense>
        </div>
      </ModalProvider>
    </StyledThemeProvider>
  );
};

const App = () => {
  return (
    <SidebarProvider>
      <ThemeProvider> {/* wraps your context */}
        <AppContent />
      </ThemeProvider>
    </SidebarProvider>
  );
};

export default App;
