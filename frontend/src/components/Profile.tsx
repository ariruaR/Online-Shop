
import type { UserInfo } from "../types";
import "./style/Profile.css"

export default function Profile({ userInfo }: {userInfo: UserInfo}) {
    if (userInfo.name != ""){
        return (
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-header">
                        <h1>👤 {userInfo.name}</h1>
                    </div>
                    <div className="profile-info">
                        <h2>📝 Имя: {userInfo.name}</h2>
                        <h3>🎂 Возраст: {userInfo.age}</h3>
                        <p>🌍 Местоположение: {userInfo.city}, {userInfo.country}</p>
                        <p>📧 Email: {userInfo.email}</p>
                    </div>
                    <div className="buttons-container">
                        <button className="like-button">👍 Лайк</button>
                        <button className="dislike-button">👎 Дизлайк</button>
                    </div>
                </div>
            </div>
        )
    } else{
        return (
            <div className="error-message">
                <h1>❌ Ошибка: Информация о пользователе не найдена</h1>
            </div>
        )
    }
}