/*
	Work Component
	<Work />
*/

import React from "react";
import {data} from "../scripts/data-model";

class Work extends React.Component {
	render() {
		return (
			<div className="work">
				<WorkItem data={data} />
			</div>
		)

	}
}

class WorkItem extends React.Component {
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
			<div className="work-item">
				{work}
			</div>
		)
	}
}

export default Work;