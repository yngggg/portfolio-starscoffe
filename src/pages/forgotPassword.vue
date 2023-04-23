<template>
	<title>Восстановление пароля — Habr</title>
	<div id="remimber__wrapper">
		<div id="remimber">
			<div id="remimber__title">
				Восстановление пароля
			</div>
			<div id="input__form">
				<li id="auth__title">
					E-mail
				</li>
				<input id="input__zone" v-model="inputEmail" type="text">
				<div id="captcha"></div>
				<RouterLink to="/">
					<button v-if="inputEmail !== ''" id="btn__send">Отправить</button>
				</RouterLink>
				<button v-if="inputEmail == ''" id="btn__send-empty">Отправить</button>
			</div>
		</div>
		<div id="login__form-lower">
			<ul v-if="this.lang == 'ru'" id="lflower__textzone">
				<li id="registration__link">
					Войти
				</li>
				<li id="registration__text">
					или
				</li>
				<li id="registration__link">
					зарегистрироваться
				</li>
			</ul>
			<ul v-if="this.lang == 'en'"  id="lflower__textzoneen">
				<li id="registration__text">
					Have no account yet?
				</li>
				<li id="registration__link">
					Sign up
				</li>
			</ul>
		</div>
		<div id="lower__links">
			<ul id="lwl__item-lang">
				<div id="lang__icon"></div>
				<button v-if="this.lang == 'ru'" @click="changeLang" id="change__lang">English</button>
				<button v-if="this.lang == 'en'" @click="changeLang" id="change__lang">Русский</button>
			</ul>
			<li v-if="this.lang == 'ru'" id="lwl__item">О сервисе</li>
			<li v-if="this.lang == 'en'" id="lwl__item">About</li>
			<li v-if="this.lang == 'ru'" id="lwl__item">Обратная связь</li>
			<li v-if="this.lang == 'en'" id="lwl__item">Feedback</li>
			<li v-if="this.lang == 'ru'" id="lwl__item">Соглашение</li>
			<li v-if="this.lang == 'en'" id="lwl__item">User agreement</li>
		</div>
	</div>
	
</template>
<script>
export default{
	data(){
		return {
			lang : 'ru',
			inputEmail : '',
		}
	},
	methods:{
		changeLang(){
			if(this.lang == 'ru'){
				this.lang = 'en'
			}
			else{
				this.lang = 'ru'
			}
		},
	}
}
</script>
<style scoped>
*{
	transition: .3s;
}
button{
	background: none;
}
#remimber__wrapper{
	width: 100%;
	height: 862px;
	background-color: #f4f4f4;
	padding-top:80px;
}
#remimber{
	padding:40px;
	max-width: 380px;
	height: 336px;
	background-color: #ffffff;
	margin: 0 auto;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
}
#remimber__title{
	align-items: center;
    color: #333;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
}

#input__form{
	padding-top: 57px;
	display: flex;
	flex-direction: column;
	margin:0px 2px;
}
#captcha{
	height: 74px;
	width: 300px;
	border: 1px solid #d3d3d3;
	margin-top: 31px;
	border-radius: 4px;
	background-color: #f8f8f8;
}

.login__form,#login__form-lower,.login__formempty{
	max-width: 460px;
	height: 542px;
	background-color: #fff;
	margin: 0 auto;
	margin-top:80px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
}

.login__formempty{
	height: 592px;
}
#login__form-lower{
	height: 48px;
	margin-top:16px;
}

#auth__title{
	line-height: 16px;
	font-weight: 700;
    color: #333;
    font-size: 14px;
	margin-bottom:12px;
}
#input__zone,#input__zone-red{
	width: 100%;
    height: 40px;
    background: #fff;
    border: 1px solid #dbdbdb;
    padding: 0 14px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
}
#input__zone-red{
    background: #fff;
	border-color: #ff6e6e;
}
#input__zone:focus,#input__zone-red:focus{
    background: #fff;
	border: 1px solid #82b3d9;
    outline: 0;
    box-shadow: none;
    transition: border linear .2s,box-shadow linear .2s;
}


#btn__send,#btn__send-empty{
	align-items: center;
	font-size: 15px;
    font-weight: 500;
	margin-top: 30px;
	border-radius: 3px;
	background-color: #558cb7;
    color: #fff;
	width: 100%;
	padding-top:16px;
	padding-bottom:15px;
	cursor: pointer;
}
#btn__send-empty{
	background-color:#aac6db;
	cursor: not-allowed;
}
#btn__send:hover{ background-color: #376f9a;}

#lflower__textzone,#lflower__textzoneen{
	display: flex;
	flex-direction: row;
	gap: 4px;
	padding: 15px 0px;
	line-height: 18px;
	max-width: 258px;
	margin-left: 28.15%;
    color: #333;
    font-size: 14px;
    font-weight: 500;
}
#lflower__textzoneen{
	margin-left: 29.7%;
}
#registration__link{
	color: #558cb7;
	cursor: pointer;
}

#lower__links{
	max-width: 460px;
	display: flex;
	flex-direction: row;
	gap: 23.75px;
	margin:0 auto;
	padding-top:23px;
}
#lwl__item-lang{
	display: flex;
	flex-direction: row;
	gap: 9px;
}
#lwl__item,#lwl__item-lang,#change__lang{
	line-height: 16px;
    color: #8d97a0;
    font-size: 14px;
}
#lang__icon{
	width: 16px;
	height: 16px;
	border-radius: 50%;
    background-color: #8d97a0;
}

</style>