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
	background-color: #F5F5F5;
	height: 200px;
	border-radius: 2em;
	width: 20%;
	padding: 2em;

}
</style>
