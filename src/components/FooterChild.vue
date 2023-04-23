<template>


	<div id="footer__section-light">
		<div id="container">
			<div id="footer-light__wrapper">
				<ul id="light__item">
					<li id="light__title">
						Ваш аккаунт
					</li>
					<div id="light__hr"></div>
					<a href="#" id="light__text">
						Войти
					</a><br>
					<a href="#" id="light__text">
						Регистрация
					</a>
				</ul>
				<ul id="light__item">
					<li id="light__title">
						Разделы
					</li>
					<div id="light__hr"></div>
					<a href="#" id="light__text">
						Публикации
					</a><br>
					<a href="#" id="light__text">
							Новости
					</a><br>
					<a href="#" id="light__text">
						Хабы
					</a><br>
					<a href="#" id="light__text">
						Компании
					</a><br>
					<a href="#" id="light__text">
						Авторы
					</a><br>
					<a href="#" id="light__text">
						Песочница
					</a>
				</ul>
				<ul id="light__item">
					<li id="light__title">
						Информация
					</li>
					<div id="light__hr"></div>
					<a href="#" id="light__text">
						Устройство сайта
					</a><br>
					<a href="#" id="light__text">
						Для авторов
					</a><br>
					<a href="#" id="light__text">
						Для компаний
					</a><br>
					<a href="#" id="light__text">
						Документы
					</a><br>
					<a href="#" id="light__text">
						Соглашение
					</a><br>
					<a href="#" id="light__text">
						Конфиденциальность
					</a><br>
				</ul>
				<ul id="light__item">
					<li id="light__title">
						Услуги
					</li>
					<div id="light__hr"></div>
					<a href="#" id="light__text">
						Корпоративный блог
					</a><br>
					<a href="#" id="light__text">
						Медийная реклама
					</a><br>
					<a href="#" id="light__text">
						Нативные проекты
					</a><br>
					<a href="#" id="light__text">
						Образовательные программы
					</a><br>
					<a href="#" id="light__text">
						Стартапам
					</a><br>
					<a href="#" id="light__text">
						Мегапроекты
					</a>
				</ul>
			</div>
		</div>
	</div>
	<div id="footer__section-dark">
		<div id="container">
			<div id="footer__wrapper">
				<ul id="dark__sect-items">
					<li href="#" id="dark__date">
						© 2006–2023, Habr
					</li>
					<a href="#" id="dark__item">
						Вернуться на старую версию
					</a>
					<a href="#" id="dark__item">
						Техническая поддержка
					</a>
					<a href="#" id="dark__item">
						Настройка языка
					</a>
				</ul>
				<ul id="footer__icons">
					<a href="#" id="footer__icon-1"></a>
					<a href="#" id="footer__icon-2"></a>
					<a href="#" id="footer__icon-3"></a>
					<a href="#" id="footer__icon-4"></a>
					<a href="#" id="footer__icon-5"></a>
					<a href="#" id="footer__icon-6"></a>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>





</script>

<style scoped>
#container{
	max-width: 1096px;
	margin: 0 auto
}
#footer__wrapper{
	display: flex;
	justify-content: space-between;
}
#footer__section-light{
	background-color: #2c3135;
	height: 288px;
}
#footer-light__wrapper{
	margin-left: 5px;
	display: flex;
	justify-content: flex-start;
	gap: 32px;
}
#light__item{
	color:#fff;
	height: 220px;
	width:242px;
	margin-top:33px;
}
#light__title{
	font-weight: 500;
	font-size: 14px;
	margin-bottom:16px
}
#light__text{
	color:#fff;
	transition: .2s;
	font-size: 13px;
	display: block;
	margin-top:-6px;
}
#light__text:hover{
	color: #487284;
}
#light__hr{
	margin-bottom:29px;
	width:242px;
	height: 1px;
	background-color:  hsla(0,0%,100%,.24);
}

#footer__section-dark{
	font-size: 14px;
	background-color: #1D2023;
	height: 48px;
}
#dark__sect-items{
	padding:16px 0px 0px 4px;
	width: 825px;
	display: flex;
	justify-content: space-between;
}
#dark__date{
	color : #BDCDD6;
}
#dark__item{
	letter-spacing: .35px;
	font-weight: 600;
	color :#50b5e7
}
#footer__icons{
	padding-right:4px;
	padding-top:12px;
	display: flex;
	justify-content: space-between;
	width: 204px;
	height: 24px;
	margin: auto 0 ;
}
#footer__icon-1{
	border-radius: 2px;
	width: 24px;
	height: 24px;
	background-image: url('../assets/facebook.png');
	background-size:cover;
}
#footer__icon-2{
	border-radius: 2px;
	width: 24px;
	height: 24px;
	background-image: url('../assets/twitter.png');
	background-size:cover;
}
#footer__icon-3{
	border-radius: 2px;
	width: 24px;
	height: 24px;
	background-image: url('../assets/vk.png');
	background-size:cover;
}
#footer__icon-4{
	border-radius: 2px;
	width: 24px;
	height: 24px;
	background-image: url('../assets/telega.png');
	background-size:cover;
}
#footer__icon-5{
	border-radius: 2px;
	width: 24px;
	height: 24px;
	background-image: url('../assets/youtube.png');
	background-size:cover;
}
#footer__icon-6{
	border-radius: 2px;
	width: 24px;
	height: 24px;
	background-image: url('../assets/dzen.png');
	background-size:cover;
}
</style>