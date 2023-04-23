<template>
<title>Вход — Habr Account</title>
<div v-if="showWrongLoginMsg" id="wronglogin__msg">
	<ul id="wrlg__msg-text">
		Пользователь с такой электронной почтой или паролем не найден
	</ul>
	<button @click="showWrongLoginMsg = false" id="hide__wrlg__msg"></button>

</div>
<div id="login__form-wrapper">
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
	<div :class="{ login__formempty : showEmptyMsg, login__form : !showEmptyMsg, }">
		<div id="login__items">
			<li v-if="this.lang == 'ru'" id="login__title">
				Вход
			</li>
			<li v-if="this.lang == 'en'" id="login__title">
				Log in
			</li>
			<div id="login__auth-wrapper">
				<div id="auth__inputzone">
					<ul id="login__auth-email">
						<li v-if="this.lang == 'ru'" id="auth__title">
							E-mail
						</li>
						<li v-if="this.lang == 'en'" id="auth__title">
							Email
						</li>
						<input v-if="!showEmptyMsg" v-model="inputedData.email" type="text" name="password" id="input__zone">
						<input v-if="showEmptyMsg" v-model="inputedData.email" type="text" name="password" id="input__zone-red">
						<li v-if="showEmptyMsg" id="red__text">Введите корректный e-mail</li>
					</ul>
					<ul id="login__auth-email">
						<li v-if="this.lang == 'ru'" id="auth__title">
							Пароль
						</li>
						<li v-if="this.lang == 'en'" id="auth__title">
							Password
						</li>
						<input v-if="!showEmptyMsg" v-model="inputedData.password" type="text" name="email" id="input__zone">
						<input v-if="showEmptyMsg" v-model="inputedData.password" type="text" name="email" id="input__zone-red">
						<li v-if="showEmptyMsg" id="red__text">Введите пароль</li>
					</ul>
				</div>
				<button @click="checkInputedData" v-if="this.lang == 'ru'" id="btn__login">
					Войти
				</button>
				<button @click="checkInputedData" v-if="this.lang == 'en'" id="btn__login">
					Log in
				</button>
				<RouterLink to="/login/remimber" v-if="this.lang == 'ru'" id="forgot__pass-link">
					Забыли пароль?
				</RouterLink>
				<RouterLink to="/login/remimber" v-if="this.lang == 'en'" id="forgot__pass-link">
					Forgot password?
				</RouterLink>
				<div id="analog__auth">
					<li v-if="this.lang == 'ru'" id="analog__title">
						Или войдите с помощью других сервисов
					</li>
					<li v-if="this.lang == 'en'" id="analog__title">
						Or log in with
					</li>
					<ul id="analog__items">
						<li class="analog__item-1"></li>
						<li class="analog__item-2"></li>
						<li class="analog__item-3"></li>
						<li class="analog__item-4"></li>
						<li class="analog__item-5"></li>
						<li class="analog__item-6"></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="login__form-lower">
		<ul v-if="this.lang == 'ru'" id="lflower__textzone">
			<li id="registration__text">
				Ещё нет аккаунта?
			</li>
			<RouterLink to="/registration" id="registration__link">
				Зарегистрируйтесь
			</RouterLink>
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
			inputedData : {
				email : '',
				password : '',
			},
			userData : {
				email : 'email',
				password : 'password'
			},
			showEmptyMsg : false,
			showWrongLoginMsg : false,
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
		checkInputedData(){
			if(this.inputedData.email == '' || this.inputedData.password == ''){
				this.showEmptyMsg = true
			}
			else{
				this.showEmptyMsg = false
				this.checkInput()
			}
		},
		checkInput(){
			
			if(this.inputedData.email !== this.userData.email){
				this.showWrongLoginMsg = true
			}
			else{
				this.showWrongLoginMsg = false
			}
			if(this.inputedData.password !== this.userData.password){
				this.showWrongLoginMsg = true
			}
			else{
				this.showWrongLoginMsg = false
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
	cursor: pointer;
	background: none;
}
#login__form-wrapper{
	width: 100%;
	height: 957px;
	background-color: #f4f4f4;
}

#wronglogin__msg{
	display: flex;
	flex-direction: row;
	background-color: #dd6c6c;
	width: 100%;
	height: 61px;
}
#hide__wrlg__msg{
	background-color: #fff;
	width: 24px;
	height: 24px;
	border-radius: 4px;
	margin-top:18px;
	margin-right:18px;

}
#wrlg__msg-text{
	font-size: 14px;
	max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
	padding-left: 62px;
    color: #fff;
    text-align: center;
    line-height: 1.5;
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
#login__items{
	padding: 40px;
}
#login__title{
	color: #333;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;	
}
#login__auth-wrapper{
	margin:0px 2px;
	padding-top:57px
}
#auth__inputzone{
	display: flex;
	flex-direction: column;
	gap: 31px;
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
#input__zone-red:focus{ border-color: #ff6e6e; }
#red__text{
	color: #ff6e6e;
	font-weight: 500;
    line-height: 18px;
    margin-top: 7px;
	font-size: 12px;
}
#btn__login{
	align-items: center;
	font-size: 15px;
    font-weight: 500;
	margin-top: 28px;
	border-radius: 3px;
	background-color: #558cb7;
    color: #fff;
	width: 100%;
	padding-top:16px;
	padding-bottom:15px;
	cursor: pointer;
}
#btn__login:hover{ background-color: #376f9a;}
#forgot__pass-link{
	display: block;
	margin-top:15px;
	line-height: 16px;
    color: #558cb7;
	font-weight: 500;
	font-size: 14px;
}
#analog__auth{
	margin: 0px 2px;
	margin-top:36px;
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

#lflower__textzone,#lflower__textzoneen{
	display: flex;
	flex-direction: row;
	gap: 4px;
	padding: 15px 0px;
	line-height: 18px;
	max-width: 258px;
	margin-left: 22.74%;
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