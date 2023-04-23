<template>
	<div id="order__wrapper">
		<div id="orders__title">
			ЗАКАЗЫ
		</div>
		<ul v-for="ordr in orders" :key="ordr.id" id="order__item">
			<li id="order__topic">{{ ordr.topic }}</li>
			<ul id="order__data">
				<ul id="data-price">
					<li id="order__d">{{ ordr.price }}</li>
					<li id="order__d">{{ ordr.priceTo }}</li>
				</ul>
				<li id="order__d">{{ ordr.feedback }} отклика</li>
				<li id="order__d">{{ ordr.views }} просмотров</li>
			</ul>
		</ul>
		<a href="#" id="link">Больше заказов на Хабр Фрилансе</a>
	</div>
</template>
<script>
import data from '@/data/data.js'
export default{
	data(){ 
		return{ 
			orders : data.ordersList 
		}
	}
}
</script>

<style>
#order__wrapper{
	margin: 0px 5px 12px;
	display: flex;
	padding: 24px 28px 28px;
	flex-direction: column;
	background-color: #fff;
	border-left-color: #32c789;;
	border-left-style: solid;
    border-left-width: 4px;
}
#orders__title{
    margin-bottom: 30px;
	color: #505c66;
    font-size: .8125rem;
    letter-spacing: .0625rem;
    line-height: 1.25rem;
    align-items: center;
    display: flex;
	font-family: Fira Sans,sans-serif;
    font-weight: 500;
}
#order__item{ margin-bottom: 24px; }
#order__data,#data-price{
	display: flex;
	flex-direction: row;
	gap:5px;
}
#data-price{gap:0px}
#order__topic{ 
	cursor: pointer;
	color: #111;
    display: flex;
    font-size: .9375rem;
    font-weight: 500;
    line-height: 1.25rem;
    margin-bottom: 6px;
    text-decoration: none;
}
#order__topic:hover{ color: #487284; }
#order__data{
	color: #777;
    font-size: .8125rem;
    line-height: 1rem;
}
#link{
    color: #548eaa;
    font-size: .875rem;
    font-weight: 500;
    text-decoration: none;
}
#link:hover{ color:#487284; }
</style>