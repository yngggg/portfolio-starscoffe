<template>
	
<div id="container">
	<div id="direction__wrapper">
		<div id="direction__title">
			Все потоки
		</div>
		<div id="direction__items">
			<ul id="direction__item">
				<a href="#" id="dir__item-title-picked">
					СТАТЬИ
				</a>
				<a href="#" id="dir__item-value">
					+55
				</a>
			</ul>	
			<ul v-for="direction in directions"  v-bind:key="direction.id" id="direction__item">
				<a href="#" id="dir__item-title">
					{{direction.title}}
				</a>
				<a href="#" id="dir__item-value">
					{{direction.rating}}
				</a>
			</ul>	
		</div>
		<div id="direction__hr-wrapper">
			<div id="direction__hr-start"></div>
			<div id="direction__hr-picked"></div>
			<div id="direction__hr-end"></div>
		</div>
		<div id="direction__items-lower">
			<li id="buttons">
				<button @click="this.isSelected = !this.isSelected" id="select__btn">
					Все подряд
				</button>
			</li>
		</div>
	</div>
</div>
<div v-for="post in postList" :key="post.id">
	<div id="post__list-wrapper" v-if="post.id <= 1">
		<div v-if="showMsgNotAuth" id="msgnot__auth">
			Для совершения действия требуется авторизация
		</div>
		<div id="post__header">
			<div id="author__icon"></div>
			<div id="author__name">
				{{ post.author }}
			</div>
			<div id="publication__date">
				{{ post.date }}
			</div>
		</div>
		<div id="post__title">
			{{ post.title }}
		</div>
		<div id="settings">
			<ul id="level">
				<div id="level__icon-easy"></div>
				<li v-if="post.level == 'Простой'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Средний'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Сложный'" id="level__text-easy">
					{{ post.level }}
				</li>
			</ul>
			<ul id="time__read">
				<div id="time-read__icon"></div>
				<li id="time-read__text">
					{{ post.timeRead }}
				</li>
			</ul>
			<ul id="views">
				<div id="views__icon"></div>
				<li id="views__text">
					{{ post.views }}
				</li>
			</ul>
		</div>
		<ul id="topic">
			{{ post.thopic }}
		</ul>
		<ul v-if="post.status=='Туториал'" id="status-tutorial">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Перевод'" id="status-translate">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Из песочницы'" id="status-sandbox">
			{{ post.status }}
		</ul>
		<img v-if="post.image !== ''" :src="post.image" id="main__image">
		<ul id="post__body">
			<li  id="post__textzone">
				{{ post.body.text1 }}
			</li>
			<br>
			<li v-if="post.body.text2" id="post__textzone">
				{{ post.body.text2 }}
			</li>
			<a href="#" id="post__link">{{ post.link_text }}</a>
		</ul>
		<div id="ratings">
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if=" post.rating>0" id="rating__value-pos" >
					+{{ post.rating }}
				</button>
				<button v-if=" post.rating<0" id="rating__value-neg" >
					{{ post.rating }}
				</button>
			</ul>
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.favorite }}
				</button>
				<a v-if="!auth" href="#" id="rating__value">
					
				</a>
			</ul>
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.comments }}
				</button>
			</ul>
		</div>
	</div>
