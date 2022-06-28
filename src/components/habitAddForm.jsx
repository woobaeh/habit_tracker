import React, { PureComponent } from "react";

// onAdd 함수만 props으로 받는다. onAdd 함수는 app.jsx에 있고 클래스의 멤버 변수이므로 생성시에 한번만 업데이트 된다
// state나 props의 데이터 변경이 없으면 PureComponent로 두자.
class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
