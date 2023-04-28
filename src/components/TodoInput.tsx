import React, { useState } from "react";

interface TodosInputProps {
    addTodos: (value: String) => void;
}

const TodoInput = ({addTodos}:TodosInputProps) => {
    const [inputText, setInputText] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };
  const handleAdd = () => {
    addTodos(inputText);
    setInputText("");
    };
    

  return (
    <div>
      <input value={inputText} onChange={handleChange} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};


export default TodoInput;
