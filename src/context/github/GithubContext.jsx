import React from 'react';
import { createContext, useState } from 'react';

const GithubContext = createContext();
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUsers(data);
    setLoader(false);
    console.log(data);
  };

  return (
    <GithubProvider value={{ users, loader, fetchUsers }}>
      {children}
    </GithubProvider>
  );
};

export default GithubContext;
