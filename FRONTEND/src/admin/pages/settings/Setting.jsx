import React, { useState } from 'react';
import axios from 'axios';
import './setting.scss';
import Admin from '../../Admin';


const Setting = () => {
    const {http}=Admin();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           http.post('admin/password/reset-link',{email}).then(res=>{
             
           })
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    return (
        <div className='setting'>
            <form onSubmit={handleSubmit} className='formdata'>
                <label>Enter Your Email To Reset Password</label>
                <input type="email" value={email} onChange={handleEmailChange} required placeholder='Enter Email...'/>
                <button type="submit" className='button'>Send Link</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Setting;
