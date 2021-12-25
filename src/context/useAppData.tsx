import React, { useContext, createContext } from 'react';
import useTodo from './useTodo';

const appDataContext = createContext<any>({});
const { Provider } = appDataContext;

// setting up the state (reducers)
const useAppDataProvider = () => {
  const todoReducer = useTodo();
  return {
    todoReducer,
  };
};

// setup provider
export const AppDataProvider = ({ children }: any) => {
  const data = useAppDataProvider();
  return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(appDataContext);
