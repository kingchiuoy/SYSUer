<template>
  <div >
  	<!--循环文章-->
    <li>
    	<div >
    		<p>{{author}}</p>
    		<p>{{articleName}}</p>
    		<div>
    			{{content}}
    		</div>
    	</div>
    </li>
  </div>
</template>

<script>
export default {
  props:['author','articleName','content']
}
</script>

<style>

</style>
