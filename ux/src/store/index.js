import { observable, action } from 'mobx';
import { usersApi } from '../api';

class UserStore {
	@observable userData = [];
	@action submitData(data) {
		return new Promise((resolve, reject) => {	
			usersApi.submit(data)
			.then(res => {
				console.log('res---- ', res.data);
				resolve(res.data)
			})
		})
	}
	@action getAllData(data) {
		return new Promise((resolve, reject) => {	
		usersApi.getAll()
			.then(res => {
				this.userData = res.data.users;
				resolve(res.data)
			})
		})
	}
}

var store = new UserStore;

export default store;