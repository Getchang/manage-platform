/*
 * @Author: your name
 * @Date: 2021-07-05 16:12:25
 * @LastEditTime: 2021-09-17 16:14:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tags/webpack/src/router/index.js
 */
import React, {lazy, Suspense, Component} from "react"
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import BeforeRouteEnter from './beforeRouteEnter'
const Home = lazy(() => import('@/pages/app'))
const Login = lazy(() => import('@/pages/login/'))
const Order = lazy(() => import('@/pages/order/'))
const Mine = lazy(() => import('@/pages/mine/'))
const RouterMap = [
  {path: '/', component: Home, name: '主页', auth: true},
  {path: '/login', component: Login, name: '登录'},
  {path: '/mine', component: Mine, name: '个人中心', auth: true},
  {path: '/order', component: Order, name: '订单', auth: true}
]
export default class RouterConfig extends Component{
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/* <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/order" component={Order}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Redirect to="/"></Redirect> */}
            <BeforeRouteEnter routerConfig={RouterMap}></BeforeRouteEnter>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}