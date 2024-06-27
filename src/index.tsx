import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Frame from './Pages/Frame'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Frame />}>
                <Route index element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<SignIn />} />
            </Route>
        </Routes>
    </BrowserRouter>,
)
