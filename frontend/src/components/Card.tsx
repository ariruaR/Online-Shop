import type { OrderInfo } from "../types";
import './style/Card.css'

interface CardProps {
    orderInfo: OrderInfo;
    onCancelOrder?: (orderId: string) => void;
}

export default function Card({orderInfo, onCancelOrder}: CardProps){
    const handleCancelOrder = () => {
        if (onCancelOrder) {
            // Используем имя заказа как ID, или можно добавить отдельное поле id в OrderInfo
            onCancelOrder(orderInfo.name);
        } else {
            // Если обработчик не передан, показываем базовое поведение
            console.log('Отмена заказа:', orderInfo.name);
            alert(`Заказ "${orderInfo.name}" отменен!`);
        }
    };

    if (orderInfo.name != ""){
        return (
            <div>
                <div className="order-card">
                    <h1 className="order-name">{orderInfo.name}</h1>
                    <h2 className="order-price">{String(orderInfo.price)} {String(orderInfo.wallet)}</h2>
                    <p className="order-description">{orderInfo.description}</p>
                    <p className="order-discoverydate">{orderInfo.discovery_date}</p>

                <div className="order-btn">
                    <button 
                        className="order-btn-cancelorder"
                        onClick={handleCancelOrder}
                    >
                        Отменить заказ
                    </button>
                </div>
                </div>
            </div>
        )
    }
}