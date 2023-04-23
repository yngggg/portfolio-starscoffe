<template>
	<div id="app">
		<router-view>
		</router-view>
	</div>

</template>

<script>
import mainPage from './pages/mainPage.vue';

export default{
	components : mainPage,
}
</script>

<style>

*{
	margin:0;
	padding : 0;
	text-decoration: none;
    font-family: "-apple-system",BlinkMacSystemFont,Arial,sans-serif;
}
a{ cursor: pointer; }
li{ list-style-type: none; }
ul{
	margin-left: 0;
	padding-left: 0;
}
#app{
	background-color: #f0f0f0;
}
button{
	border:0;
}
#container{
	max-width: 1105px; 
	margin:0 auto;
}
</style>
