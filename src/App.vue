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
	font-family: 'OpenSans-Regular';
	src: url('@/assets/fonts/Roboto-Black.ttf');
	src: url('@/assets/fonts/Roboto-Bold.ttf');
	src: url('@/assets/fonts/Roboto-Light.ttf');
	src: url('@/assets/fonts/Roboto-Medium.ttf');
	src: url('@/assets/fonts/Roboto-Regular.ttf');
	src: url('@/assets/fonts/Roboto-Thin.ttf');
	height: 100%;
	font-size: 62.5%;
	font-family: 'Roboto', sans-serif;
}
</style>
