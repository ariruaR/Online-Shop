import { useNavigate } from 'react-router-dom';
import type { ProfileProps } from '../types';
export function ProfilePreview({ userInfo }: ProfileProps) {
    const navigate = useNavigate();

    const handleOpenProfile = () => {
        // Редирект на страницу профиля
        navigate('/profile');
    };

    const handleLogin = () => {
        // Редирект на страницу логина
        navigate('/login');
    };

    const handleSignUp = () => {
        // Редирект на страницу регистрации
        navigate('/signup');
    };

    if (userInfo.name !== "") {
        return (
            <div className="profile">
                <h1>Some Info</h1>
                <div>
                    <h1>{userInfo.name}</h1>
                    <p>Age: {userInfo.age}</p>
                    <p>Email: {userInfo.email}</p>
                    <p>City: {userInfo.city}</p>
                    <p>Country: {userInfo.country}</p>
                </div>

                <div>
                    <button className='profile-button' onClick={handleOpenProfile}>Open Profile</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="app">
                <h1>Please login or Sign up</h1>
                <button className="profile-button" onClick={handleLogin}>Login</button>
                <button className="profile-button" onClick={handleSignUp}>Sign up</button>
            </div>
        )
    }
}