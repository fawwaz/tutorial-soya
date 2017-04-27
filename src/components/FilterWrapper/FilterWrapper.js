import React from 'react';
import FilterList from '../FilterList/FilterList';

class FilterWrapper extends React.Component {
  render() {
    return(
      <ul className="filters">
        <FilterList
            text="All"
          />
          <FilterList
            text="Active"
          />
          <FilterList
            text="Completed"
          />
      </ul>
    );
  }
}

export default FilterWrapper;