import { stringify } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL_BASE: "https://3000-4geeksacade-flaskresthe-n5es095fwfx.ws-us44.gitpod.io",
			endPoints: ["people", "planets"],
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			token: localStorage.getItem("token") || ""
		},
		actions: {
			fetchItems: async () => {
				const store = getStore();
				if (!store.people.length && !store.planets.length) {
					try {
						let response = await fetch(`${store.URL_BASE}/characters`)
						let data = await response.json()
						let response2 = await fetch(`${store.URL_BASE}/planets`)
						let data2 = await response2.json()
						if (response.ok && response2.ok) {
							localStorage.setItem("people", JSON.stringify(data))
							localStorage.setItem("planets", JSON.stringify(data2))
						}
						else {
							window.alert("Error, Please enter valid values")
						}
					}
					catch (error) {
						console.log("Error try again later!!", error)
					}
				}
			},
			getFavorites: async () => {
				let store = getStore();
				try {
					let response = await fetch(`${store.URL_BASE}/users/favorites`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						}
					})
					if (response.ok) {
						let data = await response.json()
						setStore({
							...store,
							favorites: data
						});
						localStorage.setItem("favorites", JSON.stringify(store.favorites))
					}
				} catch (error) {
					console.log("Error try again later!!", error)
				}
			},
			addFavorites: async (id, name, nature) => {
				let store = getStore();
				let actions = getActions();
				let body = {
					"nature_id": id,
					"name": name
				}
				try {
					let response = await fetch(`${store.URL_BASE}/favorite/${nature}/${id}`, {
						method: 'POST',
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						}
					})
					if (response.ok) {
						actions.getFavorites()
					}
					else{
						window.alert("This Favorite already exists in your list, enter a different one!")
					}
				} catch (error) {
					console.log("Error try again later!!", error)
				}
			},
			deleteFavorite: async (nature_id, nature) => {
				let store = getStore()
				let actions = getActions()
				let body = {
					"nature_id": nature_id,
					"nature": nature
				}
				try {
					let response = await fetch(`${store.URL_BASE}/favorite/${nature}/${nature_id}`, {
						method: 'DELETE',
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
					})
					if (response.ok) {
						actions.getFavorites()
					}
				}catch(error){
					console.log("Error try again later!!", error)
				}
				
			},
			handleLogin: async (login) => {
				let store = getStore()
				let actions = getActions()
				const response = await fetch(`${store.URL_BASE}/login`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(login)  
				})
				let data = await response.json()
				if (response.ok) {
					setStore({
						...store,
						token: data.token
					})
					localStorage.setItem("token", data.token)
					actions.getFavorites()
				} else {
					window.alert("The User is not registered, you must register to login!!")
				}
			},
			handleLogout: () => {
				let store = getStore()
				setStore({
					...store,
					token: ""
				})
				localStorage.removeItem("token")
				localStorage.removeItem("favorites")
				window.alert('Session ended successfully')
			}
		}
	}
};
export default getState;