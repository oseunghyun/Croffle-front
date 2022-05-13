import { createWebHistory, createRouter } from "vue-router";

// 라우터 정의
const routes = [
  // 루트: 랜딩 페이지
  {
    path: "/",
    component: () => import("@/views/LandingView.vue"),
  },
  // 메인 페이지 - 카페 전체 조회
  {
    path: "/cafes",
    component: () => import("@/views/MainView.vue"),
    children: [
      {
        path: "/cafes",
        component: () => import("../components/Main/MainComponent.vue"),
      },
    ],
  },
  // 메인 페이지 - 카페 상세 조회
  {
    path: "/cafe",
    component: () => import("@/views/MainView.vue"),
    children: [
      {
        path: "/cafe",
        component: () => import("../components/Cafe/CafeInfoComponent.vue"),
      },
    ],
  },
  // 제보하기
  {
    path: "/report",
    component: () => import("@/views/ReportingView.vue"),
    children: [
      {
        path: "/report/add",
        component: () => import("../components/Report/ReportAddComponent.vue"),
      },
      {
        path: "/report/modify",
        component: () =>
          import("../components/Report/ReportModifyComponent.vue"),
      },
      {
        path: "/report/complete",
        component: () => import("../components/Report/ReportComplete.vue"),
      },
    ],
  },
  // 회원가입
  {
    path: "/signup",
    component: () => import("@/views/SignupView.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/Signup/SignupComponent.vue"),
      },
      {
        path: "/signup/info",
        component: () =>
          import("../components/Signup/SignupComponentStep2.vue"),
      },
      {
        path: "/signup/complete",
        component: () =>
          import("../components/Signup/SignupCompleteComponent.vue"),
      },
    ],
  },
  // 사장님 서비스
  {
    path: "/owner",
    component: () => import("@/views/OwnerView.vue"),
    children: [
      // 사장님 서비스 메인
      {
        path: "/owner",
        component: () => import("../components/Owner/OwnerMainComponent.vue"),
      },
      // 매장 정보 조회하기
      {
        path: "/owner/cafe",
        component: () => import("../components/Owner/OwnerCafeComponent.vue"),
      },
      // 매장 정보 수정하기
      {
        path: "/owner/cafemanage",
        component: () => import("../components/Owner/OwnerCafeManage.vue"),
      },
      // 메뉴 조회하기
      {
        path: "/owner/menu",
        component: () => import("../components/Owner/OwnerMenuComponent.vue"),
      },
      // 메뉴 추가하기
      {
        path: "/owner/menuadd",
        component: () => import("../components/Owner/OwnerMenuAdd.vue"),
      },
      // 메뉴 수정하기
      {
        path: "/owner/menumodify",
        component: () => import("../components/Owner/OwnerMenuModify.vue"),
      },
      // 스탬프 찍어주기
      {
        path: "/owner/stamp",
        component: () => import("../components/Owner/OwnerStampComponent.vue"),
      },
      // 회원 조회
      {
        path: "/owner/checkmember",
        component: () => import("../components/Owner/CheckMember.vue"),
      },
      // 회원 조회
      {
        path: "/owner/stampcoupon",
        component: () => import("../components/Owner/StampCoupon.vue"),
      },
      // 회원 조회
      {
        path: "/owner/complete",
        component: () => import("../components/CompleteComponent.vue"),
      },
    ],
  },
  // 마이 페이지
  {
    path: "/mypage",
    component: () => import("@/views/MypageView.vue"),
    children: [
      // 마이 페이지 메인
      {
        path: "/mypage",
        component: () => import("../components/Mypage/MypageMainComponent.vue"),
      },
      // 마이 페이지 - 닉네임 변경
      {
        path: "/mypage/changenickname",
        component: () =>
          import("../components/Mypage/ChangeNicknameComponent.vue"),
      },
      // 마이 페이지 - 닉네임 변경 완료
      {
        path: "/mypage/nicknamecomplete",
        component: () => import("../components/CompleteComponent.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
