//함수형이 아닌 클래스형 컴포넌트로 만든 이유는 보여주는 리스트가 동적이기 때문이다.
//갯수가 적을 때는 성능에 큰 차이가 없지만 갯수가 많아지면 성능에 차이가 생긴다.

import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component{
  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked}) => (
        <TodoItem
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
