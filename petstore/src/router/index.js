import Vue from "vue"
import VueRouter from "vue-router"
import Form from "@/components/Form"
import Main from "@/components/Main"
import Product from "@/components/Product"
import EditProduct from "@/components/EditProduct"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "iMain",
    component: Main,
    props: true
  },
  {
    path: '/product/:id',
    name: 'Id',
    component: Product,
    props: true,
    children: [
      {
        path: 'edit',
        name: 'Edit',
        component: EditProduct,
        props: true
      }
    ]
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
    props: true,
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
