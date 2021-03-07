import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "3078a2d4-ba2d-4449-93bb-a33919c05bcc", 'User-Name': username, 'User-Secret': password };

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError('Incorrect Credentials')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error" style={{color: 'red'}}>{error}</h2>
                </form>
                <div align="center">
                    <Link to='/signup'>
                        <span>Go Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginForm