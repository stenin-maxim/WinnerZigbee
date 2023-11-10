/**
 * TYKit
 *
 * @version 2.0.6
 */
declare namespace ty {
  /**
   * atop接口
   */
  export function apiRequestByAtop(params: {
    /**
     * atop入参数据模型
     * api api名称
     */
    api: string
    /** version api版本号 */
    version?: string
    /** postData 入参结构体 */
    postData: any
    complete?: () => void
    success?: (success?: Record<string, any>) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 单次点 事件埋点
   */
  export function event(params: {
    /** 事件id */
    eventId: string
    /** 事件点对象 */
    event: any
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 链路点 开始事件埋点
   *开始一个（时长类）事件
   */
  export function beginEvent(params: {
    /** 事件名称（事件平台生成） */
    eventName: string
    /** 事件唯一ID （在同一条链路上，begin,track,end 的标识） */
    identifier: string
    /** 所有事件(begin,track,end)公有字段（该链路上，后面打点的数据会覆盖前面点数据，如下example中非data中的字段，ps：beginTime，endTime默认会打上） */
    attributes: any
    /** (begin,track,end)独有字段（会按照打点顺序组装成数组） */
    infos: any
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 链路点 发送事件埋点
   *发送一个（时长类）事件
   */
  export function trackEvent(params: {
    /** 事件名称（事件平台生成） */
    eventName: string
    /** 事件唯一ID （在同一条链路上，begin,track,end 的标识） */
    identifier: string
    /** 所有事件(begin,track,end)公有字段（该链路上，后面打点的数据会覆盖前面点数据，如下example中非data中的字段，ps：beginTime，endTime默认会打上） */
    attributes: any
    /** (begin,track,end)独有字段（会按照打点顺序组装成数组） */
    infos: any
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 链路点 结束事件埋点
   *开始一个（时长类）事件
   */
  export function endEvent(params: {
    /** 事件名称（事件平台生成） */
    eventName: string
    /** 事件唯一ID （在同一条链路上，begin,track,end 的标识） */
    identifier: string
    /** 所有事件(begin,track,end)公有字段（该链路上，后面打点的数据会覆盖前面点数据，如下example中非data中的字段，ps：beginTime，endTime默认会打上） */
    attributes: any
    /** (begin,track,end)独有字段（会按照打点顺序组装成数组） */
    infos: any
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 拿到当前App的业务信息
   */
  export function getAppInfo(params?: {
    complete?: () => void
    success?: (params: {
      /**
       * App信息
       * serverTimestamp 云端时间戳
       * appVersion app版本
       * language app语言包
       * countryCode 国家码
       * regionCode 地区码， 在RN Api中被当作“service”字段
       */
      serverTimestamp: number
      appVersion: string
      language: string
      countryCode: string
      regionCode: string
      /** appName app名称 */
      appName: string
      /** appIcon app图标 */
      appIcon: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 拿到当前连接的wifi的ssid
   */
  export function getCurrentWifiSSID(params?: {
    complete?: () => void
    success?: (params: {
      /** 拿到当前连接的wifi的ssid */
      ssId: string
    }) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 获取iconfont信息
   */
  export function getIconfontInfo(params?: {
    complete?: () => void
    success?: (params: {
      /**
       * iconfont 信息结构体
       * nameMap iconfont信息载体
       */
      nameMap: string
    }) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 获取手机当前地区语言 zh-hans 、en-GB
   */
  export function getLangKey(params?: {
    complete?: () => void
    success?: (params: {
      /** 手机当前地区语言 */
      langKey: string
    }) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 获取多语言
   */
  export function getLangContent(params?: {
    complete?: () => void
    success?: (params: {
      /** 多语言 */
      langContent: {}
    }) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 打开RN面板
   */
  export function openRNPanel(params: {
    /**
     * 跳转RN面板（优先通过deviceId跳转设备面板，panelUiInfoBean不为null，则两者组合来跳转面板）
     * deviceId 设备Id
     */
    deviceId: string
    /** uiId 面板uiId */
    uiId: string
    /**
     * panelUiInfoBean 面板信息
     * panelUiInfoBean的信息需要与对应deviceId匹配。如果在传入时，两者不对应，跳转的面板可能会出现问题。
     */
    panelUiInfoBean?: PanelUiInfoBean
    /**
     * 面板初始化参数
     * initialProps 初始化参数
     */
    initialProps?: any
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 打开内置H5容器
   */
  export function openInnerH5(params: {
    /** url H5链接地址 */
    url: string
    /** title H5标题 */
    title?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 打开系统设置中当前应用信息界面
   */
  export function openAppSystemSettingPage(params: {
    /**
     * 设置项名称
     * “Settings” -> 手机设置主界面
     * “Settings-Bluetooth” -> 手机蓝牙设置界面
     * “Settings-Notification” -> 手机通知设置界面
     * “Settings-WiFi” -> 手机设置WiFi界面
     * “App-Settings” -> App设置界面
     * “App-Settings-Permission” -> App权限设置界面
     * “App-Settings-Permission” -> App权限设置界面
     * “App-Settings-Notification” -> App通知设置界面
     */
    scope: string
    /** 请求code,Android特有 */
    requestCode?: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 打开手机系统设置界面
   */
  export function openSystemSettingPage(params: {
    /**
     * 设置项名称
     * “Settings” -> 手机设置主界面
     * “Settings-Bluetooth” -> 手机蓝牙设置界面
     * “Settings-Notification” -> 手机通知设置界面
     * “Settings-WiFi” -> 手机设置WiFi界面
     * “App-Settings” -> App设置界面
     * “App-Settings-Permission” -> App权限设置界面
     * “App-Settings-Permission” -> App权限设置界面
     * “App-Settings-Notification” -> App通知设置界面
     */
    scope: string
    /** 请求code,Android特有 */
    requestCode?: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): void

  /**
   * 路由跳转原生页面
   */
  export function router(params: {
    /** 路由链接 */
    url: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 跳转设备详情页面
   */
  export function goDeviceDetail(params: {
    /** 设备Id */
    deviceId: string
    /** 群组id */
    groupId?: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 跳转设备定时页面
   */
  export function goDeviceAlarm(params: {
    /** 设备Id */
    deviceId: string
    /** 群组id */
    groupId?: string
    /** category */
    category?: string
    /** repeat */
    repeat?: number
    /** timerConfig */
    timerConfig?: TimeConfig
    /** data */
    data: {}[]
    /** enableFilter */
    enableFilter?: boolean
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 压缩图片， 在保持原图长宽比基础上先裁剪至目标尺寸， 然后根据文件大小限制去执行质量压缩
   */
  export function resizeImage(params: {
    /**
     * 压缩参数
     * aspectFitWidth 自适应宽度
     */
    aspectFitWidth: number
    /** aspectFitHeight 自适应高度 */
    aspectFitHeight: number
    /** maxFileSize 最大图片文件大小限制值， 为空则不做限制, 单位:B */
    maxFileSize?: number
    /** path 图片路径 */
    path: string
    complete?: () => void
    success?: (params: {
      /**
       * 图片返回内容
       * path 图片路径
       */
      path: string
    }) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 旋转图片
   */
  export function rotateImage(params: {
    /** path 图片路径 */
    path: string
    /**
     * orientation 旋转方向
     * 0 - 默认方向
     * 1 - 旋转180°
     * 2 - 逆时针90°
     * 3 - 顺时针90°
     */
    orientation: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 下载网络图片至相册
   */
  export function saveToAlbum(params: {
    /** path 图片url */
    url: string
    /** encryptKey 密钥 */
    encryptKey: string
    /**
     * orientation 旋转方向
     * 90 - 顺时针90°
     * 180 - 顺时针180°
     * 270 - 顺时针270°
     */
    orientation: number
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 统一路由事件通知
   */
  export function onRouterEvent(listener: (params: RouterEvent) => void): void

  /**
   * 统一路由事件通知
   */
  export function offRouterEvent(listener: (params: RouterEvent) => void): void

  export type PanelUiInfoBean = {
    /** phase 面板phase */
    phase?: string
    /** type 面板类型 */
    type?: string
    /** ui 面板ui */
    ui?: string
    /** ui 面板版本号 */
    version?: string
    /** appRnVersion rn版本号 */
    appRnVersion?: string
    /** name 面板名称 */
    name?: string
    /** uiConfig 面板配置项 */
    uiConfig?: any
    /** rnFind 面板Find */
    rnFind?: boolean
    /** pid 产品id */
    pid?: string
    /** i18nTime 多语言 */
    i18nTime?: number
  }

  export type TimeConfig = {
    /** background */
    background: string
  }

  export type RouterEvent = {
    /** 业务事件名称,例如设备定时更新onDeviceAlarmUpdate */
    bizEventName: string
    /** 业务事件数据 */
    bizEventData: Object
  }

  export type EventBean = {
    /** 事件id */
    eventId: string
    /** 事件点对象 */
    event: any
  }

  export type TrackEventBean = {
    /** 事件名称（事件平台生成） */
    eventName: string
    /** 事件唯一ID （在同一条链路上，begin,track,end 的标识） */
    identifier: string
    /** 所有事件(begin,track,end)公有字段（该链路上，后面打点的数据会覆盖前面点数据，如下example中非data中的字段，ps：beginTime，endTime默认会打上） */
    attributes: any
    /** (begin,track,end)独有字段（会按照打点顺序组装成数组） */
    infos: any
  }

  export type AppInfoBean = {
    /**
     * App信息
     * serverTimestamp 云端时间戳
     * appVersion app版本
     * language app语言包
     * countryCode 国家码
     * regionCode 地区码， 在RN Api中被当作“service”字段
     */
    serverTimestamp: number
    appVersion: string
    language: string
    countryCode: string
    regionCode: string
    /** appName app名称 */
    appName: string
    /** appIcon app图标 */
    appIcon: string
  }

  export type SystemWirelessInfoBean = {
    /** 拿到当前连接的wifi的ssid */
    ssId: string
  }

  export type IconfontInfoBean = {
    /**
     * iconfont 信息结构体
     * nameMap iconfont信息载体
     */
    nameMap: string
  }

  export type LocalConstants = {
    /** 手机当前地区语言 */
    langKey: string
    /** 多语言 */
    langContent: {}
  }

  export type LangKeyResult = {
    /** 手机当前地区语言 */
    langKey: string
  }

  export type LangContentResult = {
    /** 多语言 */
    langContent: {}
  }

  export type PanelBean = {
    /**
     * 跳转RN面板（优先通过deviceId跳转设备面板，panelUiInfoBean不为null，则两者组合来跳转面板）
     * deviceId 设备Id
     */
    deviceId: string
    /** uiId 面板uiId */
    uiId: string
    /**
     * panelUiInfoBean 面板信息
     * panelUiInfoBean的信息需要与对应deviceId匹配。如果在传入时，两者不对应，跳转的面板可能会出现问题。
     */
    panelUiInfoBean?: PanelUiInfoBean
    /**
     * 面板初始化参数
     * initialProps 初始化参数
     */
    initialProps?: any
  }

  export type WebViewBean = {
    /** url H5链接地址 */
    url: string
    /** title H5标题 */
    title?: string
  }

  export type SettingPageBean = {
    /**
     * 设置项名称
     * “Settings” -> 手机设置主界面
     * “Settings-Bluetooth” -> 手机蓝牙设置界面
     * “Settings-Notification” -> 手机通知设置界面
     * “Settings-WiFi” -> 手机设置WiFi界面
     * “App-Settings” -> App设置界面
     * “App-Settings-Permission” -> App权限设置界面
     * “App-Settings-Permission” -> App权限设置界面
     * “App-Settings-Notification” -> App通知设置界面
     */
    scope: string
    /** 请求code,Android特有 */
    requestCode?: number
  }

  export type Object = {}

  export type RouterBean = {
    /** 路由链接 */
    url: string
  }

  export type DeviceDetailBean = {
    /** 设备Id */
    deviceId: string
    /** 群组id */
    groupId?: string
  }

  export type AlarmBean = {
    /** 设备Id */
    deviceId: string
    /** 群组id */
    groupId?: string
    /** category */
    category?: string
    /** repeat */
    repeat?: number
    /** timerConfig */
    timerConfig?: TimeConfig
    /** data */
    data: {}[]
    /** enableFilter */
    enableFilter?: boolean
  }

  export type ImageResizeBean = {
    /**
     * 压缩参数
     * aspectFitWidth 自适应宽度
     */
    aspectFitWidth: number
    /** aspectFitHeight 自适应高度 */
    aspectFitHeight: number
    /** maxFileSize 最大图片文件大小限制值， 为空则不做限制, 单位:B */
    maxFileSize?: number
    /** path 图片路径 */
    path: string
  }

  export type ImageResizeResultBean = {
    /**
     * 图片返回内容
     * path 图片路径
     */
    path: string
  }

  export type ImageRotateBean = {
    /** path 图片路径 */
    path: string
    /**
     * orientation 旋转方向
     * 0 - 默认方向
     * 1 - 旋转180°
     * 2 - 逆时针90°
     * 3 - 顺时针90°
     */
    orientation: number
  }

  export type ImageEncryptBean = {
    /** path 图片url */
    url: string
    /** encryptKey 密钥 */
    encryptKey: string
    /**
     * orientation 旋转方向
     * 90 - 顺时针90°
     * 180 - 顺时针180°
     * 270 - 顺时针270°
     */
    orientation: number
  }
}
