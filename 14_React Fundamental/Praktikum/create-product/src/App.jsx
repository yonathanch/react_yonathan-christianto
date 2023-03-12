import { useState } from 'react'
import logo from './assets/bootstrap-logo.svg.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'
import Button from './components/Button/Button'
import Table from './components/Table/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />

      <div className="container text-center">
        <img src={logo} className="mx-auto mt-3 d-block img-fluid"/>
        <div className="container">
          <h3>Create Product</h3>
          <p>
            Below is an example form built entirely with Bootstrap’s form controls.Each required form group has a 
            validation state that can be triggered by attempting to submit the form without completing it. </p>
        </div>
      </div>

      <Form />
      <Button />
      <br /><br />
      <Table />
    </div>
  )
}

export default App
