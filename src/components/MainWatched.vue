<template lang="html">
	<!-- /* main-watched start */ -->
	<div class="watched-products">
		<div class="watched-products__top-container">
			<div class="watched-products__header">Просмотренные товары</div>
			<nav class="nav">
				<a
					href="#!"
					class="pages__back nav__button"
					@click="backward()"
					:class="{ nav__button_disabled: currentPage == 1 }"
				>
					<img
						src="../assets/images/svg/pages-back.svg"
						alt="pages-back.ico"
					/>
				</a>
				<div class="page">
					<span class="page__active">{{ currentPage }}</span>
					<span class="page__div">/</span>
					<span class="page__max">{{ maxPage }}</span>
				</div>
				<a
					href="#!"
					class="pages__forw nav__button"
					:class="{ nav__button_disabled: currentPage == maxPage }"
					@click="forward()"
				>
					<img
						src="../assets/images/svg/pages-forw.svg"
						alt="pages-forw.ico"
					/>
				</a>
			</nav>
		</div>
		<div class="watched-products__list">
			<li
				v-for="(item, index) in items"
				:key="index"
				class="watched-products__item"
			>
				<MainWatchedItem
					v-if="index >= firstIndex && index <= lastIndex"
					:itemW="item.name"
					:itemAb="item.about"
					:icoW="item.img"
					:itemAlt="item.alt"
				/>
			</li>
		</div>
	</div>
	<!-- /* main-watched end */ -->
</template>

<script>
import MainWatchedItem from "./MainWatchedItem.vue";
export default {
	name: "main-watched",
	components: {
		MainWatchedItem,
	},
	computed: {
		items() {
			return this.$store.getters.history;
		},
		currentPage() {
			return this.firstIndex / this.stepIndex + 1;
		},
		maxPage() {
			return Math.ceil(this.items.length / this.stepIndex);
		},
	},
	data() {
		return {
			firstIndex: 0,
			lastIndex: 3,
			stepIndex: 4,
		};
	},
	methods: {
		forward() {
			if (this.currentPage === this.maxPage) return;
			this.firstIndex += this.stepIndex;
			this.lastIndex += this.stepIndex;
		},
		backward() {
			if (this.currentPage === 1) return;

			this.firstIndex -= this.stepIndex;
			this.lastIndex -= this.stepIndex;
		},
	},
};
</script>

<style lang="scss" scoped>
/* main-watched start */
.watched-products {
	margin-bottom: 50px;

	&__top-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 60px;
	}

	&__header {
		font-weight: 500;
		font-size: 30px;
		line-height: 120%;
		color: #1f2432;
	}

	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	&__item {
		list-style-type: none;
	}
}

.nav {
	display: flex;
	flex-wrap: wrap;

	&__button {
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
		&_disabled {
			opacity: 0.5;
			cursor: auto;
			&:hover {
				opacity: 0.5;
			}
		}
	}
}

.page {
	display: flex;
	flex-wrap: wrap;
	align-self: center;
	align-items: flex-end;
	margin-left: 20px;
	margin-right: 15px;

	&__active {
		font-weight: 500;
		font-size: 24px;
		color: #212121;
	}

	&__max,
	&__div {
		font-weight: 400;
		font-size: 18px;
		color: #797b86;
		margin-bottom: 3px;
	}

	&__div {
		margin-left: 8px;
		margin-right: 6px;
	}
}
</style>
