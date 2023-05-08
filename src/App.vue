<template>
	<header class="header wrapper">
		<nav class="header__menu"></nav>
		<HeaderBasket class="header__basket" />
	</header>

	<div class="breadcrumb wrapper">
		<breadcrumb />
	</div>
	<router-view></router-view>
</template>

<script>
import HeaderBasket from "./components/HeaderBasket.vue";
import Breadcrumb from "./components/Breadcrumb.vue";

export default {
	name: "App",
	components: {
		HeaderBasket,
		Breadcrumb,
	},
};
</script>

<style lang="scss">


.wrapper {
	max-width: 1280px;
	margin: 0 auto;
}

@font-face {
	font-family: "Lato";
	font-style: normal;
	font-weight: 400;
	src: url("./assets/fonts/Lato-400.ttf");
}

@font-face {
	font-family: "Lato";
	font-style: normal;
	font-weight: 500;
	src: url("./assets/fonts/Lato-500.ttf");
}

@font-face {
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	src: url("./assets/fonts/Lato-700.ttf");
}

@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: bold;
	src: url("./assets/fonts/Roboto-100.ttf");
}

@font-face {
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	src: url("./assets/fonts/Roboto-100.ttf");
}

html {
	font-family: "Lato";
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.header {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;

	&__menu {
		flex-grow: 1;
	}

	&__basket {
		margin-top: 18px;
		margin-bottom: 24px;
	}
}



.breadcrumb {
	margin-bottom: 60px;
}


</style>
