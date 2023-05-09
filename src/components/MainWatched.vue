<template lang="html">
	<!-- /* main-watched start */ -->
	<div class="watched-products" v-if="items.length > 0">
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
		<ul class="watched-products__list">
			<template v-for="(item, index) in items" :key="index">
				<li
					class="watched-products__item"
					v-if="index >= firstIndex && index <= lastIndex"
				>
					<MainWatchedItem
						:itemW="item.name"
						:itemAb="item.about"
						:icoW="item.img"
						:itemAlt="item.alt"
					/>
				</li>
			</template>
		</ul>
	</div>
	<!-- /* main-watched end */ -->
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import MainWatchedItem from "./MainWatchedItem.vue";
export default {
	name: "main-watched",
	components: {
		MainWatchedItem,
	},
	setup() {
		const store = useStore();

		const firstIndex = ref(0),
			lastIndex = ref(3),
			stepIndex = ref(4);

		const items = computed(() => store.getters.history);

		const currentPage = computed(
				() => firstIndex.value / stepIndex.value + 1
			),
			maxPage = computed(() =>
				Math.ceil(items.value.length / stepIndex.value)
			);

		const forward = () => {
				if (currentPage.value === maxPage.value) return;
				firstIndex.value += stepIndex.value;
				lastIndex.value += stepIndex.value;
			},
			backward = () => {
				if (currentPage.value === 1) return;

				firstIndex.value -= stepIndex.value;
				lastIndex.value -= stepIndex.value;
			};
		return {
			items,
			firstIndex,
			lastIndex,
			stepIndex,
			currentPage,
			maxPage,
			forward,
			backward,
		};
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
		gap: 7px;
	}

	&__item {
		list-style-type: none;
	}
}

.nav {
	display: flex;
	flex-wrap: wrap;
	user-select: none;
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
		user-select: none;
	}

	&__div {
		margin-left: 8px;
		margin-right: 6px;
	}
}

@media screen and (max-width: 1300px) {
	.watched-products {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 800px;
		width: 100%;
	}
	.watched-products__list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}

	.watched-products__top-container {
		width: 100%;
	}
}

@media screen and (max-width: 830px) {
	.watched-products__top-container {
		padding-left: 10px;
		padding-right: 10px;
	}
}

@media screen and (max-width: 640px) {
	.watched-products__top-container {
		justify-content: center;
		gap: 10px;
	}
	.watched-products__list {
		display: flex;
		flex-direction: column;
	}
}
</style>
