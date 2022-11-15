<template>
	<div>
		<div class="table__lists">
			<p>{{ name }}</p>
			<img :src="require('@/assets/img/arrowClosed.svg')" alt="arrow" class="arrow" ref="arrow" @click="openMenu()" />
		</div>
		<!-- <hr width="100%" color="white" /> -->

		<div class="table__description-block" ref="open">
			<div class="table__description">
				<p>
					Name: <span>{{ name }}</span>
				</p>
				<p>
					Username: <span>{{ username }}</span>
				</p>
				<p>
					City: <span>{{ city }}</span>
				</p>
			</div>
			<img :src="require('@/assets/img/icon.svg')" alt="arrow" class="logoIcon" />
			<div class="table__description">
				<p>
					Email:
					<span>
						<a href="mailto:">{{ email }}</a>
					</span>
				</p>
				<p>
					Website:
					<span>
						<a :href="'https://' + website" target="_blank"> {{ website }}</a>
					</span>
				</p>
				<p>
					Company: <span>{{ company }} </span>
				</p>
			</div>
		</div>
		<hr width="100%" color="white" class="hr" ref="hr" />
	</div>
</template>

<script>
export default {
	props: {
		id: Number,
		index: Number,
		length: Number,
		name: String,
		username: String,
		email: String,
		city: String,
		website: String,
		company: String,
	},
	data: function () {
		return {};
	},
	methods: {
		openMenu() {
			this.$refs.arrow.classList.toggle('arrowAnim');
			this.$refs.open.classList.toggle('open');
			//если не последний div то отрисовываем hr
			if (this.index !== this.length - 1) {
				this.$refs.hr.classList.toggle('hr-view');
			}
		},
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
	justify-content: center;
	/* gap: 4rem; */
	background-color: #263138;
	width: 120rem;
	height: fit-content;
	margin: 2rem;
	border-radius: 1rem;
}

.logoIcon {
	width: 15rem;
	height: 15rem;
	display: flex;
	align-self: center;
	justify-content: center;
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
	height: 15rem;
	color: white;
	font-size: 2rem;
	font-weight: 400;
	margin: 2rem;
	padding-left: 2rem;
	border-radius: 1rem;
}
span {
	color: #c3eafc;
}

a {
	text-decoration: none;
	color: #c3eafc;
}
a:hover {
	border-bottom: solid 0.1rem #c3eafc;
}
</style>
