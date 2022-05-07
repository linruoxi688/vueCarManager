<template>
<div id="app">
    <span class="loginSpan">
        <header>
            <h3>
                <font size=5 color="white">账号登录</font></h3><!--标题 -->
        </header>
        <hr>
        <div><!--此div中是登陆表单输入项 -->
            <span>
                <input v-model="username" type="text" name="username" placeholder="账号">
            </span>
            <br><br>
            <span>
                <input v-model="password" type="text" name="password" placeholder="密码">
            </span>
            <br><br>
            <input type="text" name="yanzhengma" placeholder="验证码" v-model="vertifyCode">
            <br>
            <input type="button" id="vertifyCodeShow" v-model="vertifyCodeShow" @click="changeVertifyCode">
        </div>
        <br>
        <div><!-- 确认按钮-->
            <button @click="checkLogin"><font size=3 color="white">登陆</font></button>
        </div>
    </span>
</div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    export default {
        data() {
                return{
                    username:"",
                    password:"",
                    vertifyCode:"",
                    vertifyCodeShow:"E4H5"
                }
            },
        methods:{
                checkLogin:function(){
                    if(this.username!=""&&this.password!="")//判空
                    {
                        if((this.vertifyCode).toUpperCase()==this.vertifyCodeShow)//转成大写再比较
                        {
                            this.$router.push('/home')//跳转到主页
                        }
                        else{
                            alert("验证码错误")
                        }
                    }
                    else{
                        alert("账号密码不能为空");
                    }
                },
                changeVertifyCode:function(){//随机生成四位验证码
                    var code = "";
                    var codeLength = 4;//验证码的长度
                    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                    'S','T','U','V','W','X','Y','Z');//随机数
                     for(var i = 0; i < codeLength; i++) {
      //循环操作
                    var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
                    code += random[index];//根据索引取得随机数加到code上
                    }
                    this.vertifyCodeShow = code;//把code值赋给验证码
                }
            }
    }
</script>
<style>
            button{
                height: 30px;
                width: 180px;
                background-color: rgba(4, 161, 209, 0.349);
                border-radius: 5px;
            }
            body{
                /*background-image: url("./assets/bg.jpg");*/
                background-size:100%;
            }
            .loginSpan{
                position: absolute;
                right: 300px;
                top: 50px;
            }
            input{
                border:2px solid grey;
                height:30px;width:200px;
            }
            #vertifyCodeInput{
                height: 30px;
                width: 100px;
            }
            #vertifyCodeShow{
                border:2px solid grey;
                height:40px;width:150px;
                font-size: 20px;
                font-style: italic;
            }
            #app{
                background: url('../assets/bg.png') no-repeat;
                height: 740px;
                width: 100%;
                background-size: 100%;
}
</style>
