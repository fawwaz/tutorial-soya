import React from 'react';
import Header from '../components/Header/Header';

class IndexPageContent extends React.Component {


  render() {
    require('../../assets/base.css');
    require('../../assets/index.css');

    return(
      <div>
        <section className="todoapp">
          <Header text="Soya Todo">
          </Header>
	</section>
      </div>
    );
  }
}

export default IndexPageContent;


