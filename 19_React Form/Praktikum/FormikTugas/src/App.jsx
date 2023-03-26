import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FormLogin from './Components/Form Login/FormLogin'
import FormRegistrasi from './Components/Form Registrasi/FormRegistrasi'

function App() {


  return (
   
<Router>
      <Routes>
        <Route path="/" element={<FormRegistrasi />} />
        <Route path="/login" element={<FormLogin />} />
      </Routes>
  </Router>

  )
}

export default App
