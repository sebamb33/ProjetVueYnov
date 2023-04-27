<template>
	<div class="navbar">
		<SearchBar
			:searchCityInput="searchCityInput"
			@update-search-city="handleSearchCityInput"
		></SearchBar>
		<SaveCity></SaveCity>
	</div>
</template>

<script>
import SaveCity from "../SaveCity.vue";
import SearchBar from "./SearchBar.vue";
export default {
	name: "Nav-bar",
	components: { SearchBar, SaveCity },
	data() {
		return {
			searchCityInput: "",
		};
	},
	methods: {
		handleSearchCityInput(value) {
			this.searchCityInput = value;
			this.$emit("update-search-city", this.searchCityInput);
		},
	},
};
</script>

<style>
.navbar {
	height: 100%;
	min-height: 100vh;
	width: 20%;
	border: grey solid 2px;
	border-radius: 5px;
	padding: 2em;
}
</style>
