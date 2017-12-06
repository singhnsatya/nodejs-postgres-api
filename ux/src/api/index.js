import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3030";

export const usersApi = {
	submit: (data) => {
		let endpoint = '/users';
		return axios.post(endpoint, data).then(res => {
			return res;
		})
	},
	getAll: () => {
		let endpoint = '/users';
		return axios.get(endpoint)
		.then(res => {
			console.log(res)
			return res;
		})
	},
}