import React from 'react';
import Form from 'soya/lib/data/redux/form/Form';
import Header from '../components/Header/Header';
import InputText from '../components/InputText/InputText';
import TodoWrapper from '../components/TodoWrapper/TodoWrapper';
import Footer from '../components/Footer/Footer';
import FilterWrapper from '../components/FilterWrapper/FilterWrapper';
import TodoSegment from '../segments/TodoSegment';
import FormSegment from 'soya/lib/data/redux/form/FormSegment';
import connect from 'soya/lib/data/redux/connect';

const FORM_ID = 'todo_form';

class IndexPageContent extends React.Component {

  static getSegmentDependencies() {
    return [TodoSegment];
  }


  constructor(props){
    super(props);
    if(props.context) {
      this.form = new Form(this.props.context.store, FORM_ID);
    }
  }

  listenEnter(event) {
    const form = this.form;
    const todostore = this.context.store;
    if (event.key === 'Enter') {
      const ACTION_CREATOR = TodoSegment.getActionCreator();

      const promise = todostore.query(FormSegment.id(), {
        formId: FORM_ID,
        type: 'field',
        fieldName: 'input_todo'
      }).then((retval) => {
        todostore
          .dispatch(ACTION_CREATOR.add(retval.value))
          .then(()=>{
            form.setValue('input_todo','');
          });
      });
    }
  }

  render() {
    require('../../assets/base.css');
    require('../../assets/index.css');

    return(
      <div>
        <section className="todoapp">
          <Header text="Soya Todo">
            <InputText
              form={this.form}
              name="input_todo"
              context={this.props.context}
              type='new-todo'
              placeholder="What need to be done ?"
              onKeyPressed={this.listenEnter}
            />
          </Header>
          <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
          />
          <label for="toggle-all">Mark all as complete</label>
          <TodoWrapper context={this.props.context}/> 

          <Footer style="footer">
            <span className="todo-count">
              <strong>0 items left</strong>
            </span>
            <FilterWrapper />
            <button className="clear-completed">
              Clear completed
            </button>
          </Footer>
        </section>
        </section>
        <Footer style="info">
          <p>Double-click to edit a todo</p>
          <p>Created by <a href="http://fawwazmuhammad.com">Fawwaz Muhammad</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </Footer>
      </div>
    );
  }
}

export default connect(IndexPageContent);


