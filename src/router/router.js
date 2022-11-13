import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Users from '../pages/Users.vue';
import Search from '../pages/Search.vue';
import NotFound from '../pages/NotFound.vue';

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
	{
		path: '/404',
		name: '404',
		component: NotFound,
	},
	{
		path: '*',
		redirect: '/404',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
