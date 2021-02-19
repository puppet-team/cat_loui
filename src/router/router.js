import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
// 我要下单
import myOrder from '@/pages/myOrder'
import myOrderAddress from '@/pages/myOrderAddress'
import myOrderAddressAdd from '@/pages/myOrderAddressAdd'
import myOrderAddressEdit from '@/pages/myOrderAddressEdit'
import orderRecordes from '@/pages/orderRecordes'

// 网点查询
import onlineQuerys from '@/pages/onlineQuerys'

// 运单查询
import myorderQuery from '@/pages/myorderQuery'
import myorderQueryResult from '@/pages/myorderQueryResult'

// 我的订单
import myNavOrders from '@/pages/myNavOrders'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/index',
    name: 'Index',
    component: Index, //首页
  },
  // ============== 我要下单 Start =====================
  {
    path: '/myOrder', // 访问的路径为： /myOrder
    name: 'myOrder',
    component: myOrder, //我要下单
  },
  {
    path: '/myOrderAddress',
    name: 'myOrderAddress',
    component: myOrderAddress, //我要下单（地址簿）
  },
  {
    path: '/myOrderAddressAdd',
    name: 'myOrderAddressAdd',
    component: myOrderAddressAdd, //我要下单（添加新地址）
  },
  {
    path: '/myOrderAddressEdit',
    name: 'myOrderAddressEdit',
    component: myOrderAddressEdit, //我要下单（编辑新地址）
  },
  // ============== 下单记录 Start =====================
  {
    path: '/orderRecordes',
    name: 'orderRecordes',
    component: orderRecordes, //下单记录
  },

  // ============== 网点查询 =====================
  {
    path: '/onlineQuerys',
    name: 'onlineQuerys',
    component: onlineQuerys,
  },
  // ============== 运单查询 =====================
  {
    path: '/myorderQuery',
    name: 'myorderQuery',
    component: myorderQuery,
  },
  {
    path: '/myorderQueryResult',
    name: 'myorderQueryResult',
    component: myorderQueryResult,
  },

  // ============== 我的订单 =====================
  {
    path: '/myNavOrders',
    name: 'myNavOrders',
    component: myNavOrders,
  },
]
const router = new Router({
  mode: 'history',
  // base: window.app.basePath + 'union',
  routes,
})
export default router

// 创建病例
// import Create from '@/pages/Create/Create'
// import CreateInfo from '@/pages/Create/Info'
// import CreateRoutine from '@/pages/Create/Routine'
// import CreateBiochemistry from '@/pages/Create/Biochemistry'
// import CreateInspection from '@/pages/Create/Inspection'
// import CreateImage from '@/pages/Create/Image'
// import CreateDiagnosis from '@/pages/Create/Diagnosis'
// import CreateCheck from '@/pages/Create/CreateCheck'

// // 专家病例列表
// import Expert from '@/pages/Expert/Expert'
// // 专家介绍
// import ExpertInfo from '@/pages/ExpertInfo/ExpertInfo'
// // 专家列表
// import ExpertList from '@/pages/ExpertInfo/ExpertList'

// // 预约详情
// import CaseInfoIndex from '@/pages/CaseInfo'
// import CaseInfo from '@/pages/CaseInfo/CaseInfo'
// import ApptInfo from '@/pages/CaseInfo/ApptInfo'
// import MyConclusion from '@/pages/CaseInfo/MyConclusion'

// // 注册
// import Register from '@/pages/Registered/Registered'
// // 审核
// import Examine from '@/pages/Registered/examine'

// // 病例教学
// import Education from '@/pages/Education/Education'
// import EducationInfo from '@/pages/Education/EducationInfo'

// // 病例回看
// import Replay from '@/pages/Replay/Replay'
// import Discuss from '@/pages/Replay/Discuss'
// import Case from '@/pages/Replay/Case'
// import Details from '@/pages/Replay/Details'
// // 眼科
// import Eye from '@/pages/Eye/Eye'
// import EducationInfoEye from '@/pages/Eye/EducationInfo'
// import EducationInfoRelevantEye from '../pages/Eye/EducationInfoRelevant.vue'
// import Solicitation from '@/pages/Eye/Solicitation'

// // 风湿
// import Rheumatism from '@/pages/Rheumatism/Rheumatism'

// // 说明书
// import Instructions from '@/pages/Instructions/instructions'

// // 搜索页
// import Search from '@/pages/Search/Search'

// // 会员中心
// import UserCenter from '@/pages/UserCenter/User'
// import UserEdit from '@/pages/UserCenter/Edit'

// // 收藏
// import Collection from '@/pages/UserCenter/Collection'
// import Message from '@/pages/UserCenter/Message'
// import Thumbsup from '@/pages/UserCenter/thumbsup'

