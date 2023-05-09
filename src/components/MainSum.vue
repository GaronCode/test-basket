<template lang="html">
	<div class="total">
		<div class="total__header">Итого</div>
		<div class="total__info">
			<div class="total__category-container">
				<div class="total__category">Сумма заказа</div>
				<div class="total__value">
					<template v-if="hasItems">
						{{ sumnOrder.toLocaleString() }} ₽
					</template>
					<template v-else> — </template>
				</div>
			</div>
			<div class="total__category-container">
				<div class="total__category">Количество</div>
				<template v-if="hasItems">
					<div class="total__value">{{ countItems }} шт</div>
				</template>
				<template v-else> — </template>
			</div>
			<div class="total__category-container">
				<div class="total__category">Установка</div>
				<div class="total__value">
					<template v-if="hasItems">
						<template v-if="install">да</template>
						<template v-else>нет</template>
					</template>
					<template v-else> — </template>
				</div>
			</div>
		</div>
		<div class="total__line" />
		<div class="total__category-container total__category-container_last">
			<div class="total__category total__category_last">
				Стоимость товаров
			</div>
			<div class="total__value total__value_last">
				<template v-if="hasItems">
					{{ sumnItems.toLocaleString() }} ₽
				</template>
				<template v-else> — </template>
			</div>
		</div>
		<div class="total__buttons-container">
			<a class="total__button total__button_blue" href="#!"
				>Оформить заказ</a
			>
			<a class="total__button total__button_white" href="#!"
				>Купить в 1 клик</a
			>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
	name: "main-sum",
	setup() {
		const store = useStore();

		const sumnOrder = computed(() => store.getters.basketPrice);
		const sumnItems = computed(() => sumnOrder.value);

		const countItems = computed(() => store.getters.basketCountObj.count);
		const hasItems = computed(() => countItems.value > 0);

		return {
			countItems,
			hasItems,
			install: computed(() => store.getters.basketOptions.install),
			sumnOrder,
			sumnItems,
		};
	},
};
</script>

<style lang="scss" scoped>
/* main-sum start */

.total {
	background: #f6f8fa;
	border-radius: 5px;
	padding: 35px 30px;
	max-width: 425px;

	&__header {
		margin-bottom: 30px;
		font-weight: 600;
		font-size: 24px;
		line-height: 120.52%;
		color: #1f2432;
	}

	&__info {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	&__category-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 100%;

		font-family: "Roboto";
		color: #1f2432;
		font-size: 16px;
		line-height: 145%;
		font-style: normal;

		&:not(:last-child) {
			margin-bottom: 16px;
		}

		&_last {
			margin-bottom: 30px;
		}
	}

	&__category {
		font-weight: 500;

		&_last {
			font-weight: 600;
			font-size: 18px;
			color: #1f2432;
		}
	}

	&__value {
		font-weight: 400;
		text-align: right;

		&_last {
			font-weight: 700;
			font-size: 26px;
			line-height: 130%;
			letter-spacing: 0.005em;
			color: #1f2432;
		}
	}

	&__line {
		margin-top: 28px;
		margin-bottom: 10px;
		border-bottom: 1px solid #aeb0b6;
	}

	&__buttons-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		gap: 12px;
	}

	&__button {
		text-align: center;
		text-decoration: none;
		padding-top: 14px;
		padding-bottom: 14px;

		border-radius: 4px;
		font-weight: 600;
		font-size: 18px;
		line-height: 145%;

		&_blue {
			background: #0069b4;
			color: #ffffff;
		}
		&_white {
			background: #ffffff;
			border: 1px solid #0069b4;
			color: #0069b4;
		}
	}
}
</style>
