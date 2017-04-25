import React from 'react';
import register from 'soya/lib/client/Register';
import ReduxPage from 'soya/lib/page/ReduxPage';
import RenderResult from 'soya/lib/page/RenderResult';
import ReactRenderer from 'soya/lib/page/react/ReactRenderer';

class IndexPage extends ReduxPage{
	static get pageName() {
		return 'todoPage';
	}

	get pageTitle() {
		return 'Todo Title'
	}

	get pageContent() {
		return <div>This is just a placeholder for my Pagecontent !</div>;
	}


	render(httpRequest, routeArgs, store, callback) {
		const reactRenderer = new ReactRenderer();
		const context = this.createContext(store);
		reactRenderer.head = `<title>Template • TodoMVC</title>`;
		reactRenderer.body = React.createElement(
			'h1', 
			{
				context : {
					...context,
					routeArgs,
					httpRequest
				}
			},
			'This is my very fist page !'
		);

		const renderResult = new RenderResult(reactRenderer);
		callback(renderResult);
	}

}

register(IndexPage);

export default IndexPage;
