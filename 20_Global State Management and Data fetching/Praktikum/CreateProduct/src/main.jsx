import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Homepage from './Pages/Homepage'
// import './index.css'
import { Provider } from "react-redux";
import store from './Components/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Homepage />
    </Provider>
  </React.StrictMode>,
)
