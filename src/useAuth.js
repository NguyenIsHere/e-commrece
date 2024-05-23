// useAuth.js
import { useState, useEffect } from 'react'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'

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
const provider = new GoogleAuthProvider()

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const login = async () => {
    setLoading(true)
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error('Error signing in: ', error)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error signing out: ', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
    })
    return unsubscribe
  }, [])

  return { user, loading, login, logout }
}
