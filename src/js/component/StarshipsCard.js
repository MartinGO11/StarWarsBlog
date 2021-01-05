import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class StarshipCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => {
					return (
						<>
							<div className="card ml-3 mr-3" style={{ minWidth: "18rem" }}>
								<div className="card-body">
									<h5 className="card-title">{this.props.starship.name}</h5>
									<p className="card-text">
										Model: {""}
										{this.props.starship.model}
										<br />
										Manufacturer: {""}
										{this.props.starship.manufacturer}
										<br />
										Cost: {""}
										{this.props.starship.cost_in_credit}
										<br />
										Max Speed: {""}
										{this.props.starship.max_atmosphering_speed}
										<br />
										Consumables: {""}
										{this.props.starship.consumables}
										<br />
										Starship class: {""}
										{this.props.starship.starship_class}
										<br />
									</p>
									<Link to={`/details/${this.props.index + 1}`}>
										<a href="#" className="btn btn-primary">
											Details
										</a>
									</Link>
									<button onClick={() => actions.addFavorite(this.props.starship.name)}>
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						</>
					);
				}}
			</Context.Consumer>
		);
	}
}

//validation

StarshipCard.propTypes = {
	starship: PropTypes.object,
	index: PropTypes.number
};
