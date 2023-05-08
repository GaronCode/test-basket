<template lang="html">
	<div class="main-basket">
		<div class="main-basket__header">
			<div class="main-basket__header-container">
				<h1 class="main-basket__header-text">Ваша корзина</h1>
				<div class="main-basket__header-sub" v-if="quant.count > 0">
					{{ quant.count }} {{ quant.suff }}
				</div>
			</div>
			<a href="#!" class="main-basket__header-button" @click="clear()">
				Очистить корзину
			</a>
		</div>
		<ul>
			<li
				v-for="(item, index) in items"
				:key="index"
				class="main-basket__item"
			>
				<MainBasketItem
					:class="'mbi'"
					:header="item.header"
					:price="item.price"
					:count="item.count"
					:img="item.img"
					@addItem="changeQuant(index, '+')"
					@removeItem="changeQuant(index, '-')"
					@deleteItem="delItem(index)"
				/>
			</li>
		</ul>
		<template v-if="quant.count > 0">
			<MainOption
				v-if="options['install'] !== undefined"
				:checked="options['install']"
				@click="changeOption('install', !options['install'])"
			/>
		</template>

		<div class="main-basket__null" v-else>нет товаров</div>
	</div>
</template>

<script>
import MainOption from "../components/MainOption.vue";
import MainBasketItem from "../components/MainBasketItem.vue";

export default {
	name: "main-basket",
	props: {
		countItems: Number,
		countItemsSuff: { type: String, default: "шт" },
	},
	components: {
		MainBasketItem,
		MainOption,
	},

	computed: {
		items() {
			return this.$store.getters.basketItems;
		},
		quant() {
			return this.$store.getters.basketCountObj;
		},
		options() {
			return this.$store.getters.basketOptions;
		},
	},

	methods: {
		clear() {
			this.$store.commit("basketDelete");
		},
		delItem(index) {
			this.$store.commit("basketItemDelete", index);
		},
		changeQuant(index, act) {
			let count;
			switch (act) {
				case "+":
					count = this.items[index].count
						? this.items[index].count + 1
						: 1;
					break;
				case "-":
					if (this.items[index].count === undefined) return;
					count = this.items[index].count - 1;
					break;
				default:
					break;
			}
			this.$store.commit("basketItemChangeQuant", {
				index,
				count,
			});
		},
		changeOption(option, value) {
			this.$store.commit("basketChangeOption", { opt: option, value });
		},
	},
};
</script>

<style lang="scss" scoped>
.main-basket {
	&__header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 50px;
		align-items: flex-end;

		&-container {
			display: flex;
			flex-wrap: wrap;
			align-items: flex-end;
		}
		&-text {
			font-weight: 700;
			font-size: 44px;
			line-height: 120.52%;
			color: #1f2432;
		}
		&-sub {
			font-weight: 400;
			font-size: 18px;
			line-height: 145%;
			color: #797b86;
			margin-left: 22px;
		}

		&-button {
			font-weight: 400;
			font-size: 14px;
			line-height: 150%;
			text-align: right;
			text-decoration-line: underline;
			color: #797b86;
		}
	}

	&__item {
		list-style-type: none;

		&:not(:last-child) {
			border-bottom: 1px solid #c4c4c4;
		}
	}

	&__null {
		width: 100%;
		min-height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: xxx-large;
	}
}
</style>
