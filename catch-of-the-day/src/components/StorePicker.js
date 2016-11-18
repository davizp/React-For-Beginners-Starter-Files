import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	goToStore(e) {
		e.preventDefault();
		console.log('You Changed the URL');
		//first grab the text from the box
		// second we're going to transition from / to /store/:storeId
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore} ref={(input) => this.storeInput = input}>
				<h2>Please Enter A Store</h2>
				<input type="text" placeholder="Store Name" defaultValue={getFunName()} required />
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;