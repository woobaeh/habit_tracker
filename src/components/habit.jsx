import React, { PureComponent } from "react";

// state는 없고 props를 전달 받는다.
// onIncrement... on..on.. 함수들은 app.jsx의 멤버 변수라서 업데이트 되지 않는다
// this.props.habit에서 habit의 name, count는 변경되지만 PureComponet는 shouldComponentUpdate함수를 실행하므로
// shallow 하게 state와 props를 업데이트 전과 후를 비교한다
// 그래서 이 컴포넌트는 PureComponent이다
class Habit extends PureComponent {
  componentDidUpdate() {
    // ~컴포넌트가 업데이트 될때마다
    console.log("component updated");
  }
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  } //  use e.g 타이머 시작 , 실시간 채팅 태화 소켓 초기화

  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmounted`);
  } // 타이머 중지, 채팅 소켓 관련 정리하고 리소스 지우기

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
