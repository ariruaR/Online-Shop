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
	orders: [
		{
			name: 'Premium Hoodie',
			description: 'Soft cotton hoodie, size M',
			price: 59.99,
			wallet: 'USD',
			discovery_date: '2024-01-15'
		},
		{
			name: 'Wireless Headphones',
			description: 'ANC, 30h battery life',
			price: 129.99,
			wallet: 'USD',
			discovery_date: '2024-01-20'
		},
		{
			name: 'Coffee Beans',
			description: 'Arabica 1kg, medium roast',
			price: 18.5,
			wallet: 'USD',
			discovery_date: '2024-01-25'
		}
	]
}

const userInfo2: UserInfo = {
	name: '',
	age: 0,
	email: '',
	city: '',
	country: '',
	orders: {
		name: '',
		description: '',
		price: 0,
		wallet: '',
		discovery_date: ''
	}
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