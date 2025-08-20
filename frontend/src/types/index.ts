export type UserInfo = {
    name: string;
    age: number;
    email: string;
    city: string;
    country: string;
    orders: OrderInfo | OrderInfo[]
}

export interface ProfileProps {
    userInfo: UserInfo;
} 
export type OrderInfo = {
    name: string;
    description: string;
    amount?: number | bigint;
    price: number | bigint;
    wallet: string;
    discovery_date: string;
}