import { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  })

  const { email, password, password2 } = formData

  return (
    <div>
      <h1>Register</h1>
    </div>
  )
}
export default Register
