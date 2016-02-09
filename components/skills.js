/*
	Skills Component
	<Skills />
*/
 import React from "react";

class Skills extends React.Component {
	render() {
		return (
			<div className="skills">
				<SkillItem data={this.props.data} />
			</div>
		)
	}
}
class SkillItem extends React.Component {
	render() {
		var skill = this.props.data.skills.map(function(e) {
			return (
				<div key={e.id}>
					<h4>{e.title}</h4>
					<img src={e.imageURL} alt={e.imageAlt}/>
					<ul>{e.keywords}</ul>
				</div>
			)
		});
		return (
			<div className="skill-item">
				{skill}
			</div>
		)
	}
}

export default Skills;