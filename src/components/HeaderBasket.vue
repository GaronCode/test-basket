<template lang="html">
	<div class="mini-basket">
		<div class="mini-basket__ico">
			<a href="#!">
				<img src="../assets/images/svg/hb-ico.svg" alt="hb-ico" />
			</a>
		</div>
		<div class="mini-basket__text">
			<div class="mini-basket__text-header">Ваша корзина</div>
			<div class="mini-basket__text-count">
				<template v-if="count.count > 0">
					{{ count.count }}
				</template>
				{{ count.suff }}
			</div>
			<div class="mini-basket__text-price">
				{{ sumn.toLocaleString() }} ₽
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "header-basket",
	computed: {
		count() {
			return this.$store.getters.basketCountObj;
		},
		sumn() {
			return this.$store.getters.basketPrice;
		},
	},
};
</script>

<style lang="scss" scoped>
.mini-basket {
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	&__ico {
		margin-right: 10px;
	}

	&__text {
		&-header {
			font-weight: 400;
			font-size: 14px;
			line-height: 150%;
			color: #1f2432;
		}
		&-count {
			font-weight: 400;
			font-size: 12px;
			line-height: 145%;
			color: #797b86;
		}

		&-price {
			font-weight: 400;
			font-size: 12px;
			line-height: 145%;
			color: #1f2432;
		}
	}
}
</style>
