<template>
	<div id="stat__wrapper">
		<div v-for="st in stat" :key="st.id" id="stat__name">
			{{ st.name }}
		</div>
	</div>
</template>
<script>
import data from '@/data/data.js'

export default{
	data(){
		return{
			stat : data.statistics
		}
	}
}
</script>
<style>
#stat__wrapper{
	margin: 0px 5px 12px;
	display: flex;
	padding: 24px 28px 28px;
	flex-direction: column;
	background-color: #fff;
	border-left-color: #5677fc;
	border-left-style: solid;
    border-left-width: 4px;
}
#stat__name{
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
</style>