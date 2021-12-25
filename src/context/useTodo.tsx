import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import { callAxios } from '../plugins/call.axios';
import { TodoI } from '../types/todo';

const useTodo = () => {
  const [todo, setTodo] = useState<TodoI[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl = 'todo';

  const getTodo = async () => {
    setLoading(true);
    const res = await callAxios({
      url: apiUrl,
      method: 'GET',
    });
    setLoading(false);
    console.log('res', res);
    setTodo(res);
    return todo;
  };

  const deleteTodo = async (id: number | string) => {
    const res = await callAxios({
      url: `${apiUrl}/${id}`,
      method: 'DELETE',
    });
    if (res.status !== 'error') {
      getTodo();
      toast.success('Item deleted');
    } else {
      toast.error('Failed to update item');
    }
    return res;
  };

  const updateTodo = async (value: boolean, item: TodoI) => {
    const res = await callAxios({
      url: `${apiUrl}/${item.id}`,
      method: 'PUT',
      data: {
        id: item.id,
        completed: value,
        title: item.title,
        order: item.order,
      },
    });
    console.log('the res', res);
    if (res.status !== 'error') {
      getTodo();
      toast.success('Item updated');
    } else {
      toast.error('Failed to update item');
    }
    return res;
  };

  const addTodo = async (data: TodoI) => {
    const postData = {
      id: uuidv4(),
      completed: false,
      title: data.title,
      order: data.order,
    };
    const res = await callAxios({
      url: apiUrl,
      method: 'POST',
      data: postData,
    });
    if (res.status !== 'error') {
      getTodo();
      toast.success('Item added');
    } else {
      toast.error('Failed to add item');
    }
    return res;
  };

  return {
    todo,
    loading,
    getTodo,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};

export default useTodo;
