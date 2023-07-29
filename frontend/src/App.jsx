// In App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import LoadingIndicator from './components/Helper/LoadingIndicator';
import { DataProvider } from './context/DataContext';
const StableCoin = React.lazy(() => import('./pages/StableCoin'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Coins = React.lazy(() => import('./pages/Coins'));
const Dev = React.lazy(() => import('./pages/Dev'));

function App() {
    return (
        <DataProvider>

            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="/stableCoin/:stablecoinName" element={<StableCoin />} />
                        <Route path="/Coins" element={<Coins />} />
                        <Route path="/dev" element={<Dev />} />
                    </Route>
                </Routes>
            </Router>
        </DataProvider>
    );
}

function AppWithLazyLoading() {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <App />
        </Suspense>
    );
}

export default AppWithLazyLoading;
