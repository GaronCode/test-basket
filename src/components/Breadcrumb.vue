<template lang="html">
	<div class="breadcrumb">
		<div class="wrapper">
			<ul class="breadcrumb__list">
				<li class="breadcrumb__item breadcrumb__item_main">
					<a href="http://">Главная</a>
				</li>
				<li class="breadcrumb__item"><a href="http://">Магазины</a></li>
				<li class="breadcrumb__item">
					<a href="http://">Оффлайн магазины</a>
				</li>
				<li class="breadcrumb__item"><a href="http://">Корзина</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
	name: "bread-crumb",
});
</script>

<style lang="scss" scoped>
/* header-chain start */
.breadcrumb {
	margin-bottom: 60px;

	&__list {
		list-style-type: none;
		display: flex;
	}

	&__item {
		& > a {
			font-weight: 400;
			font-size: 14px;
			line-height: 150%;
			color: #797b86;
			text-decoration: none;
		}

		&:not(:last-child) {
			&::after {
				content: " ";
				font-size: 24pt;
				text-align: center;
				line-height: 42px;
				color: #fff;
				border-radius: 25px;
				margin: 0 10px;

				background-image: url("@/assets/images/svg/play-ico.svg");

				background-position: center;
				background-repeat: no-repeat;

				display: inline-block;
				height: 10px;
				width: 5px;
			}
		}
	}
}
</style>
