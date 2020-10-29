import React, { createContext, useContext, useReducer } from "react";

export const CreateNewContext = ({ reducer, initialState }) => {
  const Context = createContext();

  const useContextData = () => {
    const { state, dispatch } = useContext(Context);

    return [state, dispatch];
  };

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    );
  };

  return {
    Context,
    Provider,
    useContextData,
  };
};
