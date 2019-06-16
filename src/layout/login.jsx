import React from 'react'
import '../styles/login.css'
import Logo from '../assert/logo.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
    return ( 
        <div className='background-login'>
            <div className='container'>
            <div/>
                <div className='from-login'>
                    <div className='form-container'>
                        <img src={Logo} className='form-logo'/>
                        <div className='form-input'>
                            <form className='formwrapper'>
                                <input type='email' placeholder="username" />
                                <input type='password' placeholder="password" />
                                <button type='submit'> Entrar </button>
                            </form>
                        </div>
                        <div className="form-signup">
                            <Link>Aun no estas registrado?</Link>
                        </div>
                    </div>
                </div>
                <div/>
            </div>
        </div>
    )
}

export default Login