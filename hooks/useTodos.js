import { useEffect, useMemo, useState } from "react";

const useTodos = (defaultValues = []) => {
  const [todos, setTodos] = useState([]);

  const create = (value = "") => {
    if (!value) return null;

    const date = new Date();
    setTodos([
      ...todos,
      {
        _id: date.getTime(),
        value: value,
        is_done: false,
      },
    ]);
  };

  const remove = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo._id !== todoId);
    setTodos(filteredTodos);
  };

  const removeAll = () => {
    setTodos([]);
  };

  const toogleStatus = (todoId) => {
    const formatedTodos = todos.map((todo) => {
      if (todo._id === todoId) {
        return { ...todo, is_done: !todo.is_done };
      }
      return todo;
    });

    setTodos(formatedTodos);
  };

  const donePercentage = useMemo(() => {
    let doneCount = 0;
    let totalTask = todos.length;
    todos.forEach(({ is_done }) => {
      if (is_done) doneCount++;
    });

    if (doneCount === 0) return 0;

    return Math.round((doneCount / totalTask) * 100);
  }, [todos]);

  useEffect(() => {
    setTodos(defaultValues);
  }, []);

  return {
    todos,
    create,
    remove,
    removeAll,
    toogleStatus,
    donePercentage,
  };
};

export default useTodos;
