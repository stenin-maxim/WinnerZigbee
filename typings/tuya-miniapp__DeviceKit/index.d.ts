/**
 * DeviceKit
 *
 * @version 2.3.3
 */
declare namespace ty.device {
  /**
   * 获取BLE外设的信号
   */
  export function getBLEDeviceRSSI(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * 设备信号
       * signal 若为 0，则获取失败
       */
      signal: number
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
   * 开始监听BLE(tuya)连接状态
   */
  export function subscribeTYBLEConnectStatus(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 停止监听BLE(tuya)连接状态
   */
  export function unsubscribeTYBLEConnectStatus(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 连接BLE(tuya)设备，【Android特有：与directConnectBLEDevice方法的区别在于，该方法会先进行扫描的动作，扫描到设备之后才会进行连接。】
   */
  export function connectTYBLEDevice(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 直连BLE(tuya)设备，【Android特有：与connectTYBLEDevice方法的区别在于，该方法在连接设备时并不会进行扫描的动作。换言之，需要先扫描到设备之后，方可调用该方法进行连接】
   */
  export function directConnectBLEDevice(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 断开BLE(tuya)设备
   */
  export function disconnectTYBLEDevice(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 查询BLE(tuya)本地在线状态
   */
  export function getTYBLEOnlineState(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * 蓝牙在线状态的回调boolean值
       * isOnline 是否在线
       */
      isOnline: boolean
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
   * 开始监听BLE(tuya)设备数据透传通道上报
   */
  export function subscribeTYBLETransparentDataReport(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 停止监听BLE(tuya)设备数据透传通道上报
   */
  export function unsubscribeTYBLETransparentDataReport(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * BLE(tuya)下发透传数据
   */
  export function publishTYBLETransparentData(params: {
    /**
     * 蓝牙透传数据
     * deviceId: 设备 id
     */
    deviceId: string
    /** data: 透传内容 */
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
   * 获取加密过的设备 localKey
   *BLE(tuya)蓝牙大数据通道传输过程中需要用到的特殊加密操作
   */
  export function getEncryptLocalKeyWithData(params: {
    /**
     * 大数据通道加密计算结构
     * deviceId 设备 id
     */
    deviceId: string
    /** keyDeviceId 需要传输加密密钥的设备Id */
    keyDeviceId: string
    complete?: () => void
    success?: (params: string) => void
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
   * 大数据通道操作，支持进度反馈
   */
  export function postTYBLEBigDataChannelWithProgress(params: {
    /** deviceId 设备 id */
    deviceId: string
    /**
     * 建立数据传输所需相关参数
     * command：通道操作的具体指令；start/stop：开启/关闭大数据通道；type：要上传的数据类型
     * requestParams 通道指令集
     * {
     *   "command": "start",
     *   "type": "1"
     * }
     */
    requestParams: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** deviceId 设备 id */
      deviceId: string
      /**
       * 数据传输完毕相关参数（type dps fileUrl）
       * resultParams 数据传输完毕相关参数
       */
      resultParams: Record<string, {}>
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
   * 发起蓝牙mesh设备直连
   */
  export function startBLEMeshLowPowerConnection(params: {
    /** deviceId 设备 id */
    deviceId: string
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
   * 断开蓝牙mesh设备连接
   */
  export function stopBLEMeshLowPowerConnection(params: {
    /** deviceId 设备 id */
    deviceId: string
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
   * 启动扫描Beacon扫描
   */
  export function startBLEScanBeacon(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 停止扫描Beacon扫描。
   */
  export function stopBLEScanBeacon(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 设备是否支持BLEBeacon能力
   */
  export function bluetoothCapabilityOfBLEBeacon(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: boolean) => void
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
   * 判断手机蓝牙是否打开
   */
  export function bluetoothIsPowerOn(params?: {
    complete?: () => void
    success?: (params: boolean) => void
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
   * 在指定时间内扫描已配网设备
   */
  export function startBLEScanBindDevice(params: {
    /** 间隔扫描时间。如果<0，则返回错误 */
    interval: number
    /**
     * 扫描类型
     * SINGLE -> "SINGLE"
     * SINGLE_QR -> "SINGLE_QR"
     * MESH -> "MESH"
     * SIG_MESH -> "SIG_MESH"
     * NORMAL -> "NORMAL"
     * TY_BEACON -> "TY_BEACON"
     */
    scanType: string
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
   * iOS单端插件方法。调用 connectTYBLEDevice 连接蓝牙设备前需要先调用该方法开启扫描。
   *开启扫描
   */
  export function startBLEScan(params?: {
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
   * iOS单端插件方法。调用 connectTYBLEDevice 连接蓝牙设备前需要先调用该方法开启扫描。
   *开启扫描
   */
  export function startBLEScanSync(): null

  /**
   * iOS单端插件方法。不需要连接设备时调用该方法关闭扫描。
   *关闭扫描
   */
  export function stopBLEScan(params?: {
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
   * iOS单端插件方法。不需要连接设备时调用该方法关闭扫描。
   *关闭扫描
   */
  export function stopBLEScanSync(): null

  /**
   *
   *蓝牙设备是否支持某个能力 5->定时 6->BT
   */
  export function bluetoothCapabilityIsSupport(params: {
    /** 设备Id */
    deviceId: string
    /**
     * 能力值标位
     * 5：定时
     */
    capability: number
    complete?: () => void
    success?: (params: {
      /**
       * 是否支持蓝牙相关能力的结果回调
       * isSupport 是否支持
       */
      isSupport: boolean
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
   * 获取设备BT信息
   */
  export function getBTDeviceInfo(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 设备名称 */
      deviceName?: string
      /** 是否连接 */
      isConnected?: boolean
      /** 是否配对 */
      isBond?: boolean
      /** mac */
      mac?: string
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
   * 使网关进入配网模式，对其子设备进行配网
   */
  export function startGWActivation(params: {
    /**
     * 网关子设备激活数据
     * gateway Gateway 网关模型
     */
    gateway: Gateway
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 停止网关的配网模式
   */
  export function stopGWActivation(params: {
    /**
     * 网关模型
     * gwId 网关设备Id
     */
    gwId: string
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
   * 跳转设备断线重连页面
   */
  export function openReconnectPage(params: {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
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
   * 免配网-开始设备激活
   */
  export function startDirectlyConnectedDeviceActivator(params: {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 免配网-停止设备激活
   */
  export function stopDirectlyConnectedDeviceActivator(params: {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 进入配网-选品类首页
   */
  export function openCategoryActivatorPage(params?: {
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
   * 免配网-开始设备扫描
   */
  export function startDirectlyConnectedSearchDevice(params: {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 免配网-结束设备扫描
   */
  export function stopDirectlyConnectedSearchDevice(params: {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
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
   * 重置设备并恢复出厂设置。
   *设备数据会被清除并进入待配网状态。
   */
  export function resetFactory(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps 科学变化的数据 */
    dps?: Record<string, {}>
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
   * 移除设备
   */
  export function removeDevice(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps 科学变化的数据 */
    dps?: Record<string, {}>
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
   * 注册Zigbee网关子设备监听器
   */
  export function registerZigbeeGateWaySubDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps 科学变化的数据 */
    dps?: Record<string, {}>
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
   * 注销Zigbee网关子设备监听器
   */
  export function unregisterZigbeeGateWaySubDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps 科学变化的数据 */
    dps?: Record<string, {}>
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
   * 检查设备某个通道是否在线
   */
  export function getDeviceOnlineType(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps 科学变化的数据 */
    dps?: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** 设备网络在线类型 */
      onlineType: number
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
   * 获取设备的设备信息
   */
  export function getDeviceInfo(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps 科学变化的数据 */
    dps?: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** 产品信息，schema，功能定义都在里面 */
      schema: {}[]
      /**
       * dps
       * 设备的功能点状态，可以根据对应的 dpid 拿到具体的状态值去做业务逻辑
       */
      dps: Record<string, {}>
      /**
       * attribute
       * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
       */
      attribute: number
      /**
       * capability
       * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
       * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
       */
      capability: number
      /**
       * dpName
       * 自定义 dp 的名字，通常在面板里会使用到
       */
      dpName: Record<string, string>
      /**
       * ability
       * 目前业务很少使用，用于区分特殊类型的设备
       */
      ability: number
      /**
       * icon
       * 设备的 icon url
       */
      icon: string
      /**
       * devId
       * 设备的唯一 id
       */
      devId: string
      /**
       * verSw
       * 设备固件版本号
       */
      verSw: string
      /**
       * isShare
       * 是否为分享设备，true 则是分享设备
       */
      isShare: boolean
      /**
       * bv
       * 设备的基线版本号
       */
      bv: string
      /**
       * uuid
       * 设备的固件唯一标识
       */
      uuid: string
      /**
       * panelConfig
       * 产品面板里的配置项，通常在 IoT 平台上可以查看到对应的配置
       */
      panelConfig: Record<string, {}>
      /**
       * activeTime
       * 设备激活时间，时间戳
       */
      activeTime: number
      /**
       * devAttribute
       * 设备的业务能力拓展，二进制位的方式进行运算
       */
      devAttribute: number
      /**
       * pcc
       * 涂鸦自研蓝牙 mesh 产品的分类标识
       */
      pcc: string
      /**
       * nodeId
       * 子设备的短地址
       */
      nodeId: string
      /**
       * parentId
       * 上级节点 id，子设备/或蓝牙 mesh 设备通常会有该字段，用于内部寻找相关的网关或上级模型来进行业务处理
       */
      parentId: string
      /**
       * category
       * 产品的分类
       */
      category: string
      /**
       * standSchemaModel
       * 标准产品功能集定义模型
       */
      standSchemaModel: {}
      /**
       * productId
       * 设备对应的产品 id
       */
      productId: string
      /**
       * bizAttribute
       * 设备自主上报的能力位
       */
      bizAttribute: number
      /**
       * meshId
       * 涂鸦自研的蓝牙 mesh id
       */
      meshId: string
      /**
       * sigmeshId
       * 当前设备所属行业属性对应的蓝牙 mesh id
       */
      sigmeshId: string
      /**
       * meta
       * 设备自定义配置元属性，用于存放业务数据
       */
      meta: Record<string, {}>
      /**
       * isLocalOnline
       * 本地局域网是否在线
       */
      isLocalOnline: boolean
      /**
       * isOnline
       * 设备总的在线情况，只要一个情况在线，就是在线，复合在线情况
       */
      isOnline: boolean
      /**
       * name
       * 设备名称
       */
      name: string
      /** groupId */
      groupId: string
      /**
       * dpCodes
       * 标准功能集 code
       */
      dpCodes: Record<string, {}>
      /** 原始 json，业务来不及拓展更新的时候，可以根据这个来获取处理 */
      originJson: Record<string, {}>
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
   * 获取产品信息
   */
  export function getProductInfo(params: {
    /** 产品id */
    productId: string
    complete?: () => void
    success?: (params: {
      /** 产品原始 json 信息 */
      originJson: Record<string, {}>
      /** 面板配置项，可以在平台进行配置 */
      panelConfig: Record<string, {}>
      /** 产品功能定义集合 */
      schema: string
      /** 产品功能定义集合拓展 */
      schemaExt: string
      /**
       * capability
       * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
       * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
       */
      capability: number
      /**
       * attribute
       * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
       */
      attribute: number
      /**
       * productId
       * 产品 id
       */
      productId: string
      /**
       * category
       * 产品的分类
       */
      category: string
      /**
       * categoryCode
       * 产品的二级分类
       */
      categoryCode: string
      /**
       * standard
       * 是否为标准产品
       */
      standard: boolean
      /**
       * pcc
       * 涂鸦自研蓝牙 mesh 产品的分类标识
       */
      pcc: string
      /**
       * vendorInfo
       * 涂鸦自研蓝牙 mesh 产品的分类标识，融合类使用
       */
      vendorInfo: string
      /**
       * quickOpDps
       * 快捷操作的 dp ids
       */
      quickOpDps: string[]
      /**
       * faultDps
       * 告警/错误的显示 dp ids
       */
      faultDps: string[]
      /**
       * displayDps
       * 快捷操作的 dp ids
       */
      displayDps: string[]
      /**
       * displayMsgs
       * 快捷操作显示文案
       */
      displayMsgs: Record<string, {}>
      /**
       * uiPhase
       * ui 包当前环境，预览包或线上包
       */
      uiPhase: string
      /**
       * uiId
       * ui 包唯一包名识别
       */
      uiId: string
      /**
       * uiVersion
       * ui 包版本号
       */
      uiVersion: string
      /**
       * ui
       * ui 小标识
       */
      ui: string
      /**
       * rnFind
       * 是否有包含 RN 包
       */
      rnFind: boolean
      /**
       * uiType
       * ui 包类型
       */
      uiType: string
      /**
       * uiName
       * ui 包名称
       */
      uiName: string
      /**
       * i18nTime
       * 产品语言包最新更新时间
       */
      i18nTime: number
      /**
       * supportGroup
       * 是否支持创建群组
       */
      supportGroup: boolean
      /**
       * supportSGroup
       * 是否支持创建标准群组
       */
      supportSGroup: boolean
      /**
       * configMetas
       * 产品特殊配置项，一些功能业务的特殊配置
       */
      configMetas: Record<string, {}>
      /**
       * productVer
       * 产品版本
       */
      productVer: string
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
   * 获取子设备信息
   */
  export function getSubDeviceInfoList(params: {
    /** 网关设备id或上级节点id */
    meshId: string
    complete?: () => void
    success?: (params: DeviceInfo[]) => void
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
   * 判断设备上网类型是否与deviceModel物模型一致
   */
  export function validDeviceOnlineType(params: {
    /** 设备id */
    deviceId: string
    /**
     * 设备在线类型，
     * Wi-Fi online             1 << 0
     * Local online             1 << 1
     * Bluetooth LE online      1 << 2
     * Bluetooth LE mesh online 1 << 3
     */
    onlineType: number
    complete?: () => void
    success?: (params: boolean) => void
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
   * 发送 dps
   */
  export function publishDps(params: {
    /** 设备id */
    deviceId: string
    /** dps */
    dps: Record<string, {}>
    /**
     * 下发通道类型
     * 0: 局域网
     * 1: 网络
     * 2: 自动
     */
    mode: number
    /**
     * 下发通道的优先级
     * LAN       = 0, // LAN
     * MQTT      = 1, // MQTT
     * HTTP      = 2, // Http
     * BLE       = 3, // Single Point Bluetooth
     * SIGMesh   = 4, // Sig Mesh
     * BLEMesh   = 5, // Tuya Private Mesh
     * BLEBeacon = 6, // Beacon
     */
    pipelines: number[]
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
    complete?: () => void
    success?: (params: boolean) => void
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
   * 发送 标准dp
   */
  export function publishCommands(params: {
    /** 设备id */
    deviceId: string
    /** dps */
    dps: Record<string, {}>
    /**
     * 下发通道类型
     * 0: 局域网
     * 1: 网络
     * 2: 自动
     */
    mode: number
    /**
     * 下发通道的优先级
     * LAN       = 0, // LAN
     * MQTT      = 1, // MQTT
     * HTTP      = 2, // Http
     * BLE       = 3, // Single Point Bluetooth
     * SIGMesh   = 4, // Sig Mesh
     * BLEMesh   = 5, // Tuya Private Mesh
     * BLEBeacon = 6, // Beacon
     */
    pipelines: number[]
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
    complete?: () => void
    success?: (params: boolean) => void
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
   * 指定通道发送dps控制指令
   */
  export function publishDpsWithPipeType(params: {
    /** 设备id */
    deviceId: string
    /** dps */
    dps: Record<string, {}>
    /**
     * 下发通道类型
     * 0: 局域网
     * 1: 网络
     * 2: 自动
     */
    mode: number
    /**
     * 下发通道的优先级
     * LAN       = 0, // LAN
     * MQTT      = 1, // MQTT
     * HTTP      = 2, // Http
     * BLE       = 3, // Single Point Bluetooth
     * SIGMesh   = 4, // Sig Mesh
     * BLEMesh   = 5, // Tuya Private Mesh
     * BLEBeacon = 6, // Beacon
     */
    pipelines: number[]
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
    complete?: () => void
    success?: (params: boolean) => void
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
   * 查询 dps
   */
  export function queryDps(params: {
    /** 设备id */
    deviceId: string
    /** dpids 数组 */
    dpIds: number[]
    complete?: () => void
    success?: (params: boolean) => void
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
   * 通过 MQTT 消息通道下发消息
   */
  export function publishMqttMessage(params: {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
    complete?: () => void
    success?: (params: boolean) => void
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
   * 通过 局域网 消息通道下发消息
   */
  export function publishLanMessage(params: {
    /** 消息内容 */
    message: string
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options?: Record<string, {}>
    complete?: () => void
    success?: (params: boolean) => void
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
   * 通过 Socket 消息通道下发消息
   */
  export function publishSocketMessage(params: {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 局域网消息 type */
    type: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
    complete?: () => void
    success?: (params: boolean) => void
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
   * 获取设备属性
   */
  export function getDeviceProperty(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps 科学变化的数据 */
    dps?: Record<string, {}>
    complete?: () => void
    success?: (params: {
      /** the properties map */
      properties: Record<string, Object>
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
   * 设置设备属性
   */
  export function setDeviceProperty(params: {
    /** deviceId */
    deviceId: string
    /** the custom data key */
    code: string
    /** the custom data value */
    value: string
    complete?: () => void
    success?: (params: {
      /** deviceId */
      deviceId: string
      /** set DeviceProperty successfully */
      result: boolean
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
   * 同步设备信息
   */
  export function syncDeviceInfo(params: {
    /** 设备id */
    deviceId: string
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
   * 订阅设备移除事件
   */
  export function subscribeDeviceRemoved(params: {
    /** 设备id */
    deviceId: string
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
   * 取消订阅设备移除事件
   */
  export function unSubscribeDeviceRemoved(params: {
    /** 设备id */
    deviceId: string
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
   * 注册设备的MQTT信息监听
   */
  export function registerMQTTDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
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
   * 注销设备的MQTT信息监听
   */
  export function unregisterMQTTDeviceListener(params: {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
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
   * 注册MQTT协议监听
   */
  export function registerMQTTProtocolListener(params: {
    /**
     * protocol 协议号
     * MQTT预定义的协议号
     */
    protocol: number
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
   * 注销MQTT协议监听
   */
  export function unregisterMQTTProtocolListener(params: {
    /**
     * protocol 协议号
     * MQTT预定义的协议号
     */
    protocol: number
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
   * 注册需要监听的设备列表的监听器
   */
  export function registerDeviceListListener(params: {
    /** 需注册的设备列表 */
    deviceIdList: string[]
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
   * 注销需要监听的设备列表的监听器
   */
  export function unregisterDeviceListListener(params?: {
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
   * 检查固件升级信息
   */
  export function checkOTAUpdateInfo(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 跳转设备详情
   */
  export function openDeviceDetailPage(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 跳转群组详情
   */
  export function openGroupDetailPage(params: {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
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
   * 跳转定时界面
   */
  export function openTimerPage(params: {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * repeat
     * 0表示需要选择重复，1表示不需要
     */
    repeat?: number
    /**
     * data
     * dp 数据
     * {
     *     "dpName": dp 点名称，string
     *     "dpId": dp 点 id，string
     *     "selected": dp 点默认值的 index，t.Integer
     *     "rangeKeys": dp 点的值范围，Array<object>
     *     "rangeValues": dp 点的显示数据范围，Array<string>
     * }
     */
    data: {}[]
    /**
     * timerConfig
     * UI配置
     */
    timerConfig?: TimerConfig
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
   * 跳转定时界面
   */
  export function openGroupTimerPage(params: {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * repeat
     * 0表示需要选择重复，1表示不需要
     */
    repeat?: number
    /**
     * data
     * dp 数据
     * {
     *     "dpName": dp 点名称，string
     *     "dpId": dp 点 id，string
     *     "selected": dp 点默认值的 index，t.Integer
     *     "rangeKeys": dp 点的值范围，Array<object>
     *     "rangeValues": dp 点的显示数据范围，Array<string>
     * }
     */
    data: {}[]
    /**
     * timerConfig
     * UI配置
     */
    timerConfig?: TimerConfig
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
   * 跳转设备 wifi 网络监测页面
   */
  export function openDeviceWifiNetworkMonitorPage(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 同步定时任务
   */
  export function syncTimerTask(params: {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id ，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * category
     * 定时分类
     */
    category: string
    complete?: () => void
    success?: (params: {
      /**
       * timers
       * 定时列表
       */
      timers: TimerModel[]
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
   * 添加定时
   */
  export function addTimer(params: {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id ，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * timer
     * 添加定时模型
     */
    timer: AddTimerModel
    complete?: () => void
    success?: (params: {
      /**
       * timerId
       * 定时器 id
       */
      timerId: string
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
   * 更新定时
   */
  export function updateTimer(params: {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timer
     * 更新定时模型
     */
    timer: UpdateTimerModel
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
   * 更新定时状态
   */
  export function updateTimerStatus(params: {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timerId
     * 定时 id
     */
    timerId: string
    /**
     * status
     * 状态
     */
    status: boolean
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
   * 删除定时
   */
  export function removeTimer(params: {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
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
   * 获取共享设备信息
   */
  export function getShareDeviceInfo(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 姓名 */
      name: string
      /** 手机号 */
      mobile: string
      /** 邮件 */
      email: string
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
   * 跳转设备编辑页面
   */
  export function openDeviceEdit(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 跳转群组编辑页面
   */
  export function openGroupEdit(params: {
    /**
     * groupId
     * 设备 id
     */
    groupId: string
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
   * 跳转设备信息页面
   */
  export function openDeviceInfo(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 设备是否支持离线提醒
   */
  export function isDeviceSupportOfflineReminder(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * support
       * 是否支持设备离线提醒
       */
      isSupport: boolean
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
   * 获取设备离线提醒的开关状态
   */
  export function getDeviceOfflineReminderState(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * state
       * 设备离线提醒的开关状态 0:关 1:开
       */
      state: number
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
   * 离线提醒开关
   */
  export function toggleDeviceOfflineReminder(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    /**
     * state
     * 设备离线提醒的开关状态 0:关 1:开
     */
    state: number
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
   * 获取离线提醒警告内容（关闭离线提醒开关后的警告）
   */
  export function getDeviceOfflineReminderWarningText(params?: {
    complete?: () => void
    success?: (params: {
      /** 离线提醒关闭警告文案 */
      warningText: string
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
   * 跳转常见问题与反馈页面
   */
  export function openDeviceQuestionsAndFeedback(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 跳转共享设备页面
   */
  export function openShareDevice(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 添加设备到桌面
   */
  export function addDeviceToDesk(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 移除共享设备
   */
  export function removeShareDevice(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 获取设备支持的三方服务
   */
  export function getSupportedThirdPartyServices(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /** 服务列表 */
      services: ThirdPartyService[]
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
   * 获取 group 信息
   */
  export function getGroupInfo(params: {
    /** 群组id */
    groupId: string
    complete?: () => void
    success?: (params: {
      /**
       * groupId
       * The group ID.
       */
      groupId: string
      /**
       * productId
       * The product ID.
       */
      productId: string
      /**
       * name
       * The name of the group.
       */
      name: string
      /**
       * time
       * The time when the group was created.
       */
      time: number
      /**
       * iconUrl
       * The URL of the icon.
       */
      iconUrl: string
      /**
       * type
       * The type of group.
       * Wifi = 0, Mesh = 1, Zigbee = 2, SIGMesh = 3, Beacon = 4,
       */
      type: number
      /** isShare */
      isShare: boolean
      /** dps */
      dps: {}
      /** dpCodes */
      dpCodes: {}
      /**
       * deviceNum
       * The number of devices,
       */
      deviceNum: number
      /**
       * localKey
       * The local key.
       */
      localKey: string
      /** The protocol version. */
      pv: number
      /** The product information. */
      productInfo: {}
      /** The custom DP name. */
      dpName: {}
      /** The device list. */
      deviceList: DeviceInfo_1bZJvW[]
      /** The local short address of groups. */
      localId: string
      /** The subclass. */
      pcc: string
      /** The mesh ID or gateway ID. */
      meshId: string
      /** Add the beacon beaconKey. */
      groupKey: string
      /** The schema array. */
      schema: {}[]
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
   * 群组控制
   */
  export function publishGroupDps(params: {
    /** groupId 群组id */
    groupId: string
    /**
     * dp信息
     * 示例: dps: {"1" : true}
     */
    dps: {}
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
   * 获取群组的属性
   */
  export function getGroupProperty(params: {
    /** 群组id */
    groupId: string
    complete?: () => void
    success?: (params: {
      /** 群组属性信息 */
      result: Record<string, {}>
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
   * 设置群组的属性
   */
  export function setGroupProperty(params: {
    /** 群组id */
    groupId: string
    /** code 属性code */
    code: string
    /** value */
    value: string
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
   * 开启对群组事件的监听
   */
  export function registerGroupChange(params: {
    /** groupIdList 群组id 列表 */
    groupIdList: string[]
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
   * 关闭对群组事件的监听
   */
  export function unRegisterGroupChange(params?: {
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
   * 获取设备的固件版本状态
   */
  export function checkOTAUpgradeStatus(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    complete?: () => void
    success?: (params: {
      /**
       * status
       * 设备的固件版本状态 0已是最新版本、1有待升级的固件、2正在升级
       */
      status: number
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
   * 跳转设备升级页面
   */
  export function openOTAUpgrade(params: {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
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
   * 打开一个指定的RN面板
   */
  export function pushRNPanel(params: {
    /**
     * RN设备面板属性
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    /**
     * 面板初始化参数
     * initialProps 初始化参数
     */
    initialProps?: Record<string, {}>
    complete?: () => void
    success?: (params: null) => void
    fail?: (params: {}) => void
  }): void

  /**
   * 设备是否支持物模型
   */
  export function deviceIsSupportThingModel(params: {
    /** 设备id */
    devId: string
    complete?: () => void
    success?: (params: {
      /** 是否支持物模型控制 */
      isSupport: boolean
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
   * 更新物模型信息
   */
  export function updateDeviceThingModelInfo(params: {
    /** 产品id */
    pid: string
    /** 产品版本号 */
    productVersion: string
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
   * 获取设备物模型信息
   */
  export function getDeviceThingModelInfo(params: {
    /** 设备id */
    devId: string
    complete?: () => void
    success?: (params: {
      /** 物模型id */
      modelId: string
      /** 产品id */
      productId: string
      /** 产品版本 */
      productVersion: string
      /** 服务列表 */
      services: ServiceModel[]
      /** 扩展属性 */
      extensions: Record<string, any>
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
   * 通过物模型投递消息
   */
  export function publishThingModelMessage(params: {
    /** 设备id */
    devId: string
    /**
     * 类型
     * 0:属性, 1:动作, 2:事件
     */
    type: number
    /** payload */
    payload: Record<string, any>
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
   * 订阅接受物模型消息。订阅之后才可以接收到onReceivedThingModelMessage事件。
   */
  export function subscribeReceivedThingModelMessage(params: {
    /** 设备id */
    devId: string
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
   * 取消订阅接收物模型消息。取消订阅之后接收不到onReceivedThingModelMessage事件。
   */
  export function unSubscribeReceivedThingModelMessage(params: {
    /** 设备id */
    devId: string
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
   * BLE(tuya)连接状态变更通知事件
   */
  export function onTYBLEConnectStatusChange(
    listener: (params: TYBLEConnectStatusEvent) => void
  ): void

  /**
   * BLE(tuya)连接状态变更通知事件
   */
  export function offTYBLEConnectStatusChange(
    listener: (params: TYBLEConnectStatusEvent) => void
  ): void

  /**
   * BLE(tuya)设备数据透传通道上报通知
   */
  export function onTYBLETransparentDataReport(
    listener: (params: TYBLETransparentDataBean) => void
  ): void

  /**
   * BLE(tuya)设备数据透传通道上报通知
   */
  export function offTYBLETransparentDataReport(
    listener: (params: TYBLETransparentDataBean) => void
  ): void

  /**
   * BLE(tuya)大数据通道传输进度
   */
  export function onTYBLEBigDataChannelProgressEvent(
    listener: (params: TYBLEBigDataProgressEvent) => void
  ): void

  /**
   * BLE(tuya)大数据通道传输进度
   */
  export function offTYBLEBigDataChannelProgressEvent(
    listener: (params: TYBLEBigDataProgressEvent) => void
  ): void

  /**
   * 扫描到设备后进行通知
   */
  export function onTYBLEScanBindDevice(
    listener: (params: TYBLEScanDeviceEvent) => void
  ): void

  /**
   * 扫描到设备后进行通知
   */
  export function offTYBLEScanBindDevice(
    listener: (params: TYBLEScanDeviceEvent) => void
  ): void

  /**
   * 大数据从设备传输到App成功的事件
   */
  export function onBLEBigDataChannelDeviceToAppSuccess(
    listener: (params: BLEBigDataChannelDeviceToAppSuccessResponse) => void
  ): void

  /**
   * 大数据从设备传输到App成功的事件
   */
  export function offBLEBigDataChannelDeviceToAppSuccess(
    listener: (params: BLEBigDataChannelDeviceToAppSuccessResponse) => void
  ): void

  /**
   * 大数据上传到云端进度的事件
   */
  export function onBLEBigDataChannelUploadCloudProgress(
    listener: (params: TYBLEBigDataProgressEvent) => void
  ): void

  /**
   * 大数据上传到云端进度的事件
   */
  export function offBLEBigDataChannelUploadCloudProgress(
    listener: (params: TYBLEBigDataProgressEvent) => void
  ): void

  /**
   * 子设备配网结果事件
   */
  export function onSubDeviceInfoUpdateEvent(
    listener: (params: Device) => void
  ): void

  /**
   * 子设备配网结果事件
   */
  export function offSubDeviceInfoUpdateEvent(
    listener: (params: Device) => void
  ): void

  /**
   * 免配网-设备扫描结果事件
   */
  export function onDirectlyConnectedSearchDeviceEvent(
    listener: (params: DirectlyConnectedSearchRespond) => void
  ): void

  /**
   * 免配网-设备扫描结果事件
   */
  export function offDirectlyConnectedSearchDeviceEvent(
    listener: (params: DirectlyConnectedSearchRespond) => void
  ): void

  /**
   * dp点变更
   */
  export function onDpDataChange(listener: (params: DpsChanged) => void): void

  /**
   * dp点变更
   */
  export function offDpDataChange(listener: (params: DpsChanged) => void): void

  /**
   * MQTT消息通道消息上报
   */
  export function onMqttMessageReceived(
    listener: (params: MqttResponse) => void
  ): void

  /**
   * MQTT消息通道消息上报
   */
  export function offMqttMessageReceived(
    listener: (params: MqttResponse) => void
  ): void

  /**
   * socket消息通道消息上报
   */
  export function onSocketMessageReceived(
    listener: (params: SocketResponse) => void
  ): void

  /**
   * socket消息通道消息上报
   */
  export function offSocketMessageReceived(
    listener: (params: SocketResponse) => void
  ): void

  /**
   * 设备上下线状态变更
   */
  export function onDeviceOnlineStatusUpdate(
    listener: (params: Online) => void
  ): void

  /**
   * 设备上下线状态变更
   */
  export function offDeviceOnlineStatusUpdate(
    listener: (params: Online) => void
  ): void

  /**
   * 设备 dp 名字和设备名字触发
   */
  export function onDeviceInfoUpdated(
    listener: (params: Device_a1bkEe) => void
  ): void

  /**
   * 设备 dp 名字和设备名字触发
   */
  export function offDeviceInfoUpdated(
    listener: (params: Device_a1bkEe) => void
  ): void

  /**
   * 设备移除事件
   */
  export function onDeviceRemoved(
    listener: (params: OnDeviceRemovedBody) => void
  ): void

  /**
   * 设备移除事件
   */
  export function offDeviceRemoved(
    listener: (params: OnDeviceRemovedBody) => void
  ): void

  /**
   * 定时变化事件
   */
  export function onTimerUpdate(listener: (params: {}) => void): void

  /**
   * 定时变化事件
   */
  export function offTimerUpdate(listener: (params: {}) => void): void

  /**
   * 群组移除事件
   */
  export function onGroupRemovedEvent(
    listener: (params: GroupBean) => void
  ): void

  /**
   * 群组移除事件
   */
  export function offGroupRemovedEvent(
    listener: (params: GroupBean) => void
  ): void

  /**
   * 群组DP变更事件
   */
  export function onGroupDpDataChangeEvent(
    listener: (params: GroupDpDataBean) => void
  ): void

  /**
   * 群组DP变更事件
   */
  export function offGroupDpDataChangeEvent(
    listener: (params: GroupDpDataBean) => void
  ): void

  /**
   * 接收物模型消息事件。只有subscribeReceivedThingModelMessage订阅了，才会收到该事件。
   */
  export function onReceivedThingModelMessage(
    listener: (params: OnReceivedThingModelMessageBody) => void
  ): void

  /**
   * 接收物模型消息事件。只有subscribeReceivedThingModelMessage订阅了，才会收到该事件。
   */
  export function offReceivedThingModelMessage(
    listener: (params: OnReceivedThingModelMessageBody) => void
  ): void

  export type Gateway = {
    /**
     * 网关模型
     * gwId 网关设备Id
     */
    gwId: string
  }

  export type Device = {
    /**
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
  }

  export type DeviceInfo = {
    /** 产品信息，schema，功能定义都在里面 */
    schema: {}[]
    /**
     * dps
     * 设备的功能点状态，可以根据对应的 dpid 拿到具体的状态值去做业务逻辑
     */
    dps: Record<string, {}>
    /**
     * attribute
     * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
     */
    attribute: number
    /**
     * capability
     * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
     * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
     */
    capability: number
    /**
     * dpName
     * 自定义 dp 的名字，通常在面板里会使用到
     */
    dpName: Record<string, string>
    /**
     * ability
     * 目前业务很少使用，用于区分特殊类型的设备
     */
    ability: number
    /**
     * icon
     * 设备的 icon url
     */
    icon: string
    /**
     * devId
     * 设备的唯一 id
     */
    devId: string
    /**
     * verSw
     * 设备固件版本号
     */
    verSw: string
    /**
     * isShare
     * 是否为分享设备，true 则是分享设备
     */
    isShare: boolean
    /**
     * bv
     * 设备的基线版本号
     */
    bv: string
    /**
     * uuid
     * 设备的固件唯一标识
     */
    uuid: string
    /**
     * panelConfig
     * 产品面板里的配置项，通常在 IoT 平台上可以查看到对应的配置
     */
    panelConfig: Record<string, {}>
    /**
     * activeTime
     * 设备激活时间，时间戳
     */
    activeTime: number
    /**
     * devAttribute
     * 设备的业务能力拓展，二进制位的方式进行运算
     */
    devAttribute: number
    /**
     * pcc
     * 涂鸦自研蓝牙 mesh 产品的分类标识
     */
    pcc: string
    /**
     * nodeId
     * 子设备的短地址
     */
    nodeId: string
    /**
     * parentId
     * 上级节点 id，子设备/或蓝牙 mesh 设备通常会有该字段，用于内部寻找相关的网关或上级模型来进行业务处理
     */
    parentId: string
    /**
     * category
     * 产品的分类
     */
    category: string
    /**
     * standSchemaModel
     * 标准产品功能集定义模型
     */
    standSchemaModel: {}
    /**
     * productId
     * 设备对应的产品 id
     */
    productId: string
    /**
     * bizAttribute
     * 设备自主上报的能力位
     */
    bizAttribute: number
    /**
     * meshId
     * 涂鸦自研的蓝牙 mesh id
     */
    meshId: string
    /**
     * sigmeshId
     * 当前设备所属行业属性对应的蓝牙 mesh id
     */
    sigmeshId: string
    /**
     * meta
     * 设备自定义配置元属性，用于存放业务数据
     */
    meta: Record<string, {}>
    /**
     * isLocalOnline
     * 本地局域网是否在线
     */
    isLocalOnline: boolean
    /**
     * isOnline
     * 设备总的在线情况，只要一个情况在线，就是在线，复合在线情况
     */
    isOnline: boolean
    /**
     * name
     * 设备名称
     */
    name: string
    /** groupId */
    groupId: string
    /**
     * dpCodes
     * 标准功能集 code
     */
    dpCodes: Record<string, {}>
    /** 原始 json，业务来不及拓展更新的时候，可以根据这个来获取处理 */
    originJson: Record<string, {}>
  }

  export type Object = {}

  export type TimerConfig = {
    /**
     * background
     * 定时界面导航栏的背景颜色，十六进制，例如：FFFFFF
     */
    background?: string
  }

  export type TimerModel = {
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
    /**
     * date
     * 日期
     */
    date: string
    /**
     * time
     * 定时器运行的时间
     */
    time: string
    /**
     * status
     * 状态
     */
    status: boolean
    /**
     * loops
     * 七位数字字符串，"1000000" 代表周日，"0100000" 代表周一
     */
    loops: string
    /**
     * dps
     * dp 点数据，示例：
     * {
     *     "1": true,
     *     "2": false
     * }
     */
    dps: Record<string, {}>
    /**
     * timezoneId
     * 时区
     */
    timezoneId: string
    /**
     * aliasName
     * 别名
     */
    aliasName: string
    /**
     * isAppPush
     * 是否发送执行通知
     */
    isAppPush: boolean
    /**
     * id
     * 任务 id
     */
    id: string
  }

  export type AddTimerModel = {
    /**
     * time
     * 定时器运行的时间
     */
    time: string
    /**
     * loops
     * 七位数字字符串，"1000000" 代表周日，"0100000" 代表周一
     */
    loops: string
    /**
     * dps
     * dp 点数据，示例：
     * {
     *     "1": true,
     *     "2": false
     * }
     */
    dps: Record<string, {}>
    /**
     * aliasName
     * 别名
     */
    aliasName: string
    /**
     * isAppPush
     * 是否发送执行通知
     */
    isAppPush: boolean
  }

  export type UpdateTimerModel = {
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
    /**
     * time
     * 定时器运行的时间
     */
    time: string
    /**
     * loops
     * 七位数字字符串，"1000000" 代表周日，"0100000" 代表周一
     */
    loops: string
    /**
     * dps
     * dp 点数据，示例：
     * {
     *     "1": true,
     *     "2": false
     * }
     */
    dps: Record<string, {}>
    /**
     * aliasName
     * 别名
     */
    aliasName: string
    /**
     * isAppPush
     * 是否发送执行通知
     */
    isAppPush: boolean
  }

  export type ThirdPartyService = {
    /** 服务 id */
    serviceId: number
    /** 服务名称 */
    name: string
    /** 图标 url */
    iconUrl: string
    /** 服务 url */
    url: string
    /** attributeKey */
    attributeKey: string
    /** attributeSign */
    attributeSign: number
    /** 包含云端完整字段的 json 对象 */
    originJson: Record<string, {}>
  }

  export type DeviceInfo_1bZJvW = {
    /** 产品信息，schema，功能定义都在里面 */
    schema: {}[]
    /**
     * dps
     * 设备的功能点状态，可以根据对应的 dpid 拿到具体的状态值去做业务逻辑
     */
    dps: Record<string, {}>
    /**
     * attribute
     * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
     */
    attribute: number
    /**
     * capability
     * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
     * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
     */
    capability: number
    /**
     * dpName
     * 自定义 dp 的名字，通常在面板里会使用到
     */
    dpName: Record<string, string>
    /**
     * ability
     * 目前业务很少使用，用于区分特殊类型的设备
     */
    ability: number
    /**
     * icon
     * 设备的 icon url
     */
    icon: string
    /**
     * devId
     * 设备的唯一 id
     */
    devId: string
    /**
     * verSw
     * 设备固件版本号
     */
    verSw: string
    /**
     * isShare
     * 是否为分享设备，true 则是分享设备
     */
    isShare: boolean
    /**
     * bv
     * 设备的基线版本号
     */
    bv: string
    /**
     * uuid
     * 设备的固件唯一标识
     */
    uuid: string
    /**
     * panelConfig
     * 产品面板里的配置项，通常在 IoT 平台上可以查看到对应的配置
     */
    panelConfig: Record<string, {}>
    /**
     * activeTime
     * 设备激活时间，时间戳
     */
    activeTime: number
    /**
     * devAttribute
     * 设备的业务能力拓展，二进制位的方式进行运算
     */
    devAttribute: number
    /**
     * pcc
     * 涂鸦自研蓝牙 mesh 产品的分类标识
     */
    pcc: string
    /**
     * nodeId
     * 子设备的短地址
     */
    nodeId: string
    /**
     * parentId
     * 上级节点 id，子设备/或蓝牙 mesh 设备通常会有该字段，用于内部寻找相关的网关或上级模型来进行业务处理
     */
    parentId: string
    /**
     * category
     * 产品的分类
     */
    category: string
    /**
     * standSchemaModel
     * 标准产品功能集定义模型
     */
    standSchemaModel: {}
    /**
     * productId
     * 设备对应的产品 id
     */
    productId: string
    /**
     * bizAttribute
     * 设备自主上报的能力位
     */
    bizAttribute: number
    /**
     * meshId
     * 涂鸦自研的蓝牙 mesh id
     */
    meshId: string
    /**
     * sigmeshId
     * 当前设备所属行业属性对应的蓝牙 mesh id
     */
    sigmeshId: string
    /**
     * meta
     * 设备自定义配置元属性，用于存放业务数据
     */
    meta: Record<string, {}>
    /**
     * isLocalOnline
     * 本地局域网是否在线
     */
    isLocalOnline: boolean
    /**
     * isOnline
     * 设备总的在线情况，只要一个情况在线，就是在线，复合在线情况
     */
    isOnline: boolean
    /**
     * name
     * 设备名称
     */
    name: string
    /** groupId */
    groupId: string
    /**
     * dpCodes
     * 标准功能集 code
     */
    dpCodes: Record<string, {}>
    /** 原始 json，业务来不及拓展更新的时候，可以根据这个来获取处理 */
    originJson: Record<string, {}>
    /**
     * dpsTime
     * 设备DP的执行时间
     */
    dpsTime: {}
  }

  export type ServiceModel = {
    /** 属性列表 */
    properties: ThingProperty[]
    /** 动作列表 */
    actions: ThingAction[]
    /** 事件列表 */
    events: ThingEvent[]
  }

  export type TYBLEConnectStatusEvent = {
    /**
     * BLE（tuya）连接状态
     * deviceId: 设备 id
     */
    deviceId: string
    /**
     * status 状态值
     *  CONNECTED:已连接
     *  CONNECTING:连接中
     *  CONNECT_BREAK:连接失败
     */
    status: string
  }

  export type TYBLETransparentDataBean = {
    /**
     * 蓝牙透传数据
     * deviceId: 设备 id
     */
    deviceId: string
    /** data: 透传内容 */
    data: string
  }

  export type TYBLEBigDataProgressEvent = {
    /**
     * 大数据通道传输进度
     * deviceId 设备 id
     */
    deviceId: string
    /** progress 传输进度，范围: 0 - 100 */
    progress: number
  }

  export type TYBLEScanDeviceEvent = {
    /** 扫描到的设备ID */
    deviceId: string
  }

  export type BLEBigDataChannelDeviceToAppSuccessResponse = {
    /** data */
    data: BLEBigDataChannelData[]
  }

  export type DirectlyConnectedSearchRespond = {
    /**
     * 设备是否激活
     * isActive 激活结果
     */
    isActive: boolean
  }

  export type DpsChanged = {
    /** dps 对应的设备 id */
    deviceId: string
    /** 子设备对应的网关设备 id，可以根据此进行网关面板的状态刷新 */
    gwId: string
    /**
     * dps
     * 变化的数据
     */
    dps: Record<string, {}>
    /**
     * options
     * 预留的标记位，后续可以区分来源等
     */
    options: Record<string, {}>
  }

  export type MqttResponse = {
    /** 设备 id */
    deviceId?: string
    /** 原始消息数据 */
    message: Record<string, {}>
    /** 双端抹平后的消息数据 */
    messageData: Record<string, {}>
    /** 消息类型 */
    type: string
    /** 协议号 */
    protocol: number
  }

  export type SocketResponse = {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备 id */
    deviceId: string
    /** 局域网消息 type */
    type: number
  }

  export type Online = {
    /** 在线状态 */
    online: boolean
    /** 设备 id */
    deviceId: string
    /**
     * 设备在线类型(预留，后期使用)
     * Wi-Fi online             1 << 0
     * Local online             1 << 1
     * Bluetooth LE online      1 << 2
     * Bluetooth LE mesh online 1 << 3
     */
    onlineType: number
  }

  export type Device_a1bkEe = {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
    /** dps 科学变化的数据 */
    dps?: Record<string, {}>
  }

  export type OnDeviceRemovedBody = {
    /** 设备id */
    deviceId: string
  }

  export type GroupBean = {
    /** 群组id */
    groupId: string
  }

  export type GroupDpDataBean = {
    /** groupId 群组id */
    groupId: string
    /**
     * dp信息
     * 示例: dps: {"1" : true}
     */
    dps: {}
  }

  export type OnReceivedThingModelMessageBody = {
    /**
     * 类型
     * 0:属性, 1:动作, 2:事件
     */
    type: number
    /** payload */
    payload: Record<string, any>
  }

  export type BLEBigDataChannelData = {
    /** dpsTime */
    dpsTime: string
    /** dps */
    dps: Record<string, {}>
  }

  export type ActivationInfoBean = {
    /**
     * 网关子设备激活数据
     * gateway Gateway 网关模型
     */
    gateway: Gateway
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
  }

  export type DirectlyConnectedActivationBean = {
    /**
     * 设备Id
     * device Device 设备模型
     */
    device: Device
    /** timeout 超时时间设定（秒），建议值120 */
    timeout: number
  }

  export type DeviceOnlineTypeResponse = {
    /** 设备网络在线类型 */
    onlineType: number
  }

  export type Product = {
    /** 产品id */
    productId: string
  }

  export type ProductInfo = {
    /** 产品原始 json 信息 */
    originJson: Record<string, {}>
    /** 面板配置项，可以在平台进行配置 */
    panelConfig: Record<string, {}>
    /** 产品功能定义集合 */
    schema: string
    /** 产品功能定义集合拓展 */
    schemaExt: string
    /**
     * capability
     * 产品能力值，在 backend-ng 平台上可以查询对应的勾选项，整体业务逻辑会根据该数据进行划分
     * 区分设备类型也可以根据该属性进行调整，按二进制位运算的方式进行管理
     */
    capability: number
    /**
     * attribute
     * 产品属性定义，在 backend-ng 平台上可查到对应配置，使用二进制位运算的方式进行管理
     */
    attribute: number
    /**
     * productId
     * 产品 id
     */
    productId: string
    /**
     * category
     * 产品的分类
     */
    category: string
    /**
     * categoryCode
     * 产品的二级分类
     */
    categoryCode: string
    /**
     * standard
     * 是否为标准产品
     */
    standard: boolean
    /**
     * pcc
     * 涂鸦自研蓝牙 mesh 产品的分类标识
     */
    pcc: string
    /**
     * vendorInfo
     * 涂鸦自研蓝牙 mesh 产品的分类标识，融合类使用
     */
    vendorInfo: string
    /**
     * quickOpDps
     * 快捷操作的 dp ids
     */
    quickOpDps: string[]
    /**
     * faultDps
     * 告警/错误的显示 dp ids
     */
    faultDps: string[]
    /**
     * displayDps
     * 快捷操作的 dp ids
     */
    displayDps: string[]
    /**
     * displayMsgs
     * 快捷操作显示文案
     */
    displayMsgs: Record<string, {}>
    /**
     * uiPhase
     * ui 包当前环境，预览包或线上包
     */
    uiPhase: string
    /**
     * uiId
     * ui 包唯一包名识别
     */
    uiId: string
    /**
     * uiVersion
     * ui 包版本号
     */
    uiVersion: string
    /**
     * ui
     * ui 小标识
     */
    ui: string
    /**
     * rnFind
     * 是否有包含 RN 包
     */
    rnFind: boolean
    /**
     * uiType
     * ui 包类型
     */
    uiType: string
    /**
     * uiName
     * ui 包名称
     */
    uiName: string
    /**
     * i18nTime
     * 产品语言包最新更新时间
     */
    i18nTime: number
    /**
     * supportGroup
     * 是否支持创建群组
     */
    supportGroup: boolean
    /**
     * supportSGroup
     * 是否支持创建标准群组
     */
    supportSGroup: boolean
    /**
     * configMetas
     * 产品特殊配置项，一些功能业务的特殊配置
     */
    configMetas: Record<string, {}>
    /**
     * productVer
     * 产品版本
     */
    productVer: string
  }

  export type Mesh = {
    /** 网关设备id或上级节点id */
    meshId: string
  }

  export type DeviceOnline = {
    /** 设备id */
    deviceId: string
    /**
     * 设备在线类型，
     * Wi-Fi online             1 << 0
     * Local online             1 << 1
     * Bluetooth LE online      1 << 2
     * Bluetooth LE mesh online 1 << 3
     */
    onlineType: number
  }

  export type DpsPublish = {
    /** 设备id */
    deviceId: string
    /** dps */
    dps: Record<string, {}>
    /**
     * 下发通道类型
     * 0: 局域网
     * 1: 网络
     * 2: 自动
     */
    mode: number
    /**
     * 下发通道的优先级
     * LAN       = 0, // LAN
     * MQTT      = 1, // MQTT
     * HTTP      = 2, // Http
     * BLE       = 3, // Single Point Bluetooth
     * SIGMesh   = 4, // Sig Mesh
     * BLEMesh   = 5, // Tuya Private Mesh
     * BLEBeacon = 6, // Beacon
     */
    pipelines: number[]
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
  }

  export type QueryDps = {
    /** 设备id */
    deviceId: string
    /** dpids 数组 */
    dpIds: number[]
  }

  export type MqttMessage = {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
  }

  export type LanMessageParams = {
    /** 消息内容 */
    message: string
    /** 设备id */
    deviceId: string
    /** 协议号 */
    protocol: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options?: Record<string, {}>
  }

  export type SocketMessage = {
    /** 消息内容 */
    message: Record<string, {}>
    /** 设备id */
    deviceId: string
    /** 局域网消息 type */
    type: number
    /** 预留下发逻辑配置标记，后续可以拓展，例如下发声音，下发操作后续动作等等 */
    options: Record<string, {}>
  }

  export type DeviceProperties = {
    /** the properties map */
    properties: Record<string, Object>
  }

  export type DeviceProperty = {
    /** deviceId */
    deviceId: string
    /** the custom data key */
    code: string
    /** the custom data value */
    value: string
  }

  export type DevicePropertyCB = {
    /** deviceId */
    deviceId: string
    /** set DeviceProperty successfully */
    result: boolean
  }

  export type SyncDeviceInfoParams = {
    /** 设备id */
    deviceId: string
  }

  export type SubscribeDeviceRemovedParams = {
    /** 设备id */
    deviceId: string
  }

  export type UnSubscribeDeviceRemovedParams = {
    /** 设备id */
    deviceId: string
  }

  export type MQTTDeviceListenerParams = {
    /**
     * deviceId 设备id
     * 支持跨面板获取其他的设备信息，当前面板可以传当前设备的 id 来进行获取
     */
    deviceId: string
  }

  export type MQTTProtocolListenerParams = {
    /**
     * protocol 协议号
     * MQTT预定义的协议号
     */
    protocol: number
  }

  export type DeviceListListenerParams = {
    /** 需注册的设备列表 */
    deviceIdList: string[]
  }

  export type OTAUpdateInfoParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type DeviceDetailParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GroupDetailParams = {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
  }

  export type TimerParams = {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * repeat
     * 0表示需要选择重复，1表示不需要
     */
    repeat?: number
    /**
     * data
     * dp 数据
     * {
     *     "dpName": dp 点名称，string
     *     "dpId": dp 点 id，string
     *     "selected": dp 点默认值的 index，t.Integer
     *     "rangeKeys": dp 点的值范围，Array<object>
     *     "rangeValues": dp 点的显示数据范围，Array<string>
     * }
     */
    data: {}[]
    /**
     * timerConfig
     * UI配置
     */
    timerConfig?: TimerConfig
  }

  export type GroupTimerParams = {
    /**
     * groupId
     * 群组 id
     */
    groupId: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * repeat
     * 0表示需要选择重复，1表示不需要
     */
    repeat?: number
    /**
     * data
     * dp 数据
     * {
     *     "dpName": dp 点名称，string
     *     "dpId": dp 点 id，string
     *     "selected": dp 点默认值的 index，t.Integer
     *     "rangeKeys": dp 点的值范围，Array<object>
     *     "rangeValues": dp 点的显示数据范围，Array<string>
     * }
     */
    data: {}[]
    /**
     * timerConfig
     * UI配置
     */
    timerConfig?: TimerConfig
  }

  export type WifiNetworkParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type SyncTimerParams = {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id ，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * category
     * 定时分类
     */
    category: string
  }

  export type SyncTimerResult = {
    /**
     * timers
     * 定时列表
     */
    timers: TimerModel[]
  }

  export type AddTimerParams = {
    /**
     * deviceId
     * 设备 id ，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id ，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * category
     * 定时分类
     */
    category: string
    /**
     * timer
     * 添加定时模型
     */
    timer: AddTimerModel
  }

  export type AddNewTimerModel = {
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
  }

  export type UpdateTimerParams = {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timer
     * 更新定时模型
     */
    timer: UpdateTimerModel
  }

  export type UpdateTimerStatusParams = {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timerId
     * 定时 id
     */
    timerId: string
    /**
     * status
     * 状态
     */
    status: boolean
  }

  export type RemoveTimerParams = {
    /**
     * deviceId
     * 设备 id，deviceId 和 groupId 至少传一个
     */
    deviceId?: string
    /**
     * groupId
     * 群组 id，deviceId 和 groupId 至少传一个
     */
    groupId?: string
    /**
     * timerId
     * 定时器 id
     */
    timerId: string
  }

  export type GetShareDeviceInfoParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetShareDeviceInfoResponse = {
    /** 姓名 */
    name: string
    /** 手机号 */
    mobile: string
    /** 邮件 */
    email: string
  }

  export type OpenDeviceEditParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type OpenGroupEditParams = {
    /**
     * groupId
     * 设备 id
     */
    groupId: string
  }

  export type OpenDeviceInfoParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type IsDeviceSupportOfflineReminderParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type IsDeviceSupportOfflineReminderResponse = {
    /**
     * support
     * 是否支持设备离线提醒
     */
    isSupport: boolean
  }

  export type GetDeviceOfflineReminderStateParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetDeviceOfflineReminderStateResponse = {
    /**
     * state
     * 设备离线提醒的开关状态 0:关 1:开
     */
    state: number
  }

  export type ToggleDeviceOfflineReminderParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
    /**
     * state
     * 设备离线提醒的开关状态 0:关 1:开
     */
    state: number
  }

  export type GetDeviceOfflineReminderWarningTextResponse = {
    /** 离线提醒关闭警告文案 */
    warningText: string
  }

  export type Device_ycSyVp = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type OpenShareDeviceParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type AddDeviceToDeskParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type RemoveShareDeviceParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetSupportedThirdPartyServicesParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type GetSupportedThirdPartyServicesResponse = {
    /** 服务列表 */
    services: ThirdPartyService[]
  }

  export type GroupInfo = {
    /**
     * groupId
     * The group ID.
     */
    groupId: string
    /**
     * productId
     * The product ID.
     */
    productId: string
    /**
     * name
     * The name of the group.
     */
    name: string
    /**
     * time
     * The time when the group was created.
     */
    time: number
    /**
     * iconUrl
     * The URL of the icon.
     */
    iconUrl: string
    /**
     * type
     * The type of group.
     * Wifi = 0, Mesh = 1, Zigbee = 2, SIGMesh = 3, Beacon = 4,
     */
    type: number
    /** isShare */
    isShare: boolean
    /** dps */
    dps: {}
    /** dpCodes */
    dpCodes: {}
    /**
     * deviceNum
     * The number of devices,
     */
    deviceNum: number
    /**
     * localKey
     * The local key.
     */
    localKey: string
    /** The protocol version. */
    pv: number
    /** The product information. */
    productInfo: {}
    /** The custom DP name. */
    dpName: {}
    /** The device list. */
    deviceList: DeviceInfo_1bZJvW[]
    /** The local short address of groups. */
    localId: string
    /** The subclass. */
    pcc: string
    /** The mesh ID or gateway ID. */
    meshId: string
    /** Add the beacon beaconKey. */
    groupKey: string
    /** The schema array. */
    schema: {}[]
  }

  export type GetGroupPropertyResponse = {
    /** 群组属性信息 */
    result: Record<string, {}>
  }

  export type SetGroupPropertyBean = {
    /** 群组id */
    groupId: string
    /** code 属性code */
    code: string
    /** value */
    value: string
  }

  export type GroupIdListBean = {
    /** groupIdList 群组id 列表 */
    groupIdList: string[]
  }

  export type CheckOTAUpgradeStatusParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type CheckOTAUpgradeStatusResponse = {
    /**
     * status
     * 设备的固件版本状态 0已是最新版本、1有待升级的固件、2正在升级
     */
    status: number
  }

  export type OpenOTAUpgradeParams = {
    /**
     * deviceId
     * 设备 id
     */
    deviceId: string
  }

  export type RNPanelInfoBean = {
    /**
     * RN设备面板属性
     * 设备模型
     * deviceId 设备Id
     */
    deviceId: string
    /**
     * 面板初始化参数
     * initialProps 初始化参数
     */
    initialProps?: Record<string, {}>
  }

  export type ThingProperty = {
    /** 属性id */
    abilityId: number
    /** 访问模式: ro-只读, wr-只写, rw-读写 */
    accessMode: string
    /** 属性类型 */
    typeSpec: Record<string, any>
    /** 属性默认值 */
    defaultValue: {}
    /** 标识代码 */
    code: string
  }

  export type ThingAction = {
    /** 动作id */
    abilityId: number
    /** 动作的输入参数列表 */
    inputParams: {}[]
    /** 动作的输出参数列表 */
    outputParams: {}[]
    /** 标识代码 */
    code: string
  }

  export type ThingEvent = {
    /** 事件id */
    abilityId: number
    /** 事件的输出参数列表 */
    outputParams: {}[]
    /** 标识代码 */
    code: string
  }

  export type DeviceIsSupportThingModelParams = {
    /** 设备id */
    devId: string
  }

  export type DeviceIsSupportThingModelResponse = {
    /** 是否支持物模型控制 */
    isSupport: boolean
  }

  export type UpdateThingModelInfoParams = {
    /** 产品id */
    pid: string
    /** 产品版本号 */
    productVersion: string
  }

  export type GetDeviceThingModelInfoParams = {
    /** 设备id */
    devId: string
  }

  export type GetDeviceThingModelInfoResponse = {
    /** 物模型id */
    modelId: string
    /** 产品id */
    productId: string
    /** 产品版本 */
    productVersion: string
    /** 服务列表 */
    services: ServiceModel[]
    /** 扩展属性 */
    extensions: Record<string, any>
  }

  export type PublishThingModelMessageParams = {
    /** 设备id */
    devId: string
    /**
     * 类型
     * 0:属性, 1:动作, 2:事件
     */
    type: number
    /** payload */
    payload: Record<string, any>
  }

  export type SubscribeReceivedThingModelMessageParams = {
    /** 设备id */
    devId: string
  }

  export type UnSubscribeReceivedThingModelMessageParams = {
    /** 设备id */
    devId: string
  }
}
