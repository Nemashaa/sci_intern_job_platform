import { createContext, useReducer, useContext, useEffect } from 'react';

// Initial state
const initialState = {
  user: null,
  token: null,
  error: null,
};

// Action types
const ActionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT: 'LOGOUT',
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        error: action.payload.error,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

// Context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // Try to get user and token from local storage on initial load
  const storedUser = localStorage.getItem('user');
  const storedToken = localStorage.getItem('token');
  const initialUser = storedUser !== 'undefined' ? JSON.parse(storedUser) : storedUser;
  const initialToken = storedToken ? storedToken : null;
  const [state, dispatch] = useReducer(authReducer, {
    ...initialState,
    user: initialUser,
    token: initialToken,
  });

  const loginSuccess = (user, token) => {
    // Set user and token in both state and local storage
    
    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: { user, token } });
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const loginFailure = (error) => {
    dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: { error } });
  };

  const logout = () => {
    // Remove user and token from both state and local storage
    dispatch({ type: ActionTypes.LOGOUT });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  useEffect(() => {
  }, []);

  return (
    <AuthContext.Provider value={{ state, loginSuccess, loginFailure, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};