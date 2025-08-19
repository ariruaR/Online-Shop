import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика авторизации
        console.log('Login attempt:', { email, password });
        // После успешного логина можно сделать редирект
        // navigate('/');
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Вход в систему</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Войти
                    </button>
                </form>
                <button onClick={handleBackToHome} className="back-button">
                    Назад на главную
                </button>
            </div>
        </div>
    );
}

export default Login; 