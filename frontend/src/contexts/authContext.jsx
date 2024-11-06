import { createContext, useReducer } from "react";

export const authContext = createContext({
  isLoggedIn: false,
  setLoggedIn: () => {}
});

const AUTH_ACTION_TYPES = {
  
  SET_LOGGED_IN: 'SET_LOGGED_IN'

}

const INITIAL_STATE = {
  isLoggedIn: false,
  
};

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    
      case AUTH_ACTION_TYPES.SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in authReducer`);
  }
};

export const Authprovider = ({children}) => {

  const [{ isLoggedIn}, dispatch] =
    useReducer(authReducer, INITIAL_STATE);

    const setLoggedIn = (bool) => {
      dispatch({type: AUTH_ACTION_TYPES.SET_LOGGED_IN, payload:bool})
    }

    const value = {
        isLoggedIn,
        setLoggedIn
    }
    return <authContext.Provider value={value}>{children}</authContext.Provider>
}