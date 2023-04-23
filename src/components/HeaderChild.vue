<template>
<div :class="{none : isFixed, header__main_wrapper : !isFixed}" >
	<div id="container">
		<div id="header__wrapper">
			<div id="header__items-left">
				<RouterLink to="/" id="header__logo">
					Хабр
				</RouterLink>
				<div id="header__hr"></div>
				<button @click="showServices" id="header__arrow">
					<img id="arrow__img"  src="../assets/arrow-tlow.png">
				</button>	
				<div id="header__become__author">
					КАК СТАТЬ АВТОРОМ
				</div>
				<div id="authorPost-post">
					<img src="../assets/emoj-money.png" id="authorPost-emoj">
					<div id="authorPost-text">
						{{ authorPost }}
					</div>
				</div>
			</div>
			<div id="topPost">
				{{ topPost }}
			</div>
		</div>
		<div v-if="arrowDirectLow" id="header__services">
			<div id="services__title">
				Все сервисы Хабра
			</div>
			<div id="slink__hr"></div>
			<a href="#" id="services__link">
				<li id="slink__title">
					Хабр
				</li>
				<li id="slink__text">
					Сообщество IT-специалистов
				</li>
			</a>
			<a href="#" id="services__link">
				<li id="slink__title">
					Q&A
				</li>
				<li id="slink__text">
					Ответы на любые вопросы об IT
				</li>
			</a>
			<a href="#" id="services__link">
				<li id="slink__title">
					Карьера
				</li>
				<li id="slink__text">
					Профессиональное развитие в IT
				</li>
			</a>
			<a href="#" id="services__link">
				<li id="slink__title">
					Фриланс
				</li>
				<li id="slink__text">
					Удаленная работа для IT-специалистов
				</li>
			</a>
		</div>
	</div>
