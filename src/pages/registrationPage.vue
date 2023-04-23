<template>
	<title>Регистрация — Habr</title>
	<div id="registration__wrapper">
		<div id="lgheader">
			<div id="container">
				<a v-if="this.lang == 'ru'" href="#" id="lgheader__items">
					<li id="lgheader__item-big">Хабр</li>
					<li id="lgheader__item-l">Аккаунт</li>
				</a>
				<a v-if="this.lang == 'en'" href="#" id="lgheader__items">
					<li id="lgheader__item-big">Habr</li>
					<li id="lgheader__item-l">Account</li>
				</a>
			</div>
		</div>
		<div id="registration__form">
			<li v-if="this.lang == 'ru'" id="registration__title">
				Регистрация
			</li>
			<li v-if="this.lang == 'ru'" id="registration__note">
				Зарегистрируйте Хабр Аккаунт, чтобы вступить в крупнейшее русскоязычное IT-сообщество, 
				учиться и делиться опытом, всегда быть в курсе того, что происходит в IT.
			</li>
			<li v-if="this.lang == 'en'" id="registration__title">
				Registration
			</li>
			<li v-if="this.lang == 'en'" id="registration__note">
				Sign up on Habr Account to join millions of people in Habr tech community, 
				learn and share experience, and always stay on top of modern trends and latest achievements of technology and science.
			</li>
			<div id="analog__auth">
				<li v-if="this.lang == 'ru'" id="analog__title">
					C помощью сервиса
				</li>
				<li v-if="this.lang == 'en'" id="analog__title">
					Or sign up with
				</li>
				<ul id="analog__items">
					<li class="analog__item-1"></li>
					<li class="analog__item-2"></li>
					<li class="analog__item-3"></li>
					<li class="analog__item-4"></li>
					<li class="analog__item-5"></li>
					<li class="analog__item-6"></li>
				</ul>
				<div v-if="this.lang == 'ru'" id="input__items">
					<div id="input__form">
						<li id="auth__title">E-mail</li>
						<input id="input__zone" v-model="inputEmail" type="text">
					</div>
					<div id="input__form">
						<li id="auth__title">Никнейм</li>
						<input id="input__zone" v-model="inputEmail" type="text">
					</div>
					<div id="input__form">
						<li id="auth__title">Пароль</li>
						<input id="input__zone" v-model="inputEmail" type="text">
					</div>
					<div id="input__form">
						<li id="auth__title">Пароль ещё раз</li>
						<input id="input__zone" v-model="inputEmail" type="text">
					</div>
				</div>
				<div v-if="this.lang == 'en'" id="input__items">
					<div id="input__form">
						<li id="auth__title">Email</li>
						<input id="input__zone" v-model="inputEmail" type="text">
					</div>
					<div id="input__form">
						<li id="auth__title">Username</li>
						<input id="input__zone" v-model="inputEmail" type="text">
					</div>
					<div id="input__form">
						<li id="auth__title">Password</li>
						<input id="input__zone" v-model="inputEmail" type="text">
					</div>
					<div id="input__form">
						<li id="auth__title">Repeat password</li>
						<input id="input__zone" v-model="inputEmail" type="text">
					</div>
				</div>
				<ul id="accept__checkbox-wrap">
					<input id="accept__checkbox" v-model="isAccept" input type="checkbox">
					<ul v-if="this.lang == 'ru'" id="accept__checkbox-text">
						<li id="chktext">
							Я принимаю условия
						</li>
						<li id="chklink">
							Пользовательского соглашения
						</li>
					</ul>
					<ul v-if="this.lang == 'en'" id="accept__checkbox-text">
						<li id="chktext">
							I accept the
						</li>
						<li id="chklink">
							User agreement
						</li>
					</ul>
				</ul>
				<li v-if="!isAccept" id="not-accept-msg">Необходимо принять пользовательское соглашение</li>
				<div id="captcha">
					<input type="checkbox" v-model="captcha" id="captcha__input">
				</div>
				<RouterLink to="/">
					<button v-if="captcha" id="btn__send">Зарегистрироваться</button>
				</RouterLink>
				<button v-if="!captcha" id="btn__send-empty">Sign Up</button>
			</div>
		</div>
		<div id="login__form-lower">
			<ul v-if="this.lang == 'ru'" id="lflower__textzone">
				<li id="registration__text">
					Уже зарегистрированы? 
				</li>
				<li id="registration__link">
					Войдите
				</li>
			</ul>
			<ul v-if="this.lang == 'en'"  id="lflower__textzoneen">
				<li id="registration__text">
					Already registered?
				</li>
				<li id="registration__link">
					Log in
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
			isAccept : true,
			captcha : false,
		}
	},
	methods : {
		changeLang(){
			if(this.lang == 'ru'){
				this.lang = 'en'
			}
			else{
				this.lang = 'ru'
			}
		}
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
#registration__wrapper{
	width: 100%;
	height: 1272px;
	background-color: #f4f4f4;
}

