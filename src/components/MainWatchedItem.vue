<template lang="html">
	<!-- /* main-watched-item start */ -->
	<div class="product">
		<div class="product__img">
			<img v-if="icoW" :src="icoW" :alt="itemAlt" />
		</div>

		<div class="product__text-container">
			<div class="product__header">
				{{ itemW }}
			</div>
			<div class="product__info">
				{{ itemAb }}
			</div>
		</div>
		<div class="product__price">
			<div class="product__price-rub">6 848 ₽ – 56 584 ₽</div>
			<div class="product__price-eu">77.60 € – 643.86 €</div>
		</div>
		<a href="#!" class="product__button"> Подробнее </a>
	</div>
	<!-- /* main-watched-item end */ -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "main-watched-item",
	props: {
		itemW: String,
		icoW: String,
		itemAb: String,
		itemAlt: String,
	},
});
</script>

<style lang="scss" scoped>
/* main-watched-item start */
.product {
	background: #f6f8fa;
	border-radius: 5px;
	padding: 25px;
	width: 304px;
	height: 562px;
	display: flex;
	flex-direction: column;

	&__img {
		width: 245px;
		height: 245px;
		overflow: hidden;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffffff;
		margin-bottom: 10px;
		border-radius: 10%;
		img {
			height: 100%;
		}
	}

	&__text-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		overflow: hidden;
	}

	&__header {
		font-weight: 700;
		font-size: 22px;
		line-height: 120.52%;
		color: #1f2432;
		margin-bottom: 10px;
	}

	&__info {
		font-weight: 400;
		font-size: 14px;
		line-height: 145%;
		color: #1f2432;
		overflow: hidden;
	}

	&__price {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
		gap: 6px;
		box-shadow: 0px -15px 30px #f6f8fa;

		&-rub {
			font-family: "Roboto";
			font-style: normal;
			font-weight: 500;
			font-size: 22px;
			line-height: 130%;
			letter-spacing: 0.005em;
			color: #1f2432;
		}

		&-eu {
			font-weight: 400;
			font-size: 16px;
			line-height: 145%;
			color: #797b86;
		}
	}

	&__button {
		background: #0069b4;
		border-radius: 4px;
		font-weight: 400;
		font-size: 16px;
		line-height: 145%;
		text-align: center;
		color: #ffffff;
		text-decoration: none;
		padding: 14px 85px;
	}
}

/* main-watched-item end */
</style>
