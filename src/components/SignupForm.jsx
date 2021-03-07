import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://api.chatengine.io/projects/people', {'username':username, 'secret':password, 'first_name':firstName, 'last_name':lastName }, {headers: {"Private-Key":'b32423af-c784-4424-9e45-f77ea4b649b8'}})
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));

            localStorage.setItem('firstname', firstName);
            localStorage.setItem('lastname', lastName);
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
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="First Name" required />
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="Last Name" required />
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Sign Up</span>
                        </button>
                    </div>
                    <h2 className="error" style={{color: 'red'}}>{error}</h2>
                </form>
                <div align="center">
                    <Link to='/'>
                        <span>Let's Login</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;