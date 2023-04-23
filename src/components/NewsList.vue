<template> 
	<div id="news__list-wrapper">
		<ul id="news__list-title">
			<li id="news__list-text">НОВОСТИ</li>
			<li class="news__list-param-picked">все подряд</li>
			<li class="news__list-param">лучшие</li>
		</ul>
		<div v-for="tide in newsList" :key="tide.id">
			<ul v-if="tide.timePublication > '11:00'" id="news__list-item">
			<li id="news__title">{{ tide.title }}</li>
				<ul id="news__data">
					<li id="news__time">
						{{ tide.timePublication }}
					</li>
					<ul id="news__comments">
						<div id="news__comments-icon">c:</div>
						<li id="news__comments-txt">{{ tide.comments }}</li>
					</ul>
				</ul>
			</ul>
			<div v-if="this.newsLengthLow">
				<ul v-if="tide.timePublication < '11:00'" id="news__list-item">
				<li id="news__title">{{ tide.title }}</li>
					<ul id="news__data">
						<li id="news__time">
							{{ tide.timePublication }}
						</li>
						<ul id="news__comments">
							<div id="news__comments-icon">c:</div>
							<li id="news__comments-txt">{{ tide.comments }}</li>
						</ul>
					</ul>
				</ul>
			</div>
		</div>
		<button v-if="!this.newsLengthLow" @click="this.newsLengthLow = !this.newsLengthLow" id="btn__news-show">Показать еще</button>
		<button v-else @click="this.newsLengthLow = !this.newsLengthLow" id="btn__news-show-big">Все новости</button>
	</div>
</template>
<script>

import data from '@/data/data.js'

export default{
	data(){
		return { 
			newsList : data.newsList,
			newsLengthLow : false,
			btnTextLow : this.whatBtn,
			btnTextBig : this.whatBtn,
		}
	},
	methods : {
		whatBtn(){
			if(this.newsLength){
				this.btnText = 'Показать еще'
			}
			else{
				this.btnText = 'Все новости'
			}
		}
	}
}

</script>
<style scoped>

#news__list-wrapper{
	display: block;
	margin: 0px 5px;
	background-color: #fff;
	max-width: 785px;
	min-height: 515px;
	margin-bottom:12px;
}
#news__list-title{
	align-items: baseline;
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding:16px 20px 0px;
	padding-bottom: 13.5px;
}
#news__list-text{
	margin-right: 8px;
    font-size: .8125rem;
    letter-spacing: .0625rem;
    line-height: 1.25rem;
    font-weight: 600;
    color: #505c66;
    font-family: Fira Sans,sans-serif;
}
.news__list-param,.news__list-param-picked{
	border: none;
    background: transparent;
    border-radius: 0;
    margin: 0;
    padding: 0;
    font-size: .875rem;
    line-height: 1.5;
    font-weight: 500;
}
.news__list-param{
	cursor: pointer;
    color: #4d80aa;
    border-bottom: 1px dashed #548eaa;
}
.news__list-param-picked{
	color: #777;
    border-bottom: 1px solid transparent;
    cursor: default;
}

#news__list-item{
	background-color: #fff;
	padding: 11.5px 20px;
	display: flex;
	flex-direction: column;
}
#news__title{
	cursor: pointer;
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
	-webkit-font-smoothing: antialiased;
    font-family: Fira Sans,sans-serif;
    color: #333;
    font-size: 1.0625rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin: 0;
    word-break: break-word;
}
#news__title:hover{
	color: #4c8eab;
}
#news__comments{
	display: flex;
	flex-direction: row;
	gap: 3.5px;
}

#news__data{
	cursor: pointer;
	display: flex;
	flex-direction: row;
    align-items: baseline;
    min-height: 20px;
    margin-top: 6px;
    color: #798e98;
    font-size: .8125rem;
    font-weight: 500;
    line-height: 1;
	gap:16px;
}

#btn__news-show,#btn__news-show-big{
	background-color: #fff;
	border: 0;
    padding: 0;
    color: #4d80aa;
    cursor: pointer;
    display: inline-block;
    font-size: .875rem;
	padding:24px 20px;
	padding-top: 10px;
	width: 100%;
	text-align: left;
}

</style>