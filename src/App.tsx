import React, { Fragment, useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };
  console.log(todos);

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    
    setTodos(newTodos);
  };

  return (
    <Fragment>
      
      
      <div style={{display: 'flex', justifyContent: 'center'}}>
  <div>
  <h1>Todo List</h1>
  <form className='text-center' onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button type='submit'>Add Todo</button>
      </form>
      
      
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <Fragment key={index}>
              <div
                style={{ textDecoration: todo.complete ? 'line-through' : '' }}
              >
                {todo.text}
              </div>
              <button type='button' onClick={(): void => completeTodo(index)}>
                {todo.complete ? 'Incomplete' : 'Complete'}
              </button>
              <button type='button' onClick={(): void => deleteTodo(index)}>
                &times;
              </button>
            </Fragment>
          );
        })}
      </section>
  </div>
</div>
      
      
    </Fragment>
  );
}
export default App;
