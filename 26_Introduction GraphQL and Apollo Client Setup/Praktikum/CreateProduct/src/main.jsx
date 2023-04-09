import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Homepage from './Pages/Homepage'
// import './index.css'
import { Provider } from "react-redux";
import store from './Components/redux/store';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import ProductList from './Components/ProductList/ProductList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Homepage />
        <ProductList />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
