/**
 * BaseKit
 *
 * @version 2.1.2
 */
declare namespace ty {
  /**
   * 权限请求方法
   */
  export function authorize(params: {
    /**
     * scope 权限名称
     * 举例子：
     * scope.bluetooth 蓝牙权限
     * scope.writePhotosAlbum 写入相册权限
     * scope.userLocationBackground 后台定位权限
     * scope.record 麦克风权限
     * scope.writePhotosAlbum 摄像头权限
     * scope.userLocation 低精度定位权限
     * scope.userPreciseLocation 高精度定位权限
     */
    scope: string
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
   * 查询权限状态
   */
  export function authorizeStatus(params: {
    /**
     * scope 权限名称
     * 举例子：
     * scope.bluetooth 蓝牙权限
     * scope.writePhotosAlbum 写入相册权限
     * scope.userLocationBackground 后台定位权限
     * scope.record 麦克风权限
     * scope.writePhotosAlbum 摄像头权限
     * scope.userLocation 低精度定位权限
     * scope.userPreciseLocation 高精度定位权限
     */
    scope: string
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
   * 读取本地文件内容
   */
  export function readFile(params: {
    /** 要写入的文件路径 (本地路径) */
    filePath: string
    /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
    encoding: string
    /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
    position: number
    /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
    length: number
    complete?: () => void
    success?: (params: {
      /** 文件内容 */
      data: string
    }) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 读取本地文件内容
   */
  export function readFileSync(req?: FileReadFileReqBean): {
    /** 文件内容 */
    data: string
  }

  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  export function chooseImage(params?: {
    /** 最多可以选择的图片张数 */
    count?: number
    /** sizeType ['original', 'compressed'] */
    sizeType?: string[]
    /** 选择图片的来源 ['album', 'camera'] */
    sourceType?: string[]
    complete?: () => void
    success?: (params: {
      /** 图片的本地临时文件路径列表 (本地路径) */
      tempFilePaths: string[]
      /** sizeType ['original', 'compressed'] */
      tempFiles?: TempFileCB[]
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
   * 在新页面中全屏预览图片。
   */
  export function previewImage(params: {
    /** 需要预览的图片链接列表 */
    urls: string[]
    /** 当前显示图片的链接 */
    current: number
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
   * 显示消息提示框
   */
  export function showToast(params: {
    /** 提示的内容 */
    title: string
    /** 图标 'success' / 'fail' / 'loading' / 'none' */
    icon?: string
    /** 自定义图标的本地路径，image 的优先级高于 icon */
    image?: string
    /** 提示的延迟时间 */
    duration?: number
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
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
   * 显示模态对话框
   */
  export function showModal(params: {
    /** 提示的标题 */
    title: string
    /** 提示的内容 */
    content?: string
    /** 是否显示取消按钮 */
    showCancel?: boolean
    /** 取消按钮的文字，最多 4 个字符 */
    cancelText?: string
    /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    cancelColor?: string
    /** 确认按钮的文字，最多 4 个字符 */
    confirmText?: string
    /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    confirmColor?: string
    complete?: () => void
    success?: (params: {
      /** editable 为 true 时，用户输入的文本 */
      content?: string
      /** 为 true 时，表示用户点击了确定按钮 */
      confirm: boolean
      /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
      cancel: boolean
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
   * 显示 loading 提示框。需主动调用 ty.hideLoading 才能关闭提示框
   */
  export function showLoading(params: {
    /** 提示的内容 */
    title: string
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
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
   * 显示操作菜单
   */
  export function showActionSheet(params: {
    /** 警示文案 */
    alertText?: string
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: string[]
    /** 按钮的文字颜色 */
    itemColor?: string
    complete?: () => void
    success?: (params: {
      /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
      tapIndex: number
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
   * 隐藏消息提示框
   */
  export function hideToast(params?: {
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
   * 隐藏 loading 提示框
   */
  export function hideLoading(params?: {
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
   * 拨打电话
   */
  export function makePhoneCall(params: {
    /** 需要拨打的电话号码 */
    phoneNumber: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 设置系统剪贴板的内容
   */
  export function setClipboardData(params: {
    /** 剪贴板的内容 */
    data: string
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 获取系统剪贴板的内容
   */
  export function getClipboardData(params?: {
    complete?: () => void
    success?: (params: {
      /** 剪贴板的内容 */
      data: string
    }) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 获取系统信息
   */
  export function getSystemInfo(params?: {
    complete?: () => void
    success?: (params: {
      is24Hour: boolean
      system: string
      brand: string
      model: string
      platform: string
      timezoneId: string
      pixelRatio: number
      screenWidth: number
      screenHeight: number
      windowWidth: number
      windowHeight: number
      statusBarHeight: number
      language: string
      safeArea: SafeArea
      albumAuthorized: boolean
      cameraAuthorized: boolean
      locationAuthorized: boolean
      microphoneAuthorized: boolean
      notificationAuthorized: boolean
      notificationAlertAuthorized: boolean
      notificationBadgeAuthorized: boolean
      notificationSoundAuthorized: boolean
      bluetoothEnabled: boolean
      locationEnabled: boolean
      wifiEnabled: boolean
      theme?: Themes
      deviceOrientation?: Orientation
    }) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 获取系统信息
   */
  export function getSystemInfoSync(): {
    is24Hour: boolean
    system: string
    brand: string
    model: string
    platform: string
    timezoneId: string
    pixelRatio: number
    screenWidth: number
    screenHeight: number
    windowWidth: number
    windowHeight: number
    statusBarHeight: number
    language: string
    safeArea: SafeArea
    albumAuthorized: boolean
    cameraAuthorized: boolean
    locationAuthorized: boolean
    microphoneAuthorized: boolean
    notificationAuthorized: boolean
    notificationAlertAuthorized: boolean
    notificationBadgeAuthorized: boolean
    notificationSoundAuthorized: boolean
    bluetoothEnabled: boolean
    locationEnabled: boolean
    wifiEnabled: boolean
    theme?: Themes
    deviceOrientation?: Orientation
  }

  /**
   * 获取网络类型
   */
  export function getNetworkType(params?: {
    complete?: () => void
    success?: (params: {
      /** 网络类型 */
      networkType: string
      /** 信号强弱，单位 dbm */
      signalStrength: number
    }) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
   */
  export function setStorage(params: {
    /** 本地缓存中指定的 key */
    key: string
    /** key对应的内容 */
    data: string
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
   * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
   */
  export function setStorageSync(storageDataBean?: StorageDataBean): null

  /**
   * 从本地缓存中异步获取指定 key 的内容
   */
  export function getStorage(params: {
    /** 本地缓存中指定的 key */
    key: string
    complete?: () => void
    success?: (params: {
      /** key对应的内容 */
      data?: string
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
   * 从本地缓存中异步获取指定 key 的内容
   */
  export function getStorageSync(storageKeyBean?: StorageKeyBean): {
    /** key对应的内容 */
    data?: string
  }

  /**
   * 清理本地数据缓存
   */
  export function removeStorage(params: {
    /** 本地缓存中指定的 key */
    key: string
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
   * 清理本地数据缓存
   */
  export function removeStorageSync(storageKeyBean?: StorageKeyBean): null

  /**
   * 清理本地数据缓存
   */
  export function clearStorage(params?: {
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
   * 清理本地数据缓存
   */
  export function clearStorageSync(): null

  /**
   * 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data
   */
  export function uploadFile(params: {
    /** 网络请求id */
    requestId: string
    /** 开发者服务器地址 */
    url: string
    /** 要上传文件资源的路径 (本地路径) */
    filePath: string
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: any
    /** HTTP 请求中其他额外的 form data */
    formData?: any
    /** 超时时间，单位为毫秒 */
    timeout?: number
    complete?: () => void
    success?: (params: {
      /** 开发者服务器返回的数据 */
      data: string
      /** 开发者服务器返回的 HTTP 状态码 */
      statusCode: number
    }) => void
    failure?: (params: {}) => void
  }): void

  /**
   * 中断上传任务
   */
  export function abort(params: {
    /** 网络请求id */
    requestId: string
    complete?: () => void
    success?: (params: null) => void
    failure?: (params: {}) => void
  }): void

  /**
   * 监听蓝牙适配器状态变化事件
   */
  export function onBluetoothAdapterStateChange(
    listener: (params: {
      /** 蓝牙适配器是否可用 */
      available: boolean
    }) => void
  ): void

  /**
   * 取消监听蓝牙适配器状态变化事件
   */
  export function offBluetoothAdapterStateChange(
    listener: (params: {
      /** 蓝牙适配器是否可用 */
      available: boolean
    }) => void
  ): void

  /**
   * 监听网络状态变化事件
   */
  export function onNetworkStatusChange(
    listener: (params: {
      /** 当前是否有网络连接 */
      isConnected: boolean
      /** 网络类型 */
      networkType: string
    }) => void
  ): void

  /**
   * 取消监听网络状态变化事件
   */
  export function offNetworkStatusChange(
    listener: (params: {
      /** 当前是否有网络连接 */
      isConnected: boolean
      /** 网络类型 */
      networkType: string
    }) => void
  ): void

  /**
   * 监听 HTTP Response Header 事件。会比请求完成事件更早
   */
  export function onHeadersReceived(
    listener: (params: {
      /** 开发者服务器返回的 HTTP Response Header */
      header: any
    }) => void
  ): void

  /**
   * 取消监听 HTTP Response Header 事件
   */
  export function offHeadersReceived(
    listener: (params: {
      /** 开发者服务器返回的 HTTP Response Header */
      header: any
    }) => void
  ): void

  /**
   * 监听上传进度变化事件
   */
  export function onProgressUpdate(
    listener: (params: {
      /** 上传进度百分比 */
      progress: number
      /** 已经上传的数据长度，单位 Bytes */
      totalBytesSent: number
      /** 预期需要上传的数据总长度，单位 Bytes */
      totalBytesExpectedToSend: number
      /** 网络请求id */
      requestId: string
    }) => void
  ): void

  /**
   * 取消监听上传进度变化事件
   */
  export function offProgressUpdate(
    listener: (params: {
      /** 上传进度百分比 */
      progress: number
      /** 已经上传的数据长度，单位 Bytes */
      totalBytesSent: number
      /** 预期需要上传的数据总长度，单位 Bytes */
      totalBytesExpectedToSend: number
      /** 网络请求id */
      requestId: string
    }) => void
  ): void

  export enum HTTPMethod {
    /** HTTP 请求 OPTIONS */
    OPTIONS = "OPTIONS",

    /** HTTP 请求 GET */
    GET = "GET",

    /** HTTP 请求 HEAD */
    HEAD = "HEAD",

    /** HTTP 请求 POST */
    POST = "POST",

    /** HTTP 请求 PUT */
    PUT = "PUT",

    /** HTTP 请求 DELETE */
    DELETE = "DELETE",

    /** HTTP 请求 TRACE */
    TRACE = "TRACE",

    /** HTTP 请求 TRACE */
    CONNECT = "CONNECT",
  }

  export type Profile = {
    /** 第一个 HTTP 重定向发生时的时间。有跳转且是同域名内的重定向才算，否则值为 0 */
    redirectStart: number
    /** 最后一个 HTTP 重定向完成时的时间。有跳转且是同域名内部的重定向才算，否则值为 0 */
    redirectEnd: number
    /** 组件准备好使用 HTTP 请求抓取资源的时间，这发生在检查本地缓存之前 */
    fetchStart: number
    /** DNS 域名查询开始的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
    domainLookupStart: number
    /** DNS 域名查询完成的时间，如果使用了本地缓存（即无 DNS 查询）或持久连接，则与 fetchStart 值相等 */
    domainLookupEnd: number
    /** HTTP（TCP） 开始建立连接的时间，如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接开始的时间 */
    connectStart: number
    /** HTTP（TCP） 完成建立连接的时间（完成握手），如果是持久连接，则与 fetchStart 值相等。注意如果在传输层发生了错误且重新建立连接，则这里显示的是新建立的连接完成的时间。注意这里握手结束，包括安全连接建立完成、SOCKS 授权通过 */
    connectEnd: number
    /** SSL建立连接的时间,如果不是安全连接,则值为 0 */
    SSLconnectionStart: number
    /** SSL建立完成的时间,如果不是安全连接,则值为 0 */
    SSLconnectionEnd: number
    /** HTTP请求读取真实文档开始的时间（完成建立连接），包括从本地读取缓存。连接错误重连时，这里显示的也是新建立连接的时间 */
    requestStart: number
    /** HTTP请求读取真实文档结束的时间 */
    requestEnd: number
    /** HTTP 开始接收响应的时间（获取到第一个字节），包括从本地读取缓存 */
    responseStart: number
    /** HTTP 响应全部接收完成的时间（获取到最后一个字节），包括从本地读取缓存 */
    responseEnd: number
    /** 当次请求连接过程中实时 rtt */
    rtt: number
    /** 评估的网络状态 slow 2g/2g/3g/4g */
    estimate_nettype: string
    /** 协议层根据多个请求评估当前网络的 rtt（仅供参考） */
    httpRttEstimate: number
    /** 传输层根据多个请求评估的当前网络的 rtt（仅供参考） */
    transportRttEstimate: number
    /** 评估当前网络下载的kbps */
    downstreamThroughputKbpsEstimate: number
    /** 当前网络的实际下载kbps */
    throughputKbps: number
    /** 当前请求的IP */
    peerIP: string
    /** 当前请求的端口 */
    port: number
    /** 是否复用连接 */
    socketReused: boolean
    /** 发送的字节数 */
    sendBytesCount: number
    /** 收到字节数 */
    receivedBytedCount: number
  }

  export type FileReadFileReqBean = {
    /** 要写入的文件路径 (本地路径) */
    filePath: string
    /** 指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容 */
    encoding: string
    /** 从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte */
    position: number
    /** 指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte */
    length: number
  }

  export type TempFileCB = {
    /** 本地临时文件路径 (本地路径) */
    path: string
    /** 本地临时文件大小，单位 B */
    size?: number
  }

  export type SafeArea = {
    left: number
    right: number
    top: number
    bottom: number
    width: number
    height: number
  }

  export enum Themes {
    dark = "dark",

    light = "light",
  }

  export enum Orientation {
    portrait = "portrait",

    landscape = "landscape",
  }

  export type StorageDataBean = {
    /** 本地缓存中指定的 key */
    key: string
    /** key对应的内容 */
    data: string
  }

  export type StorageKeyBean = {
    /** 本地缓存中指定的 key */
    key: string
  }

  export type ReadFileBean = {
    /** 文件内容 */
    data: string
  }

  export type ChooseImageBean = {
    /** 最多可以选择的图片张数 */
    count?: number
    /** sizeType ['original', 'compressed'] */
    sizeType?: string[]
    /** 选择图片的来源 ['album', 'camera'] */
    sourceType?: string[]
  }

  export type ChooseImageCB = {
    /** 图片的本地临时文件路径列表 (本地路径) */
    tempFilePaths: string[]
    /** sizeType ['original', 'compressed'] */
    tempFiles?: TempFileCB[]
  }

  export type PreviewImageBean = {
    /** 需要预览的图片链接列表 */
    urls: string[]
    /** 当前显示图片的链接 */
    current: number
  }

  export type ToastBean = {
    /** 提示的内容 */
    title: string
    /** 图标 'success' / 'fail' / 'loading' / 'none' */
    icon?: string
    /** 自定义图标的本地路径，image 的优先级高于 icon */
    image?: string
    /** 提示的延迟时间 */
    duration?: number
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
  }

  export type ModalBean = {
    /** 提示的标题 */
    title: string
    /** 提示的内容 */
    content?: string
    /** 是否显示取消按钮 */
    showCancel?: boolean
    /** 取消按钮的文字，最多 4 个字符 */
    cancelText?: string
    /** 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    cancelColor?: string
    /** 确认按钮的文字，最多 4 个字符 */
    confirmText?: string
    /** 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 */
    confirmColor?: string
  }

  export type ModalCallback = {
    /** editable 为 true 时，用户输入的文本 */
    content?: string
    /** 为 true 时，表示用户点击了确定按钮 */
    confirm: boolean
    /** 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） */
    cancel: boolean
  }

  export type LoadingBean = {
    /** 提示的内容 */
    title: string
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean
  }

  export type ActionSheet = {
    /** 警示文案 */
    alertText?: string
    /** 按钮的文字数组，数组长度最大为 6 */
    itemList: string[]
    /** 按钮的文字颜色 */
    itemColor?: string
  }

  export type ActionSheetCallback = {
    /** 用户点击的按钮序号，从上到下的顺序，从0开始 */
    tapIndex: number
  }

  export type HTTPRequest = {
    /** 开发者服务器接口地址 */
    url: string
    /** 网络请求 id */
    taskId: string
    /** 请求的参数 */
    data?: string
    /** 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json */
    header?: any
    /** 超时时间，单位为毫秒 */
    timeout?: number
    /** HTTP 请求方法 */
    method?: HTTPMethod
    /** 返回的数据格式 */
    dataType?: any
    /** 返回的数据类型 */
    responseType?: string
    /** enableHttp2 */
    enableHttp2?: boolean
    /** enableQuic */
    enableQuic?: boolean
    /** enableCache */
    enableCache?: boolean
  }

  export type SuccessResult = {
    /** 开发者服务器返回的数据 */
    data: string
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number
    /** 开发者服务器返回的 HTTP Response Header */
    header: any
    /** 开发者服务器返回的 cookies，格式为字符串数组 */
    cookies: string[]
    /** 网络请求过程中一些调试信息 */
    profile: Profile
    /** 网络请求id，用户取消、监听等操作 */
    taskId: string
  }

  export type RequestContext = {
    /** 网络请求id */
    taskId: string
  }

  export type PhoneCallBean = {
    /** 需要拨打的电话号码 */
    phoneNumber: string
  }

  export type ClipboradDataBean = {
    /** 剪贴板的内容 */
    data: string
  }

  export type SystemInfo = {
    is24Hour: boolean
    system: string
    brand: string
    model: string
    platform: string
    timezoneId: string
    pixelRatio: number
    screenWidth: number
    screenHeight: number
    windowWidth: number
    windowHeight: number
    statusBarHeight: number
    language: string
    safeArea: SafeArea
    albumAuthorized: boolean
    cameraAuthorized: boolean
    locationAuthorized: boolean
    microphoneAuthorized: boolean
    notificationAuthorized: boolean
    notificationAlertAuthorized: boolean
    notificationBadgeAuthorized: boolean
    notificationSoundAuthorized: boolean
    bluetoothEnabled: boolean
    locationEnabled: boolean
    wifiEnabled: boolean
    theme?: Themes
    deviceOrientation?: Orientation
  }

  export type NetworkTypeCB = {
    /** 网络类型 */
    networkType: string
    /** 信号强弱，单位 dbm */
    signalStrength: number
  }

  export type StorageCallback = {
    /** key对应的内容 */
    data?: string
  }

  export type UpLoadBean = {
    /** 网络请求id */
    requestId: string
    /** 开发者服务器地址 */
    url: string
    /** 要上传文件资源的路径 (本地路径) */
    filePath: string
    /** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
    name: string
    /** HTTP 请求的 Header，Header 中不能设置 Referer */
    header?: any
    /** HTTP 请求中其他额外的 form data */
    formData?: any
    /** 超时时间，单位为毫秒 */
    timeout?: number
  }

  export type UpLoadResult = {
    /** 开发者服务器返回的数据 */
    data: string
    /** 开发者服务器返回的 HTTP 状态码 */
    statusCode: number
  }

  export type RequestBean = {
    /** 网络请求id */
    requestId: string
  }

  /**
   * 获取网络请求任务对象RequestTask
   */
  interface RequestTask {
    /**
     * 中断请求任务
     */
    abort(params: {
      complete?: () => void
      success?: (params: null) => void
      failure?: (params: {
        errorMsg: string
        errorCode: string | number
        innerError: {
          errorCode: string | number
          errorMsg: string
        }
      }) => void
    }): void

    /**
     * 监听 HTTP Response Header 事件。会比请求完成事件更早
     */
    onHeadersReceived(
      listener: (params: {
        /** 开发者服务器返回的 HTTP Response Header */
        header: any
      }) => void
    ): void

    /**
     * 取消监听 HTTP Response Header 事件
     */
    offHeadersReceived(
      listener: (params: {
        /** 开发者服务器返回的 HTTP Response Header */
        header: any
      }) => void
    ): void
  }
  export function request(params: {
    /** 开发者服务器接口地址 */
    url: string
    /** 请求的参数 */
    data?: string
    /** 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json */
    header?: any
    /** 超时时间，单位为毫秒 */
    timeout?: number
    /** HTTP 请求方法 */
    method?: HTTPMethod
    /** 返回的数据格式 */
    dataType?: any
    /** 返回的数据类型 */
    responseType?: string
    /** enableHttp2 */
    enableHttp2?: boolean
    /** enableQuic */
    enableQuic?: boolean
    /** enableCache */
    enableCache?: boolean
    complete?: () => void
    success?: (params: {
      /** 开发者服务器返回的数据 */
      data: string
      /** 开发者服务器返回的 HTTP 状态码 */
      statusCode: number
      /** 开发者服务器返回的 HTTP Response Header */
      header: any
      /** 开发者服务器返回的 cookies，格式为字符串数组 */
      cookies: string[]
      /** 网络请求过程中一些调试信息 */
      profile: Profile
      /** 网络请求id，用户取消、监听等操作 */
      taskId: string
    }) => void
    failure?: (params: {
      errorMsg: string
      errorCode: string | number
      innerError: {
        errorCode: string | number
        errorMsg: string
      }
    }) => void
  }): RequestTask
}
