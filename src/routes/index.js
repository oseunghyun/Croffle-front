import { store } from "@/store";
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
        component: () => import("@/components/Main/MainComponent.vue"),
      },
      {
        path: "/cafes/report",
        component: () => import("@/components/Report/ReportCafeComponent.vue"),
        beforeEnter: (to, from, next) => {
          if (!store.getters.userToken) {
            alert("로그인이 필요한 페이지입니다.");
            console.log("인증이 필요합니다.");
          } else {
            next();
          }
        },
      },
      {
        path: "/cafes/searchcafe",
        component: () => import("@/components/Main/SearchCafeComponent.vue"),
      },
    ],
  },
  // 카페 상세 /:id
  {
    path: "/cafe/:id",
    component: () => import("@/views/CafeView.vue"),
    children: [
      {
        path: "/cafe/:id",
        component: () => import("@/components/Cafe/CafeInfoComponent.vue"),
      },
      // 카페 상세 - 리뷰 작성
      {
        path: "/cafe/:id/review",
        component: () => import("@/components/Cafe/ReviewFormComponent.vue"),
        meta: {
          auth: true,
        },
      },
      // 카페 상세 - 메뉴 추가 제보 하기
      {
        path: "/cafe/:id/addreport",
        component: () => import("@/components/Report/ReportAddComponent.vue"),
        meta: {
          auth: true,
        },
      }, // 카페 상세 - 정보 오류 제보 하기
      {
        path: "/cafe/:id/reportinfo",
        component: () => import("@/components/Report/ReportInfoComponent.vue"),
        meta: {
          auth: true,
        },
      },
    ],
  },
  // 추천 게시판
  {
    path: "/recommend",
    component: () => import("@/views/RecommendView.vue"),
    props: true,
  },
  // 커뮤니티
  {
    path: "/community",
    component: () => import("@/views/CommunityView.vue"),
    children: [
      // 커뮤니티 게시판
      {
        path: "/community",
        component: () =>
          import("@/components/Community/CommunityBoardComponent.vue"),
      },
      // 커뮤니티 글 작성
      {
        path: "/community/post",
        component: () =>
          import("@/components/Community/CommunityFormComponent.vue"),
        meta: {
          auth: true,
        },
      },
      // 커뮤니티 글 상세 보기
      {
        path: "/community/detail/:id",
        component: () =>
          import("@/components/Community/CommunityDetailComponent.vue"),
      },
      // 커뮤니티 글 수정
      {
        path: "/community/edit/:id",
        component: () =>
          import("@/components/Community/CommunityEditComponent.vue"),
        meta: {
          auth: true,
        },
      },
    ],
  },
  // 사장님 서비스
  {
    path: "/owner",
    component: () => import("@/views/OwnerView.vue"),
    meta: {
      auth: true,
    },
    children: [
      // 사장님 서비스 메인
      {
        path: "/owner",
        component: () => import("@/components/Owner/OwnerMainComponent.vue"),
      },
      // 사장님 인증
      {
        path: "/owner/verify",
        component: () => import("@/components/Owner/VerifyOwner.vue"),
      },
      // 카페 검색
      {
        path: "/owner/searchcafe",
        component: () => import("@/components/Owner/SearchCafeComponent.vue"),
      },
      // 매장 정보 조회하기
      {
        path: "/owner/cafe",
        component: () => import("@/components/Owner/OwnerCafeComponent.vue"),
      },
      // 매장 정보 수정하기
      {
        path: "/owner/cafemanage",
        component: () => import("@/components/Owner/OwnerCafeManage.vue"),
      },
      // 메뉴 조회하기
      {
        path: "/owner/menu",
        component: () => import("@/components/Owner/OwnerMenuComponent.vue"),
      },
      // 메뉴 추가하기
      {
        path: "/owner/menuadd",
        component: () => import("@/components/Owner/OwnerMenuAdd.vue"),
      },
      // 메뉴 수정하기
      {
        path: "/owner/menumodify",
        component: () => import("@/components/Owner/OwnerMenuModify.vue"),
      },
      // 스탬프 찍어주기
      {
        path: "/owner/stamp",
        component: () => import("@/components/Owner/OwnerStampComponent.vue"),
      },
      // 회원 조회
      {
        path: "/owner/checkmember",
        component: () => import("@/components/Owner/CheckMember.vue"),
      },
      // 회원 조회
      {
        path: "/owner/stampcoupon",
        component: () => import("@/components/Owner/StampCoupon.vue"),
      },
      // 회원 조회
      {
        path: "/owner/complete",
        component: () => import("@/components/CompleteComponent.vue"),
      },
    ],
  },
  // 마이 페이지
  {
    path: "/mypage",
    component: () => import("@/views/MypageView.vue"),
    // meta: {
    //   auth: true,
    // },
    meta: {
      auth: true,
    },
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

// router.beforeEach((to, from, next) => {
//   // 인증이 필요한 페이지 && 로그인 하지 않은 경우
//   // if (
//   //   to.matched.some(function (routeInfo) {
//   //     return routeInfo.meta.authRequired;
//   //   })
//   // ) {
//   //   // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
//   //   alert("Login Please!");
//   if (to.meta.auth && !store.getters.isLogin) {
//     alert("로그인이 필요한 페이지입니다.");
//     // console.log("인증이 필요합니다.");
//   } else {
//     next();
//   }
// });
