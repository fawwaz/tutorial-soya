import React from 'react';

class InputText extends React.Component {
  static get TYPE(){
    return{
      NEW : 'new-todo',
      EDIT : 'edit'
    }
  }

  render() {
    return (
      <input
        className={this.props.type}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default InputText;
