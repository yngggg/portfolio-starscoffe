import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '@/pages/loginPage.vue'
import forgotPassword from '@/pages/forgotPassword.vue'
import mainPage from '@/pages/mainPage.vue'
import registrationPage from '@/pages/registrationPage.vue'

const routes = [
	{
		path : '/',
		component : mainPage,
	},
	{
		path : '/login',
		component : loginPage,
	},
	{
		path : '/registration',
		component : registrationPage,
	},
	{
		path : '/login/remimber',
		component : forgotPassword,
	},
	
]

const router = createRouter({
	routes,
	history : createWebHistory(process.env.BASE_URL)
})

export default router