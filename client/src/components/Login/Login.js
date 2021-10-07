import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/users'

import './Login.css'

const Login = () => {
    const dispatch = useDispatch()

    const initialState = {
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(createUser({formData}))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form className="login-form" onSubmit={handleSubmit} >
            <div className="login-box">
                <div className="dim-bg"></div>
                <h2>Log In</h2>
                <input className="input-field" type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
                <input className="input-field" type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />
                    
                <button className="submit-btn" type="submit">Log In</button>
            </div>
        </form>
    )
}

export default Login