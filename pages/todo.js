import TodoInput from "components/ui/TodoInput";
import { useTodos } from "hooks";

const TodoPage = () => {
  const { todos, create, remove, removeAll, toogleStatus, donePercentage } =
    useTodos([]);

  return (
    <div className="flex justify-center p-10">
      <div className="w-[420px]">
        <h1 className="text-2xl font-bold text-center mb-10">TODO LIST</h1>

        <div className="mb-4">
          <div className="mb-2">
            <TodoInput onSubmit={(value) => create(value)} />
          </div>
          <div className="flex justify-between text-sm">
            <div>DONE: {donePercentage}%</div>
            {todos.length > 0 && (
              <button
                className="text-red-500 hover:font-bold"
                type="button"
                onClick={removeAll}
              >
                Remove all
              </button>
            )}
          </div>
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              onClick={() => toogleStatus(todo._id)}
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
                  remove(todo._id);
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
