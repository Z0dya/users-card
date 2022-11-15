<template>
	<div class="results__lists">
		<!-- 1 часть слова + написанное слово пользователем желтым цветом + 2 часть слова -->
		<p>
			{{ colorName.firstHalf }}<span class="yellow">{{ subSearch }}</span
			>{{ colorName.secondHalf }}
		</p>
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
		findIndex: Number,
	},
	data: function () {
		return {};
	},
	computed: {
		// функция раздробления слова на части
		colorName() {
			// 1 часть слова (до написанного слова пользователя)
			const firstHalf = this.name.substring(0, this.findIndex);
			// 2 часть слова после написанного слова пользователя
			const secondHalf = this.name.substring(this.findIndex + this.subSearch.length);
			return { firstHalf, secondHalf };
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
