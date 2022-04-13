import { stringify } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "https://www.swapi.tech/api",
			endPoints: ["people", "planets","vehicles"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		},
		actions: {
			fetchItems: async () => {
				let store = getStore();
				if(!store.people.length){
					for (let endPoint of store.endPoints){
						try{
							let response = await fetch(`${store.URL_BASE}/${endPoint}`)
							if(response.ok){
								let data = await response.json()
								data.results.map( async (item) => {
									let newresponse = await fetch(`${store.URL_BASE}/${endPoint}/${item.uid}`);
									let newresult = await newresponse.json();
									setStore({
										...store,
										[endPoint]:[...store[endPoint],newresult.result]
									});
									localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))
								})
							}
						}catch(error){
							console.log(error)
						}

					}
				}
			},
			// ADD FAVORITES
			addFavorites: (id) => {
				const store = getStore();
				let inlist = store.favorites.find((item) => {
				  return item._id == id;
				});
				if (!inlist) {
				  for (let endPoint of store.endPoints) {
					let favorite;
					favorite = store[endPoint].find((item) => {
					  return item._id == id;
					});
					if (favorite) {
					  setStore({
						...store,
						favorites: [...store.favorites, favorite],
						
					  });
					  break;
					}
					
				  }
				} else {
				  let addFavorite = store.favorites.filter((item) => {
					return item._id != id;
				  });
				  setStore({
					...store,
					favorites: addFavorite,
				  });
				}
			  },
			  // DELETE FAVORITES
			//   deleteFavorites: (id) => {
			// 	let delitem;
			// 	getStore().favorites.forEach(item => {
			// 		if (item.id == id) {
			// 			delitem = item._id;
			// 		}
			// 	});
			// },
		}
	};
};
export default getState;