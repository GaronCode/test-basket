<template>
	<div class="basket wrapper">
		<MainBasket class="backet__main" />
		<div class="basket__container">
			<MainSum class="backet__sumn" />
		</div>
	</div>
	<div class="watched wrapper">
		<MainWatched />
	</div>
</template>

<script lang="ts">
import MainBasket from "@/components/MainBasket.vue";
import MainSum from "@/components/MainSum.vue";
import MainWatched from "@/components/MainWatched.vue";

import { defineComponent } from "vue";

export default defineComponent({
	components: { MainBasket, MainSum, MainWatched },
});
</script>

<style lang="scss" scoped>
.basket {
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 94px;
	justify-content: space-between;

	&__main {
		max-width: 800px;
		width: 100%;
	}

	&__container {
		display: flex;
		align-items: center;
	}

	&__sumn {
		align-self: center;
		width: 440px;
	}
}

@media screen and (max-width: 1300px) {
	.basket {
		flex-direction: column;
		align-items: center;
		margin-bottom: 50px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.basket__container {
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.watched {
		display: flex;
		justify-content: center;
	}
}
</style>
