import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import FileList from './pages/FileLIst'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<FileList />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users/create' element={<CreateUser />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
