import { Link } from 'react-router-dom'
import { FaCameraRetro } from 'react-icons/fa'
import loginImg1 from '../assets/login_1.jpg'

const Login = () => {
    return (
        <div className='generalFormat'>
            <div className='row justify-content-center'>
                <div className='col-sm-10 col-md-6 col-lg-4'>
                    <div className='row'>
                        <h1>Login</h1>
                    </div>
                    <div className='row'>
                        <form className='loginForm'>
                            <div>
                            <input 
                                    type='text'
                                    placeholder='username'
                                    className='form-control'
                            />
                            </div>
                            <div>
                                <input 
                                    type='text'
                                    placeholder='password'
                                    className='form-control'
                            />
                            </div>
                            <div className='d-grid gap-2 mx-auto'>
                                <button className='btn btn-primary' type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className='row'>
                        <img src={loginImg1} className='img-fluid rounded loginImg'></img>
                        <p className='imgCredit'>
                            <FaCameraRetro></FaCameraRetro> by <a href="https://unsplash.com/@mnelson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matt Nelson</a> on <a href="https://unsplash.com/s/photos/husky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
