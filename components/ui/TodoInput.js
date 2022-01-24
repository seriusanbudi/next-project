import { useState } from "react";

const TodoInput = (props) => {
  const { onSubmit } = props;
  const [inputValue, setInputValue] = useState("");

  const handleInputChanges = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
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
  );
};

export default TodoInput;
