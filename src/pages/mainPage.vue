<template>
	<title>MinHabr</title>
	
	<HeaderChild/>
	<div id="container__main">
		<div id="main__item-1">
			<PostList/>
		</div>	
		<div :class="{main__item2 : this.isFixed == 2, fixed : this.isFixed == 1, lvmain__item2 : this.isFixed == 3}">
			<BlogList/>
		</div>
	</div>
	<FooterChild/>
</template>

<script>
import data from '@/data/data.js'
import PostList from '@/components/PostList.vue'
import BlogList from '@/components/BlogList.vue'
import HeaderChild from '@/components/HeaderChild.vue'
import FooterChild from '@/components/FooterChild.vue'

export default{
	components:{
		PostList,
		BlogList,
		HeaderChild,
		FooterChild
	},
	data(){
		return{
			pageSettings : data.pageSettings,
			isFixed : 2,
		}
	},
	beforeMount(){
		window.addEventListener('scroll', () => {
			let position = window.pageYOffset
			if(position > 1600){
				this.isFixed = 1
				console.log(position)
			}
			if(position >= 12770){
				this.isFixed= 3
				console.log(position)
			}
			if(position < 1600){
				this.isFixed = 2
				console.log(position)
			}
		})
	}
}


</script>

<style scoped>

#container__main{
	display: flex;
	flex-direction: row;
	gap: 15px;
	max-width: 1105px; 
	margin:0 auto;
}
#app{ background-color:#f0f0f0; }

.main__item2,.fixed,.lvmain__item2{
	max-width: 300px;
	display: flex;
	flex-direction: column;
	gap: 12px;
}
.fixed{
	position: absolute;
	z-index: 1;
	margin-left:805px;
	margin-top:-1615px;
	position: fixed;
}
.lvmain__item2{
	margin-left:805px;
	position: absolute;
	z-index: 1;
	margin-top: 586.4%;
}

</style>