<template>
	<div class="container">
		<div class="main">
			<div class="search">
				<div class="search__icons">
					<div class="left-side">
						<img :src="require('@/assets/img/cancel.svg')" alt="cancel" class="cancelIcon" @click="clearSearch()" />
						<input type="text" placeholder="Введите имя" class="search__text" v-model="searchValue" @input="searchTrigger()" />
					</div>
					<img :src="require('@/assets/img/search.svg')" alt="search" class="searchIcon" />
				</div>
				<div :class="[{ display: result }, 'search__results']">
					<search-component
						v-for="usersInfo in searchedUser"
						:key="usersInfo.id"
						:id="usersInfo.id"
						:name="usersInfo.name"
						:website="usersInfo.website"
						:subSearch="usersInfo.subSearch"
						:stringArray="usersInfo.stringArray"
					></search-component>
				</div>
				<div v-bind:class="[{ display: notFound }, 'noResults']">
					<h1>Не найдено 😞</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '../components/Header.vue';
import SearchComponent from '../components/SearchComponent.vue';
import { mapGetters } from 'vuex';

export default {
	components: {
		Header,
		SearchComponent,
	},
	data() {
		return {
			searchValue: '',
			searchedUser: [],
			notFound: false,
			result: false,
		};
	},
	computed: mapGetters(['allData']),
	mounted() {
		this.$store.dispatch('fetchUsers');
	},
	methods: {
		searchTrigger() {
			setTimeout(() => {
				this.searchResult();
			}, 300);
		},
		// функция поиска
		searchResult() {
			//обнуляем массив при каждом поиске
			this.searchedUser = [];
			//перебираем имена из api
			for (const user of this.allData) {
				// записываем регулярное выражение (игнорировать регистр написанного слова) в переменную regValue
				const regValue = new RegExp(this.searchValue, 'i');
				// индекс той буквы которая 1 оказалась найдена
				const stringArray = user.name.split(regValue);
				// проверка, если -1  - не найдено, иначе найдено и вернёт индекс
				if (stringArray.length !== 1) {
					// записываем в массив объект с
					// id,
					// именем,
					// сайтом,
					//  написанным словом,
					//  первой буквой написанного слова
					this.searchedUser.push({
						id: user.id,
						name: user.name,
						website: user.website,
						subSearch: this.searchValue,
						stringArray: stringArray,
					});
				}
			}
			// выводим найденных юзеров
			if (this.searchedUser.length) {
				this.result = true;
				this.notFound = false;
			} else {
				// иначе отображаем "не найдено"
				this.notFound = true;
			}
			// если пользователь ничего не ввел то выводим "ничего не найдено"
			if (this.searchValue == '') {
				{
					this.result = false;
					this.notFound = false;
				}
			}
		},
		//функция очистки (cancel)
		clearSearch() {
			// стираем value input'a и закрываем найденные до этого значения
			this.searchValue = '';
			this.notFound = false;
			this.result = false;
		},
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

/*? Main */

.main {
	margin: 10rem 0;
	height: 100%;
	display: flex;
	justify-content: center;
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

.searchIcon {
	opacity: 0.7;
}

.cancelIcon {
	opacity: 0.7;
	transition: all 0.2s ease;
	cursor: pointer;
}

.cancelIcon:hover {
	opacity: 1;
}

.left-side {
	display: flex;
	align-items: center;
}

.search__results {
	display: none;
	margin: 5rem 0;
	background-color: #d9d9d9;
	width: 104rem;
	height: fit-content;
	border-radius: 1rem;
	box-shadow: 13px 12px 15px -2px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	border-radius: 20px;
}

.noResults {
	display: none;
	margin: 5rem;
	font-size: 3rem;
	color: #263138;
}

.display {
	display: block;
}

.search__text {
	margin-left: 2rem;
	font-size: 4rem;
	background-color: #d9d9d9;
	border: none;
	width: 73rem;
}
</style>
