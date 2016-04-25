import React from 'react';
import ReactDOM from 'react-dom';

/*
	Components Imports
*/
import FrontPage from '../components/front-page.js';

class App extends React.Component {
	render() {
		return <FrontPage />
	}
}





/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
ReactDOM.render(<App />, main);


