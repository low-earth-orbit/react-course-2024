import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      // if shouldListen is true, add the setState function to the listeners array
      listeners.push(setState);
    }
    return () => {
      if (shouldListen) {
        // when the component unmounts, remove the listener
        listeners = listeners.filter((listener) => listener !== setState);
      }
    };
  }, [shouldListen, setState]); // updating function never changes, this useEffect will only run once when the component mounts

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
