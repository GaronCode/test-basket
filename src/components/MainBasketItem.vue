<template lang="html">
	<!-- /* main-basket start */ -->
	<div class="basket-item">
		<a href="#!">
			<img :src="require('@/assets/images/' + img)" alt="item1-ico" />
		</a>
		<div class="basket-item__text-container">
			<div class="basket-item__name">
				{{ header }}
			</div>
			<div class="basket-item__description">
				12-72/168 м3/ч / гидрорегулируемый расход / от датчика
				присутствия
			</div>
			<div class="basket-item__article">Артикул: G2H1065</div>
		</div>

		<div class="basket-item__quant quant-block">
			<div class="quant-block__container">
				<a
					class="quant-block__button quant-block__dec"
					:class="{ 'quant-block__button_disabled': count == 1 }"
					@click="remove()"
					><img src="@/assets/images/dec.png" alt="dec"
				/></a>
				<span class="quant-block__button quant-block__input">{{
					count
				}}</span>
				<a class="quant-block__button quant-block__inc" @click="add()"
					><img src="@/assets/images/inc.png" alt="inc"
				/></a>
			</div>
			<p class="quant-block__price" v-if="count != 1">
				{{ price.toLocaleString() }} ₽/шт.
			</p>
		</div>
		<div class="basket-item__price">
			{{ (price * count).toLocaleString() }} ₽
		</div>
		<div class="basket-item__button">
			<a href="#!" @click="deleteItem()">
				<img
					src="../assets/images/svg/delete-ico.svg"
					alt="delete-ico"
				/>
			</a>
		</div>
	</div>

	<!-- /* main-basket end */ -->
</template>

<script>
export default {
	name: "main-basket-item",
	props: {
		header: String,
		count: { type: Number, default: 1 },
		price: { type: Number, default: 0 },
		img: String,
	},
	emits: ["addItem", "removeItem", "deleteItem"],
	setup(props, { emit }) {
		return {
			add: () => emit("addItem"),
			remove: () => {
				if (props.count > 1) emit("removeItem");
			},
			deleteItem: () => emit("deleteItem"),
		};
	},
};
</script>

<style lang="scss" scoped>
.basket-item {
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 22px;
	margin-top: 24px;
	align-items: center;

	&__text-container {
		margin-left: 30px;
		max-width: 262px;
	}

	&__name {
		font-weight: 600;
		font-size: 16px;
		line-height: 145%;
		color: #1f2432;
		margin-bottom: 6px;
	}

	&__description {
		font-weight: 400;
		font-size: 12px;
		line-height: 150%;
		color: #2c3242;
		margin-bottom: 6px;
	}

	&__article {
		font-weight: 400;
		font-size: 14px;
		line-height: 150%;
		color: #797b86;
	}

	&__quant {
		height: 34px;
	}

	&__price {
		align-self: center;
		font-family: "Roboto";
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 145%;
		text-align: right;
		color: #1f2432;
		margin-right: 34px;
	}

	&__button {
		align-self: baseline;
	}
}

.quant-block {
	height: 36px;
	flex-grow: 1;

	&__container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
	}

	&__button {
		display: flex;
		align-items: center;
		justify-content: center;
		//background: #F6F8FA;
		background: #e0e8f0;
		border: none;
		height: 32px;
		min-width: 32px;
		cursor: pointer;
		&:hover {
			background: #d5e0ec;
		}

		&_disabled {
			background-color: #e4e5e6;
			cursor: not-allowed;
			&:hover {
				background-color: #ddd;
			}
		}
	}
	&__dec {
		border-radius: 4px 0 0 4px;
	}

	&__inc {
		border-radius: 0 4px 4px 0;
	}

	&__input {
		font-weight: 400;
		font-size: 14px;
		margin: 0 2px;
	}

	&__price {
		text-align: center;
		margin-top: 8px;
		font-family: "Roboto";
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 145%;
	}
}

@media screen and (max-width: 675px) {
	.basket-item {
		flex-direction: column;
		justify-content: center;
		text-align: center;

		&__price {
			margin-top: 30px;
			margin-right: 0 !important;
		}

		&__text-container {
			margin: 0 !important;
		}

		&__button {
			align-self: end !important;
			order: -1;
		}
	}
}
</style>
