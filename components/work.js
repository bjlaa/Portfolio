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
				<div className="work-item" key={e.id}>
					<img src={e.imageURL} alt=""/>
					<h4>{e.title}</h4>
				</div>
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