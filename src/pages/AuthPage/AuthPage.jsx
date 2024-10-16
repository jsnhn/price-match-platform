// import SignUpFormClass from "../../components/SignUpFormClass/SignUpFormClass"
import './AuthPage.css'
import { useState } from 'react'
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from '../../components/LoginForm/LoginForm'


export default function AuthPage ({ setUser }) {
    const [showLogin, setShowLogin] = useState(true)


    return (
        <main className='authForm'>
            <h1>Sign In</h1>
            {/* <SignUpFormClass /> */}
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            <button className='signup-login' onClick={() => setShowLogin(!showLogin)}>{ showLogin ? 'Sign Up' : 'Login'} </button>
        </main>
    )
}

// if you use arrofunction you have to provide an arguement