</div>
<NewsList/>
<div v-for="post in postList" :key="post.id">
	<div id="post__list-wrapper" v-if="post.id > 1 && post.id <=4">
		<div v-if="showMsgNotAuth" id="msgnot__auth">
			Для совершения действия требуется авторизация
		</div>
		<div id="post__header">
			<div id="author__icon"></div>
			<div id="author__name">
				{{ post.author }}
			</div>
			<div id="publication__date">
				{{ post.date }}
			</div>
		</div>
		<div id="post__title">
			{{ post.title }}
		</div>
		<div id="settings">
			<ul id="level">
				<div id="level__icon-easy"></div>
				<li v-if="post.level == 'Простой'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Средний'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Сложный'" id="level__text-easy">
					{{ post.level }}
				</li>
			</ul>
			<ul id="time__read">
				<div id="time-read__icon"></div>
				<li id="time-read__text">
					{{ post.timeRead }}
				</li>
			</ul>
			<ul id="views">
				<div id="views__icon"></div>
				<li id="views__text">
					{{ post.views }}
				</li>
			</ul>
		</div>
		<ul id="topic">
			{{ post.thopic }}
		</ul>
		<ul v-if="post.status=='Туториал'" id="status-tutorial">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Перевод'" id="status-translate">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Из песочницы'" id="status-sandbox">
			{{ post.status }}
		</ul>
		<img v-if="post.image !== ''" :src="post.image" id="main__image">
		<ul id="post__body">
			<li  id="post__textzone">
				{{ post.body.text1 }}
			</li>
			<br>
			<li v-if="post.body.text2" id="post__textzone">
				{{ post.body.text2 }}
			</li>
			<a href="#" id="post__link">{{ post.link_text }}</a>
		</ul>
		<div id="ratings">
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if=" post.rating>0" id="rating__value-pos" >
					+{{ post.rating }}
				</button>
				<button v-if=" post.rating<0" id="rating__value-neg" >
					{{ post.rating }}
				</button>
			</ul>
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.favorite }}
				</button>
				<a v-if="!auth" href="#" id="rating__value">
					
				</a>
			</ul>
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.comments }}
				</button>
			</ul>
		</div>
	</div>
</div>
<StoriesList/>
<div v-for="post in postList" :key="post.id">
	<div id="post__list-wrapper" v-if="post.id > 4 && post.id <=7">
		<div v-if="showMsgNotAuth" id="msgnot__auth">
			Для совершения действия требуется авторизация
		</div>
		<div id="post__header">
			<div id="author__icon"></div>
			<div id="author__name">
				{{ post.author }}
			</div>
			<div id="publication__date">
				{{ post.date }}
			</div>
		</div>
		<div id="post__title">
			{{ post.title }}
		</div>
		<div id="settings">
			<ul id="level">
				<div id="level__icon-easy"></div>
				<li v-if="post.level == 'Простой'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Средний'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Сложный'" id="level__text-easy">
					{{ post.level }}
				</li>
			</ul>
			<ul id="time__read">
				<div id="time-read__icon"></div>
				<li id="time-read__text">
					{{ post.timeRead }}
				</li>
			</ul>
			<ul id="views">
				<div id="views__icon"></div>
				<li id="views__text">
					{{ post.views }}
				</li>
			</ul>
		</div>
		<ul id="topic">
			{{ post.thopic }}
		</ul>
		<ul v-if="post.status=='Туториал'" id="status-tutorial">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Перевод'" id="status-translate">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Из песочницы'" id="status-sandbox">
			{{ post.status }}
		</ul>
		<img v-if="post.image !== ''" :src="post.image" id="main__image">
		<ul id="post__body">
			<li  id="post__textzone">
				{{ post.body.text1 }}
			</li>
			<br>
			<li v-if="post.body.text2" id="post__textzone">
				{{ post.body.text2 }}
			</li>
			<a href="#" id="post__link">{{ post.link_text }}</a>
		</ul>
		<div id="ratings">
			<ul id="rating__item">
				<div  id="rating__icon"></div>
				<button v-if=" post.rating>0" id="rating__value-pos" >
					+{{ post.rating }}
				</button>
				<button v-if=" post.rating<0" id="rating__value-neg" >
					{{ post.rating }}
				</button>
			</ul>
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.favorite }}
				</button>
				<a v-if="!auth" href="#" id="rating__value">
					
				</a>
			</ul>
			<ul id="rating__item">
				<div id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.comments }}
				</button>
			</ul>
		</div>
	</div>
