import React from 'react';
import InputText from '../InputText/InputText';

class ListElement extends React.Component {
  
  decideClass() {
      if( this.props.isChecked ) {
        return 'completed';
      }else {
        return '';
      }
  }

  render() {
    return (
      <li className={this.decideClass()}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label> {this.props.label} </label>
          <button className="destroy" />
        </div>
        <InputText type={InputText.TYPE.EDIT} />
      </li>
    );
  }
}

export default ListElement;
