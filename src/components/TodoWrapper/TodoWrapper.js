import React from 'react';
import connect from 'soya/lib/data/redux/connect';
import ListElement from '../ListElement/ListElement';
import TodoSegment from '../../segments/TodoSegment';

class TodoWrapper extends React.Component {

  static getSegmentDependencies() {
    return [TodoSegment];
  }

  static subscribeQueries(props, subscribe) {
    subscribe(TodoSegment.id(), "todos", "todo_list");
    subscribe(TodoSegment.id(), "filter_iscomplete", "filter_iscomplete");
    subscribe(TodoSegment.id(), "editing","editing_id");
  }

  render() {
    if(this.props.result.todo_list){
      const todolist = this.props.result.todo_list.map((element) => {
        return (
          <ListElement 
            id={element.id}
            label={element.text}
            isChecked={element.isCompleted}
          />
        );
      });

      return (
        <ul className="todo-list">
          {todolist}
        </ul>
      );
    }else{
      return <div />
    }
  }
}

export default connect(TodoWrapper);
