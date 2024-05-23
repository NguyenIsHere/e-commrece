import React from 'react'
import ReactDOM from 'react-dom' // Corrected import
import App from './App'
import reportWebVitals from './reportWebVitals'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBMfiH92ee-kO--DP5OU2D_kXdOb7CbdtY',
  authDomain: 'ecommerce-1ccdf.firebaseapp.com',
  projectId: 'ecommerce-1ccdf',
  storageBucket: 'ecommerce-1ccdf.appspot.com',
  messagingSenderId: '972565582940',
  appId: '1:972565582940:web:48facff91cb5f4787c8299',
  measurementId: 'G-X7DJCZZKF3'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth} />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
