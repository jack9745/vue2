import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: { name: "jsx" },
    children: [
      {
        path: "jsx",
        name: "jsx",
        component: () => import("@/components/Jsx.vue"),
      },
      {
        path: "table",
        name: "table",
        component: () => import("@/components/table.vue"),
      },
      {
        path: "table2",
        name: "table2",
        component: () => import("@/components/table2.vue"),
      },

      {
        path: "userInfo",
        name: "userInfo",
        component: () => import("@/components/userInfo.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