</div>
<div @click="this.showPageSettings = false" id="page__settings-wrapper" v-if="this.showPageSettings == true">
		
	</div>
	<div v-if="this.showPageSettings == true" @click="this.showPageSettings = true" id="page__settings">
		<div id="pgset__title-wrap">
			<li v-if="this.pageSettings.lang == 'lang-Ru'" id="pgset__title">
				Настройки страницы
			</li>
			<li v-if="this.pageSettings.lang == 'lang-En'" id="pgset__title">
				Page settings
			</li>
			<div @click="this.showPageSettings = false" id="pgset__title-btn"></div>
		</div>
		<ul id="pgset__items">
			<li v-if="this.pageSettings.lang == 'lang-Ru'" id="pgset__tag-name">
				Интерфейс
			</li>
			<li v-if="this.pageSettings.lang == 'lang-En'" id="pgset__tag-name">
				Interface
			</li>
			<div id="pgset__label" for="">
				<label for="lang-Ru" id="pgset__input-wrap">
					<input type="radio" name="lang-Ru" value="lang-Ru" v-model="inputPageSettings.lang" id="pgset__input">
					<li v-if="this.pageSettings.lang == 'lang-Ru'" id="pgset__input-text">Русский</li>
					<li v-if="this.pageSettings.lang == 'lang-En'" id="pgset__input-text">Russian</li>
				</label>
				<label for="lang-En" id="pgset__input-wrap">
					<input type="radio" name="lang-En" value="lang-En" v-model="inputPageSettings.lang" id="pgset__input">
					<li id="pgset__input-text">English</li>
				</label>
			</div>
			<li id="pgset__tag-name">
				Публикации
			</li>
			<div id="pgset__label" for="publicLangRu">
				<label for="" id="pgset__input-wrap">
					<input type="checkbox" name="publicLangRu" value="publicLangRu" v-model="inputPageSettings.pubLang" id="pgset__input-chkbox">
					<li id="pgset__input-text">Русский</li>
				</label>
				<label for="publicLangEn" id="pgset__input-wrap">
					<input type="checkbox" name="publicLangEn" value="publicLangEn" v-model="inputPageSettings.pubLang"  id="pgset__input-chkbox">
					<li id="pgset__input-text">Английский</li>
				</label>
			</div>
			<li id="pgset__tag-name">
				Вид ленты
			</li>
			<div id="pgset__label" for="">
				<label for="pageStyleClassic" id="pgset__input-wrap">
					<input type="radio" name="pageStyleClassic" value="classic" v-model="inputPageSettings.style" id="pgset__input">
					<li id="pgset__input-text">Классический</li>
				</label>
				<label for="pageStyleCompact" id="pgset__input-wrap">
					<input type="radio" name="pageStyleCompact" value="compact" v-model="inputPageSettings.style" id="pgset__input">
					<li id="pgset__input-text">Компактный</li>
				</label>
			</div>
		</ul>
		<button @click="this.pageSettings = this.inputPageSettings" id="save__pgsettings">Сохранить настройки</button>
	</div>
	<div :class="{header__topics_fixed : isFixed, header__topics : !isFixed}">
		<div id="container">
			<div id="topic__wrapper">
				<div id="topic__items">
					<a href="#" id="topic__item-picked">Все потоки</a>
					<a href="#" id="topic__item">Разработка</a>
					<a href="#" id="topic__item">Администрирование</a>
					<a href="#" id="topic__item">Дизайн</a>
					<a href="#" id="topic__item">Менеджмент</a>
					<a href="#" id="topic__item">Маркетинг</a>
					<a href="#" id="topic__item">Научпоп</a>
				</div>
				<div id="topic__buttons">
					<div v-if="this.showAuth == true" id="auth__form">
						<div id="auth__form-buttons">
							<RouterLink to="/login" id="login">Войти</RouterLink>
							<RouterLink to="/registration"  id="registration">Регистрация</RouterLink>
						</div>
						<div id="auth__rights">
							<a href="#" id="rights__link">Как стать автором</a>
							<a href="#" id="rights__link">Правила сайта</a>
						</div>
						<div id="auth__settings">
							<button @click="this.showPageSettings = true" href="#" id="settings__link">
								<div id="slink__icon"></div>
								<li id="slink__text">Язык, лента</li>
							</button>
						</div>
					</div>
					<a href="#" id="topic__search"></a>
					<button @click="this.showAuth = !this.showAuth" id="show-auth__button"></button>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
  
import data from '@/data/data.js'

export default{
	data(){
		return {
			authorPost : 'Зарплаты айтишников',
			topPost : 'Подкаст про дзен между разработкой и продуктом',
			arrowDirectLow : false ,
			showAuth : false,
			showPageSettings : false,
			pageSettingsLang: [],
			publicationsLang : [],
			pageStyle : [],
			inputPageSettings : {
				lang : [],
				pubLang : [],
				style : [],
			},
			pageSettings : data.pageSettings,
			updatePageSettings : false,
			isFixed : false,
		}
	},
	beforeMount(){
		window.addEventListener('scroll', () => {
			let position = window.pageYOffset
			if(position > 70){
				this.isFixed = true
				console.log(position)
			}
			if(position == 0){
				this.isFixed = false
				console.log(position)
			}
		})
	}
}

</script>

<style scoped>
*{
	transition: .2s
}

button{
	border: 0;
}
#container{
	max-width: 1105px; 
	margin:0 auto;
}

.header__main_wrapper{
	height: 48px;
	transition:  2s;
	cursor: pointer;
	color:#fff;
	background-color: #303b44;
}
.none{
	display: none;
}

