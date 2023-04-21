<template>
	<div class="SearchBar">
		<form @submit.prevent="handleSubmit">
			<div>
				<label for="city">Ville :</label>
				<input type="city" id="city" v-model="searchCity" />
				<button type="submit">Rechercher</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "SearchBar",
	data() {
		return {
			searchCity: "",
		};
	},
	methods: {
		handleSubmit() {
			console.log(this.searchCity);
			this.$emit("update-search-city", this.searchCity);
		},
	},
};
</script>

<style lang="scss" scoped></style>
