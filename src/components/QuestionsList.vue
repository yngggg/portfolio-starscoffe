<template>
	<div id="order__wrapper">
		<div id="orders__title">
			ВОПРОСЫ И ОТВЕТЫ
		</div>
		<ul v-for="item in items" :key="item.id" id="order__item">
			<li id="order__topic">{{ item.title }}</li>
			<ul id="order__data">
				<li id="order__d">{{ item.topic }}</li>
				<li id="order__d">{{ item.level }}</li>
				<li id="order__d">{{ item.feedback }} просмотров</li>
			</ul>
		</ul>
		<a href="#" id="link">Больше вопросов на Хабр Q&A</a>
	</div>
</template>
<script>
import data from '@/data/data.js'
export default{
	data(){ 
		return{ 
			items : data.questionsList
		}
	}
}
</script>

<style scoped>
#order__wrapper{
	border-left-color: #505a6f;
}
</style>