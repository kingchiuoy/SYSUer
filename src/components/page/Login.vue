<template>
  <div >
  	<div id="loginBoxWhole">
  	<div>
  		<img src="../../assets/logo.gif">
  	</div>
  	<div id="loginBoxDown">
  		<div>
  			<el-input placeholder="请输入账号" v-model="username" required:true>
  	 			 <template slot="prepend">账号</template>
 			</el-input>
		</div>
		<div class="password">
  			<el-input placeholder="请输入密码" v-model="password" >
  	 			 <template slot="prepend">密码</template>
 			</el-input>
		</div>
		<div class="enterButton">
		<el-button type="primary" style="width:100%" @click="enter">登陆</el-button>
		</div>
  	</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
  	return{
  		username:'',
  		password:''
  	}
  },
  methods:{
  	enter(){
  		///判断有无输入账号密码
  		if(this.username==''){
  			this.$message.error('请输入账号');
  		}else if(this.password==''){
  			this.$message.error('请输入密码');
  		}

  		//判断账号密码是否正确

  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#loginBoxWhole{
	position:absolute;
	left:40%;
	height:500px;
	width:320px;
}
#loginBoxDown{
	padding:0px;
	margin: 0px;
	height: 200px;
	width:320px; 
}
.enterButton{
	padding:0px;
	margin-top: 10px;
}
.password{
	margin-top: 10px;
}
</style>
