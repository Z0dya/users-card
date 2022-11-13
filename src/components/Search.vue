<template>
	<div class="container">
		<div class="header">
			<a href="./Home.vue"> <img :src="require('@/assets/img/Logo.svg')" alt="logo" draggable="false" /> </a>
			<div class="header__links">
				<a href="./index.html">Главная</a>
				<a href="./Users.vue">Пользователи</a>
				<a href="./Search.vue" class="links__main">Поиск</a>
			</div>
		</div>
		<div class="main">
			<div class="search">
				<div class="search__icons">
					<div class="left-side">
						<img :src="require('@/assets/img/cancel.svg')" alt="cancel" class="cancelIcon" />
						<input type="text" value="Пет" class="search__text" />
					</div>
					<img :src="require('@/assets/img/search.svg')" alt="search" class="searchIcon" />
				</div>
				<div class="search__results">
					<div class="results__lists">
						<p>Петр Иванов</p>
						<a href="#">some.site.ru</a>
					</div>
					<div class="results__lists">
						<p>Иван Петров</p>
						<a href="#">some.site.ru</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
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

/*? HEADER */

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header__links {
	font-size: 2rem;
	margin-right: 5rem;
}

.links__main {
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

/*? Main */

.main {
	margin: 10rem 0;
	height: 100%;
}

.search {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.search__icons {
	display: flex;
	flex-direction: row;
	width: 85.9rem;
	height: 8rem;
	background-color: #d9d9d9;
	justify-content: space-between;
	box-shadow: 10px 10px 9px -2px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	padding: 0 2rem;
}

.left-side {
	display: flex;
	align-items: center;
}

.search__icons img {
	cursor: pointer;
}

.search__text {
	margin-left: 2rem;
	font-size: 4rem;
	background-color: #d9d9d9;
	border: none;
	width: 73rem;
}

/* Search result */

.search__results {
	margin: 10rem 0;
	background-color: #d9d9d9;
	width: 104rem;
	height: fit-content;
	border-radius: 1rem;
	box-shadow: 13px 12px 15px -2px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	border-radius: 20px;
}

.results__lists {
	margin: 2rem 2rem;
	background-color: #445964;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 2rem;
	padding: 0 2rem;
}

.results__lists p {
	font-size: 2.6rem;
	font-weight: 500;
	color: white;
}

.results__lists a {
	font-size: 2.6rem;
	font-weight: 500;
	color: #d3f1ff;
	text-decoration: none;
}
</style>
