import { createRouter, createWebHistory } from "vue-router";
import dashboardApp from '../master/dashboard-app'
import home from '../pages/home'
import incomes from '../pages/total/incomes_total.vue'
import account from '../pages/accounts/account.vue'
import accmarket from '../pages/marketing/accmarket.vue'
import missionads from '../pages/marketing/missionAds.vue'
import missionmed from '../pages/marketing/missionMed.vue'
import acchr from '../pages/hr/acchr.vue'
const routes = [
  {
    name: 'dashboard-app',
    component: dashboardApp,
    path: '/',
    children: [
      {
        name: "home",
        component: home,
        path: "/home",
      },
      {
        name: "incomes",
        component: incomes,
        path: "/incomes",
      },
      {
        name: "account",
        component: account,
        path: "/account",
      },
      {
        name: "accountmarketing",
        component: accmarket,
        path: "/acc-marketing",
      },
      {
        name: "missionads",
        component: missionads,
        path: "/mission-ads",
      },
      {
        name: "missionmed",
        component: missionmed,
        path: "/mission-media",
      },
      {
        name: "acchr",
        component: acchr,
        path: "/acchr",
      },
    ]
  }
];
const router = Router();
export default router;
function Router() {
  const router = new createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}