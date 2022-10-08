import { Routes, Route } from 'react-router-dom';
import Main from './pages/Home';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
    )
}

export default MainRoutes;