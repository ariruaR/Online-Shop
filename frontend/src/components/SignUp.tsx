import { useNavigate } from "react-router-dom";
import './style/Login.css';

export default function SignUp(){
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь будет логика авторизации
        // После успешного логина можно сделать редирект
        // navigate('/');
    };

    const handleBackToHome = () => {
        navigate('/');
    };


return (
        <div className="login-container">
            <div className="login-form">
                <h2>Регистрация</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль:</label>
                        <input
                            type="password"
                            id="password"
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