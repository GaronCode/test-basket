<template lang="html">
	<!-- /* main-option start */ -->

	<div :class="'option'">
		<input
			type="checkbox"
			class="option__checkbox"
			:checked="checked"
			@click="$emit('dataChange')"
		/>
		<img
			class="option__ico"
			src="../assets/images/svg/mo-ico.svg"
			alt="install"
		/>
		<div>
			<div class="option__header">Установка</div>
			<div class="option__description">
				Отметьте, если Вам необходима консультация профессионала по
				монтажу выбранных товаров.
			</div>
		</div>
	</div>

	<!-- /* main-option end */ -->
</template>

<script>
export default {
	name: "main-option",
	props: {
		checked: Boolean,
	},
};
</script>

<style lang="scss" scoped>
.option {
	display: flex;
	flex-wrap: wrap;
	background: #f6f8fa;
	padding: 28px 42px 28px 24px;
	user-select: none;
	align-items: center;

	&__checkbox {
		margin-right: 20px;
	}
	&__ico {
		margin-right: 20px;
	}

	&__header {
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 145%;
		color: #1f2432;
	}

	&__description {
		font-weight: 400;
		font-size: 14px;
		line-height: 150%;
		color: #797b86;
	}
}

/* main-option end */
</style>
