<template>
	<div class="SearchBar">
		<form @submit.prevent="handleSubmit">
			<div>
				<input type="city" id="city" v-model="searchCity" />
				<button type="submit" id="buttonSearch" >Rechercher</button>
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

<style scoped>
#city
{
	width: 80%;
	height: 50px;
	border: none;
	border-radius: 1em;
}
#buttonSearch
{
	border: none;
	padding: 20px;
	width: 80%;
	height: 30%;
	margin: 30px;
	border-radius: 2em;
	background-color: #EEEEEE;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
