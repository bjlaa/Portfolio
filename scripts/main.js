import React from 'react';
import {ReactDOM, render} from 'react-dom';

import { Router, Route, Navigation, Link, browserHistory } from 'react-router';
import { createHistory } from 'history';

/*
	Components Imports
*/
import FrontPage from '../components/front-page.js';
import Skills from '../components/skills.js';
import Work from '../components/work.js';
import AboutMe from '../components/about-me.js';
import NotFound from '../components/NotFound.js';

/*
	Routes
*/
var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={FrontPage} />
		<Route path="/skills"  component={Skills}/>
		<Route path="/work" component={Work} />
		<Route path="/about-me" component={AboutMe} />
		<Route path="/*" component={NotFound} />
	</Router>
);



/*
	Renders to the DOM element with the id "main"
*/

var main= document.querySelector("#main");
/*
ReactDOM.render(<App data={data} />, main);*/
render(routes, main);


