<template>
	<div class="header">
		<router-link to="/home" exact>
			<img :src="require('@/assets/img/Logo.svg')" alt="logo" draggable="false" />
		</router-link>
		<div class="header__links">
			<!-- router-link - определяет на какой странице находится пользователь -->
			<!-- зарезервированный класс router-link-active добавляет стили -->
			<router-link to="/" exact> Главная </router-link>
			<router-link to="/Users"> Пользователи </router-link>
			<router-link to="/Search"> Поиск </router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
/*? HEADER */

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5rem 25rem;
}

.header__links {
	font-size: 2rem;
	margin-right: 5rem;
}

.router-link-active {
	display: inline;
	border-bottom: solid 3px #263138;
}

.header a {
	color: #445964;
	margin: 0 3rem;
	text-decoration: none;
}

.header__links a:hover {
	display: inline;
	border-bottom: solid 3px #263138;
	transition: all 0.1s;
}
</style>
