import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

const SignUp = ({ onSignup }) => {
    let history = useHistory()
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [admin, setAdmin] = useState(false)
    const [error, setError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        // email already in use
        if(username) {
            return
        }

        onSignup({ first_name, last_name, email, username, password, admin })
            .then(() => {
                history.push('/dashboard')
            }).catch((err) => {
                setError(true)
                setFirstName('')
                setLastName('')
                setEmail('')
                setUsername('')
                setPassword('')
                setAdmin(false)
            })     
    }

    return (
        <div className='generalFormat'>
            <div className='row justify-content-center'>
                <div className='col-sm-10 col-md-6 col-lg-4'>
                    <div className='row'>
                        <h1>Sign Up</h1>
                    </div>
                    <div className='row'>
                        <form className='signupForm' onSubmit={onSubmit}>
                        {error && <p className='signupError'>This username is not available</p>}
                            <div>
                            <input 
                                    type='text'
                                    placeholder='first name'
                                    className='form-control'
                                    value={first_name}
                                    onChange={(e) => setFirstName(e.target.value)}
                            />
                            </div>
                            <div>
                            <input 
                                    type='text'
                                    placeholder='last name'
                                    className='form-control'
                                    value={last_name}
                                    onChange={(e) => setLastName(e.target.value)}
                            />
                            </div>
                            <div>
                            <input 
                                    type='text'
                                    placeholder='email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                            />
                            </div>
                            <div>
                                <input 
                                    type='text'
                                    placeholder='password'
                                    className='form-control'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                            />
                            </div>
                            <div>
                            <input 
                                    type='text'
                                    placeholder='username'
                                    className='form-control'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                            />
                            </div>
                            <div className='d-grid gap-2 mx-auto'>
                                <button className='btn btn-primary' type='submit'>Sign Up</button>
                            </div>
                            <Link to="/login">Already have an acount? Log In</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp

