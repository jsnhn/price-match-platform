import './LoginForm.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as usersService from '../../utilities/users-service' 


export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password:'',
    })
    const navigate = useNavigate();


    function handleChange(evt) {
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }


    const handleSubmit = async (evt) => {
        evt.preventDefault(); // won't refresh the page
        try {
            const user = await usersService.logIn(credentials) // will eventually recieve a user boject
            setUser(user) // set this to our app component. trace back to setUser. ^ if you dont use await here, it would jsut return a promise. 
            navigate('/')
        } catch {
            setCredentials({
                ...credentials,
                error: 'Log in Failed - Try Again'
            });
        }
    };

    return (
        <div>
            <div className="form-container">
                <form className='login-form' autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input className='login-input' type="email" name="email" value={credentials.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input className='login-input' type="password" name="password" value={credentials.password} onChange={handleChange} required />
                    <button className='login-button' type="submit">Login</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{credentials.error}</p>
        </div>
    )
}

