/**
 * @title    Axios 重复请求控制
 * @author   Azil
 * @version	 0.0.1
 * @time     2021-09-17 14:39:17
 */
import axios from "axios"
import qs from "qs"
import { Loading } from "element-ui"

// 关闭信息头，用于catch内区分错误信息
export const MyKey = "my-cancel-close:"

let httpSequences = 0 // 记录请求序列
const pending = new Map() // 存储请求数据

// customParams 请求自定义参数以及说明
const CUSTOM_PARAMS = {
  closeOtherPage: false, // {Boolean}   开启跳转路由后自动关闭非路由页请求，TODO: 存在局限性，暂未开放
  bodyLoading: false, // {Boolean || String}      开启全局加载框
  repeat: false, // {Boolean}           不允许发起重复请求,不同参数的请求不会被关闭
  closeRepeat: false, // {Boolean}      开启关闭重复请求,不同参数的请求不会被关闭
  repeatParams: false, // {Boolean}     开启后不同参数请求会被认同为同一个请求,开启此参数需先开启 repeat 或 closeRepeat
  keys: [] // {Array<String>}           大数据量时使用只取自定义参数作为重复请求判断依据
}

/**
 * @title	 查询是否存在相同请求
 * @param	 {String}  requestUrl 请求链接，带参数
 * @return {Array} 查询到请求参数一致的路径
 */
export const findPending = (requestUrl) => {
  const findAll = []
  for (const pendingObj of pending.values()) {
    if (pendingObj.requestUrl === requestUrl) {
      findAll.push(pendingObj)
    }
  }
  return findAll
}

/**
 * @title	关闭请求
 * @param	{Object || key}  pendingObj 请求配置 或者 请求序列
 */
const delPending = (pendingObj) => {
  if (typeof pendingObj == "string" || typeof pendingObj == "number") {
    const obj = pending.get(pendingObj)
    obj.cancel(`${MyKey}del`)
    pending.delete(pendingObj)
  } else {
    pendingObj.cancel(`${MyKey}del`)
    pending.delete(pendingObj.httpSequences)
  }
}

/**
 * @title	关闭相同地址的请求
 * @param	{String}  requestUrl 请求链接，带参数
 */
export const delSamePending = (requestUrl) => {
  findPending(requestUrl).forEach(pendingObj => {
    pendingObj.cancel(`${MyKey}delSame`)
    pending.delete(pendingObj.httpSequences)
  })
}

/**
 * @title	清理所有请求
 * @param	{String}  match 模糊匹配删除
 */
export const deleteAllRequest = (match = undefined) => {
  if (match) {
    for (const pendingObj of pending.values()) {
      if (pendingObj.requestUrl.toLowerCase().includes(match.toLowerCase())) {
        pendingObj.cancel()
        pending.delete(pendingObj.httpSequences)
      }
    }
  } else {
    for (const pendingObj of pending.values()) {
      pendingObj.cancel()
    }
    pending.clear()
  }
}

/**
 * @title	 序列化请求参数
 * @param	 {Object}  config 请求对象
 * @param	 {Array}  keys 自定义请求参数字段
 * @return {String} 请求链接+请求参数
 */
export const parseUrl = (config, keys = []) => {
  const objToStr = (obj = {}) => {
    if (typeof obj === "string") {
      obj = JSON.parse(obj)
    }
    const newobj = {}
    keys.forEach(key => {
      newobj[key] = obj[key]
    })
    return qs.stringify(newobj)
  }
  let params
  if (Array.isArray(keys) && keys.length) {
    // url 上的参数不参与 keys 的解析配置
    if (config.method === "get" && config.params) {
      params = objToStr(config.params)
    } else if (config.method === "post" && config.data) {
      params = objToStr(config.data)
    }
  }
  if (!params) {
    if (config.method === "post") {
      params = objToStr(config.data)
    } else { // 非post请求一律使用params参数
      params = objToStr(config.params)
    }
  }
  let configUrl = config.url
  configUrl += configUrl.includes("?") ? `&${params}` : `?${params}`
  return configUrl
}

/**
 * @title	请求发起前的处理
 * @param	{Object} config axios 的 config 配置
 */
export const interceptorsRequest = (config = {}) => {
  const pendingObj = {}
  const customParams = {
    ...CUSTOM_PARAMS,
    ...config?.customParams || {}
  }
  pendingObj.customParams = customParams
  // 清理掉配置参数
  if (config.customParams) {
    config.customParams = undefined
    // 需要塞入一个 key 到请求头信息做序列区分
    delete config.customParams
  }

  return new Promise((resolve, reject) => {
    // 转换请求链接成我们想要处理的格式
    const configUrl = parseUrl(config, customParams.keys)
    let requestUrl
    if (customParams.repeatParams) { // 不同参数认为是同一请求，但是 repeat 与 closeRepeat 不会互相影响
      requestUrl = configUrl.split("?")[0] + "&" + config.method + "&myRepeatParams"
    } else {
      requestUrl = configUrl + "&" + config.method
      if (customParams.repeat) {
        requestUrl = requestUrl + "&myRepeat"
      } else if (customParams.closeRepeat) {
        requestUrl = requestUrl + "&myCloseRepeat"
      }
    }

    if (customParams.repeat) { // 不允许发起重复请求
      if (findPending(requestUrl).length) {
        return reject(new Error(`${MyKey}no-repeat`))
      }
    } else if (customParams.closeRepeat) { // 允许发起重复请求，但是关闭历史重复请求，只保留最新的一个
      delSamePending(requestUrl)
    }

    config.cancelToken = new axios.CancelToken(cancel => {
      pendingObj.requestUrl = requestUrl
      pendingObj.cancel = cancel
    })

    // 是否需要打开全屏遮罩
    if (customParams.bodyLoading && Loading) {
      pendingObj.bodyLoading = Loading.service({
        lock: true,
        body: true,
        customClass: "my-loading-body",
        text: customParams.bodyLoading || "数据加载中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.5)"
      })
    }
    config.headers.MyPending = httpSequences
    pendingObj.httpSequences = httpSequences
    pending.set(httpSequences, pendingObj)
    httpSequences = httpSequences + 1

    resolve()
  })
}

/**
 * @title	请求结束后的处理
 * @param	{Object} config axios 的 config 配置
 */
export const interceptorsResponse = (config = {}) => {
  const pendingObj = pending.get(config.headers?.MyPending)
  if (pendingObj) {
    // 有 loading 就关闭loading
    if (pendingObj.myLoadingBody) {
      pendingObj.myLoadingBody?.close()
    }
    delPending(config.headers?.MyPending)
  }
}
