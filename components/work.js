/*
	Work Component
	<Work />
*/

import React from "react";
import {data} from "../scripts/data-model";
import Footer from '../components/footer.js';
import Backbutton from '../components/backbutton.js';

class Work extends React.Component {
	render() {
		return (
			<div className="work">
				<Backbutton />
				<WorkList data={data} />
				<Footer />
			</div>
		)

	}
}

class WorkList extends React.Component {
	render() {
		var work = this.props.data.work.map(function(e) {
			return (
				<a className="work-item" key={e.id} href={e.URL} target="_blank">
					<img className="work-img" src={e.imageURL} alt=""/>
					<p>{e.title}</p>
				</a>
			)
		});
		return (
			<div className="work-list">
				{work}
			</div>
		)
	}
}

export default Work;