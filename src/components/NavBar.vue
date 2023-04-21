<template>
  <div class="navbar">
    <SearchBar></SearchBar>
    <SaveCity></SaveCity>
  </div>
</template>


<script>
import SaveCity from './SaveCity.vue';
import SearchBar from './SearchBar.vue';
export default {
    name: "Nav-bar",
    components: { SearchBar, SaveCity }
}
</script>

<style>
</style>