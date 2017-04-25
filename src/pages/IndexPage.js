import React from 'react';
import register from 'soya/lib/client/Register';
import ReduxPage from 'soya/lib/page/ReduxPage';
import RenderResult from 'soya/lib/page/RenderResult';
import ReactRenderer from 'soya/lib/page/react/ReactRenderer';
import IndexPageContent from './IndexPageContent';

class IndexPage extends ReduxPage{
	static get pageName() {
		return 'todoPage';
	}

	get pageTitle() {
		return 'Todo Title'
	}

	get pageContent() {
		return IndexPageContent;
	}


	render(httpRequest, routeArgs, store, callback) {
		const reactRenderer = new ReactRenderer();
		const context = this.createContext(store);
		reactRenderer.head = `<title>Template • TodoMVC</title>`;
		reactRenderer.body = React.createElement(
			this.pageContent, 
			{
				context : {
					...context,
					routeArgs,
					httpRequest
				}
			}
		);

		const renderResult = new RenderResult(reactRenderer);
		callback(renderResult);
	}

}

register(IndexPage);

export default IndexPage;
