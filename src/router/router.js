import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Users from '../components/Users.vue';
import Search from '../components/Search.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/users',
		name: 'users',
		component: Users,
	},
	{
		path: '/search',
		name: 'search',
		component: Search,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
