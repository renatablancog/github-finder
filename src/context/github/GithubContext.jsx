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

  const [state, dispatch] = useReducer(githubReducer, initialState); /**DUDA */

  //Get searched users
  const searchUsers = async (text) => {
    setLoader();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({ type: 'GET_USERS', payload: items });

    console.log(response);
  };

  //Clear users from State
  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' });
  };
  //Set loading
  const setLoader = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loader: state.loader,
        searchUsers,
        clearUsers,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
