<template>
	<div>
		<div class="table__lists">
			<p>{{ name }}</p>
			<img :src="require('@/assets/img/arrowClosed.svg')" alt="arrow" class="arrow" ref="arrows" @click="openMenu()" />
		</div>
		<hr width="100%" color="white" />
		<hr width="100%" color="white" class="hr" ref="hr" />
		<div class="table__description-block" ref="open">
			<div class="table__description">
				<p>Name: {{ name }}</p>
				<p>Username: {{ email }}</p>
				<p>Email: {{ email }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		name: String,
		email: String,
	},
	data: function () {
		return {};
	},
};
</script>

<style scoped>
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

</style>
