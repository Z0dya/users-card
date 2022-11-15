<template>
	<div class="results__lists">
		<!-- v-html нужен чтобы в colorName span читался как тэг а не как строка -->
		<p v-html="colorName"></p>
		<a :href="'https://' + website" target="_blank"> {{ website }}</a>
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		name: String,
		website: String,
		subSearch: String,
		stringArray: Array,
	},
	data: function () {
		return {};
	},
	computed: {
		colorName() {
			['Kur Weissnat'];
			// пустой массив в которой записываем имена
			const coloredNameArray = [];
			// перебор по очереди разделенные строки, индекс в массиве
			this.stringArray.forEach((str, index) => {
				// записываем в массив строчку
				coloredNameArray.push(str);
				// если индекс не последний то добавляем после 1 строчки span (желтый цвет)
				// внутрь span'a записываем введенное пользователем слово в input
				if (index !== this.stringArray.length - 1) {
					coloredNameArray.push(`<span class="yellow">${this.subSearch}</span>`);
				}
			});
			// делаем из массива 1 строчку
			return coloredNameArray.join('');
		},
	},
};
</script>

<style>
html {
	height: 100%;
	font-size: 62.5%;
	font-family: 'Roboto', sans-serif;
}

.yellow {
	background-color: rgba(255, 255, 0, 0.494);
}

.container {
	margin: 5rem 25rem;
}

/* Search result */

.results__lists {
	display: flex;
	margin: 2rem 2rem;
	background-color: #445964;
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

.results__lists a:hover {
	border-bottom: solid 0.1rem #d3f1ff;
}
</style>
