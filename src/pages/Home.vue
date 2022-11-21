<template>
	<div class="container">
		<div class="main">
			<div class="leftSide">
				<p class="left__name">Лазуткин Влад</p>
				<h1 class="left__title">
					Практическое задание
					<span class="title-vue">Vue Js</span>
				</h1>
				<router-link to="/Users" class="btnLink"> <button class="left__btnWork">Перейти к работе</button> </router-link>
				<p class="version">Версия веб-приложения: {{ appVersion }}</p>
				<div class="left__description">
					<p>Исходники веб-приложения вы можете найти тут</p>
					<div class="icons">
						<a href="https://github.com/Z0dya/users-card" target="_blank">
							<img :src="require('@/assets/img/Git.svg')" class="github" alt="gitLogo" draggable="false" />
						</a>
						<a href="https://git.informunity.ru/study/lazutkin-users-card" target="_blank">
							<img :src="require('@/assets/img/gitlab.svg')" class="gitlab" alt="gitlabLogo" draggable="false" />
						</a>
					</div>
				</div>
			</div>
			<!-- require - он не знает путь во время компиляции, поэтому нужно использовать require -->
			<div class="rightSide">
				<img :src="require('@/assets/img/Home_art.svg')" alt="bigArt" draggable="false" />
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import { version } from '../../package';

export default {
	name: 'App',
	components: { Header },
	data: function () {
		return {
			appVersion: version,
		};
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
}

/*? MAIN */

.main {
	margin: 10rem 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

.leftSide {
	display: flex;
	flex-direction: column;
}

.version {
	color: #43545f;
	margin: 0;
}

.left__name {
	font-weight: 300;
	font-size: 2.4rem;
	color: #263138;
	margin: 1rem 0;
}

.left__title {
	font-size: 7.2rem;
	color: #43545f;
	margin: 0;
}

.title-vue {
	color: #41b883;
}

.left__btnWork {
	border-radius: 3rem;
	background-color: #263138;
	color: #ffffff;
	height: 6.5rem;
	width: 31rem;
	border: none;
	font-size: 2.4rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.5s;
}

.btnLink {
	width: fit-content;
	height: fit-content;
	margin: 10rem 0;
}

.aBtn {
	width: 31rem;
}

.left__btnWork:hover {
	transition: all 0.5s;
	background-color: #445964;
}

.left__description {
	font-size: 2.4rem;
	font-weight: 500;
	color: #445964;
	width: 33rem;
}

.icons {
	display: flex;
	justify-content: center;
	margin-right: 6rem;
}

.github:hover {
	animation: rotate 0.5s ease-in-out;
}

.gitlab:hover {
	animation: shake 0.5s ease-in-out;
}

.icons a {
	margin: 0 3rem;
}

@keyframes shake {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}

	33% {
		-webkit-transform: rotate(-0.1turn);
		transform: rotate(-0.1turn);
	}

	66% {
		-webkit-transform: rotate(0.1turn);
		transform: rotate(0.1turn);
	}

	100% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
}

@keyframes rotate {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}

	100% {
		-webkit-transform: rotate(-1turn);
		transform: rotate(-1turn);
	}
}
</style>
