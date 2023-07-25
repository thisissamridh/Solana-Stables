import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import StableCoin from './pages/StableCoin'
import Dashboard from './pages/Dashboard'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/stableCoin" element={<StableCoin />} />
            </Routes>
        </Router>
    )
}

export default App
