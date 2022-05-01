import { createWebHistory, createRouter } from 'vue-router';


// 라우터 정의
const routes = [
	// 루트: 랜딩 페이지
	{
		path: '/',
		component: () => import('@/views/LandingView.vue'),
	},
  // 회원가입
  {
		path: '/signup',
		component: () => import('@/views/SignupView.vue'),
		children: [
      { path: '',  
			component: () => import('../components/Signup/SignupComponent.vue'), },
      { path: '/signup/info',  
			component: () => import('../components/Signup/SignupComponentStep2.vue'), },
			{ path: '/signup/complete',  
			component: () => import('../components/Signup/SignupCompleteComponent.vue'), },
		]
	}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;