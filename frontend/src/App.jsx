import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import StableCoin from './pages/StableCoin'
import Dashboard from './pages/Dashboard'
import style from './index.css'

import Coins from './pages/Coins'


import Dev from './pages/Dev'


function App() {
    return (
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
    )
}

export default App
