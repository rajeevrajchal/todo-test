import React from 'react';
import { VStack, Center, Spinner, Text } from '@chakra-ui/react';
import { map, sortBy } from 'lodash';
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
      {map(sortBy(todo, ['completed']), (item: TodoI) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </VStack>
  );
};

export default TodoContent;
