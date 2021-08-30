import { useState } from 'react';

const Todo = () => {
  const [text, setText] = useState('');
  const onChangeText = (e) => setText(e.target.value);

  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const onClickAdd = () => {
    if (text === '') return;
    const newTodos = [...incompleteTodos, text];
    setIncompleteTodos(newTodos);
    setText('');
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const [completeTodos, setCompleteTodos] = useState([]);

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <div>
        <input placeholder="ToDoを入力" value={text} onChange={onChangeText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div>
        <p>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index}>
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={index}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
