<template>
	<div class="City-selector">
		<div v-if="cities" class="cities">
			<div v-for="(item, index) in cities" :key="index" class="oneCity">
				<flag-icon iso="fr" />
				<p>{{ item.name }}</p>
			</div>
		</div>
		<div v-else>
			<p class="noCity">Aucune ville</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";

import FlagIcon from "vue-flag-icon";
export default {
	name: "CitySelector",
	components: {
		FlagIcon,
	},
	props: {
		searchCityInput: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			cities: null,
		};
	},
	methods: {
		async searchCities() {
			if (this.searchCityInput) {
				try {
					const response = await axios.get(
						`https://api.api-ninjas.com/v1/city?name=${this.searchCityInput}&limit=30`,
						{
							headers: {
								"X-Api-Key": "2jI0qiYy3fSIH7WUuMsmQw==w83xnkrHIZGigIkW",
							},
						}
					);
					console.log(response.data);
					this.cities = response.data;

					//load current weather
				} catch (error) {
					console.log(error);
				}
			}
		},
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
}
</style>
