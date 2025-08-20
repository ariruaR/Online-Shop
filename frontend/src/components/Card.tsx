import type { OrderInfo } from "../types";


export default function Card({orderInfo}: {orderInfo: OrderInfo}){
    if (orderInfo.name != ""){
        return (
            <div>
                <div className="order-card">
                    <h1 className="order-name">{orderInfo.name}</h1>
                    <h2 className="order-price">{String(orderInfo.price)} {String(orderInfo.wallet)}</h2>
                    <p className="order-description">{orderInfo.description}</p>
                </div>
                <div className="order-btn">
                    <button className="order-btn-buy">Купить</button>
                    <button className="order-btn-addtocart">Добавить в корзину</button>
                    <button className="order-btn-notrecommend">Не рекомендовать</button>
                </div>
            </div>
        )
    }
}