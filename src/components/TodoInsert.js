import React, {useCallback, useState} from 'react'
import { MdAdd } from "react-icons/md";
import '../styles/TodoInsert.scss';

function TodoInsert({onInsert}) {
  const [value, setValue] = useState('');

  const onChange = useCallback( (e) => {
    console.log(e);
    setValue(e.target.value);
  }, []) // state값이 없어도 매번 실행이 된다.

  const onSubmit = useCallback( (e) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
    // submit이벤트는 브라우저에서 새로고침을 발생시킨다.
  }, [value]) //배열안에 바뀌는 state값을 넣는다. (state값이 없으면 실행이 안된다.)

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input type="text" placeholder="할일을 입력하세요" onChange={onChange} value={value} />
      <button type="submit"> <MdAdd/> </button>
    </form>
  )
}

export default TodoInsert