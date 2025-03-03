import React from 'react';

const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.payload, loader: false };
    default:
      return state;
  }
};

export default githubReducer;

//So by 'spreading' state { ...oldState, updatedProp: 'foo' } then you are first cloning the previous state i.e. spreading all the properties from the previous state into a new object literal, then overwriting the property that you want to update
