import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	// переменные
	state: {
		// данные из API
		users: [],
	},
	// получать состояния из state ()ё
	getters: {
		allData(state) {
			return state.users;
		},
	},
	// функции которые изменяют сосотояние (изменяем\ присваиваем)
	mutations: {
		updateUser(state, updatedUser) {
			state.users = updatedUser;
		},
	},
	// асинхронные действия и побочки
	actions: {
		async fetchUsers(context) {
			try {
				const response = await axios.get('https://jsonplaceholder.typicode.com/users');
				const data = response.data;
				// отправили полученные данные в mutations
				context.commit('updateUser', data);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
	// разделение и подключение к 1 дереву
	modules: {},
});