</div>
<OfftopList/>
<div v-for="post in postList" :key="post.id">
	<div id="post__list-wrapper" v-if="post.id > 7 && post.id <=10">
		<div v-if="showMsgNotAuth" id="msgnot__auth">
			Для совершения действия требуется авторизация
		</div>
		<div id="post__header">
			<div id="author__icon"></div>
			<div id="author__name">
				{{ post.author }}
			</div>
			<div id="publication__date">
				{{ post.date }}
			</div>
		</div>
		<div id="post__title">
			{{ post.title }}
		</div>
		<div id="settings">
			<ul id="level">
				<div id="level__icon-easy"></div>
				<li v-if="post.level == 'Простой'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Средний'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Сложный'" id="level__text-easy">
					{{ post.level }}
				</li>
			</ul>
			<ul id="time__read">
				<div id="time-read__icon"></div>
				<li id="time-read__text">
					{{ post.timeRead }}
				</li>
			</ul>
			<ul id="views">
				<div id="views__icon"></div>
				<li id="views__text">
					{{ post.views }}
				</li>
			</ul>
		</div>
		<ul id="topic">
			{{ post.thopic }}
		</ul>
		<ul v-if="post.status=='Туториал'" id="status-tutorial">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Перевод'" id="status-translate">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Из песочницы'" id="status-sandbox">
			{{ post.status }}
		</ul>
		<img v-if="post.image !== ''" :src="post.image" id="main__image">
		<ul id="post__body">
			<li  id="post__textzone">
				{{ post.body.text1 }}
			</li>
			<br>
			<li v-if="post.body.text2" id="post__textzone">
				{{ post.body.text2 }}
			</li>
			<a href="#" id="post__link">{{ post.link_text }}</a>
		</ul>
		<div id="ratings">
			<ul id="rating__item">
				<div  id="rating__icon"></div>
				<button v-if=" post.rating>0" id="rating__value-pos" >
					+{{ post.rating }}
				</button>
				<button v-if=" post.rating<0" id="rating__value-neg" >
					{{ post.rating }}
				</button>
			</ul>
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.favorite }}
				</button>
				<a v-if="!auth" href="#" id="rating__value">
					
				</a>
			</ul>
			<ul id="rating__item">
				<div id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.comments }}
				</button>
			</ul>
		</div>
	</div>
</div>
<OrdersList v-if="this.showStatistic == 'заказы'"/>
<QuestionsList v-if="this.showStatistic == 'вопросы'"/>
<StatisticsList v-else/>
<div v-for="post in postList" :key="post.id">
	<div id="post__list-wrapper" v-if="post.id > 10 && post.id <=13">
		<div v-if="showMsgNotAuth" id="msgnot__auth">
			Для совершения действия требуется авторизация
		</div>
		<div id="post__header">
			<div id="author__icon"></div>
			<div id="author__name">
				{{ post.author }}
			</div>
			<div id="publication__date">
				{{ post.date }}
			</div>
		</div>
		<div id="post__title">
			{{ post.title }}
		</div>
		<div id="settings">
			<ul id="level">
				<div id="level__icon-easy"></div>
				<li v-if="post.level == 'Простой'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Средний'" id="level__text-easy">
					{{ post.level }}
				</li>
				<li v-if="post.level == 'Сложный'" id="level__text-easy">
					{{ post.level }}
				</li>
			</ul>
			<ul id="time__read">
				<div id="time-read__icon"></div>
				<li id="time-read__text">
					{{ post.timeRead }}
				</li>
			</ul>
			<ul id="views">
				<div id="views__icon"></div>
				<li id="views__text">
					{{ post.views }}
				</li>
			</ul>
		</div>
		<ul id="topic">
			{{ post.thopic }}
		</ul>
		<ul v-if="post.status=='Туториал'" id="status-tutorial">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Перевод'" id="status-translate">
			{{ post.status }}
		</ul>
		<ul v-if="post.status=='Из песочницы'" id="status-sandbox">
			{{ post.status }}
		</ul>
		<img v-if="post.image !== ''" :src="post.image" id="main__image">
		<ul id="post__body">
			<li  id="post__textzone">
				{{ post.body.text1 }}
			</li>
			<br>
			<li v-if="post.body.text2" id="post__textzone">
				{{ post.body.text2 }}
			</li>
			<a href="#" id="post__link">{{ post.link_text }}</a>
		</ul>
		<div id="ratings">
			<ul id="rating__item">
				<div  id="rating__icon"></div>
				<button v-if=" post.rating>0" id="rating__value-pos" >
					+{{ post.rating }}
				</button>
				<button v-if=" post.rating<0" id="rating__value-neg" >
					{{ post.rating }}
				</button>
			</ul>
			<ul id="rating__item">
				<div src="" id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.favorite }}
				</button>
				<a v-if="!auth" href="#" id="rating__value">
					
				</a>
			</ul>
			<ul id="rating__item">
				<div id="rating__icon"></div>
				<button v-if="!auth" @click="this.showMsgNotAuth = !this.showMsgNotAuth" id="rating__value">
					{{ post.comments }}
				</button>
			</ul>
		</div>
	</div>
