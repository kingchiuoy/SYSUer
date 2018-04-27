<template>
  <div id="articleContent">
  	<div class="title">
      <h3>问答区</h3>
     <h1>如果你有什么想问的可以在这里问社友们哦~</h1> 
    </div>
    <hr>
    <div>
      <el-input type="textarea" :rows="2"placeholder="想问点啥呢"></el-input>
      <el-button type="primary" icon="el-icon-edit" circle>发问</el-button>
    </div>
    <hr>

        <div class="questionBox">
  			<ul><!--循环问答-->
  				<list-for-question v-for="question in questions" 
				 :replier="question.replier" :questionTitle="question.question.questionTitle" :response="question.response"	>
  				 </list-for-question>
  			</ul>
  		</div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#articleContent{
  top:100px;
  position:absolute;
  left: 20%;
  width: 600px;
  background-color: #eee;
}
</style>
