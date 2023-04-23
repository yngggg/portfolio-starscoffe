<template>
	<div id="reklama">
		Реклама
	</div>
	<div id="top__blogs">
		<div id="blogs__title">
			ЛУЧШИЕ БЛОГИ
		</div>
		<div id="blogs__hr"></div>
		<div id="blog__items">
			<div v-for="blog in blogsList" :key="blog.rating" id="blog__item">
				<ul id="blog__logo">
					<div id="blog__icon"></div>
					<li id="blog__title">
						{{	blog.title	}}
					</li>
				</ul>
				<li id="blog__rating">
					{{	blog.rating	}}
				</li>
			</div>
		</div>
		<div id="footer__hr"></div>
		<a href="#" id="blogs__footer">
			Все компании
		</a>
	</div>
	<div id="top__blogs">
		<div id="blogs__title">
			ЧИТАЮТ СЕЙЧАС
		</div>
		<div id="blogs__hr"></div>
		<div v-for="topPost in topPosts" :key="topPost.id" id="top-post__items">
			<div id="top-post__item">
				<li id="top-post__title">
					{{ topPost.title }}
				</li>
				<div id="top-post__rating">
					<div id="tp-rating__item">
						<ul id="tp-rating__double">
							<li id="tp-rating__icon"></li>
							<li id="tp-rating__value">
								{{ topPost.views }}
							</li>
						</ul>
					</div>
					<ul id="tp-rating__item">
						<li id="tp-rating__icon"></li>
						<ul id="tp-rating__double">
							<li id="tp-rating__value">
								{{ topPost.comments }}
							</li>
							<li id="tp-rating__value-new">
								{{ topPost.newComments }}
							</li>
						</ul>
					</ul>
				</div>
			</div>
			<div id="blogs__hr"></div>
		</div>
		<div id="megapost">
			<div id="megapost__title">
				{{ megaPost.title }}
			</div>	
			<div v-if="megaPost.status == 'Мегатест'" id="megapost__status-megatest">
				{{ megaPost.status }}
			</div>
		</div>
	</div>
	<div id="reklama">
		Реклама
	</div>
</template>

<script>

export default{
	data(){
		return{
			blogsList : [
				{title : 'RUVDS.com', rating : 1996.29, posts : ''},
				{title : 'Selectel', rating : 1806.82, posts : ''},
				{title : 'Timeweb Cloud', rating : 1719.7, posts : ''},
				{title : 'OTUS', rating : 908.63, posts : ''},
				{title : 'Хабр', rating : 780.48, posts : ''},
				{title : 'VK', rating : 778.86, posts : ''},
				{title : 'First VD S', rating : 484.39, posts : ''},
				{title : 'Dodo Engineering', rating : 410.17, posts : ''},
				{title : 'Хабр Карьера', rating : 400.1, posts : ''},
				{title : 'Open Data Science', rating : 381.55, posts : ''},
			],
			topPosts : [
				{id : new Date(), title : 'Как я завалил первый тех. собес на позицию Junior QA Engineer', views : '4.5K', comments : 15, newComments : '+15'},
				{id : new Date(), title : 'Фотография, сгенерированная ИИ, обманула судей и выиграла фотоконкурс', views : '11K', comments : 78, newComments : '+78'},
				{id : new Date(), title : 'Как стать джуном, которого берут на работу (frontend-разработка)', views : '18K', comments : 47, newComments : '+47'},
				{id : new Date(), title : 'В чем отличие Linux от Windows и почему я перестал пользоваться продуктами Microsoft', views : '14K', comments : 224, newComments : '+224'},
				{id : new Date(), title : 'Apple ограничит использование порта USB-C в iPhone 15', views : '14K', comments : 126, newComments : '+126'},
			],
			megaPost : {
				title : 'Вместо собеседования: тест для любителей React',
				status : 'Мегатест'
			}
		}
	}
}

</script>

<style>

#reklama{
	text-align: center;
	padding: 225px 96.5px;
	background: linear-gradient(#64dde6, #e59491);;
	width: 107px;
	height: 30px;
	color:#302d35;
	font-weight: 700;
	font-size: 20px;
}


#top__blogs{
	background-color: #ffffff;
	padding:24px 20px;
}
#blogs__title{
	color: #505c66;
	font-weight: 600;
	font-size: .8125rem;
    letter-spacing: .0625rem;
    line-height: 1.25rem;
}
#blogs__hr,#footer__hr{
	width: 100%;
	height: 1px;
	background-color: #d5dddf;
}
#blogs__hr{
	margin-top:12px;
}
#blog__items{
	margin: 24px 0;
	gap: 24px;
	display: flex;
	flex-direction: column;
}
#blog__logo{
	display: flex;
	flex-direction: row;
	gap: 12px;
}
#blog__icon{
	width: 36px;
	height: 36px;
	border-radius: 3px;
	background: linear-gradient(#e66d64, #91b3e5);
}
#blog__item{ display: flex; justify-content: space-between; }
#blog__rating,#blog__title{
	margin:auto 0;
	height: 18px;
	font-size: .8125rem;
    font-weight: 700;
    line-height: 1.125rem;
}
#blog__rating{ color: #cd66cd; }
#blog__title{ color: #333; }
#blogs__footer{
	transition: opacity .3s;
	color: #548eaa;
    font-size: .75rem;
    line-height: .875rem;
}
#blogs__footer:hover {
    color: #487284;
}
#footer__hr{
	margin-bottom:16px;
}
#tp-rating__item{
	display: flex;
	flex-direction: row;
	gap: 8px; 
}
#top-post__rating{
	display: flex;
	flex-direction: row;
	gap: 24px;
}
#tp-rating__icon{
	background-color: #bdcdd6;
    width: 20px;
    height: 20px;
    border-radius: 4px;
}
#top-post__item{
	display: flex;
	flex-direction: column;
	gap:12px;
	margin:23px 0px;
}
#top-post__title{
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
	font-size: .875rem;
    font-weight: 600;
    line-height: 1.3125rem;
	color: #333;
}
#top-post__title:hover{
    color: #487284;
}
#tp-rating__double{
	display: flex;
	flex-direction: row;
	gap: 5px;
}
#tp-rating__value,#tp-rating__value-new{
    font-size: .8125rem;
    font-weight: 700;
    line-height: 1;
	margin-top:3.8px;
}
#tp-rating__value{ color: #798e98; }
#tp-rating__value-new{ color: #7aa600; }

#megapost{
	padding-top:18px;
}
#megapost__title{
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
	font-size: .875rem;
    font-weight: 600;
    line-height: 1.3125rem;
	color: #333;
}
#megapost__title:hover{
    color: #487284;
}
#megapost__status-megatest{
	display: inline-flex;
    align-items: center;
    margin-top: 8px;
    padding: 5px 10px;
    border: 1px solid #b0b0e2;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: .75rem;
    line-height: 1rem;
    color: #6667a2;
}


</style>