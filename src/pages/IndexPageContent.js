import React from 'react';
import Header from '../components/Header/Header';
import InputText from '../components/InputText/InputText';
import TodoWrapper from '../components/TodoWrapper/TodoWrapper';
import Footer from '../components/Footer/Footer';
import FilterWrapper from '../components/FilterWrapper/FilterWrapper';

class IndexPageContent extends React.Component {


  render() {
    require('../../assets/base.css');
    require('../../assets/index.css');

    return(
      <div>
        <section className="todoapp">
          <Header text="Soya Todo">
            <InputText
              type={InputText.TYPE.NEW}
              placeholder="What need to be done ?"
            />
          </Header>
          <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
          />
          <label for="toggle-all">Mark all as complete</label>
          <TodoWrapper /> 

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

export default IndexPageContent;


