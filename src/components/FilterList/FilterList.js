import React from 'react';

class FilterList extends React.Component {

  decideClassName() {
    if(this.props.isSelected) {
      return 'selected';
    }else{
      return '';
    }
  }

  render () {
    return (
      <li>
        <a
          className={this.decideClassName()}
        >{this.props.text}</a>
      </li>
    );
  }
}

export default FilterList;

