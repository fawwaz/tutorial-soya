import React from 'react';
import Header from '../components/Header/Header';
import InputText from '../components/InputText/InputText';

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
	</section>
      </div>
    );
  }
}

export default IndexPageContent;


