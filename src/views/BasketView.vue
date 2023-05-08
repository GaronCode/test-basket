<template>
	<div class="basket wrapper">
		<MainBasket class="backet__main" />
		<div class="basket__container">
			<MainSum class="backet__sumn" />
		</div>
	</div>
	<div class="wrapper">
		<MainWatched />
	</div>
</template>

<script lang="ts">
import MainBasket from "@/components/MainBasket.vue";
import MainSum from "@/components/MainSum.vue";
import MainWatched from "@/components/MainWatched.vue";

import { defineComponent } from "vue";
export default defineComponent({
	name: "HomeView",
	components: {
		MainBasket,
		MainSum,
		MainWatched,
	},
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
</style>
