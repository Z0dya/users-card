<template>
	<div class="container">
		<Header></Header>
		<div class="main">
			<div class="main__table" v-if="allData">
				<user-component
					v-for="(user, index) in allData"
					:key="user.id"
					:index="index"
					:length="allData.length"
					:id="user.id"
					:name="user.name"
					:username="user.username"
					:email="user.email"
					:city="user.address?.city"
					:website="user.website"
					:company="user.company?.name"
				></user-component>
				<!-- adress?.city - если существует то ищет city иначе undefined -->
			</div>
			<div v-else>
				<h1>Пожалуйста, подождите</h1>
			</div>
		</div>
	</div>
</template>

<script>
import UserComponent from '@/components/UserComponent.vue';
import Header from '../components/Header.vue';
import { mapGetters } from 'vuex';

export default {
	data() {
		return {};
	},
	//регистрируем компоненты
	components: {
		Header,
		UserComponent,
	},
	computed: mapGetters(['allData']),
	mounted() {
		this.$store.dispatch('fetchUsers');
	},
};
</script>

<style scoped>

html {
	height: 100%;
	font-size: 62.5%;
	font-family: 'Roboto', sans-serif;
}

.container {
	margin: 5rem 25rem;
	height: calc(125vh);
}
/*? Main */

.main {
	margin: 7rem;
	width: 124.1rem;
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
h1 {
	color: #1f2020;
}
/* ------------ */
</style>
