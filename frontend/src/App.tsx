import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { ProfilePreview } from './components/ProfilePreview';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import type { UserInfo } from './types';

const userInfo: UserInfo = {
    name: 'John',
    age: 23,
    email: 'john@gmail.com',
    city: 'New York',
    country: 'USA',
}

const userInfo2: UserInfo = {
    name: '',
    age: 0,
    email: '',
    city: '',
    country: '',
}

export default function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<ProfilePreview userInfo={userInfo} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile userInfo={userInfo} />} />
            </Routes>
        </div>
    )
}