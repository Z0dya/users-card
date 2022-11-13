<template>
	<div class="container">
		<div class="header">
			<a href="./index.html"> <img :src="require('@/assets/img/Logo.svg')" alt="logo" draggable="false" /> </a>
			<div class="header__links">
				<a href="./index.html">Главная</a>
				<a href="./users.html" class="links__main">Пользователи</a>
				<a href="./search.html">Поиск</a>
			</div>
		</div>
		<div class="main">
			<div class="main__table">
				<div class="table__lists">
					<p>Илья Петров</p>
					<img :src="require('@/assets/img/arrowClosed.svg')" alt="arrow" class="arrow" />
				</div>
				<hr width="100%" color="white" />

				<div class="table__lists">
					<p>Александр Смирнов</p>
					<img :src="require('@/assets/img/arrowClosed.svg')" alt="arrow" class="arrow" />
				</div>
				<hr width="100%" color="white" />

				<div class="table__lists">
					<p>Петр Иванов</p>
					<img :src="require('@/assets/img/arrowClosed.svg')" alt="arrow" class="arrow" />
				</div>

				<hr width="100%" color="white" class="hr" />
				<div class="table__description-block">
					<div class="table__description">
						<p>Name: Петр Иванов</p>
						<p>Username: Petr.Ivanov</p>
						<p>Email: Petr.Ivanov</p>
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
	margin: 7rem;
	width: 124.1rem;
	height: fit-content;
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

.table__lists,
.table__lists-open {
	display: flex;
	justify-content: space-between;
	margin: 0 4rem;
	font-size: 2.5rem;
	color: white;
	font-weight: 400;
	align-items: center;
}

.arrow,
.arrow-open {
	cursor: pointer;
	width: 5rem;
	height: 3rem;
	transition: all 0.3s ease;
}

.arrowAnim {
	transition: all 0.3s ease;
	-webkit-transform: rotate(-90deg);
	transform: rotate(-90deg);
}

/* arrow opened */

.table__lists-open {
	display: none !important;
}

.table__description-block {
	display: none;
	flex-direction: column;
	background-color: #263138;
	width: 120rem;
	height: fit-content;
	margin: 2rem;
	border-radius: 1rem;
}

.open {
	display: flex;
}

.hr {
	display: none;
}

.hr-view {
	display: block;
}

.table__description {
	margin: 0.5rem 2rem;
	background-color: #445964;
	width: 45rem;
	height: 20rem;
	color: white;
	font-size: 2rem;
	font-weight: 500;
	margin: 2rem;
	padding-left: 2rem;
	border-radius: 1rem;
}

/* ------------ */
</style>
