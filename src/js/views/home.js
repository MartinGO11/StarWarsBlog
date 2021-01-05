import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetsCard";
import { StarshipCard } from "../component/StarshipsCard";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => {
					return (
						<>
							<div className="text-center container mt-5">
								<div className="text-primary">
									<h2>Character</h2>
								</div>
								<div className="d-flex justify-content-start overflow-auto ">
									{store.characters.map((item, index) => {
										return <CharacterCard key={index} character={item} index={index} />;
									})}
								</div>
								<div className="text-primary">
									<h2>Planets</h2>
								</div>
								<div className="d-flex justify-content-between overflow-auto">
									{store.planets.map((item, index) => {
										return <PlanetCard key={index} planet={item} index={index} />;
									})}
								</div>
								<div className="text-primary">
									<h2>Starships</h2>
								</div>
								<div className="d-flex justify-content-between overflow-auto">
									{store.starships.map((item, index) => {
										return <StarshipCard key={index} starship={item} index={index} />;
									})}
								</div>
							</div>
						</>
					);
				}}
			</Context.Consumer>
		);
	}
}
