import React, { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Text,
  Checkbox,
  Alert,
  AlertIcon,
  AlertDescription,
  Stack,
  Button,
} from '@chakra-ui/react';
import WeboModal from '../../resuable/weboModal';
import { useAppData } from '../../../context/useAppData';
import { TodoI } from '../../../types/todo';

interface TodoItemProps {
  item: TodoI;
}
const TodoItem = (props: TodoItemProps) => {
  const { item } = props;
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const {
    todoReducer: { deleteTodo, updateTodo },
  } = useAppData();
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      minHeight="8vh"
      maxH={'16vh'}
      boxShadow="outline"
      paddingX="16px"
      borderRadius={8}
    >
      <Box>
        <Checkbox
          isChecked={item.completed}
          onChange={(e) => updateTodo(e.target.checked, item)}
          spacing="1rem"
        >
          <Text
            fontSize="md"
            noOfLines={5}
            justifyContent="flex-start"
            as={item.completed ? 's' : 'span'}
          >
            {item.title}
          </Text>
        </Checkbox>
      </Box>
      <Box marginLeft={8}>
        <DeleteIcon
          onClick={() => setDeleteModal(true)}
          cursor="pointer"
          fontSize={20}
          _hover={{
            color: 'blue.600',
          }}
        />
      </Box>
      <WeboModal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Delete Todo"
        content={
          <Alert status="warning">
            <AlertIcon />
            <AlertDescription>
              Are you sure you want to delete this todo?
            </AlertDescription>
          </Alert>
        }
        footer={
          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="blue"
              variant="outline"
              onClick={() => setDeleteModal(false)}
            >
              No
            </Button>
            <Button colorScheme="red" onClick={() => deleteTodo(item.id)}>
              Yes
            </Button>
          </Stack>
        }
      />
    </Flex>
  );
};

export default TodoItem;
