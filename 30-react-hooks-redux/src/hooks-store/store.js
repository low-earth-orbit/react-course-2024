import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    // when the component mounts, set the state to the global state
    listeners.push(setState);

    return () => {
      // when the component unmounts, remove the listener
      listeners = listeners.filter((listener) => listener !== setState);
    };
  }, [setState]); // updating function never changes, this useEffect will only run once when the component mounts

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
