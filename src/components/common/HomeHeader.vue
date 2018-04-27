<template>
  <div id="header">
    <div id="headerInner">
      <nav id="headerNav">
  	<router-link :to="{name:'Home'}"><el-button type="text" class="navItems">首页</el-button> </router-link>
    <router-link :to="{name:'Article'}"><el-button type="text" class="navItems">专栏</el-button></router-link>
    <router-link :to="{name:'Question'}"><el-button type="text" class="navItems">问答</el-button></router-link>
     </nav>
    <el-input class="find"
    placeholder="查找你想要的消息" prefix-icon="el-icon-search" style="width=40px;" size="small">
    </el-input>
    <el-button type="primary" icon="el-icon-edit"  size="small">写文章</el-button>
    <el-button type="primary" icon="el-icon-question" size="small">提问</el-button>
    <div class="mine">
    <el-badge :value="12" class="MsgBtn"><el-button size="small" >评论</el-button></el-badge>
    <el-badge :value="3" class="MsgBtn"><el-button size="small" >回答</el-button></el-badge>
    <el-button icon="el-icon-picture"  class="MsgBtn" circle></el-button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.find{
  width:250px;
  margin-left: 50px;
  margin-right:70px;
}
#header{
  position:fixed;
  width: 100%;
  min-width:1032px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  z-index: 100;
}

#headerNav{
  display: flex;
  margin-right: 18px;
  margin-left: 27px;
  color: #999;
}
#headerInner{
  position:relative;
  display: flex;
  width:1000px;
  height: 52px;
  padding:0 16px;
  margin:0 auto;
  align-items: center;
}
.navItems{
  padding:5px;
  font-size: 16px;
}
span{
  font-size: 25px;
  padding-top: 5px;
}
.mine{
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items:center;
}
.MsgBtn{
  margin-right: 20px;
}
</style>
