<template>
	<div >
		<Header v-if="$route.name !== '404'"></Header>
		<transition mode="out-in">
			<router-view> </router-view>
		</transition>
	</div>
</template>

<script>
import Home from './pages/Home.vue';
import Users from './pages/Users.vue';
import Search from './pages/Search.vue';
import NotFound from './pages/NotFound.vue';
import Header from './components/Header.vue';

export default {
	name: 'App',
	components: { Home, Users, Search, NotFound, Header },
};
</script>

<style>
html {
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

.v-enter-active {
	opacity: 0;
}
.v-enter-to {
	opacity: 1;
	transition: all 0.3s ease-out;
}

.v-leave-from {
	opacity: 1;
}

.v-leave-to {
	opacity: 0;
	transition: all 0.3s ease-out;
}
</style>
