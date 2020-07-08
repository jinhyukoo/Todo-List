import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); //onToggle이 실행되지 않게 한다.
          //이벤트의 확산을 멈춰줌. x를 눌렀을 때 onRemove에 이어 onToggle이 실행되는데 이를 막아줌
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{text}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}

export default TodoItem;
