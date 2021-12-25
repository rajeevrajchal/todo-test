import { Button, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import AddTodo from './addTodo';

const TodoHeaders = () => {
  const [addModal, setAddModal] = useState<boolean>(false);
  return (
    <>
      <Flex
        height="8vh"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="2xl"
        paddingX="16px"
        borderRadius={8}
      >
        <Heading>My ToDos </Heading>
        <Button colorScheme="blue" onClick={() => setAddModal(true)}>
          Add Task
        </Button>
      </Flex>
      <AddTodo open={addModal} onClose={() => setAddModal(false)} />
    </>
  );
};

export default TodoHeaders;
