import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

export default function TodosContainer() {
  const dispatch = useDispatch();
  // 스토어의 상태 가져오기
  const { input, todos } = useSelector((state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }));

  const onChangeInput = useCallback(
    (input) => {
      dispatch(changeInput(input));
    },
    [dispatch],
  );

  const onInsert = useCallback(
    (text) => {
      dispatch(insert(text));
    },
    [dispatch],
  );

  const onToggle = useCallback(
    (id) => {
      dispatch(toggle(id));
    },
    [dispatch],
  );

  const onRemove = useCallback(
    (id) => {
      dispatch(remove(id));
    },
    [dispatch],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
}
