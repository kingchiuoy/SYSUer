<template>
  <div id="app">
    <router-view/>
    <div>
    	<router-view name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