// Vue.use(Router)
// const routes = [
//   {
//     path: '/',
//     name: 'Index',
//     component: Index,
//   },
//   {
//     path: '/index',
//     name: 'Index',
//     component: Index,
//   },
// {
//   path: '/info/:id',
//   name: 'CaseInfoIndex',
//   component: CaseInfoIndex,
//   children: [
//     {
//       path: '',
//       name: 'CaseInfo',
//       component: CaseInfo,
//     },
//     {
//       path: 'expert',
//       name: 'CaseInfoExpert',
//       component: CaseInfo,
//     },
//     {
//       path: 'appt',
//       name: 'ApptInfo',
//       component: ApptInfo,
//     },
//     {
//       path: 'appt/expert',
//       name: 'ApptInfoExpert',
//       component: ApptInfo,
//     },
//     {
//       path: 'conclusion',
//       name: 'MyConclusion',
//       component: MyConclusion,
//     },
//   ],
// },
// {
//   path: '/expert-info',
//   name: 'ExpertInfo',
//   component: ExpertInfo,
// },
// {
//   path: '/test',
//   name: 'Test',
//   component: Test,
// },
// {
//   path: '/expert',
//   name: 'Expert',
//   component: Expert,
// },
// {
//   path: '/create',
//   name: 'Create',
//   component: Create,
//   children: [
//     {
//       path: '',
//       name: 'Info',
//       component: CreateInfo,
//     },
//     {
//       path: '/routine',
//       name: 'Routine',
//       component: CreateRoutine,
//     },
//     {
//       path: '/biochemistry',
//       name: 'Biochemistry',
//       component: CreateBiochemistry,
//     },
//     {
//       path: '/inspection',
//       name: 'Inspection',
//       component: CreateInspection,
//     },
//     {
//       path: '/image',
//       name: 'Image',
//       component: CreateImage,
//     },
//     {
//       path: '/diagnosis',
//       name: 'Diagnosis',
//       component: CreateDiagnosis,
//     },
//     {
//       path: '/createCheck',
//       name: 'CreateCheck',
//       component: CreateCheck,
//     },
//   ],
// },
// {
//   path: '/register',
//   name: 'Register',
//   component: Register,
// },
// {
//   path: '/examine',
//   name: 'Examine',
//   component: Examine,
// },
// {
//   path: '/education',
//   name: 'Education',
//   component: Education,
// },
// {
//   path: '/education/info/:id',
//   name: 'EducationInfo',
//   component: EducationInfo,
// },
// {
//   path: '/education/info/eye/:id',
//   name: 'EducationInfoEye',
//   component: EducationInfoEye,
// },
// {
//   path: '/education/info/eyeRelevant/:id',
//   name: 'EducationInfoRelevantEye',
//   component: EducationInfoRelevantEye,
// },
// {
//   path: '/replay',
//   name: 'Replay',
//   component: Replay,
//   children: [
//     {
//       path: '',
//       name: 'Discuss',
//       component: Discuss,
//     },
//     {
//       path: 'case',
//       name: 'Case',
//       component: Case,
//     },
//   ],
// },
// {
//   path: '/eye',
//   name: 'Eye',
//   component: Eye,
// },
// {
//   path: '/rheumatism',
//   name: 'Rheumatism',
//   component: Rheumatism,
// },
// {
//   path: '/solicitation',
//   name: 'Solicitation',
//   component: Solicitation,
// },
// {
//   path: '/details/:id',
//   name: 'Details',
//   component: Details,
// },
// {
//   path: '/search',
//   name: 'Search',
//   component: Search,
// },
// {
//   path: '/usercenter',
//   name: 'UserCenter',
//   component: UserCenter,
// },
// {
//   path: '/useredit',
//   name: 'UserEdit',
//   component: UserEdit,
// },
// {
//   path: '/collection',
//   name: 'Collection',
//   component: Collection,
// },
// {
//   path: '/message',
//   name: 'Message',
//   component: Message,
// },
// {
//   path: '/expertlist',
//   name: 'ExpertList',
//   component: ExpertList,
// },
// {
//   path: '/thumbsup',
//   name: 'Thumbsup',
//   component: Thumbsup,
// },
// {
//   path: '/instructions',
//   name: 'Instructions',
//   component: Instructions,
// },
// ]

// const router = new Router({
//   mode: 'history',
//   // base: window.app.basePath + 'union',
//   routes,
// })

// const originalReplace = Router.prototype.replace
// Router.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch((err) => err)
// }

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   store.commit('setToPath', to.path)
//   console.log(store.state.toPath[0], '22')
//   if (to.path !== '/register' && to.path !== '/examine') {
//     // console.log('1标识');

//     // 山东地区
//     if (window.region == 2) {
//       // 匿名用户可以打开直播和回看
//       if (window.allow_anonymous) {
//         if (to.path.startsWith('/replay') || to.path.startsWith('/expert') || to.name == 'Details' || to.path.startsWith('/education') || to.name == 'EducationInfo' || to.name == 'Rheumatism') {
//           next()
//           return
//         }
//       }
//     }

//     let status = ''
//     if (window.userInfo) {
//       status = window.userInfo.status
//     } else {
//       if (to.path.startsWith('/examine')) {
//         next()
//         return
//       }
//       next('/register')
//       return
//     }

//     if (status == 3) {
//       console.log(3)
//       next('/register')
//     } else if (status == 2) {
//       console.log(2)
//       next('/examine')
//     }
//     // 眼科
//     if (window.region == 3 || window.userInfo.region_id == 3) {
//       if (to.path == '/') {
//         // console.log('眼科');
//         next('/eye')
//         return
//       }
//       if (to.path.startsWith('/replay')) {
//         next('/eye')
//         return
//       }
//     }
//   }
//   next()
// })

// export default router
