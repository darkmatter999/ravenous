import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBarHeader.css';

class SearchBarHeader extends React.Component {
	render() {
		return (
			<h1
        		onClick={this.props.onClick}>
				ravenous
			</h1>
		);
	}
}

export default SearchBarHeader;