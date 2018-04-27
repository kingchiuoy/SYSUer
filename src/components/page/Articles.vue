<template>
  <div id="articleContent">
  	<div class="title">
      <h3>这里是专栏</h3>
     <h1>你可以在这里发表文章和你想说的话</h1> 
    </div>
    <hr>
    <div>
      <el-button type="text">分类一</el-button>
      <el-button type="text">分类二</el-button>
      <el-button type="text">分类三</el-button>
    </div>
    <hr>
    <div class="articleBox">
        <ul><!--循环文章-->
          <list-for-article v-for="article in articles" 
           :author="article.author" :articleName="article.articleName" :content="article.content">
           </list-for-article>
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
