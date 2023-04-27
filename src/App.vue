<template>

	<NavBar
		:searchCityInput="searchCityInput"
		@update-search-city="handleSearchCityInput"
	></NavBar>
	<CitySelector :searchCityInput="searchCityInput" v-if="!selectedCity" @update-selected-city="handleSelectedCity"></CitySelector>
	<CityWeather v-else :selectedCityData="selectedCityData"></CityWeather>
</template>

<script>


import NavBar from "./components/Navbar/NavBar.vue";
import CitySelector from "@/components/CitySelector.vue";
import CityWeather from "@/components/CityWeather.vue";
export default {
	name: "App",
	components: {
		CityWeather,
		CitySelector,
		NavBar,
	},
	data() {
		return {
			searchCityInput: "",
			selectedCity:false,
			selectedCityData:null,
		};
	},
	methods: {
		handleSearchCityInput(value) {
			this.searchCityInput = value;
			this.selectedCity=false;
		},
		handleSelectedCity(item)
		{
			this.selectedCity=true;
			console.log("Ville select : "+item)
			this.selectedCityData=item;
		}
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
