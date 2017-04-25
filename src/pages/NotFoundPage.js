import React from 'react';
import register from 'soya/lib/client/Register';
import ReduxPage from 'soya/lib/page/ReduxPage';
import RenderResult from 'soya/lib/page/RenderResult';
import ReactRenderer from 'soya/lib/page/react/ReactRenderer';

class NotFoundPage extends ReduxPage{
	static get pageName() {
		return 'NotFoundPage';
	}

	get pageTitle() {
		return 'NotFoundPage Title'
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
			'This is my not found page !'
		);

		const renderResult = new RenderResult(reactRenderer);
		callback(renderResult);
	}

}

register(NotFoundPage);

export default NotFoundPage;
