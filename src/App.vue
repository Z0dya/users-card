<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import Home from './pages/Home.vue';
import Users from './pages/Users.vue';
import Search from './pages/Search.vue';
import NotFound from './pages/NotFound.vue';

export default {
	name: 'App',
	components: { Home, Users, Search, NotFound },
	data: function () {
		return {};
	},
};
</script>

<style>
html {
	height: 100%;
	font-size: 62.5%;
	font-family: 'Roboto', sans-serif;
}


</style>
