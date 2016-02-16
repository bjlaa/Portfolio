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
				<WorkList data={data} />
			</div>
		)

	}
}

class WorkList extends React.Component {
	render() {
		var work = this.props.data.work.map(function(e) {
			return (
				<div key={e.id}>
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