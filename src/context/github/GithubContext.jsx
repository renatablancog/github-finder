import React from 'react';
import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loader: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //get initial users(testing purposes)
  const fetchUsers = async () => {
    setLoader();

    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({ type: 'GET_USERS', payload: data });

    console.log(data);
  };

  //Set loading
  const setLoader = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loader: state.loader, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