</div>
<div id="lower__nav">
	<div id="lnav-button">Туда</div>
	<div id="lnav-pages">1/1</div>
	<div id="lnav-button">Сюда</div>
</div>

</template>
<script>
 
import data from '@/data/data.js'
import NewsList from '@/components/NewsList.vue'
import StoriesList from '@/components/StoriesList.vue'
import OfftopList from '@/components/OfftopList.vue'
import OrdersList from '@/components/OrdersList.vue'
import StatisticsList from '@/components/StatisticsList.vue'
import QuestionsList from '@/components/QuestionsList.vue'

export default{
	components : {
		StatisticsList,
		OrdersList,
		OfftopList,
		NewsList,
		StoriesList,
		QuestionsList
	},
	data(){
		return{
			showMsgNotAuth : false,
			auth: false,
			postList : data.postList,
			directions : [
				{id: 2, title : 'НОВОСТИ', rating : '+71'},
				{id: 3, title : 'ХАБЫ', rating : ''},
				{id: 4, title : 'АВТОРЫ', rating : ''},
				{id: 5, title : 'КОМПАНИИ', rating : ''},
			],
			isSelected : false,
			showFilter: true, filterText1  : 'Все', filterText2 : '≥0', filterText3  : '≥10', filterText4  : '≥25', filterText5 : '≥50',
			showHund : true,
			isActive:false,
			isActive1:false,
			isActive2:false,
			showStatistic : 'вопросы',//вопросы, статистика, заказы
		}
	},
	
}
</script>
<style scoped>


.active{
	background-color: #548eaa;
	transition: .2s;
	cursor: pointer;
	border-radius: 3px;
	padding:8px 9px;
	font-size: 12px;
	color: #fff;
	border: 1px solid #548eaa;
}
button{
	background-color: #fff;
	border: 0;
}
#container{
	max-width: 1105px; 
	margin:0 auto;
}

#direction__wrapper{
	margin-bottom:12px;
	margin-left:5px;
	max-width: 780px;
	height: 152px;
	background-color: #fff;
}
#direction__title{
	padding: 14px 20px;
	color:#000;
	font-size: 20px;
    font-weight: 700;
	line-height: 1.75rem;
}
#direction__items{
	padding: 14px 20px;
	padding-bottom:18px;
	display: flex;
	flex-direction: row;
	gap:20px;
}
#direction__item{
	-webkit-font-smoothing: antialiased;
    font-family: Fira Sans,sans-serif;
    color: inherit;
    font-size: .875rem;
	font-weight: 500;
    letter-spacing: .05rem;
    line-height: 1rem;
	display: flex;
	flex-direction: row;
	gap:6px;
}	
#dir__item-title-picked{ cursor: pointer; color: #4d80aa; }
#dir__item-title{ cursor: pointer; color:#6f7577; }
#dir__item-title:hover{ color: #4d80aa; }
#dir__item-value{ cursor: pointer; color: #7aa600; }
#direction__hr-wrapper{
	width: 100%;
	display: flex;
	justify-content: flex-start;
}
#direction__hr-start{
	width: 19px;
	height: 1px;
	background-color: #d5dddf;
}
#direction__hr-picked{
	margin-top:-1px;
	width: 92px;
	background-color:#5695c9;
	height: 2px;
}
#direction__hr-end{
	width: 670px;
	height: 1px;
	background-color: #d5dddf;
}
#buttons{ padding: 14px 21px 15px; padding-top:13px;}

#msgnot__auth{
	top:20px;
	left:38%;
	right:auto;
	background-color: #f2dede;
	color: #a94442;
	border: 1px solid #f2dede;
	border-radius: 5px;
	display: flex;
	position: fixed;
	z-index: 100;
	padding:10px 20px;
}

