
import type { UserInfo, OrderInfo } from "../types";
import "./style/Profile.css"
import Card from "./Card";
import { useState, useEffect } from "react";

interface ProfileProps {
    userInfo: UserInfo;
}

export default function Profile({ userInfo }: ProfileProps) {
    const [orders, setOrders] = useState<OrderInfo[]>([]);

    // Инициализируем состояние заказов при загрузке компонента
    useEffect(() => {
        if (userInfo.orders) {
            if (Array.isArray(userInfo.orders)) {
                setOrders(userInfo.orders);
            } else {
                setOrders([userInfo.orders]);
            }
        }
    }, [userInfo.orders]);

    const handleCancelOrder = (orderId: string) => {
        // Показываем подтверждение пользователю
        if (confirm(`Вы уверены, что хотите отменить заказ "${orderId}"?`)) {
            // Удаляем заказ из состояния
            setOrders(prevOrders => prevOrders.filter(order => order.name !== orderId));
            
            // Показываем уведомление об успешной отмене
            alert(`Заказ "${orderId}" успешно отменен!`);
            
            // TODO: Здесь можно добавить отправку запроса на сервер
            // для фактического удаления заказа из базы данных
            console.log('Заказ отменен:', orderId);
        }
    };

    if (userInfo.name != "" && orders.length > 0){
        return (
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-header">
                        <h1>👤 {userInfo.name}</h1>
                    </div>
                    <div className="profile-info">
                        <h3> Возраст: {userInfo.age}</h3>
                        <p> Местоположение: {userInfo.city}, {userInfo.country}</p>
                        <p> Email: {userInfo.email}</p>
                    </div>
                    <div className="orders-section">
                        <h3>Ваши заказы ({orders.length})</h3>
                        <div className="orders-list">
                            {orders.map((order, index) => (
                                <Card 
                                    key={(order.name ?? "order") + "-" + index} 
                                    orderInfo={order}
                                    onCancelOrder={handleCancelOrder}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (userInfo.name != "" && orders.length === 0) {
        return (
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-header">
                        <h1>👤 {userInfo.name}</h1>
                    </div>
                    <div className="profile-info">
                        <h3> Возраст: {userInfo.age}</h3>
                        <p> Местоположение: {userInfo.city}, {userInfo.country}</p>
                        <p> Email: {userInfo.email}</p>
                    </div>
                    <div className="orders-section">
                        <h3>Ваши заказы</h3>
                        <div style={{ 
                            textAlign: 'center', 
                            padding: '40px 20px',
                            color: '#888',
                            fontSize: '1.1rem'
                        }}>
                            <p>📦 У вас пока нет заказов</p>
                            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                                Перейдите в каталог, чтобы сделать первый заказ!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="error-message">
                <h1>❌ Ошибка: Информация о пользователе не найдена</h1>
            </div>
        )
    }
}