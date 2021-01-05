import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
	}, []);
	return (
		<div className="container">
			<h1>Primer contenedor</h1>
			{store.characters.map((elemento, index) => {
				return <p key={index}>{elemento.name}</p>;
			})}
		</div>
	);
};
