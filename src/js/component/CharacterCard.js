import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export class CharacterCard extends React.Component {
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
								<img className="card-img-top" src="" alt="Card image cap" />
								<div className="card-body">
									<h5 className="card-title">{this.props.character.name}</h5>
									<p className="card-text">
										Height:
										{""}
										{this.props.character.height}
										<br />
										Mass: {""}
										{this.props.character.mass}
										<br />
										Hair Color: {""}
										{this.props.character.hair_color}
										<br />
										Skin Color: {""}
										{this.props.character.skin_color}
										<br />
										Eye color: {""}
										{this.props.character.eye_color}
										<br />
										Birth Year: {""}
										{this.props.character.birth_year}
										<br />
										Gender: {""}
										{this.props.character.gender}
										<br />
									</p>
									<Link to={`/details/${this.props.index + 1}`}>
										<a href="#" className="btn btn-primary">
											Learn More!
										</a>
									</Link>
									<button onClick={() => actions.addFavorite(this.props.character.name)}>
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

CharacterCard.propTypes = {
	character: PropTypes.object,
	index: PropTypes.number
};
