import { useState } from "react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChanges = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      const date = new Date();
      setTodos([
        ...todos,
        {
          _id: date.getTime(),
          value: inputValue,
          is_done: false,
        },
      ]);
      setInputValue("");
    }
  };

  const handleDelete = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo._id !== todoId);
    setTodos(filteredTodos);
  };

  const handleToogleStatus = (todoId) => {
    const formatedTodos = todos.map((todo) => {
      if (todo._id === todoId) {
        return { ...todo, is_done: !todo.is_done };
      }
      return todo;
    });

    setTodos(formatedTodos);
  };

  return (
    <div className="flex justify-center p-10">
      <div className="w-[420px]">
        <h1 className="text-2xl font-bold text-center mb-10">TODO LIST</h1>

        <div className="mb-4">
          <input
            onChange={handleInputChanges}
            onKeyPress={handleOnKeyPress}
            value={inputValue}
            placeholder="Today i will..."
            className={`
              w-full bg-gray-50 text-xl px-4 py-2 rounded-xl border-2 border-gray-400 transition shadow-none
              focus:outline-none focus:border-gray-500 focus:shadow-xl
            `}
          />
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              onClick={() => handleToogleStatus(todo._id)}
              key={todo._id}
              className={`
                px-4 py-2 cursor-pointer shadow-none transition scale-1 flex justify-between items-center group rounded-lg border-2 border-transparent
                hover:shadow-lg hover:scale-105 hover:border-gray-200
            `}
            >
              <span
                className={`${todo.is_done ? "line-through" : ""} select-none`}
              >
                {todo.value}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleDelete(todo._id);
                }}
                type="button"
                className={`
                  opacity-0 transition h-[28px] w-[28px] flex justify-center items-center rounded-lg select-none
                  group-hover:opacity-100 
                  hover:bg-red-100
              `}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;
