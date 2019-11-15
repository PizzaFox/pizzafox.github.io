// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='en'>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;