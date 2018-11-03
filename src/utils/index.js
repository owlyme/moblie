
import components from './component'
import filters from './filters'
import {Get, Post} from './axios'
import Path from '../api'

export default {
  install (Vue) {
    //  添加全局公用组件
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key])
    })
    // 添加公用的过滤器
    Object.keys(filters).forEach((key) => {
      Vue.filter(key, filters[key])
    })
    // 添加全局的监听器
    Vue.prototype.$BUS = new Vue()
    // 添加全局ajax post 请求
    Vue.prototype.$post = function (url, args = {}) { return Post(url, args) }
    // 添加全局ajax get 请求
    Vue.prototype.$get = function (url, args = {}) { return Get(url, args) }
    //
    Vue.prototype.$path = Path
    // 简单的deep copy
    Vue.prototype.deepCopy = function (data) {
      return JSON.parse(JSON.stringify(data))
    }
    // 数据转换
    Vue.prototype._transformData = function (obj, rules = {}, reverse, subobj) {
      // obj: 数据 object / array 类型
      // rules：需要将相关将属性转换的规则；{ 当前属性名：改变后属性名}
      // subobj： 树的子节点属性名
      // reverse: 翻转将属性转换的规则
      const reverseRules = {}
      if (reverse) {
        Object.entries(rules).forEach((item) => {
          reverseRules[item[1]] = item[0]
        })
        rules = reverseRules
      }
      const transform = function (_obj, _rules, _subobj) {
        const temp = {}
        Object.entries(_rules).forEach((item) => {
          const key = item[0]
          const value = item[1]
          if (key === _subobj && _obj[key]) {
            if (Array.isArray(_obj[key])) {
              temp[value] = []
              _obj[key].forEach((_item) => {
                temp[_rules[key]].push(transform(_item, _rules, _subobj))
              })
            } else {
              temp[_rules[key]] = transform(_obj[key], _rules, _subobj)
            }
          } else {
            temp[value] = _obj[key]
          }
        })
        return temp
      }
      if (Array.isArray(obj)) {
        return obj.map(item => transform(item, rules, subobj))
      }
      return transform(obj, rules, subobj)
    }
    // 浏览器平台
    Vue.prototype.scanPlatform = function () {
      // 判断页面是由哪个平台扫码打开，
      // wx ：微信
      // ali ： zhifubo
      // false 为浏览器
      const ua = navigator.userAgent.toLowerCase()
      if (ua.indexOf('micromessenger') > -1) {
        return 'wx'
      } else if (ua.indexOf('alipayclient') > -1) {
        return 'ali'
      }
      return false
    }
  }
}
