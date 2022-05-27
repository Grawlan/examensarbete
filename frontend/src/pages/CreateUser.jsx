import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser, FaEnvelope } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { createUser, reset } from '../features/auth/authSlice'

function CreateUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    //redirect when logged in
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(createUser(userData))
    }
  }

  return (
    <>
      <section className='container has-text-centered mb-5'>
        <h1>
          <FaUser /> Create User
        </h1>
        <p></p>
      </section>
      <section className='columns is-centered'>
        <form onSubmit={onSubmit}>
          <div className='field'>
            <div className='control has-icons-left'>
              <input
                type='text'
                className='input'
                name='name'
                id='name'
                value={name}
                onChange={onChange}
                placeholder='Enter name'
                required
              />
              <span className='icon is-small is-left'>
                <FaUser />
              </span>
            </div>
          </div>
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
              <input
                type='password'
                className='input'
                name='password2'
                id='password2'
                value={password2}
                onChange={onChange}
                placeholder='Confirm password'
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
export default CreateUser