#post__list-wrapper{
	padding:16px 20px;
	margin-bottom:12px;
	max-width:740px ;
	margin-left:5px;
	background: #fff;

}
#main__image{ width: 740px; height: 417px; }
#post__header{
	margin-bottom: 8px;
	display: flex;
	flex-direction: row;
	gap: 7.5px;
}
#author__icon{
	border-radius: 2.5px;
	width: 24px;
	height: 24px;
	background: linear-gradient(#e66465, #9198e5);
}
#author__name,#publication__date{
	margin-top:3px;
	font-size: 15px;
}
#author__name{ font-weight: 700; }
#publication__date{ font-size: 300; }
#post__title{
	margin-bottom: 16px;
	font-size: 20px;
	font-weight: 700;
}
#settings{
	display: flex;
	flex-direction: row;
	gap: 16px;
	margin-bottom:16px;
}

#level,#time__read,#views{
	display: flex;
	flex-direction: row;
	gap: 5.5px;
}
#level__text-easy{ font-size: 13px; color: #00ff15; }
#level__text-medium{ font-size: 13px; color: #49addf;}
#level__text-hard{ font-size: 13px; color: #ef6c82;}
#level__icon-easy{
	border-radius: 2.5px;
	width: 16px;
	height: 16px;
	background-color: #47c270;
}
#level__icon-medium{
	border-radius: 2.5px;
	width: 16px;
	height: 16px;
	background-color: #49addf;
}
#level__icon-hard{
	border-radius: 2.5px;
	width: 16px;
	height: 16px;
	background-color: #ef6c82;
}
#time-read__icon,#views__icon{
	border-radius: 2.5px;
	width: 16px;
	height: 16px;
	background-color: #798e98;
}
#views__text,#time-read__text{
	font-size: 13px;
	color: #798e98;
    font-weight: 700;
}

#topic{
	font-size: 13.5px;
	font-weight: 300;
	color:#5e6973;
	margin-bottom: 14px;
}

#status-translate,#status-tutorial,#status-sandbox{
	margin-bottom:24px;
	text-align: center;
	max-width: 67.75px;
	padding: 5px 0px;
	font-size: 12px;
	border-radius: 4px;
}
#status-tutorial{ color:#d5700b; border:1px solid #d5700b;
}
#status-sandbox{
    border: 1px solid #b0b0e2;
	max-width: 92.27px;
    color: #6667a3;
}
#status-translate{ border: 1px solid #b0b0e2; color: #6667a3; }

#post__body{ margin:20px 0px 24px; }
#post__textzone{
	font-size: 16px;
	line-height: 1.5rem;
	color: #111;
}
#post__link:hover{ background-color: #548eaa; color:#fff; }
#post__link{
	transition: .4s;
	margin-top:40px;
	color:#548eaa;
	font-size: 13px;
	border: 1px solid #75aeca;
    border-radius: 3px;
	display: inline-block;
	padding:10.5px;
}

#ratings{
	color: #798e98;
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
	display: flex;
	flex-direction: row;
	gap: 10px;
}
#rating__item{
	display: flex;
	flex-direction: row;
	gap: 10px;
}
#rating__value-pos{ color: #7aa600; font-weight: 600;}
#rating__value-neg{ color:red ; font-weight: 600;}
#rating__value{ color: #798e98; ; font-weight: 600;}
#rating__value3{ font-size: 13.33333px; margin-top:5.5px; font-weight: 600; }
#rating__icon{
	background-color: #bdcdd6;
	width: 24px;
	height: 24px;
	border-radius: 4px;
}

#lower__nav{
	padding: 8px 16px;
	margin: 0px 10px 60px 5px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
}
#lnav-button{
	color: #bababa;
    font-size: .9375rem;
    font-weight: 500;
    line-height: 1.25rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
#lnav-pages{
	box-shadow: inset 0 0 0 1px;
    color: #548eaa;
	border-radius: 3px;
	font-size: .9375rem;
    font-weight: 500;
	padding: 7.5px 7px;
	line-height: 1.125rem;
	border: 0.5px  #548eaa;
	justify-content: center;
	align-items: center;
}
</style>