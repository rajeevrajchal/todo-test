/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next';
import { useEffect } from 'react';

import TodoContent from '../components/modules/todo/todoContent';
import TodoHeaders from '../components/modules/todo/todoheader';
import { useAppData } from '../context/useAppData';
import HomeLayout from '../layout/homelayout';

const Home: NextPage = () => {
  const {
    todoReducer: { getTodo },
  } = useAppData();

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <HomeLayout>
      <TodoHeaders />
      <TodoContent />
    </HomeLayout>
  );
};

export default Home;
