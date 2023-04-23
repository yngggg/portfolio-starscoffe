<template>
	<div id="offtop__wrapper">
		<ul id="offtop__title">
			<li id="off__title-txt">МИНУТОЧКУ ВНИМАНИЯ</li>
			<li id="off__add">Разместить</li>
		</ul>
		<div id="offtop__items">
			<div v-for="ofItem in ofItems" :key="ofItem.id" id="offtop__item">
				<img :src="ofItem.image" id="offitem__img">
				<li id="offitem__status">{{ ofItem.status }}</li>
				<li id="offitem__title">{{ ofItem.title }}</li>
			</div>
		</div>
	</div>
</template>
<script>
  
import data from '@/data/data.js'

export default{
	data(){
		return{
			ofItems : data.ofItems
		}
	}
}

</script>
<style scoped>
*{
	transition: opacity .2s ease-in-out,color .2s ease-in-out,text-decoration .2s ease-in-out,background-color .2s ease-in-out,-webkit-text-decoration .2s ease-in-out;
}
#offtop__wrapper{
	margin: 0px 5px 12px;
	display: flex;
	max-width: 780px;
	flex-direction: column;
	background-color: #fff;
}
#offtop__title{
	display: flex;
	align-items: center;
    justify-content: space-between;
    margin: 0 20px 0;
    padding: 16px 0 12px;
    border-bottom: 1px solid #d5dddf;
}
#off__title-txt{
    font-size: .8125rem;
    letter-spacing: .0625rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #505c66;
    font-family: Fira Sans,sans-serif;
}
#off__add{
	cursor: pointer;
	color: #548eaa;
    font-size: .75rem;
    line-height: .875rem;
}
#off__add:hover{ color: #487284; }
#offtop__items{
	display: flex;
	justify-content: space-between;
	padding: 24px 20px;
}
#offtop__item{
	width: 31.56%;
	cursor: pointer;
}
#offitem__img{
	width: 236.66px;
	height: 149.55px;
}
#offitem__status{
	z-index: 2;
	position: absolute;
	margin:-38px 0 0 8px;
	background-color: #fff;
	font-family: -apple-system,BlinkMacSystemFont,Arial,sans-serif;
    border: 1px solid #b0b0e2;
    border-radius: 2px;
    color: #6667a2;
    font-size: .75rem;
    line-height: 1rem;
    padding: 4px 8px;
}
#offitem__title{
	-webkit-font-smoothing: antialiased;
    font-family: Fira Sans,sans-serif;
    color: #333;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1.375rem;
    margin: 10px 0 0;
}
</style>