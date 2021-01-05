import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class PlanetCard extends React.Component {
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
									<h5 className="card-title">{this.props.planet.name}</h5>
									<p className="card-text">
										Rotation: {""}
										{this.props.planet.rotation_period}
										<br />
										Orbital: {""}
										{this.props.planet.orbital_period}
										<br />
										Diametro: {""}
										{this.props.planet.diameter}
										<br />
										Climate: {""}
										{this.props.planet.climate}
										<br />
										Gravity: {""}
										{this.props.planet.gravity}
										<br />
										Terrain: {""}
										{this.props.planet.terrain}
										<br />
										Surface water: {""}
										{this.props.planet.surface_water}
										<br />
										Population: {""}
										{this.props.planet.population}
										<br />
									</p>
									<Link to={`/details/${this.props.index + 1}`}>
										<a href="#" className="btn btn-primary">
											Details
										</a>
									</Link>
									<button onClick={() => actions.addFavorite(this.props.planet.name)}>
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

PlanetCard.propTypes = {
	planet: PropTypes.object,
	index: PropTypes.number
};