#header__wrapper{ 
	display: flex; 
	justify-content: space-between; 
	padding-left:8px;
}
#header__logo{
	color: #fff;
	padding: 10px 0 ;
	letter-spacing: 1.55px;
	font-size:23px;
	font-weight: 600;
}
#header__items-left{
	max-width:600px;
	display: flex;
	justify-content: flex-start;
}
#header__hr{
	border-left: 1px solid hsla(0,0%,100%,.24);
    margin: 10px 10px 10px 8px;
    padding-left: 4px;
}
#header__become__author{
	margin: auto 0;
	height: 26px;
	border: 1px solid #6e767c;
    border-radius: 3px;
    box-sizing: border-box;
    color: #fff;
    font-size: .75rem;
    letter-spacing: .0125rem;
    line-height: 100%;
    margin-left: 8px;
    padding: 6px 8px;
	padding-right: 7px;
    text-decoration: none;
    text-transform: uppercase;
}
#header__arrow{
	margin-top:-12px;
	background: none;
	border:0;
	margin:auto 0;
	margin-left:-5px;
	width: 17px;
	height: 11px;
}
#arrow__img{
	cursor: pointer;
	width: 13px;
	height: 9px;
}
#authorPost-post{
	width: 185px;
	margin: auto 0;
	margin-left:15px;
	height: 26px;
	display: flex;
	flex-direction: row;
	gap:8px;
}
#authorPost-post:hover{ color: #af8a01; }
#authorPost-text,#topPost{
	font-weight: 100;
	font-size: 14px;
	margin: auto 0;
}
#authorPost-emoj{
	margin-left:3%;
	margin-top:2px;
	width: 20px;
	height: 20px;
}
#topPost{margin-right:5px; color: rgb(255, 162, 153);}

#header__services{
	padding:0 24px;
	width: 252.5px;
	height: 355px;
	border-radius: 4px;
    box-shadow: 0 0 12px rgb(0 0 0 / 16%);
	position: absolute;
	z-index: 71;
	background-color: #fff;
}
#services__title{
	font-size: 14px;
	margin-bottom:2px;
	padding: 16px 0;
	color: #000;	
}
#services__link{ padding: 12px 24px; }
#slink__hr{
	height: 1px;
	width:252px;
	background-color:#dedede;
}
#slink__title{
	font-weight: 300;
	font-size: 22px;
	color:#333;
}
#slink__text{
    line-height: 1.5;
	font-size: 14px;
	color:#909090;
}

#page__settings-wrapper{
	margin-top:-48px;
	width: 100%;
	height: 100%;
	background-color: #33333341;
	position: fixed;
	z-index: 200;
}
#page__settings{
	position: fixed;
	z-index: 201;
	margin-top:7.85%;
	margin-left: 42.05%;
	margin-right:42.2%;
	width: 320px;
	height: 567px;
	background-color: #fff;
}
#pgset__title{
	color: #333;
	font-size: .9375rem;
	font-weight: 500;
	line-height: 3.5rem;
	padding: 0 16px;
}
#pgset__title-wrap{
	display: flex;
	justify-content: space-between;
}
#pgset__title-btn{
	cursor: pointer;
	margin:22.5px;
	width:12px;
	height: 12px;
	background-color: #beccd0;
	border-radius: 3px;
}
#pgset__items{
	margin: 0 0 24px;
}
#pgset__tag-name{
	background-color: #ebf1f3;
	display: block;
	line-height: 2.5rem;
	padding: 0 16px;
	color: #838a92;
	font-weight: 300;
	font-size: .875rem;
}
#pgset__label{
	display: flex;
	flex-direction: column;
	gap: 26px;	
	padding: 19px 16px 25px;
}
#pgset__input-wrap{
	gap: 8px;
	display: flex;
	justify-content: flex-start;
}
#pgset__input-text{
	margin-top:2px;
	cursor: pointer;
	font-size: .875rem;
	line-height: 1rem;
}
#pgset__input:checked{
	appearance: none;
	border-radius: 50%;
	width: 16px;
	height: 16px;
	border: 5px solid #548eaa;
}
#pgset__input{
	border-radius: 50%;
	appearance: none;
	border: 1px solid #acb8bf;
	width: 16px;
	height: 16px;
}
#pgset__input-chkbox{
	border: 1px solid #548eaa;
	appearance: auto;
	color: #333;
}
#pgset__input-chkbox{
	appearance: auto;
	width: 16px;
	height: 16px;
	border: 1px solid #548eaa;
}
#save__pgsettings{
	margin:0 16px;
	margin-top:-45px;
	border-color: #548eaa;
	background-color: #548eaa;
	color: #fff;
	padding :12px 77px;
	border-radius: 3px;
	font-size: .8125rem;
	transition: all .3s;
}
#save__pgsettings:hover {
	border-color: #39728e;
	background-color: #39728e;
	color: #fff;
}

