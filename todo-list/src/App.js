import React, { Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate.js';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList.js';

class App extends Component {

  id = 3 //기본적으로 3개를 깔고 시작하기 때문에
  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리액트 소개', checked: false },
      { id: 1, text: ' 리액트 소개', checked: true},
      { id: 2, text: ' 리액트 소개', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value //input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', //인풋을 비운 후
      //concat을 사용하여 배열에 추가한다.
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    //파라미터로 받은 id를 통해 몇번째 아이템인지 탐색
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //찾은 객체

    const nextTodos = [...todos]; //배열을 복사

    //기존의 값들을 복사하고 checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }
  //이렇게 나타낼 수도 있음.
  /*
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index];

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }
  */

  //제거와 같은 경우 파라미터로 받아온 id를 갖고 있지 않은 배열을 새로 생성한 것이다.
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos = {todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
