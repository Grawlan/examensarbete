import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaSignInAlt, FaEnvelope } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(loginUser(userData))
  }

  return (
    <>
      <section className='container has-text-centered mb-5'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p></p>
      </section>
      <section className='columns is-centered'>
        <form onSubmit={onSubmit}>
          <div className='field'>
            <div className='control has-icons-left'>
              <input
                type='email'
                className='input'
                name='email'
                id='email'
                value={email}
                onChange={onChange}
                placeholder='Enter email'
                required
              />
              <span className='icon is-small is-left'>
                <FaEnvelope />
              </span>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <input
                type='password'
                className='input'
                name='password'
                id='password'
                value={password}
                onChange={onChange}
                placeholder='Enter password'
                required
              />
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <button className='button button-is-link is-primary'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}
export default Login
