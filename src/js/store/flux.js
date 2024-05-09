const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then((response) => {
						return response.json()
					})
					.then((data) => {
						setStore({ characters: data.results })
					})
					.catch((error) => { error })
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then((response) => {
						return response.json()
					})
					.then((data) => {
						setStore({ planets: data.results })
					})
					.catch((error) => { error })
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/starships")
					.then((response) => {
						return response.json()
					})
					.then((data) => {
						setStore({ vehicles: data.results })
					})
					.catch((error) => { error })
			},
			getFavorites: (name) => {
				const store = getStore();
				if (!store.favorites.includes(name)) {
					setStore({ favorites: [...store.favorites, name] });
				} else {
					console.log("Este favorito ya ha sido agregado.");
				}

			},
			removeFavorite: (name) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(favorite => favorite !== name);
				setStore({ favorites: updatedFavorites });
			}
		}
	};
};

export default getState;
