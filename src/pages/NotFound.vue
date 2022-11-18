<template>
	<div class="container">
		<div class="main">
			<img :src="require('@/assets/img/404Logo.svg')" alt="404" draggable="false" />
			<h1>Страница не найдена</h1>
			<router-link to="/"> <button class="Btn404">Вернутся</button></router-link>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
	margin: 5rem 25rem;
}

.main {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

h1 {
	color: #445964;
	font-weight: 300;
	font-size: 5.5rem;
}

.Btn404 {
	border-radius: 3rem;
	background-color: #263138;
	color: #ffffff;
	height: 7rem;
	width: 35rem;
	border: none;
	font-size: 3.4rem;
	font-weight: 300;
	cursor: pointer;
	transition: all 0.5s;
}

.Btn404:hover {
	transition: all 0.5s;
	background-color: #445964;
}
</style>
