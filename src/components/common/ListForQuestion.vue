<template>
  <div >
  	<!--循环问题-->
    <li>
    	<div >
    		<p>{{replier}}</p>
    		<p>{{questionTitle}}</p>
    		<div>
    			{{response}}
    		</div>
    	</div>
    </li>
  </div>
</template>

<script>
export default {
  props:['replier','questionTitle','response']
}
</script>

<style>

</style>
