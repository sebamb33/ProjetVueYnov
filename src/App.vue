<template>
	<NavBar
		:searchCityInput="searchCityInput"
		@update-search-city="handleSearchCityInput"
	></NavBar>
	<CitySelector :searchCityInput="searchCityInput"></CitySelector>
</template>

<script>
import CitySelector from "./components/CitySelector.vue";
import NavBar from "./components/NavBar.vue";

export default {
	name: "App",
	components: {
		NavBar,
		CitySelector,
	},
	data() {
		return {
			searchCityInput: "",
		};
	},
	methods: {
		handleSearchCityInput(value) {
			this.searchCityInput = value;
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	display: flex;
}
</style>
