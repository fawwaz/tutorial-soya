import React from 'react';
import ListElement from '../ListElement/ListElement';

class TodoWrapper extends React.Component {
  render() {
    return (
        <ul className="todo-list">
          <ListElement
            label="example undone"
            isChecked={true}
          />
          <ListElement 
            label="example done"
            isChecked={false}
          />
        </ul>
    );
  }
}

export default TodoWrapper;
