import React from 'react';
import { VStack, Center, Spinner, Text } from '@chakra-ui/react';
import { useAppData } from '../../../context/useAppData';
import TodoItem from './todoItem';
import { TodoI } from '../../../types/todo';

const TodoContent = () => {
  const {
    todoReducer: { todo, loading },
  } = useAppData();

  if (loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (!todo.length) {
    return (
      <Center>
        <Text fontSize="md"> No Data</Text>
      </Center>
    );
  }

  return (
    <VStack spacing={4}>
      {todo.map((item: TodoI) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </VStack>
  );
};

export default TodoContent;
