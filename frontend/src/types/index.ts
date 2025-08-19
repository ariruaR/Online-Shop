export type UserInfo = {
    name: string;
    age: number;
    email: string;
    city: string;
    country: string;
}

export interface ProfileProps {
    userInfo: UserInfo;
} 