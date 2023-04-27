<template>
	<div class="City-selector">
		<div v-if="cities" class="cities">
			<div v-for="(item, index) in paginatedCities" :key="index" class="oneCity">
				<img :src="item.weatherCurrentIcon">
				<p @click="handleCityClick(item)">{{ item.name }}</p>
			</div>
			<div>
				<p>Nombre de page {{pageCount}}</p>
				<button @click="previousPage" :disabled="currentPage === 0">Previous</button>
				<button @click="nextPage" :disabled="currentPage === pageCount - 1">Next</button>
			</div>
		</div>
		<div v-else>
			<p class="noCity">Aucune ville</p>
		</div>
	</div>
</template>

<script>
import {getCity} from "@/api/apiService";
export default {
	name: "CitySelector",
	components: {

	},
	props: {
		searchCityInput: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			currentPage: 0,
			pageSize: 5,
			cities: null,
		};
	},
	computed: {
		paginatedCities() {
			const start = this.currentPage * this.pageSize;
			const end = start + this.pageSize;
			return this.cities.slice(start, end);
		},
		pageCount() {
			return Math.ceil(this.cities.length / this.pageSize)-1;
		},
	},
	methods: {
		previousPage() {
			this.currentPage--;
		},
		nextPage() {
			this.currentPage++;
		},
		handleCityClick(item)
		{
			this.$emit('update-selected-city', item);
		},
		async searchCities() {
			if (this.searchCityInput) {

				this.cities = await getCity(this.searchCityInput)
			}
		}
	},
	watch: {
		searchCityInput() {
			this.searchCities();
		},
	},
};
</script>

<style scoped>
.City-selector {
	height: 100%;
	min-height: 100vh;
	width: 75%;
	display: flex;
	align-items: center;
	flex-direction: column;
}
.oneCity{
	background-color:#F5F5F5 ;
	border-radius: 2em;
	margin: 20px;
	padding: 2em 20em;

}
</style>
