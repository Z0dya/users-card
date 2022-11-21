import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	// переменные
	state: {
		// данные из API
		users: [],
		fetchUserStatus: 'pending',
	},
	// получать состояния из state ()ё
	getters: {
		userStatus(state) {
			return state.fetchUserStatus;
		},
		allData(state) {
			return state.users;
		},
	},
	// функции которые изменяют сосотояние (изменяем\ присваиваем)
	mutations: {
		changeStatus(state, newStatus) {
			state.fetchUserStatus = newStatus;
		},
		updateUser(state, updatedUser) {
			state.users = updatedUser;
		},
	},
	// асинхронные действия и побочки
	actions: {
		async fetchUsers(context) {
			if (context.getters.userStatus === 'pending') {
				try {
					const response = await axios.get('https://jsonplaceholder.typicode.com/users');
					const data = response.data;
					// отправили полученные данные в mutations
					context.commit('updateUser', data);
					context.commit('changeStatus', 'done');
				} catch (error) {
					alert(error);
					console.log(error);
					context.commit('changeStatus', 'error');
				}
			}
			console.log(context.state.fetchUserStatus);
		},
	},
	// разделение и подключение к 1 дереву
	modules: {},
});