.header__topics,.header__topics_fixed{
	height: 56px;
	background-color: #fff;
	margin-bottom:12px;
	border-bottom: 1px solid #dedede;
}
.header__topics_fixed{
	width: 100%;
	position: fixed;
	z-index: 75;
}
#topic__items{
	display: flex;
	flex-direction: row;
	width: 80%;
	gap:20px;
}
#topic__item-picked,#topic__item{
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
	margin:20px 0px;
	font-size: .875rem;
	line-height: 1rem;
}
#topic__item-picked{ color: #333; }
#topic__item{ color: #909090; }
#topic__item:hover,#topic__item-picked:hover{ color: #5096b1; }
#main__item-2{
	display: flex;
	flex-direction: column;
	gap:12px;
}
#topic__wrapper{
	margin:0px 5px;
	height: 57px;
	display: flex;
	flex-direction: row;
}
#topic__buttons{
	margin-left:auto;
	display: flex;
	flex-direction: row;
	gap: 16px;
}
#topic__search,#show-auth__button{
	margin:15px 0px;
	border-radius: 4px;
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
	display: block;
	width:24px;
	height: 24px;
	background-color: #929ca5;
}
#topic__search:hover,#show-auth__button:hover{
	background-color: #65a3be;;
}

#auth__form{
	margin-left:-12.41%;
	width: 300px;
	margin-top:52px;
	position: fixed;
	z-index: 100;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 12px rgb(0 0 0 / 16%);
	color: #333;
}
#auth__form-buttons{    
	border-bottom: 1px solid #eaeaea;
	padding: 20px;
	display: flex;
	flex-direction: row;
	gap: 12px;
}
#registration,#login{
	padding: 8px 16px;
	border: 1px solid #548eaa;
	border-radius: 3px;
	font-size: .8125rem;
	line-height: 1rem;
}
#login{
	color: #548eaa;
}
#registration{
	color: #fff;
	background-color:#548eaa; 
}
#login:hover{
	color: #487284;
}
#registration:hover{
	background-color: #76a5bb;
	border: 1px solid #76a5bb;
}

#auth__rights{
	padding: 12px 0px;
	display: flex;
	flex-direction: column;
}
#rights__link{
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
	align-items: center;
	color: #333;
	cursor: pointer;
	display: flex;
	font-size: 1rem;
	font-weight: 500;
	height: 48px;
	line-height: 3rem;
	padding: 0px 20px;
}
#rights__link:hover,#settings__link:hover{
	background-color: #edf5f9;;
}

#auth__settings{
	padding: 8px 0px 12px;
	border-top: 1px solid #eaeaea;
}
#settings__link{
	width: 100%;
	background-color: #fff;
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
	align-items: center;
	color: #333;
	cursor: pointer;
	display: flex;
	font-size: 1rem;
	font-weight: 500;
	height: 48px;
	line-height: 3rem;
	padding: 0px 20px;
	display: flex;
	flex-direction: row;
	gap: 8px;
}
#slink__icon{
	width: 20px;
	height: 20px;
	background-color: #838a92;
	border-radius: 3px;
}
#slink__text{
	font-size: 1rem;
	font-weight: 500;
}
</style>