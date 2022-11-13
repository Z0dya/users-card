<template>
	<div class="container">
		<Header></Header>
		<div class="main">
			<div class="main__table">
				<user-component v-for="user in userList" :key="user.id" :id="user.id" :name="user.name" :email="user.email"></user-component>
			</div>
		</div>
	</div>
</template>

<script>
import UserComponent from '@/components/UserComponent.vue';
import Header from '../components/Header.vue';

export default {
	data() {
		return {
			userList: [
				{ id: 1, name: 'Илья Петров', email: 'Ilya.Petrov' },
				{ id: 2, name: 'Александр Смирнов', email: 'Alec.Smirnov' },
				{ id: 3, name: 'Пётр Иванов', email: 'Petr.Ivanov' },
			],
		};
	},
	components: {
		Header,
		UserComponent,
	},
	methods: {
		openMenu() {
			this.$refs.open.classList.toggle('open');
			this.$refs.hr.classList.toggle('hr-view');
			this.$refs.arrows.classList.toggle('arrowAnim');
		},
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Roboto:wght@100;300;400;500;900&display=swap');

html {
	height: 100%;
	font-size: 62.5%;
	font-family: 'Roboto', sans-serif;
}

.container {
	margin: 5rem 25rem;
}
/*? Main */

.main {
	margin: 7rem;
	width: 124.1rem;
	height: fit-content;
	background-color: #324c5a;
	display: flex;
	border-radius: 1rem;
	border: none;
}

.main__table {
	width: 100%;
	box-shadow: 15px 17px 20px 10px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
}


/* ------------ */
</style>
