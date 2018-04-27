<template>
  <div >

  	<div id="listForArticle">
  		<h2 class="listTitle">专栏文章</h2><hr>
      <router-link :to="{name:'Article'}" class="more">更多文章</router-link>
  		<div class="articleBox">
  			<ul><!--循环文章-->
  				<list-for-article v-for="article in articles" 
  				 :author="article.author" :articleName="article.articleName" :content="article.content">
  				 </list-for-article>
  			</ul>
  		</div>
  	</div>
  	
  	<div id="listForQuestion">
  		<h2 class="listTitle">问答</h2><hr>
      <router-link :to="{name:'Question'}" class="more">更多问答</router-link>
  		<div class="questionBox">
  			<ul><!--循环问答-->
  				<list-for-question v-for="question in questions" 
				 :replier="question.replier" :questionTitle="question.question.questionTitle" :response="question.response"	>
  				 </list-for-question>
  			</ul>
  		</div>
  	</div>

  </div>
</template>

<script>
import listForArticle from '../common/listForArticle'
import listForQuestion from '../common/listForQuestion'
export default {
	data(){
		return {
			articles:[],
			questions:[]
		}
	},
  	components:{
  		listForArticle,
  		listForQuestion
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listTitle{
  margin:0px;
  padding-left: 10px;
}
.more{
  float: right;
  margin: 0 5px;
}
#listForArticle{
	position: absolute;
	top:100px;
	left:20%;
	height:500px;
	width:800px;
	background-color: #eee;
}
#listForQuestion{
	position: absolute;
	top:700px;
	left:20%;
	height:500px;
	width:800px;
	background-color: #eee;
}
</style>
