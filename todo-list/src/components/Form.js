//Form에 필요한 기능
//텍스트 내용이 바뀌면 state를 업데이트 한다.
//버튼이 클릭되면 새로운 todo를 생성하고 todos를 업데이트 시킨다.
//인풋에서 Enter를 누르면 버튼을 클릭한 것과 동일한 작업을 진행한다.
//이러한 기능들을 구현하기 위해 App 컴포넌트에 메소드를 만들고 상태의 input값과 함께 Form으로 전달한다.
import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className = "form">
      <input value = {value} onChange = {onChange} onKeyPress = {onKeyPress}/>
      <div className = "create-button" onClick = {onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
