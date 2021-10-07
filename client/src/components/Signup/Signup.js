import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../actions/users'

import './Signup.css'

const Signup = () => {
    const dispatch = useDispatch()

    const initialState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        registrationID: '',
        telephone: '',
    }
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(formData.password !== formData.confirmPassword){
            alert('Please enter the same password in "Confirm Password" field!')
        } else{
            dispatch(createUser({formData}))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form className="login-form" onSubmit={handleSubmit} >
            <div className="login-box">
                <div className="dim-bg"></div>
                <h2>Sign Up</h2>
                <input className="input-field" type="text" name="name" id="name" placeholder="Name" onChange={handleChange} />
                <input className="input-field" type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
                <input className="input-field" type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />                
                <input className="input-field" type="password" name="confirmPassword" id="confirm-password" placeholder="Confirm Password" onChange={handleChange} />
                <input className="input-field" type="text" name="registrationID" id="registration-id" placeholder="Registration ID" onChange={handleChange} />
                <input className="input-field" type="text" name="telephone" id="telephone" placeholder="Telephone" onChange={handleChange} />
                    
                <button className="submit-btn" type="submit">Sign Up</button>
            </div>
        </form>
    )
}

export default Signup