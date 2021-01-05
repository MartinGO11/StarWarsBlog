const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []
		},
		actions: {
			deleteFavorite: index => {
				const newStore = getStore();
				var newFavorites = newStore.favorites.filter((item, ind) => index !== ind);
				setStore({ favorites: newFavorites });
			},

			addFavorite: name => {
				const newStore = getStore();
				newStore.favorites.push(name);
				setStore({ newStore });
			},

			getCharacters: () => {
				fetch("https://swapi.dev/api/people/")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							characters: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							planets: data.results
						});
					})
					.catch(error => console.log(error));
			},
			getStarships: () => {
				fetch("https://swapi.dev/api/starships/")
					.then(respuesta => respuesta.json())
					.then(data => {
						setStore({
							starships: data.results
						});
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
