// In App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import LoadingIndicator from './components/Helper/LoadingIndicator';
import { DataProvider } from './context/DataContext';
import { Analytics } from '@vercel/analytics/react';


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

                        <Route path="/Coins" element={<Coins />} />
                        <Route path="/dev" element={<Dev />} />
                    </Route>
                </Routes>
            <Analytics/>
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
