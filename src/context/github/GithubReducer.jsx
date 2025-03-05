import React from 'react';

const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loader: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loader: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
        loader: false,
      };
    default:
      return state;
  }
};

export default githubReducer;

//So by 'spreading' state { ...oldState, updatedProp: 'foo' } then you are first cloning the previous state i.e. spreading all the properties from the previous state into a new object literal, then overwriting the property that you want to update

//In React, a payload refers to the data that is sent along with an action or an event. It is a way to pass additional information from the component that triggered the action to the reducer or the event handler.
