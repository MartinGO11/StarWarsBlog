const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},
		actions: {
			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							characters: data.results
						});
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
