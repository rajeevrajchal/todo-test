import React from 'react';
import {
  Stack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import WeboModal from '../../resuable/weboModal';
import { useAppData } from '../../../context/useAppData';

interface AddTodoProps {
  open: boolean;
  onClose: () => void;
}

const AddTodo = ({ open, onClose }: AddTodoProps) => {
  const {
    todoReducer: { addTodo },
  } = useAppData();
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Title is required'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);
      await addTodo(values);
      resetForm();
      onClose();
      setSubmitting(false);
    },
  });
  return (
    <WeboModal
      open={open}
      onClose={onClose}
      title="Add Todo"
      content={
        <VStack>
          <FormControl>
            <FormLabel htmlFor="email">Title</FormLabel>
            <Input
              variant="filled"
              id="title"
              type="text"
              name="title"
              placeholder="Todo Title"
              isInvalid={Boolean(formik.errors.title && formik.touched.title)}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </FormControl>
        </VStack>
      }
      footer={
        <Stack spacing={4} direction="row" align="center">
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => {
              formik.resetForm();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => formik.handleSubmit()}
            isLoading={formik.isSubmitting}
          >
            Save
          </Button>
        </Stack>
      }
    />
  );
};

export default AddTodo;
