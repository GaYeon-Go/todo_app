import { useCallback, useRef, useState } from 'react'; //react에서 useState이라는 Hook함수를 사용
import './App.css';
import TodoInsert from './components/TodoInsert.js';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'운동하기',
      checked:true,
    },
    {
      id:2,
      text:'요리하기',
      checked:true,
    },
    {
      id:3,
      text:'학원가기',
      checked:false,
    }
  ]);

  const nextId = useRef(4);
  console.log(nextId);

  const onInsert = useCallback( (value) => { //todos의 4번째 객체를 만드는 함수 (insert에서 생성한 value로 생성한다.)
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    };
    setTodos(todos.concat(todo)); //concat메소드를 사용해서 todos를 바꾼다.
    nextId.current += 1;
  }, [todos]) //todos의 배열값이 바뀔때만 실행한다.

  const onToggle = useCallback( (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }, [todos]) // 배열에 있는 객체를 하나하나 가져와서 새로운 배열로 바꿔준다. (똑같이 배열을 만든것)

  const onRemove = useCallback( (id) => {
    setTodos(todos.filter(todo => todo.id !== id)) //삭제한거 나머지가 남아있어야 된다.
  }, [todos]) // 추려서 새로운 배열로 만드는것 (배열중에서 조건에 맞는 새로운 배열을 만드는 메소드)

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      {/* <TodoList todos={todos} onToggle={onToggle} /> */}
    </TodoTemplate>
  );
}

export default App;
