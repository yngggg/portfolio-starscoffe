<template>
	<div id="stories__wrapper">
		<div id="stories__title">ИСТОРИИ</div>
		<Carousel id="slider__items" :items-to-show="5.25">
			<Slide  id="slide__item" v-for="slide in slides" :key="slide">
				<img id="slide__img" :src="slide.image">
				<img id="slide__icon" :src="slide.icon">
				<li id="slide__text">{{ slide.title }}</li>
			</Slide>
			<template #addons>
				<Navigation/>
				<Pagination/>
			</template>
  </Carousel>
	</div>
</template>
<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import data from '@/data/data.js'

export default{
		components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
	},
	data(){
		return{
			slides : data.stories
		}
	},
	
}

</script>
<style>

*{
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
}
.carousel__next,.carousel__prev{
	background-color: #fff;
	opacity: 1;
	width: 32px;
    height: 32px;
    border: 1px solid rgba(146,156,165,.4);
    border-radius: 20px;
    color: #929ca5;
	top: 125px;
}
.carousel__next:hover,.carousel__prev:hover
{
	color: #548eaa;
}
.carousel__next--disabled,.carousel__prev--disabled,
.carousel__pagination{ display: none; }
#stories__wrapper{
	margin-bottom:12px;
	margin-left:5px;
	max-width: 780px;
	height: 377px;
	background-color: #fff;
}
#stories__title{
	align-items: baseline;
	display: flex;
	flex-direction: row;
	gap: 12px;
	padding:16px 0px;
	margin: 0px 20px;
	padding-bottom: 13.5px;
	border-bottom: 1px solid #d5dddf;
	font-size: .8125rem;
    letter-spacing: .0625rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    font-weight: 400;
    color: #505c66;
    font-family: Fira Sans,sans-serif;
}
#slider__items{
	padding: 20px
}
#slide__item{
	max-width: 124px;
	height: 288px;
	color:#fff;
	display: flex;
	flex-direction: column;
	margin-right:19px;
}
#slide__img{
	margin: 0;
	border-radius: 8px;
	max-width: 124px;
	height: 220px;
}
#slide__text{
	width: 124px;
	height: 60px;
	text-align: left;
	font-size: .8125rem;
    line-height: 1.25rem;
    font-weight: 700;
    margin-top: 8px;
    color: #333;
}
#slide__icon{
	z-index: 2;
	position: absolute;
	margin-bottom:-117.5px;
	margin-left:-87.5px;
	height: 24px;
    width: 24px;
    border-radius: 3px;
}
.navbtn-left{
	background-color: #6e0101;
}
.navbtn-right{
	background-color: #aa0000;
}
</style>