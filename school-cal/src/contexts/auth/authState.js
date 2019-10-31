import React, { createContext, useReducer, useEffect } from "react"

import {
  IS_LOADING,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNOUT_SUCCESS,
  SET_CURRENT_USER,
  SIGNOUT_FAILURE,
} from "./types"
import authReducer from "./authReducer"

import { client } from "../../utilities/api"
import { loadState, saveState } from "../../utilities/localStorage"

export const AuthContext = createContext()

export const AuthState = props => {
  const initialState = {
    isLoading: false,
    signInError: null,
    signUpError: null,
    signOutError: null,
    accessToken: null,
  }

  const localState = loadState()

  const [state, dispatch] = useReducer(authReducer, localState || initialState)

  useEffect(() => {
    saveState(state)
  }, [state])

  const signUpUser = async values => {
    dispatch({ type: IS_LOADING, payload: true })
    try {
      const data = await client.post("/register", values)

      dispatch({ type: SIGNUP_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error })
    }
  }
  const signInWithEmailAndPassword = async credential => {
    dispatch({ type: IS_LOADING, payload: true })
    try {
      const data = await client.post("/sign-in")

      dispatch({ type: SIGNIN_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: SIGNIN_FAILURE, payload: error })
    }
  }

  const signInWithGoogle = async () => {
    try {
      //let data = await firebase.auth().signInWithPopup(googleProvider)

      dispatch({ type: SIGNIN_SUCCESS, payload: true })
    } catch (error) {
      dispatch({ type: SIGNIN_FAILURE, payload: error })
    }
  }
  const signOut = () => {
    try {
      dispatch({ type: SIGNOUT_SUCCESS })
    } catch (error) {
      dispatch({ type: SIGNOUT_FAILURE, payload: error.message })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        signInError: state.signInError,
        signUpError: state.signUpError,
        currentUser: state.currentUser,
        signInWithEmailAndPassword,
        signInWithGoogle,
        signUpUser,
        signOut,
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}
