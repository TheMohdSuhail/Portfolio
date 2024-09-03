import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import { message } from 'antd';

const Login = () => {
    const [user, setUser] = React.useState({
        username: "",
        password: "",
    });

    const dispatch = useDispatch();

    const login = async () => {
        try {
            dispatch(ShowLoading()); // Show loading indicator
            const response = await axios.post('https://portfolio-0fue.onrender.com/api/portfolio/admin-login', user); // API call
            dispatch(HideLoading()); // Hide loading indicator

            if (response.data.success) {
                message.success(response.data.message); // Show success message
                llocalStorage.setItem('token', JSON.stringify(response.data.data)); // Store token only
                window.location.href='/admin'; // Redirect to admin page
            } else {
                message.error(response.data.message); // Show error message
            }
        } catch (error) {
            message.error('An error occurred. Please try again.'); // Handle error
            dispatch(HideLoading()); // Hide loading indicator
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <div className='w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white'>
                <h1 className='text-2xl text-center'>Portfolio - Admin Login</h1>
                <hr />
                <input 
                    type="text" 
                    value={user.username} 
                    onChange={(e) => setUser({ ...user, username: e.target.value })} 
                    placeholder='Username' 
                />
                <input 
                    type="password" 
                    value={user.password} 
                    onChange={(e) => setUser({ ...user, password: e.target.value })} 
                    placeholder='Password' 
                />
                <button className='bg-primary text-white p-2' onClick={login}>Login</button>
            </div>
        </div>
    );
};

export default Login;