#lgheader{
	width: 100%;
    background: #fff;
    border-bottom: 1px solid #d5dddf;
	padding-top: 1px;
	padding-bottom:17.5px;
    margin-bottom: 24px;
}
#lgheader__items{
	margin-top:18.5px;
	font-size: 26px;
	max-width: 160px;
	display: flex;
	flex-direction: row;
	gap: 4px;
	color: #000;
}
#lgheader__item-big{
	font-size: 25px;
	font-weight: 700;
}

#registration__form{
	max-width: 380px;
	height: 901px;
	padding:40px;
	background: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
	margin: 0 auto;
	margin-top:80px;
}
#registration__title{
	align-items: center;
    color: #333;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
}
#registration__note{
	background: linear-gradient(0deg, rgba(84, 142, 170, 0.12), rgba(84, 142, 170, 0.12)),#fff;
    border-radius: 3px;
    padding: 14px 20px 14px 60px;
    box-sizing: border-box;
    margin-top: 16px;
    position: relative;
	font-size: 15px;
    line-height: 20px;
    color: #333;
}

#analog__auth{
	margin-top:32px;
	padding: 0px 2px;
	display: flex;
	flex-direction: column;
	gap:17px;
}
#analog__items{
	display: flex;
	flex-direction: row;
	gap:12px;
}
#analog__title{
	line-height: 16px;
    color: #333;
    font-size: 14px;
    font-family: "-apple-system",BlinkMacSystemFont,Arial,sans-serif;
    font-weight: 700;
}
[class^="analog__item-"]{
	background-color: #cecece;
	width: 36px;
	height: 36px;
	border-radius: 3px;
	cursor: pointer;
}
.analog__item-1:hover{ background-color: #3b5998; }
.analog__item-2:hover{ background-color: #4178a9; }
.analog__item-3:hover{ background-color: #55acee; }
.analog__item-4:hover{ background-color: #161514; }
.analog__item-5:hover{ background-color: #4279d3; }
.analog__item-6:hover{ background-color: #dc4e41; }

#input__form{
	padding-top: 14px;
	display: flex;
	flex-direction: column;
}
#input__items{
	display: flex;
	flex-direction: column;
	gap:17px;
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
#accept__checkbox-wrap{
	margin-top: 14px;
	display: flex;
	flex-direction: row;
	gap: 8px;
}
#accept__checkbox-text{
	display: flex;
	flex-direction: row;
	gap: 4px;
	font-size: 14px;
    font-weight: normal;
	line-height: 18px;
}
#chklink{
	color: #558cb7;
}
#accept__checkbox{
	border: 1px solid #bcccd0;
    background-color: #fff;
	width: 18px;
	height: 18px;
}

#not-accept-msg{
	color: #de5959;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    margin-top: -10px;
}

#captcha{
	height: 30px;
	padding: 22px 10px;
	width: 280px;
	border: 1px solid #d3d3d3;
	margin-top: 14px;
	border-radius: 4px;
	background-color: #f8f8f8;
}
#captcha__input{
	width: 27px;
	height: 27px;
}
#btn__send,#btn__send-empty{
	align-items: center;
	font-size: 15px;
	margin-top:13px;
    font-weight: 500;
	border-radius: 3px;
	background-color: #558cb7;
    color: #fff;
	width: 100%;
	padding-top:16px;
	padding-bottom:15px;
	cursor: pointer;
}
#btn__send-empty{
	margin-top:-4px;
	background-color:#aac6db;
	cursor: not-allowed;
}
#btn__send:hover{ background-color: #376f9a;}

.login__form,#login__form-lower,.login__formempty{
	max-width: 460px;
	height: 542px;
	background-color: #fff;
	margin: 0 auto;
	margin-top:80px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    border-radius: 4px;
}
#login__form-lower{
	height: 48px;
	margin-top:16px;
}
#lflower__textzone,#lflower__textzoneen{
	display: flex;
	flex-direction: row;
	gap: 4px;
	padding: 15px 0px;
	line-height: 18px;
	max-width: 258px;
	margin-left: 26.5%;
    color: #333;
    font-size: 14px;
    font-weight: 500;
}
#lflower__textzoneen{
	margin-left: 32.25%;
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