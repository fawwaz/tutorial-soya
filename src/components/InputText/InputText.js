import React from 'react';
import createField from 'soya/lib/data/redux/form/createField';

class InputText extends React.Component {
  static get TYPE(){
    return{
      NEW : 'new-todo',
      EDIT : 'edit'
    }
  }

  handleChange(event) {
    this.props.handleChange(event.target.value, event);
  }

  handleKeyPress(event) {
    this.props.onKeyPressed(event);
  }

  render() {
    return (
      <input
        className={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onKeyDown={this.handleKeyPress.bind(this)}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default createField(InputText);
