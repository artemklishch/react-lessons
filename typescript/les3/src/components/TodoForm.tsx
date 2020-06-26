import React, { useState, useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  //   const [title, setTitle] = useState<string>("");
  //   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(e.target.value);
  //   };
  const ref = useRef<HTMLInputElement>(null);
  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      //   console.log(title);
      //   setTitle("");
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };
  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
