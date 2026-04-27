
const navItems = [

  {
    key: "payment-risk",
    label: "支付风控",
    icon: "◫",
    children: [
      { key: "payment-overview", label: "支付安全概览", page: "payment-overview" },
      { key: "payment-log", label: "支付风控日志", page: "payment-log" },
      { key: "payment-risk-engine", label: "支付风控策略", page: "payment-risk-engine" }
    ]
  },
  {
    key: "user-risk",
    label: "用户风控",
    icon: "◫",
    children: [
      { key: "login-overview", label: "用户安全概览", page: "login-overview" },
      { key: "login-log", label: "用户风控日志", page: "login-log" },
      { key: "user-risk-engine", label: "用户风控策略", page: "user-risk-engine" }
    ]
  },
  {
    key: "portrait",
    label: "画像中心",
    icon: "◎",
    children: [
      { key: "user-tags", label: "用户标签管理", page: "user-tags" },
      { key: "user-risk-behavior", label: "风险行为管理", page: "user-risk-behavior" }
    ]
  },
  {
    key: "blacklist-management",
    label: "黑名单管理",
    icon: "☒",
    page: "blacklist-management"
  },
  {
    key: "whitelist-management",
    label: "白名单管理",
    icon: "☑",
    page: "whitelist-management"
  },
  {
    key: "operation-log",
    label: "操作日志",
    icon: "☷",
    page: "operation-log"
  }
];

const scenes = ["账号登录", "账号注册", "支付下单", "短信邮件"];

const sceneActionMap = {
  账号登录: "登录拦截",
  账号注册: "注册拦截",
  支付下单: "支付拦截",
  短信邮件: "验证码拦截"
};

const sceneSectionMap = {
  账号登录: "登录风控",
  账号注册: "注册风控",
  支付下单: "支付风控",
  短信邮件: "短信邮件风控"
};

const conditionTypeOptions = ["行为", "账号", "设备", "IP"];
const conditionOperators = ["关系", "是", "不是"];
const conditionPickerCatalog = {
  行为: [
    { name: "短时间内登录过多账号", children: ["同一设备，30秒内，登录账号数≥4个", "同一设备，30秒内，登录账号数≥5个", "同一设备，30秒内，登录账号数≥6个", "同一设备，30秒内，登录账号数≥7个", "同一IP，30秒内，登录账号数≥4个"] },
    { name: "新设备登录", children: ["本次登录使用的设备，在过去90天内未登录过该账号"] },
    { name: "新IP登录", children: ["本次登录使用的IP，在过去90天内未登录过该账号"] },
    { name: "前后两次登录的IP归属地跨度过大", children: ["最近两次登录的IP归属地相距极远，两地距离除以时间差，移动速度平均每小时≥600公里。"] },
    { name: "短时间内注册过多账号", children: ["同一设备，30秒内，注册账号数≥4个", "同一设备，30秒内，注册账号数≥5个", "同一IP，60秒内，注册账号数≥100个"] },
    { name: "短时间内请求登录过于频繁", children: ["同一设备，30秒内，请求登录数≥20次", "同一IP，30秒内，请求登录数≥50次"] }
  ],
  账号: [
    { name: "出租账号" },
    { name: "工作室账号" },
    { name: "初始号" },
    { name: "设备农场账号" },
    { name: "大R/高价值账号" },
    { name: "上图是我们现在监控的规则，哪些账号、IP、设备触发了这些规则，我们都有日志记录，需要这些用户数据吗" }
  ],
  设备: [
    { name: "登录设备" },
    { name: "云手机设备" },
    { name: "虚拟机设备" },
    { name: "越狱/root设备" },
    { name: "外挂调试设备" },
    { name: "工作室设备" }
  ],
  IP: [
    { name: "国内IP", children: ["山东IP", "上海IP", "广东IP", "北京IP", "浙江IP", "江苏IP", "四川IP", "湖北IP", "福建IP", "河南IP"] },
    { name: "海外IP", children: ["美国IP", "日本IP", "新加坡IP", "英国IP", "德国IP", "法国IP", "加拿大IP", "澳大利亚IP", "韩国IP", "泰国IP"] },
    { name: "工作室IP" },
    { name: "代理IP/VPN" },
    { name: "机房IP" },
    { name: "黑名单IP" },
    { name: "盗号团伙IP" }
  ]
};
const conditionTagLibrary = {
  行为: [
    "行为标签",
    "短时间内登录过多账号",
    "新设备登录",
    "新IP登录",
    "前后两次登录的IP归属地跨度过大",
    "短时间内注册过多账号",
    "短时间内请求登录过于频繁",
    "同一设备，30秒内，登录账号数≥4个",
    "同一设备，30秒内，登录账号数≥5个",
    "同一设备，30秒内，登录账号数≥6个",
    "同一设备，30秒内，登录账号数≥7个",
    "同一IP，30秒内，登录账号数≥4个",
    "同一设备，30秒内，注册账号数≥4个",
    "同一设备，30秒内，注册账号数≥5个",
    "同一IP，60秒内，注册账号数≥100个",
    "同一设备，30秒内，请求登录数≥20次",
    "同一IP，30秒内，请求登录数≥50次",
    "跨省跨度过大",
    "跨国跨度过大"
  ],
  账号: ["账号标签", "出租账号", "工作室账号", "初始号", "设备农场账号", "大R/高价值账号", "广告号/引流号"],
  设备: ["设备标签", "登录设备", "云手机设备", "虚拟机设备", "越狱/root设备", "外挂调试设备", "工作室设备"],
  IP: ["IP标签", "国内IP", "山东IP", "上海IP", "广东IP", "北京IP", "浙江IP", "江苏IP", "四川IP", "湖北IP", "福建IP", "河南IP", "海外IP", "美国IP", "日本IP", "新加坡IP", "英国IP", "德国IP", "法国IP", "加拿大IP", "澳大利亚IP", "韩国IP", "泰国IP", "工作室IP", "代理IP/VPN", "机房IP", "黑名单IP", "盗号团伙IP"]
};

const tagMetricLabels = {
  行为: ["今日触发数", "更新方式"],
  账号: ["覆盖账号数", "更新方式"],
  设备: ["覆盖设备数", "更新方式"],
  IP: ["覆盖IP数", "更新方式"]
};

const behaviorTagDescriptions = {
  新设备登录: "本次登录使用的设备，在过去90天内未登录过该账号（90可配置，支持添加分层）",
  新IP登录: "本次登录使用的IP，在过去90天内未登录过该账号（90可配置，支持添加分层）",
  前后两次登录的IP归属地跨度过大: "最近两次登录的IP归属地相距极远，两地距离除以时间差，移动速度平均每小时≥600公里。（600可配置，支持添加分层）",
  短时间内登录过多账号: "同一设备或 IP 在短时间内登录过多账号",
  短时间内注册过多账号: "同一来源在短时间内注册过多账号",
  短时间内请求登录过于频繁: "接口登录请求在短时间内异常集中"
};

const behaviorRuleConfigs = {
  "异常时间登录": {
    mode: "window-threshold",
    dimensions: ["账号", "设备", "IP"],
    defaultDimension: "账号",
    unitOptions: ["天", "小时"],
    defaultUnit: "天",
    defaultWindow: "7",
    defaultThreshold: "3",
    metricLabel: "凌晨0点至6点登录次数",
    suffix: "次"
  },
  "异常地点登录": {
    mode: "window-threshold",
    dimensions: ["账号"],
    defaultDimension: "账号",
    unitOptions: ["天", "小时"],
    defaultUnit: "天",
    defaultWindow: "30",
    defaultThreshold: "1",
    metricLabel: "异地登录次数",
    suffix: "次"
  },
  "短时间内登录过多账号": {
    mode: "window-threshold",
    dimensions: ["设备", "IP"],
    defaultDimension: "设备",
    unitOptions: ["秒", "分钟", "小时", "天"],
    defaultUnit: "秒",
    defaultWindow: "30",
    defaultThreshold: "4",
    metricLabel: "登录账号数",
    suffix: "个"
  },
  "短时间内注册过多账号": {
    mode: "window-threshold",
    dimensions: ["设备", "IP"],
    defaultDimension: "设备",
    unitOptions: ["秒", "分钟", "小时", "天"],
    defaultUnit: "秒",
    defaultWindow: "30",
    defaultThreshold: "4",
    metricLabel: "注册账号数",
    suffix: "个"
  },
  "短时间内请求登录过于频繁": {
    mode: "window-threshold",
    dimensions: ["设备", "IP"],
    defaultDimension: "设备",
    unitOptions: ["秒", "分钟", "小时", "天"],
    defaultUnit: "秒",
    defaultWindow: "30",
    defaultThreshold: "20",
    metricLabel: "请求登录数",
    suffix: "次"
  },
  "新设备登录": {
    mode: "recently-unseen",
    defaultWindow: "90",
    unitOptions: ["天", "小时"],
    defaultUnit: "天",
    subject: "设备"
  },
  "异常设备登录": {
    mode: "recently-unseen",
    defaultWindow: "90",
    unitOptions: ["天", "小时"],
    defaultUnit: "天",
    subject: "设备"
  },
  "新IP登录": {
    mode: "recently-unseen",
    defaultWindow: "90",
    unitOptions: ["天", "小时"],
    defaultUnit: "天",
    subject: "IP"
  },
  "前后两次登录的IP归属地跨度过大": {
    mode: "speed-threshold",
    defaultThreshold: "600",
    metricLabel: "公里"
  },
  "登录地变化过快": {
    mode: "speed-threshold",
    defaultThreshold: "600",
    metricLabel: "公里"
  },
  "批量账号登录": {
    mode: "window-threshold",
    dimensions: ["设备", "IP"],
    defaultDimension: "设备",
    unitOptions: ["秒", "分钟", "小时", "天"],
    defaultUnit: "秒",
    defaultWindow: "30",
    defaultThreshold: "4",
    metricLabel: "登录账号数",
    suffix: "个"
  },
  "高频登录": {
    mode: "window-threshold",
    dimensions: ["账号", "设备", "IP"],
    defaultDimension: "账号",
    unitOptions: ["秒", "分钟", "小时"],
    defaultUnit: "秒",
    defaultWindow: "30",
    defaultThreshold: "20",
    metricLabel: "登录次数",
    suffix: "次"
  },
  "频繁登录失败": {
    mode: "window-threshold",
    dimensions: ["账号", "设备", "IP"],
    defaultDimension: "账号",
    unitOptions: ["分钟", "小时", "天"],
    defaultUnit: "分钟",
    defaultWindow: "30",
    defaultThreshold: "10",
    metricLabel: "登录失败次数",
    suffix: "次"
  },
  "批量账号注册": {
    mode: "window-threshold",
    dimensions: ["设备", "IP"],
    defaultDimension: "设备",
    unitOptions: ["秒", "分钟", "小时", "天"],
    defaultUnit: "秒",
    defaultWindow: "30",
    defaultThreshold: "4",
    metricLabel: "注册账号数",
    suffix: "个"
  },
  "高频注册": {
    mode: "window-threshold",
    dimensions: ["设备", "IP"],
    defaultDimension: "设备",
    unitOptions: ["秒", "分钟", "小时"],
    defaultUnit: "秒",
    defaultWindow: "30",
    defaultThreshold: "10",
    metricLabel: "注册次数",
    suffix: "次"
  },
  "频繁注册失败": {
    mode: "window-threshold",
    dimensions: ["设备", "IP"],
    defaultDimension: "设备",
    unitOptions: ["分钟", "小时", "天"],
    defaultUnit: "分钟",
    defaultWindow: "30",
    defaultThreshold: "10",
    metricLabel: "注册失败次数",
    suffix: "次"
  },
  "他人代充": {
    mode: "window-threshold",
    dimensions: ["账号", "设备", "IP"],
    defaultDimension: "账号",
    unitOptions: ["分钟", "小时", "天"],
    defaultUnit: "天",
    defaultWindow: "7",
    defaultThreshold: "500",
    metricLabel: "代充累计支付金额",
    suffix: "元"
  },
  "频繁小额充值": {
    mode: "window-threshold",
    dimensions: ["账号", "设备", "IP"],
    defaultDimension: "账号",
    unitOptions: ["分钟", "小时", "天"],
    defaultUnit: "分钟",
    defaultWindow: "10",
    defaultThreshold: "5",
    metricLabel: "小额充值次数",
    suffix: "次"
  },
  "高频充值": {
    mode: "window-threshold",
    dimensions: ["账号", "设备", "IP"],
    defaultDimension: "账号",
    unitOptions: ["分钟", "小时", "天"],
    defaultUnit: "分钟",
    defaultWindow: "30",
    defaultThreshold: "8",
    metricLabel: "充值次数",
    suffix: "次"
  },
  "小额绑卡": {
    mode: "window-threshold",
    dimensions: ["账号", "设备"],
    defaultDimension: "账号",
    unitOptions: ["小时", "天"],
    defaultUnit: "小时",
    defaultWindow: "24",
    defaultThreshold: "3",
    metricLabel: "绑卡支付次数",
    suffix: "次"
  },
  "汇率差套利": {
    mode: "window-threshold",
    dimensions: ["账号", "IP"],
    defaultDimension: "账号",
    unitOptions: ["小时", "天"],
    defaultUnit: "小时",
    defaultWindow: "24",
    defaultThreshold: "2",
    metricLabel: "异常汇率支付次数",
    suffix: "次"
  },
  "订单盗刷": {
    mode: "window-threshold",
    dimensions: ["账号", "设备", "IP"],
    defaultDimension: "账号",
    unitOptions: ["小时", "天"],
    defaultUnit: "小时",
    defaultWindow: "24",
    defaultThreshold: "1",
    metricLabel: "盗刷风险订单",
    suffix: "笔"
  }
};

const ipTagDescriptions = {
  国内IP: "按省市分层识别国内网络来源，适合识别区域性异常流量",
  海外IP: "按国家分层识别海外网络来源，适合识别跨境访问风险"
};

const heroCopy = {
  "risk-engine": {
    title: "用户风控策略",
    desc: "如需增加风控策略类型，可联系 SDK 部门进行添加"
  },
  "user-risk-engine": {
    title: "用户风控策略",
    desc: "支持通过风险检测项和区间轴，按风险分编排处置动作。"
  },
  "payment-risk-engine": {
    title: "支付风控策略",
    desc: "支持通过风险检测项和区间轴，按风险分编排支付处置动作。"
  },
  "user-tags": {
    title: "用户标签管理",
    desc: "如需增加其他用户标签，请联系SDK部门进行添加"
  },
  "user-risk-behavior": {
    title: "风险行为管理",
    desc: "覆盖登录、注册、支付等关键场景的风险行为识别，支撑业务风险评估"
  },
  "payment-risk-behavior": {
    title: "风险行为管理",
    desc: "覆盖登录、注册、支付等关键场景的风险行为识别，支撑业务风险评估"
  },
  overview: {
    title: "安全数据概览",
    desc: "页面建设中，可继续补充看板内容。"
  },
  "login-overview": {
    title: "用户安全概览",
    desc: "监控用户安全防护指标，实时掌握风险趋势。"
  },
  "payment-overview": {
    title: "支付安全概览",
    desc: "监控支付业务安全防护指标，实时掌握风险趋势。"
  },
  logs: {
    title: "风控数据日志",
    desc: "页面建设中，可继续补充日志检索与分析能力。"
  },
  "login-log": {
    title: "用户风控日志",
    desc: "查看业务风控拦截与处置明细，支持按设备、账号、IP 与策略条件进行分析。"
  },
  "payment-log": {
    title: "支付风控日志",
    desc: "查看支付风控命中与处置明细，支持按支付账号、设备、IP 与策略条件进行分析。"
  },
  "login-query": {
    title: "风险用户查询",
    desc: "多维度溯源分析，快速定位用户、设备与 IP 间的关联风险。"
  },
  "payment-query": {
    title: "风险支付查询",
    desc: "多维度排查支付链路，快速定位账号、设备与 IP 的资金风险。"
  },
  "multi-query": {
    title: "多维画像查询",
    desc: "支持从账号、设备、IP 多维溯源，统一查看登录注册与下单支付相关风险日志。"
  },
  "whitelist-management": {
    title: "白名单管理",
    desc: "统一管理风控白名单对象，支持按生效维度和状态筛选查看。"
  },
  "blacklist-management": {
    title: "黑名单管理",
    desc: "统一管理风控黑名单对象，支持按生效维度和状态筛选查看。"
  },
  "operation-log": {
    title: "操作日志",
    desc: "记录策略和名单相关的操作明细，便于审计与追溯。"
  }
};

const strategyStore = [
  {
    id: uid(),
    scene: "账号登录",
    sectionTitle: "登录风控",
    name: "新登录环境防护",
    description: "使用新 IP/新设备进行登录时的安全保护",
    metrics: { triggers: "12,543", rate: "3.2%" },
    stats: createStatsPayload("登录"),
    rules: [createRule("新登录环境防护", "账号登录", [createPresetCondition("行为", "是", "新设备登录"), createPresetCondition("设备", "是", "登录设备")])]
  },
  {
    id: uid(),
    scene: "账号登录",
    sectionTitle: "登录风控",
    name: "登录接口防刷",
    description: "限制在短时间内的高频登录请求",
    metrics: { triggers: "12,543", rate: "3.2%" },
    stats: createStatsPayload("登录"),
    rules: [
        createRule("刷登录（超高频）的应对处置", "账号登录", [
        createPresetCondition("行为", "是", "同一设备，30秒内，登录账号数≥4个"),
        createPresetCondition("设备", "是", "登录设备", [createPresetCondition("IP", "是", "工作室IP"), createPresetCondition("账号", "是", "出租账号")], "或"),
        createPresetCondition("IP", "不是", "工作室IP")
      ])
    ]
  },
  {
    id: uid(),
    scene: "账号登录",
    sectionTitle: "登录风控",
    name: "多账号登录限制",
    description: "限制同一设备/IP 登录过多账号",
    metrics: { triggers: "12,543", rate: "3.2%" },
    stats: createStatsPayload("登录"),
    rules: [createRule("多账号登录限制", "账号登录", [createPresetCondition("行为", "是", "短时间内登录过多账号")], "封禁", false)]
  },
  {
    id: uid(),
    scene: "账号登录",
    sectionTitle: "登录风控",
    name: "限制暴力破解密码",
    description: "屏蔽用户通过多次登录来破解密码的行为",
    metrics: { triggers: "12,543", rate: "3.2%" },
    stats: createStatsPayload("登录"),
    rules: [createRule("限制暴力破解密码", "账号登录", [createPresetCondition("账号", "是", "大R/高价值账号")], "验证码验证")]
  },
  {
    id: uid(),
    scene: "账号注册",
    sectionTitle: "注册风控",
    name: "注册接口防刷",
    description: "限制在短时间内的高频注册请求",
    metrics: { triggers: "12,543", rate: "3.2%" },
    stats: createStatsPayload("注册"),
    rules: [
        createRule("刷注册（超高频）的应对处置", "账号注册", [
        createPresetCondition("行为", "是", "短时间内注册过多账号"),
        createPresetCondition("账号", "是", "工作室账号", [createPresetCondition("设备", "是", "工作室设备")], "或"),
        createPresetCondition("IP", "关系", "IP标签")
      ])
    ]
  },
  {
    id: uid(),
    scene: "账号注册",
    sectionTitle: "注册风控",
    name: "批量注册限制",
    description: "限制同一设备/IP 注册过多账号",
    metrics: { triggers: "12,543", rate: "3.2%" },
    stats: createStatsPayload("注册"),
    rules: [createRule("批量注册限制", "账号注册", [createPresetCondition("行为", "是", "短时间内注册过多账号")], "封禁", false)]
  },
  {
    id: uid(),
    scene: "支付下单",
    sectionTitle: "支付风控",
    name: "异常金额支付拦截",
    description: "识别异常支付金额与风险账号标签叠加命中的下单行为",
    metrics: { triggers: "8,642", rate: "2.7%" },
    stats: createStatsPayload("支付"),
    rules: [
      createRule("异常金额支付拦截", "支付下单", [
        createPresetCondition("账号", "是", "大R/高价值账号"),
        createPresetCondition("IP", "不是", "国内IP")
      ], "支付拦截")
    ]
  },
  {
    id: uid(),
    scene: "支付下单",
    sectionTitle: "支付风控",
    name: "高频支付验证",
    description: "限制短时间内连续支付与高频小额试探行为",
    metrics: { triggers: "6,218", rate: "1.9%" },
    stats: createStatsPayload("支付"),
    rules: [
      createRule("高频支付验证", "支付下单", [
        createPresetCondition("行为", "是", "短时间内请求登录过于频繁"),
        createPresetCondition("设备", "是", "登录设备")
      ], "验证码验证")
    ]
  },
  {
    id: uid(),
    scene: "支付下单",
    sectionTitle: "支付风控",
    name: "海外IP支付校验",
    description: "针对海外高风险 IP 发起的支付行为进行二次核验",
    metrics: { triggers: "4,103", rate: "1.3%" },
    stats: createStatsPayload("支付"),
    rules: [
      createRule("海外IP支付校验", "支付下单", [
        createPresetCondition("IP", "是", "海外IP"),
        createPresetCondition("账号", "不是", "工作室账号")
      ], "滑块验证", false)
    ]
  }
];

const userBehaviorSections = createUserBehaviorSections();
const paymentBehaviorCards = createPaymentBehaviorCards();
const tagSections = createTagSections();
syncConditionTagSections();

const userRiskStrategyStore = createUserRiskStrategyStore();
const userRiskWorkbenchStore = createUserRiskWorkbenchStore();
const paymentRiskWorkbenchStore = createPaymentRiskWorkbenchStore();

const drawerRoot = document.querySelector("#drawer-root");
const heroCard = document.querySelector("#hero-card");
const sideNav = document.querySelector("#side-nav");
const pageContent = document.querySelector("#page-content");

const state = {
  currentPage: "login-overview",
  overviewScene: "login",
  overviewTrendMode: "request",
  overviewLoading: false,
  overviewLoadingPage: "",
  overviewFilters: {
    "login-overview": {
      channel: "全渠道",
      time: "近30天"
    },
    "payment-overview": {
      channel: "全渠道",
      time: "近30天"
    }
  },
  overviewFilterDrafts: {
    "login-overview": {
      channelCategory: "全部渠道",
      channelTerminal: "全部终端",
      selectedChannelIds: ["310003", "410004", "210002", "310007"],
      timePreset: "近30天",
      startDay: 1,
      endDay: 28,
      startHour: "00",
      startMinute: "00",
      endHour: "13",
      endMinute: "28"
    },
    "payment-overview": {
      channelCategory: "全部渠道",
      channelTerminal: "全部终端",
      selectedChannelIds: ["310003", "410004", "210002", "310007"],
      timePreset: "近30天",
      startDay: 1,
      endDay: 28,
      startHour: "00",
      startMinute: "00",
      endHour: "13",
      endMinute: "28"
    }
  },
  overviewPicker: null,
  modalOpen: false,
  modalKind: "",
  mode: "create",
  form: null,
  formSnapshot: "",
  sourceId: null,
  statsStrategyId: null,
  logDetailId: null,
  activeTagSection: "行为",
  activeTagCardId: null,
  activeBehaviorLevelId: null,
  behaviorRuleModalMode: "view",
  behaviorRuleDraft: null,
  behaviorRuleEnabledDraft: false,
  behaviorTagDate: getTodayDateValue(),
  behaviorLevelForm: null,
  tagForm: null,
  tagListQuery: "",
  tagListPage: 1,
  strategyFilters: null,
  strategyFilterDraft: null,
  tagFilters: null,
  tagFilterDraft: null,
  logFilters: null,
  logFiltersPage: "login-log",
  logPage: 1,
  logFocusKey: "all",
  logDetailPage: "login-log",
  logColumnPanelOpen: false,
  logVisibleColumnsByPage: {},
  strategyTagPicker: null,
  userRiskStrategyView: {
    mode: "list",
    activeId: ""
  },
  userRiskStrategySourceId: "",
  userRiskStrategyDraft: null,
  userRiskStrategyFilters: {
    keyword: "",
    entry: "全部入口",
    status: "全部状态",
    relatedTag: "全部标签",
    relatedBehavior: "全部风险行为"
  },
  userRiskStrategyFilterDraft: {
    keyword: "",
    entry: "全部入口",
    status: "全部状态",
    relatedTag: "全部标签",
    relatedBehavior: "全部风险行为"
  },
  userRiskLayerModal: {
    open: false,
    mode: "create",
    layerId: "",
    form: null
  },
  userRiskWorkbenchEntry: "登录",
  userRiskWorkbenchActiveIds: {
    登录: "",
    注册: ""
  },
  userRiskWorkbenchDraft: null,
  userRiskWorkbenchSourceId: "",
  userRiskWorkbenchBMode: "view",
  userRiskWorkbenchCDraft: null,
  userRiskWorkbenchCMode: "view",
  userRiskWorkbenchCSourceId: "",
  userRiskWorkbenchCSearch: "",
  userRiskWorkbenchCBehaviorModalDraft: null,
  userRiskWorkbenchCBehaviorModalSearch: "",
  userRiskWorkbenchCNodeDragging: null,
  userRiskWorkbenchCAxisHintVisible: false,
  userRiskWorkbenchCScoreHintVisible: false,
  userRiskWorkbenchCActiveBlockId: "",
  blockRuleModalDraft: null,
  blockRuleModalNextBlockSnapshot: null,
  blockRuleModalMode: "edit",
  activeBlockRuleId: "",
  blockRuleInsertAfterId: "",
  blockRuleModalSourcePage: "",
  paymentRiskWorkbenchEntry: "支付下单",
  paymentRiskWorkbenchActiveIds: {
    支付下单: ""
  },
  paymentRiskWorkbenchDraft: null,
  paymentRiskWorkbenchSourceId: "",
  paymentRiskWorkbenchBMode: "view",
  paymentRiskWorkbenchCDraft: null,
  paymentRiskWorkbenchCMode: "view",
  paymentRiskWorkbenchCSourceId: "",
  paymentRiskWorkbenchCBehaviorModalDraft: null,
  paymentRiskWorkbenchCBehaviorModalSearch: "",
  paymentRiskWorkbenchCNodeDragging: null,
  paymentRiskWorkbenchCAxisHintVisible: false,
  paymentRiskWorkbenchCActiveBlockId: "",
  userRiskBehaviorPickerOpen: false,
  userRiskRefreshAfterBehaviorRuleModal: false,
  conditionPicker: null,
  conditionSubtagForm: null,
  portraitContextPage: "login-query",
  portraitMode: "account",
  portraitKeyword: "",
  portraitView: "search",
  portraitResult: null,
  portraitTrail: [],
  portraitLogPage: 1,
  portraitLogQuickFilter: "all",
  portraitRelationMap: null,
  portraitLogTab: "user",
  statsCompareVersion: "",
  strategyCardTab: "全部",
  tagCardTab: "全部",
  behaviorCardTab: "全部风险行为",
  behaviorFilters: null,
  behaviorFilterDraft: null,
  toastVisible: false,
  toastMessage: ""
};

let overviewLoadingTimer = null;
let toastTimer = null;
let activeLogHeaderTooltipTrigger = null;
let userRiskCHintDismissBound = false;
let userRiskCDeleteKeyBound = false;

function renderToast() {
  let toast = document.body.querySelector("#app-toast");
  if (!state.toastVisible) {
    toast?.remove();
    return;
  }
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = state.toastMessage;
}

function hideToast() {
  state.toastVisible = false;
  state.toastMessage = "";
  if (toastTimer) {
    window.clearTimeout(toastTimer);
    toastTimer = null;
  }
  renderToast();
}

function showToast(message = "复制成功") {
  if (toastTimer) {
    window.clearTimeout(toastTimer);
    toastTimer = null;
  }
  state.toastVisible = true;
  state.toastMessage = message;
  renderToast();
  toastTimer = window.setTimeout(() => {
    hideToast();
  }, 1400);
}

function bindCopyActions(root, selector = "[data-copy-text]") {
  root.querySelectorAll(selector).forEach((node) => {
    node.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(node.dataset.copyText || node.dataset.logCopy || "");
        showToast("复制成功");
      } catch (error) {
        window.alert("复制失败，请稍后重试");
      }
    });
  });
}

const overviewChannelCategories = ["全部渠道", "官方渠道", "联运渠道"];
const overviewChannelTerminals = ["全部终端", "安卓", "iOS", "鸿蒙"];
const overviewChannelItems = [
  { id: "310003", name: "游卡官网-安卓", category: "官方渠道", terminal: "安卓" },
  { id: "410004", name: "游卡-iOS", category: "官方渠道", terminal: "iOS" },
  { id: "210002", name: "游卡官网-web", category: "官方渠道", terminal: "鸿蒙" },
  { id: "310007", name: "手杀官网-安卓", category: "官方渠道", terminal: "安卓" },
  { id: "210003", name: "好游快爆-安卓(官方)", category: "官方渠道", terminal: "安卓" },
  { id: "310011", name: "摸摸鱼-安卓(官方)", category: "官方渠道", terminal: "安卓" },
  { id: "310012", name: "微信公号下载-安卓", category: "联运渠道", terminal: "安卓" },
  { id: "310014", name: "TapTap-安卓(官方)", category: "联运渠道", terminal: "安卓" },
  { id: "210013", name: "微信公众号充值-Web", category: "联运渠道", terminal: "鸿蒙" },
  { id: "410021", name: "苹果联运-iOS", category: "联运渠道", terminal: "iOS" }
];
const overviewTimeHours = Array.from({ length: 24 }, (_, index) => String(index).padStart(2, "0"));
const overviewTimeMinutes = Array.from({ length: 60 }, (_, index) => String(index).padStart(2, "0"));
const overviewCalendarDays = [
  30, 31,
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 1, 2, 3,
  4, 5, 6, 7, 8, 9, 10
];
const overviewCalendarMeta = overviewCalendarDays.map((day, index) => {
  if (index < 2) return { day, monthOffset: -1 };
  if (index > 31) return { day, monthOffset: 1 };
  return { day, monthOffset: 0 };
});

const februaryLabels = Array.from({ length: 28 }, (_, index) => ({
  date: `2026-02-${String(index + 1).padStart(2, "0")}`,
  time: `${String((index * 3) % 24).padStart(2, "0")}:${String((index * 7) % 60).padStart(2, "0")}`
}));

const loginOverviewRequestBars = [
  11200, 24800, 17600, 22000, 15200, 20100, 14200, 26800, 13100, 24900, 17800, 21900, 15400, 20000, 13900, 27500, 12600, 25000, 18100, 22000, 15300, 20100, 14000, 26800, 13100, 24900, 17900, 17600
];
const loginOverviewRiskLine = [18, 24, 29, 34, 31, 28, 26, 25, 29, 36, 43, 35, 50, 40, 28, 22, 30, 41, 58, 49, 32, 27, 39, 35, 31, 29, 27, 25];
const loginOverviewTriggerLine = [8, 12, 17, 22, 20, 18, 16, 15, 21, 28, 37, 30, 42, 34, 20, 14, 24, 34, 50, 42, 24, 20, 31, 28, 24, 22, 20, 18];
const loginOverviewInterceptLine = [1, 2, 3, 4, 3, 3, 2, 2, 6, 13, 20.27, 12, 3, 1, 0.5, 2, 5, 9, 15, 11, 7, 6, 10, 8, 6, 5, 4, 3];

const registerOverviewRequestBars = [
  8200, 9600, 11000, 14200, 12100, 13600, 11800, 17300, 12400, 14900, 12800, 15100, 11700, 13200, 12600, 14800, 11900, 13900, 14500, 15800, 13600, 14900, 14200, 18100, 15000, 16200, 17100, 15700
];
const registerOverviewRiskLine = [14, 16, 18, 22, 24, 23, 21, 25, 22, 26, 31, 36, 30, 24, 20, 18, 21, 24, 29, 33, 28, 26, 24, 30, 28, 27, 26, 24];
const registerOverviewTriggerLine = [6, 8, 10, 13, 14, 13, 12, 14, 13, 16, 19, 26, 21, 17, 14, 12, 14, 16, 20, 24, 21, 18, 16, 22, 20, 18, 17, 16];
const registerOverviewInterceptLine = [0.5, 0.8, 1, 1.4, 1.6, 1.5, 1.3, 1.6, 1.5, 1.9, 2.6, 5.8, 3.1, 2.2, 1.4, 1.1, 1.3, 1.6, 2.4, 4.4, 3.6, 2.8, 2.2, 3.2, 2.8, 2.4, 2.2, 2.1];
const paymentOverviewRequestBars = [
  6800, 8200, 9100, 10500, 11200, 12600, 13800, 14900, 12100, 15800, 16600, 17400, 16800, 18200, 19500, 20100, 18900, 21400, 22500, 23700, 22800, 24100, 25300, 24700, 26200, 27100, 28400, 29600
];
const paymentOverviewRiskLine = [11, 13, 15, 18, 17, 19, 21, 24, 19, 26, 31, 35, 28, 33, 39, 42, 36, 44, 48, 52, 46, 49, 54, 51, 56, 58, 61, 64];
const paymentOverviewTriggerLine = [5, 7, 9, 11, 10, 11, 13, 15, 12, 16, 20, 24, 19, 22, 28, 30, 26, 33, 36, 39, 35, 37, 41, 39, 44, 46, 49, 52];
const paymentOverviewInterceptLine = [0.8, 1.2, 1.6, 2.1, 1.8, 2.2, 2.8, 3.2, 2.4, 3.5, 4.8, 5.6, 4.1, 4.9, 6.2, 6.8, 5.5, 7.4, 8.1, 8.9, 7.3, 7.9, 8.8, 8.1, 9.4, 9.8, 10.4, 11.2];

const overviewData = {
  "login-overview": {
    filters: {
      channel: "全渠道",
      strategy: "全策略",
      time: "近30天"
    },
    scenes: {
      login: {
        summary: [
          {
            title: "请求登录数",
            value: "10.23万",
            prev: "8.22万",
            rate: "12.42%",
            trend: "up",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，请求登录服务的总数",
            tooltipItems: [
              { label: "涉及账号数", value: "91,010" },
              { label: "涉及设备数", value: "48,222" },
              { label: "涉及IP数", value: "21,991" }
            ]
          },
          {
            title: "风险登录数",
            value: "1,231",
            prev: "998",
            rate: "12.42%",
            trend: "up",
            tooltipWidth: "374px",
            tooltipDescription: "统计时段内，命中风控策略(包括未开启的策略)的登录总数",
            tooltipItems: [
              { label: "涉及账号数", value: "900" },
              { label: "涉及设备数", value: "544" },
              { label: "涉及IP数", value: "322" }
            ]
          },
          {
            title: "风控触发数",
            value: "612",
            prev: "511",
            rate: "12.42%",
            trend: "up",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，触发已开启风控的登录总数",
            tooltipItems: [
              { label: "涉及账号数", value: "512" },
              { label: "涉及设备数", value: "333" },
              { label: "涉及IP数", value: "299" }
            ]
          },
          {
            title: "拦截登录数",
            value: "42",
            prev: "84",
            rate: "12.42%",
            trend: "down",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，触发风控后被拦截登录的总次数",
            tooltipItems: [
              { label: "涉及账号数", value: "30" },
              { label: "涉及设备数", value: "12" },
              { label: "涉及IP数", value: "2" }
            ]
          }
        ],
        chartModes: {
          request: {
            labels: februaryLabels,
            bars: loginOverviewRequestBars,
            barMax: 32000,
            percentMax: 100,
            lines: [
              { name: "风险登录", color: "#f59e0b", values: loginOverviewRiskLine, axis: "percent" },
              { name: "风控触发", color: "#8b7cf6", values: loginOverviewTriggerLine, axis: "percent" },
              { name: "拦截登录", color: "#38b2ac", values: loginOverviewInterceptLine, axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "登录数量", value: "544", percent: "100.00%", color: "#2664ff" },
              { label: "风险登录", value: "322", percent: "67.80%", color: "#f59e0b" },
              { label: "风控触发", value: "100", percent: "20.27%", color: "#8b7cf6" },
              { label: "拦截登录", value: "54", percent: "10.11%", color: "#38b2ac" }
            ]
          },
          device: {
            labels: februaryLabels,
            bars: loginOverviewRequestBars.map((value) => Math.round(value * 0.54)),
            barMax: 16000,
            percentMax: 100,
            lines: [
              { name: "风险设备", color: "#f59e0b", values: loginOverviewRiskLine.map((value) => Math.round(value * 0.78 * 100) / 100), axis: "percent" },
              { name: "风控设备", color: "#8b7cf6", values: loginOverviewTriggerLine.map((value) => Math.round(value * 0.74 * 100) / 100), axis: "percent" },
              { name: "拦截设备", color: "#38b2ac", values: loginOverviewInterceptLine.map((value) => Math.round(value * 0.62 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "设备数量", value: "333", percent: "100.00%", color: "#2664ff" },
              { label: "风险设备", value: "188", percent: "56.46%", color: "#f59e0b" },
              { label: "风控设备", value: "92", percent: "27.63%", color: "#8b7cf6" },
              { label: "拦截设备", value: "18", percent: "5.41%", color: "#38b2ac" }
            ]
          },
          account: {
            labels: februaryLabels,
            bars: loginOverviewRequestBars.map((value) => Math.round(value * 0.68)),
            barMax: 24000,
            percentMax: 100,
            lines: [
              { name: "风险账号", color: "#f59e0b", values: loginOverviewRiskLine.map((value) => Math.round(value * 0.81 * 100) / 100), axis: "percent" },
              { name: "风控账号", color: "#8b7cf6", values: loginOverviewTriggerLine.map((value) => Math.round(value * 0.82 * 100) / 100), axis: "percent" },
              { name: "拦截账号", color: "#38b2ac", values: loginOverviewInterceptLine.map((value) => Math.round(value * 0.74 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "账号数量", value: "910", percent: "100.00%", color: "#2664ff" },
              { label: "风险账号", value: "530", percent: "58.24%", color: "#f59e0b" },
              { label: "风控账号", value: "218", percent: "23.96%", color: "#8b7cf6" },
              { label: "拦截账号", value: "36", percent: "3.96%", color: "#38b2ac" }
            ]
          },
          ip: {
            labels: februaryLabels,
            bars: loginOverviewRequestBars.map((value) => Math.round(value * 0.38)),
            barMax: 12000,
            percentMax: 100,
            lines: [
              { name: "风险IP", color: "#f59e0b", values: loginOverviewRiskLine.map((value) => Math.round(value * 0.72 * 100) / 100), axis: "percent" },
              { name: "风控IP", color: "#8b7cf6", values: loginOverviewTriggerLine.map((value) => Math.round(value * 0.7 * 100) / 100), axis: "percent" },
              { name: "拦截IP", color: "#38b2ac", values: loginOverviewInterceptLine.map((value) => Math.round(value * 0.58 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "IP数量", value: "299", percent: "100.00%", color: "#2664ff" },
              { label: "风险IP", value: "178", percent: "59.53%", color: "#f59e0b" },
              { label: "风控IP", value: "91", percent: "30.43%", color: "#8b7cf6" },
              { label: "拦截IP", value: "11", percent: "3.68%", color: "#38b2ac" }
            ]
          }
        },
        pies: [
          {
            title: "行为风险 Top5",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "行为风险 类型",
            centerLabel: "风险行为数",
            centerValue: "5,221",
            items: [
              { rank: 1, label: "游戏内违规发言", value: "1,200", color: "#5d99f5" },
              { rank: 2, label: "脚本群控", value: "1,112", color: "#8f96ec" },
              { rank: 3, label: "异地登录", value: "821", color: "#3ca7a9" },
              { rank: 4, label: "新设备登录", value: "782", color: "#60c9a3" },
              { rank: 5, label: "刷登录接口", value: "666", color: "#a8db7f" }
            ]
          },
          {
            title: "账号风险 Top5",
            accent: "#5d99f5",
            renderMode: "bar",
            typeLabel: "账号风险 类型",
            centerLabel: "风险账号数",
            centerValue: "5,221",
            items: [
              { rank: 1, label: "被盗账号", value: "1,200", color: "#5d99f5" },
              { rank: 2, label: "代练账号", value: "1,112", color: "#8f96ec" },
              { rank: 3, label: "批量注册好号", value: "821", color: "#3ca7a9" },
              { rank: 4, label: "跨世账号", value: "782", color: "#60c9a3" },
              { rank: 5, label: "共享账号", value: "666", color: "#a8db7f" }
            ]
          },
          {
            title: "设备风险 Top5",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "设备风险 类型",
            centerLabel: "风险设备数",
            centerValue: "5,221",
            items: [
              { rank: 1, label: "虚拟机设备", value: "1,200", color: "#5d99f5" },
              { rank: 2, label: "越狱/Root设备", value: "1,112", color: "#8f96ec" },
              { rank: 3, label: "云真机设备", value: "821", color: "#3ca7a9" },
              { rank: 4, label: "模拟器设备", value: "782", color: "#60c9a3" },
              { rank: 5, label: "农场设备", value: "666", color: "#a8db7f" }
            ]
          },
          {
            title: "IP风险 Top4",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "IP风险 类型",
            centerLabel: "风险IP数",
            centerValue: "5,221",
            items: [
              { rank: 1, label: "代理IP", value: "1,200", color: "#5d99f5" },
              { rank: 2, label: "机房IP", value: "1,112", color: "#8f96ec" },
              { rank: 3, label: "工作室IP", value: "821", color: "#3ca7a9" },
              { rank: 4, label: "盗号团伙IP", value: "782", color: "#60c9a3" }
            ]
          }
        ]
      },
      register: {
        summary: [
          {
            title: "请求注册数",
            value: "6.88万",
            prev: "5.91万",
            rate: "9.83%",
            trend: "up",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，请求注册服务的总数",
            tooltipItems: [
              { label: "涉及账号数", value: "62,188" },
              { label: "涉及设备数", value: "25,419" },
              { label: "涉及IP数", value: "13,007" }
            ]
          },
          {
            title: "风险注册数",
            value: "866",
            prev: "724",
            rate: "8.14%",
            trend: "up",
            tooltipWidth: "374px",
            tooltipDescription: "统计时段内，命中风控策略(包括未开启的策略)的注册总数",
            tooltipItems: [
              { label: "涉及账号数", value: "821" },
              { label: "涉及设备数", value: "402" },
              { label: "涉及IP数", value: "277" }
            ]
          },
          {
            title: "风控触发数",
            value: "398",
            prev: "352",
            rate: "6.42%",
            trend: "up",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，触发已开启风控的注册总数",
            tooltipItems: [
              { label: "涉及账号数", value: "331" },
              { label: "涉及设备数", value: "208" },
              { label: "涉及IP数", value: "166" }
            ]
          },
          {
            title: "拦截注册数",
            value: "21",
            prev: "39",
            rate: "6.18%",
            trend: "down",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，触发风控后被拦截注册的总次数",
            tooltipItems: [
              { label: "涉及账号数", value: "19" },
              { label: "涉及设备数", value: "8" },
              { label: "涉及IP数", value: "4" }
            ]
          }
        ],
        chartModes: {
          request: {
            labels: februaryLabels,
            bars: registerOverviewRequestBars,
            barMax: 22000,
            percentMax: 100,
            lines: [
              { name: "风险注册", color: "#f59e0b", values: registerOverviewRiskLine, axis: "percent" },
              { name: "风控触发", color: "#8b7cf6", values: registerOverviewTriggerLine, axis: "percent" },
              { name: "拦截注册", color: "#38b2ac", values: registerOverviewInterceptLine, axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "请求注册", value: "420", percent: "100.00%", color: "#2664ff" },
              { label: "风险注册", value: "186", percent: "44.29%", color: "#f59e0b" },
              { label: "风控触发", value: "75", percent: "17.86%", color: "#8b7cf6" },
              { label: "拦截注册", value: "22", percent: "5.24%", color: "#38b2ac" }
            ]
          },
          device: {
            labels: februaryLabels,
            bars: registerOverviewRequestBars.map((value) => Math.round(value * 0.41)),
            barMax: 9000,
            percentMax: 100,
            lines: [
              { name: "风险设备", color: "#f59e0b", values: registerOverviewRiskLine.map((value) => Math.round(value * 0.82 * 100) / 100), axis: "percent" },
              { name: "风控设备", color: "#8b7cf6", values: registerOverviewTriggerLine.map((value) => Math.round(value * 0.78 * 100) / 100), axis: "percent" },
              { name: "拦截设备", color: "#38b2ac", values: registerOverviewInterceptLine.map((value) => Math.round(value * 0.69 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "设备数量", value: "166", percent: "100.00%", color: "#2664ff" },
              { label: "风险设备", value: "74", percent: "44.58%", color: "#f59e0b" },
              { label: "风控设备", value: "31", percent: "18.67%", color: "#8b7cf6" },
              { label: "拦截设备", value: "9", percent: "5.42%", color: "#38b2ac" }
            ]
          },
          account: {
            labels: februaryLabels,
            bars: registerOverviewRequestBars.map((value) => Math.round(value * 0.64)),
            barMax: 18000,
            percentMax: 100,
            lines: [
              { name: "风险账号", color: "#f59e0b", values: registerOverviewRiskLine.map((value) => Math.round(value * 0.88 * 100) / 100), axis: "percent" },
              { name: "风控账号", color: "#8b7cf6", values: registerOverviewTriggerLine.map((value) => Math.round(value * 0.84 * 100) / 100), axis: "percent" },
              { name: "拦截账号", color: "#38b2ac", values: registerOverviewInterceptLine.map((value) => Math.round(value * 0.72 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "账号数量", value: "355", percent: "100.00%", color: "#2664ff" },
              { label: "风险账号", value: "164", percent: "46.20%", color: "#f59e0b" },
              { label: "风控账号", value: "63", percent: "17.75%", color: "#8b7cf6" },
              { label: "拦截账号", value: "14", percent: "3.94%", color: "#38b2ac" }
            ]
          },
          ip: {
            labels: februaryLabels,
            bars: registerOverviewRequestBars.map((value) => Math.round(value * 0.31)),
            barMax: 8000,
            percentMax: 100,
            lines: [
              { name: "风险IP", color: "#f59e0b", values: registerOverviewRiskLine.map((value) => Math.round(value * 0.75 * 100) / 100), axis: "percent" },
              { name: "风控IP", color: "#8b7cf6", values: registerOverviewTriggerLine.map((value) => Math.round(value * 0.72 * 100) / 100), axis: "percent" },
              { name: "拦截IP", color: "#38b2ac", values: registerOverviewInterceptLine.map((value) => Math.round(value * 0.66 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "IP数量", value: "128", percent: "100.00%", color: "#2664ff" },
              { label: "风险IP", value: "57", percent: "44.53%", color: "#f59e0b" },
              { label: "风控IP", value: "21", percent: "16.41%", color: "#8b7cf6" },
              { label: "拦截IP", value: "6", percent: "4.69%", color: "#38b2ac" }
            ]
          }
        },
        pies: [
          {
            title: "行为风险 Top5",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "行为风险 类型",
            centerLabel: "风险行为数",
            centerValue: "3,106",
            items: [
              { rank: 1, label: "批量注册", value: "966", color: "#5d99f5" },
              { rank: 2, label: "异地注册", value: "812", color: "#8f96ec" },
              { rank: 3, label: "新设备注册", value: "604", color: "#3ca7a9" },
              { rank: 4, label: "代理注册", value: "412", color: "#60c9a3" },
              { rank: 5, label: "高频请求注册", value: "312", color: "#a8db7f" }
            ]
          },
          {
            title: "账号风险 Top5",
            accent: "#5d99f5",
            renderMode: "bar",
            typeLabel: "账号风险 类型",
            centerLabel: "风险账号数",
            centerValue: "2,821",
            items: [
              { rank: 1, label: "营销号", value: "866", color: "#5d99f5" },
              { rank: 2, label: "工作室账号", value: "744", color: "#8f96ec" },
              { rank: 3, label: "批量注册号", value: "588", color: "#3ca7a9" },
              { rank: 4, label: "接码账号", value: "342", color: "#60c9a3" },
              { rank: 5, label: "共享账号", value: "281", color: "#a8db7f" }
            ]
          },
          {
            title: "设备风险 Top5",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "设备风险 类型",
            centerLabel: "风险设备数",
            centerValue: "1,944",
            items: [
              { rank: 1, label: "模拟器设备", value: "640", color: "#5d99f5" },
              { rank: 2, label: "云手机设备", value: "518", color: "#8f96ec" },
              { rank: 3, label: "Root设备", value: "341", color: "#3ca7a9" },
              { rank: 4, label: "农场设备", value: "256", color: "#60c9a3" },
              { rank: 5, label: "批量设备", value: "189", color: "#a8db7f" }
            ]
          },
          {
            title: "IP风险 Top4",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "IP风险 类型",
            centerLabel: "风险IP数",
            centerValue: "1,102",
            items: [
              { rank: 1, label: "代理IP", value: "402", color: "#5d99f5" },
              { rank: 2, label: "机房IP", value: "288", color: "#8f96ec" },
              { rank: 3, label: "工作室IP", value: "244", color: "#3ca7a9" },
              { rank: 4, label: "盗号团伙IP", value: "168", color: "#60c9a3" }
            ]
          }
        ]
      }
    }
  },
  "payment-overview": {
    filters: {
      channel: "全渠道",
      strategy: "全策略",
      time: "近30天"
    },
    scenes: {
      payment: {
        summary: [
          {
            title: "请求支付数",
            value: "8.66万",
            prev: "7.43万",
            rate: "16.55%",
            trend: "up",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，请求支付服务的总数",
            tooltipItems: [
              { label: "涉及支付账号数", value: "52,310" },
              { label: "涉及设备数", value: "21,844" },
              { label: "涉及IP数", value: "11,903" }
            ]
          },
          {
            title: "风险支付数",
            value: "2,184",
            prev: "1,812",
            rate: "20.53%",
            trend: "up",
            tooltipWidth: "374px",
            tooltipDescription: "统计时段内，命中风控策略（包括未开启策略）的支付总数",
            tooltipItems: [
              { label: "涉及支付账号数", value: "1,522" },
              { label: "涉及设备数", value: "906" },
              { label: "涉及IP数", value: "488" }
            ]
          },
          {
            title: "风控触发数",
            value: "1,032",
            prev: "884",
            rate: "16.74%",
            trend: "up",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，触发已开启支付风控的总次数",
            tooltipItems: [
              { label: "涉及支付账号数", value: "824" },
              { label: "涉及设备数", value: "461" },
              { label: "涉及IP数", value: "318" }
            ]
          },
          {
            title: "拦截支付数",
            value: "188",
            prev: "151",
            rate: "24.50%",
            trend: "up",
            tooltipWidth: "314px",
            tooltipDescription: "统计时段内，触发风控后被拦截或终止的支付次数",
            tooltipItems: [
              { label: "涉及支付账号数", value: "134" },
              { label: "涉及设备数", value: "82" },
              { label: "涉及IP数", value: "44" }
            ]
          }
        ],
        chartModes: {
          request: {
            labels: februaryLabels,
            bars: paymentOverviewRequestBars,
            barMax: 32000,
            percentMax: 100,
            lines: [
              { name: "风险支付", color: "#f59e0b", values: paymentOverviewRiskLine, axis: "percent" },
              { name: "风控触发", color: "#8b7cf6", values: paymentOverviewTriggerLine, axis: "percent" },
              { name: "拦截支付", color: "#38b2ac", values: paymentOverviewInterceptLine, axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "下单数量", value: "1,024", percent: "100.00%", color: "#2664ff" },
              { label: "风险订单", value: "522", percent: "50.98%", color: "#f59e0b" },
              { label: "风控订单", value: "266", percent: "25.98%", color: "#8b7cf6" },
              { label: "拦截订单", value: "61", percent: "5.96%", color: "#38b2ac" }
            ]
          },
          device: {
            labels: februaryLabels,
            bars: paymentOverviewRequestBars.map((value) => Math.round(value * 0.46)),
            barMax: 15000,
            percentMax: 100,
            lines: [
              { name: "风险设备", color: "#f59e0b", values: paymentOverviewRiskLine.map((value) => Math.round(value * 0.83 * 100) / 100), axis: "percent" },
              { name: "风控设备", color: "#8b7cf6", values: paymentOverviewTriggerLine.map((value) => Math.round(value * 0.79 * 100) / 100), axis: "percent" },
              { name: "拦截设备", color: "#38b2ac", values: paymentOverviewInterceptLine.map((value) => Math.round(value * 0.71 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "设备数量", value: "381", percent: "100.00%", color: "#2664ff" },
              { label: "风险设备", value: "192", percent: "50.39%", color: "#f59e0b" },
              { label: "风控设备", value: "93", percent: "24.41%", color: "#8b7cf6" },
              { label: "拦截设备", value: "22", percent: "5.77%", color: "#38b2ac" }
            ]
          },
          account: {
            labels: februaryLabels,
            bars: paymentOverviewRequestBars.map((value) => Math.round(value * 0.62)),
            barMax: 20000,
            percentMax: 100,
            lines: [
              { name: "风险账号", color: "#f59e0b", values: paymentOverviewRiskLine.map((value) => Math.round(value * 0.88 * 100) / 100), axis: "percent" },
              { name: "风控账号", color: "#8b7cf6", values: paymentOverviewTriggerLine.map((value) => Math.round(value * 0.84 * 100) / 100), axis: "percent" },
              { name: "拦截账号", color: "#38b2ac", values: paymentOverviewInterceptLine.map((value) => Math.round(value * 0.76 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "账号数量", value: "714", percent: "100.00%", color: "#2664ff" },
              { label: "风险账号", value: "368", percent: "51.54%", color: "#f59e0b" },
              { label: "风控账号", value: "185", percent: "25.91%", color: "#8b7cf6" },
              { label: "拦截账号", value: "46", percent: "6.44%", color: "#38b2ac" }
            ]
          },
          ip: {
            labels: februaryLabels,
            bars: paymentOverviewRequestBars.map((value) => Math.round(value * 0.29)),
            barMax: 9000,
            percentMax: 100,
            lines: [
              { name: "风险IP", color: "#f59e0b", values: paymentOverviewRiskLine.map((value) => Math.round(value * 0.76 * 100) / 100), axis: "percent" },
              { name: "风控IP", color: "#8b7cf6", values: paymentOverviewTriggerLine.map((value) => Math.round(value * 0.72 * 100) / 100), axis: "percent" },
              { name: "拦截IP", color: "#38b2ac", values: paymentOverviewInterceptLine.map((value) => Math.round(value * 0.68 * 100) / 100), axis: "percent", dashed: true }
            ],
            tooltipRows: [
              { label: "IP数量", value: "238", percent: "100.00%", color: "#2664ff" },
              { label: "风险IP", value: "112", percent: "47.06%", color: "#f59e0b" },
              { label: "风控IP", value: "61", percent: "25.63%", color: "#8b7cf6" },
              { label: "拦截IP", value: "16", percent: "6.72%", color: "#38b2ac" }
            ]
          }
        },
        pies: [
          {
            title: "支付行为 Top5",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "支付行为 类型",
            centerLabel: "风险行为数",
            centerValue: "3,824",
            items: [
              { rank: 1, label: "异常金额支付", value: "1,046", color: "#5d99f5" },
              { rank: 2, label: "高频小额试探", value: "864", color: "#8f96ec" },
              { rank: 3, label: "短时间连续支付", value: "711", color: "#3ca7a9" },
              { rank: 4, label: "夜间异常支付", value: "632", color: "#60c9a3" },
              { rank: 5, label: "跨区支付", value: "571", color: "#a8db7f" }
            ]
          },
          {
            title: "支付账号 Top5",
            accent: "#5d99f5",
            renderMode: "bar",
            typeLabel: "支付账号 类型",
            centerLabel: "风险账号数",
            centerValue: "2,311",
            items: [
              { rank: 1, label: "盗刷账号", value: "712", color: "#5d99f5" },
              { rank: 2, label: "黑产收款账号", value: "566", color: "#8f96ec" },
              { rank: 3, label: "高频充值账号", value: "421", color: "#3ca7a9" },
              { rank: 4, label: "异常退款账号", value: "344", color: "#60c9a3" },
              { rank: 5, label: "代充账号", value: "268", color: "#a8db7f" }
            ]
          },
          {
            title: "支付设备 Top5",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "支付设备 类型",
            centerLabel: "风险设备数",
            centerValue: "1,604",
            items: [
              { rank: 1, label: "模拟器支付设备", value: "504", color: "#5d99f5" },
              { rank: 2, label: "云真机支付设备", value: "386", color: "#8f96ec" },
              { rank: 3, label: "越狱支付设备", value: "311", color: "#3ca7a9" },
              { rank: 4, label: "共享设备", value: "224", color: "#60c9a3" },
              { rank: 5, label: "设备农场", value: "179", color: "#a8db7f" }
            ]
          },
          {
            title: "支付IP Top4",
            accent: "#2664ff",
            renderMode: "bar",
            typeLabel: "支付IP 类型",
            centerLabel: "风险IP数",
            centerValue: "1,128",
            items: [
              { rank: 1, label: "代理IP", value: "368", color: "#5d99f5" },
              { rank: 2, label: "海外高风险IP", value: "296", color: "#8f96ec" },
              { rank: 3, label: "机房IP", value: "264", color: "#3ca7a9" },
              { rank: 4, label: "跨区代充IP", value: "200", color: "#60c9a3" }
            ]
          }
        ]
      }
    }
  }
};

configureOverviewData();
applyFigmaOverviewData();

function configureOverviewData() {
  const loginOverview = overviewData["login-overview"];
  const paymentOverview = overviewData["payment-overview"];

  delete loginOverview.filters.strategy;
  delete paymentOverview.filters.strategy;

  attachOverviewTooltipRows(loginOverview.scenes.login.summary, [
    {
      label: "登录数量",
      percent: "100.00%",
      details: [
        { label: "涉及账号", value: "91,010", percent: "100.00%" },
        { label: "涉及设备", value: "48,222", percent: "100.00%" },
        { label: "涉及IP", value: "21,991", percent: "100.00%" }
      ]
    },
    {
      label: "风险登录",
      percent: "1.20%",
      details: [
        { label: "涉及账号", value: "900", percent: "0.88%" },
        { label: "涉及设备", value: "544", percent: "0.53%" },
        { label: "涉及IP", value: "322", percent: "0.31%" }
      ]
    },
    {
      label: "风控触发",
      percent: "0.60%",
      details: [
        { label: "涉及账号", value: "512", percent: "0.50%" },
        { label: "涉及设备", value: "333", percent: "0.33%" },
        { label: "涉及IP", value: "299", percent: "0.29%" }
      ]
    },
    {
      label: "拦截登录",
      percent: "0.04%",
      details: [
        { label: "涉及账号", value: "30", percent: "0.03%" },
        { label: "涉及设备", value: "12", percent: "0.01%" },
        { label: "涉及IP", value: "2", percent: "0.00%" }
      ]
    }
  ]);

  attachOverviewTooltipRows(loginOverview.scenes.register.summary, [
    {
      label: "请求注册",
      percent: "100.00%",
      details: [
        { label: "涉及账号", value: "62,188", percent: "90.4%" },
        { label: "涉及设备", value: "25,419", percent: "36.9%" },
        { label: "涉及IP", value: "13,007", percent: "18.9%" }
      ]
    },
    {
      label: "风险注册",
      percent: "1.26%",
      details: [
        { label: "涉及账号", value: "821", percent: "1.19%" },
        { label: "涉及设备", value: "402", percent: "0.58%" },
        { label: "涉及IP", value: "277", percent: "0.40%" }
      ]
    },
    {
      label: "风控触发",
      percent: "0.58%",
      details: [
        { label: "涉及账号", value: "331", percent: "0.48%" },
        { label: "涉及设备", value: "208", percent: "0.30%" },
        { label: "涉及IP", value: "166", percent: "0.24%" }
      ]
    },
    {
      label: "拦截注册",
      percent: "0.03%",
      details: [
        { label: "涉及账号", value: "19", percent: "0.03%" },
        { label: "涉及设备", value: "8", percent: "0.01%" },
        { label: "涉及IP", value: "4", percent: "0.01%" }
      ]
    }
  ]);

  loginOverview.scenes.login.topCard = {
    title: "登录风险排名",
    accent: "#2664ff",
    renderMode: "bar",
    typeLabel: "行为风险类型",
    valueLabel: "数量",
    items: [
      { rank: 1, label: "登录撞库", value: "1,200" },
      { rank: 2, label: "批量登录", value: "1,112" },
      { rank: 3, label: "异地登录", value: "821" },
      { rank: 4, label: "盗号设备登录", value: "782" },
      { rank: 5, label: "刷登录接口", value: "666" }
    ]
  };
  loginOverview.scenes.register.topCard = {
    title: "注册风险 Top5",
    accent: "#2664ff",
    renderMode: "bar",
    typeLabel: "行为风险类型",
    valueLabel: "数量",
    items: [
      { rank: 1, label: "批量注册", value: "966" },
      { rank: 2, label: "异地注册", value: "812" },
      { rank: 3, label: "新设备注册", value: "604" },
      { rank: 4, label: "代理注册", value: "412" },
      { rank: 5, label: "高频请求注册", value: "312" }
    ]
  };
  delete loginOverview.scenes.login.pies;
  delete loginOverview.scenes.register.pies;

  paymentOverview.scenes.payment.summary = [
    {
      title: "风险金额概览",
      primaryLabel: "今日累计风险金额",
      primaryPrefix: "USD",
      primaryValue: "11,522",
      secondaryLabel: "累计风险金额占比",
      secondaryValue: "1.49",
      secondaryUnit: "%",
      compareRows: [
        { label: "昨日同期", value: "9,842", percent: "1.22%" },
        { label: "7日前", value: "8,104", percent: "1.03%" }
      ],
      tooltipWidth: "340px",
      tooltipDescription: "统计时段内，命中支付风控规则的风险订单累计金额"
    },
    {
      title: "风险订单数概览",
      primaryLabel: "今日风险订单数",
      primaryValue: "1,231",
      primaryUnit: "单",
      secondaryLabel: "累计风险订单数占比",
      secondaryValue: "1.22",
      secondaryUnit: "%",
      compareRows: [
        { label: "昨日同期", value: "998", percent: "0.99%" },
        { label: "7日前", value: "846", percent: "0.84%" }
      ],
      tooltipWidth: "340px",
      tooltipDescription: "统计时段内，命中支付风控规则的风险订单总数"
    },
    {
      title: "拦截订单数概览",
      primaryLabel: "今日拦截订单数",
      primaryValue: "策略未开启，暂无拦截数据",
      secondaryLabel: "今日拦截订单占比",
      secondaryValue: "策略未开启，暂无拦截数据",
      compareRows: [],
      emptyText: "-",
      tooltipWidth: "340px",
      tooltipDescription: "策略未开启，暂无拦截数据"
    },
    {
      title: "拦截金额概览",
      primaryLabel: "今日拦截订单金额",
      primaryValue: "策略未开启，暂无拦截数据",
      secondaryLabel: "今日拦截金额占比",
      secondaryValue: "策略未开启，暂无拦截数据",
      compareRows: [],
      emptyText: "",
      tooltipWidth: "340px",
      tooltipDescription: "策略未开启，暂无拦截数据"
    }
  ];

  attachOverviewTooltipRows(paymentOverview.scenes.payment.summary, [
    {
      label: "下单数量",
      percent: "100.00%",
      details: [
        { label: "累计金额", value: "512,310", percent: "100.00%" }
      ]
    },
    {
      label: "风险订单",
      percent: "1.20%",
      details: [
        { label: "累计金额", value: "11,522", percent: "1.49%" }
      ]
    },
    {
      label: "风控触发",
      percent: "0.60%",
      details: [
        { label: "累计金额", value: "2824", percent: "0.81%" }
      ]
    },
    {
      label: "拦截下单",
      percent: "0.04%",
      details: [
        { label: "累计金额", value: "1314", percent: "0.13%" }
      ]
    }
  ]);

  paymentOverview.scenes.payment.chartModes = {
    orderCount: {
      labels: februaryLabels,
      bars: paymentOverviewRequestBars,
      barMax: 32000,
      percentMax: 100,
      lines: [
        { name: "风险订单", color: "#f59e0b", values: paymentOverviewRiskLine, axis: "percent" },
        { name: "风控触发", color: "#8b7cf6", values: paymentOverviewTriggerLine, axis: "percent" },
        { name: "拦截下单", color: "#38b2ac", values: paymentOverviewInterceptLine, axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "下单数量", value: "1,024", percent: "100.00%", color: "#2664ff" },
        { label: "风险订单", value: "522", percent: "50.98%", color: "#f59e0b" },
        { label: "风控触发", value: "266", percent: "25.98%", color: "#8b7cf6" },
        { label: "拦截下单", value: "61", percent: "5.96%", color: "#38b2ac" }
      ]
    },
    orderAmount: {
      labels: februaryLabels,
      bars: paymentOverviewRequestBars.map((value) => Math.round(value * 42.6)),
      barMax: 1400000,
      percentMax: 100,
      lines: [
        { name: "风险金额", color: "#f59e0b", values: paymentOverviewRiskLine.map((value) => Math.round(value * 0.92 * 100) / 100), axis: "percent" },
        { name: "风控金额", color: "#8b7cf6", values: paymentOverviewTriggerLine.map((value) => Math.round(value * 0.88 * 100) / 100), axis: "percent" },
        { name: "拦截金额", color: "#38b2ac", values: paymentOverviewInterceptLine.map((value) => Math.round(value * 0.74 * 100) / 100), axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "订单金额", value: "44.6万", percent: "100.00%", color: "#2664ff" },
        { label: "风险金额", value: "12.3万", percent: "27.58%", color: "#f59e0b" },
        { label: "风控金额", value: "8.8万", percent: "19.73%", color: "#8b7cf6" },
        { label: "拦截金额", value: "1.6万", percent: "3.59%", color: "#38b2ac" }
      ]
    }
  };

  paymentOverview.scenes.payment.topCard = {
    title: "支付风险排名",
    accent: "#2664ff",
    renderMode: "bar",
    typeLabel: "行为风险类型",
    valueLabel: "涉及订单总数",
    items: [
      { rank: 1, label: "代充", value: "1,200" },
      { rank: 2, label: "盗刷信用卡", value: "1,112" },
      { rank: 3, label: "恶意退款", value: "821" },
      { rank: 4, label: "恶意小额支付", value: "782" },
      { rank: 5, label: "跨区支付", value: "666" }
    ]
  };
  delete paymentOverview.scenes.payment.pies;
}

function applyFigmaOverviewData() {
  const interceptNoticeText = "项目暂未配置风控拦截策略，配置后即可查看拦截数据";
  const loginOverview = overviewData["login-overview"];
  const paymentOverview = overviewData["payment-overview"];
  const sharedChannelOptions = ["全渠道", "安卓渠道", "iOS渠道"];
  const sharedTimeOptions = ["近7天", "近15天", "近30天"];

  loginOverview.filters.channel = "全渠道";
  loginOverview.filters.time = "近30天";
  loginOverview.filters.channelOptions = sharedChannelOptions;
  loginOverview.filters.timeOptions = sharedTimeOptions;

  paymentOverview.filters.channel = "全渠道";
  paymentOverview.filters.time = "近30天";
  paymentOverview.filters.channelOptions = sharedChannelOptions;
  paymentOverview.filters.timeOptions = sharedTimeOptions;

  loginOverview.scenes.login.summaryCards = [
    {
      title: "拦截登录概览",
      primaryLabel: "今日拦截登录数",
      primaryValue: "0",
      primaryInfoText: "当日 00:00 至当前，风控系统拦截登录的登录数",
      secondaryLabel: "今日拦截登录占比",
      secondaryValue: "0.00%",
      secondaryInfoText: "当日 00:00 至当前，拦截登录数 ÷ 总登录数",
      compareRows: createFlatOverviewCompareRows()
    },
    {
      title: "拦截账号概览",
      primaryLabel: "今日拦截账号数",
      primaryValue: "899",
      primaryInfoText: "当日 00:00 至当前，风控系统拦截登录的去重账号数",
      secondaryLabel: "今日拦截账号占比",
      secondaryValue: "0.46%",
      secondaryInfoText: "当日 00:00 至当前，拦截账号数 ÷ 总账号数（去重）",
      compareRows: [
        { label: "昨日同期", leftValue: "801", leftRate: "12.23%", rightValue: "0.34%", rightRate: "0.12%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "722", leftRate: "24.52%", rightValue: "0.25%", rightRate: "0.21%", leftTrend: "up", rightTrend: "up" }
      ]
    },
    {
      title: "风险登录概览",
      primaryLabel: "今日风险登录数",
      primaryValue: "4,884",
      primaryInfoText: "当日 00:00 至当前，被风控系统标记为风险登录的登录数",
      secondaryLabel: "今日风险登录占比",
      secondaryValue: "2.11%",
      secondaryInfoText: "当日 00:00 至当前，风险登录数 ÷ 总登录数",
      compareRows: [
        { label: "昨日同期", leftValue: "4,333", leftRate: "12.42%", rightValue: "2.01%", rightRate: "0.11%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "4,111", leftRate: "18.81%", rightValue: "1.22%", rightRate: "0.89%", leftTrend: "up", rightTrend: "up" }
      ]
    },
    {
      title: "风险账号概览",
      primaryLabel: "今日风险账号数",
      primaryValue: "3,211",
      primaryInfoText: "当日 00:00 至当前，被风控系统标记为风险登录的登录请求中，去重账号数量",
      secondaryLabel: "今日风险账号占比",
      secondaryValue: "1.78%",
      secondaryInfoText: "当日 00:00 至当前，风险账号数 ÷ 总账号数（去重）",
      compareRows: [
        { label: "昨日同期", leftValue: "2,861", leftRate: "12.21%", rightValue: "1.62%", rightRate: "0.16%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "2,432", leftRate: "32.03%", rightValue: "1.23%", rightRate: "0.55%", leftTrend: "up", rightTrend: "up" }
      ]
    }
  ];

  loginOverview.scenes.register.summaryCards = [
    {
      title: "拦截注册概览",
      primaryLabel: "今日拦截注册数",
      primaryValue: "1,221",
      primaryInfoText: "当日 00:00 至当前，风控系统拦截注册的注册数",
      secondaryLabel: "今日拦截注册占比",
      secondaryValue: "0.52%",
      secondaryInfoText: "当日 00:00 至当前，拦截注册数 ÷ 总注册数",
      compareRows: [
        { label: "昨日同期", leftValue: "1,088", leftRate: "12.22%", rightValue: "0.46%", rightRate: "0.06%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "977", leftRate: "24.97%", rightValue: "0.33%", rightRate: "0.19%", leftTrend: "up", rightTrend: "up" }
      ]
    },
    {
      title: "拦截设备概览",
      primaryLabel: "今日拦截设备数",
      primaryValue: "899",
      primaryInfoText: "当日 00:00 至当前，风控系统拦截注册的去重设备数量",
      secondaryLabel: "今日拦截设备占比",
      secondaryValue: "0.46%",
      secondaryInfoText: "当日 00:00 至当前，拦截设备数 ÷ 全部注册设备数（去重）",
      compareRows: [
        { label: "昨日同期", leftValue: "801", leftRate: "12.23%", rightValue: "0.34%", rightRate: "0.12%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "722", leftRate: "24.52%", rightValue: "0.25%", rightRate: "0.21%", leftTrend: "up", rightTrend: "up" }
      ]
    },
    {
      title: "风险注册概览",
      primaryLabel: "今日风险注册数",
      primaryValue: "4,884",
      primaryInfoText: "当日 00:00 至当前，被风控系统标记为风险注册的注册数",
      secondaryLabel: "今日风险注册占比",
      secondaryValue: "2.11%",
      secondaryInfoText: "当日 00:00 至当前，风险注册数 ÷ 总注册数",
      compareRows: [
        { label: "昨日同期", leftValue: "4,333", leftRate: "12.42%", rightValue: "2.01%", rightRate: "0.11%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "4,111", leftRate: "18.81%", rightValue: "1.22%", rightRate: "0.89%", leftTrend: "up", rightTrend: "up" }
      ]
    },
    {
      title: "风险设备概览",
      primaryLabel: "今日风险设备数",
      primaryValue: "3,211",
      primaryInfoText: "当日 00:00 至当前，被风控系统标记为风险注册的注册请求中，去重设备数量",
      secondaryLabel: "今日风险设备占比",
      secondaryValue: "1.78%",
      secondaryInfoText: "当日 00:00 至当前，风险设备数 ÷ 全部注册设备数（去重）",
      compareRows: [
        { label: "昨日同期", leftValue: "2,861", leftRate: "12.21%", rightValue: "1.62%", rightRate: "0.16%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "2,432", leftRate: "32.03%", rightValue: "1.23%", rightRate: "0.55%", leftTrend: "up", rightTrend: "up" }
      ]
    }
  ];

  loginOverview.scenes.login.chartModes = {
    request: {
      labels: februaryLabels,
      bars: loginOverviewRequestBars,
      barMax: 32000,
      lines: [
        { name: "风险登录", color: "#f59e0b", values: loginOverviewRiskLine, axis: "percent" },
        { name: "风控登录", color: "#8b7cf6", values: loginOverviewTriggerLine, axis: "percent" },
        { name: "登录拦截", color: "#38b2ac", values: loginOverviewInterceptLine, axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "登录数量", value: "544", percent: "100.00%", color: "#2664ff" },
        { label: "风险登录", value: "322", percent: "67.80%", color: "#f59e0b" },
        { label: "风控登录", value: "100", percent: "20.27%", color: "#8b7cf6" },
        { label: "拦截登录", value: "54", percent: "10.11%", color: "#38b2ac" }
      ],
      legendInfoTexts: ["", "统计时段内，被风控系统标记为有风险的登录请求。", "统计时段内，被风控系统采取处置的风险登录请求。 处置动作包括：滑块验证、短信通知、验证码验证、登录拦截、封禁等。", "统计时段内，被风控系统拦截登录的登录请求。"]
    },
    account: {
      labels: februaryLabels,
      bars: loginOverviewRequestBars.map((value) => Math.round(value * 0.68)),
      barMax: 24000,
      lines: [
        { name: "风险账号", color: "#f59e0b", values: loginOverviewRiskLine.map((value) => Math.round(value * 0.81 * 100) / 100), axis: "percent" },
        { name: "风控账号", color: "#8b7cf6", values: loginOverviewTriggerLine.map((value) => Math.round(value * 0.82 * 100) / 100), axis: "percent" },
        { name: "账号拦截", color: "#38b2ac", values: loginOverviewInterceptLine.map((value) => Math.round(value * 0.74 * 100) / 100), axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "账号数量", value: "910", percent: "100.00%", color: "#2664ff" },
        { label: "风险账号", value: "530", percent: "58.24%", color: "#f59e0b" },
        { label: "风控账号", value: "218", percent: "23.96%", color: "#8b7cf6" },
        { label: "拦截账号", value: "36", percent: "3.96%", color: "#38b2ac" }
      ],
      legendInfoTexts: ["", "统计时段内，被风控系统标记为有风险的账号。", "统计时段内，登录请求被风控系统处置的账号。", "统计时段内，被风控系统拦截登录的账号。"]
    },
    device: {
      labels: februaryLabels,
      bars: loginOverviewRequestBars.map((value) => Math.round(value * 0.54)),
      barMax: 16000,
      lines: [
        { name: "风险设备", color: "#f59e0b", values: loginOverviewRiskLine.map((value) => Math.round(value * 0.78 * 100) / 100), axis: "percent" },
        { name: "风控设备", color: "#8b7cf6", values: loginOverviewTriggerLine.map((value) => Math.round(value * 0.74 * 100) / 100), axis: "percent" },
        { name: "设备拦截", color: "#38b2ac", values: loginOverviewInterceptLine.map((value) => Math.round(value * 0.62 * 100) / 100), axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "设备数量", value: "333", percent: "100.00%", color: "#2664ff" },
        { label: "风险设备", value: "188", percent: "56.46%", color: "#f59e0b" },
        { label: "风控设备", value: "92", percent: "27.63%", color: "#8b7cf6" },
        { label: "拦截设备", value: "18", percent: "5.41%", color: "#38b2ac" }
      ],
      legendInfoTexts: ["", "统计时段内，被风控系统标记为有风险的设备。", "统计时段内，登录请求被风控系统处置的设备。", "统计时段内，被风控系统拦截登录的设备。"]
    },
    ip: {
      labels: februaryLabels,
      bars: loginOverviewRequestBars.map((value) => Math.round(value * 0.38)),
      barMax: 12000,
      lines: [
        { name: "风险IP", color: "#f59e0b", values: loginOverviewRiskLine.map((value) => Math.round(value * 0.72 * 100) / 100), axis: "percent" },
        { name: "风控IP", color: "#8b7cf6", values: loginOverviewTriggerLine.map((value) => Math.round(value * 0.7 * 100) / 100), axis: "percent" },
        { name: "IP拦截", color: "#38b2ac", values: loginOverviewInterceptLine.map((value) => Math.round(value * 0.58 * 100) / 100), axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "IP数量", value: "299", percent: "100.00%", color: "#2664ff" },
        { label: "风险IP", value: "178", percent: "59.53%", color: "#f59e0b" },
        { label: "风控IP", value: "91", percent: "30.43%", color: "#8b7cf6" },
        { label: "拦截IP", value: "11", percent: "3.68%", color: "#38b2ac" }
      ],
      legendInfoTexts: ["", "统计时段内，被风控系统标记为有风险的IP地址。", "统计时段内，登录请求被风控系统处置的IP地址。", "统计时段内，被风控系统拦截登录的IP地址。"]
    }
  };

  loginOverview.scenes.register.chartModes = {
    request: {
      labels: februaryLabels,
      bars: registerOverviewRequestBars,
      barMax: 22000,
      lines: [
        { name: "风险注册", color: "#f59e0b", values: registerOverviewRiskLine, axis: "percent" },
        { name: "风控注册", color: "#8b7cf6", values: registerOverviewTriggerLine, axis: "percent" },
        { name: "注册拦截", color: "#38b2ac", values: registerOverviewInterceptLine, axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "注册数量", value: "544", percent: "100.00%", color: "#2664ff" },
        { label: "风险注册", value: "322", percent: "67.80%", color: "#f59e0b" },
        { label: "风控注册", value: "100", percent: "20.27%", color: "#8b7cf6" },
        { label: "拦截注册", value: "54", percent: "10.11%", color: "#38b2ac" }
      ],
      legendInfoTexts: ["", "统计时段内，被风控系统标记为有风险的注册请求。", "统计时段内，被风控系统采取处置的风险注册请求。 处置动作包括：滑块验证、短信通知、验证码验证、注册拦截、封禁等。", "统计时段内，被风控系统拦截注册的注册请求。"]
    },
    account: {
      labels: februaryLabels,
      bars: registerOverviewRequestBars.map((value) => Math.round(value * 0.64)),
      barMax: 18000,
      lines: [
        { name: "风险账号", color: "#f59e0b", values: registerOverviewRiskLine.map((value) => Math.round(value * 0.88 * 100) / 100), axis: "percent" },
        { name: "风控账号", color: "#8b7cf6", values: registerOverviewTriggerLine.map((value) => Math.round(value * 0.84 * 100) / 100), axis: "percent" },
        { name: "账号拦截", color: "#38b2ac", values: registerOverviewInterceptLine.map((value) => Math.round(value * 0.72 * 100) / 100), axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "账号数量", value: "355", percent: "100.00%", color: "#2664ff" },
        { label: "风险账号", value: "164", percent: "46.20%", color: "#f59e0b" },
        { label: "风控账号", value: "63", percent: "17.75%", color: "#8b7cf6" },
        { label: "拦截账号", value: "14", percent: "3.94%", color: "#38b2ac" }
      ],
      legendInfoTexts: ["", "统计时段内，被风控系统标记为有风险的注册账号。", "统计时段内，注册请求被风控系统处置的账号。", "统计时段内，被风控系统拦截注册的账号。"]
    },
    device: {
      labels: februaryLabels,
      bars: registerOverviewRequestBars.map((value) => Math.round(value * 0.41)),
      barMax: 9000,
      lines: [
        { name: "风险设备", color: "#f59e0b", values: registerOverviewRiskLine.map((value) => Math.round(value * 0.82 * 100) / 100), axis: "percent" },
        { name: "风控设备", color: "#8b7cf6", values: registerOverviewTriggerLine.map((value) => Math.round(value * 0.78 * 100) / 100), axis: "percent" },
        { name: "设备拦截", color: "#38b2ac", values: registerOverviewInterceptLine.map((value) => Math.round(value * 0.69 * 100) / 100), axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "设备数量", value: "166", percent: "100.00%", color: "#2664ff" },
        { label: "风险设备", value: "74", percent: "44.58%", color: "#f59e0b" },
        { label: "风控设备", value: "31", percent: "18.67%", color: "#8b7cf6" },
        { label: "拦截设备", value: "9", percent: "5.42%", color: "#38b2ac" }
      ],
      legendInfoTexts: ["", "统计时段内，被风控系统标记为有风险的设备。", "统计时段内，注册请求被风控系统处置的设备。", "统计时段内，被风控系统拦截注册的设备。"]
    },
    ip: {
      labels: februaryLabels,
      bars: registerOverviewRequestBars.map((value) => Math.round(value * 0.31)),
      barMax: 8000,
      lines: [
        { name: "风险IP", color: "#f59e0b", values: registerOverviewRiskLine.map((value) => Math.round(value * 0.75 * 100) / 100), axis: "percent" },
        { name: "风控IP", color: "#8b7cf6", values: registerOverviewTriggerLine.map((value) => Math.round(value * 0.72 * 100) / 100), axis: "percent" },
        { name: "IP拦截", color: "#38b2ac", values: registerOverviewInterceptLine.map((value) => Math.round(value * 0.66 * 100) / 100), axis: "percent", dashed: true }
      ],
      tooltipRows: [
        { label: "IP数量", value: "128", percent: "100.00%", color: "#2664ff" },
        { label: "风险IP", value: "57", percent: "44.53%", color: "#f59e0b" },
        { label: "风控IP", value: "21", percent: "16.41%", color: "#8b7cf6" },
        { label: "拦截IP", value: "6", percent: "4.69%", color: "#38b2ac" }
      ],
      legendInfoTexts: ["", "统计时段内，被风控系统标记为有风险的IP地址。", "统计时段内，注册请求被风控系统处置的IP地址。", "统计时段内，被风控系统拦截注册的IP地址。"]
    }
  };

  loginOverview.scenes.login.topCard = {
    title: "登录风险",
    accent: "#2664ff",
    renderMode: "bar",
    typeLabel: "行为风险类型",
    valueLabel: "数量",
    extraLabel: "线上占比",
    items: [
      { rank: 1, label: "暴力破解密码", value: "1,200", extraValue: "22.11%", infoText: "同一IP或设备，短时间多次触发账密登录失败" },
      { rank: 2, label: "登录地异常", value: "1,112", extraValue: "18.22%", infoText: "本次登录的IP归属地，相较上次登录地和常用登录地，变化过大" },
      { rank: 3, label: "登录设备异常", value: "821", extraValue: "12.22%", infoText: "本次登录的设备，相较上次登录的设备和常用登录设备，变化过大" },
      { rank: 4, label: "设备关联过多账号", value: "782", extraValue: "11.13%", infoText: "同一设备，近期登录的账号去重数量过多" },
      { rank: 5, label: "IP关联账号过多", value: "666", extraValue: "9.83%", infoText: "同一IP，近期登录的账号去重数量过多" }
    ]
  };

  loginOverview.scenes.register.topCard = {
    title: "注册风险",
    accent: "#2664ff",
    renderMode: "bar",
    typeLabel: "行为风险类型",
    valueLabel: "数量",
    extraLabel: "线上占比",
    items: [
      { rank: 1, label: "设备批量刷号", value: "1,200", extraValue: "22.11%", infoText: "同一设备或设备簇高频发起注册请求。" },
      { rank: 2, label: "IP批量刷号", value: "1,112", extraValue: "18.22%", infoText: "同一IP或代理IP批量触发注册。" },
      { rank: 3, label: "设备刷注册接口", value: "821", extraValue: "12.22%", infoText: "设备在极短时间内重复触发注册接口。" },
      { rank: 4, label: "IP刷注册接口", value: "782", extraValue: "11.13%", infoText: "IP在短期内高频访问注册接口。" },
      { rank: 5, label: "注册撞库", value: "666", extraValue: "9.83%", infoText: "疑似使用批量账号信息进行注册尝试。" }
    ]
  };

  paymentOverview.scenes.payment.summary = [
    {
      title: "风险订单概览",
      primaryLabel: "今日风险订单数",
      primaryValue: "18.23万",
      primaryInfoText: "当日 00:00 至当前，被风控系统标记为风险订单的订单数",
      secondaryLabel: "今日风险订单占比",
      secondaryValue: "2.11%",
      secondaryInfoText: "当日 00:00 至当前，风险订单数 ÷ 总订单数",
      compareRows: [
        { label: "昨日同期", leftValue: "10.23万", leftRate: "78.20%", rightValue: "2.01%", rightRate: "0.10%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "8.86万", leftRate: "105.76%", rightValue: "1.22%", rightRate: "0.89%", leftTrend: "up", rightTrend: "up" }
      ]
    },
    {
      title: "风险金额概览",
      primaryLabel: "今日风险金额",
      primaryValue: "778.23万",
      primaryPrefix: "RMB",
      primaryInfoText: "当日 00:00 至当前，被风控系统标记为风险订单的订单金额",
      secondaryLabel: "今日风险金额占比",
      secondaryValue: "2.11%",
      secondaryInfoText: "当日 00:00 至当前，风险金额 ÷ 总订单金额",
      compareRows: [
        { label: "昨日同期", leftValue: "712.26万", leftRate: "9.26%", rightValue: "2.01%", rightRate: "0.10%", leftTrend: "up", rightTrend: "up" },
        { label: "昨7日前同期", leftValue: "633.41万", leftRate: "22.86%", rightValue: "1.22%", rightRate: "0.89%", leftTrend: "up", rightTrend: "up" }
      ]
    }
  ];
  paymentOverview.scenes.payment.pageNotice = interceptNoticeText;

  paymentOverview.scenes.payment.chartModes.orderCount.tooltipRows = [
    { label: "下单数量", value: "544", percent: "100.00%", color: "#2664ff" },
    { label: "风险订单", value: "322", percent: "67.80%", color: "#f59e0b" },
    { label: "风控订单", value: "100", percent: "20.27%", color: "#8b7cf6" },
    { label: "拦截订单", value: "5", percent: "1.11%", color: "#38b2ac" }
  ];
  paymentOverview.scenes.payment.chartModes.orderCount.legendInfoTexts = ["", "统计时段内，被风控系统标记为有风险的支付订单。", "统计时段内，支付请求被风控系统处置的订单。", "统计时段内，被风控系统拦截下单的订单。"];
  paymentOverview.scenes.payment.chartModes.orderAmount.tooltipRows = [
    { label: "下单金额", value: "RMB 44.6万", percent: "100.00%", color: "#2664ff" },
    { label: "风险金额", value: "RMB 12.3万", percent: "27.58%", color: "#f59e0b" },
    { label: "风控金额", value: "RMB 8.8万", percent: "19.73%", color: "#8b7cf6" },
    { label: "拦截金额", value: "RMB 1.6万", percent: "3.59%", color: "#38b2ac" }
  ];
  paymentOverview.scenes.payment.chartModes.orderAmount.legendInfoTexts = [
    "",
    "统计时段内，被风控系统标记为有风险的支付请求所对应的金额。",
    "统计时段内，被风控系统采取处置的支付请求所对应的金额。",
    "统计时段内，被风控系统拦截下单的金额。"
  ];
  paymentOverview.scenes.payment.topCard = {
    title: "支付风险",
    accent: "#2664ff",
    renderMode: "bar",
    typeLabel: "行为风险类型",
    valueLabel: "订单数",
    extraLabel: "订单金额",
    items: [
      { rank: 1, label: "账号小额充值", value: "1,200", extraValue: "781,123", infoText: "账号短时间内多次出现小额充值行为。" },
      { rank: 2, label: "账号代充", value: "1,112", extraValue: "736,420", infoText: "账号存在疑似第三方代充或工作室代充行为。" },
      { rank: 3, label: "设备小额充值", value: "821", extraValue: "652,116", infoText: "同一设备短时间内多次触发小额充值。" },
      { rank: 4, label: "设备代充", value: "782", extraValue: "611,304", infoText: "同一设备关联多个账号进行疑似代充。" },
      { rank: 5, label: "越狱设备充值", value: "666", extraValue: "508,992", infoText: "越狱或 Root 设备触发的高风险充值行为。" },
      { rank: 6, label: "VPN网络充值", value: "524", extraValue: "437,281", infoText: "使用 VPN 或代理网络发起的异常充值行为。" }
    ]
  };

  loginOverview.scenes.login.emptyState = {
    summaryText: "当前渠道暂未接入 SDK 上报，暂无登录安全概览数据。",
    trendText: "当前渠道暂无登录风险趋势数据。",
    rankingText: "当前渠道暂无登录风险排行数据。"
  };
  loginOverview.scenes.register.emptyState = {
    summaryText: "当前渠道暂未接入 SDK 上报，暂无注册安全概览数据。",
    trendText: "当前渠道暂无注册风险趋势数据。",
    rankingText: "当前渠道暂无注册风险排行数据。"
  };
  paymentOverview.scenes.payment.emptyState = {
    summaryText: "当前渠道暂未接入 SDK 上报，暂无支付安全概览数据。",
    trendText: "当前渠道暂无支付风险趋势数据。",
    rankingText: "当前渠道暂无支付风险排行数据。"
  };
}

function createFlatOverviewCompareRows() {
  return [
    { label: "昨日同期", leftValue: "0", leftRate: "0.00%", rightValue: "0.00%", rightRate: "0.00%", leftTrend: "flat", rightTrend: "flat" },
    { label: "昨7日前同期", leftValue: "0", leftRate: "0.00%", rightValue: "0.00%", rightRate: "0.00%", leftTrend: "flat", rightTrend: "flat" }
  ];
}

function attachOverviewTooltipRows(summary, configs) {
  summary.forEach((item, index) => {
    const config = configs[index];
    if (!config) return;
    item.tooltipRows = [
      { label: config.label, value: item.value, percent: config.percent },
      ...config.details
    ];
  });
}

function parseOverviewMetricValue(raw) {
  if (raw == null) return 0;
  const text = String(raw).trim();
  if (!text || text === "--") return 0;
  const normalized = text.replace(/,/g, "");
  if (normalized.endsWith("%")) {
    return Number(normalized.replace("%", ""));
  }
  if (normalized.endsWith("万")) {
    return Number(normalized.replace("万", "")) * 10000;
  }
  return Number(normalized) || 0;
}

function formatOverviewMetricValue(value, template) {
  const text = String(template || "");
  if (text.includes("%")) {
    return `${value.toFixed(2)}%`;
  }
  if (text.includes("万")) {
    return `${(value / 10000).toFixed(2)}万`;
  }
  return Math.round(value).toLocaleString("en-US");
}

function createOverviewCompareRows(value, template, fallbackValue) {
  const current = parseOverviewMetricValue(value);
  const yesterday = fallbackValue ? parseOverviewMetricValue(fallbackValue) : current * 0.88;
  const sevenDaysAgo = yesterday * 0.86;
  return [
    {
      label: "昨日同期",
      value: formatOverviewMetricValue(yesterday, template),
      rate: `${Math.abs(((current - yesterday) / Math.max(yesterday, 1)) * 100).toFixed(2)}%`,
      trend: current >= yesterday ? "up" : "down"
    },
    {
      label: "昨7日前同期",
      value: formatOverviewMetricValue(sevenDaysAgo, template),
      rate: `${Math.abs(((current - sevenDaysAgo) / Math.max(sevenDaysAgo, 1)) * 100).toFixed(2)}%`,
      trend: current >= sevenDaysAgo ? "up" : "down"
    }
  ];
}

function createUserOverviewSummaryCards(sceneKey, sceneData) {
  if (sceneData.summaryCards) {
    return sceneData.summaryCards;
  }
  const requestMetric = sceneData.summary[0];
  const riskMetric = sceneData.summary[1];
  const interceptMetric = sceneData.summary[3];
  const requestAccountValue = requestMetric?.tooltipRows?.[1]?.value || "0";
  const riskAccountValue = riskMetric?.tooltipRows?.[1]?.value || "0";
  const interceptAccountValue = interceptMetric?.tooltipRows?.[1]?.value || "0";
  const requestDeviceValue = requestMetric?.tooltipRows?.[2]?.value || "0";
  const riskDeviceValue = riskMetric?.tooltipRows?.[2]?.value || "0";
  const interceptDeviceValue = interceptMetric?.tooltipRows?.[2]?.value || "0";
  const riskAccountPercent = requestAccountValue === "0" ? "0.00%" : `${((parseOverviewMetricValue(riskAccountValue) / Math.max(parseOverviewMetricValue(requestAccountValue), 1)) * 100).toFixed(2)}%`;
  const interceptAccountPercent = requestAccountValue === "0" ? "0.00%" : `${((parseOverviewMetricValue(interceptAccountValue) / Math.max(parseOverviewMetricValue(requestAccountValue), 1)) * 100).toFixed(2)}%`;
  const riskDevicePercent = requestDeviceValue === "0" ? "0.00%" : `${((parseOverviewMetricValue(riskDeviceValue) / Math.max(parseOverviewMetricValue(requestDeviceValue), 1)) * 100).toFixed(2)}%`;
  const interceptDevicePercent = requestDeviceValue === "0" ? "0.00%" : `${((parseOverviewMetricValue(interceptDeviceValue) / Math.max(parseOverviewMetricValue(requestDeviceValue), 1)) * 100).toFixed(2)}%`;
  const riskTitle = sceneKey === "register" ? "风险注册概览" : "风险登录概览";
  const interceptTitle = sceneKey === "register" ? "拦截注册概览" : "拦截登录概览";
  const riskPrimaryLabel = sceneKey === "register" ? "今日风险注册数" : "今日风险登录数";
  const interceptPrimaryLabel = sceneKey === "register" ? "今日拦截注册数" : "今日拦截登录数";

  return [
    {
      title: riskTitle,
      primaryLabel: riskPrimaryLabel,
      primaryValue: riskMetric.value,
      secondaryLabel: sceneKey === "register" ? "今日风险注册占比" : "今日风险登录占比",
      secondaryValue: riskMetric.tooltipRows?.[0]?.percent || "0.00%",
      compareRows: createOverviewCompareRows(riskMetric.value, riskMetric.value, riskMetric.prev).map((row, index) => {
        const percentCompare = createOverviewCompareRows(riskMetric.tooltipRows?.[0]?.percent, riskMetric.tooltipRows?.[0]?.percent)[index];
        return {
          label: row.label,
          leftValue: row.value,
          leftRate: row.rate,
          rightValue: percentCompare.value,
          rightRate: percentCompare.rate,
          leftTrend: row.trend,
          rightTrend: percentCompare.trend
        };
      })
    },
    {
      title: sceneKey === "register" ? "风险设备概览" : "风险账号概览",
      primaryLabel: sceneKey === "register" ? "今日风险设备数" : "今日风险账号数",
      primaryValue: sceneKey === "register" ? riskDeviceValue : riskAccountValue,
      secondaryLabel: sceneKey === "register" ? "今日风险设备占比" : "今日风险账号占比",
      secondaryValue: sceneKey === "register" ? riskDevicePercent : riskAccountPercent,
      compareRows: createOverviewCompareRows(
        sceneKey === "register" ? riskDeviceValue : riskAccountValue,
        sceneKey === "register" ? riskDeviceValue : riskAccountValue
      ).map((row, index) => {
        const percentCompare = createOverviewCompareRows(
          sceneKey === "register" ? riskDevicePercent : riskAccountPercent,
          sceneKey === "register" ? riskDevicePercent : riskAccountPercent
        )[index];
        return {
          label: row.label,
          leftValue: row.value,
          leftRate: row.rate,
          rightValue: percentCompare.value,
          rightRate: percentCompare.rate,
          leftTrend: row.trend,
          rightTrend: percentCompare.trend
        };
      })
    },
    {
      title: interceptTitle,
      primaryLabel: interceptPrimaryLabel,
      primaryValue: interceptMetric.value,
      secondaryLabel: sceneKey === "register" ? "今日拦截注册占比" : "今日拦截登录占比",
      secondaryValue: interceptMetric.tooltipRows?.[0]?.percent || "0.00%",
      compareRows: createOverviewCompareRows(interceptMetric.value, interceptMetric.value, interceptMetric.prev).map((row, index) => {
        const percentCompare = createOverviewCompareRows(interceptMetric.tooltipRows?.[0]?.percent, interceptMetric.tooltipRows?.[0]?.percent)[index];
        return {
          label: row.label,
          leftValue: row.value,
          leftRate: row.rate,
          rightValue: percentCompare.value,
          rightRate: percentCompare.rate,
          leftTrend: row.trend,
          rightTrend: percentCompare.trend
        };
      })
    },
    {
      title: sceneKey === "register" ? "拦截设备概览" : "拦截账号概览",
      primaryLabel: sceneKey === "register" ? "今日拦截设备数" : "今日拦截账号数",
      primaryValue: sceneKey === "register" ? interceptDeviceValue : interceptAccountValue,
      secondaryLabel: sceneKey === "register" ? "今日拦截设备占比" : "今日拦截账号占比",
      secondaryValue: sceneKey === "register" ? interceptDevicePercent : interceptAccountPercent,
      compareRows: createOverviewCompareRows(
        sceneKey === "register" ? interceptDeviceValue : interceptAccountValue,
        sceneKey === "register" ? interceptDeviceValue : interceptAccountValue
      ).map((row, index) => {
        const percentCompare = createOverviewCompareRows(
          sceneKey === "register" ? interceptDevicePercent : interceptAccountPercent,
          sceneKey === "register" ? interceptDevicePercent : interceptAccountPercent
        )[index];
        return {
          label: row.label,
          leftValue: row.value,
          leftRate: row.rate,
          rightValue: percentCompare.value,
          rightRate: percentCompare.rate,
          leftTrend: row.trend,
          rightTrend: percentCompare.trend
        };
      })
    }
  ];
}

function getOverviewFilterState(pageKey, defaults = {}) {
  const existing = state.overviewFilters?.[pageKey] || {};
  return {
    channel: existing.channel || defaults.channel || "全渠道",
    time: existing.time || defaults.time || "近30天"
  };
}

function cycleOverviewFilter(pageKey, filterKey, options, fallbackValue) {
  if (!options || !options.length) return;
  const current = getOverviewFilterState(pageKey)[filterKey] || fallbackValue || options[0];
  const currentIndex = options.indexOf(current);
  const nextValue = options[(currentIndex + 1 + options.length) % options.length];
  triggerOverviewLoading(pageKey, () => {
    state.overviewFilters[pageKey] = {
      ...getOverviewFilterState(pageKey),
      [filterKey]: nextValue
    };
  });
}

function openOverviewFilterPicker(pageKey, filterKey) {
  const draftState = state.overviewFilterDrafts?.[pageKey] || {};
  const currentFilter = getOverviewFilterState(pageKey);
  if (filterKey === "channel") {
    state.overviewPicker = {
      pageKey,
      filterKey,
      category: draftState.channelCategory || "全部渠道",
      terminal: draftState.channelTerminal || "全部终端",
      search: "",
      selectedChannelIds: [...(draftState.selectedChannelIds || [])]
    };
    state.modalOpen = true;
    state.modalKind = "overview-channel-picker";
    renderOverlay();
    return;
  }
  state.overviewPicker = {
    pageKey,
    filterKey,
    timePreset: draftState.timePreset || currentFilter.time || "近30天",
    startDay: draftState.startDay || 1,
    endDay: draftState.endDay || 28,
    startHour: draftState.startHour || "00",
    startMinute: draftState.startMinute || "00",
    endHour: draftState.endHour || "13",
    endMinute: draftState.endMinute || "28",
    selectingEdge: "end"
  };
  state.modalOpen = true;
  state.modalKind = "overview-time-picker";
  renderOverlay();
}

function getOverviewVisibleChannels() {
  const picker = state.overviewPicker;
  if (!picker) return [];
  return overviewChannelItems.filter((item) => {
    const categoryMatched = picker.category === "全部渠道" || item.category === picker.category;
    const terminalMatched = picker.terminal === "全部终端" || item.terminal === picker.terminal;
    const keyword = (picker.search || "").trim().toLowerCase();
    const searchMatched = !keyword || item.name.toLowerCase().includes(keyword) || item.id.includes(keyword);
    return categoryMatched && terminalMatched && searchMatched;
  });
}

function toggleOverviewChannelSelection(channelId) {
  if (!state.overviewPicker) return;
  const selected = new Set(state.overviewPicker.selectedChannelIds || []);
  if (selected.has(channelId)) {
    selected.delete(channelId);
  } else {
    selected.add(channelId);
  }
  state.overviewPicker = {
    ...state.overviewPicker,
    selectedChannelIds: Array.from(selected)
  };
  renderOverlay();
}

function formatOverviewTimeDraft(draft) {
  const startMonth = draft.startDay === 30 || draft.startDay === 31 ? "03" : "04";
  const endMonth = draft.endDay <= 3 ? "05" : "04";
  return `2026-${startMonth}-${String(draft.startDay).padStart(2, "0")} ${draft.startHour}:${draft.startMinute}:00 ~ 2026-${endMonth}-${String(draft.endDay).padStart(2, "0")} ${draft.endHour}:${draft.endMinute}:59`;
}

function applyOverviewPicker() {
  const picker = state.overviewPicker;
  if (!picker) return;
  const pageKey = picker.pageKey;
  const closePicker = () => {
    state.modalOpen = false;
    state.modalKind = "";
    state.overviewPicker = null;
  };
  if (picker.filterKey === "channel") {
    const allIds = overviewChannelItems.map((item) => item.id);
    const selectedIds = [...(picker.selectedChannelIds || [])];
    let nextLabel = "全渠道";
    if (selectedIds.length > 0 && selectedIds.length < allIds.length) {
      nextLabel = `已选${selectedIds.length}个`;
    }
    closePicker();
    triggerOverviewLoading(pageKey, () => {
      state.overviewFilters[pageKey] = {
        ...getOverviewFilterState(pageKey),
        channel: nextLabel
      };
      state.overviewFilterDrafts[pageKey] = {
        ...state.overviewFilterDrafts[pageKey],
        channelCategory: picker.category,
        channelTerminal: picker.terminal,
        selectedChannelIds: selectedIds
      };
    });
    return;
  }
  const timeLabel = picker.timePreset === "自定义" ? formatOverviewTimeDraft(picker) : picker.timePreset;
  closePicker();
  triggerOverviewLoading(pageKey, () => {
    state.overviewFilters[pageKey] = {
      ...getOverviewFilterState(pageKey),
      time: timeLabel
    };
    state.overviewFilterDrafts[pageKey] = {
      ...state.overviewFilterDrafts[pageKey],
      timePreset: picker.timePreset,
      startDay: picker.startDay,
      endDay: picker.endDay,
      startHour: picker.startHour,
      startMinute: picker.startMinute,
      endHour: picker.endHour,
      endMinute: picker.endMinute
    };
  });
}

function triggerOverviewLoading(pageKey, mutate) {
  if (overviewLoadingTimer) {
    clearTimeout(overviewLoadingTimer);
  }
  if (typeof mutate === "function") {
    mutate();
  }
  state.overviewLoading = true;
  state.overviewLoadingPage = pageKey;
  renderPage();
  overviewLoadingTimer = setTimeout(() => {
    state.overviewLoading = false;
    state.overviewLoadingPage = "";
    renderPage();
  }, 260);
}

function isOverviewLoading(pageKey) {
  return state.overviewLoading && state.overviewLoadingPage === pageKey;
}

function isOverviewEmptyChannel(channel) {
  return false;
}

function resolveOverviewDayCount(timeLabel) {
  if (timeLabel === "近7天") return 7;
  if (timeLabel === "近15天") return 15;
  return 30;
}

function createOverviewChartForTimeRange(chart, timeLabel) {
  if (!chart) return null;
  const dayCount = Math.min(resolveOverviewDayCount(timeLabel), chart.labels.length);
  const startIndex = Math.max(chart.labels.length - dayCount, 0);
  const nextChart = {
    ...chart,
    labels: chart.labels.slice(startIndex),
    bars: chart.bars.slice(startIndex),
    lines: chart.lines.map((line) => ({
      ...line,
      values: line.values.slice(startIndex)
    })),
    tooltipRows: chart.tooltipRows?.map((row) => ({ ...row })) || []
  };
  nextChart.barMax = chart.barMax || Math.max(...nextChart.bars, 1);
  return nextChart;
}

function getOverviewChartLabelParts(label) {
  if (!label) {
    return { date: "", time: "" };
  }
  if (typeof label === "string") {
    const [date = label, time = "00:00"] = label.split(" ");
    return { date, time };
  }
  return {
    date: label.date || "",
    time: label.time || ""
  };
}

function formatOverviewChartTooltipTitle(label) {
  const parts = getOverviewChartLabelParts(label);
  return parts.time ? `${parts.date} ${parts.time}` : parts.date;
}

function createOverviewEmptySummaryCards(summaryCards, emptyText) {
  return (summaryCards || []).map((item) => ({
    ...item,
    primaryValue: item.primaryValue?.includes("%") ? "0.00%" : "0",
    secondaryValue: item.secondaryValue?.includes("%") ? "0.00%" : "0",
    compareRows: createFlatOverviewCompareRows(),
    emptyText
  }));
}

function renderOverviewSummarySkeletonCards(count = 4) {
  return Array.from({ length: count }, (_, index) => `
    <article class="payment-overview-summary-cell overview-loading-card${index % 2 === 0 ? " left" : ""}${index < 2 ? " top" : ""}">
      <div class="overview-skeleton overview-skeleton-title"></div>
      <div class="overview-skeleton-grid">
        <div class="overview-skeleton overview-skeleton-value"></div>
        <div class="overview-skeleton overview-skeleton-value"></div>
        <div class="overview-skeleton overview-skeleton-row"></div>
        <div class="overview-skeleton overview-skeleton-row"></div>
      </div>
    </article>
  `).join("");
}

function renderOverviewStateCard(kind, message) {
  const isLoadingCard = kind === "loading";
  return `
    <div class="overview-state-card ${isLoadingCard ? "loading" : "empty"}">
      <div class="overview-state-card-inner">
        ${isLoadingCard ? `<div class="overview-spinner"></div>` : `<div class="overview-state-card-icon">-</div>`}
        <div class="overview-state-card-text">${message}</div>
      </div>
    </div>
  `;
}

const portraitConfigs = {
  "multi-query": {
    title: "多维画像查询",
    subtitle: "支持从账号、设备、IP 多维溯源分析，统一查看登录注册与下单支付风险。",
    searchButton: "查询",
    tabs: [
      { key: "account", label: "按账号查询" },
      { key: "device", label: "按设备查询" },
      { key: "ip", label: "按IP查询" }
    ],
    examples: {
      account: ["user_771", "user_002", "user_789"],
      device: ["DEV_X88", "DEV_443", "DEV_A19"],
      ip: ["192.168.1.1", "182.12.44.102", "10.27.0.45"]
    },
    inputPlaceholder: {
      account: "请输入账号 / 用户ID",
      device: "请输入设备ID",
      ip: "请输入 IP 地址"
    },
    resultLabel: "日志信息",
    exportText: "导出日志"
  },
  "login-query": {
    title: "风险用户查询",
    subtitle: "多维度溯源分析，快速定位用户、设备与 IP 间的关联风险。",
    searchButton: "查询",
    tabs: [
      { key: "account", label: "按账号查询" },
      { key: "device", label: "按设备查询" },
      { key: "ip", label: "按IP查询" }
    ],
    examples: {
      account: ["user_771", "user_002", "user_789"],
      device: ["DEV_X88", "DEV_443", "DEV_A19"],
      ip: ["192.168.1.1", "182.12.44.102", "10.27.0.45"]
    },
    inputPlaceholder: {
      account: "请输入账号 / 用户ID",
      device: "请输入设备ID",
      ip: "请输入 IP 地址"
    },
    resultLabel: "日志信息",
    timeColumn: "时间",
    actionText: "登录成功",
    exportText: "导出记录"
  },
  "payment-query": {
    title: "风险支付查询",
    subtitle: "多维度排查支付链路，快速定位账号、设备与 IP 的资金风险。",
    searchButton: "查询",
    tabs: [
      { key: "account", label: "按账号查询" },
      { key: "device", label: "按设备查询" },
      { key: "ip", label: "按IP查询" }
    ],
    examples: {
      account: ["pay_771", "buyer_102", "user_9001"],
      device: ["PAY_DEV_09", "PAY_DEV_18", "PAY_DEV_77"],
      ip: ["10.21.4.8", "172.16.5.19", "203.0.113.7"]
    },
    inputPlaceholder: {
      account: "请输入支付账号 / 用户ID",
      device: "请输入支付设备ID",
      ip: "请输入支付 IP 地址"
    },
    resultLabel: "日志信息",
    timeColumn: "支付时间",
    actionText: "支付成功",
    exportText: "导出记录"
  }
};

const portraitBaseProfile = {
  account: "123",
  device: "443",
  ip: "666",
  relatedAccount: "789",
  basicInfo: [
    { label: "注册渠道", value: "APP商城" },
    { label: "绑定账号", value: "user_002" },
    { label: "注册时间", value: "2023-10-12 14:22:01" },
    { label: "绑定手机号", value: "138****8888" },
    { label: "绑定邮箱", value: "eng***@gmail.com" },
    { label: "注册IP", value: "182.12.44.102", accent: true },
    { label: "注册地", value: "浙江省杭州市" },
    { label: "实名状态", value: "已认证（张*）", success: true },
    { label: "注册设备ID", value: "DEV_412315", accent: true }
  ],
  tags: ["高风险账号", "博彩账号", "黑产关系", "代理访问", "实名认证"],
  relations: [
    { id: "account-123", type: "账号", label: "账号 123", caption: "当前查询账号", x: 50, y: 46, active: true },
    { id: "device-443", type: "设备", label: "设备 443", caption: "DEV_X88", x: 74, y: 22 },
    { id: "ip-666", type: "IP", label: "IP 666", caption: "192.168.1.9", x: 78, y: 72 },
    { id: "account-789", type: "账号", label: "账号 789", caption: "user_789", x: 28, y: 28 },
    { id: "ip-102", type: "IP", label: "IP 102", caption: "182.12.44.102", x: 26, y: 76 }
  ],
  logs: [
    { time: "2024-03-18 10:22:00", primary: "DEV_X88", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.0", region: "浙江省杭州市（移动4G）", risk: "无", state: "登录成功", stateTone: "success" },
    { time: "2024-03-18 10:22:01", primary: "DEV_X101", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.1", region: "浙江省杭州市（移动4G）", risk: "疑似设备号", state: "标记风险", stateTone: "warning" },
    { time: "2024-03-18 10:22:02", primary: "DEV_X88", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.2", region: "浙江省杭州市（移动4G）", risk: "高频登录拦截", state: "封禁", stateTone: "danger" },
    { time: "2024-03-18 10:22:03", primary: "DEV_X100", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.3", region: "浙江省杭州市（移动4G）", risk: "无", state: "登录成功", stateTone: "success" },
    { time: "2024-03-18 10:22:04", primary: "DEV_X101", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.4", region: "浙江省杭州市（移动4G）", risk: "无", state: "登录成功", stateTone: "success" },
    { time: "2024-03-18 10:22:05", primary: "DEV_X102", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.5", region: "浙江省杭州市（移动4G）", risk: "无", state: "登录成功", stateTone: "success" },
    { time: "2024-03-18 10:22:06", primary: "DEV_X103", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.6", region: "浙江省杭州市（移动4G）", risk: "无", state: "登录成功", stateTone: "success" },
    { time: "2024-03-18 10:22:07", primary: "DEV_X104", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.7", region: "浙江省杭州市（移动4G）", risk: "无", state: "登录成功", stateTone: "success" },
    { time: "2024-03-18 10:22:08", primary: "DEV_X105", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.8", region: "浙江省杭州市（移动4G）", risk: "无", state: "登录成功", stateTone: "success" },
    { time: "2024-03-18 10:22:09", primary: "DEV_X106", secondary: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.9", region: "浙江省杭州市（移动4G）", risk: "无", state: "登录成功", stateTone: "success" }
  ]
};

const portraitTagPalette = {
  danger: "#fff1f2|#ef4444",
  orange: "#fff7ed|#f97316",
  teal: "#ecfeff|#14b8a6",
  green: "#f0fdf4|#10b981",
  mint: "#ecfdf3|#22c55e",
  blue: "#eef4ff|#2563eb"
};

function createPortraitTags(items, overflow = 5) {
  return {
    items,
    overflow
  };
}

function createPortraitBaseLogs() {
  return [
    { time: "2024-03-27 10:22:00", actionType: "登录", deviceId: "DEV_X88", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.0", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "无", result: "登录成功", resultTone: "success" },
    { time: "2024-03-26 10:22:01", actionType: "注册", deviceId: "DEV_X101", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.1", ipDesc: "浙江省杭州市 (移动4G)", account: "-", accountDesc: "", risk: "新设备登录", result: "标记风险", resultTone: "warning" },
    { time: "2024-03-25 10:22:02", actionType: "登录", deviceId: "DEV_X88", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.2", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "疑似账号号", result: "登录拦截", resultTone: "danger" },
    { time: "2024-03-24 10:22:03", actionType: "登录", deviceId: "DEV_X100", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.3", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "无", result: "登录成功", resultTone: "success" },
    { time: "2024-03-23 10:22:04", actionType: "登录", deviceId: "DEV_X101", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.4", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "无", result: "登录成功", resultTone: "success" },
    { time: "2024-03-22 10:22:05", actionType: "登录", deviceId: "DEV_X102", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.5", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "无", result: "登录成功", resultTone: "success" },
    { time: "2024-03-21 10:22:06", actionType: "登录", deviceId: "DEV_X103", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.6", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "无", result: "登录成功", resultTone: "success" },
    { time: "2024-03-20 10:22:07", actionType: "登录", deviceId: "DEV_X104", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.7", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "无", result: "登录成功", resultTone: "success" },
    { time: "2024-03-19 10:22:08", actionType: "登录", deviceId: "DEV_X105", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.8", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "无", result: "登录成功", resultTone: "success" },
    { time: "2024-03-18 10:22:09", actionType: "登录", deviceId: "DEV_X106", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.9", ipDesc: "浙江省杭州市 (移动4G)", account: "310003_123123123123123", accountDesc: "账号ID", risk: "无", result: "登录成功", resultTone: "success" }
  ];
}

function createPortraitPaymentBaseLogs() {
  return [
    { orderId: "PO202603270001", createOrderTime: "2024-03-27 10:22:00", orderAmount: "648.00", paymentMethod: "Apple Pay", gameName: "三国杀移动版", orderStatus: "支付成功", orderStatusTone: "success", deviceId: "PAY_DEV_X88", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.0", ipDesc: "浙江省杭州市 (移动4G)", account: "510003_823123", accountDesc: "支付账号" },
    { orderId: "PO202603260002", createOrderTime: "2024-03-26 10:22:01", orderAmount: "30.00", paymentMethod: "微信支付", gameName: "三国杀移动版", orderStatus: "待支付", orderStatusTone: "warning", deviceId: "PAY_DEV_X101", deviceDesc: "Huawei Mate 70 (HarmonyOS 5.0)", ip: "192.168.1.1", ipDesc: "浙江省杭州市 (移动4G)", account: "510003_823124", accountDesc: "支付账号" },
    { orderId: "PO202603250003", createOrderTime: "2024-03-25 10:22:02", orderAmount: "128.00", paymentMethod: "信用卡", gameName: "三国杀移动版", orderStatus: "已拦截", orderStatusTone: "danger", deviceId: "PAY_DEV_X88", deviceDesc: "iPhone 15 Pro (iOS 17.2)", ip: "192.168.1.2", ipDesc: "浙江省杭州市 (移动4G)", account: "510003_823125", accountDesc: "支付账号" },
    { orderId: "PO202603240004", createOrderTime: "2024-03-24 10:22:03", orderAmount: "6.00", paymentMethod: "支付宝", gameName: "三国杀移动版", orderStatus: "支付成功", orderStatusTone: "success", deviceId: "PAY_DEV_X100", deviceDesc: "Xiaomi 15 Ultra (Android 15)", ip: "192.168.1.3", ipDesc: "浙江省杭州市 (移动4G)", account: "510003_823126", accountDesc: "支付账号" },
    { orderId: "PO202603230005", createOrderTime: "2024-03-23 10:22:04", orderAmount: "1288.00", paymentMethod: "银行卡快捷支付", gameName: "三国杀移动版", orderStatus: "风控校验", orderStatusTone: "warning", deviceId: "PAY_DEV_X101", deviceDesc: "Samsung S25 (Android 15)", ip: "192.168.1.4", ipDesc: "浙江省杭州市 (移动4G)", account: "510003_823127", accountDesc: "支付账号" }
  ];
}

function buildPortraitTagsByMode(mode) {
  if (mode === "device") {
    return createPortraitTags([
      { label: "云真机设备", tone: "danger" },
      { label: "疑似盗号设备", tone: "orange" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" }
    ]);
  }
  if (mode === "ip") {
    return createPortraitTags([
      { label: "黑产IP", tone: "danger" },
      { label: "代理IP", tone: "danger" },
      { label: "疑似盗号IP", tone: "orange" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" },
      { label: "其他标签示例", tone: "teal" }
    ]);
  }
  return createPortraitTags([
    { label: "高风险账号", tone: "danger" },
    { label: "疑似盗密账号", tone: "orange" },
    { label: "减压账号", tone: "teal" },
    { label: "高价值账号", tone: "green" },
    { label: "其他标签示例", tone: "teal" },
    { label: "其他标签示例", tone: "teal" },
    { label: "其他标签示例", tone: "teal" },
    { label: "其他标签示例", tone: "teal" },
    { label: "其他标签示例", tone: "teal" },
    { label: "其他标签示例", tone: "teal" }
  ]);
}

function buildPortraitRelations(mode, focusValue) {
  if (mode === "device") {
    return {
      title: "关联信息",
      counts: [
        { label: "关联账号", value: "2个" },
        { label: "关联IP", value: "2个" }
      ],
      center: { kind: "device", main: focusValue, sub: "当前设备" },
      nodes: [
        { kind: "account", main: "账号 1003_123123123123", sub: "账号ID", x: 26, y: 32, queryMode: "account", queryValue: "310003_123123123123123" },
        { kind: "ip", main: "IP 223.116.168.187", sub: "网络IP", x: 54, y: 22, queryMode: "ip", queryValue: "223.116.168.187" },
        { kind: "account", main: "账号 1003_123123123123", sub: "账号ID", x: 73, y: 42, queryMode: "account", queryValue: "310003_123123123123123" },
        { kind: "ip", main: "IP 182.12.44.22", sub: "网络IP", x: 54, y: 76, queryMode: "ip", queryValue: "182.12.44.22" }
      ]
    };
  }
  if (mode === "ip") {
    return {
      title: "关联信息",
      counts: [
        { label: "关联账号", value: "2个" },
        { label: "关联设备", value: "2个" }
      ],
      center: { kind: "ip", main: focusValue, sub: "当前IP" },
      nodes: [
        { kind: "account", main: "账号 310003_123123123123123", sub: "账号ID", x: 24, y: 36, queryMode: "account", queryValue: "310003_123123123123123" },
        { kind: "device", main: "设备ID DEV_001", sub: "213102391301329123", x: 53, y: 19, queryMode: "device", queryValue: "213102391301329123" },
        { kind: "account", main: "账号 310003_123123123123", sub: "账号ID", x: 72, y: 42, queryMode: "account", queryValue: "310003_123123123123123" },
        { kind: "device", main: "设备ID DEV_104", sub: "213102391301329123", x: 52, y: 78, queryMode: "device", queryValue: "DEV_X104" }
      ]
    };
  }
  return {
    title: "关联信息",
    counts: [
      { label: "关联设备", value: "2台" },
      { label: "关联IP", value: "2个" }
    ],
    center: { kind: "account", main: focusValue, sub: "当前账号" },
    nodes: [
      { kind: "device", main: "设备ID DEV_001", sub: "213102391301329123", x: 52, y: 18, queryMode: "device", queryValue: "213102391301329123" },
      { kind: "device", main: "设备ID DEV_001", sub: "213102391301329123", x: 24, y: 41, queryMode: "device", queryValue: "DEV_001" },
      { kind: "ip", main: "网络IP 223.116.168.187", sub: "223.116.168.187", x: 72, y: 43, queryMode: "ip", queryValue: "223.116.168.187" },
      { kind: "ip", main: "网络IP 182.12.44.22", sub: "182.12.44.22", x: 52, y: 77, queryMode: "ip", queryValue: "182.12.44.22" }
    ]
  };
}

function buildPortraitInfoFieldsByMode(mode, focusValue) {
  if (mode === "device") {
    return {
      title: "设备信息",
      rows: [
        [
          { label: "device_id", value: focusValue, query: { mode: "device", value: focusValue } },
          { label: "sone_id", value: "sdkljl1jvv31231023123", query: { mode: "account", value: "sdkljl1jvv31231023123" } },
          { label: "设备状态", value: "设备封禁", detail: "（2026-02-05 19:55:11~2027-02-05 19:55:11）", tone: "danger" }
        ],
        [
          { label: "设备品牌", value: "小米" },
          { label: "设备型号", value: "mi 17 pro" },
          { label: "操作系统", value: "Android 3.23" }
        ],
        [
          { label: "最近登录时间", value: "2026-02-05 19:55:11" },
          { label: "最近登录游戏", value: "三国杀移动版（10100001）" },
          { label: "最近登录账号（账号ID）", value: "31000_312313221321", query: { mode: "account", value: "31000_312313221321" } },
          { label: "最近登录IP", value: "223.116.168.187", query: { mode: "ip", value: "223.116.168.187" } }
        ]
      ]
    };
  }
  if (mode === "ip") {
    return {
      title: "网络信息",
      rows: [
        [
          { label: "IP", value: focusValue, query: { mode: "ip", value: focusValue } },
          { label: "IP状态", value: "IP封禁", detail: "（2026-02-05 19:55:11~2027-02-05 19:55:11）", tone: "danger" }
        ],
        [
          { label: "IP归属地", value: "山东省 济南市" },
          { label: "网络运营商", value: "中国移动" },
          { label: "网络类型", value: "4G" }
        ],
        [
          { label: "最近登录时间", value: "2026-02-05 19:55:11" },
          { label: "最近登录游戏", value: "三国杀移动版（10100001）" },
          { label: "最近登录账号（账号ID）", value: "31000_312313221321", query: { mode: "account", value: "31000_312313221321" } },
          { label: "最近登录设备（deviceid）", value: "213102391301329123", query: { mode: "device", value: "213102391301329123" } }
        ]
      ]
    };
  }
  return {
    title: "账号信息",
    rows: [
      [
        { label: "SDKID", value: "10001_213012032123", query: { mode: "account", value: "10001_213012032123" } },
        { label: "账号名", value: focusValue, query: { mode: "account", value: focusValue } },
        { label: "账号状态", value: "账号正常", tone: "success" }
      ],
      [
        { label: "实名认证", value: "已认证（成年）", tone: "success" },
        { label: "绑定手机", value: "138****8888" },
        { label: "绑定邮箱", value: "er****@gmail.com" }
      ],
      [
        { label: "最近登录时间", value: "2026-02-05 19:55:11" },
        { label: "最近登录游戏", value: "三国杀移动版（10100001）" },
        { label: "最近登录设备（deviceid）", value: "213102391301329123", query: { mode: "device", value: "213102391301329123" } },
        { label: "最近登录IP", value: "223.116.168.187", query: { mode: "ip", value: "223.116.168.187" } }
      ],
      [
        { label: "注册时间", value: "2023-10-12 14:22:01" },
        { label: "注册设备", value: "DEV_412315", query: { mode: "device", value: "DEV_412315" } },
        { label: "注册IP", value: "182.12.44.102", query: { mode: "ip", value: "182.12.44.102" } },
        { label: "注册方式", value: "手机" }
      ]
    ]
  };
}

function buildPortraitLogTemplate(mode, page = "login-query") {
  const rows = page === "payment-query" ? createPortraitPaymentBaseLogs() : createPortraitBaseLogs();
  if (page === "payment-query") return rows;
  if (mode === "device") {
    rows[1].risk = "批量刷号";
    rows[1].result = "注册拦截";
    rows[1].resultTone = "danger";
  }
  if (mode === "ip") {
    rows[1].deviceId = "DEV_X104";
    rows[1].deviceDesc = "iPhone 15 Pro (iOS 17.2)";
    rows[1].risk = "批量刷号";
    rows[1].result = "注册拦截";
    rows[1].resultTone = "danger";
  }
  return rows;
}

function getPortraitResultHeaderPrefix(mode) {
  if (mode === "device") return "设备ID：";
  if (mode === "ip") return "网络IP：";
  return "账号ID：";
}

function getPortraitFocusMode(focus) {
  if (focus.type === "设备") return "device";
  if (focus.type === "IP") return "ip";
  return "account";
}

function createPortraitProfile(page, focus) {
  const focusMode = getPortraitFocusMode(focus);
  const info = buildPortraitInfoFieldsByMode(focusMode, focus.value);
  const defaultLogTab = page === "payment-query" ? "payment" : "user";
  return {
    page,
    focusMode,
    headerPrefix: getPortraitResultHeaderPrefix(focusMode),
    headerValue: focus.value,
    infoTitle: info.title,
    infoRows: info.rows,
    tags: buildPortraitTagsByMode(focusMode),
    relations: buildPortraitRelations(focusMode, focus.value),
    logTitle: "日志信息",
    logType: focusMode,
    defaultLogTab,
    logs: {
      user: buildPortraitLogTemplate(focusMode, "login-query"),
      payment: buildPortraitLogTemplate(focusMode, "payment-query")
    }
  };
}

const riskLogData = {
  "login-log": {
    filters: {
      device: "",
      account: "",
      ip: "",
      time: "2026-04-13 12:00:00 ~ 2026-04-13 12:00:00",
      riskBehavior: "",
      riskScore: [],
      status: ""
    },
    total: 6,
    rows: [
      { id: 1, hitTime: "2024-07-17 20:15:22", riskBehaviors: ["登录异常"], riskScore: 15, deviceId: "789123456789123456", deviceDesc: "Motorola Edge 40 | ChromeOS 92", ip: "172.16.10.20", city: "奥地利维也纳", carrier: "A1 Telekom", account: "219876543210987654", accountNo: "219876543210987654", status: "放行", tone: "muted" },
      { id: 2, hitTime: "2024-07-18 11:30:45", riskBehaviors: ["登录异常"], riskScore: 35, deviceId: "678912345678912345", deviceDesc: "Sony Xperia 1 V | Ubuntu 22.04", ip: "10.10.10.5", city: "荷兰阿姆斯特丹", carrier: "未知", account: "321654987012345678", accountNo: "321654987012345678", status: "标记风险", tone: "warning" },
      { id: 3, hitTime: "2024-07-19 02:45:08", riskBehaviors: ["登录异常"], riskScore: 50, deviceId: "567891234567891234", deviceDesc: "Nothing Phone (2) | macOS 14.5", ip: "192.168.0.100", city: "西班牙马德里", carrier: "Telefonica", account: "432198765432109876", accountNo: "432198765432109876", status: "滑块验证", tone: "success" },
      { id: 4, hitTime: "2024-07-20 18:00:31", riskBehaviors: ["登录地异常"], riskScore: 50, deviceId: "456789123456789123", deviceDesc: "Xiaomi 13 Pro | Windows 11", ip: "172.16.0.1", city: "意大利罗马", carrier: "日本netfi", account: "543216789012345678", accountNo: "543216789012345678", status: "滑块验证", tone: "success" },
      { id: 5, hitTime: "2024-07-21 09:15:52", riskBehaviors: ["登录地异常"], riskScore: 50, deviceId: "345678912345678912", deviceDesc: "Google Pixel 7 | iOS 15", ip: "10.0.0.1", city: "法国巴黎", carrier: "Orange", account: "654987321098765432", accountNo: "654987321098765432", status: "滑块验证", tone: "success" },
      { id: 6, hitTime: "2024-07-22 14:30:17", riskBehaviors: ["登录设备异常", "登录地异常", "IP关联账号过多", "设备关联账号过多", "暴力破解密码"], riskScore: 100, deviceId: "234567891234567891", deviceDesc: "Samsung Galaxy Z | Android 14", ip: "192.168.1.1", city: "德国柏林", carrier: "Vodafone", account: "789123456789123456", accountNo: "789123456789123456", status: "验证码验证", tone: "success" }
    ]
  },
  "payment-log": {
    filters: {
      orderId: "",
      device: "",
      account: "",
      ip: "",
      time: "2026-04-13 12:00:00 ~ 2026-04-13 12:00:00",
      riskBehavior: "",
      riskScore: [],
      status: ""
    },
    total: 6,
    rows: [
      { id: 1, hitTime: "2024-07-17 20:15:22", riskBehaviors: ["设备小额充值值"], riskScore: 10, deviceId: "789123456789123456", deviceDesc: "Motorola Edge 40 | ChromeOS 92", ip: "172.16.10.20", city: "奥地利维也纳", carrier: "A1 Telekom", account: "219876543210987654", accountNo: "219876543210987654", status: "直接放行", tone: "muted", orderId: "432198765432198765", paymentMethod: "信用卡", orderAmount: "EUR 18.50" },
      { id: 2, hitTime: "2024-07-18 11:30:45", riskBehaviors: ["设备小额充值值"], riskScore: 10, deviceId: "678912345678912345", deviceDesc: "Sony Xperia 1 V | Ubuntu 22.04", ip: "10.10.10.5", city: "荷兰阿姆斯特丹", carrier: "未知", account: "321654987012345678", accountNo: "321654987012345678", status: "直接放行", tone: "muted", orderId: "543219876543219876", paymentMethod: "信用卡", orderAmount: "EUR 10.25" },
      { id: 3, hitTime: "2024-07-19 02:45:08", riskBehaviors: ["设备小额充值值"], riskScore: 70, deviceId: "567891234567891234", deviceDesc: "Nothing Phone (2) | macOS 14.5", ip: "192.168.0.100", city: "西班牙马德里", carrier: "Telefonica", account: "432198765432109876", accountNo: "432198765432109876", status: "标记风险", tone: "warning", orderId: "654321987654321987", paymentMethod: "信用卡", orderAmount: "EUR 22.00" },
      { id: 4, hitTime: "2024-07-20 18:00:31", riskBehaviors: ["设备小额充值值"], riskScore: 55, deviceId: "456789123456789123", deviceDesc: "Xiaomi 13 Pro | Windows 11", ip: "172.16.0.1", city: "意大利罗马", carrier: "日本netfi", account: "543216789012345678", accountNo: "543216789012345678", status: "标记风险", tone: "warning", orderId: "765432198765432198", paymentMethod: "信用卡", orderAmount: "EUR 8.75" },
      { id: 5, hitTime: "2024-07-21 09:15:52", riskBehaviors: ["IP代充"], riskScore: 40, deviceId: "345678912345678912", deviceDesc: "Google Pixel 7 | iOS 15", ip: "10.0.0.1", city: "法国巴黎", carrier: "Orange", account: "654987321098765432", accountNo: "654987321098765432", status: "拦截下单", tone: "danger", orderId: "876543219876543219", paymentMethod: "信用卡", orderAmount: "EUR 15.99" },
      { id: 6, hitTime: "2024-07-22 14:30:17", riskBehaviors: ["设备小额充值值", "账号代充", "VPN网络充值", "越狱设备充值", "设备代充"], riskScore: 100, deviceId: "234567891234567891", deviceDesc: "Samsung Galaxy Z | Android 14", ip: "192.168.1.1", city: "德国柏林", carrier: "Vodafone", account: "789123456789123456", accountNo: "789123456789123456", status: "标记风险", tone: "warning", orderId: "987654321987654321", paymentMethod: "信用卡", orderAmount: "EUR 12.50" }
    ]
  }
};

const logRiskScoreOptions = ["", "0≤风险分≤10", "10<风险分≤20", "20<风险分≤30", "30<风险分≤40", "40<风险分≤50", "50<风险分≤60", "60<风险分≤70", "70<风险分≤80", "80<风险分≤90", "90<风险分≤100"];
const logActionOptions = ["", "账号封禁", "设备封禁", "IP封禁", "登录拦截", "注册拦截", "验证码验证", "滑块验证", "标记风险", "放行"];
const logColumnGroups = [
  {
    key: "base",
    title: "基础字段",
    fields: [
      { key: "seq", label: "序号" },
      { key: "hitTime", label: "时间" },
      { key: "scene", label: "场景" },
      { key: "riskBehavior", label: "风险行为" },
      { key: "riskScore", label: "风险分" },
      { key: "action", label: "处置动作" }
    ]
  },
  {
    key: "user-base",
    title: "用户日志字段",
    fields: [
      { key: "accountNo", label: "账号ID" },
      { key: "deviceId", label: "设备ID" },
      { key: "deviceModel", label: "设备型号" },
      { key: "osVersion", label: "操作系统版本" },
      { key: "ip", label: "网络IP" },
      { key: "ipRegion", label: "IP归属地" },
      { key: "carrier", label: "IP运营商" }
    ]
  },
  {
    key: "user-detail",
    title: "用户详情字段",
    fields: [
      { key: "account", label: "账号名" },
      { key: "registerTime", label: "注册时间" },
      { key: "registerIp", label: "注册IP" },
      { key: "registerIpRegion", label: "注册IP归属地" },
      { key: "registerMethod", label: "注册方式" },
      { key: "loginTime", label: "登录时间" },
      { key: "loginIp", label: "登录IP" },
      { key: "loginIpRegion", label: "登录IP归属地" },
      { key: "loginMethod", label: "登录方式" },
      { key: "deviceFingerprint", label: "设备指纹" },
      { key: "systemType", label: "系统类型" },
      { key: "deviceBrand", label: "设备品牌" },
      { key: "systemLanguage", label: "设备语言" },
      { key: "networkType", label: "网络类型" },
      { key: "emulatorUsed", label: "是否模拟器" },
      { key: "rooted", label: "是否越狱" },
      { key: "vpnUsed", label: "VPN使用" }
    ]
  },
  {
    key: "app",
    title: "应用信息",
    fields: [
      { key: "projectId", label: "项目ID" },
      { key: "packageName", label: "包名" },
      { key: "packageId", label: "包ID" },
      { key: "securityVersion", label: "安全组件版本号" },
      { key: "sdkVersion", label: "SDK版本号" },
      { key: "channel", label: "渠道" }
    ]
  },
  {
    key: "payment",
    title: "支付字段",
    fields: [
      { key: "sdkOrderId", label: "SDK订单号" },
      { key: "orderAmount", label: "订单金额" },
      { key: "paymentMethod", label: "支付方式" },
      { key: "createOrderTime", label: "生单时间" },
      { key: "payTime", label: "支付时间" },
      { key: "currencyAmount", label: "订单币种金额" },
      { key: "actualPaidAmount", label: "实际支付币种金额" },
      { key: "thirdOrderId", label: "三方订单号" },
      { key: "orderSource", label: "订单来源" },
      { key: "createOrderIp", label: "下单IP" },
      { key: "createOrderIpRegion", label: "下单IP归属地" },
      { key: "account", label: "账号名" },
      { key: "serverId", label: "区服ID" },
      { key: "roleId", label: "角色ID" }
    ]
  }
];
const defaultLogVisibleColumnsByPage = {
  "login-log": ["seq", "hitTime", "scene", "riskBehavior", "riskScore", "action", "accountNo", "deviceId", "deviceModel", "osVersion", "ip", "ipRegion", "carrier"],
  "payment-log": ["seq", "hitTime", "riskBehavior", "riskScore", "action", "sdkOrderId", "orderAmount", "accountNo", "deviceId", "deviceModel", "osVersion", "ip", "ipRegion", "carrier"]
};

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function createCondition(type = "", children = [], childJoiner = "且") {
  const nextType = conditionTypeOptions.includes(type) ? type : "";
  return {
    id: uid(),
    type: nextType,
    operator: nextType ? "是" : "",
    label: "",
    selected: false,
    children,
    childJoiner
  };
}

function createConditionGroup(items, joiner = "且") {
  return { joiner, items };
}

function createPresetCondition(type, operator, label, children = [], childJoiner = "且") {
  return {
    id: uid(),
    type,
    operator: normalizeConditionOperator(operator),
    label,
    selected: true,
    children,
    childJoiner
  };
}

function normalizeConditionOperator(operator) {
  if (operator === "不为") return "不是";
  if (operator === "为") return "是";
  if (operator === "不是" || operator === "是") return operator;
  return "是";
}

function createRule(name, scene, items, actionType = sceneActionMap[scene], enabled = true) {
  return {
    id: uid(),
    name,
    enabled,
    conditions: createConditionGroup(items),
    action: {
      type: actionType,
      object: "登录设备",
      event: getSceneEventLabel(scene),
      duration: "30",
      unit: "秒"
    }
  };
}

function getSceneEventLabel(scene) {
  if (scene === "账号注册") return "注册";
  if (scene === "支付下单") return "支付";
  if (scene === "短信邮件") return "发送验证码";
  return "登录";
}

function createStrategyDraft(scene) {
  const statsKind = scene === "账号注册" ? "注册" : scene === "支付下单" ? "支付" : "登录";
  return {
    id: null,
    scene,
    sectionTitle: sceneSectionMap[scene],
    name: "默认策略",
    description: "",
    metrics: { triggers: "12,543", rate: "3.2%" },
    stats: createStatsPayload(statsKind),
    activeRuleId: "",
    rules: [
      createRule("", scene, [createCondition()])
    ],
    readOnly: false
  };
}

function createStatsPayload(kind) {
  return {
    range: "近 7 天",
    currentVersion: "v1.3",
    compareOptions: [
      { key: "v1.2", label: "上一版本 v1.2", publishedAt: "2026-03-18 10:00" },
      { key: "ab-A", label: "AB实验 A 组", publishedAt: "2026-03-20 14:00" }
    ],
    dates: ["03-09", "03-10", "03-11", "03-12", "03-13", "03-14", "03-15"],
    business: [45320, 48930, 52100, 49880, 51230, 53890, 56780],
    triggered: [1452, 1567, 1689, 1598, 1645, 1732, 1826],
    totalDevices: [31580, 33840, 35210, 34430, 34980, 36520, 37860],
    riskDevices: [892, 956, 1024, 978, 996, 1053, 1098],
    totalAccounts: [28760, 30120, 31540, 30980, 31820, 32690, 33850],
    riskAccounts: [1016, 1087, 1164, 1102, 1135, 1198, 1266],
    totalIps: [19320, 20180, 21460, 20930, 21650, 22310, 23140],
    riskIps: [624, 671, 719, 688, 705, 742, 781],
    risk: [876, 945, 1012, 958, 987, 1039, 1095],
    slider: [432, 467, 501, 478, 493, 519, 548],
    blocked: [144, 155, 176, 162, 165, 174, 183],
    compareData: {
      "v1.2": {
        changedRules: 1,
        notes: ["命中标签由 2 类扩充到 4 类", "新增登录设备维度判断"],
        triggered: [1310, 1458, 1552, 1490, 1524, 1610, 1688],
        blocked: [121, 134, 149, 142, 148, 156, 165],
        risk: [810, 882, 934, 901, 925, 981, 1022]
      },
      "ab-A": {
        changedRules: 2,
        notes: ["实验组降低拦截阈值", "新增海外IP标签命中分层"],
        triggered: [1396, 1515, 1640, 1548, 1597, 1672, 1751],
        blocked: [132, 145, 160, 151, 154, 163, 171],
        risk: [852, 921, 996, 944, 968, 1010, 1068]
      }
    },
    summary: [
      { icon: "pulse", label: "累计业务请求数", value: "358,050", note: `${kind}场景` },
      { icon: "warn", label: "风控策略触发总数", value: "11,509", note: "触发率 3.21%" },
      { icon: "shield", label: `${kind}拦截总数`, value: "6,912", note: "拦截率 1.93%" },
      { icon: "flag", label: "滑块/二次验证总数", value: "3,438", note: "验证率 0.96%" }
    ]
  };
}

function createTagSections() {
  return [
    {
      key: "account",
      type: "账号",
      title: "账号标签",
      cards: [
        createTagCard("出租账号", "存在租号行为特征的账号\n最近更新时间：2025-03-22 00:00:00", "12,543", "系统定时更新", { type: "账号" }),
        createTagCard("活跃账号", "近期有多次登录的账号", "12,543", "系统实时计算", { type: "账号" }),
        createTagCard("信任期账号", "近期完成过风控的短信/邮件验证的账号", "12,543", "系统实时计算", { type: "账号" })
      ]
    },
    {
      key: "device",
      type: "设备",
      title: "设备标签",
      cards: [
        createTagCard("信任设备", "账号近期在该设备上，完成过手机登录/短信邮件验证/三方登录", "12,543", "系统实时计算", { type: "设备" })
      ]
    },
    {
      key: "ip",
      type: "IP",
      title: "IP标签",
      cards: [
        createTagCard("信任IP", "账号近期在该IP上，完成过手机登录/短信邮件验证/三方登录", "12,543", "系统实时计算", { type: "IP" }),
        createTagCard("海外IP", "IP的解析归属地 不属于中国大陆", "12,543", "系统实时计算", { type: "IP" })
      ]
    }
  ];
}

function createUserBehaviorSections() {
  const behaviorCatalog = getBehaviorManagementCatalog();
  return [
    {
      key: "all",
      title: "全部风险行为",
      cards: [...behaviorCatalog.login, ...behaviorCatalog.register]
    },
    {
      key: "login",
      title: "登录风险行为",
      cards: behaviorCatalog.login.slice()
    },
    {
      key: "register",
      title: "注册风险行为",
      cards: behaviorCatalog.register.slice()
    }
  ];
}

function createPaymentBehaviorCards() {
  return getBehaviorManagementCatalog().payment.slice();
}

function createManagedRuleRows(prefix, rows) {
  return rows.map(([min, max, score, note], index) => ({
    id: `${prefix}-${index + 1}`,
    min,
    max,
    score,
    ...(note ? { note } : {})
  }));
}

function findBehaviorCardByName(name) {
  const userCard = userBehaviorSections.flatMap((section) => section.cards).find((card) => card.name === name);
  if (userCard) return userCard;
  return paymentBehaviorCards.find((card) => card.name === name) || null;
}

function getBehaviorEntityLabel(card) {
  if (card.name.startsWith("IP")) return "本次操作使用的IP";
  if (card.name.startsWith("账号")) return "本次操作使用的账号";
  if (card.name.startsWith("设备") || card.name.includes("设备")) return "本次操作使用的设备";
  return "本次操作对象";
}

function createGeneratedManagedBehaviorRuleSpec(card) {
  if (!card?.name) return null;
  const summaryCard = {
    title: `规则说明-${card.name}`,
    condition: card.description,
    example: `${card.name}命中后，系统会按阈值区间计算风险分。`
  };
  const riskNotes = [
    {
      title: "风险分说明",
      paragraphs: ["取值越大代表风险越高，取值为零代表无风险。"]
    }
  ];

  if (card.name.includes("批量登录多账号") || card.name.includes("注册过多账号")) {
    return {
      key: card.name,
      name: card.name,
      aliases: card.name.includes("注册过多账号")
        ? [card.name.replace("注册过多账号", "批量注册多账号")]
        : [card.name.replace("批量登录多账号", "登录过多账号")],
      kind: "range-score",
      summaryCard,
      metric: {
        subject: getBehaviorEntityLabel(card),
        windowValue: "1",
        windowUnit: "天",
        actionLabel: card.sceneType === "register" ? "注册的" : "登录的",
        countLabel: "账号去重数"
      },
      countLabel: "账号去重数",
      rangeLabel: "账号数",
      rows: createManagedRuleRows(card.name, [
        ["0", card.name.startsWith("IP") ? "5" : "3", "0", "低风险"],
        [card.name.startsWith("IP") ? "5" : "3", card.name.startsWith("IP") ? "10" : "5", "10", "轻微异常"],
        [card.name.startsWith("IP") ? "10" : "5", "20", "25", "可疑"],
        ["20", "50", "40", "高度可疑"],
        ["50", "+∞", "50", "高风险批量行为"]
      ]),
      notes: riskNotes
    };
  }

  if (card.name.includes("高频请求登录") || card.name.includes("高频请求注册")) {
    return {
      key: card.name,
      name: card.name,
      aliases: [],
      kind: "range-score",
      summaryCard,
      metric: {
        subject: getBehaviorEntityLabel(card),
        windowValue: "1",
        windowUnit: "小时",
        actionLabel: card.name.includes("注册") ? "请求注册的" : "请求登录的",
        countLabel: "次数"
      },
      countLabel: "次数",
      rangeLabel: "次数",
      rows: createManagedRuleRows(card.name, [
        ["0", "20", "0", "正常波动"],
        ["20", "50", "10", "轻微异常"],
        ["50", "100", "25", "可疑"],
        ["100", "200", "40", "高频请求"],
        ["200", "+∞", "50", "脚本/机器行为"]
      ]),
      notes: riskNotes
    };
  }

  if (card.name.includes("撞库") || card.name.includes("破解密码")) {
    return {
      key: card.name,
      name: card.name,
      aliases: [],
      kind: "range-score",
      summaryCard,
      metric: {
        subject: getBehaviorEntityLabel(card),
        windowValue: "1",
        windowUnit: "小时",
        actionLabel: "触发密码错误的",
        countLabel: "次数"
      },
      countLabel: "次数",
      rangeLabel: "次数",
      rows: createManagedRuleRows(card.name, [
        ["0", "3", "0", "正常输入错误"],
        ["3", "5", "10", "轻微异常"],
        ["5", "10", "25", "可疑"],
        ["10", "20", "40", "疑似撞库"],
        ["20", "+∞", "50", "高风险撞库"]
      ]),
      notes: riskNotes
    };
  }

  if (card.name.includes("小额充值")) {
    const isAccount = card.name.startsWith("账号");
    return {
      key: card.name,
      name: card.name,
      aliases: [card.name.replace("小额充值", "高频小额充值")],
      kind: "range-score",
      summaryCard,
      metric: {
        subject: isAccount ? "本次充值使用的账号" : getBehaviorEntityLabel(card),
        windowValue: "1",
        windowUnit: "天",
        actionLabel: "发起的小额充值",
        countLabel: "订单数"
      },
      countLabel: "订单数",
      rangeLabel: "订单数",
      rows: createManagedRuleRows(card.name, [
        ["0", "3", "0", "正常充值"],
        ["3", "10", "10", "轻微异常"],
        ["10", "20", "25", "可疑"],
        ["20", "50", "40", "高频小额充值"],
        ["50", "+∞", "50", "高风险刷单"]
      ]),
      notes: riskNotes
    };
  }

  if (card.name.includes("代充")) {
    const isAccount = card.name.startsWith("账号");
    return {
      key: card.name,
      name: card.name,
      aliases: [],
      kind: "range-score",
      summaryCard,
      metric: {
        subject: isAccount ? "本次充值使用的账号" : getBehaviorEntityLabel(card),
        windowValue: "7",
        windowUnit: "天",
        actionLabel: "关联充值的",
        countLabel: isAccount ? "设备去重数" : "账号去重数"
      },
      countLabel: isAccount ? "设备去重数" : "账号去重数",
      rangeLabel: isAccount ? "设备数" : "账号数",
      rows: createManagedRuleRows(card.name, [
        ["0", "2", "0", "正常使用"],
        ["2", "5", "15", "轻微异常"],
        ["5", "10", "30", "可疑"],
        ["10", "20", "40", "疑似代充"],
        ["20", "+∞", "50", "高风险代充"]
      ]),
      notes: riskNotes
    };
  }

  if (card.name.includes("超短设备充值")) {
    return {
      key: card.name,
      name: card.name,
      aliases: [],
      kind: "range-score",
      summaryCard,
      metric: {
        subject: "本次充值使用的设备",
        windowValue: "10",
        windowUnit: "分钟",
        actionLabel: "连续发起超短间隔充值的",
        countLabel: "次数"
      },
      countLabel: "次数",
      rangeLabel: "次数",
      rows: createManagedRuleRows(card.name, [
        ["0", "3", "0", "正常充值节奏"],
        ["3", "5", "10", "轻微异常"],
        ["5", "10", "25", "可疑"],
        ["10", "20", "40", "高风险"],
        ["20", "+∞", "50", "脚本刷单"]
      ]),
      notes: riskNotes
    };
  }

  if (card.name.includes("VPN设备充值")) {
    return {
      key: card.name,
      name: card.name,
      aliases: [],
      kind: "range-score",
      summaryCard,
      metric: {
        subject: "本次充值使用的设备",
        windowValue: "1",
        windowUnit: "天",
        actionLabel: "命中VPN/代理网络标签的",
        countLabel: "次数"
      },
      countLabel: "次数",
      rangeLabel: "次数",
      rows: createManagedRuleRows(card.name, [
        ["0", "1", "0", "未命中VPN/代理"],
        ["1", "+∞", "50", "命中VPN/代理网络"]
      ]),
      notes: riskNotes
    };
  }

  return {
    key: card.name,
    name: card.name,
    aliases: [],
    kind: "range-score",
    summaryCard,
    metric: {
      subject: getBehaviorEntityLabel(card),
      windowValue: "1",
      windowUnit: "天",
      actionLabel: "触发的",
      countLabel: "次数"
    },
    countLabel: "次数",
    rangeLabel: "次数",
    rows: createManagedRuleRows(card.name, [
      ["0", "5", "0", "低风险"],
      ["5", "10", "10", "轻微异常"],
      ["10", "20", "25", "可疑"],
      ["20", "50", "40", "高风险"],
      ["50", "+∞", "50", "极高风险"]
    ]),
    notes: riskNotes
  };
}

const managedBehaviorRuleSpecs = {
  "登录地变化过快": {
    key: "登录地变化过快",
    name: "登录地变化过快",
    aliases: ["登录城市变化过快"],
    kind: "speed-threshold",
    summaryCard: {
      title: "规则说明-登录地变化过快",
      condition: "前后两次登录的登录地距离 ÷ 登录的时间差，超过正常交通方式可实现的速度阈值。",
      example: "多人在不同地点快速交替登录同一账号，存在多号风险"
    },
    metric: {
      windowDays: "30"
    },
    speedRows: [
      { id: "location-speed-1", min: "0", max: "1000", score: "0" },
      { id: "location-speed-2", min: "1000", max: "+∞", score: "50" }
    ],
    notes: [
      {
        title: "速度集中度",
        paragraphs: [
          "最终得分 = 风险分 × 城市集中度",
          "城市集中度 = 近30天内，常用登录城市（账号登录最多的五个城市）的登录次数 ÷ 总登录次数"
        ]
      }
    ]
  },
  "登录地异常": {
    key: "登录地异常",
    name: "登录地异常",
    aliases: [],
    kind: "location",
    summaryCard: {
      title: "规则说明-登录地异常",
      condition: "账号本次登录城市，与最近登录城市的常用登录城市差异较大。",
      example: "账号最近在上海登录，1分钟后出现在了哈尔滨登录，疑似异地盗号。"
    },
    metric: {
      windowDays: "30",
      cityCount: "5"
    },
    distanceRows: [
      { id: "location-1", min: "0", max: "100", score: "0" },
      { id: "location-2", min: "100", max: "300", score: "10" },
      { id: "location-3", min: "300", max: "800", score: "20" },
      { id: "location-4", min: "800", max: "1500", score: "35" },
      { id: "location-5", min: "1500", max: "+∞", score: "50" }
    ],
    notes: [
      {
        title: "城市集中度",
        paragraphs: [
          "城市集中度 = 近30天内，常用登录城市（登录次数最多的前五名城市）的登录次数 ÷ 登录总次数。",
          "对于登录城市较为稳定的账号，城市集中度更高；对于多地共号、代练和跨区共享账号，城市集中度更低。"
        ]
      }
    ]
  },
  "IP批量登录多账号": {
    key: "IP批量登录多账号",
    name: "IP批量登录多账号",
    aliases: ["IP登录过多账号"],
    kind: "account-batch",
    summaryCard: {
      title: "规则说明-IP批量登录多账号",
      condition: "同一个IP地址在短时间内登录了大量不同账号。",
      example: "黑产工作室使用同一网络出口，批量调用真实玩家账号登录并进行挂机、刷资源或薅羊毛。"
    },
    metric: {
      windowValue: "1",
      windowUnit: "天",
      subject: "本次登录使用的IP"
    },
    countLabel: "账号去重数",
    rows: [
      { id: "ip-batch-1", min: "0", max: "5", score: "0", note: "" },
      { id: "ip-batch-2", min: "5", max: "10", score: "10", note: "" },
      { id: "ip-batch-3", min: "10", max: "20", score: "25", note: "" },
      { id: "ip-batch-4", min: "20", max: "50", score: "40", note: "" },
      { id: "ip-batch-5", min: "50", max: "+∞", score: "50", note: "" }
    ],
    notes: [
      {
        title: "风险分说明",
        paragraphs: ["风险分取值越大代表风险越高，取值为零代表无风险。"]
      }
    ]
  },
  "IP高频请求登录": {
    key: "IP高频请求登录",
    name: "IP高频请求登录",
    aliases: [],
    kind: "range-score",
    summaryCard: {
      title: "规则说明-IP高频请求登录",
      condition: "同一IP地址，在统计时间范围内，反复尝试登录",
      example: "黑产工作室通过脚本变更IP设备，批量信号和挂机"
    },
    metric: {
      subject: "本次登录使用的IP",
      windowValue: "100",
      windowUnit: "秒内",
      actionLabel: "发起的总登录次数",
      countLabel: ""
    },
    countLabel: "登录次数",
    rangeLabel: "登录次数",
    rows: createManagedRuleRows("IP高频请求登录", [
      ["0", "6", "0"],
      ["6", "11", "30"],
      ["11", "+∞", "70"]
    ]),
    notes: [
      {
        title: "风险分说明",
        paragraphs: ["风险分取值越大代表风险越高，取值为零代表无风险。"]
      }
    ]
  },
  "IP撞库破解密码": {
    key: "IP撞库破解密码",
    name: "IP撞库破解密码",
    aliases: [],
    kind: "range-score",
    summaryCard: {
      title: "规则说明-IP撞库破解密码",
      condition: "同一IP地址，在统计时间范围内，触发多个账号出现登录失败记录。",
      example: "黑产工作室使用脚本批量发起账号尝试，来尝试破解密码。"
    },
    metric: {
      subject: "本次登录使用的IP",
      windowValue: "300",
      windowUnit: "秒内",
      actionLabel: "触发“账号登录失败”的登录失败次数",
      countLabel: ""
    },
    countLabel: "登录失败次数",
    rangeLabel: "登录失败次数",
    rows: createManagedRuleRows("IP撞库破解密码", [
      ["0", "4", "0"],
      ["4", "8", "30"],
      ["8", "+∞", "70"]
    ]),
    notes: [
      {
        title: "风险分说明",
        paragraphs: ["风险分取值越大代表风险越高，取值为零代表无风险。"]
      }
    ]
  },
  "登录设备异常": {
    key: "登录设备异常",
    name: "登录设备异常",
    aliases: [],
    kind: "device-anomaly",
    summaryCard: {
      title: "规则说明-登录设备异常",
      condition: "账号本次登录使用的设备，不是账号的历史登录设备。",
      example: "账号长期在固定设备登录，突然出现了新的登录设备，疑似账号被共享或被盗用。"
    },
    metric: {
      windowDays: "30",
      newDeviceScore: "20",
      knownDeviceScore: "0"
    },
    notes: [
      {
        title: "设备集中度",
        paragraphs: [
          "设备集中度 = 前三登录设备的总次数 ÷ 登录总次数。",
          "对于只有1-3台设备的玩家，账号的设备集中度会很高。",
          "对于线上租号和共号的账号，账号登录的设备较多，则设备分会相应降低，来减少误判。"
        ]
      }
    ]
  },
  "设备批量登录多账号": {
    key: "设备批量登录多账号",
    name: "设备批量登录多账号",
    aliases: ["设备登录过多账号"],
    kind: "account-batch",
    summaryCard: {
      title: "规则说明-设备批量登录多账号",
      condition: "同一个设备在短时间内登录了大量不同账号。",
      example: "黑产工作室使用同一设备，批量调用真实玩家账号或小号进行挂机、刷资源或薅羊毛。"
    },
    metric: {
      windowValue: "1",
      windowUnit: "天",
      subject: "本次登录使用的设备"
    },
    countLabel: "账号去重数",
    rows: [
      { id: "device-batch-1", min: "0", max: "3", score: "0", note: "" },
      { id: "device-batch-2", min: "3", max: "5", score: "10", note: "" },
      { id: "device-batch-3", min: "5", max: "10", score: "20", note: "" },
      { id: "device-batch-4", min: "10", max: "50", score: "35", note: "" },
      { id: "device-batch-5", min: "50", max: "+∞", score: "50", note: "" }
    ],
    notes: [
      {
        title: "风险分说明",
        paragraphs: ["风险分取值越大代表风险越高，取值为零代表无风险。"]
      }
    ]
  },
  "设备高频请求登录": {
    key: "设备高频请求登录",
    name: "设备高频请求登录",
    aliases: [],
    kind: "range-score",
    summaryCard: {
      title: "规则说明-设备高频请求登录",
      condition: "同一设备地址，在统计时间范围内，反复尝试登录",
      example: "黑产设备通过脚本等，批量信号和挂机"
    },
    metric: {
      subject: "本次登录使用的设备",
      windowValue: "100",
      windowUnit: "秒内",
      actionLabel: "发起的总登录次数",
      countLabel: ""
    },
    countLabel: "登录次数",
    rangeLabel: "登录次数",
    rows: createManagedRuleRows("设备高频请求登录", [
      ["0", "6", "0"],
      ["6", "11", "30"],
      ["11", "+∞", "70"]
    ]),
    notes: [
      {
        title: "风险分说明",
        paragraphs: ["风险分取值越大代表风险越高，取值为零代表无风险。"]
      }
    ]
  },
  "设备撞库破解密码": {
    key: "设备撞库破解密码",
    name: "设备撞库破解密码",
    aliases: [],
    kind: "range-score",
    summaryCard: {
      title: "规则说明-设备撞库破解密码",
      condition: "同一设备，在统计时间范围内，触发多个账号出现登录失败记录。",
      example: "黑产设备用脚本批量发起账号登录，来尝试破解密码。"
    },
    metric: {
      subject: "本次登录使用的设备",
      windowValue: "300",
      windowUnit: "秒内",
      actionLabel: "触发“账号登录失败”的登录失败次数",
      countLabel: ""
    },
    countLabel: "登录失败次数",
    rangeLabel: "登录失败次数",
    rows: createManagedRuleRows("设备撞库破解密码", [
      ["0", "4", "0"],
      ["4", "8", "30"],
      ["8", "+∞", "70"]
    ]),
    notes: [
      {
        title: "风险分说明",
        paragraphs: ["风险分取值越大代表风险越高，取值为零代表无风险。"]
      }
    ]
  }
};

const legacyBehaviorRuleSpecs = {
  "登录地异常": {
    summary: "风险分 = 距离变化分 × 城市集中度",
    linkLabel: "查看详细规则",
    sections: [
      {
        type: "choice",
        label: "距离变化分",
        active: "推荐规则",
        options: ["推荐规则", "自定义规则"]
      },
      {
        type: "table",
        columns: ["区间编号", "玩家本次登录城市，距账号最常用的5个登录城市的最近距离（km）", "得分"],
        rows: [
          ["1", "[0, 100)", "0"],
          ["2", "[100, 300)", "10"],
          ["3", "[300, 800)", "20"],
          ["4", "[800, 1500)", "35"],
          ["5", "[1500, +∞)", "50"]
        ]
      },
      {
        type: "note",
        label: "城市集中度",
        value: "近30天内，前五登录城市的总次数 ÷ 登录总次数"
      }
    ]
  },
  "IP登录过多账号": {
    summary: "风险分 = f(同一IP，在1天内登录的账号去重数)",
    sections: [
      {
        type: "table",
        columns: ["区间编号", "同一IP在1天内登录的账号去重数", "得分", "说明"],
        rows: [
          ["1", "账号数 < 5", "0", "正常家用宽带"],
          ["2", "5 ≤ 账号数 < 10", "10", "NAT 出口，轻微信号"],
          ["3", "10 ≤ 账号数 < 20", "25", "可疑"],
          ["4", "20 ≤ 账号数 < 50", "40", "代理池"],
          ["5", "账号数 ≥ 50", "50", "机房"]
        ]
      }
    ]
  },
  "登录设备异常": {
    summary: "风险分 = 新设备分 × 设备集中度",
    sections: [
      {
        type: "table",
        title: "新设备分",
        description: "先判断当前设备在近30天内是否登录过该账号。未登录过，风险更高；已登录过，风险更低。",
        columns: ["区间编号", "判断条件", "得分"],
        rows: [
          ["1", "当前设备近30天未登录过该账号", "20"],
          ["2", "当前设备近30天已登录过该账号", "0"]
        ]
      },
      {
        type: "note",
        label: "设备集中度",
        value: "前三登录设备的总次数 ÷ 登录总次数。设备越集中，越像玩家的常用设备；若账号本身存在多设备登录需求，会适当降低设备分带来的风险权重。"
      },
      {
        type: "tip",
        title: "为什么要看设备集中度",
        items: [
          "只有 1-3 台设备的玩家，设备集中度通常较高。",
          "线上租号或共号账号登录设备更多，设备分会相应降低，用来减少误判。"
        ]
      }
    ]
  },
  "设备登录过多账号": {
    summary: "风险分 = f(同一设备，在1天内登录的账号去重数)",
    sections: [
      {
        type: "table",
        columns: ["区间编号", "同一设备在1天内登录的账号去重数", "得分", "说明"],
        rows: [
          ["1", "账号数 < 3", "0", "正常自用设备"],
          ["2", "3 ≤ 账号数 < 5", "10", "家庭共享/网吧"],
          ["3", "5 ≤ 账号数 < 10", "20", "可疑"],
          ["4", "10 ≤ 账号数 < 50", "35", "高度可疑"],
          ["5", "账号数 ≥ 50", "50", "批量盗号工作室"]
        ]
      }
    ]
  }
};

function cloneBehaviorRuleSpec(spec) {
  return JSON.parse(JSON.stringify(spec));
}

function getManagedBehaviorRuleSpec(cardOrName) {
  const name = typeof cardOrName === "string" ? cardOrName : cardOrName?.name;
  if (!name) return null;
  const existing = Object.values(managedBehaviorRuleSpecs).find((spec) => spec.name === name || spec.aliases?.includes(name));
  if (existing) return existing;
  const card = typeof cardOrName === "string" ? findBehaviorCardByName(name) : cardOrName;
  const generated = createGeneratedManagedBehaviorRuleSpec(card);
  if (!generated) return null;
  managedBehaviorRuleSpecs[generated.key] = generated;
  return managedBehaviorRuleSpecs[generated.key];
}

function isManagedBehaviorRule(cardOrName) {
  return !!getManagedBehaviorRuleSpec(cardOrName);
}

function getBehaviorRuleSpec(card) {
  const preset = legacyBehaviorRuleSpecs[card.name];
  if (preset) return preset;
  return {
    summary: `识别逻辑：${card.description}`,
    sections: [
      {
        type: "text",
        label: "规则说明",
        value: card.description
      },
      ...(card.levels?.length
        ? [
            {
              type: "tip",
              title: "当前识别项",
              items: card.levels.map((level) => level.expression)
            }
          ]
        : [])
    ]
  };
}

function createBehaviorManagementCard(name, description, options = {}) {
  const expressions = options.expressions?.length ? options.expressions : [description];
  const card = createBehaviorTagCard(name, description, "系统实时计算", expressions);
  card.description = description;
  card.enabled = options.enabled !== false;
  card.statusText = card.enabled ? "生效中" : "已停用";
  card.statusClass = card.enabled ? "enabled" : "disabled";
  card.displayCoverage = options.coverage || "12,543";
  card.displayTriggerRate = options.triggerRate || "3.2%";
  card.sceneType = options.sceneType || "";
  return refreshBehaviorTagCard(card);
}

function getBehaviorManagementCatalog() {
  return {
    login: [
      createBehaviorManagementCard("登录地异常", "前后两次登录的IP归属地变化过大", { sceneType: "login" }),
      createBehaviorManagementCard("登录地变化过快", "前后两次登录的登录地距离过大，且时间差过短", { sceneType: "login" }),
      createBehaviorManagementCard("IP批量登录多账号", "短时间内，同一IP批量登录多个账号", { sceneType: "login" }),
      createBehaviorManagementCard("IP高频请求登录", "短时间内，同一IP通过脚本等方式，高频请求登录服务", { sceneType: "login" }),
      createBehaviorManagementCard("IP撞库破解密码", "短时间内，同一IP多次触发登录密码错误", { sceneType: "login" }),
      createBehaviorManagementCard("登录设备异常", "前后两次登录的设备变化过大", { sceneType: "login" }),
      createBehaviorManagementCard("设备批量登录多账号", "短时间内，设备批量登录多个账号", { sceneType: "login" }),
      createBehaviorManagementCard("设备高频请求登录", "短时间内，同一设备通过脚本等方式，高频请求登录服务", { sceneType: "login" }),
      createBehaviorManagementCard("设备撞库破解密码", "短时间内，同一设备多次触发登录密码错误", { sceneType: "login" })
    ],
    register: [
      createBehaviorManagementCard("IP注册过多账号", "短时间内，同一IP批量注册多个账号", { sceneType: "register" }),
      createBehaviorManagementCard("IP高频请求注册", "短时间内，同一IP通过脚本等方式，高频请求注册服务", { sceneType: "register" }),
      createBehaviorManagementCard("IP注册撞库", "短时间内，同一IP多次触发注册密码错误", { sceneType: "register" }),
      createBehaviorManagementCard("设备注册过多账号", "短时间内，设备批量注册多个账号", { sceneType: "register" }),
      createBehaviorManagementCard("设备高频请求注册", "短时间内，同一设备通过脚本等方式，高频请求注册服务", { sceneType: "register" }),
      createBehaviorManagementCard("设备撞库破解密码", "短时间内，同一设备多次触发登录密码错误", { sceneType: "register" })
    ],
    payment: [
      createBehaviorManagementCard("设备小额充值", "同一设备，短时间内有多个小额充值订单", { sceneType: "payment" }),
      createBehaviorManagementCard("设备代充", "同一设备，在多个账号下有充值行为", { sceneType: "payment" }),
      createBehaviorManagementCard("超短设备充值", "短时间内，设备存在连续超短时发起充值", { sceneType: "payment" }),
      createBehaviorManagementCard("VPN设备充值", "仅VPN代理网络的设备进行充值", { sceneType: "payment" }),
      createBehaviorManagementCard("账号小额充值", "同一账号，小额充值订单过多", { sceneType: "payment" }),
      createBehaviorManagementCard("账号代充", "同一账号，在多个设备上进行充值", { sceneType: "payment" }),
      createBehaviorManagementCard("设备撞库破解密码", "短时间内，同一设备多次触发登录密码错误", { sceneType: "payment" })
    ]
  };
}

function createTagCard(name, description, coverage, updateMode, extras = {}) {
  return {
    id: uid(),
    type: extras.type || "",
    name,
    description,
    coverage,
    updateMode,
    users: extras.users || createTagUsers(name, extras.type)
  };
}

function syncConditionTagSections() {
  syncBehaviorTagSection();
  const typeMap = { 账号: "account", 设备: "device", IP: "ip" };
  Object.entries(typeMap).forEach(([type, key]) => {
    const section = tagSections.find((item) => item.key === key);
    if (!section) return;
    section.cards.forEach((card) => {
      const parent = (conditionPickerCatalog[type] || []).find((item) => item.name === card.name);
      if (card.levels?.length) {
        if (!parent) {
          conditionPickerCatalog[type].push({ name: card.name, children: card.levels.map((level) => level.expression) });
        } else {
          parent.children = card.levels.map((level) => level.expression);
        }
        card.levels.forEach((level) => {
          if (!conditionTagLibrary[type].includes(level.expression)) {
            conditionTagLibrary[type].push(level.expression);
          }
        });
      } else if (!parent) {
        conditionPickerCatalog[type].push({ name: card.name });
      }
      if (!conditionTagLibrary[type].includes(card.name)) {
        conditionTagLibrary[type].push(card.name);
      }
    });
  });
}

function createUserRiskStrategyStore() {
  return [
    {
      id: uid(),
      entry: "登录",
      name: "防盗号",
      description: "识别异常登录环境、租号标签和高风险来源的盗号场景。",
      enabled: true,
      priority: 10,
      defaultAction: "直接放行",
      behaviors: ["新设备登录", "新IP登录", "前后两次登录的IP归属地跨度过大"],
      tags: ["出租账号", "工作室设备", "代理IP/VPN"],
      syncBehaviors: ["新设备登录", "新IP登录"],
      asyncBehaviors: ["前后两次登录的IP归属地跨度过大"],
      updatedAt: "2026-04-21 15:00:00",
      updatedBy: "wangjian02@dobest.com",
      draftVersion: 2,
      publishedVersion: 1,
      publishedAt: "2026-04-21 12:00:00",
      publishedBy: "wangjian02@dobest.com",
      hasDraft: true,
      metrics: {
        hits: "12,543",
        actions: "验证码 43% / 拦截登录 32% / 放行 25%"
      },
      layers: [
        createUserRiskStrategyLayer({
          name: "高危盗号层",
          priority: 1,
          scoreCondition: ">=80",
          tagInclude: ["出租账号"],
          behaviorInclude: ["新设备登录", "新IP登录"],
          baseConditions: ["设备=工作室设备", "IP=代理IP/VPN"],
          action: "拦截登录",
          note: "高危环境直接拦截登录。",
          hits: "2,104"
        }),
        createUserRiskStrategyLayer({
          name: "中危验证层",
          priority: 2,
          scoreCondition: "40-79",
          tagInclude: ["出租账号"],
          behaviorInclude: ["新设备登录"],
          baseConditions: ["账号=高价值账号"],
          action: "验证码验证",
          note: "中危命中先做人机验证。",
          hits: "6,518"
        })
      ]
    },
    {
      id: uid(),
      entry: "注册",
      name: "批量注册",
      description: "识别工作室设备、代理 IP 和短时批量注册行为。",
      enabled: true,
      priority: 20,
      defaultAction: "直接放行",
      behaviors: ["短时间内注册过多账号"],
      tags: ["工作室设备", "代理IP/VPN"],
      syncBehaviors: ["短时间内注册过多账号"],
      asyncBehaviors: [],
      updatedAt: "2026-04-21 14:30:00",
      updatedBy: "wangjian02@dobest.com",
      draftVersion: 1,
      publishedVersion: 1,
      publishedAt: "2026-04-21 14:30:00",
      publishedBy: "wangjian02@dobest.com",
      hasDraft: false,
      metrics: {
        hits: "5,230",
        actions: "拦截注册 51% / 验证码 34% / 放行 15%"
      },
      layers: [
        createUserRiskStrategyLayer({
          name: "高危注册层",
          priority: 1,
          scoreCondition: ">=70",
          tagInclude: ["工作室设备"],
          behaviorInclude: ["短时间内注册过多账号"],
          baseConditions: ["IP=代理IP/VPN"],
          action: "拦截注册",
          note: "高危注册直接拦截。",
          hits: "2,661"
        })
      ]
    },
  ];
}

function createUserRiskWorkbenchStore() {
  return [
    {
      id: uid(),
      entry: "登录",
      name: "默认策略",
      code: "URS-LOGIN-001",
      enabled: true,
      description: "复制高价值用户、普通登录、注册等业务场景，重点管控盗号和异常登录。",
      effectiveChannels: ["游客用户平台", "官包", "联运包", "PC", "H5"],
      selectedBehaviors: [
        "登录设备异常",
        "IP高频请求登录",
        "IP高频请求未登录",
        "IP登录过多账号",
        "设备登录过多账号"
      ],
      behaviorCoefficients: buildBehaviorCoefficientMap(["登录地异常", "登录地变化过快", "IP登录过多账号", "登录设备异常", "设备登录过多账号"]),
      scoreNotice: "风险分 = 1.0 × 登录地异常 + 1.0 × 登录设备异常 + 1.0 × IP高频请求登录 + 1.0 × 登录设备过多账号",
      blocks: [
        createUserRiskWorkbenchBlock({
          min: "0",
          max: "30",
          defaultAction: "标记风险",
          rules: []
        }),
        createUserRiskWorkbenchBlock({
          min: "30",
          max: "70",
          defaultAction: "滑块验证",
          rules: [
            createUserRiskTagRule({ dimension: "账号", operator: "是", label: "出租账号", action: "标记风险" })
          ]
        }),
        createUserRiskWorkbenchBlock({
          min: "70",
          max: "+∞",
          defaultAction: "验证码验证",
          rules: [
            createUserRiskTagRule({ dimension: "账号", operator: "是", label: "出租账号", action: "通知提醒" }),
            createUserRiskTagRule({ dimension: "账号", operator: "是", label: "低信用账号", action: "标记风险" }),
            createUserRiskTagRule({ dimension: "设备", operator: "是", label: "低信用设备", action: "直接放行" }),
            createUserRiskTagRule({ dimension: "IP", operator: "是", label: "低信用IP", action: "直接放行" })
          ]
        })
      ],
      savedAt: "2026-04-21 15:00:00",
      savedBy: "wangjian02@dobest.com"
    },
    {
      id: uid(),
      entry: "注册",
      name: "官方注册防刷",
      code: "URS-REGISTER-001",
      enabled: true,
      description: "识别工作室注册、批量注册和高频脚本注册行为。",
      effectiveChannels: ["游客用户平台", "官包", "联运包", "H5"],
      selectedBehaviors: ["IP注册过多账号", "IP高频请求注册", "设备注册过多账号", "设备高频请求注册"],
      behaviorCoefficients: buildBehaviorCoefficientMap(["IP注册过多账号", "设备注册过多账号", "IP高频请求注册", "设备高频请求注册"]),
      scoreNotice: "风险分 = 1.0 × IP注册过多账号 + 1.0 × IP高频请求注册 + 1.0 × 设备注册过多账号 + 1.0 × 设备高频请求注册",
      blocks: [
        createUserRiskWorkbenchBlock({ min: "0", max: "30", defaultAction: "直接放行", rules: [] }),
        createUserRiskWorkbenchBlock({
          min: "30",
          max: "70",
          defaultAction: "验证码验证",
          rules: [createUserRiskTagRule({ dimension: "IP", operator: "是", label: "代理IP/VPN", action: "标记风险" })]
        }),
        createUserRiskWorkbenchBlock({
          min: "70",
          max: "+∞",
          defaultAction: "注册拦截",
          rules: [createUserRiskTagRule({ dimension: "设备", operator: "是", label: "工作室设备", action: "注册拦截" })]
        })
      ],
      savedAt: "2026-04-21 11:30:00",
      savedBy: "wangjian02@dobest.com"
    }
  ];
}

function createPaymentRiskWorkbenchStore() {
  return [
    {
      id: uid(),
      entry: "支付下单",
      name: "默认策略",
      code: "PRS-PAY-001",
      enabled: true,
      description: "识别异常支付金额、代充账号与高风险网络叠加命中的下单行为。",
      effectiveChannels: ["游客用户平台", "官包", "联运包", "H5"],
      selectedBehaviors: ["设备小额充值", "设备代充", "账号小额充值", "账号代充", "VPN设备充值"],
      behaviorCoefficients: buildBehaviorCoefficientMap(["设备小额充值", "设备代充", "账号小额充值", "账号代充", "VPN设备充值"]),
      scoreNotice: "风险总分 = 0.9 × 设备小额充值 + 0.9 × 设备代充 + 0.9 × 账号小额充值 + 0.9 × 账号代充 + 0.9 × VPN设备充值",
      blocks: [
        createUserRiskWorkbenchBlock({ min: "0", max: "30", defaultAction: "直接放行", rules: [] }),
        createUserRiskWorkbenchBlock({
          min: "30",
          max: "70",
          defaultAction: "标记风险",
          rules: [createUserRiskTagRule({ dimension: "账号", operator: "是", label: "代充账号", action: "标记风险" })]
        }),
        createUserRiskWorkbenchBlock({
          min: "70",
          max: "+∞",
          defaultAction: "支付拦截",
          rules: [
            createUserRiskTagRule({ dimension: "IP", operator: "是", label: "海外IP", action: "验证码验证" }),
            createUserRiskTagRule({ dimension: "设备", operator: "是", label: "工作室设备", action: "支付拦截" })
          ]
        })
      ],
      savedAt: "2026-04-21 16:40:00",
      savedBy: "wangjian02@dobest.com"
    }
  ];
}

function createUserRiskWorkbenchBlock(overrides = {}) {
  return {
    id: overrides.id || uid(),
    min: Object.prototype.hasOwnProperty.call(overrides, "min") ? overrides.min : "0",
    max: Object.prototype.hasOwnProperty.call(overrides, "max") ? overrides.max : "+∞",
    defaultAction: overrides.defaultAction || "直接放行",
    rules: overrides.rules ? overrides.rules.slice() : [],
    levelName: overrides.levelName || ""
  };
}

function syncWorkbenchNextBlockMin(blocks, index) {
  if (!blocks[index] || !blocks[index + 1]) return;
  blocks[index + 1].min = blocks[index].max;
}

function insertWorkbenchBlockWithDraftAfter(blocks, blockId, blockDraft) {
  const index = blocks.findIndex((item) => item.id === blockId);
  if (index < 0 || !blockDraft) return false;
  const block = blocks[index];
  const isLast = index === blocks.length - 1 || block.max === "+∞";
  const next = createUserRiskWorkbenchBlock({
    ...deepClone(blockDraft),
    min: blockDraft.min,
    max: blockDraft.max
  });

  if (isLast) {
    block.min = next.max;
    blocks.splice(index, 0, next);
    return true;
  }

  blocks.splice(index + 1, 0, next);
  syncWorkbenchNextBlockMin(blocks, index + 1);
  return true;
}

function insertWorkbenchBlockAfter(blocks, blockId, defaultAction = "直接放行") {
  const index = blocks.findIndex((item) => item.id === blockId);
  if (index < 0) return false;
  const block = blocks[index];
  const isLast = index === blocks.length - 1 || block.max === "+∞";

  if (isLast) {
    block.max = "";
    const tail = createUserRiskWorkbenchBlock({ min: "", max: "+∞", defaultAction, rules: [] });
    blocks.splice(index + 1, 0, tail);
    return true;
  }

  const next = createUserRiskWorkbenchBlock({ min: block.max, max: "", defaultAction, rules: [] });
  blocks.splice(index + 1, 0, next);
  syncWorkbenchNextBlockMin(blocks, index + 1);
  return true;
}

function removeWorkbenchMiddleBlock(blocks, blockId) {
  const index = blocks.findIndex((item) => item.id === blockId);
  if (index <= 0 || index >= blocks.length - 1) return false;
  blocks.splice(index, 1);
  syncWorkbenchNextBlockMin(blocks, index - 1);
  return true;
}

function createUserRiskTagRule(overrides = {}) {
  return {
    id: overrides.id || uid(),
    dimension: overrides.dimension || "账号",
    operator: overrides.operator || "是",
    label: overrides.label || "",
    action: overrides.action || "标记风险"
  };
}

function getUserRiskWorkbenchStrategies(entry) {
  return userRiskWorkbenchStore.filter((item) => item.entry === entry);
}

function getUserRiskWorkbenchStrategyById(id) {
  return userRiskWorkbenchStore.find((item) => item.id === id) || null;
}

function getUserRiskWorkbenchDraft() {
  return state.userRiskWorkbenchDraft || null;
}

function getPaymentRiskWorkbenchStrategies(entry = state.paymentRiskWorkbenchEntry) {
  return paymentRiskWorkbenchStore.filter((item) => item.entry === entry);
}

function getPaymentRiskWorkbenchStrategyById(id) {
  return paymentRiskWorkbenchStore.find((item) => item.id === id) || null;
}

function getPaymentRiskWorkbenchDraft() {
  return state.paymentRiskWorkbenchDraft || null;
}

function getPaymentRiskWorkbenchActiveStrategy(entry = state.paymentRiskWorkbenchEntry) {
  const activeId = state.paymentRiskWorkbenchActiveIds[entry];
  if (state.paymentRiskWorkbenchDraft && state.paymentRiskWorkbenchDraft.entry === entry && state.paymentRiskWorkbenchDraft.id === activeId) {
    return state.paymentRiskWorkbenchDraft;
  }
  const strategies = getPaymentRiskWorkbenchStrategies(entry);
  return strategies.find((item) => item.id === activeId) || strategies[0] || null;
}

function ensurePaymentRiskWorkbenchState() {
  ["支付下单"].forEach((entry) => {
    const strategies = getPaymentRiskWorkbenchStrategies(entry);
    if (!strategies.length) return;
    if (!state.paymentRiskWorkbenchActiveIds[entry] || !strategies.some((item) => item.id === state.paymentRiskWorkbenchActiveIds[entry])) {
      state.paymentRiskWorkbenchActiveIds[entry] = strategies[0].id;
    }
  });
}

function getUserRiskWorkbenchActiveStrategy(entry = state.userRiskWorkbenchEntry) {
  const activeId = state.userRiskWorkbenchActiveIds[entry];
  if (state.userRiskWorkbenchDraft && state.userRiskWorkbenchDraft.entry === entry && state.userRiskWorkbenchDraft.id === activeId) {
    return state.userRiskWorkbenchDraft;
  }
  const strategies = getUserRiskWorkbenchStrategies(entry);
  return strategies.find((item) => item.id === activeId) || strategies[0] || null;
}

function ensureUserRiskWorkbenchState() {
  ["登录", "注册"].forEach((entry) => {
    const strategies = getUserRiskWorkbenchStrategies(entry);
    if (!strategies.length) return;
    if (!state.userRiskWorkbenchActiveIds[entry] || !strategies.some((item) => item.id === state.userRiskWorkbenchActiveIds[entry])) {
      state.userRiskWorkbenchActiveIds[entry] = strategies[0].id;
    }
  });
}

function getBehaviorCardsByEntry(entry) {
  const sectionKey = entry === "注册" ? "register" : "login";
  const section = userBehaviorSections.find((item) => item.key === sectionKey);
  return section ? section.cards.filter((item) => item.enabled !== false).slice() : [];
}

function getPaymentBehaviorCardsByEntry() {
  return paymentBehaviorCards.filter((item) => item.enabled !== false).slice();
}

function getBehaviorCardScoreRange(name) {
  const spec = getManagedBehaviorRuleSpec(name);
  if (!spec) return "分值 0-100";
  const rows = spec.rows || spec.distanceRows || spec.speedRows || [];
  const scores = rows
    .map((row) => Number(String(row.score).replace(/[^\d.-]/g, "")))
    .filter((value) => !Number.isNaN(value));
  if (!scores.length) {
    if (spec.metric?.newDeviceScore || spec.metric?.knownDeviceScore) {
      const values = [Number(spec.metric.knownDeviceScore || 0), Number(spec.metric.newDeviceScore || 0)].filter((value) => !Number.isNaN(value));
      return values.length ? `风险分 ${Math.min(...values)}-${Math.max(...values)}` : "风险分 0-100";
    }
    return "风险分 0-100";
  }
  return `风险分 ${Math.min(...scores)}-${Math.max(...scores)}`;
}

function upsertUserRiskWorkbenchDraft() {
  const draft = getUserRiskWorkbenchDraft();
  if (!draft) return;
  draft.savedAt = formatDateTime(new Date());
  draft.savedBy = "wangjian02@dobest.com";
  const index = userRiskWorkbenchStore.findIndex((item) => item.id === draft.id);
  if (index >= 0) {
    userRiskWorkbenchStore[index] = deepClone(draft);
  } else {
    userRiskWorkbenchStore.push(deepClone(draft));
  }
}

function upsertPaymentRiskWorkbenchDraft() {
  const draft = getPaymentRiskWorkbenchDraft();
  if (!draft) return;
  draft.savedAt = formatDateTime(new Date());
  draft.savedBy = "wangjian02@dobest.com";
  const index = paymentRiskWorkbenchStore.findIndex((item) => item.id === draft.id);
  if (index >= 0) {
    paymentRiskWorkbenchStore[index] = deepClone(draft);
  } else {
    paymentRiskWorkbenchStore.push(deepClone(draft));
  }
}

function createUserRiskStrategyLayer(overrides = {}) {
  return {
    id: overrides.id || uid(),
    name: overrides.name || "",
    priority: overrides.priority || 1,
    enabled: overrides.enabled !== false,
    scoreCondition: overrides.scoreCondition || "",
    tagInclude: overrides.tagInclude ? overrides.tagInclude.slice() : [],
    tagExclude: overrides.tagExclude ? overrides.tagExclude.slice() : [],
    behaviorInclude: overrides.behaviorInclude ? overrides.behaviorInclude.slice() : [],
    baseConditions: overrides.baseConditions ? overrides.baseConditions.slice() : [],
    action: overrides.action || "",
    actionParams: overrides.actionParams || "",
    note: overrides.note || "",
    hits: overrides.hits || "0"
  };
}

function createDefaultUserRiskStrategyDraft(entry = "登录") {
  return {
    id: uid(),
    entry,
    name: "默认策略",
    description: "",
    enabled: false,
    priority: getNextUserRiskStrategyPriority(),
    defaultAction: "直接放行",
    behaviors: [],
    tags: [],
    syncBehaviors: [],
    asyncBehaviors: [],
    updatedAt: "",
    updatedBy: "",
    draftVersion: 1,
    publishedVersion: 0,
    publishedAt: "",
    publishedBy: "",
    hasDraft: true,
    metrics: {
      hits: "0",
      actions: "未发布"
    },
    layers: []
  };
}

function getNextUserRiskStrategyPriority() {
  return (Math.max(0, ...userRiskStrategyStore.map((item) => item.priority || 0)) || 0) + 10;
}

function getUserRiskStrategyById(id) {
  return userRiskStrategyStore.find((item) => item.id === id) || null;
}

function getUserRiskStrategyWorkingCopy() {
  return state.userRiskStrategyDraft || null;
}

function getUserRiskStrategyTagOptions() {
  const options = new Set();
  userRiskStrategyStore.forEach((item) => {
    item.tags.forEach((tag) => options.add(tag));
    item.layers.forEach((layer) => {
      layer.tagInclude.forEach((tag) => options.add(tag));
      layer.tagExclude.forEach((tag) => options.add(tag));
    });
  });
  return ["全部标签", ...Array.from(options)];
}

function getUserRiskStrategyBehaviorOptions() {
  const options = new Set();
  userRiskStrategyStore.forEach((item) => {
    item.behaviors.forEach((behavior) => options.add(behavior));
    item.layers.forEach((layer) => {
      layer.behaviorInclude.forEach((behavior) => options.add(behavior));
    });
  });
  return ["全部风险行为", ...Array.from(options)];
}

function getUserRiskStrategyVisibleList() {
  const filters = state.userRiskStrategyFilters;
  const keyword = filters.keyword.trim().toLowerCase();
  return userRiskStrategyStore.filter((item) => {
    const matchKeyword = !keyword || item.name.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword);
    const matchEntry = filters.entry === "全部入口" || item.entry === filters.entry;
    const matchStatus = filters.status === "全部状态" || (filters.status === "启用" ? item.enabled : !item.enabled);
    const matchTag =
      filters.relatedTag === "全部标签" ||
      item.tags.includes(filters.relatedTag) ||
      item.layers.some((layer) => layer.tagInclude.includes(filters.relatedTag) || layer.tagExclude.includes(filters.relatedTag));
    const matchBehavior =
      filters.relatedBehavior === "全部风险行为" ||
      item.behaviors.includes(filters.relatedBehavior) ||
      item.layers.some((layer) => layer.behaviorInclude.includes(filters.relatedBehavior));
    return matchKeyword && matchEntry && matchStatus && matchTag && matchBehavior;
  });
}

function summarizeUserRiskStrategyActions(strategy) {
  if (strategy.metrics?.actions) return strategy.metrics.actions;
  const counts = {};
  strategy.layers.forEach((layer) => {
    if (!layer.action) return;
    counts[layer.action] = (counts[layer.action] || 0) + 1;
  });
  const summary = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, count]) => `${name} ${count}层`)
    .join(" / ");
  return summary || "未配置动作";
}

function summarizeUserRiskLayerConditions(layer) {
  const parts = [];
  if (layer.scoreCondition) parts.push(`风险分 ${layer.scoreCondition}`);
  if (layer.tagInclude.length) parts.push(`命中标签 ${layer.tagInclude.join("、")}`);
  if (layer.tagExclude.length) parts.push(`排除标签 ${layer.tagExclude.join("、")}`);
  if (layer.behaviorInclude.length) parts.push(`风险行为 ${layer.behaviorInclude.join("、")}`);
  if (layer.baseConditions.length) parts.push(layer.baseConditions.join("；"));
  return parts.join(" / ");
}

function getUserRiskStrategyPublishInfo(strategy) {
  if (!strategy.publishedVersion) return "未发布";
  return `V${strategy.publishedVersion} · ${strategy.publishedAt || "-"} · ${strategy.publishedBy || "-"}`;
}

function validateUserRiskStrategyDraft(strategy) {
  const issues = [];
  if (!strategy) return ["策略草稿不存在"];
  if (!strategy.name.trim()) issues.push("请填写场景名称");
  if (!strategy.description.trim()) issues.push("请填写场景说明");
  if (!strategy.defaultAction) issues.push("请选择默认动作");
  strategy.layers.forEach((layer, index) => {
    const label = `第${index + 1}层`;
    if (!layer.name.trim()) issues.push(`${label}未填写层名称`);
    if (!layer.action) issues.push(`${label}未选择处置动作`);
    if (!hasUserRiskLayerConditions(layer)) issues.push(`${label}至少需要一个命中条件`);
  });
  return issues;
}

function hasUserRiskLayerConditions(layer) {
  return Boolean(
    layer.scoreCondition ||
    layer.tagInclude.length ||
    layer.tagExclude.length ||
    layer.behaviorInclude.length ||
    layer.baseConditions.length
  );
}

function getUserRiskStrategyWarnings(strategy) {
  const warnings = [];
  if ((strategy.syncBehaviors || []).length > 3) warnings.push("同步检测项较多，可能影响业务性能");
  if ((strategy.layers || []).length > 5) warnings.push("策略层数较多，建议精简");
  if (["拦截登录", "拦截注册", "封禁"].includes(strategy.defaultAction)) warnings.push("默认动作较强，请确认是否符合预期");
  return warnings;
}

function createUserRiskPreviewResult(strategy) {
  const matchedLayers = (strategy.layers || [])
    .filter((layer) => layer.enabled)
    .slice()
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 2);
  return {
    matchedLayers,
    finalLayer: matchedLayers[0] || null,
    finalAction: matchedLayers[0]?.action || strategy.defaultAction || "直接放行"
  };
}

function upsertUserRiskStrategyDraft() {
  const draft = getUserRiskStrategyWorkingCopy();
  if (!draft) return;
  draft.hasDraft = true;
  draft.updatedAt = formatDateTime(new Date());
  draft.updatedBy = "wangjian02@dobest.com";
  draft.draftVersion = Math.max(draft.draftVersion || 1, (draft.publishedVersion || 0) + 1);
  const index = userRiskStrategyStore.findIndex((item) => item.id === draft.id);
  if (index >= 0) {
    userRiskStrategyStore[index] = deepClone(draft);
  } else {
    userRiskStrategyStore.unshift(deepClone(draft));
  }
}

function publishUserRiskStrategyDraft() {
  const draft = getUserRiskStrategyWorkingCopy();
  if (!draft) return { success: false, message: "策略草稿不存在" };
  const issues = validateUserRiskStrategyDraft(draft);
  if (issues.length) {
    return { success: false, message: issues[0] };
  }
  upsertUserRiskStrategyDraft();
  const strategy = getUserRiskStrategyById(draft.id);
  if (!strategy) return { success: false, message: "策略不存在" };
  strategy.hasDraft = false;
  strategy.publishedVersion = strategy.draftVersion;
  strategy.publishedAt = formatDateTime(new Date());
  strategy.publishedBy = "wangjian02@dobest.com";
  state.userRiskStrategyDraft = deepClone(strategy);
  return { success: true, message: "发布成功" };
}

function resetUserRiskStrategyLayerModal() {
  state.userRiskLayerModal = {
    open: false,
    mode: "create",
    layerId: "",
    form: null
  };
}

function createTagUsers(prefix, type = "") {
  return Array.from({ length: 242 }, (_, index) => {
    const id =
      type === "设备"
        ? `DEV_${String(50001 + index).padStart(5, "0")}`
        : type === "账号"
          ? `acc_${String(10001 + index).padStart(5, "0")}`
          : type === "IP"
            ? `172.16.${index % 32}.${20 + (index % 200)}`
            : `user_${String(10001 + index).padStart(5, "0")}`;
    const startHour = String(10 + (index % 12)).padStart(2, "0");
    const endHour = String(2 + (index % 18)).padStart(2, "0");
    return {
      id,
      addedAt: `2023-12-${String(15 + (index % 10)).padStart(2, "0")} ${startHour}:13:05`,
      expiredAt: `2024-05-${String(18 + (index % 8)).padStart(2, "0")} ${endHour}:06:00`,
      detail: `${prefix}命中明细`
    };
  });
}
function isStrategyEnabled(strategy) {
  return strategy.rules?.some((rule) => rule.enabled) ?? false;
}

function deepClone(value) {
  return structuredClone(value);
}

function snapshotStrategy(form) {
  if (!form) return "";
  const payload = deepClone(form);
  delete payload.readOnly;
  return JSON.stringify(payload);
}

function isConditionComplete(condition) {
  if (condition.isGroupCarrier) {
    return (condition.children || []).every((item) => isConditionComplete(item));
  }
  const currentReady = Boolean(condition.selected && condition.type && condition.operator && condition.label);
  const childrenReady = (condition.children || []).every((item) => isConditionComplete(item));
  return currentReady && childrenReady;
}

function countIncompleteConditions(group) {
  return (group?.items || []).reduce((sum, item) => {
    const current = item.isGroupCarrier ? 0 : isConditionComplete(item) ? 0 : 1;
    return sum + current + countIncompleteConditions({ items: item.children || [] });
  }, 0);
}

function validateStrategyForm(strategy) {
  const issues = [];
  if (!strategy.name.trim()) issues.push("请输入策略名称");
  if (!strategy.description.trim()) issues.push("请输入策略描述");

  strategy.rules.forEach((rule, index) => {
    const label = `规则 ${index + 1}`;
    if (!rule.name.trim()) {
      issues.push(`${label} 未填写规则名称`);
    }
    if (!rule.conditions.items.length) {
      issues.push(`${label} 至少需要 1 条判断条件`);
    }
    const incomplete = countIncompleteConditions(rule.conditions);
    if (incomplete) {
      issues.push(`${label} 还有 ${incomplete} 条判断条件未完成标签配置`);
    }
  });

  return issues;
}

function countConditions(group) {
  return (group?.items || []).reduce((sum, item) => sum + (item.isGroupCarrier ? 0 : 1) + countConditions({ items: item.children || [] }), 0);
}

function collectConditionTypes(group, bucket = {}) {
  (group?.items || []).forEach((item) => {
    if (item.type) {
      bucket[item.type] = (bucket[item.type] || 0) + 1;
    }
    collectConditionTypes({ items: item.children || [] }, bucket);
  });
  return bucket;
}

function buildStrategyInsights(strategy) {
  const enabledRules = strategy.rules.filter((rule) => rule.enabled);
  const actionCounts = {};
  enabledRules.forEach((rule) => {
    actionCounts[rule.action.type] = (actionCounts[rule.action.type] || 0) + 1;
  });
  const dominantAction = Object.entries(actionCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || sceneActionMap[strategy.scene];
  const conditionTypes = collectConditionTypes({ items: enabledRules.flatMap((rule) => rule.conditions.items) });
  const dominantCondition = Object.entries(conditionTypes).sort((a, b) => b[1] - a[1])[0]?.[0] || "行为";
  return {
    enabledRuleCount: enabledRules.length,
    totalConditionCount: enabledRules.reduce((sum, rule) => sum + countConditions(rule.conditions), 0),
    dominantAction,
    dominantCondition
  };
}

function buildStrategyHealth(strategy) {
  const insights = buildStrategyInsights(strategy);
  const issues = validateStrategyForm(strategy);
  return {
    ...insights,
    totalRules: strategy.rules.length,
    issueCount: issues.length,
    isComplete: issues.length === 0,
    issueSummary: issues[0] || "配置完整"
  };
}

function collectConditionLabels(group, bucket = []) {
  (group?.items || []).forEach((item) => {
    if (item.label) bucket.push(item.label);
    collectConditionLabels({ items: item.children || [] }, bucket);
  });
  return bucket;
}

function countStrategiesUsingTag(label) {
  return strategyStore.filter((strategy) =>
    strategy.rules.some((rule) => collectConditionLabels(rule.conditions, []).includes(label))
  ).length;
}

function canAddBehaviorLevel(card) {
  return card?.type === "行为";
}

function getBehaviorLevelTemplateOptions(parent) {
  const config = behaviorRuleConfigs[parent];
  if (!config?.dimensions?.length) return [parent];
  return config.dimensions.map((item) => `同一${item}`);
}

function getBehaviorRuleConfig(parent) {
  return behaviorRuleConfigs[parent] || {
    mode: "free-text",
    dimensions: [parent],
    defaultDimension: parent,
    unitOptions: ["分钟"],
    defaultUnit: "分钟",
    defaultWindow: "30",
    defaultThreshold: "1",
    metricLabel: "触发次数",
    suffix: "次"
  };
}

function getBehaviorRuleSummary(name) {
  const config = getBehaviorRuleConfig(name);
  const seed = {
    parent: name,
    dimension: config.defaultDimension || config.dimensions?.[0] || "",
    window: config.defaultWindow || "30",
    unit: config.defaultUnit || config.unitOptions?.[0] || "分钟",
    threshold: config.defaultThreshold || "1",
    metric: config.metricLabel || "",
    expression: ""
  };
  return buildBehaviorLevelExpression(seed);
}

function createBehaviorTriggerRate(total, levelCount, name) {
  const base = Math.max(total * 6, 120 + levelCount * 28 + name.length * 11);
  return `${((total / base) * 100).toFixed(2)}%`;
}

function buildBehaviorLevelExpression(form) {
  const config = getBehaviorRuleConfig(form.parent);
  const dimensionPrefix = form.dimension ? `同一${form.dimension}` : form.template || "";
  if (config.mode === "window-threshold") {
    return `${dimensionPrefix}，${form.window}${form.unit}内，${config.metricLabel}≥${form.threshold}${config.suffix}`;
  }
  if (config.mode === "recently-unseen") {
    return `本次登录使用的${config.subject}，在过去${form.window}${form.unit}内未登录过该账号`;
  }
  if (config.mode === "speed-threshold") {
    return `最近两次登录的IP归属地相距极远，两地距离除以时间差，移动速度平均每小时≥${form.threshold}${config.metricLabel}。`;
  }
  return form.expression?.trim() || form.parent;
}

function createBehaviorLevelForm(card) {
  const config = getBehaviorRuleConfig(card.name);
  return {
    cardId: card.id,
    parent: card.name,
    name: `分层${card.levels.length + 1}`,
    dimension: config.defaultDimension || config.dimensions?.[0] || "",
    template: getBehaviorLevelTemplateOptions(card.name)[0],
    window: config.defaultWindow || "30",
    unit: config.defaultUnit || config.unitOptions?.[0] || "分钟",
    threshold: config.defaultThreshold || "1",
    metric: config.metricLabel || "",
    expression: ""
  };
}

function renderBehaviorDescriptionEditor(form) {
  const config = getBehaviorRuleConfig(form.parent);
  if (config.mode === "window-threshold") {
    return `
      <div class="behavior-desc-editor">
        <select id="behavior-layer-dimension">${optionHtml(config.dimensions, form.dimension)}</select>
        <span class="inline-token">，</span>
        <input id="behavior-layer-window" class="behavior-inline-number" value="${escapeHtml(form.window)}" />
        <select id="behavior-layer-unit">${optionHtml(config.unitOptions, form.unit)}</select>
        <span class="inline-token">内，${config.metricLabel}≥</span>
        <input id="behavior-layer-threshold" class="behavior-inline-number" value="${escapeHtml(form.threshold)}" />
        <span class="chip-input static">${config.suffix}</span>
      </div>
    `;
  }
  if (config.mode === "recently-unseen") {
    return `
      <div class="behavior-desc-editor">
        <span class="inline-token">本次登录使用的${config.subject}，在过去</span>
        <input id="behavior-layer-window" class="behavior-inline-number" value="${escapeHtml(form.window)}" />
        <select id="behavior-layer-unit">${optionHtml(config.unitOptions, form.unit)}</select>
        <span class="inline-token">内未登录过该账号</span>
      </div>
    `;
  }
  if (config.mode === "speed-threshold") {
    return `
      <div class="behavior-desc-editor">
        <span class="inline-token">最近两次登录的IP归属地相距极远，两地距离除以时间差，移动速度平均每小时≥</span>
        <input id="behavior-layer-threshold" class="behavior-inline-number" value="${escapeHtml(form.threshold)}" />
        <span class="chip-input static">${config.metricLabel}</span>
      </div>
    `;
  }
  return `<input id="behavior-layer-expression" value="${escapeHtml(form.expression)}" placeholder="请输入规则表达式" />`;
}

function createDefaultStrategyFilters() {
  return {
    keyword: "",
    status: "全部状态",
    relatedTag: "全部标签"
  };
}

function createDefaultTagFilters() {
  return {
    keyword: "",
    generationMode: "全部方式"
  };
}

function createDefaultBehaviorFilters() {
  return {
    keyword: ""
  };
}

function getTagUpdateModeDisplay(card) {
  if (!card) return "每日更新";
  if (card.type === "行为" || card.updateMode === "系统实时计算" || card.updateMode === "实时计算") {
    return "实时更新";
  }
  return "每日更新";
}

function getTagCoverageLabel(type) {
  if (type === "设备") return "覆盖设备数";
  if (type === "IP") return "覆盖IP数";
  return "覆盖账号数";
}

function renderTagCardActionIcon(type) {
  if (type === "设备") {
    return `
      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <rect x="3.2" y="3.2" width="9.6" height="6.7" rx="1.3" fill="none" stroke="currentColor" stroke-width="1.1"></rect>
        <path d="M6.2 12.2h3.6" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"></path>
      </svg>
    `;
  }
  if (type === "IP") {
    return `
      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M8 13.2c2.5-2.5 3.7-4.4 3.7-5.8A3.7 3.7 0 1 0 4.3 7.4c0 1.4 1.2 3.3 3.7 5.8Z" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"></path>
        <circle cx="8" cy="7.1" r="1.35" fill="none" stroke="currentColor" stroke-width="1.1"></circle>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M4.4 12.7v-1.1c0-1.5 1.4-2.6 3.6-2.6s3.6 1.1 3.6 2.6v1.1" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"></path>
      <circle cx="8" cy="5.3" r="2.1" fill="none" stroke="currentColor" stroke-width="1.1"></circle>
    </svg>
  `;
}

function cloneFilters(filters) {
  return JSON.parse(JSON.stringify(filters));
}

function getManualTagFieldMeta(type) {
  if (type === "设备") {
    return {
      label: "设备ID",
      placeholder: "请输入设备ID，多个设备ID请换行输入"
    };
  }
  if (type === "IP") {
    return {
      label: "IP地址",
      placeholder: "请输入IP地址，多个IP地址请换行输入"
    };
  }
  return {
    label: "账号ID",
    placeholder: "请输入账号ID，多个账号ID请换行输入"
  };
}

function getStrategyPageConfig(page = state.currentPage) {
  if (page === "payment-risk-engine") {
    return {
      page: "payment-risk-engine",
      scenes: ["支付下单"],
      defaultScene: "支付下单"
    };
  }
  return {
    page: "user-risk-engine",
    scenes: ["账号登录", "账号注册"],
    defaultScene: "全部场景"
  };
}

function resolveStrategyPageByScene(scene) {
  return scene === "支付下单" ? "payment-risk-engine" : "user-risk-engine";
}

function resolveStrategyPageByTag(label) {
  const matchedStrategies = strategyStore.filter((strategy) =>
    strategy.rules.some((rule) => collectConditionLabels(rule.conditions, []).includes(label))
  );
  if (matchedStrategies.length && matchedStrategies.every((strategy) => strategy.scene === "支付下单")) {
    return "payment-risk-engine";
  }
  return "user-risk-engine";
}

function getStrategyTagOptions() {
  const options = [];
  tagSections.forEach((section) => {
    section.cards.forEach((card) => {
      if (!options.includes(card.name)) {
        options.push(card.name);
      }
    });
  });
  return ["全部标签", ...options];
}

function isPaymentRiskEnginePage() {
  return state.currentPage === "payment-risk-engine";
}

function getBehaviorSourceCards() {
  return isPaymentRiskEnginePage()
    ? paymentBehaviorCards
    : userBehaviorSections.find((section) => section.key === "all")?.cards || [];
}

function getBehaviorPickerCatalog() {
  const sourceCards = getBehaviorSourceCards();
  if (!sourceCards.length) {
    return conditionPickerCatalog.行为 || [];
  }
  return sourceCards.map((card) => ({
    name: card.name,
    children: (card.levels || []).map((level) => level.expression)
  }));
}

function getConditionPickerItems(category) {
  if (category === "行为") return getBehaviorPickerCatalog();
  return conditionPickerCatalog[category] || [];
}

function findPickerCategoryByLabel(label) {
  if (!label || label === "全部标签") return "行为";
  const matchedCategory = conditionTypeOptions.find((type) =>
    getConditionPickerItems(type).some((item) => item.name === label || item.children?.includes(label))
  );
  return matchedCategory || "行为";
}

function getPickerSearchPlaceholder(category) {
  if (category === "行为") return "搜索行为标签";
  if (category === "账号") return "搜索账号标签";
  if (category === "设备") return "搜索设备标签";
  if (category === "IP") return "搜索IP标签";
  return "搜索标签";
}

function getPickerTitle(category, includeCategoryMenu) {
  if (!includeCategoryMenu) {
    if (category === "行为" && isPaymentRiskEnginePage()) return "选择风险行为";
    return "选择标签";
  }
  if (category === "行为") return "选择行为标签";
  if (category === "账号") return "选择账号标签";
  return "选择标签";
}

function createPickerStateByCategory(category, label = "") {
  const normalizedCategory = category || "行为";
  const pickerItems = getConditionPickerItems(normalizedCategory);
  const defaultParent = findPickerParent(normalizedCategory, label) || pickerItems[0]?.name || "";
  return {
    category: normalizedCategory,
    parent: defaultParent,
    parentQuery: "",
    childQuery: ""
  };
}

function buildTagPickerPanel({
  category,
  selectedLabel = "",
  includeCategoryMenu = false,
  allowQuickAdd = false,
  onCategoryChange,
  onParentSearch,
  onChildSearch,
  onParentSelect,
  onChildSelect,
  onQuickAdd
}) {
  const wrap = document.createElement("div");
  wrap.className = `condition-picker-panel ${includeCategoryMenu ? "with-category-menu" : "without-category-menu"}`;

  const allParents = getConditionPickerItems(category);
  const stateBucket = includeCategoryMenu ? state.strategyTagPicker : state.conditionPicker;
  const parentQuery = stateBucket?.parentQuery || "";
  const childQuery = stateBucket?.childQuery || "";
  const parentList = allParents.filter((item) => item.name.includes(parentQuery));
  const activeParent = parentList.find((item) => item.name === stateBucket?.parent) || parentList[0] || allParents[0];
  const hasChildren = Boolean(activeParent?.children?.length);
  const childList = (activeParent?.children || []).filter((item) => item.includes(childQuery));
  const parentPlaceholder =
    includeCategoryMenu ? getPickerSearchPlaceholder(category) : category === "行为" ? "搜索风险行为" : "搜索标签";
  const childPlaceholder = category === "行为" ? "搜索风险行为" : "搜索子标签";
  const showQuickAdd = allowQuickAdd && hasChildren && canQuickAddConditionSubtag(category, activeParent?.name || "");
  const quickAddText = category === "行为" ? "未找到合适的值？新建分层" : "未找到合适的阈值？新增标签";

  wrap.innerHTML = `
    <div class="picker-header">${getPickerTitle(category, includeCategoryMenu)}</div>
    <div class="picker-body ${includeCategoryMenu ? "with-categories" : "without-categories"} ${hasChildren ? "has-children" : "no-children"}">
      ${
        includeCategoryMenu
          ? `
            <div class="picker-col picker-category-col">
              ${conditionTypeOptions
                .map(
                  (item) => `
                    <button type="button" class="picker-category ${item === category ? "active" : ""}" data-picker-category="${item}">
                      <span>${item}标签</span>
                      <span class="picker-arrow">›</span>
                    </button>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
      <div class="picker-col picker-parent-col">
        <div class="picker-search"><input type="text" value="${escapeHtml(parentQuery)}" placeholder="${parentPlaceholder}" data-picker-parent-search /></div>
        ${
          parentList.length
            ? parentList
                .map(
                  (item) => `
                    <button type="button" class="picker-parent ${item.name === activeParent?.name ? "active" : ""}" data-picker-parent="${item.name}">
                      <span>${item.name}</span>
                      ${item.children?.length ? `<span class="picker-arrow">›</span>` : `<span class="picker-arrow hidden-arrow"></span>`}
                    </button>
                  `
                )
                .join("")
            : `<div class="picker-empty">未找到匹配标签，请尝试调整搜索条件</div>`
        }
      </div>
      ${
        hasChildren
          ? `
            <div class="picker-col picker-child-col">
              <div class="picker-search"><input type="text" value="${escapeHtml(childQuery)}" placeholder="${childPlaceholder}" data-picker-child-search /></div>
              ${
                childList.length
                  ? childList
                      .map(
                        (item) => `
                          <button type="button" class="picker-child ${item === selectedLabel ? "active" : ""}" data-picker-child="${item}">
                            ${item}
                          </button>
                        `
                      )
                      .join("")
                  : `<div class="picker-empty">未找到匹配子标签，请尝试调整搜索条件</div>`
              }
              ${showQuickAdd ? `<button type="button" class="picker-hint-link" data-picker-new-subtag="1">${quickAddText}</button>` : ""}
            </div>
          `
          : ""
      }
    </div>
  `;

  wrap.querySelectorAll("[data-picker-category]").forEach((button) => {
    button.addEventListener("click", () => onCategoryChange?.(button.dataset.pickerCategory));
  });
  wrap.querySelector("[data-picker-parent-search]")?.addEventListener("input", (event) => {
    onParentSearch?.(event.target.value);
  });
  wrap.querySelector("[data-picker-child-search]")?.addEventListener("input", (event) => {
    onChildSearch?.(event.target.value);
  });
  wrap.querySelectorAll("[data-picker-parent]").forEach((button) => {
    button.addEventListener("click", () => onParentSelect?.(button.dataset.pickerParent, hasChildren));
  });
  wrap.querySelectorAll("[data-picker-child]").forEach((button) => {
    button.addEventListener("click", () => onChildSelect?.(button.dataset.pickerChild));
  });
  wrap.querySelector("[data-picker-new-subtag]")?.addEventListener("click", () => {
    onQuickAdd?.(activeParent?.name || "");
  });

  return wrap;
}

function buildPagerItems(currentPage, pageCount) {
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);
  if (currentPage <= 4) return [1, 2, 3, 4, 5, "...", pageCount];
  if (currentPage >= pageCount - 3) return [1, "...", pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", pageCount];
}

function formatDateTime(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
}

function shiftDateTime(base, offsetMinutes) {
  const parsed = new Date(String(base).replace(/-/g, "/"));
  if (Number.isNaN(parsed.getTime())) return base;
  parsed.setMinutes(parsed.getMinutes() + offsetMinutes);
  return formatDateTime(parsed);
}

function shiftIp(ip, offset) {
  const parts = String(ip).split(".");
  if (parts.length !== 4) return ip;
  const last = ((Number(parts[3]) || 0) + offset) % 255 || 1;
  parts[3] = String(last);
  return parts.join(".");
}

function getTodayDateValue() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function getLogActionOptions(pageKey = "login-log") {
  if (pageKey === "payment-log") {
    return ["", "放行", "标记风险", "拦截下单"];
  }
  return logActionOptions;
}

function formatLogTime(value) {
  return String(value || "—").slice(0, 16);
}

function getLogRiskBehaviorOptions(pageKey = "login-log") {
  return [...new Set(getExpandedRiskLogRows(pageKey).flatMap((item) => item.riskBehaviors || []))];
}

function matchesRiskScoreRange(score, rangeLabel) {
  if (Array.isArray(rangeLabel)) {
    if (!rangeLabel.length) return true;
    return rangeLabel.some((item) => matchesRiskScoreRange(score, item));
  }
  if (!rangeLabel) return true;
  const value = Number(score);
  if (Number.isNaN(value)) return false;
  const matched = String(rangeLabel).match(/^(\d+)[≤<]+风险分[≤<]+(\d+)$/);
  if (!matched) return true;
  const min = Number(matched[1]);
  const max = Number(matched[2]);
  if (rangeLabel.includes("≤风险分≤")) return value >= min && value <= max;
  return value > min && value <= max;
}

function parseDateTimeValue(value) {
  const parsed = new Date(String(value).replace(/-/g, "/"));
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function createBehaviorTriggerRecords(parentName, expression, count = 18) {
  const now = new Date();
  const scene = expression.includes("注册") ? "账号注册" : "账号登录";
  const strategy = strategyStore.find((item) => item.scene === scene)?.name || (scene === "账号注册" ? "注册接口防刷" : "登录接口防刷");
  return Array.from({ length: count }, (_, index) => {
    const triggeredAt = new Date(now.getTime() - index * 37 * 60 * 1000 - (index % 5) * 24 * 60 * 60 * 1000);
    return {
      id: uid(),
      triggeredAt: formatDateTime(triggeredAt),
      account: `user_${String(30001 + index).padStart(5, "0")}`,
      device: `DEV_${String(88001 + index).slice(-5)}`,
      ip: `10.24.${index % 17}.${20 + (index % 120)}`,
      strategy,
      result: parentName.includes("请求") ? "滑块验证" : index % 4 === 0 ? "登录拦截" : "标记风险"
    };
  }).sort((a, b) => b.triggeredAt.localeCompare(a.triggeredAt));
}

function createBehaviorLevel(expression, index = 0, parentName = "", tabName = "") {
  const records = createBehaviorTriggerRecords(parentName, expression, 12 + ((index + expression.length) % 9));
  return {
    id: uid(),
    name: tabName || `分层${index + 1}`,
    expression,
    records,
    todayTriggers: formatNumber(records.filter((item) => item.triggeredAt.startsWith(getTodayDateValue())).length || records.length)
  };
}

function refreshBehaviorTagCard(card) {
  if (card.type !== "行为") return card;
  card.levels.forEach((level, index) => {
    level.name ||= `分层${index + 1}`;
    level.todayTriggers = formatNumber(level.records.filter((item) => item.triggeredAt.startsWith(getTodayDateValue())).length || level.records.length);
  });
  const total = card.levels.reduce((sum, level) => sum + Number(String(level.todayTriggers).replace(/,/g, "")), 0);
  card.coverage = formatNumber(total);
  card.triggerRate = createBehaviorTriggerRate(total, card.levels.length, card.name);
  if (card.displayCoverage) card.coverage = card.displayCoverage;
  if (card.displayTriggerRate) card.triggerRate = card.displayTriggerRate;
  return card;
}

function createBehaviorTagCard(name, description, updateMode, childExpressions = []) {
  const expressions = childExpressions.length ? childExpressions : [name];
  const card = {
    id: uid(),
    type: "行为",
    name,
    description,
    coverage: "0",
    updateMode,
    users: [],
    levels: expressions.map((expression, index) => createBehaviorLevel(expression, index, name))
  };
  return refreshBehaviorTagCard(card);
}

function createLayeredTagCard(name, description, updateMode, type, levelNames = []) {
  const levels = levelNames.map((levelName, index) => ({
    id: uid(),
    name: `分层${index + 1}`,
    expression: levelName,
    users: createTagUsers(levelName, type),
    coverage: "12,543"
  }));
  return {
    id: uid(),
    type,
    name,
    description,
    coverage: formatNumber(levels.reduce((sum, level) => sum + level.users.length, 0)),
    updateMode,
    users: levels.flatMap((level) => level.users),
    levels
  };
}

function getTagSearchPlaceholder(card) {
  if (card.type === "设备") return "搜索设备ID";
  if (card.type === "账号") return "搜索账号ID";
  if (card.type === "IP") return "搜索IP";
  return "搜索用户ID";
}

function syncBehaviorTagSection() {
  const behaviorCatalog = getBehaviorManagementCatalog();
  const loginNames = behaviorCatalog.login.map((item) => item.name);
  const registerNames = behaviorCatalog.register.map((item) => item.name);
  const behaviorSource = [...behaviorCatalog.login, ...behaviorCatalog.register].map((item) => ({
    name: item.name,
    description: item.description,
    children: item.levels?.map((level) => level.expression) || [item.description],
    displayCoverage: item.displayCoverage || "12,543",
    displayTriggerRate: item.displayTriggerRate || "3.2%",
    enabled: item.enabled !== false,
    statusText: item.enabled === false ? "已停用" : "生效中",
    statusClass: item.enabled === false ? "disabled" : "enabled",
    sceneType: item.sceneType || ""
  }));
  const existingMap = new Map(userBehaviorSections.flatMap((section) => section.cards).map((card) => [card.name, card]));
  const cards = behaviorSource.map((item, index) => {
    const existing = existingMap.get(item.name);
    const desiredExpressions = item.children?.length ? item.children : [item.name];
    const levelMap = new Map((existing?.levels || []).map((level) => [level.expression, level]));
    const card =
      existing ||
      createBehaviorTagCard(
        item.name,
        item.description || behaviorTagDescriptions[item.name] || "行为标签自动补全项",
        "系统实时计算",
        desiredExpressions
      );
    card.type = "行为";
    card.enabled = item.enabled !== false;
    card.description = item.description || existing?.description || behaviorTagDescriptions[item.name] || "行为标签自动补全项";
    card.updateMode = "系统实时计算";
    card.statusText = item.statusText || "生效中";
    card.statusClass = item.statusClass || "enabled";
    card.displayCoverage = item.displayCoverage || "12,543";
    card.displayTriggerRate = item.displayTriggerRate || "3.2%";
    card.sceneType = item.sceneType || "";
    card.levels = desiredExpressions.map((expression, levelIndex) => {
      const level = levelMap.get(expression) || createBehaviorLevel(expression, levelIndex, item.name);
      level.name ||= `分层${levelIndex + 1}`;
      level.expression = expression;
      level.records ||= createBehaviorTriggerRecords(item.name, expression);
      return level;
    });
    return refreshBehaviorTagCard(card);
  });
  userBehaviorSections.forEach((section) => {
    if (section.key === "all") section.cards = cards.slice();
    if (section.key === "login") section.cards = cards.filter((card) => loginNames.includes(card.name));
    if (section.key === "register") section.cards = cards.filter((card) => registerNames.includes(card.name));
  });
}

function appendIdSuffix(value, offset) {
  const matched = String(value).match(/^(.*?)(\d+)$/);
  if (!matched) return `${value}_${offset + 1}`;
  const [, prefix, raw] = matched;
  const next = String((Number(raw) + offset) % 100000).padStart(raw.length, "0");
  return `${prefix}${next}`;
}

function getExpandedRiskLogRows(pageKey = "login-log") {
  const source = riskLogData[pageKey];
  const actionCycle =
    pageKey === "payment-log"
      ? ["拦截下单", "标记风险", "放行"]
      : ["登录拦截", "滑块验证", "标记风险", "放行", "验证码验证", "设备封禁", "IP封禁", "账号封禁"];
  const languageCycle = ["zh-CN", "zh-TW", "en-US"];
  const networkCycle = ["WiFi", "4G", "5G"];
  const packageCycle =
    pageKey === "payment-log"
      ? ["com.platform.payment", "com.platform.payment.cn", "com.platform.wallet.beta"]
      : ["com.platform.game", "com.platform.game.cn", "com.platform.game.beta"];
  const channelCycle =
    pageKey === "payment-log"
      ? ["310003", "310004", "310008"]
      : ["310003", "310004", "310001"];
  const currencyCycle = ["CNY", "USD", "HKD"];
  const productCycle = [
    { name: "60点券", id: "sku_60_diamond" },
    { name: "300点券", id: "sku_300_diamond" },
    { name: "月卡", id: "sku_month_card" }
  ];
  return Array.from({ length: source.total }, (_, index) => {
    const seed = source.rows[index % source.rows.length];
    const [deviceModel = seed.deviceDesc, systemText = "未知系统"] = seed.deviceDesc.split("|").map((item) => item.trim());
    const action = actionCycle[index % actionCycle.length];
    const tone =
      ["设备封禁", "IP封禁", "账号封禁", "登录拦截", "拦截下单"].includes(action)
        ? "danger"
        : ["验证码验证", "滑块验证"].includes(action)
          ? "success"
          : action === "标记风险"
            ? "warning"
            : "muted";
    return {
      ...seed,
      id: index + 1,
      hitId: `HIT_${String(100000 + index).padStart(6, "0")}`,
      scene: pageKey === "payment-log" ? "支付下单" : "账号登录",
      hitTime: seed.hitTime,
      riskBehaviors: seed.riskBehaviors || [seed.strategy || "登录异常"],
      riskBehavior: (seed.riskBehaviors || [seed.strategy || "登录异常"])[0],
      riskScore: seed.riskScore ?? 0,
      deviceId: appendIdSuffix(seed.deviceId, index),
      ip: shiftIp(seed.ip, index),
      account:
        pageKey === "payment-log"
          ? `pay_user_${String(30005 + (index % 187)).padStart(5, "0")}`
          : `user_${String(20005 + (index % 187)).padStart(5, "0")}`,
      accountNo:
        pageKey === "payment-log"
          ? `${510003 + (index % 8)}_${String(823123 + index).slice(-6)}`
          : `${310003 + (index % 8)}_${String(123123 + index).slice(-6)}`,
      action,
      tone,
      deviceModel,
      systemType: systemText.split(" ")[0],
      deviceBrand: deviceModel.split(" ")[0],
      osVersion: systemText,
      deviceFingerprint: `fp_${String(9827361 + index).padStart(8, "0")}`,
      systemLanguage: languageCycle[index % languageCycle.length],
      emulatorUsed: index % 5 === 0 ? "是" : "否",
      rooted: index % 7 === 0 ? "是" : "否",
      networkType: networkCycle[index % networkCycle.length],
      ipRegion: seed.city,
      carrier: seed.carrier || (index % 2 === 0 ? "中国移动" : "中国联通"),
      vpnUsed: index % 6 === 0 ? "是" : "否",
      registerTime: shiftDateTime(seed.hitTime, -1440),
      registerIp: shiftIp(seed.ip, index + 9),
      registerIpRegion: seed.city,
      registerMethod: index % 2 === 0 ? "账号注册" : "游客注册",
      loginTime: shiftDateTime(seed.hitTime, -30),
      loginIp: seed.ip,
      loginIpRegion: seed.city,
      loginMethod: "密码登录",
      projectId: pageKey === "payment-log" ? "10086" : "10010",
      packageName: packageCycle[index % packageCycle.length],
      packageId: `pkg_${1000 + index}`,
      securityVersion: `3.${(index % 4) + 1}.${(index % 7) + 1}`,
      sdkVersion: `5.${(index % 4) + 1}.${(index % 9) + 2}`,
      gameVersion: `1.${(index % 6) + 10}.${(index % 12) + 1}`,
      channel: channelCycle[index % channelCycle.length],
      sdkOrderId: seed.orderId ? appendIdSuffix(seed.orderId, index) : "—",
      cpOrderId: pageKey === "payment-log" ? `CP${String(520000 + index).padStart(8, "0")}` : "—",
      currency: pageKey === "payment-log" ? currencyCycle[index % currencyCycle.length] : "—",
      productName: pageKey === "payment-log" ? productCycle[index % productCycle.length].name : "—",
      productId: pageKey === "payment-log" ? productCycle[index % productCycle.length].id : "—",
      createOrderTime: pageKey === "payment-log" ? shiftDateTime(seed.hitTime, index * 7 + 2) : "—",
      payTime: pageKey === "payment-log" ? shiftDateTime(seed.hitTime, index * 7 + 8) : "—",
      currencyAmount: pageKey === "payment-log" ? `${currencyCycle[index % currencyCycle.length]} ${(10 + index * 2.5).toFixed(2)}` : "—",
      roleName: pageKey === "payment-log" ? `剑士${String((index % 200) + 1).padStart(3, "0")}` : "—",
      roleId: pageKey === "payment-log" ? `role_${String(900001 + index).padStart(6, "0")}` : "—",
      serverName: pageKey === "payment-log" ? `微信${(index % 12) + 1}区` : "—",
      serverId: pageKey === "payment-log" ? `srv_${String((index % 12) + 1).padStart(3, "0")}` : "—",
      thirdOrderId: pageKey === "payment-log" ? `TP${String(880000 + index).padStart(8, "0")}` : "—",
      paymentMethod: seed.paymentMethod || "—",
      orderAmount: seed.orderAmount || "—",
      actualPaidAmount: seed.orderAmount || "—",
      commonDeviceUsed: index % 3 === 0 ? "是" : "否",
      commonLoginRegionUsed: index % 4 === 0 ? "是" : "否",
      orderSource: pageKey === "payment-log" ? "SDK" : "—",
      createOrderIp: pageKey === "payment-log" ? shiftIp(seed.ip, index + 3) : "—",
      createOrderIpRegion: pageKey === "payment-log" ? seed.city : "—"
    };
  });
}

function buildLoginFocusCards(rows) {
  const recentRows = rows.slice(0, 120);
  const newDeviceRows = recentRows.filter((row) => ["异地登录", "高危登录风险"].includes(row.strategy));
  const newIpRows = recentRows.filter((row) => ["黑名单IP拦截", "异地登录"].includes(row.strategy));
  const suspiciousAccountRows = recentRows.filter(
    (row) => row.action !== "直接放行" || ["高危登录风险", "异地登录", "黑名单IP拦截"].includes(row.strategy)
  );
  const strategyCounts = recentRows.reduce((bucket, row) => {
    bucket[row.strategy] = (bucket[row.strategy] || 0) + 1;
    return bucket;
  }, {});
  const topStrategy = Object.entries(strategyCounts).sort((a, b) => b[1] - a[1])[0] || ["登录接口防刷", 0];
  return [
    {
      key: "new-device",
      title: "新增异常设备",
      value: formatNumber(new Set(newDeviceRows.map((row) => row.deviceId)).size),
      note: "今日首次出现并触发风险策略的设备",
      helper: `优先回查 ${newDeviceRows[0]?.deviceId || "DEV_X88"} 等可疑设备`
    },
    {
      key: "new-ip",
      title: "新增异常IP",
      value: formatNumber(new Set(newIpRows.map((row) => row.ip)).size),
      note: "今日首次出现并命中风险标签的IP",
      helper: `关注 ${newIpRows[0]?.ip || "182.12.44.102"} 等异常来源`
    },
    {
      key: "strategy-spike",
      title: "命中量突增策略",
      value: topStrategy[0],
      note: `近24小时命中 ${formatNumber(topStrategy[1])} 次`,
      helper: "建议回看该策略近期标签覆盖和版本变更"
    },
    {
      key: "new-account",
      title: "异常新增账号",
      value: formatNumber(new Set(suspiciousAccountRows.map((row) => row.account)).size),
      note: "今日首次出现并命中风险策略的账号",
      helper: `优先回查 ${suspiciousAccountRows[0]?.account || "user_20005"} 等可疑账号`
    }
  ];
}

function applyLoginFocusFilter(rows, key) {
  if (key === "new-device") return rows.filter((row) => ["异地登录", "高危登录风险"].includes(row.strategy));
  if (key === "new-ip") return rows.filter((row) => ["黑名单IP拦截", "异地登录"].includes(row.strategy));
  if (key === "new-account") {
    return rows.filter((row) => row.action !== "直接放行" || ["高危登录风险", "异地登录", "黑名单IP拦截"].includes(row.strategy));
  }
  if (key === "strategy-spike") {
    const topStrategy = Object.entries(
      rows.reduce((bucket, row) => {
        bucket[row.strategy] = (bucket[row.strategy] || 0) + 1;
        return bucket;
      }, {})
    ).sort((a, b) => b[1] - a[1])[0]?.[0];
    return topStrategy ? rows.filter((row) => row.strategy === topStrategy) : rows;
  }
  return rows;
}

function getLogColumnGroupMap() {
  return Object.fromEntries(logColumnGroups.map((group) => [group.key, group]));
}

function getLogFieldLabel(key) {
  for (const group of logColumnGroups) {
    const field = group.fields.find((item) => item.key === key);
    if (field) return field.label;
  }
  return key;
}

function getDefaultLogColumns(pageKey) {
  return [...(defaultLogVisibleColumnsByPage[pageKey] || defaultLogVisibleColumnsByPage["login-log"])];
}

function getLogVisibleColumns(pageKey) {
  state.logVisibleColumnsByPage ||= {};
  state.logVisibleColumnsByPage[pageKey] ||= getDefaultLogColumns(pageKey);
  return state.logVisibleColumnsByPage[pageKey];
}

function setLogVisibleColumns(pageKey, columns) {
  state.logVisibleColumnsByPage ||= {};
  state.logVisibleColumnsByPage[pageKey] = columns;
}

function toggleLogColumn(pageKey, fieldKey) {
  const selected = getLogVisibleColumns(pageKey);
  if (selected.includes(fieldKey)) {
    if (selected.length === 1) return;
    setLogVisibleColumns(pageKey, selected.filter((item) => item !== fieldKey));
  } else {
    setLogVisibleColumns(pageKey, [...selected, fieldKey]);
  }
}

function removeLogColumn(pageKey, fieldKey) {
  const selected = getLogVisibleColumns(pageKey);
  if (selected.length === 1) return;
  setLogVisibleColumns(pageKey, selected.filter((item) => item !== fieldKey));
}

function renderRiskLogCell(row, key) {
  if (key === "seq") return row.id;
  if (key === "hitId") return row.hitId;
  if (key === "hitTime") return formatLogTime(row.hitTime);
  if (key === "scene") return row.scene;
  if (key === "riskBehavior") {
    const fullText = (row.riskBehaviors || []).join("、");
    const displayText = fullText || row.riskBehavior || "—";
    if (row.scene === "支付下单") {
      const extra = Math.max(0, (row.riskBehaviors || []).length - 1);
      return `<div class="risk-log-risk-cell" title="${escapeHtml(displayText)}"><span class="risk-log-text-main">${escapeHtml(row.riskBehavior || "—")}</span>${extra ? `<span class="risk-log-risk-more">+${extra}</span>` : ""}</div>`;
    }
    return `<div class="risk-log-risk-cell" title="${escapeHtml(displayText)}"><span class="risk-log-text-main truncate">${escapeHtml(displayText)}</span></div>`;
  }
  if (key === "riskScore") return row.riskScore ?? "--";
  if (key === "action") {
    return `<span class="risk-log-action-text ${row.tone}">${row.action}</span>`;
  }
  if (key === "deviceId") {
    return `<div class="risk-log-copyable"><button class="risk-log-cell-link truncate" type="button" data-portrait-open="device" data-value="${row.deviceId}" title="${row.deviceId}">${row.deviceId}</button><button class="risk-log-copy-btn" type="button" data-log-copy="${escapeHtml(row.deviceId)}">⧉</button></div>`;
  }
  if (key === "deviceModel") return row.deviceModel;
  if (key === "deviceFingerprint") return row.deviceFingerprint;
  if (key === "deviceBrand") return row.deviceBrand;
  if (key === "osVersion") return row.osVersion;
  if (key === "systemType") return row.systemType;
  if (key === "systemLanguage") return row.systemLanguage;
  if (key === "emulatorUsed") return row.emulatorUsed;
  if (key === "rooted") return row.rooted;
  if (key === "ip") {
    return `<div class="risk-log-copyable"><button class="risk-log-cell-link truncate" type="button" data-portrait-open="ip" data-value="${row.ip}" title="${row.ip}">${row.ip}</button><button class="risk-log-copy-btn" type="button" data-log-copy="${escapeHtml(row.ip)}">⧉</button></div>`;
  }
  if (key === "networkType") return row.networkType;
  if (key === "ipRegion") return row.ipRegion;
  if (key === "carrier") return row.carrier;
  if (key === "vpnUsed") return row.vpnUsed;
  if (key === "projectId") return row.projectId;
  if (key === "packageName") return row.packageName;
  if (key === "packageId") return row.packageId;
  if (key === "securityVersion") return row.securityVersion;
  if (key === "sdkVersion") return row.sdkVersion;
  if (key === "channel") return row.channel;
  if (key === "accountNo") {
    return `<div class="risk-log-copyable"><button class="risk-log-cell-link truncate" type="button" data-portrait-open="account" data-value="${row.accountNo}" title="${row.accountNo}">${row.accountNo}</button><button class="risk-log-copy-btn" type="button" data-log-copy="${escapeHtml(row.accountNo)}">⧉</button></div>`;
  }
  if (key === "account") {
    return row.account;
  }
  if (key === "sdkOrderId") return `<div class="risk-log-copyable"><span class="risk-log-text-main truncate" title="${row.sdkOrderId}">${row.sdkOrderId}</span><button class="risk-log-copy-btn" type="button" data-log-copy="${escapeHtml(row.sdkOrderId)}">⧉</button></div>`;
  if (key === "cpOrderId") return row.cpOrderId;
  if (key === "currency") return row.currency;
  if (key === "productName") return row.productName;
  if (key === "productId") return row.productId;
  if (key === "createOrderTime") return formatLogTime(row.createOrderTime);
  if (key === "payTime") return formatLogTime(row.payTime);
  if (key === "currencyAmount") return row.currencyAmount;
  if (key === "roleName") return row.roleName;
  if (key === "roleId") return row.roleId;
  if (key === "serverName") return row.serverName;
  if (key === "serverId") return row.serverId;
  if (key === "thirdOrderId") return row.thirdOrderId;
  if (key === "paymentMethod") return row.paymentMethod;
  if (key === "orderAmount") return row.orderAmount;
  if (key === "actualPaidAmount") return row.actualPaidAmount;
  if (key === "orderSource") return row.orderSource;
  if (key === "createOrderIp") return row.createOrderIp;
  if (key === "createOrderIpRegion") return row.createOrderIpRegion;
  if (key === "registerTime") return formatLogTime(row.registerTime);
  if (key === "registerIp") return row.registerIp;
  if (key === "registerIpRegion") return row.registerIpRegion;
  if (key === "registerMethod") return row.registerMethod;
  if (key === "loginTime") return formatLogTime(row.loginTime);
  if (key === "loginIp") return row.loginIp;
  if (key === "loginIpRegion") return row.loginIpRegion;
  if (key === "loginMethod") return row.loginMethod;
  return row[key] || "—";
}

function buildLogDetailSections(row) {
  if (row.scene === "支付下单") {
    return [
      {
        title: "基础信息",
        fields: [
          { key: "seq", label: "序号" },
          { key: "hitTime", label: "时间" },
          { key: "riskScore", label: "风险分" },
          { key: "action", label: "处置动作" },
          { key: "riskBehavior", label: "风险行为", full: true }
        ]
      },
      {
        title: "订单信息",
        fields: [
          { key: "sdkOrderId", label: "SDK订单号" },
          { key: "thirdOrderId", label: "三方订单号" },
          { key: "paymentMethod", label: "支付方式" },
          { key: "orderSource", label: "订单来源" },
          { key: "createOrderTime", label: "下单时间" },
          { key: "payTime", label: "支付时间" },
          { key: "orderAmount", label: "订单金额" },
          { key: "currency", label: "订单币种" },
          { key: "actualPaidAmount", label: "实际支付金额" },
          { key: "currency", label: "实际支付币种", valueKey: "currency" },
          { key: "createOrderIp", label: "下单IP" },
          { key: "createOrderIpRegion", label: "下单IP归属地" }
        ]
      },
      {
        title: "账号信息",
        fields: [
          { key: "accountNo", label: "账号ID" },
          { key: "account", label: "账号名" },
          { key: "loginTime", label: "登录时间" },
          { key: "loginMethod", label: "登录方式" },
          { key: "loginIp", label: "登录IP" },
          { key: "loginIpRegion", label: "登录IP归属地" },
          { key: "registerTime", label: "注册时间" },
          { key: "registerMethod", label: "注册方式" },
          { key: "registerIp", label: "注册IP" },
          { key: "registerIpRegion", label: "注册IP归属地" }
        ]
      },
      {
        title: "设备信息",
        fields: [
          { key: "deviceId", label: "设备ID" },
          { key: "deviceFingerprint", label: "设备指纹" },
          { key: "deviceBrand", label: "设备品牌" },
          { key: "deviceModel", label: "设备型号" },
          { key: "systemType", label: "系统类型" },
          { key: "osVersion", label: "操作系统版本" },
          { key: "systemLanguage", label: "设备语言" },
          { key: "networkType", label: "网络类型" },
          { key: "emulatorUsed", label: "是否模拟器" },
          { key: "vpnUsed", label: "是否VPN" },
          { key: "commonDeviceUsed", label: "是否常用设备" },
          { key: "commonLoginRegionUsed", label: "是否常用登录地" }
        ]
      },
      {
        title: "应用信息",
        fields: [
          { key: "projectId", label: "项目ID" },
          { key: "channel", label: "渠道ID" },
          { key: "packageName", label: "包名" },
          { key: "packageId", label: "包ID" },
          { key: "securityVersion", label: "安全组件版本号" },
          { key: "sdkVersion", label: "SDK版本号" },
          { key: "gameVersion", label: "游戏版本号" }
        ]
      }
    ];
  }
  return [
    {
      title: "基础信息",
      fields: [
        { key: "seq", label: "序号" },
        { key: "hitTime", label: "时间" },
        { key: "riskScore", label: "风险分" },
        { key: "action", label: "处置动作" },
        { key: "riskBehavior", label: "风险行为", full: true }
      ]
    },
    {
      title: "账号信息",
      fields: [
        { key: "accountNo", label: "账号ID" },
        { key: "account", label: "账号名" },
        { key: "loginTime", label: "登录时间" },
        { key: "loginMethod", label: "登录方式" },
        { key: "loginIp", label: "登录IP" },
        { key: "loginIpRegion", label: "登录IP归属地" },
        { key: "registerTime", label: "注册时间" },
        { key: "registerMethod", label: "注册方式" },
        { key: "registerIp", label: "注册IP" },
        { key: "registerIpRegion", label: "注册IP归属地" }
      ]
    },
    {
      title: "设备信息",
      fields: [
        { key: "deviceId", label: "设备ID" },
        { key: "deviceFingerprint", label: "设备指纹" },
        { key: "deviceBrand", label: "设备品牌" },
        { key: "deviceModel", label: "设备型号" },
        { key: "systemType", label: "系统类型" },
        { key: "osVersion", label: "操作系统版本" },
        { key: "systemLanguage", label: "设备语言" },
        { key: "networkType", label: "网络类型" },
        { key: "emulatorUsed", label: "是否模拟器" },
        { key: "vpnUsed", label: "是否VPN" },
        { key: "commonDeviceUsed", label: "是否常用设备" },
        { key: "commonLoginRegionUsed", label: "是否常用登录地" }
      ]
    },
    {
      title: "应用信息",
      fields: [
        { key: "projectId", label: "项目ID" },
        { key: "channel", label: "渠道ID" },
        { key: "packageName", label: "包名" },
        { key: "packageId", label: "包ID" },
        { key: "securityVersion", label: "安全组件版本号" },
        { key: "sdkVersion", label: "SDK版本号" },
        { key: "gameVersion", label: "游戏版本号" }
      ]
    }
  ];
}

function canCopyLogDetailField(fieldKey, row) {
  return !["—", "", null, undefined].includes(row[fieldKey]) && [
    "riskBehavior",
    "deviceId",
    "deviceFingerprint",
    "ip",
    "registerIp",
    "loginIp",
    "accountNo",
    "account",
    "sdkOrderId",
    "cpOrderId",
    "productName",
    "productId",
    "roleName",
    "roleId",
    "serverName",
    "serverId",
    "thirdOrderId",
    "createOrderIp"
  ].includes(fieldKey);
}

function renderLogDetailFieldValue(row, field) {
  const rawValueKey = field.valueKey || field.key;
  const value =
    field.key === "seq"
      ? row.id
      : field.key === "riskBehavior"
        ? (row.riskBehaviors || []).join("、")
        : field.key === "hitTime"
          ? formatLogTime(row.hitTime)
          : field.key === "registerTime" || field.key === "loginTime" || field.key === "createOrderTime" || field.key === "payTime"
            ? formatLogTime(row[rawValueKey])
            : row[rawValueKey] || "—";
  const copyText = field.key === "riskBehavior" ? (row.riskBehaviors || []).join("、") : field.key === "seq" ? row.id : row[rawValueKey];
  return `
    <strong class="log-detail-field-value${field.full ? " full" : ""}">
      <span>${escapeHtml(String(value))}</span>
      ${
        canCopyLogDetailField(field.key, row)
          ? `<button class="log-detail-copy-btn" type="button" data-copy-text="${escapeHtml(String(copyText))}" aria-label="复制${field.label}">⧉</button>`
          : ""
      }
    </strong>
  `;
}

function getExpandedPortraitLogs(profile, total = 1244, logTab = state.portraitLogTab || profile.defaultLogTab || "user") {
  const sourceLogs = Array.isArray(profile.logs) ? profile.logs : profile.logs?.[logTab] || profile.logs?.user || [];
  return Array.from({ length: total }, (_, index) => {
    const seed = sourceLogs[index % sourceLogs.length];
    const accountValue = `310003_${String(123123123123123 + index).slice(0, 15)}`;
    return {
      ...seed,
      time: seed.time ? shiftDateTime(seed.time, index * 3) : undefined,
      createOrderTime: seed.createOrderTime ? shiftDateTime(seed.createOrderTime, index * 3) : undefined,
      deviceId: appendIdSuffix(seed.deviceId, index),
      ip: shiftIp(seed.ip, index),
      actionType: seed.actionType || (index % 6 === 0 ? "注册" : "登录"),
      account: seed.account === "-" ? "-" : accountValue,
      accountDesc: seed.account === "-" ? "" : "账号ID"
    };
  });
}

function renderPortraitInfoValue(item) {
  if (item.query) {
    return renderPortraitJumpLabel(item.query.mode, item.query.value || item.value);
  }
  const toneClass = item.tone ? ` ${item.tone}` : "";
  const detail = item.detail ? `<span class="portrait-info-detail">${escapeHtml(item.detail)}</span>` : "";
  return `<span class="portrait-info-value-text${toneClass}">${escapeHtml(item.value)}</span>${detail}`;
}

function renderPortraitInfoRows(profile) {
  return `
    <div class="portrait-info-layout portrait-info-layout-${profile.focusMode}">
      ${profile.infoRows
        .map(
          (row, index) => `
            <div class="portrait-info-row portrait-info-row-${index + 1} cols-${row.length}">
              ${row
                .map(
                  (item) => `
                    <div class="portrait-info-item">
                      <div class="portrait-info-label">${item.label}</div>
                      <div class="portrait-info-value">${renderPortraitInfoValue(item)}</div>
                    </div>
                  `
                )
                .join("")}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPortraitRelationNode(node, interactive = false, highlighted = false) {
  const tag = interactive ? "button" : "div";
  const attrs = interactive
    ? `type="button" data-relation-expand-node="${node.id}"`
    : "";
  return `
    <${tag}
      class="portrait-related-node portrait-node-${node.kind} ${interactive ? "interactive" : ""} ${highlighted ? "active" : ""}"
      ${attrs}
      style="left:${node.x}%;top:${node.y}%;"
    >
      <span class="portrait-node-icon">${node.kind === "ip" ? "◎" : node.kind === "device" ? "▣" : "◉"}</span>
      <span class="portrait-node-main">${escapeHtml(node.main)}</span>
      <span class="portrait-node-sub">${escapeHtml(node.sub)}</span>
    </${tag}>
  `;
}

function renderPortraitLogTable(profile, rows, config) {
  const activeLogTab = state.portraitLogTab || profile.defaultLogTab || "user";
  if (activeLogTab === "payment") {
    return `
      <table class="portrait-log-table portrait-log-table-payment">
        <thead>
          <tr>
            <th>订单号</th>
            <th>创单时间</th>
            <th>支付金额</th>
            <th>支付方式</th>
            <th>充值游戏</th>
            <th>订单状态</th>
            <th>设备信息</th>
            <th>IP信息</th>
            <th>账号信息</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (item, index) => `
                <tr>
                  <td><div class="portrait-cell-ellipsis">${item.orderId}</div></td>
                  <td><div class="portrait-cell-ellipsis">${item.createOrderTime}</div></td>
                  <td><div class="portrait-cell-ellipsis">${item.orderAmount}</div></td>
                  <td><div class="portrait-cell-ellipsis">${item.paymentMethod}</div></td>
                  <td><div class="portrait-cell-ellipsis">${item.gameName}</div></td>
                  <td><span class="portrait-state-pill ${item.orderStatusTone}">${item.orderStatus}</span></td>
                  <td><div class="portrait-cell-ellipsis-group">${renderPortraitJumpLabel("device", item.deviceId, item.deviceDesc)}</div></td>
                  <td><div class="portrait-cell-ellipsis-group">${renderPortraitJumpLabel("ip", item.ip, item.ipDesc)}</div></td>
                  <td><div class="portrait-cell-ellipsis-group">${renderPortraitJumpLabel("account", item.account, item.accountDesc)}</div></td>
                  <td><button class="link-btn" type="button" data-portrait-log="${index}">详情</button></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }
  if (profile.logType === "device") {
    return `
      <table class="portrait-log-table">
        <thead>
          <tr>
            <th>时间</th>
            <th>操作类型</th>
            <th>账号信息</th>
            <th>IP 信息</th>
            <th>风险信息</th>
            <th>结果</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (item, index) => `
                <tr>
                  <td>${item.time}</td>
                  <td>${item.actionType}</td>
                  <td>${item.account === "-" ? "-" : renderPortraitJumpLabel("account", item.account, item.accountDesc)}</td>
                  <td>${renderPortraitJumpLabel("ip", item.ip, item.ipDesc)}</td>
                  <td>${item.risk}</td>
                  <td><span class="portrait-state-pill ${item.resultTone}">${item.result}</span></td>
                  <td><button class="link-btn" type="button" data-portrait-log="${index}">详情</button></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }
  if (profile.logType === "ip") {
    return `
      <table class="portrait-log-table">
        <thead>
          <tr>
            <th>时间</th>
            <th>操作类型</th>
            <th>账号信息</th>
            <th>设备信息</th>
            <th>风险信息</th>
            <th>结果</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (item, index) => `
                <tr>
                  <td>${item.time}</td>
                  <td>${item.actionType}</td>
                  <td>${item.account === "-" ? "-" : renderPortraitJumpLabel("account", item.account, item.accountDesc)}</td>
                  <td>${renderPortraitJumpLabel("device", item.deviceId, item.deviceDesc)}</td>
                  <td>${item.risk}</td>
                  <td><span class="portrait-state-pill ${item.resultTone}">${item.result}</span></td>
                  <td><button class="link-btn" type="button" data-portrait-log="${index}">详情</button></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    `;
  }
  return `
    <table class="portrait-log-table">
      <thead>
        <tr>
          <th>登录时间</th>
          <th>设备信息</th>
          <th>IP 信息</th>
          <th>风险信息</th>
          <th>登录结果</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (item, index) => `
              <tr>
                <td>${item.time}</td>
                <td>${renderPortraitJumpLabel("device", item.deviceId, item.deviceDesc)}</td>
                <td>${renderPortraitJumpLabel("ip", item.ip, item.ipDesc)}</td>
                <td>${item.risk}</td>
                <td><span class="portrait-state-pill ${item.resultTone}">${item.result}</span></td>
                <td><button class="link-btn" type="button" data-portrait-log="${index}">详情</button></td>
              </tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function buildPortraitResultMarkup(profile, config, rows, total, pagerItems, currentPage, pageCount, pageSize, closeId) {
  const activeLogTab = state.portraitLogTab || profile.defaultLogTab || "user";
  return `
    <section class="portrait-breadcrumb-bar portrait-query-result-bar">
      <div class="portrait-query-current">
        <span>${profile.headerPrefix}</span>
        <strong>${escapeHtml(profile.headerValue)}</strong>
      </div>
      <button class="close-btn portrait-inline-close" type="button" id="${closeId}">×</button>
    </section>

    <section class="portrait-info-card portrait-result-card">
      <div class="portrait-card-title"><span class="section-accent"></span><span>${profile.infoTitle}</span></div>
      ${renderPortraitInfoRows(profile)}
    </section>

    <section class="portrait-tag-card portrait-result-card">
      <div class="portrait-card-title"><span class="section-accent"></span><span>标签信息</span></div>
      <div class="portrait-tag-wrap portrait-tag-wrap-compact">
        ${profile.tags.items
          .map((tag) => `<span class="portrait-tag tone-${tag.tone}">${tag.label}</span>`)
          .join("")}
        <span class="portrait-tag tone-blue">+${profile.tags.overflow}</span>
      </div>
    </section>

    <section class="portrait-relation-card portrait-result-card">
      <div class="portrait-card-title-row">
        <div class="portrait-card-title"><span class="section-accent"></span><span>${profile.relations.title}</span></div>
        <button class="portrait-expand-btn" type="button" aria-label="放大关系图" data-portrait-relation-expand="open">⤢</button>
      </div>
      <div class="portrait-relation-meta">
        ${profile.relations.counts.map((item) => `${item.label}: <strong>${item.value}</strong>`).join("<span class=\"portrait-relation-divider\"></span>")}
      </div>
      <div class="portrait-graph-stage">
        <div class="portrait-graph-center portrait-graph-center-btn portrait-node-${profile.relations.center.kind}">
          <div class="portrait-node-avatar portrait-node-avatar-${profile.relations.center.kind}">${profile.relations.center.kind === "ip" ? "◎" : profile.relations.center.kind === "device" ? "▣" : "◉"}</div>
          <div class="portrait-node-chip portrait-node-chip-center">
            <div class="portrait-node-main">${escapeHtml(profile.relations.center.main)}</div>
            <div class="portrait-node-sub">${escapeHtml(profile.relations.center.sub)}</div>
          </div>
        </div>
        ${profile.relations.nodes.map((node) => renderPortraitRelationNode(node)).join("")}
        <svg class="portrait-graph-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          ${profile.relations.nodes.map((item) => `<line x1="50" y1="50" x2="${item.x + 4}" y2="${item.y + 4}" />`).join("")}
        </svg>
      </div>
      <div class="portrait-graph-note">点击任意节点，动态展开关联信息，风险关系一目了然</div>
    </section>

    <section class="portrait-log-card portrait-result-card">
      <div class="portrait-card-title-row">
        <div class="portrait-card-title"><span class="section-accent"></span><span>${profile.logTitle || config.resultLabel}</span></div>
        <button class="link-btn" type="button">${config.exportText}</button>
      </div>
      <div class="portrait-log-tabs">
        <button class="portrait-log-tab ${activeLogTab === "user" ? "active" : ""}" type="button" data-portrait-log-tab="user">登录注册日志</button>
        <button class="portrait-log-tab ${activeLogTab === "payment" ? "active" : ""}" type="button" data-portrait-log-tab="payment">下单支付日志</button>
      </div>
      <div class="portrait-log-table-wrap">
        ${renderPortraitLogTable(profile, rows, config, activeLogTab)}
      </div>
      <div class="portrait-pagination">
        <div class="portrait-pagination-meta">
          <span>共 ${formatNumber(total)} 条记录</span>
          <span>每页显示</span>
          <button class="filter-btn mini" type="button">${pageSize} <span>⌄</span></button>
        </div>
        <div class="portrait-pagination-controls">
          <button class="pager-btn" type="button" data-portrait-page-nav="first" ${currentPage === 1 ? "disabled" : ""}>‹‹</button>
          <button class="pager-btn" type="button" data-portrait-page-nav="prev" ${currentPage === 1 ? "disabled" : ""}>‹</button>
          ${pagerItems
            .map((page) =>
              page === "..."
                ? `<span class="log-ellipsis">...</span>`
                : `<button class="portrait-page-btn ${page === currentPage ? "active" : ""}" type="button" data-portrait-page="${page}">${page}</button>`
            )
            .join("")}
          <button class="pager-btn" type="button" data-portrait-page-nav="next" ${currentPage === pageCount ? "disabled" : ""}>›</button>
          <button class="pager-btn" type="button" data-portrait-page-nav="last" ${currentPage === pageCount ? "disabled" : ""}>››</button>
        </div>
      </div>
    </section>
  `;
}

function buildPortraitRelationMap(profile) {
  const rootId = `root-${profile.focusMode}`;
  const summaryByMode = {
    account: [
      { label: "包含账号", value: "10个" },
      { label: "包含设备", value: "20个" },
      { label: "包含IP", value: "10个" }
    ],
    device: [
      { label: "包含账号", value: "10个" },
      { label: "包含设备", value: "10个" },
      { label: "包含IP", value: "20个" }
    ],
    ip: [
      { label: "包含账号", value: "10个" },
      { label: "包含设备", value: "20个" },
      { label: "包含IP", value: "10个" }
    ]
  };
  const nodesByMode = {
    account: [
      { id: rootId, parentId: null, depth: 0, kind: "account", main: profile.headerValue, sub: "当前账号", x: 28, y: 48 },
      { id: "a-1", parentId: rootId, depth: 1, kind: "device", main: "设备ID DEV_X88", sub: "213102391301329123", x: 18, y: 26 },
      { id: "a-2", parentId: rootId, depth: 1, kind: "ip", main: "网络IP 182.12.44.22", sub: "182.12.44.22", x: 20, y: 76 },
      { id: "a-3", parentId: rootId, depth: 1, kind: "device", main: "设备ID DEV_X105", sub: "213102391301329123", x: 34, y: 16 },
      { id: "a-4", parentId: rootId, depth: 1, kind: "ip", main: "网络IP 223.116.168.187", sub: "223.116.168.187", x: 44, y: 48 },
      { id: "a-5", parentId: "a-4", depth: 2, kind: "device", main: "设备ID DEV_X104", sub: "213102391301329123", x: 58, y: 36 },
      { id: "a-6", parentId: "a-4", depth: 2, kind: "account", main: "账号 310003_123123", sub: "账号ID", x: 72, y: 48 },
      { id: "a-7", parentId: "a-5", depth: 3, kind: "ip", main: "网络IP 221.12.4.55", sub: "221.12.4.55", x: 72, y: 22 },
      { id: "a-8", parentId: "a-5", depth: 3, kind: "ip", main: "网络IP 221.13.4.55", sub: "221.13.4.55", x: 66, y: 64 },
      { id: "a-9", parentId: "a-7", depth: 4, kind: "account", main: "账号 310004_001", sub: "账号ID", x: 84, y: 26 },
      { id: "a-10", parentId: "a-9", depth: 5, kind: "device", main: "设备ID DEV_X201", sub: "213102391301329111", x: 92, y: 16 }
    ],
    device: [
      { id: rootId, parentId: null, depth: 0, kind: "device", main: profile.headerValue, sub: "当前设备", x: 28, y: 48 },
      { id: "d-1", parentId: rootId, depth: 1, kind: "account", main: "账号 310003_123123", sub: "账号ID", x: 18, y: 30 },
      { id: "d-2", parentId: rootId, depth: 1, kind: "ip", main: "网络IP 223.116.168.187", sub: "223.116.168.187", x: 34, y: 18 },
      { id: "d-3", parentId: rootId, depth: 1, kind: "ip", main: "网络IP 182.12.44.22", sub: "182.12.44.22", x: 34, y: 76 },
      { id: "d-4", parentId: rootId, depth: 1, kind: "account", main: "账号 310000_312313", sub: "账号ID", x: 46, y: 48 },
      { id: "d-5", parentId: "d-4", depth: 2, kind: "device", main: "设备ID DEV_X104", sub: "当前设备簇", x: 60, y: 42 },
      { id: "d-6", parentId: "d-5", depth: 3, kind: "ip", main: "网络IP 221.12.4.55", sub: "221.12.4.55", x: 74, y: 22 },
      { id: "d-7", parentId: "d-5", depth: 3, kind: "ip", main: "网络IP 221.13.4.55", sub: "221.13.4.55", x: 70, y: 64 },
      { id: "d-8", parentId: "d-5", depth: 3, kind: "account", main: "账号 310003_001", sub: "账号ID", x: 82, y: 44 },
      { id: "d-9", parentId: "d-8", depth: 4, kind: "device", main: "设备ID DEV_X205", sub: "设备ID", x: 92, y: 28 },
      { id: "d-10", parentId: "d-9", depth: 5, kind: "ip", main: "网络IP 203.12.5.8", sub: "203.12.5.8", x: 94, y: 56 }
    ],
    ip: [
      { id: rootId, parentId: null, depth: 0, kind: "ip", main: profile.headerValue, sub: "当前IP", x: 28, y: 48 },
      { id: "i-1", parentId: rootId, depth: 1, kind: "account", main: "账号 310003_123123", sub: "账号ID", x: 18, y: 30 },
      { id: "i-2", parentId: rootId, depth: 1, kind: "device", main: "设备ID DEV_X88", sub: "213102391301329123", x: 34, y: 18 },
      { id: "i-3", parentId: rootId, depth: 1, kind: "device", main: "设备ID DEV_X104", sub: "213102391301329123", x: 34, y: 76 },
      { id: "i-4", parentId: rootId, depth: 1, kind: "account", main: "账号 310000_312313", sub: "账号ID", x: 46, y: 48 },
      { id: "i-5", parentId: "i-4", depth: 2, kind: "device", main: "设备ID DEV_X104", sub: "设备聚合", x: 60, y: 38 },
      { id: "i-6", parentId: "i-5", depth: 3, kind: "ip", main: "网络IP 221.12.4.55", sub: "221.12.4.55", x: 74, y: 20 },
      { id: "i-7", parentId: "i-5", depth: 3, kind: "ip", main: "网络IP 221.13.4.55", sub: "221.13.4.55", x: 68, y: 64 },
      { id: "i-8", parentId: "i-5", depth: 3, kind: "account", main: "账号 310003_001", sub: "账号ID", x: 82, y: 46 },
      { id: "i-9", parentId: "i-8", depth: 4, kind: "device", main: "设备ID DEV_X206", sub: "设备ID", x: 92, y: 30 },
      { id: "i-10", parentId: "i-9", depth: 5, kind: "ip", main: "网络IP 203.12.5.9", sub: "203.12.5.9", x: 94, y: 58 }
    ]
  };
  return {
    headerPrefix: profile.headerPrefix,
    headerValue: profile.headerValue,
    summary: summaryByMode[profile.focusMode] || summaryByMode.account,
    rootId,
    highlightedId: rootId,
    expandedIds: [rootId],
    nodes: nodesByMode[profile.focusMode] || nodesByMode.account
  };
}

function getRelationNodeChildren(mapState, nodeId) {
  return mapState.nodes.filter((item) => item.parentId === nodeId);
}

function isRelationNodeVisible(mapState, node) {
  if (!node.parentId) return true;
  let current = node;
  while (current.parentId) {
    if (!mapState.expandedIds.includes(current.parentId)) return false;
    current = mapState.nodes.find((item) => item.id === current.parentId);
    if (!current) return false;
  }
  return true;
}

function renderPortraitRelationMapOverlay(profile) {
  const mapState = state.portraitRelationMap;
  if (!mapState) return "";
  const visibleNodes = mapState.nodes.filter((node) => isRelationNodeVisible(mapState, node));
  const summaryCounts = {
    account: visibleNodes.filter((node) => node.kind === "account").length,
    device: visibleNodes.filter((node) => node.kind === "device").length,
    ip: visibleNodes.filter((node) => node.kind === "ip").length
  };
  const rootNode = mapState.nodes.find((node) => node.id === mapState.rootId);
  return `
    <div class="portrait-map-overlay" id="portrait-map-overlay">
      <div class="portrait-map-shell">
        <div class="portrait-map-head">
          <div class="portrait-query-current">
            <span>${mapState.headerPrefix}</span>
            <strong>${escapeHtml(mapState.headerValue)}</strong>
          </div>
          <button class="close-btn portrait-inline-close" type="button" id="portrait-map-close">×</button>
        </div>
        <div class="portrait-map-card">
          <div class="portrait-card-title-row">
            <div class="portrait-card-title"><span class="section-accent"></span><span>关联信息</span></div>
            <button class="portrait-expand-btn portrait-collapse-btn" type="button" id="portrait-map-shrink" aria-label="收起关系图">↙</button>
          </div>
          <div class="portrait-relation-meta portrait-relation-meta-wide">
            包含账号: <strong>${summaryCounts.account}个</strong>
            <span class="portrait-relation-divider"></span>
            包含设备: <strong>${summaryCounts.device}个</strong>
            <span class="portrait-relation-divider"></span>
            包含IP: <strong>${summaryCounts.ip}个</strong>
          </div>
          <div class="portrait-map-stage">
            <button
              class="portrait-graph-center portrait-graph-center-btn portrait-node-${rootNode.kind}"
              type="button"
              data-relation-expand-node="${rootNode.id}"
              style="left:${rootNode.x}%;top:${rootNode.y}%;"
            >
              <div class="portrait-node-avatar portrait-node-avatar-${rootNode.kind}">${rootNode.kind === "ip" ? "◎" : rootNode.kind === "device" ? "▣" : "◉"}</div>
              <div class="portrait-node-chip portrait-node-chip-center">
                <div class="portrait-node-main">${escapeHtml(rootNode.main)}</div>
                <div class="portrait-node-sub">${escapeHtml(rootNode.sub)}</div>
              </div>
            </button>
            ${visibleNodes
              .filter((node) => node.id !== mapState.rootId)
              .map((node) => renderPortraitRelationNode(node, true, node.id === mapState.highlightedId))
              .join("")}
            <svg class="portrait-graph-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              ${visibleNodes
                .filter((node) => node.parentId)
                .map((node) => {
                  const parent = mapState.nodes.find((item) => item.id === node.parentId);
                  return parent ? `<line x1="${parent.x}" y1="${parent.y}" x2="${node.x}" y2="${node.y}" />` : "";
                })
                .join("")}
            </svg>
          </div>
          <div class="portrait-graph-note">提示：点击各个节点可展开详情，最大允许穿透5层</div>
        </div>
      </div>
    </div>
  `;
}

function findStrategyByLogRow(row) {
  const bridge = {
    "账号登录": {
      异地登录: "新登录环境防护",
      高频请求限制: "登录接口防刷",
      恶意请求拦截: "登录接口防刷",
      高危登录风险: "限制暴力破解密码",
      黑名单IP拦截: "限制暴力破解密码"
    },
    "支付下单": {
      异常金额支付拦截: "异常金额支付拦截",
      高频支付验证: "高频支付验证",
      海外IP支付校验: "海外IP支付校验"
    }
  };
  const targetName = bridge[row.scene]?.[row.strategy];
  return (
    strategyStore.find((item) => item.name === targetName) ||
    strategyStore.find((item) => item.scene === row.scene && (row.strategy.includes(item.name) || item.name.includes(row.strategy))) ||
    strategyStore.find((item) => row.strategy.includes(item.name) || item.name.includes(row.strategy))
  );
}

function requestCloseModal() {
  if (state.modalKind === "config" && state.form && !state.form.readOnly && snapshotStrategy(state.form) !== state.formSnapshot) {
    const confirmed = window.confirm("当前策略有未保存修改，确认关闭吗？");
    if (!confirmed) return;
  }
  closeModal();
}


function buildStatsPresentation(strategy) {
  const stats = strategy.stats;
  const formatShare = (part, total) => `${((part / Math.max(total, 1)) * 100).toFixed(2)}%`;
  const seriesMap = {
    封禁: { label: "封禁次数", color: "#ef4444", values: stats.blocked },
    登录拦截: { label: "登录拦截", color: "#ef4444", values: stats.blocked },
    注册拦截: { label: "注册拦截", color: "#ef4444", values: stats.blocked },
    支付拦截: { label: "支付拦截", color: "#ef4444", values: stats.blocked },
    验证码拦截: { label: "验证码拦截", color: "#7c3aed", values: stats.slider },
    验证码验证: { label: "验证码验证", color: "#7c3aed", values: stats.slider },
    滑块验证: { label: "滑块验证", color: "#7c3aed", values: stats.slider },
    标记风险: { label: "风险标记", color: "#f59e0b", values: stats.risk }
  };

  const actionSeries = [...new Set(strategy.rules.filter((rule) => rule.enabled).map((rule) => rule.action.type))]
    .map((type) => seriesMap[type])
    .filter(Boolean);
  const displaySeries = actionSeries.length
    ? actionSeries.slice(0, 3)
    : [seriesMap["标记风险"], seriesMap["验证码验证"], seriesMap[sceneActionMap[strategy.scene]]];

  return {
    summary: [
      {
        icon: "pulse",
        label: "风控请求数/占比",
        value: formatNumber(sum(stats.triggered)),
        note: `占比 ${formatShare(sum(stats.triggered), sum(stats.business))}`
      },
      {
        icon: "warn",
        label: "风控设备数/占比",
        value: formatNumber(sum(stats.riskDevices)),
        note: `占比 ${formatShare(sum(stats.riskDevices), sum(stats.totalDevices))}`
      },
      {
        icon: "shield",
        label: "风控账号数/占比",
        value: formatNumber(sum(stats.riskAccounts)),
        note: `占比 ${formatShare(sum(stats.riskAccounts), sum(stats.totalAccounts))}`
      },
      {
        icon: "flag",
        label: "风控IP数/占比",
        value: formatNumber(sum(stats.riskIps)),
        note: `占比 ${formatShare(sum(stats.riskIps), sum(stats.totalIps))}`
      }
    ],
    actionSeries: displaySeries
  };
}

function buildStatsVersionCompare(strategy) {
  const stats = strategy.stats;
  const compareKey = state.statsCompareVersion || stats.compareOptions?.[0]?.key || "";
  const compareMeta = stats.compareOptions?.find((item) => item.key === compareKey) || null;
  const compareStats = compareMeta ? stats.compareData?.[compareKey] : null;
  if (!compareMeta || !compareStats) return null;
  const currentTriggered = sum(stats.triggered);
  const currentBlocked = sum(stats.blocked);
  const compareTriggered = sum(compareStats.triggered);
  const compareBlocked = sum(compareStats.blocked);
  const triggerDiff = currentTriggered - compareTriggered;
  const blockedDiff = currentBlocked - compareBlocked;
  return {
    key: compareKey,
    currentVersion: stats.currentVersion,
    compareLabel: compareMeta.label,
    publishedAt: compareMeta.publishedAt,
    changedRules: compareStats.changedRules,
    triggerDiff,
    blockedDiff,
    notes: compareStats.notes || []
  };
}

function buildBehaviorTrend(level) {
  const labels = [];
  const today = new Date();
  const counts = [];
  for (let offset = 6; offset >= 0; offset -= 1) {
    const target = new Date(today);
    target.setDate(today.getDate() - offset);
    const dateKey = `${target.getFullYear()}-${String(target.getMonth() + 1).padStart(2, "0")}-${String(target.getDate()).padStart(2, "0")}`;
    labels.push(`${String(target.getMonth() + 1).padStart(2, "0")}-${String(target.getDate()).padStart(2, "0")}`);
    counts.push(level.records.filter((item) => item.triggeredAt.startsWith(dateKey)).length);
  }
  return { labels, counts };
}

function buildBehaviorSceneMix(level) {
  const sceneMap = level.records.reduce((bucket, item) => {
    const scene = item.strategy.includes("注册") ? "注册场景" : "登录场景";
    bucket[scene] = (bucket[scene] || 0) + 1;
    return bucket;
  }, {});
  return Object.entries(sceneMap).map(([label, value]) => ({ label, value }));
}

function buildPortraitRiskConclusion(profile) {
  const riskLogs = profile.logs.filter((item) => item.risk !== "无");
  const deviceCount = new Set(profile.logs.map((item) => item.primary)).size;
  const ipCount = new Set(profile.logs.map((item) => item.ip)).size;
  const level = riskLogs.length >= 2 || profile.tags.length >= 4 ? "中高风险" : "中风险";
  return {
    level,
    summary: "该对象近期存在多设备切换、跨地域访问与风险标签叠加命中，建议优先关注扩散链路。",
    evidence: [`命中风险日志 ${riskLogs.length} 条`, `关联设备 ${deviceCount} 台`, `关联IP ${ipCount} 个`, `风险标签 ${profile.tags.length} 个`],
    actions: ["查看高风险日志", "查看拦截日志", "查看关联策略日志"]
  };
}

function ensureActiveRule(form) {
  if (!form.rules.length) {
    form.rules.push(createRule("规则 1", form.scene, [createCondition()]));
  }
  if (!form.activeRuleId || !form.rules.some((rule) => rule.id === form.activeRuleId)) {
    form.activeRuleId = form.rules[0].id;
  }
}

function renderApp() {
  if (state.currentPage === "user-risk-engine-b" || state.currentPage === "user-risk-engine-c" || state.currentPage === "risk-engine") {
    state.currentPage = "user-risk-engine";
  }
  if (state.currentPage === "payment-risk-engine-b") {
    state.currentPage = "payment-risk-engine";
  }
  renderSideNav();
  renderHero();
  renderPage();
  renderOverlay();
}

function renderSideNav() {
  sideNav.innerHTML = navItems
    .map((item) => {
      if (!item.children) {
        return `
          <button class="nav-item ${state.currentPage === item.page ? "active" : ""}" data-nav-page="${item.page}" type="button">
            <span class="nav-icon">${item.icon}</span>
            <span class="nav-label">${item.label}</span>
            <span class="nav-arrow">›</span>
          </button>
        `;
      }

      const hasActiveChild = item.children.some((child) => child.page === state.currentPage);
      return `
        <div class="nav-item-group">
          <button class="nav-item ${hasActiveChild ? "active" : ""}" data-nav-page="${item.children[0].page}" type="button">
            <span class="nav-icon">${item.icon}</span>
            <span class="nav-label">${item.label}</span>
            <span class="nav-arrow">⌃</span>
          </button>
          <div class="nav-subgroup">
            ${item.children
              .map(
                (child) => `
                  <button class="nav-subitem ${state.currentPage === child.page ? "active" : ""}" data-nav-page="${child.page}" type="button">
                    <span class="nav-label">${child.label}</span>
                  </button>
                `
              )
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");

  sideNav.querySelectorAll("[data-nav-page]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextPage = button.dataset.navPage;
      state.currentPage = nextPage === "user-risk-engine-b" || nextPage === "user-risk-engine-c"
        ? "user-risk-engine"
        : nextPage === "payment-risk-engine-b"
          ? "payment-risk-engine"
          : nextPage;
      if (state.currentPage === "user-risk-engine") {
        state.userRiskWorkbenchBMode = "view";
        state.userRiskWorkbenchDraft = null;
        state.userRiskWorkbenchCDraft = null;
        state.userRiskWorkbenchCMode = "view";
        state.userRiskWorkbenchCSourceId = "";
        state.userRiskWorkbenchCSearch = "";
        state.userRiskWorkbenchCNodeDragging = null;
        state.userRiskWorkbenchCAxisHintVisible = false;
        state.userRiskWorkbenchCScoreHintVisible = false;
        state.userRiskWorkbenchCActiveBlockId = "";
        state.userRiskWorkbenchCBehaviorModalDraft = null;
        state.userRiskWorkbenchCBehaviorModalSearch = "";
      }
      if (state.currentPage === "payment-risk-engine") {
        state.paymentRiskWorkbenchBMode = "view";
        state.paymentRiskWorkbenchDraft = null;
        state.paymentRiskWorkbenchCDraft = null;
        state.paymentRiskWorkbenchCMode = "view";
        state.paymentRiskWorkbenchCSourceId = "";
        state.paymentRiskWorkbenchCBehaviorModalDraft = null;
        state.paymentRiskWorkbenchCBehaviorModalSearch = "";
        state.paymentRiskWorkbenchCNodeDragging = null;
        state.paymentRiskWorkbenchCAxisHintVisible = false;
        state.paymentRiskWorkbenchCActiveBlockId = "";
      }
      if (state.currentPage === "login-query" || state.currentPage === "payment-query" || state.currentPage === "multi-query") {
        resetPortraitState();
      }
      renderApp();
    });
  });
}

function renderHero() {
  const copy = heroCopy[state.currentPage] || heroCopy.overview;
  const isOverviewPage = state.currentPage === "login-overview" || state.currentPage === "payment-overview";
  const isLogPage = state.currentPage === "login-log" || state.currentPage === "payment-log";
  const isStandaloneWorkbenchEditor =
    state.currentPage === "user-risk-engine" ||
    state.currentPage === "user-risk-engine-b" ||
    state.currentPage === "user-risk-engine-c" ||
    state.currentPage === "payment-risk-engine" ||
    state.currentPage === "payment-risk-engine-b";
  heroCard.classList.toggle("hero-card-compact", isOverviewPage);
  heroCard.classList.toggle("hero-card-hidden", isOverviewPage || isLogPage || isStandaloneWorkbenchEditor);
  pageContent.classList.toggle("overview-page-content", isOverviewPage);
  if (isOverviewPage || isLogPage || isStandaloneWorkbenchEditor) {
    heroCard.innerHTML = "";
    return;
  }
  heroCard.innerHTML = `
    <h1>${copy.title}</h1>
    <p>${copy.desc}</p>
  `;
}

function renderPage() {
  if (state.currentPage === "payment-risk-behavior") {
    state.currentPage = "user-risk-behavior";
    if (state.behaviorCardTab === "全部风险行为") {
      state.behaviorCardTab = "支付风险行为";
    }
  }
  if (state.currentPage === "login-overview") {
    renderLoginOverviewPage();
    return;
  }
  if (state.currentPage === "payment-overview") {
    renderPaymentOverviewPage();
    return;
  }
  if (state.currentPage === "login-log") {
    renderLoginLogPage();
    return;
  }
  if (state.currentPage === "payment-log") {
    renderPaymentLogPage();
    return;
  }
  if (state.currentPage === "risk-engine" || state.currentPage === "user-risk-engine" || state.currentPage === "user-risk-engine-b" || state.currentPage === "user-risk-engine-c") {
    state.currentPage = "user-risk-engine";
    renderUserRiskStrategyCPage();
    return;
  }
  if (state.currentPage === "payment-risk-engine" || state.currentPage === "payment-risk-engine-b") {
    state.currentPage = "payment-risk-engine";
    renderPaymentRiskStrategyCPage();
    return;
  }
  if (state.currentPage === "user-tags") {
    renderTagSections();
    return;
  }
  if (state.currentPage === "user-risk-behavior" || state.currentPage === "payment-risk-behavior") {
    renderRiskBehaviorSections();
    return;
  }
  if (state.currentPage === "login-query" || state.currentPage === "payment-query" || state.currentPage === "multi-query") {
    renderPortraitPage();
    return;
  }
  if (state.currentPage === "whitelist-management") {
    renderAccessListPage("white");
    return;
  }
  if (state.currentPage === "blacklist-management") {
    renderAccessListPage("black");
    return;
  }
  if (state.currentPage === "operation-log") {
    renderOperationLogPage();
    return;
  }
  pageContent.innerHTML = `<section class="placeholder-panel">当前页面按设计稿保留导航入口，内容可继续补充。</section>`;
}

function renderAccessListPage(mode) {
  const isWhitelist = mode === "white";
  const title = isWhitelist ? "白名单管理" : "黑名单管理";
  const addLabel = isWhitelist ? "新增白名单" : "新增黑名单";
  pageContent.innerHTML = `
    <section class="admin-page-shell">
      <section class="admin-page-card admin-filter-card">
        <div class="admin-card-title">筛选条件</div>
        <div class="admin-filter-grid admin-filter-grid-three">
          <label class="admin-filter-item">
            <span>生效维度</span>
            <select>
              <option>请选择生效维度</option>
            </select>
          </label>
          <label class="admin-filter-item">
            <span>生效维度值</span>
            <input type="text" placeholder="请先选择生效维度" />
          </label>
          <label class="admin-filter-item">
            <span>生效状态</span>
            <select>
              <option>请选择生效状态</option>
            </select>
          </label>
        </div>
        <div class="admin-filter-actions">
          <button class="filter-btn primary-btn" type="button">查询</button>
          <button class="filter-btn secondary-btn" type="button">重置</button>
        </div>
      </section>
      <section class="admin-page-card admin-table-card">
        <div class="admin-table-toolbar">
          <button class="primary-btn" type="button">⊕ ${addLabel}</button>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>生效对象信息</th>
                <th>生效维度</th>
                <th>状态</th>
                <th>生效时间</th>
                <th>失效时间</th>
                <th>最后操作人</th>
                <th>最后操作时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="admin-empty-state">
          <div class="admin-empty-icon">⌕</div>
          <div class="admin-empty-text">暂无数据</div>
        </div>
      </section>
    </section>
  `;
}

function renderOperationLogPage() {
  const rows = [
    {
      time: "2026-03-26 13:11:54",
      operator: "wangjian02@dobest.com",
      module: "策略管理",
      type: "修改",
      before: ["策略名称：通行证-登录总量限制-行为验证(设备)", "策略内容：相同设备，30天内，登录不同账号数≥11时触发风控，封禁1天", "风控启用情况：风控开启"],
      after: ["策略名称：通行证-登录总量限制-行为验证(设备)", "策略内容：30天内，登录不同账号数≥11时触发风控，封禁1天", "风控启用情况：风控关闭"]
    },
    {
      time: "2026-03-26 13:11:50",
      operator: "wangjian02@dobest.com",
      module: "策略管理",
      type: "修改",
      before: ["策略名称：通行证-登录总量限制-行为验证(IP)", "策略内容：相同IP，30天内，登录不同账号数≥11时触发风控，封禁1天", "风控启用情况：风控开启"],
      after: ["策略名称：通行证-登录总量限制-行为验证(IP)", "策略内容：相同IP，30天内，登录不同账号数≥11时触发风控，封禁1天", "风控启用情况：风控关闭"]
    },
    {
      time: "2026-03-26 13:11:45",
      operator: "wangjian02@dobest.com",
      module: "黑名单管理",
      type: "新增",
      before: ["-"],
      after: ["生效对象：203.18.5.81", "生效维度：IP", "状态：生效中"]
    },
    {
      time: "2026-03-26 13:11:42",
      operator: "wangjian02@dobest.com",
      module: "白名单管理",
      type: "新增",
      before: ["-"],
      after: ["生效对象：acc_30009", "生效维度：账号", "状态：生效中"]
    },
    {
      time: "2026-03-26 13:11:40",
      operator: "wangjian02@dobest.com",
      module: "策略管理",
      type: "修改",
      before: ["策略名称：高频登录限制-功能限制(IP)", "策略内容：相同IP，在30秒内，登录次数≥11次时触发风控，封禁10分钟", "风控启用情况：风控开启"],
      after: ["策略名称：高频登录限制-功能限制(IP)", "策略内容：相同IP，在30秒内，登录次数≥11次时触发风控，封禁5分钟", "风控启用情况：风控开启"]
    }
  ];

  pageContent.innerHTML = `
    <section class="admin-page-shell">
      <section class="admin-page-card admin-filter-card">
        <div class="admin-card-title">筛选条件</div>
        <div class="admin-filter-grid admin-filter-grid-log">
          <label class="admin-filter-item">
            <span>功能模块</span>
            <select>
              <option>请选择功能模块</option>
            </select>
          </label>
          <label class="admin-filter-item">
            <span>操作类型</span>
            <select>
              <option>请选择操作类型</option>
            </select>
          </label>
          <div class="admin-filter-item">
            <span><em>*</em> 时间</span>
            <div class="admin-date-range">
              <input type="text" value="2026-02-26" />
              <span>~</span>
              <input type="text" value="2026-03-27" />
            </div>
          </div>
        </div>
        <div class="admin-filter-actions">
          <button class="filter-btn primary-btn" type="button">查询</button>
          <button class="filter-btn secondary-btn" type="button">重置</button>
        </div>
      </section>
      <section class="admin-page-card admin-table-card admin-log-table-card">
        <div class="admin-table-wrap">
          <table class="admin-table admin-operation-table">
            <thead>
              <tr>
                <th>操作时间</th>
                <th>操作人</th>
                <th>功能模块</th>
                <th>操作类型</th>
                <th>操作前</th>
                <th>操作结果</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  (row) => `
                    <tr>
                      <td>${row.time}</td>
                      <td>${row.operator}</td>
                      <td>${row.module}</td>
                      <td>${row.type}</td>
                      <td>${row.before.map((item) => `<div class="admin-log-line">${item}</div>`).join("")}</td>
                      <td>${row.after.map((item) => `<div class="admin-log-line">${item}</div>`).join("")}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  `;
}

function renderLoginOverviewPage() {
  const data = overviewData["login-overview"];
  const filterState = getOverviewFilterState("login-overview", data.filters);
  const timeDisplay = getOverviewTimeDisplay(filterState.time);
  const sceneKey = state.overviewScene === "register" ? "register" : "login";
  const sceneData = data.scenes[sceneKey];
  const rawSummaryCards = createUserOverviewSummaryCards(sceneKey, sceneData);
  const trendMode = sceneData.chartModes[state.overviewTrendMode] ? state.overviewTrendMode : "request";
  const loading = isOverviewLoading("login-overview");
  const empty = isOverviewEmptyChannel(filterState.channel);
  const summaryCards = empty ? createOverviewEmptySummaryCards(rawSummaryCards, sceneData.emptyState?.summaryText || "暂无概览数据") : rawSummaryCards;
  const chart = empty ? null : createOverviewChartForTimeRange(sceneData.chartModes[trendMode], filterState.time);
  pageContent.innerHTML = `
    <section class="overview-page-head overview-page-head-user">
      <div class="overview-page-head-top">
        <div class="overview-page-head-copy">
          <div class="overview-page-head-title">用户安全概览</div>
          <div class="overview-page-head-subtitle">全面监控风控安全指标，实时掌控业务风险态势</div>
        </div>
      </div>
      <div class="overview-page-head-bottom">
        <div class="overview-scene-switch">
          <button class="overview-scene-btn ${sceneKey === "login" ? "active" : ""}" type="button" data-overview-scene="login">账号登录</button>
          <button class="overview-scene-btn ${sceneKey === "register" ? "active" : ""}" type="button" data-overview-scene="register">账号注册</button>
        </div>
      </div>
    </section>

    <section class="payment-overview-summary-panel overview-summary-panel">
      ${loading ? renderOverviewSummarySkeletonCards(rawSummaryCards.length || 4) : summaryCards.map((item, index) => renderPaymentOverviewSummaryCell(item, index)).join("")}
    </section>

    <section class="overview-trend-card">
      <div class="section-head">
        <div class="section-title">风险趋势</div>
        <div class="overview-head-actions overview-head-actions-user">
          <div class="overview-segmented overview-segmented-user">
            <button class="overview-segmented-btn ${trendMode === "request" ? "active" : ""}" type="button" data-overview-trend="request">请求</button>
            <button class="overview-segmented-btn ${trendMode === "account" ? "active" : ""}" type="button" data-overview-trend="account">账号</button>
            <button class="overview-segmented-btn ${trendMode === "device" ? "active" : ""}" type="button" data-overview-trend="device">设备</button>
            <button class="overview-segmented-btn ${trendMode === "ip" ? "active" : ""}" type="button" data-overview-trend="ip">IP</button>
          </div>
          <button class="filter-btn wide" type="button" data-overview-filter="time" data-overview-page="login-overview">🗓 ${timeDisplay} <span>⌄</span></button>
        </div>
      </div>
      ${loading ? renderOverviewStateCard("loading", "正在切换趋势数据...") : chart ? `${renderOverviewTrendChart(chart)}
      ${renderOverviewLegend(chart)}` : renderOverviewStateCard("empty", sceneData.emptyState?.trendText || "暂无趋势数据")}
    </section>

    <section class="payment-overview-top-card overview-top-card">
      <div class="section-head">
        <div class="section-title">${sceneData.topCard.title}</div>
        <button class="filter-btn wide" type="button" data-overview-filter="time" data-overview-page="login-overview">🗓 ${timeDisplay} <span>⌄</span></button>
      </div>
      ${loading ? renderOverviewStateCard("loading", "正在切换排行数据...") : empty ? renderOverviewStateCard("empty", sceneData.emptyState?.rankingText || "暂无排行数据") : renderOverviewBarTable(sceneData.topCard)}
    </section>
  `;

  pageContent.querySelectorAll("[data-overview-scene]").forEach((button) => {
    button.addEventListener("click", () => {
      triggerOverviewLoading("login-overview", () => {
        state.overviewScene = button.dataset.overviewScene;
        state.overviewTrendMode = "request";
      });
    });
  });

  pageContent.querySelectorAll("[data-overview-trend]").forEach((button) => {
    button.addEventListener("click", () => {
      triggerOverviewLoading("login-overview", () => {
        state.overviewTrendMode = button.dataset.overviewTrend;
      });
    });
  });

  pageContent.querySelectorAll("[data-overview-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      openOverviewFilterPicker("login-overview", button.dataset.overviewFilter);
    });
  });
}

function renderPaymentOverviewPage() {
  const data = overviewData["payment-overview"];
  const filterState = getOverviewFilterState("payment-overview", data.filters);
  const timeDisplay = getOverviewTimeDisplay(filterState.time);
  const sceneData = data.scenes.payment;
  const trendMode = sceneData.chartModes[state.overviewTrendMode] ? state.overviewTrendMode : "orderCount";
  const loading = isOverviewLoading("payment-overview");
  const empty = isOverviewEmptyChannel(filterState.channel);
  const summaryCards = empty ? createOverviewEmptySummaryCards(sceneData.summary, sceneData.emptyState?.summaryText || "暂无概览数据") : sceneData.summary;
  const chart = empty ? null : createOverviewChartForTimeRange(sceneData.chartModes[trendMode], filterState.time);
  pageContent.innerHTML = `
    <section class="overview-page-head overview-page-head-payment">
      <div class="overview-page-head-top">
        <div class="overview-page-head-copy">
          <div class="overview-page-head-title">支付安全概览</div>
          <div class="overview-page-head-subtitle">全面监控风控安全指标，实时掌控业务风险态势</div>
        </div>
      </div>
    </section>

    ${!empty && sceneData.pageNotice ? `
      <section class="overview-page-alert" role="status">
        <span class="overview-page-alert-icon">!</span>
        <span>${sceneData.pageNotice}</span>
      </section>
    ` : ""}

    <section class="payment-overview-summary-panel">
      ${loading ? renderOverviewSummarySkeletonCards(sceneData.summary.length || 4) : summaryCards.map((item, index) => renderPaymentOverviewSummaryCell(item, index)).join("")}
    </section>

    <section class="overview-trend-card payment-overview-trend-card">
      <div class="section-head">
        <div class="section-title">风险趋势</div>
        <div class="overview-head-actions overview-head-actions-payment">
          <div class="overview-segmented payment-overview-segmented">
            <button class="overview-segmented-btn ${trendMode === "orderCount" ? "active" : ""}" type="button" data-overview-trend="orderCount">订单数量</button>
            <button class="overview-segmented-btn ${trendMode === "orderAmount" ? "active" : ""}" type="button" data-overview-trend="orderAmount">订单金额</button>
          </div>
          <button class="filter-btn wide" type="button" data-overview-filter="time" data-overview-page="payment-overview">🗓 ${timeDisplay} <span>⌄</span></button>
        </div>
      </div>
      ${loading ? renderOverviewStateCard("loading", "正在切换趋势数据...") : chart ? `${renderOverviewTrendChart(chart)}
      ${renderOverviewLegend(chart)}` : renderOverviewStateCard("empty", sceneData.emptyState?.trendText || "暂无趋势数据")}
    </section>

    <section class="payment-overview-top-card">
      <div class="section-head">
        <div class="section-title">${sceneData.topCard.title}</div>
        <button class="filter-btn wide" type="button" data-overview-filter="time" data-overview-page="payment-overview">🗓 ${timeDisplay} <span>⌄</span></button>
      </div>
      ${loading ? renderOverviewStateCard("loading", "正在切换排行数据...") : empty ? renderOverviewStateCard("empty", sceneData.emptyState?.rankingText || "暂无排行数据") : renderOverviewBarTable(sceneData.topCard)}
    </section>
  `;

  pageContent.querySelectorAll("[data-overview-trend]").forEach((button) => {
    button.addEventListener("click", () => {
      triggerOverviewLoading("payment-overview", () => {
        state.overviewTrendMode = button.dataset.overviewTrend;
      });
    });
  });

  pageContent.querySelectorAll("[data-overview-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      openOverviewFilterPicker("payment-overview", button.dataset.overviewFilter);
    });
  });
}

function renderPaymentOverviewSummaryCell(item, index) {
  const compareRows = item.compareRows || [];
  const renderMetric = (label, value, prefix, unit, compareType, infoText) => {
    if (item.emptyText) {
      return `
        <div class="payment-overview-summary-metric payment-overview-summary-metric-empty">
          <div class="payment-overview-summary-label">${label}${renderOverviewInfoBadge(infoText)}</div>
          <div class="payment-overview-summary-value">${prefix ? `<span class="payment-overview-summary-prefix">${prefix}</span>` : ""}${value}${unit ? `<span class="payment-overview-summary-unit">${unit}</span>` : ""}</div>
          <div class="payment-overview-summary-empty-text">${item.emptyText}</div>
        </div>
      `;
    }
    return `
      <div class="payment-overview-summary-metric">
        <div class="payment-overview-summary-label">${label}${renderOverviewInfoBadge(infoText)}</div>
        <div class="payment-overview-summary-value">${prefix ? `<span class="payment-overview-summary-prefix">${prefix}</span>` : ""}${value}${unit ? `<span class="payment-overview-summary-unit">${unit}</span>` : ""}</div>
        <div class="payment-overview-summary-compare-list">
          ${compareRows
            .map(
              (row) => `
                <div class="payment-overview-summary-compare-row">
                  <span class="payment-overview-summary-compare-label">${formatOverviewCompareLabel(row.label)}</span>
                  <span class="payment-overview-summary-compare-meta">${compareType === "left" ? (row.leftValue || row.value || "-") : (row.rightValue || row.percent || "-")}</span>
                  <span class="payment-overview-summary-compare-value ${resolveOverviewCompareTrend(compareType === "left" ? row.leftTrend : row.rightTrend, row.trend)}">${formatOverviewCompareRate(compareType === "left" ? (row.leftRate || row.rate || "-") : (row.rightRate || row.rate || "-"), compareType === "left" ? row.leftTrend : row.rightTrend, row.trend)}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  };
  return `
    <article class="payment-overview-summary-cell${index % 2 === 0 ? " left" : ""}${index < 2 ? " top" : ""}">
      <div class="payment-overview-summary-head">
        <span class="payment-overview-summary-accent"></span>
        <span class="payment-overview-summary-title">${item.title}</span>
      </div>
      <div class="payment-overview-summary-grid">
        ${renderMetric(item.primaryLabel, item.primaryValue, item.primaryPrefix, item.primaryUnit, "left", item.primaryInfoText)}
        ${renderMetric(item.secondaryLabel, item.secondaryValue, item.secondaryPrefix, item.secondaryUnit, "right", item.secondaryInfoText)}
      </div>
    </article>
  `;
}

function resolveOverviewCompareTrend(primaryTrend, fallbackTrend) {
  const trend = primaryTrend || fallbackTrend || "up";
  if (trend === "flat") return "flat";
  return trend === "down" ? "down" : "up";
}

function formatOverviewCompareRate(value, primaryTrend, fallbackTrend) {
  const trend = resolveOverviewCompareTrend(primaryTrend, fallbackTrend);
  if (trend === "flat") return value;
  return `${trend === "down" ? "↓" : "↑"}${value}`;
}

function formatOverviewCompareLabel(label) {
  if (label === "7日前同期") return "昨7日前同期";
  return label || "-";
}

function renderOverviewInfoBadge(text) {
  if (!text) return "";
  return `<span class="legend-info overview-info-badge">?<span class="legend-info-tooltip">${escapeHtml(text)}</span></span>`;
}

function renderLogHeaderInfoTrigger(text) {
  if (!text) return "";
  return `<span class="legend-info overview-info-badge log-header-info-trigger" tabindex="0" data-log-header-tooltip="${escapeHtml(text)}">?</span>`;
}

function getOrCreateLogHeaderTooltip() {
  let tooltip = document.body.querySelector("#log-header-tooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "log-header-tooltip";
    tooltip.className = "log-header-tooltip hidden";
    document.body.appendChild(tooltip);
  }
  return tooltip;
}

function hideLogHeaderTooltip() {
  const tooltip = document.body.querySelector("#log-header-tooltip");
  if (!tooltip) return;
  tooltip.classList.add("hidden");
  tooltip.style.left = "";
  tooltip.style.top = "";
  activeLogHeaderTooltipTrigger = null;
}

function positionLogHeaderTooltip(trigger, tooltip) {
  const rect = trigger.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const left = Math.min(
    Math.max(rect.left + rect.width / 2 - tooltipRect.width / 2, 12),
    window.innerWidth - tooltipRect.width - 12
  );
  const top = Math.max(rect.top - tooltipRect.height - 10, 12);
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function showLogHeaderTooltip(trigger) {
  const text = trigger?.dataset?.logHeaderTooltip;
  if (!text) return;
  const tooltip = getOrCreateLogHeaderTooltip();
  tooltip.textContent = text;
  tooltip.classList.remove("hidden");
  tooltip.style.left = "0px";
  tooltip.style.top = "0px";
  positionLogHeaderTooltip(trigger, tooltip);
  activeLogHeaderTooltipTrigger = trigger;
}

let logHeaderTooltipEventsBound = false;

function hideUserRiskCHints() {
  if (!state.userRiskWorkbenchCAxisHintVisible && !state.userRiskWorkbenchCScoreHintVisible) return;
  state.userRiskWorkbenchCAxisHintVisible = false;
  state.userRiskWorkbenchCScoreHintVisible = false;
  if (state.currentPage === "user-risk-engine") {
    renderUserRiskStrategyCPage();
  }
}

function hidePaymentRiskCHints() {
  if (!state.paymentRiskWorkbenchCAxisHintVisible) return;
  state.paymentRiskWorkbenchCAxisHintVisible = false;
  if (state.currentPage === "payment-risk-engine") {
    renderPaymentRiskStrategyCPage();
  }
}

function ensureUserRiskCHintDismissHandlers() {
  if (userRiskCHintDismissBound) return;
  document.addEventListener("click", (event) => {
    if (state.currentPage !== "user-risk-engine" && state.currentPage !== "payment-risk-engine") return;
    if (event.target instanceof Element && event.target.closest(".user-risk-c-help-anchor")) return;
    hideUserRiskCHints();
    hidePaymentRiskCHints();
  });
  window.addEventListener("resize", () => {
    if (state.currentPage !== "user-risk-engine" && state.currentPage !== "payment-risk-engine") return;
    hideUserRiskCHints();
    hidePaymentRiskCHints();
  });
  userRiskCHintDismissBound = true;
}

function ensureUserRiskCDeleteKeyHandler() {
  if (userRiskCDeleteKeyBound) return;
  document.addEventListener("keydown", (event) => {
    if (state.currentPage !== "user-risk-engine" && state.currentPage !== "payment-risk-engine") return;
    if (state.modalOpen) return;
    if (event.key !== "Delete" && event.key !== "Backspace") return;
    if (
      event.target instanceof HTMLElement &&
      (event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA" ||
        event.target.tagName === "SELECT" ||
        event.target.isContentEditable)
    ) {
      return;
    }
    const isPayment = state.currentPage === "payment-risk-engine";
    if (isPayment ? state.paymentRiskWorkbenchCMode !== "edit" : state.userRiskWorkbenchCMode !== "edit") return;
    const draft = isPayment ? getPaymentRiskCDraft() : getUserRiskCDraft();
    if (!draft) return;
    const blocks = isPayment ? getPaymentRiskCBlocksForRender(draft) : getUserRiskCBlocksForRender(draft);
    const activeBlockId = isPayment ? state.paymentRiskWorkbenchCActiveBlockId : state.userRiskWorkbenchCActiveBlockId;
    const activeIndex = blocks.findIndex((item) => item.id === activeBlockId);
    if (activeIndex <= 0 || activeIndex >= draft.blocks.length - 1) return;
    event.preventDefault();
    if (!removeWorkbenchMiddleBlock(draft.blocks, draft.blocks[activeIndex].id)) return;
    const nextActiveId = draft.blocks[Math.max(0, activeIndex - 1)]?.id || draft.blocks[0]?.id || "";
    if (isPayment) {
      state.paymentRiskWorkbenchCActiveBlockId = nextActiveId;
      renderPaymentRiskStrategyCPage();
      return;
    }
    state.userRiskWorkbenchCActiveBlockId = nextActiveId;
    renderUserRiskStrategyCPage();
  });
  userRiskCDeleteKeyBound = true;
}

function ensureLogHeaderTooltipGlobalHandlers() {
  if (logHeaderTooltipEventsBound) return;
  const hide = () => hideLogHeaderTooltip();
  window.addEventListener("scroll", hide, true);
  window.addEventListener("resize", hide);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hide();
  });
  logHeaderTooltipEventsBound = true;
}

function bindLogHeaderTooltips(root) {
  ensureLogHeaderTooltipGlobalHandlers();
  root.querySelectorAll("[data-log-header-tooltip]").forEach((trigger) => {
    trigger.addEventListener("mouseenter", () => showLogHeaderTooltip(trigger));
    trigger.addEventListener("mouseleave", hideLogHeaderTooltip);
    trigger.addEventListener("focus", () => showLogHeaderTooltip(trigger));
    trigger.addEventListener("blur", hideLogHeaderTooltip);
  });
}

function renderOverviewLegend(chart, options = {}) {
  const infoTexts = options.infoTexts || chart.legendInfoTexts || [];
  const renderItem = (row, className, infoText = "") => `
    <span class="legend-item ${className}">
      ${row.label}
      ${renderOverviewInfoBadge(infoText)}
    </span>
  `;
  return `
    <div class="legend-row bottom overview-legend">
      ${renderItem(chart.tooltipRows[0], "blue", infoTexts[0])}
      ${renderItem(chart.tooltipRows[1], "orange", infoTexts[1])}
      ${renderItem(chart.tooltipRows[2], "purple", infoTexts[2])}
      ${renderItem(chart.tooltipRows[3], "green-line", infoTexts[3])}
    </div>
  `;
}

function getOverviewTimeDisplay(timeLabel) {
  if (timeLabel === "近30天") {
    return "2026-02-01 ~ 2026-02-28";
  }
  if (typeof timeLabel === "string" && timeLabel.includes("~")) {
    const [start = "", end = ""] = timeLabel.split("~").map((item) => item.trim());
    const formatDateOnly = (value) => value.slice(0, 10);
    return `${formatDateOnly(start)} ~ ${formatDateOnly(end)}`;
  }
  return timeLabel;
}

function renderPaymentOverviewPlaceholder() {
  pageContent.innerHTML = `
    <section class="placeholder-panel">
      支付安全概览已接入导航结构，当前可继续按设计稿补充指标、趋势图和支付风险分布卡片。
    </section>
  `;
}

function renderOverviewMetricTooltip(item) {
  const rows = item.tooltipRows || [];
  return `
    <div class="overview-metric-tooltip" style="width:${item.tooltipWidth || "314px"}">
      <div class="overview-metric-tooltip-title">${item.title}</div>
      <div class="overview-metric-tooltip-desc">${item.tooltipDescription}</div>
      <div class="overview-metric-tooltip-head">
        <span></span>
        <span>数量</span>
        <span>线上占比</span>
      </div>
      <div class="overview-metric-tooltip-list">
        ${rows
          .map(
            (detail) => `
              <div class="overview-metric-tooltip-row">
                <span>${detail.label}</span>
                <span>${detail.value}</span>
                <span>${detail.percent}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderLoginLogPage() {
  renderRiskLogPage("login-log");
}

function renderRiskLogPage(pageKey = "login-log") {
  const source = riskLogData[pageKey];
  const pageMeta =
    pageKey === "payment-log"
      ? {
          logTitle: "支付风控日志",
          logSubtitle: "查阅风控命中与处置记录，支持账号、设备、IP、策略等多条件筛选分析。",
          tableTitle: "日志列表",
          deviceLabel: "设备ID",
          devicePlaceholder: "请输入设备ID",
          accountLabel: "账号ID",
          accountPlaceholder: "请输入账号ID",
          ipLabel: "网络IP",
          ipPlaceholder: "请输入IP",
          orderLabel: "SDK订单号",
          orderPlaceholder: "请输入SDK订单号"
        }
      : {
          logTitle: "用户风控日志",
          logSubtitle: "查阅风控命中与处置记录，支持账号、设备、IP、策略等多条件筛选分析。",
          tableTitle: "日志列表",
          deviceLabel: "设备ID",
          devicePlaceholder: "请输入设备ID",
          accountLabel: "账号ID",
          accountPlaceholder: "请输入账号ID",
          ipLabel: "网络IP",
          ipPlaceholder: "请输入IP"
        };
  const initialFilters = { ...source.filters };
  if (!state.logFilters || state.logFiltersPage !== pageKey) {
    state.logFilters = { ...initialFilters };
    state.logFiltersPage = pageKey;
    state.logPage = 1;
  }
  const filters = state.logFilters;
  filters.riskScore = Array.isArray(filters.riskScore) ? filters.riskScore : filters.riskScore ? [filters.riskScore] : [];
  const visibleColumns = getLogVisibleColumns(pageKey);
  const allRows = getExpandedRiskLogRows(pageKey).sort((a, b) => b.id - a.id);
  const rows = allRows.filter((row) => {
    const matchDevice = !filters.device || row.deviceId.toLowerCase().includes(filters.device.toLowerCase());
    const matchAccount = !filters.account || row.accountNo.toLowerCase().includes(filters.account.toLowerCase());
    const matchIp = !filters.ip || row.ip.includes(filters.ip);
    const matchOrderId = pageKey !== "payment-log" || !filters.orderId || row.sdkOrderId.toLowerCase().includes(filters.orderId.toLowerCase());
    const matchBehavior = !filters.riskBehavior || (row.riskBehaviors || []).includes(filters.riskBehavior);
    const matchScore = matchesRiskScoreRange(row.riskScore, filters.riskScore);
    const matchAction = !filters.status || row.action === filters.status;
    return matchDevice && matchAccount && matchIp && matchOrderId && matchBehavior && matchScore && matchAction;
  });
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
  state.logPage = Math.min(state.logPage || 1, pageCount);
  const start = (state.logPage - 1) * pageSize;
  const pageRows = rows.slice(start, start + pageSize);
  const pagerItems = buildPagerItems(state.logPage, pageCount);
  const columnConfigGroups = logColumnGroups
    .map(
      (group) => `
        <div class="log-column-group">
          <div class="log-column-group-title">${group.title}</div>
          <div class="log-column-group-fields">
            ${group.fields
              .map(
                (field) => `
                  <label class="log-column-option">
                    <input type="checkbox" data-log-column-toggle="${field.key}" ${visibleColumns.includes(field.key) ? "checked" : ""} />
                    <span>${field.label}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");

  pageContent.innerHTML = `
    <div class="log-page-frame">
      <section class="log-page-head">
        <div class="log-page-title">${pageMeta.logTitle}</div>
        <div class="log-page-subtitle">${pageMeta.logSubtitle}</div>
      </section>

      <section class="log-filter-card">
        <div class="log-filter-grid">
        ${
          pageKey === "payment-log"
            ? `
              <label class="log-filter-item">
                <span>${pageMeta.orderLabel}</span>
                <input maxlength="100" data-log-input="orderId" value="${escapeHtml(filters.orderId || "")}" placeholder="${pageMeta.orderPlaceholder}" />
              </label>
            `
            : ""
        }
        <label class="log-filter-item">
          <span>${pageMeta.accountLabel}</span>
          <input maxlength="100" data-log-input="account" value="${escapeHtml(filters.account)}" placeholder="${pageMeta.accountPlaceholder}" />
        </label>
        <label class="log-filter-item">
          <span>${pageMeta.deviceLabel}</span>
          <input maxlength="100" data-log-input="device" value="${escapeHtml(filters.device)}" placeholder="${pageMeta.devicePlaceholder}" />
        </label>
        <label class="log-filter-item">
          <span>${pageMeta.ipLabel}</span>
          <input maxlength="100" data-log-input="ip" value="${escapeHtml(filters.ip)}" placeholder="${pageMeta.ipPlaceholder}" />
        </label>
        <label class="log-filter-item">
          <span>时间</span>
          <button class="log-time-btn" type="button">${escapeHtml(filters.time)} <span>📅</span></button>
        </label>
        <label class="log-filter-item">
          <span>风险行为</span>
          <select data-log-select="riskBehavior">${optionHtml(["", ...getLogRiskBehaviorOptions(pageKey)], filters.riskBehavior, "请选择风险行为")}</select>
        </label>
        <label class="log-filter-item">
          <span>风险分 ${renderOverviewInfoBadge("由风控引擎实时计算得出的风险分数，分值越高代表风险越高")}</span>
          <div class="log-multi-select">
            <button class="log-multi-select-trigger" type="button" id="log-risk-score-trigger">
              <span>${filters.riskScore.length ? `已选${filters.riskScore.length}项` : "请选择风险分的区间"}</span>
              <span>⌄</span>
            </button>
            <div class="log-multi-select-panel ${state.logRiskScorePanelOpen ? "" : "hidden"}">
              ${logRiskScoreOptions
                .filter(Boolean)
                .map(
                  (option) => `
                    <label class="log-multi-select-option">
                      <input type="checkbox" data-log-risk-score-option value="${escapeHtml(option)}" ${filters.riskScore.includes(option) ? "checked" : ""} />
                      <span>${option}</span>
                    </label>
                  `
                )
                .join("")}
            </div>
          </div>
        </label>
        <label class="log-filter-item">
          <span>处置动作 ${renderOverviewInfoBadge("数据依赖于SDK客户端或游戏业务方上报，未接入SDK客户端且游戏未上报时数据为空")}</span>
          <select data-log-select="status">${optionHtml(getLogActionOptions(pageKey), filters.status, "请选择处置动作")}</select>
        </label>
        </div>
        <div class="log-filter-actions">
          <button class="secondary-btn" type="button" id="log-reset-btn">重置</button>
          <button class="primary-btn" type="button" id="log-search-btn">查询</button>
        </div>
      </section>

      <section class="log-table-panel">
        <div class="log-table-head">
          <div class="log-table-title-wrap">
            <h3>${pageMeta.tableTitle}</h3>
          </div>
          <div class="log-table-tools log-table-tools-wrap">
            <button class="link-btn" type="button" id="log-column-config-btn">显示列配置</button>
            <button class="link-btn" type="button">导出</button>
            ${
              state.logColumnPanelOpen
                ? `
                  <div class="log-column-panel">
                    <div class="log-column-panel-head">
                      <strong>自定义列</strong>
                      <div class="log-column-panel-meta">
                        <span>已选择${visibleColumns.length}个</span>
                          <button class="link-btn" type="button" id="log-column-clear">清空</button>
                      </div>
                    </div>
                    <div class="log-column-panel-body">
                      <div class="log-column-panel-left">
                        <div class="log-column-subtitle">可选字段</div>
                        <div class="log-column-groups">${columnConfigGroups}</div>
                      </div>
                      <div class="log-column-panel-right">
                        <div class="log-column-selected-head">
                          <span>已选择${visibleColumns.length}个</span>
                          <button class="link-btn" type="button" id="log-column-reset">恢复默认</button>
                        </div>
                        <div class="log-column-selected-list">
                          ${visibleColumns
                            .map(
                              (key) => `
                                <div class="log-column-selected-item">
                                  <span>${getLogFieldLabel(key)}</span>
                                  <button class="link-btn danger" type="button" data-log-column-remove="${key}">✕</button>
                                </div>
                              `
                            )
                            .join("")}
                        </div>
                      </div>
                    </div>
                    <div class="log-column-panel-footer">
                      <button class="primary-btn" type="button" id="log-column-confirm">确定</button>
                        <button class="secondary-btn" type="button" id="log-column-cancel">取消</button>
                    </div>
                  </div>
                `
                : ""
            }
          </div>
        </div>
        <div class="log-table-wrap">
          <table class="risk-log-table">
            <thead>
              <tr>
                ${visibleColumns
                  .map((key) => `<th class="log-col-${key}">${getLogFieldLabel(key)}${["riskBehavior", "riskScore", "action"].includes(key) ? renderLogHeaderInfoTrigger(key === "riskBehavior" ? "本次用户行为涉及到到账号/设备/IP的潜在风险" : key === "riskScore" ? "由风控引擎实时计算得出的风险分数，分值越高代表风险越高" : "由服务端传入或业务上报的实际处置动作。") : ""}</th>`)
                  .join("")}
                <th class="log-col-operation">操作</th>
              </tr>
            </thead>
            <tbody>
              ${pageRows
                .map(
                  (row) => `
                    <tr>
                      ${visibleColumns.map((key) => `<td class="log-col-${key}">${renderRiskLogCell(row, key)}</td>`).join("")}
                      <td class="log-col-operation"><button class="risk-log-detail-btn" type="button" data-log-detail="${row.id}">查看详情</button></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        <div class="log-table-footer">
          <div class="log-table-footer-meta"><span>共${formatNumber(rows.length)}条记录</span></div>
          <div class="portrait-pagination-controls">
            <button class="pager-btn" type="button" data-log-page-nav="prev" ${state.logPage === 1 ? "disabled" : ""}>‹</button>
            ${pagerItems
              .map((item) =>
                item === "..."
                  ? `<span class="log-ellipsis">...</span>`
                  : `<button class="portrait-page-btn ${item === state.logPage ? "active" : ""}" type="button" data-log-page="${item}">${item}</button>`
              )
              .join("")}
            <button class="pager-btn" type="button" data-log-page-nav="next" ${state.logPage === pageCount ? "disabled" : ""}>›</button>
          </div>
        </div>
      </section>
    </div>
  `;

  pageContent.querySelectorAll("[data-log-input]").forEach((input) => {
    input.addEventListener("input", (event) => {
      filters[event.target.dataset.logInput] = event.target.value.slice(0, 100);
    });
  });
  pageContent.querySelectorAll("[data-log-select]").forEach((select) => {
    select.addEventListener("change", (event) => {
      filters[event.target.dataset.logSelect] = event.target.value;
      state.logPage = 1;
      renderRiskLogPage(pageKey);
    });
  });
  pageContent.querySelector("#log-risk-score-trigger")?.addEventListener("click", () => {
    state.logRiskScorePanelOpen = !state.logRiskScorePanelOpen;
    renderRiskLogPage(pageKey);
  });
  pageContent.querySelectorAll("[data-log-risk-score-option]").forEach((input) => {
    input.addEventListener("change", () => {
      filters.riskScore = Array.from(pageContent.querySelectorAll("[data-log-risk-score-option]:checked")).map((item) => item.value);
      state.logPage = 1;
      state.logRiskScorePanelOpen = true;
      renderRiskLogPage(pageKey);
    });
  });
  pageContent.querySelector("#log-search-btn").addEventListener("click", () => {
    state.logPage = 1;
    renderRiskLogPage(pageKey);
  });
  pageContent.querySelector("#log-reset-btn").addEventListener("click", () => {
    state.logFilters = { ...initialFilters };
    state.logFilters.riskScore = [];
    state.logRiskScorePanelOpen = false;
    state.logColumnPanelOpen = false;
    renderRiskLogPage(pageKey);
  });
  pageContent.querySelectorAll("[data-log-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.logPage = Number(button.dataset.logPage);
      renderRiskLogPage(pageKey);
    });
  });
  pageContent.querySelectorAll("[data-log-page-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      state.logPage += button.dataset.logPageNav === "prev" ? -1 : 1;
      renderRiskLogPage(pageKey);
    });
  });
  pageContent.querySelectorAll("[data-portrait-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openPortraitFromExternal(button.dataset.portraitOpen, button.dataset.value);
    });
  });
  pageContent.querySelectorAll("[data-log-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      state.logDetailPage = pageKey;
      openLogDetailModal(Number(button.dataset.logDetail));
    });
  });
  bindLogHeaderTooltips(pageContent);
  bindCopyActions(pageContent, "[data-log-copy]");
  pageContent.querySelector("#log-column-config-btn")?.addEventListener("click", () => {
    state.logColumnPanelOpen = !state.logColumnPanelOpen;
    renderRiskLogPage(pageKey);
  });
  pageContent.querySelector("#log-column-cancel")?.addEventListener("click", () => {
    state.logColumnPanelOpen = false;
    renderRiskLogPage(pageKey);
  });
  pageContent.querySelector("#log-column-confirm")?.addEventListener("click", () => {
    state.logColumnPanelOpen = false;
    renderRiskLogPage(pageKey);
  });
  pageContent.querySelector("#log-column-reset")?.addEventListener("click", () => {
    setLogVisibleColumns(pageKey, getDefaultLogColumns(pageKey));
    renderRiskLogPage(pageKey);
  });
  pageContent.querySelector("#log-column-clear")?.addEventListener("click", () => {
    setLogVisibleColumns(pageKey, [getDefaultLogColumns(pageKey)[0]]);
    renderRiskLogPage(pageKey);
  });
  pageContent.querySelectorAll("[data-log-column-toggle]").forEach((input) => {
    input.addEventListener("change", () => {
      toggleLogColumn(pageKey, input.dataset.logColumnToggle);
      renderRiskLogPage(pageKey);
    });
  });
  pageContent.querySelectorAll("[data-log-column-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      removeLogColumn(pageKey, button.dataset.logColumnRemove);
      renderRiskLogPage(pageKey);
    });
  });
}

function renderPaymentLogPage() {
  renderRiskLogPage("payment-log");
}

function renderStrategySections() {
  const strategyPageConfig = getStrategyPageConfig();
  const filters = state.strategyFilters ||= createDefaultStrategyFilters();
  if (!state.strategyFilterDraft) {
    state.strategyFilterDraft = cloneFilters(filters);
  }
  const draftFilters = state.strategyFilterDraft;
  const strategyTabs = ["全部", ...strategyPageConfig.scenes.map((scene) => sceneSectionMap[scene])];
  if (!strategyTabs.includes(state.strategyCardTab)) {
    state.strategyCardTab = "全部";
  }
  if (!filters.relatedTag) filters.relatedTag = "全部标签";
  const filteredStrategies = strategyStore.filter((item) => {
    if (!strategyPageConfig.scenes.includes(item.scene)) return false;
    const keyword = filters.keyword.trim().toLowerCase();
    const matchKeyword =
      !keyword || item.name.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword);
    const conditionLabels = item.rules.flatMap((rule) => collectConditionLabels(rule.conditions, []));
    const matchRelatedTag = filters.relatedTag === "全部标签" || conditionLabels.includes(filters.relatedTag);
    const matchStatus =
      filters.status === "全部状态" ||
      (filters.status === "开启" && isStrategyEnabled(item)) ||
      (filters.status === "关闭" && !isStrategyEnabled(item));
    return matchKeyword && matchStatus && matchRelatedTag;
  });
  const activeScene =
    state.strategyCardTab === "全部"
      ? ""
      : strategyPageConfig.scenes.find((scene) => sceneSectionMap[scene] === state.strategyCardTab) || "";
  const visibleStrategies = activeScene ? filteredStrategies.filter((item) => item.scene === activeScene) : filteredStrategies;
  const createScene = activeScene || strategyPageConfig.scenes[0];

  pageContent.innerHTML = `
    <section class="strategy-toolbar-panel">
      <div class="strategy-filter-row strategy-page-filter-row">
        <label class="strategy-filter-field wide">
          <span>策略名称/描述</span>
          <input id="strategy-search" value="${escapeHtml(draftFilters.keyword)}" placeholder="搜索策略名称/描述" />
        </label>
        <label class="strategy-filter-field strategy-status-field">
          <span>策略状态</span>
          <select id="strategy-status-filter">${optionHtml(["全部状态", "开启", "关闭"], draftFilters.status)}</select>
        </label>
        <label class="strategy-filter-field strategy-tag-field">
          <span>关联标签</span>
          <div class="strategy-tag-picker-field">
            <button class="strategy-tag-trigger" type="button" id="strategy-tag-trigger">
              <span>${escapeHtml(draftFilters.relatedTag || "全部标签")}</span>
              <span class="picker-caret">⌄</span>
            </button>
            <div id="strategy-tag-picker-anchor"></div>
          </div>
        </label>
        <div class="strategy-filter-actions">
          <button class="secondary-btn" type="button" id="strategy-filter-reset">重置</button>
          <button class="primary-btn" type="button" id="strategy-filter-apply">查询</button>
        </div>
      </div>
    </section>
    <section class="content-tabs-panel">
      <div class="content-tabs">
        ${strategyTabs
          .map(
            (tab) => `
              <button class="content-tab ${state.strategyCardTab === tab ? "active" : ""}" type="button" data-strategy-card-tab="${tab}">
                ${tab}
              </button>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="panel-section">
      <div class="section-head">
        <div class="section-title">${state.currentPage === "payment-risk-engine" ? "支付风控策略" : "用户风控策略"}</div>
        <button class="primary-btn" type="button" data-create-scene="${createScene}">
          <span>＋</span>
          <span>新建策略</span>
        </button>
      </div>
      ${
        visibleStrategies.length
          ? `
            <div class="strategy-grid">
              ${visibleStrategies
                .map((item) => {
                  const enabled = isStrategyEnabled(item);
                  return `
                    <article class="strategy-card">
                      <div class="card-head compact">
                        <div class="card-title">
                          <span class="card-title-icon">◔</span>
                          <span>${escapeHtml(item.name)}</span>
                        </div>
                      </div>
                      <div class="strategy-status-line">
                        <span class="strategy-status-dot ${enabled ? "enabled" : "disabled"}"></span>
                        <span class="strategy-status-text ${enabled ? "enabled" : "disabled"}">${enabled ? "生效中" : "已关闭"}</span>
                      </div>
                      <p class="card-desc">${escapeHtml(item.description)}</p>
                      <div class="strategy-metric-strip">
                        <div class="strategy-metric-cell">
                          <div class="metric-label">当日触发数</div>
                          <div class="metric-value">${item.metrics.triggers}</div>
                        </div>
                        <div class="strategy-metric-cell">
                          <div class="metric-label">当日触发占比</div>
                          <div class="metric-value small">${item.metrics.rate}</div>
                        </div>
                      </div>
                      <div class="card-footer">
                        <button class="card-action-btn icon-only" type="button" title="查看" aria-label="查看" data-card-action="view" data-id="${item.id}">
                          <span class="btn-icon">◉</span>
                        </button>
                        <button class="card-action-btn icon-only" type="button" title="编辑" aria-label="编辑" data-card-action="edit" data-id="${item.id}">
                          <span class="btn-icon">✎</span>
                        </button>
                      </div>
                    </article>
                  `;
                })
                .join("")}
            </div>
          `
          : `<div class="empty-panel">当前筛选下暂无策略，建议切换页签或重置筛选。</div>`
      }
    </section>
  `;

  pageContent.querySelector("#strategy-search")?.addEventListener("input", (event) => {
    state.strategyFilterDraft.keyword = event.target.value;
  });
  pageContent.querySelector("#strategy-status-filter")?.addEventListener("change", (event) => {
    state.strategyFilterDraft.status = event.target.value;
  });
  pageContent.querySelector("#strategy-tag-trigger")?.addEventListener("click", () => {
    if (state.strategyTagPicker) {
      state.strategyTagPicker = null;
      renderStrategySections();
      return;
    }
    state.strategyTagPicker = createPickerStateByCategory(findPickerCategoryByLabel(draftFilters.relatedTag), draftFilters.relatedTag);
    renderStrategySections();
  });
  pageContent.querySelector("#strategy-filter-reset")?.addEventListener("click", () => {
    state.strategyFilters = createDefaultStrategyFilters();
    state.strategyFilterDraft = createDefaultStrategyFilters();
    state.strategyTagPicker = null;
    renderStrategySections();
  });
  pageContent.querySelector("#strategy-filter-apply")?.addEventListener("click", () => {
    state.strategyFilters = cloneFilters(state.strategyFilterDraft);
    state.strategyTagPicker = null;
    renderStrategySections();
  });
  pageContent.querySelectorAll("[data-strategy-card-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.strategyCardTab = button.dataset.strategyCardTab;
      renderStrategySections();
    });
  });

  const tagPickerAnchor = pageContent.querySelector("#strategy-tag-picker-anchor");
  if (tagPickerAnchor && state.strategyTagPicker) {
    const picker = buildTagPickerPanel({
      category: state.strategyTagPicker.category,
      selectedLabel: draftFilters.relatedTag === "全部标签" ? "" : draftFilters.relatedTag,
      includeCategoryMenu: true,
      allowQuickAdd: false,
      onCategoryChange: (nextCategory) => {
        state.strategyTagPicker = createPickerStateByCategory(nextCategory);
        renderStrategySections();
      },
      onParentSearch: (value) => {
        state.strategyTagPicker = { ...state.strategyTagPicker, parentQuery: value };
        renderStrategySections();
      },
      onChildSearch: (value) => {
        state.strategyTagPicker = { ...state.strategyTagPicker, childQuery: value };
        renderStrategySections();
      },
      onParentSelect: (parentName) => {
        const parentItem = (conditionPickerCatalog[state.strategyTagPicker.category] || []).find((item) => item.name === parentName);
        if (parentItem?.children?.length) {
          state.strategyTagPicker = { ...state.strategyTagPicker, parent: parentName, childQuery: "" };
          renderStrategySections();
          return;
        }
        state.strategyFilterDraft.relatedTag = parentName;
        state.strategyTagPicker = null;
        renderStrategySections();
      },
      onChildSelect: (label) => {
        state.strategyFilterDraft.relatedTag = label;
        state.strategyTagPicker = null;
        renderStrategySections();
      }
    });
    tagPickerAnchor.appendChild(picker);
  }

  pageContent.querySelectorAll("[data-create-scene]").forEach((button) => {
    button.addEventListener("click", () => openCreateModal(button.dataset.createScene));
  });
  pageContent.querySelectorAll("[data-card-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { id, cardAction } = button.dataset;
      if (cardAction === "stats") {
        openStatsModal(id);
        return;
      }
      openStrategy(id, cardAction);
    });
  });
}

function renderUserRiskStrategyPage() {
  state.userRiskStrategyView = { mode: "list", activeId: "" };
  state.userRiskLayerModal.open = false;
  ensureUserRiskWorkbenchState();
  const entry = state.userRiskWorkbenchEntry;
  const strategy = getUserRiskWorkbenchActiveStrategy(entry);
  const behaviorCards = getBehaviorCardsByEntry(entry);
  if (!strategy) {
    pageContent.innerHTML = `<section class="placeholder-panel">当前入口暂无策略配置。</section>`;
    return;
  }

  if (!state.userRiskWorkbenchDraft || state.userRiskWorkbenchDraft.id !== strategy.id) {
    state.userRiskWorkbenchDraft = deepClone(strategy);
    state.userRiskWorkbenchSourceId = strategy.id;
  }

  const draft = state.userRiskWorkbenchDraft;
  const selectedBehaviorCards = getUserRiskSelectedBehaviorCards(entry, draft.selectedBehaviors);
  const behaviorDisplay = getUserRiskBehaviorDisplayConfig(draft);

  pageContent.innerHTML = `
    <section class="user-risk-workbench-page user-risk-editor-page">
      <section class="user-risk-editor-header">
        <div class="user-risk-editor-header-main">
          <div class="user-risk-editor-title-row">
            <h1 class="user-risk-editor-title">用户风控策略</h1>
            <p class="user-risk-editor-desc">支持根据风险分和用户标签，配置安全处置措施，覆盖登录、注册等业务场景。</p>
          </div>
          <div class="user-risk-editor-toolbar">
            <div class="user-risk-workbench-entry-tabs user-risk-entry-segment">
              ${[
                { key: "登录", label: "账号登录" },
                { key: "注册", label: "账号注册" }
              ]
                .map(
                  (item) =>
                    `<button class="user-risk-workbench-entry-tab ${entry === item.key ? "active" : ""}" type="button" data-workbench-entry="${item.key}">${item.label}</button>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="user-risk-workbench-shell user-risk-editor-shell">
        <section class="user-risk-workbench-panel user-risk-editor-panel">
          <section class="user-risk-editor-group">
            <div class="user-risk-workbench-card-head user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">基础信息配置</div>
              </div>
              <div class="user-risk-editor-page-actions user-risk-editor-page-actions-inline">
                <button class="primary-btn user-risk-editor-page-action" type="button" id="user-risk-workbench-save">更新保存</button>
                <button class="secondary-btn user-risk-editor-page-action user-risk-editor-page-action-secondary" type="button" id="user-risk-workbench-cancel">取消</button>
              </div>
            </div>
            <div class="user-risk-editor-basic-list">
              <label class="user-risk-workbench-field user-risk-workbench-switch-field user-risk-switch-row">
                <div class="user-risk-field-label-row">
                  <span>策略开关</span>
                  <span class="user-risk-field-label-tip">策略开启后，5分钟后线上生效</span>
                </div>
                <button class="switch ${draft.enabled ? "on" : ""}" id="user-risk-workbench-switch" type="button"></button>
              </label>
              <label class="user-risk-workbench-field user-risk-editor-name-field">
                <span>策略名称</span>
                <input id="user-risk-workbench-name" value="${escapeHtml(draft.name)}" />
              </label>
              <label class="user-risk-workbench-field">
                <div class="user-risk-field-label-row">
                  <span>生效渠道</span>
                  <span class="user-risk-field-label-tip">同一渠道下，仅允许生效一条风控策略</span>
                </div>
                <button class="user-risk-multi-select-trigger" type="button" id="user-risk-effective-channels">
                  <span>已选择${(draft.effectiveChannels || []).length}项</span>
                  <span class="user-risk-multi-select-caret">⌄</span>
                </button>
              </label>
            </div>
          </section>

          <section class="user-risk-editor-group">
            <div class="user-risk-workbench-card-head simple user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">风险识别配置</div>
              </div>
            </div>
            <div class="user-risk-editor-behavior-row">
              <div class="user-risk-editor-behavior-label">识别风险行为</div>
              <div class="user-risk-editor-behavior-tip">选中的风险行为识别，将实时应用于线上业务场景</div>
            </div>
            <div class="user-risk-workbench-behavior-select-line user-risk-editor-selected-row">
              <div class="user-risk-workbench-behavior-selected">已选择${draft.selectedBehaviors.length}项</div>
              <span class="user-risk-workbench-behavior-selected-caret">⌄</span>
            </div>
            <div class="user-risk-workbench-behavior-grid user-risk-editor-behavior-grid">
              ${(behaviorDisplay.cards.length ? behaviorDisplay.cards : selectedBehaviorCards.length ? selectedBehaviorCards : behaviorCards).map((card) => renderUserRiskBehaviorPickerCard(card, draft)).join("")}
            </div>
            <div class="user-risk-workbench-score-notice">
              <span class="user-risk-workbench-score-notice-icon">💡</span>
              <span class="user-risk-workbench-score-notice-text">${escapeHtml(behaviorDisplay.previewSummary || draft.scoreNotice)}</span>
            </div>
          </section>

          <section class="user-risk-editor-group user-risk-editor-action-card">
            <div class="user-risk-workbench-card-head simple user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">处置动作配置</div>
              </div>
            </div>
            <section class="user-risk-workbench-block-list user-risk-editor-block-list">
              ${draft.blocks.map((block, index) => renderUserRiskWorkbenchBlock(block, index)).join("")}
            </section>
          </section>
        </section>
      </section>
    </section>
  `;

  bindUserRiskWorkbenchEvents(draft);
}

function renderUserRiskStrategyBPage() {
  state.userRiskStrategyView = { mode: "list", activeId: "" };
  state.userRiskLayerModal.open = false;
  ensureUserRiskWorkbenchState();
  const entry = state.userRiskWorkbenchEntry;
  const strategy = getUserRiskWorkbenchActiveStrategy(entry);
  if (!strategy) {
    pageContent.innerHTML = `<section class="placeholder-panel">当前入口暂无策略配置。</section>`;
    return;
  }

  if (!state.userRiskWorkbenchDraft || state.userRiskWorkbenchDraft.id !== strategy.id) {
    state.userRiskWorkbenchDraft = deepClone(strategy);
    state.userRiskWorkbenchSourceId = strategy.id;
  }

  const draft = state.userRiskWorkbenchDraft;
  const isEditMode = state.userRiskWorkbenchBMode === "edit";
  const behaviorDisplay = getUserRiskBehaviorDisplayConfig(draft);

  pageContent.innerHTML = `
    <section class="user-risk-workbench-page user-risk-editor-page user-risk-b-page ${isEditMode ? "is-editing" : "is-readonly"}">
      <section class="user-risk-editor-header">
        <div class="user-risk-editor-header-main">
          <div class="user-risk-editor-title-row">
            <h1 class="user-risk-editor-title">用户风控策略B</h1>
            <p class="user-risk-editor-desc">支持根据风险分和用户标签，配置安全处置措施，覆盖登录、注册等业务场景。</p>
          </div>
          <div class="user-risk-editor-toolbar">
            <div class="user-risk-workbench-entry-tabs user-risk-entry-segment">
              ${[
                { key: "登录", label: "账号登录" },
                { key: "注册", label: "账号注册" }
              ]
                .map(
                  (item) =>
                    `<button class="user-risk-workbench-entry-tab ${entry === item.key ? "active" : ""}" type="button" data-workbench-entry="${item.key}">${item.label}</button>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="user-risk-workbench-shell user-risk-editor-shell">
        <section class="user-risk-workbench-panel user-risk-editor-panel">
          <section class="user-risk-editor-group">
            <div class="user-risk-workbench-card-head user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">基础信息配置</div>
              </div>
              <div class="user-risk-editor-page-actions user-risk-editor-page-actions-inline">
                ${
                  isEditMode
                    ? `
                      <button class="primary-btn user-risk-editor-page-action" type="button" id="user-risk-workbench-save">保存更新</button>
                      <button class="secondary-btn user-risk-editor-page-action user-risk-editor-page-action-secondary" type="button" id="user-risk-workbench-cancel">取消</button>
                    `
                    : `<button class="primary-btn user-risk-editor-page-action" type="button" id="user-risk-workbench-edit">编辑风控</button>`
                }
              </div>
            </div>
            <div class="user-risk-editor-basic-list">
              <label class="user-risk-workbench-field user-risk-workbench-switch-field user-risk-switch-row">
                <div class="user-risk-field-label-row">
                  <span>策略开关</span>
                  <span class="user-risk-field-label-tip">策略开启后，5分钟后线上生效</span>
                </div>
                <button class="switch ${draft.enabled ? "on" : ""}" id="user-risk-workbench-switch" type="button" ${isEditMode ? "" : "disabled"}></button>
              </label>
              <label class="user-risk-workbench-field user-risk-editor-name-field">
                <span>策略名称</span>
                <input id="user-risk-workbench-name" value="${escapeHtml(draft.name)}" ${isEditMode ? "" : "readonly"} />
              </label>
              <label class="user-risk-workbench-field">
                <div class="user-risk-field-label-row">
                  <span>生效渠道</span>
                  <span class="user-risk-field-label-tip">同一渠道下，仅允许生效一条风控策略</span>
                </div>
                <button class="user-risk-multi-select-trigger" type="button" id="user-risk-effective-channels" ${isEditMode ? "" : "disabled"}>
                  <span>已选择${(draft.effectiveChannels || []).length}项</span>
                  <span class="user-risk-multi-select-caret">⌄</span>
                </button>
              </label>
            </div>
          </section>

          <section class="user-risk-editor-group user-risk-b-behavior-group">
            <div class="user-risk-workbench-card-head simple user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">风险识别配置</div>
              </div>
            </div>
            <div class="user-risk-editor-behavior-row">
              <div class="user-risk-editor-behavior-label">识别风险行为</div>
              <div class="user-risk-editor-behavior-tip">选中的风险行为识别，将实时应用于线上业务场景</div>
            </div>
            <div class="user-risk-workbench-behavior-select-line user-risk-editor-selected-row user-risk-b-selected-row">
              <div class="user-risk-workbench-behavior-selected">已选择${draft.selectedBehaviors.length}项</div>
              <span class="user-risk-workbench-behavior-selected-caret">⌄</span>
            </div>
            <div class="user-risk-workbench-score-notice user-risk-b-formula-notice">
              <span class="user-risk-workbench-score-notice-icon">💡</span>
              <span class="user-risk-workbench-score-notice-text">${escapeHtml(behaviorDisplay.previewSummary || draft.scoreNotice)}</span>
            </div>
          </section>

          <section class="user-risk-editor-group user-risk-b-action-group">
            <div class="user-risk-workbench-card-head simple user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">处置动作配置</div>
                <div class="user-risk-workbench-card-subtitle">支持根据风险分值区间，配置默认处置动作</div>
              </div>
            </div>
            ${renderUserRiskStrategyBActionTable(draft, isEditMode)}
          </section>
        </section>
      </section>
    </section>
  `;

  bindUserRiskWorkbenchBEvents(draft);
}

function renderWorkbenchBActionTable(draft, config = getUserRiskWorkbenchRenderConfig(), isEditMode = true) {
  return `
    <div class="user-risk-b-table-wrap">
      <table class="user-risk-b-table">
        <thead>
          <tr>
            <th>最小值</th>
            <th>风险分</th>
            <th>最大值</th>
            <th>默认处置动作</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${draft.blocks
            .map((block, index) => {
              const canDelete = index > 0 && index < draft.blocks.length - 1;
              return `
                <tr>
                  <td>${escapeHtml(block.min)}</td>
                  <td>≤ 风险分 ＜</td>
                  <td>${renderUserRiskStrategyBBlockMaxControl(block)}</td>
                  <td><span class="user-risk-b-action-display">${escapeHtml(block.defaultAction)}</span></td>
                  <td>
                    <div class="user-risk-b-operation-links">
                      <button class="user-risk-b-operation-link ${!isEditMode || !canDelete ? "disabled" : ""}" type="button" ${isEditMode && canDelete ? `data-workbench-remove-block="${block.id}"` : "disabled"}>删除</button>
                      <button class="user-risk-b-operation-link ${!isEditMode ? "disabled" : ""}" type="button" ${isEditMode ? `data-workbench-add-block="${block.id}"` : "disabled"}>添加区间</button>
                      <button class="user-risk-b-operation-link ${!isEditMode ? "disabled" : ""}" type="button" ${isEditMode ? `data-b-workbench-edit-rule="${block.id}"` : "disabled"}>编辑规则</button>
                    </div>
                  </td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderUserRiskStrategyBActionTable(draft, isEditMode = true) {
  return renderWorkbenchBActionTable(draft, getUserRiskWorkbenchRenderConfig(), isEditMode);
}

function renderUserRiskStrategyBBlockMaxControl(block) {
  return `<span class="user-risk-b-max-value${block.max === "+∞" ? " infinite" : ""}">${escapeHtml(block.max === "+∞" ? "+∞" : block.max)}</span>`;
}

function openBlockRuleModal(blockId, sourcePage = state.currentPage, mode = "edit") {
  if (isWorkbenchBReadOnly(sourcePage)) return;
  const draft = getWorkbenchDraftByPage(sourcePage);
  const blockIndex = draft?.blocks?.findIndex((item) => item.id === blockId) ?? -1;
  const block = blockIndex >= 0 ? draft.blocks[blockIndex] : null;
  if (!block) return;
  const config = getWorkbenchRenderConfigByPage(sourcePage);
  const isLast = blockIndex === draft.blocks.length - 1 || block.max === "+∞";
  const nextBlock = draft?.blocks?.[blockIndex + 1] || null;
  const nextAction = config.actionOptions[0] || "直接放行";
  state.activeBlockRuleId = blockId;
  state.blockRuleModalMode = mode;
  state.blockRuleInsertAfterId = mode === "create-after" ? blockId : "";
  state.blockRuleModalNextBlockSnapshot = nextBlock ? deepClone(nextBlock) : null;
  state.blockRuleModalDraft =
    mode === "create-after"
      ? createUserRiskWorkbenchBlock({
          min: isLast ? block.min : block.max,
          max: "",
          defaultAction: nextAction,
          rules: []
        })
      : deepClone(block);
  state.blockRuleModalSourcePage = sourcePage;
  state.modalOpen = true;
  state.modalKind = "block-rule";
  renderOverlay();
}

function validateBlockRuleModalDraft(block, draft, sourcePage, mode = "edit") {
  if (!block || !draft) return "区间配置不存在";
  const maxValue = String(draft.max || "").trim();
  const sourceBlocks = getWorkbenchDraftByPage(sourcePage)?.blocks || [];
  const sourceIndex = sourceBlocks.findIndex((item) => item.id === block.id);
  const targetBlock = sourceIndex >= 0 ? sourceBlocks[sourceIndex] : null;
  const isEditTail = mode === "edit" && (sourceIndex === sourceBlocks.length - 1 || targetBlock?.max === "+∞");
  if (isEditTail) return "";
  if (!/^\d+$/.test(maxValue)) return "请填写合法的最大值";
  if (Number(maxValue) <= Number(draft.min || 0)) return "最大值必须大于最小值";

  if (mode === "edit") {
    const next = sourceBlocks[sourceIndex + 1];
    if (next && next.max !== "+∞" && Number(maxValue) >= Number(next.max)) {
      return "最大值必须小于下一分段上限";
    }
    return "";
  }

  const nextSnapshot = state.blockRuleModalNextBlockSnapshot;
  if (nextSnapshot && nextSnapshot.max !== "+∞" && Number(maxValue) >= Number(nextSnapshot.max)) {
    return "最大值必须小于后一分段上限";
  }
  return "";
}

function renderBlockRuleTagRuleRow(rule, config = getUserRiskWorkbenchRenderConfig()) {
  return `
    <div class="user-risk-tag-rule-row">
      <select class="user-risk-tag-rule-select" data-block-rule-field="dimension" data-rule-id="${rule.id}">${optionHtml(["账号", "设备", "IP"], rule.dimension)}</select>
      <select class="user-risk-tag-rule-select" data-block-rule-field="operator" data-rule-id="${rule.id}">${optionHtml(["是", "不是"], rule.operator)}</select>
      <select class="user-risk-tag-rule-select wide" data-block-rule-field="label" data-rule-id="${rule.id}">${optionHtml(getWorkbenchTagRuleLabelOptions(rule.dimension, config), rule.label)}</select>
      <span class="user-risk-tag-rule-text">执行</span>
      <select class="user-risk-tag-rule-select action" data-block-rule-field="action" data-rule-id="${rule.id}">${optionHtml(config.actionOptions, rule.action)}</select>
      <button class="user-risk-tag-rule-remove" type="button" data-block-rule-remove="${rule.id}">删除</button>
    </div>
  `;
}

function isCStrategyWorkbenchPage(page = state.currentPage) {
  return page === "user-risk-engine" || page === "payment-risk-engine";
}

function getWorkbenchBlockDisplayMax(block) {
  return block.max === "+∞" ? "+∞" : block.displayMax || block.max || "待定";
}

function getWorkbenchTagRuleSummaryText(block) {
  return block.rules?.length
    ? `已配置${block.rules.length}条针对标签用户的差异化处理规则`
    : "针对特定标签用户，设置差异化处置逻辑？";
}

function renderCBlockRuleModal(ruleBlock, sourcePage, config) {
  const intervalText = `${ruleBlock.min} ≤ 风险分 ＜ ${getWorkbenchBlockDisplayMax(ruleBlock)}`;
  const isReadonly = sourcePage === "user-risk-engine" ? isUserRiskCReadonly() : isPaymentRiskCReadonly();
  return `
    <div class="drawer-overlay">
      <div class="user-risk-tag-modal">
        <div class="user-risk-tag-modal-head">
          <h2 class="user-risk-tag-modal-title">配置标签规则</h2>
          <button class="user-risk-tag-modal-close" type="button" aria-label="关闭">×</button>
        </div>
        <div class="user-risk-tag-modal-body">
          <div class="user-risk-tag-modal-notice">
            <div class="user-risk-tag-modal-notice-icon">💡</div>
            <div class="user-risk-tag-modal-notice-copy">
              <div class="user-risk-tag-modal-notice-title">配置说明</div>
              <p>风控系统将基于风险分数匹配规则。优先按标签规则下发处置动作，若均未命中，则执行默认处置。</p>
            </div>
          </div>
          <div class="user-risk-tag-modal-section">
            <div class="user-risk-tag-modal-section-title">分数区间</div>
            <div class="user-risk-tag-modal-section-tip">满足以下风险分时，优先匹配标签规则；均未命中则使用默认处置动作</div>
            <div class="user-risk-tag-modal-interval">${escapeHtml(intervalText)}</div>
          </div>
          <div class="user-risk-tag-modal-section">
            <div class="user-risk-tag-modal-section-head">
              <div class="user-risk-tag-modal-section-title">标签规则</div>
              <div class="user-risk-tag-modal-section-tip">系统会按顺序依次匹配标签规则，一旦命中就使用该规则的处置动作</div>
            </div>
            <div class="user-risk-tag-modal-rule-list">
              ${ruleBlock.rules.map((rule) => renderBlockRuleTagRuleRow(rule, config)).join("")}
            </div>
            ${
              isReadonly
                ? ""
                : '<button class="user-risk-tag-modal-add" type="button" data-block-rule-add>+ 添加标签规则</button>'
            }
          </div>
        </div>
        <div class="user-risk-tag-modal-footer">
          <button class="primary-btn user-risk-tag-modal-btn" type="button" id="block-rule-confirm">确认</button>
          <button class="secondary-btn user-risk-tag-modal-btn" type="button" id="block-rule-cancel">取消</button>
        </div>
      </div>
    </div>
  `;
}

function renderBlockRuleModal() {
  const block = state.blockRuleModalDraft;
  if (!block) return;
  const sourcePage = state.blockRuleModalSourcePage || state.currentPage;
  const config = getWorkbenchRenderConfigByPage(sourcePage);
  const actions = config.actionOptions;
  const sourceDraft = getWorkbenchDraftByPage(sourcePage);
  const sourceIndex = sourceDraft?.blocks?.findIndex((item) => item.id === state.activeBlockRuleId) ?? -1;
  const sourceBlock = sourceIndex >= 0 ? sourceDraft.blocks[sourceIndex] : null;
  const isCreateMode = state.blockRuleModalMode === "create-after";
  const isTailEdit = !isCreateMode && sourceBlock && (sourceIndex === sourceDraft.blocks.length - 1 || sourceBlock.max === "+∞");
  if (isCStrategyWorkbenchPage(sourcePage)) {
    drawerRoot.innerHTML = renderCBlockRuleModal(block, sourcePage, config);
  } else {
  const maxLabel = isTailEdit && block.max === "+∞" ? "+∞" : block.max || "待填写";
  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <div class="user-risk-b-modal">
        <div class="user-risk-b-modal-head">
          <h2 class="user-risk-b-modal-title">配置处置动作</h2>
          <button class="user-risk-b-modal-close" type="button" aria-label="关闭">×</button>
        </div>
        <div class="user-risk-b-modal-body">
          <div class="user-risk-b-modal-notice">
            <div class="user-risk-b-modal-notice-icon">💡</div>
            <div class="user-risk-b-modal-notice-copy">
              <div class="user-risk-b-modal-notice-title">配置说明</div>
              <p>风控系统将基于风险分数匹配对应分区间，然后优先按标签规则下发处置动作；若均未命中，则执行默认处置。</p>
            </div>
          </div>
          <div class="user-risk-b-modal-section">
            <div class="user-risk-b-modal-sub">风险总分</div>
            <div class="user-risk-b-modal-boundary-row">
              <span class="user-risk-b-modal-boundary-value">${escapeHtml(block.min)}</span>
              <div class="user-risk-b-modal-boundary-symbol">≤ 风险分 ＜</div>
              ${
                isTailEdit
                  ? `<span class="user-risk-b-modal-boundary-value">${escapeHtml(maxLabel)}</span>`
                  : `<input class="user-risk-b-modal-boundary-input" type="text" inputmode="numeric" value="${escapeHtml(block.max)}" data-block-rule-max />`
              }
            </div>
            <div class="user-risk-b-modal-sub">处置动作</div>
            <div class="user-risk-b-modal-actions">
              ${actions
                .map(
                  (action) => `
                    <button class="user-risk-b-modal-action-chip ${block.defaultAction === action ? "active" : ""}" type="button" data-block-rule-action="${escapeHtml(action)}">
                      ${escapeHtml(action)}
                    </button>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="user-risk-b-modal-section">
            <div class="user-risk-b-modal-rule-head">
              <span>标签规则</span>
              <span class="user-risk-b-modal-rule-tip">${escapeHtml(config.helperText)}</span>
            </div>
            <div class="user-risk-b-modal-rule-list">
              ${block.rules.map((rule) => renderBlockRuleTagRuleRow(rule, config)).join("")}
            </div>
            <button class="user-risk-b-modal-add-rule" type="button" data-block-rule-add>+ 添加标签规则</button>
          </div>
        </div>
        <div class="user-risk-b-modal-footer">
          <button class="primary-btn user-risk-b-modal-btn" type="button" id="block-rule-confirm">确认</button>
          <button class="secondary-btn user-risk-b-modal-btn" type="button" id="block-rule-cancel">取消</button>
        </div>
      </div>
    </div>
  `;
  }

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector(".user-risk-b-modal-close, .user-risk-tag-modal-close")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#block-rule-cancel")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("[data-block-rule-max]")?.addEventListener("input", (event) => {
    state.blockRuleModalDraft.max = String(event.target.value).replace(/[^\d]/g, "").trim();
    if (state.blockRuleModalNextBlockSnapshot) {
      state.blockRuleModalNextBlockSnapshot.min = state.blockRuleModalDraft.max || "";
    }
  });
  drawerRoot.querySelectorAll("[data-block-rule-action]").forEach((button) => {
    button.addEventListener("click", () => {
      state.blockRuleModalDraft.defaultAction = button.dataset.blockRuleAction;
      renderBlockRuleModal();
    });
  });
  drawerRoot.querySelector("[data-block-rule-add]")?.addEventListener("click", () => {
    state.blockRuleModalDraft.rules.push(createUserRiskTagRule({ label: getWorkbenchTagRuleLabelOptions("账号", config)[0], action: actions[0] }));
    renderBlockRuleModal();
  });
  drawerRoot.querySelectorAll("[data-block-rule-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.blockRuleModalDraft.rules = state.blockRuleModalDraft.rules.filter((item) => item.id !== button.dataset.blockRuleRemove);
      renderBlockRuleModal();
    });
  });
  drawerRoot.querySelectorAll("[data-block-rule-field]").forEach((field) => {
    field.addEventListener("change", () => {
      const rule = state.blockRuleModalDraft.rules.find((item) => item.id === field.dataset.ruleId);
      if (!rule) return;
      rule[field.dataset.blockRuleField] = field.value;
      if (field.dataset.blockRuleField === "dimension" && !getWorkbenchTagRuleLabelOptions(field.value, config).includes(rule.label)) {
        rule.label = getWorkbenchTagRuleLabelOptions(field.value, config)[0];
      }
      renderBlockRuleModal();
    });
  });
  drawerRoot.querySelector("#block-rule-confirm")?.addEventListener("click", () => {
    const draft = getWorkbenchDraftByPage(sourcePage);
    const index = draft?.blocks?.findIndex((item) => item.id === state.activeBlockRuleId) ?? -1;
    if (index < 0 || !state.blockRuleModalDraft) {
      closeModal();
      return;
    }
    const validationMessage = validateBlockRuleModalDraft(draft.blocks[index], state.blockRuleModalDraft, sourcePage, state.blockRuleModalMode);
    if (validationMessage) {
      showToast(validationMessage);
      return;
    }
    if (state.blockRuleModalMode === "create-after") {
      if (
        !insertWorkbenchBlockWithDraftAfter(
          draft.blocks,
          state.blockRuleInsertAfterId || state.activeBlockRuleId,
          state.blockRuleModalDraft
        )
      ) {
        showToast("新增区间失败");
        return;
      }
    } else {
      draft.blocks[index] = deepClone(state.blockRuleModalDraft);
      syncWorkbenchNextBlockMin(draft.blocks, index);
    }
    closeModal();
    if (sourcePage === "user-risk-engine") {
      renderUserRiskStrategyCPage();
      return;
    }
    if (sourcePage === "payment-risk-engine") {
      renderPaymentRiskStrategyCPage();
      return;
    }
    if (sourcePage === "user-risk-engine-b") {
      renderUserRiskStrategyBPage();
      return;
    }
    if (sourcePage === "payment-risk-engine-b") {
      renderPaymentRiskStrategyBPage();
    }
  });
}

function bindUserRiskWorkbenchBEvents(draft) {
  const isEditMode = state.userRiskWorkbenchBMode === "edit";
  pageContent.querySelectorAll("[data-workbench-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.userRiskWorkbenchEntry = button.dataset.workbenchEntry;
      state.userRiskWorkbenchDraft = null;
      state.userRiskWorkbenchBMode = "view";
      renderUserRiskStrategyBPage();
    });
  });

  pageContent.querySelector("#user-risk-workbench-edit")?.addEventListener("click", () => {
    const source = getUserRiskWorkbenchStrategyById(state.userRiskWorkbenchSourceId || draft.id);
    state.userRiskWorkbenchDraft = source ? deepClone(source) : deepClone(draft);
    state.userRiskWorkbenchBMode = "edit";
    renderUserRiskStrategyBPage();
  });

  if (!isEditMode) return;

  pageContent.querySelector("#user-risk-workbench-name")?.addEventListener("input", (event) => {
    draft.name = event.target.value;
  });

  pageContent.querySelector("#user-risk-workbench-switch")?.addEventListener("click", () => {
    draft.enabled = !draft.enabled;
    const source = getUserRiskWorkbenchStrategyById(draft.id);
    if (source) source.enabled = draft.enabled;
    renderUserRiskStrategyBPage();
    showToast(draft.enabled ? "策略已生效" : "策略已停用");
  });

  pageContent.querySelector("#user-risk-workbench-save")?.addEventListener("click", () => {
    upsertUserRiskWorkbenchDraft();
    state.userRiskWorkbenchBMode = "view";
    showToast("策略已保存");
    renderUserRiskStrategyBPage();
  });

  pageContent.querySelector("#user-risk-workbench-cancel")?.addEventListener("click", () => {
    const source = getUserRiskWorkbenchStrategyById(state.userRiskWorkbenchSourceId || draft.id);
    state.userRiskWorkbenchDraft = source ? deepClone(source) : deepClone(draft);
    state.userRiskWorkbenchBMode = "view";
    renderUserRiskStrategyBPage();
  });

  pageContent.querySelectorAll("[data-workbench-add-block]").forEach((button) => {
    button.addEventListener("click", () => {
      openBlockRuleModal(button.dataset.workbenchAddBlock, "user-risk-engine-b", "create-after");
    });
  });

  pageContent.querySelectorAll("[data-workbench-remove-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!removeWorkbenchMiddleBlock(draft.blocks, button.dataset.workbenchRemoveBlock)) return;
      renderUserRiskStrategyBPage();
    });
  });

  pageContent.querySelectorAll("[data-b-workbench-edit-rule]").forEach((button) => {
    button.addEventListener("click", () => {
      openBlockRuleModal(button.dataset.bWorkbenchEditRule, "user-risk-engine-b", "edit");
    });
  });
}

function renderUserRiskStrategyCard(item) {
  return `
    <article class="behavior-management-card user-risk-strategy-card" data-user-risk-strategy-open="${item.id}">
      <div class="behavior-management-card-body">
        <div class="behavior-management-card-head user-risk-strategy-card-head">
          <div class="user-risk-strategy-card-title-wrap">
            <div class="behavior-management-card-title user-risk-strategy-card-title">${escapeHtml(item.name)}</div>
            <span class="user-risk-strategy-entry-badge">${escapeHtml(item.entry)}</span>
          </div>
          <span class="user-risk-strategy-status-chip ${item.enabled ? "enabled" : "disabled"}">${item.enabled ? "启用" : "停用"}</span>
        </div>
        <p class="behavior-management-card-desc user-risk-strategy-card-desc">${escapeHtml(item.description)}</p>
        <div class="user-risk-strategy-card-stats">
          <div class="user-risk-strategy-card-stat"><span class="behavior-management-card-stat-label">策略层数</span><span class="behavior-management-card-stat-value">${item.layers.length}</span></div>
          <div class="user-risk-strategy-card-stat"><span class="behavior-management-card-stat-label">风险行为数</span><span class="behavior-management-card-stat-value">${item.behaviors.length}</span></div>
          <div class="user-risk-strategy-card-stat"><span class="behavior-management-card-stat-label">标签数</span><span class="behavior-management-card-stat-value">${item.tags.length}</span></div>
          <div class="user-risk-strategy-card-stat"><span class="behavior-management-card-stat-label">最近命中量</span><span class="behavior-management-card-stat-value">${escapeHtml(item.metrics.hits)}</span></div>
        </div>
        <div class="user-risk-strategy-card-meta">
          <div>动作分布：${escapeHtml(summarizeUserRiskStrategyActions(item))}</div>
          <div>最近更新：${escapeHtml(item.updatedAt || "-")}</div>
        </div>
      </div>
      <div class="user-risk-strategy-card-actions">
        <button class="user-risk-strategy-card-action" type="button" data-user-risk-strategy-action="view" data-id="${item.id}">查看</button>
        <button class="user-risk-strategy-card-action" type="button" data-user-risk-strategy-action="edit" data-id="${item.id}">编辑</button>
        <button class="user-risk-strategy-card-action" type="button" data-user-risk-strategy-action="copy" data-id="${item.id}">复制</button>
        <button class="user-risk-strategy-card-action" type="button" data-user-risk-strategy-action="toggle" data-id="${item.id}">${item.enabled ? "停用" : "启用"}</button>
      </div>
    </article>
  `;
}

function renderUserRiskBehaviorPickerCard(card, strategy) {
  const coefficient = Number(card.coefficient ?? 0.9);
  return `
    <article class="user-risk-behavior-picker-card">
      <div class="user-risk-behavior-picker-main">
        <div class="user-risk-behavior-picker-name-row">
          <div class="user-risk-behavior-picker-copy">
            <div class="user-risk-behavior-picker-name">${escapeHtml(card.displayName || card.name)}</div>
          </div>
          <button class="user-risk-behavior-picker-edit" type="button" data-workbench-behavior-edit="${card.id}" title="删除行为">🗑</button>
        </div>
        <div class="user-risk-behavior-picker-config-row">
          <div class="user-risk-behavior-picker-config-label">系数配置</div>
          <div class="user-risk-behavior-picker-slider-row">
            <input
              class="user-risk-behavior-picker-slider-input"
              type="range"
              min="0"
              max="1"
              step="0.1"
              value="${escapeHtml(coefficient.toFixed(1))}"
              data-workbench-behavior-coefficient="${escapeHtml(card.displayName || card.name)}"
              style="--slider-progress:${Math.max(0, Math.min(100, coefficient * 100))}%"
            />
            <span class="user-risk-behavior-picker-slider-value">${escapeHtml(coefficient.toFixed(1))}</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function getUserRiskWorkbenchRenderConfig() {
  return {
    actionOptions: ["登录拦截", "验证码验证", "通知提醒", "滑块验证", "标记风险", "直接放行"],
    helperText: "标签规则顺序执行，均未命中时使用默认处置动作",
    ruleLabelOptions: {
      "账号": ["出租账号", "低信用账号", "信任期账号", "工作室账号"],
      "设备": ["信任设备", "低信用设备", "工作室设备"],
      "IP": ["信任IP", "低信用IP", "代理IP/VPN", "工作室IP"]
    }
  };
}

function getPaymentRiskWorkbenchRenderConfig() {
  return {
    actionOptions: ["支付拦截", "验证码验证", "通知提醒", "滑块验证", "标记风险", "直接放行"],
    helperText: "标签规则顺序执行，均未命中时使用默认处置动作",
    ruleLabelOptions: {
      "账号": ["代充账号", "高风险账号", "低信用账号", "大R/高价值账号"],
      "设备": ["风险设备", "低信用设备", "工作室设备", "频繁充值设备"],
      "IP": ["海外IP", "代理IP/VPN", "机房IP", "工作室IP"]
    }
  };
}

function renderWorkbenchBlock(block, index, total, config = getUserRiskWorkbenchRenderConfig()) {
  const hasDelete = index > 0 && index < total - 1;
  return `
    <section class="user-risk-score-block user-risk-editor-score-card">
      <div class="user-risk-score-block-head">
        <div class="user-risk-score-block-meta">
          <div class="user-risk-score-block-caption">风险得分区间</div>
          <div class="user-risk-score-block-range">
            <span class="user-risk-score-block-start">${escapeHtml(block.min)}</span>
            <span class="user-risk-score-block-separator">≤ 风险分 &lt;</span>
            ${renderUserRiskScoreBoundControl(block)}
          </div>
        </div>
        <div class="user-risk-score-block-tools">
          <button class="user-risk-score-block-tool add" type="button" aria-label="新增区间" data-workbench-add-block="${block.id}">+</button>
          ${hasDelete ? `<button class="user-risk-score-block-tool remove" type="button" aria-label="删除区间" data-workbench-remove-block="${block.id}">🗑</button>` : ""}
        </div>
      </div>
      <div class="user-risk-score-block-label">默认处置动作</div>
      <div class="user-risk-score-block-actions">
        ${renderWorkbenchActionChips(block.defaultAction, block.id, config.actionOptions)}
      </div>
      <div class="user-risk-score-block-rule-head">
        <span>用户标签规则</span>
        <span class="user-risk-score-block-rule-tip">${config.helperText}</span>
      </div>
      <div class="user-risk-score-block-rules">
        ${block.rules.map((rule) => renderWorkbenchTagRuleRow(block.id, rule, config)).join("")}
      </div>
      <button class="user-risk-score-block-add-rule" type="button" data-workbench-add-rule="${block.id}">+ 添加补充规则</button>
    </section>
  `;
}

function renderUserRiskScoreBoundControl(block) {
  if (block.max === "+∞") {
    return `<span class="user-risk-score-block-end">${escapeHtml(block.max)}</span>`;
  }

  return `
    <span class="user-risk-score-block-bound-control">
      <input type="text" inputmode="numeric" value="${escapeHtml(block.max)}" data-workbench-block-max="${block.id}" />
    </span>
  `;
}

function renderUserRiskWorkbenchBlock(block, index) {
  const draft = getUserRiskWorkbenchDraft();
  const total = draft?.blocks?.length || 0;
  return renderWorkbenchBlock(block, index, total, getUserRiskWorkbenchRenderConfig());
}

function renderWorkbenchActionChips(activeAction, blockId, actions) {
  return actions
    .map(
      (action) => `
        <button class="user-risk-action-chip ${activeAction === action ? "active" : ""}" type="button" data-workbench-block-action="${blockId}" data-workbench-action-value="${action}">
          ${action}
        </button>
      `
    )
    .join("");
}

function renderUserRiskActionChips(activeAction, blockId) {
  return renderWorkbenchActionChips(activeAction, blockId, getUserRiskWorkbenchRenderConfig().actionOptions);
}

function renderWorkbenchTagRuleRow(blockId, rule, config = getUserRiskWorkbenchRenderConfig()) {
  return `
    <div class="user-risk-tag-rule-row">
      <select data-rule-field="dimension" data-rule-id="${rule.id}" data-rule-block-id="${blockId}">${optionHtml(["账号", "设备", "IP"], rule.dimension)}</select>
      <select data-rule-field="operator" data-rule-id="${rule.id}" data-rule-block-id="${blockId}">${optionHtml(["是", "不是"], rule.operator)}</select>
      <select data-rule-field="label" data-rule-id="${rule.id}" data-rule-block-id="${blockId}">${optionHtml(getWorkbenchTagRuleLabelOptions(rule.dimension, config), rule.label)}</select>
      <span class="user-risk-tag-rule-text">，执行</span>
      <select data-rule-field="action" data-rule-id="${rule.id}" data-rule-block-id="${blockId}">${optionHtml(config.actionOptions, rule.action)}</select>
      <button class="user-risk-tag-rule-delete" type="button" data-workbench-remove-rule="${rule.id}" data-workbench-remove-rule-block="${blockId}">× 删除</button>
    </div>
  `;
}

function renderUserRiskTagRuleRow(blockId, rule) {
  return renderWorkbenchTagRuleRow(blockId, rule, getUserRiskWorkbenchRenderConfig());
}

function getWorkbenchTagRuleLabelOptions(dimension, config = getUserRiskWorkbenchRenderConfig()) {
  return config.ruleLabelOptions[dimension] || config.ruleLabelOptions["账号"] || ["默认标签"];
}

function getUserRiskTagRuleLabelOptions(dimension) {
  return getWorkbenchTagRuleLabelOptions(dimension, getUserRiskWorkbenchRenderConfig());
}

function getWorkbenchRenderConfigByPage(page = state.currentPage) {
  return page === "payment-risk-engine" || page === "payment-risk-engine-b"
    ? getPaymentRiskWorkbenchRenderConfig()
    : getUserRiskWorkbenchRenderConfig();
}

function getWorkbenchDraftByPage(page = state.currentPage) {
  if (page === "user-risk-engine") {
    return getUserRiskCDraft();
  }
  if (page === "payment-risk-engine") {
    return getPaymentRiskCDraft();
  }
  return page === "payment-risk-engine" || page === "payment-risk-engine-b"
    ? getPaymentRiskWorkbenchDraft()
    : getUserRiskWorkbenchDraft();
}

function getWorkbenchStrategyByIdForPage(page, id) {
  return page === "payment-risk-engine" || page === "payment-risk-engine-b"
    ? getPaymentRiskWorkbenchStrategyById(id)
    : getUserRiskWorkbenchStrategyById(id);
}

function getWorkbenchBModeByPage(page = state.currentPage) {
  return page === "payment-risk-engine-b" ? state.paymentRiskWorkbenchBMode : state.userRiskWorkbenchBMode;
}

function setWorkbenchBModeByPage(page = state.currentPage, mode = "view") {
  if (page === "payment-risk-engine-b") {
    state.paymentRiskWorkbenchBMode = mode;
    return;
  }
  state.userRiskWorkbenchBMode = mode;
}

function isWorkbenchBReadOnly(page = state.currentPage) {
  return (page === "user-risk-engine-b" || page === "payment-risk-engine-b") && getWorkbenchBModeByPage(page) !== "edit";
}

function upsertWorkbenchDraftByPage(page) {
  if (page === "payment-risk-engine" || page === "payment-risk-engine-b") {
    upsertPaymentRiskWorkbenchDraft();
    return;
  }
  upsertUserRiskWorkbenchDraft();
}

function bindUserRiskWorkbenchEvents(draft) {
  pageContent.querySelectorAll("[data-workbench-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.userRiskWorkbenchEntry = button.dataset.workbenchEntry;
      state.userRiskWorkbenchDraft = null;
      renderUserRiskStrategyPage();
    });
  });

  pageContent.querySelector("#user-risk-workbench-name")?.addEventListener("input", (event) => {
    draft.name = event.target.value;
  });

  pageContent.querySelector("#user-risk-workbench-switch")?.addEventListener("click", () => {
    draft.enabled = !draft.enabled;
    const source = getUserRiskWorkbenchStrategyById(draft.id);
    if (source) source.enabled = draft.enabled;
    renderUserRiskStrategyPage();
    showToast(draft.enabled ? "策略已生效" : "策略已停用");
  });

  pageContent.querySelector("#user-risk-workbench-save")?.addEventListener("click", () => {
    upsertUserRiskWorkbenchDraft();
    showToast("策略已保存");
    renderUserRiskStrategyPage();
  });

  pageContent.querySelector("#user-risk-workbench-cancel")?.addEventListener("click", () => {
    const source = getUserRiskWorkbenchStrategyById(state.userRiskWorkbenchSourceId || draft.id);
    state.userRiskWorkbenchDraft = source ? deepClone(source) : deepClone(draft);
    renderUserRiskStrategyPage();
  });

  pageContent.querySelectorAll("[data-workbench-behavior-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTagCardId = button.dataset.workbenchBehaviorEdit;
      state.behaviorRuleModalMode = "config";
      const card = findTagCard(state.activeTagCardId);
      state.behaviorRuleDraft = card ? cloneBehaviorRuleSpec(getManagedBehaviorRuleSpec(card)) : null;
      state.modalOpen = true;
      state.modalKind = "behavior-rule";
      state.userRiskRefreshAfterBehaviorRuleModal = true;
      renderOverlay();
    });
  });

  pageContent.querySelectorAll("[data-workbench-block-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const block = draft.blocks.find((item) => item.id === button.dataset.workbenchBlockAction);
      if (!block) return;
      block.defaultAction = button.dataset.workbenchActionValue;
      renderUserRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-add-rule]").forEach((button) => {
    button.addEventListener("click", () => {
      const block = draft.blocks.find((item) => item.id === button.dataset.workbenchAddRule);
      if (!block) return;
      block.rules.push(createUserRiskTagRule());
      renderUserRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-remove-rule]").forEach((button) => {
    button.addEventListener("click", () => {
      const block = draft.blocks.find((item) => item.id === button.dataset.workbenchRemoveRuleBlock);
      if (!block) return;
      block.rules = block.rules.filter((item) => item.id !== button.dataset.workbenchRemoveRule);
      renderUserRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-rule-field]").forEach((field) => {
    const eventName = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, () => {
      const block = draft.blocks.find((item) => item.id === field.dataset.ruleBlockId);
      const rule = block?.rules.find((item) => item.id === field.dataset.ruleId);
      if (!rule) return;
      rule[field.dataset.ruleField] = field.value;
      if (field.dataset.ruleField === "dimension" && !getUserRiskTagRuleLabelOptions(field.value).includes(rule.label)) {
        rule.label = getUserRiskTagRuleLabelOptions(field.value)[0];
        renderUserRiskStrategyPage();
      }
    });
  });

  pageContent.querySelectorAll("[data-workbench-block-max]").forEach((field) => {
    field.addEventListener("change", () => {
      const index = draft.blocks.findIndex((item) => item.id === field.dataset.workbenchBlockMax);
      const block = draft.blocks[index];
      if (!block) return;
      const nextValue = String(field.value).replace(/[^\d]/g, "").trim();
      block.max = nextValue;
      syncWorkbenchNextBlockMin(draft.blocks, index);
      renderUserRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-behavior-coefficient]").forEach((field) => {
    field.addEventListener("input", () => {
      draft.behaviorCoefficients ||= {};
      draft.behaviorCoefficients[field.dataset.workbenchBehaviorCoefficient] = Number(field.value);
      renderUserRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-add-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!insertWorkbenchBlockAfter(draft.blocks, button.dataset.workbenchAddBlock, "直接放行")) return;
      renderUserRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-remove-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!removeWorkbenchMiddleBlock(draft.blocks, button.dataset.workbenchRemoveBlock)) return;
      renderUserRiskStrategyPage();
    });
  });
}

function bindPaymentRiskWorkbenchEvents(draft, renderConfig = getPaymentRiskWorkbenchRenderConfig()) {
  pageContent.querySelectorAll("[data-payment-workbench-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.paymentRiskWorkbenchEntry = button.dataset.paymentWorkbenchEntry;
      state.paymentRiskWorkbenchDraft = null;
      renderPaymentRiskStrategyPage();
    });
  });

  pageContent.querySelector("#payment-risk-workbench-name")?.addEventListener("input", (event) => {
    draft.name = event.target.value;
  });

  pageContent.querySelector("#payment-risk-workbench-switch")?.addEventListener("click", () => {
    draft.enabled = !draft.enabled;
    const source = getPaymentRiskWorkbenchStrategyById(draft.id);
    if (source) source.enabled = draft.enabled;
    renderPaymentRiskStrategyPage();
    showToast(draft.enabled ? "支付策略已生效" : "支付策略已停用");
  });

  pageContent.querySelector("#payment-risk-workbench-save")?.addEventListener("click", () => {
    upsertPaymentRiskWorkbenchDraft();
    showToast("支付策略已保存");
    renderPaymentRiskStrategyPage();
  });

  pageContent.querySelector("#payment-risk-workbench-cancel")?.addEventListener("click", () => {
    const source = getPaymentRiskWorkbenchStrategyById(state.paymentRiskWorkbenchSourceId || draft.id);
    state.paymentRiskWorkbenchDraft = source ? deepClone(source) : deepClone(draft);
    renderPaymentRiskStrategyPage();
  });

  pageContent.querySelectorAll("[data-workbench-behavior-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTagCardId = button.dataset.workbenchBehaviorEdit;
      state.behaviorRuleModalMode = "config";
      const card = findTagCard(state.activeTagCardId);
      state.behaviorRuleDraft = card ? cloneBehaviorRuleSpec(getManagedBehaviorRuleSpec(card)) : null;
      state.modalOpen = true;
      state.modalKind = "behavior-rule";
      state.userRiskRefreshAfterBehaviorRuleModal = true;
      renderOverlay();
    });
  });

  pageContent.querySelectorAll("[data-workbench-block-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const block = draft.blocks.find((item) => item.id === button.dataset.workbenchBlockAction);
      if (!block) return;
      block.defaultAction = button.dataset.workbenchActionValue;
      renderPaymentRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-add-rule]").forEach((button) => {
    button.addEventListener("click", () => {
      const block = draft.blocks.find((item) => item.id === button.dataset.workbenchAddRule);
      if (!block) return;
      block.rules.push(createUserRiskTagRule({ label: getWorkbenchTagRuleLabelOptions("账号", renderConfig)[0], action: renderConfig.actionOptions[0] }));
      renderPaymentRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-remove-rule]").forEach((button) => {
    button.addEventListener("click", () => {
      const block = draft.blocks.find((item) => item.id === button.dataset.workbenchRemoveRuleBlock);
      if (!block) return;
      block.rules = block.rules.filter((item) => item.id !== button.dataset.workbenchRemoveRule);
      renderPaymentRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-rule-field]").forEach((field) => {
    const eventName = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, () => {
      const block = draft.blocks.find((item) => item.id === field.dataset.ruleBlockId);
      const rule = block?.rules.find((item) => item.id === field.dataset.ruleId);
      if (!rule) return;
      rule[field.dataset.ruleField] = field.value;
      if (field.dataset.ruleField === "dimension" && !getWorkbenchTagRuleLabelOptions(field.value, renderConfig).includes(rule.label)) {
        rule.label = getWorkbenchTagRuleLabelOptions(field.value, renderConfig)[0];
        renderPaymentRiskStrategyPage();
      }
    });
  });

  pageContent.querySelectorAll("[data-workbench-block-max]").forEach((field) => {
    field.addEventListener("change", () => {
      const index = draft.blocks.findIndex((item) => item.id === field.dataset.workbenchBlockMax);
      const block = draft.blocks[index];
      if (!block) return;
      const nextValue = String(field.value).replace(/[^\d]/g, "").trim();
      block.max = nextValue;
      syncWorkbenchNextBlockMin(draft.blocks, index);
      renderPaymentRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-add-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!insertWorkbenchBlockAfter(draft.blocks, button.dataset.workbenchAddBlock, "直接放行")) return;
      renderPaymentRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-remove-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!removeWorkbenchMiddleBlock(draft.blocks, button.dataset.workbenchRemoveBlock)) return;
      renderPaymentRiskStrategyPage();
    });
  });

  pageContent.querySelectorAll("[data-workbench-behavior-coefficient]").forEach((field) => {
    field.addEventListener("input", () => {
      draft.behaviorCoefficients ||= {};
      draft.behaviorCoefficients[field.dataset.workbenchBehaviorCoefficient] = Number(field.value);
      renderPaymentRiskStrategyPage();
    });
  });
}

function buildUserRiskScoreNotice(selectedBehaviors) {
  if (!selectedBehaviors.length) return "风险分 = 已选择风险行为分值累计";
  return `风险分 = ${selectedBehaviors.map((item) => `1.0 × ${item}`).join(" + ")}`;
}

function buildBehaviorCoefficientMap(names, defaultValue = 0.9) {
  return names.reduce((acc, name) => {
    acc[name] = defaultValue;
    return acc;
  }, {});
}

function getUserRiskBehaviorDisplayConfig(strategy) {
  const loginDesignNames = ["登录地异常", "登录地变化过快", "IP登录过多账号", "登录设备异常", "设备登录过多账号"];
  const registerDesignNames = ["IP注册过多账号", "设备注册过多账号", "IP高频请求注册", "设备高频请求注册"];
  const baseNames = strategy.entry === "登录" ? loginDesignNames : registerDesignNames;
  const sourceNames = strategy.selectedBehaviors?.length ? strategy.selectedBehaviors : baseNames;
  const names = sourceNames.map((_, index) => baseNames[index] || sourceNames[index]).filter(Boolean);
  const behaviorCoefficients = strategy.behaviorCoefficients || {};
  const cards = names.map((name, index) => ({
    id: `behavior-display-${strategy.entry}-${index}`,
    name,
    displayName: name,
    coefficient: Number(behaviorCoefficients[name] ?? 0.9)
  }));
  return {
    cards,
    summary: cards.length ? `风险总分 = ${cards.map((card) => `${card.coefficient.toFixed(1)} × ${card.displayName || card.name}`).join(" + ")}` : "风险总分 = 已选择风险行为系数累计",
    previewSummary: cards.length ? `风险总分 = ${cards.map((card) => card.displayName || card.name).join(" + ")}` : "风险总分 = 已选择风险行为累计"
  };
}

function getPaymentRiskSelectedBehaviorCards(selectedBehaviors) {
  const cards = getPaymentBehaviorCardsByEntry();
  return selectedBehaviors.map((name, index) => {
    const existing = cards.find((item) => item.name === name);
    if (existing) return existing;
    return {
      id: `selected-payment-behavior-${index}`,
      name
    };
  });
}

function getPaymentRiskBehaviorDisplayConfig(strategy) {
  const cards = getPaymentRiskSelectedBehaviorCards(strategy.selectedBehaviors || []);
  const behaviorCoefficients = strategy.behaviorCoefficients || {};
  const normalizedCards = cards.map((item) => ({
    ...item,
    displayName: item.displayName || item.name,
    coefficient: Number(behaviorCoefficients[item.displayName || item.name] ?? 0.9)
  }));
  return {
    cards: normalizedCards,
    summary: normalizedCards.length ? `风险总分 = ${normalizedCards.map((card) => `${card.coefficient.toFixed(1)} × ${card.displayName || card.name}`).join(" + ")}` : "风险总分 = 已选择风险行为系数累计",
    previewSummary: normalizedCards.length ? `风险总分 = ${normalizedCards.map((card) => card.displayName || card.name).join(" + ")}` : "风险总分 = 已选择风险行为累计"
  };
}

function getUserRiskCBehaviorDisplayName(name) {
  if (name === "IP批量登录多账号") return "IP登录过多账号";
  if (name === "设备批量登录多账号") return "设备登录过多账号";
  return name;
}

function getUserRiskCBehaviorPreset(entry) {
  if (entry !== "登录") return null;
  return {
    order: ["登录地异常", "登录地变化过快", "IP登录过多账号", "登录设备异常", "设备登录过多账号", "IP高频请求登录"],
    defaults: {
      "登录地异常": { selected: true },
      "登录地变化过快": { selected: true },
      "IP登录过多账号": { selected: true },
      "登录设备异常": { selected: true },
      "设备登录过多账号": { selected: true },
      "IP高频请求登录": { selected: false }
    }
  };
}

const strategyExtraActionValueMap = {
  标记风险: "风控日志标记风险",
  通知提醒: "发送提示短信/邮件",
  风控日志标记风险: "风控日志标记风险",
  "发送提示短信/邮件": "发送提示短信/邮件"
};

function normalizeStrategyExtraAction(action) {
  return strategyExtraActionValueMap[action] || action;
}

function normalizeStrategyExtraActions(actions = []) {
  const normalized = [];
  actions.forEach((action) => {
    const next = normalizeStrategyExtraAction(action);
    if (next && !normalized.includes(next)) normalized.push(next);
  });
  return normalized;
}

function isUserRiskCReadonly() {
  return state.userRiskWorkbenchCMode !== "edit";
}

function isPaymentRiskCReadonly() {
  return state.paymentRiskWorkbenchCMode !== "edit";
}

function getUserRiskCActionOptions() {
  return ["直接放行", "滑块验证", "验证码验证", "登录拦截"];
}

function getUserRiskCExtraActionOptions() {
  return ["风控日志标记风险", "发送提示短信/邮件"];
}

function getUserRiskCActionCardMeta(action) {
  const map = {
    直接放行: { icon: "✓", title: "直接放行", desc: "允许用户继续登录流程" },
    滑块验证: { icon: "◫", title: "滑块验证", desc: "用户需先完成滑块验证" },
    验证码验证: { icon: "#", title: "验证码验证", desc: "发送验证码到绑定手机进行校验" },
    登录拦截: { icon: "!", title: "拦截登录", desc: "立即中断登录流程，并拦截异常风险" }
  };
  return map[action] || { icon: "•", title: action, desc: "" };
}

function getUserRiskCBehaviorCardByName(name, entry = state.userRiskWorkbenchEntry) {
  const cards = getBehaviorCardsByEntry(entry);
  return cards.find((item) => item.name === name || getUserRiskCBehaviorDisplayName(item.name) === name) || null;
}

function getUserRiskCBehaviorCardById(cardId, entry = state.userRiskWorkbenchEntry) {
  const cards = getBehaviorCardsByEntry(entry);
  return cards.find((item) => item.id === cardId) || null;
}

function openUserRiskCBehaviorRuleView(cardId) {
  const direct = getUserRiskCBehaviorCardById(cardId);
  if (direct) {
    openBehaviorRuleModal(direct.id, "view");
    return;
  }
  const draft = getUserRiskCDraft();
  const row = draft?.behaviors?.find((item) => item.cardId === cardId);
  const fallback = row ? getUserRiskCBehaviorCardByName(row.sourceName || row.displayName, draft.entry) : null;
  if (!fallback) return;
  openBehaviorRuleModal(fallback.id, "view");
}

function parseBehaviorScoreRange(rangeText) {
  const values = String(rangeText)
    .match(/\d+(?:\.\d+)?/g)
    ?.map((item) => Number(item))
    .filter((item) => !Number.isNaN(item)) || [];
  if (!values.length) {
    return { min: 0, max: 100 };
  }
  return {
    min: values[0],
    max: values[values.length - 1]
  };
}

function calculateUserRiskCTotalScore(behaviors = []) {
  const total = behaviors.reduce((sum, item) => {
    if (!item.selected) return sum;
    return sum + Number(item.scoreMax || 0);
  }, 0);
  return Math.max(0, Math.floor(total));
}

function getUserRiskCAxisMax(behaviors = [], blocks = []) {
  const total = calculateUserRiskCTotalScore(behaviors);
  const finiteBlockMax = Math.max(
    0,
    ...blocks
      .map((item) => Number(item.max))
      .filter((item) => !Number.isNaN(item) && item !== Infinity)
  );
  const base = Math.max(95, total, finiteBlockMax);
  return Math.max(95, Math.ceil(base / 5) * 5);
}

function createUserRiskCDesignBlocks(entry, sourceBlocks = []) {
  const normalizeBlock = (block, index, list) => {
    const extraActions = normalizeStrategyExtraActions(Array.isArray(block.extraActions) ? deepClone(block.extraActions) : []);
    let defaultAction = normalizeStrategyExtraAction(block.defaultAction || getUserRiskCActionOptions()[0]);
    if (getUserRiskCExtraActionOptions().includes(defaultAction)) {
      if (!extraActions.includes(defaultAction)) extraActions.push(defaultAction);
      defaultAction = getUserRiskCActionOptions()[0];
    }
    return createUserRiskWorkbenchBlock({
      ...block,
      min: block.min || (index === 0 ? "0" : list[index - 1]?.max || "0"),
      max: index === list.length - 1 ? "+∞" : block.max,
      defaultAction,
      extraActions
    });
  };
  if (entry !== "登录") {
    return deepClone(sourceBlocks || []).map((block, index, list) => normalizeBlock(block, index, list));
  }
  return [
    createUserRiskWorkbenchBlock({ min: "0", max: "30", defaultAction: "直接放行", extraActions: [] }),
    createUserRiskWorkbenchBlock({ min: "30", max: "70", defaultAction: "滑块验证", extraActions: ["风控日志标记风险"] }),
    createUserRiskWorkbenchBlock({ min: "70", max: "90", defaultAction: "验证码验证", extraActions: ["风控日志标记风险", "发送提示短信/邮件"] }),
    createUserRiskWorkbenchBlock({ min: "90", max: "+∞", defaultAction: "登录拦截", extraActions: ["风控日志标记风险", "发送提示短信/邮件"] })
  ];
}

function createUserRiskCDraft(strategy) {
  const entry = strategy.entry || state.userRiskWorkbenchEntry;
  const preset = strategy.cLayoutVersion === 2 ? null : getUserRiskCBehaviorPreset(entry);
  const catalogCards = getBehaviorCardsByEntry(entry);
  const cards = preset
    ? preset.order
        .map((name) => catalogCards.find((item) => item.name === name || getUserRiskCBehaviorDisplayName(item.name) === name))
        .filter(Boolean)
    : catalogCards;
  const coefficientMap = strategy.behaviorCoefficients || {};
  const selectedSet = new Set((strategy.selectedBehaviors || []).map((item) => getUserRiskCBehaviorDisplayName(item)));
  const behaviors = cards.map((card, index) => {
    const displayName = getUserRiskCBehaviorDisplayName(card.name);
    const scoreRange = parseBehaviorScoreRange(getBehaviorCardScoreRange(displayName));
    const presetBehavior = preset?.defaults?.[displayName];
    const selected = Object.prototype.hasOwnProperty.call(presetBehavior || {}, "selected")
      ? presetBehavior.selected
      : selectedSet.has(displayName) || selectedSet.has(card.name);
    return {
      id: `user-risk-c-behavior-${strategy.id}-${index}`,
      cardId: card.id,
      sourceName: card.name,
      displayName,
      description: card.description || "",
      scoreMin: scoreRange.min,
      scoreMax: scoreRange.max,
      selected
    };
  });

  return {
    id: strategy.id,
    sourceId: strategy.id,
    entry,
    name: strategy.name,
    enabled: strategy.enabled,
    effectiveChannels: deepClone(strategy.effectiveChannels || []),
    behaviors,
    blocks: createUserRiskCDesignBlocks(
      preset ? entry : "preserve",
      deepClone(strategy.blocks || []).map((block) => ({
        ...block,
        rules: deepClone(block.rules || [])
      }))
    )
  };
}

function getUserRiskCDraft() {
  return state.userRiskWorkbenchCDraft || null;
}

function getUserRiskCActiveStrategy(entry = state.userRiskWorkbenchEntry) {
  return getUserRiskWorkbenchActiveStrategy(entry);
}

function ensureUserRiskCState() {
  ensureUserRiskWorkbenchState();
  const strategy = getUserRiskCActiveStrategy();
  if (!strategy) return null;
  if (!state.userRiskWorkbenchCDraft || state.userRiskWorkbenchCDraft.sourceId !== strategy.id) {
    state.userRiskWorkbenchCDraft = createUserRiskCDraft(strategy);
    state.userRiskWorkbenchCMode = "view";
    state.userRiskWorkbenchCSourceId = strategy.id;
    state.userRiskWorkbenchCSearch = "";
    state.userRiskWorkbenchCBehaviorModalDraft = null;
    state.userRiskWorkbenchCBehaviorModalSearch = "";
    state.userRiskWorkbenchCNodeDragging = null;
    state.userRiskWorkbenchCActiveBlockId = "";
    state.userRiskWorkbenchCScoreHintVisible = false;
  }
  return state.userRiskWorkbenchCDraft;
}

function getUserRiskCVisibleBehaviors(draft) {
  return draft.behaviors.filter((item) => item.selected);
}

function getUserRiskCTotalScoreText(draft) {
  return `风险总分：0~${calculateUserRiskCTotalScore(draft.behaviors)}`;
}

function getUserRiskCBehaviorModalVisibleRows() {
  const rows = state.userRiskWorkbenchCBehaviorModalDraft || [];
  const keyword = (state.userRiskWorkbenchCBehaviorModalSearch || "").trim().toLowerCase();
  if (!keyword) return rows;
  return rows.filter((item) => item.displayName.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword));
}

function getUserRiskCBehaviorModalSummary() {
  const rows = state.userRiskWorkbenchCBehaviorModalDraft || [];
  const selected = rows.filter((item) => item.selected);
  const total = calculateUserRiskCTotalScore(rows);
  return {
    selectedCount: selected.length,
    total
  };
}

function getUserRiskCBlocksForRender(draft) {
  const axisMax = getUserRiskCAxisMax(draft.behaviors, draft.blocks);
  return draft.blocks.map((block, index) => {
    const isLast = index === draft.blocks.length - 1;
    return {
      ...block,
      displayMax: isLast ? axisMax : Number(block.max || 0),
      extraActions: Array.isArray(block.extraActions) ? block.extraActions : []
    };
  });
}

function getUserRiskCActiveBlockIndex(draft) {
  const blocks = getUserRiskCBlocksForRender(draft);
  if (!blocks.length) return -1;
  const savedIndex = blocks.findIndex((item) => item.id === state.userRiskWorkbenchCActiveBlockId);
  if (savedIndex >= 0) return savedIndex;
  const fallbackIndex = 0;
  state.userRiskWorkbenchCActiveBlockId = blocks[fallbackIndex]?.id || "";
  return fallbackIndex;
}

function syncUserRiskCAdjacentBounds(blocks, index, value) {
  if (!blocks[index] || !blocks[index + 1]) return;
  blocks[index].max = String(value);
  blocks[index + 1].min = String(value);
}

function insertUserRiskCBlockAtValue(draft, value) {
  const blocks = draft.blocks;
  const finiteNodeCount = blocks.filter((item) => item.max !== "+∞").length;
  if (finiteNodeCount >= 5) return false;
  const axisMax = getUserRiskCAxisMax(draft.behaviors, blocks);
  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    const blockMin = Number(block.min || 0);
    const blockMax = block.max === "+∞" ? axisMax : Number(block.max || 0);
    if (value <= blockMin + 1 || value >= blockMax - 1) continue;
    if (block.max === "+∞") {
      const next = createUserRiskWorkbenchBlock({
        min: String(value),
        max: "+∞",
        defaultAction: block.defaultAction,
        extraActions: deepClone(block.extraActions || []),
        rules: deepClone(block.rules || []),
        levelName: block.levelName
      });
      block.max = String(value);
      blocks.splice(index + 1, 0, next);
      return true;
    }
    const next = createUserRiskWorkbenchBlock({
      min: String(value),
      max: block.max,
      defaultAction: block.defaultAction,
      extraActions: deepClone(block.extraActions || []),
      rules: deepClone(block.rules || []),
      levelName: block.levelName
    });
    block.max = String(value);
    blocks.splice(index + 1, 0, next);
    return true;
  }
  return false;
}

function removeUserRiskCBoundaryAtIndex(blocks, index) {
  if (!blocks[index] || !blocks[index + 1]) return false;
  blocks[index].max = blocks[index + 1].max;
  blocks.splice(index + 1, 1);
  return true;
}

function commitUserRiskCDraft() {
  const draft = getUserRiskCDraft();
  if (!draft) return;
  const target = getUserRiskWorkbenchStrategyById(draft.sourceId);
  if (!target) return;
  target.name = draft.name;
  target.enabled = draft.enabled;
  target.effectiveChannels = deepClone(draft.effectiveChannels || []);
  target.selectedBehaviors = draft.behaviors.filter((item) => item.selected).map((item) => item.displayName);
  target.blocks = deepClone(draft.blocks).map((block, index, list) => ({
    ...block,
    min: String(block.min || (index === 0 ? "0" : list[index - 1].max || "0")),
    max: index === list.length - 1 ? "+∞" : String(block.max || ""),
    extraActions: normalizeStrategyExtraActions(block.extraActions || []),
    rules: deepClone(block.rules || [])
  }));
  target.scoreNotice = getUserRiskBehaviorDisplayConfig(target).summary;
  target.cLayoutVersion = 2;
  target.savedAt = formatDateTime(new Date());
  target.savedBy = "wangjian02@dobest.com";
  state.userRiskWorkbenchDraft = deepClone(target);
  state.userRiskWorkbenchSourceId = target.id;
  state.userRiskWorkbenchCDraft = createUserRiskCDraft(target);
  state.userRiskWorkbenchCMode = "view";
  state.userRiskWorkbenchCSourceId = target.id;
}

function renderUserRiskCActionChips(block) {
  const actions = getUserRiskCActionOptions();
  return actions
    .map(
      (action) => `
        <button class="user-risk-c-card-action-chip ${block.defaultAction === action ? "active" : ""}" type="button" data-c-block-action="${block.id}" data-c-action-value="${action}">
          ${action}
        </button>
      `
    )
    .join("");
}

function renderUserRiskCTagRuleRow(blockId, rule) {
  const config = getUserRiskWorkbenchRenderConfig();
  return `
    <div class="user-risk-c-rule-row">
      <span class="user-risk-c-rule-prefix">若</span>
      <select class="user-risk-c-rule-select" data-c-rule-field="dimension" data-c-rule-id="${rule.id}" data-c-rule-block="${blockId}">${optionHtml(["账号", "设备", "IP"], rule.dimension)}</select>
      <select class="user-risk-c-rule-select" data-c-rule-field="operator" data-c-rule-id="${rule.id}" data-c-rule-block="${blockId}">${optionHtml(["是", "不是"], rule.operator)}</select>
      <select class="user-risk-c-rule-select wide" data-c-rule-field="label" data-c-rule-id="${rule.id}" data-c-rule-block="${blockId}">${optionHtml(getWorkbenchTagRuleLabelOptions(rule.dimension, config), rule.label, "请选择用户标签")}</select>
      <span class="user-risk-c-rule-prefix">则优先执行处置动作：</span>
      <select class="user-risk-c-rule-select action" data-c-rule-field="action" data-c-rule-id="${rule.id}" data-c-rule-block="${blockId}">${optionHtml(getUserRiskCActionOptions(), rule.action, "请选择处置动作")}</select>
      <button class="user-risk-c-rule-delete" type="button" data-c-remove-rule="${rule.id}" data-c-remove-rule-block="${blockId}">🗑</button>
    </div>
  `;
}

function renderUserRiskCBehaviorTable(draft) {
  const visibleRows = getUserRiskCVisibleBehaviors(draft);
  const isReadonly = isUserRiskCReadonly();
  return `
    <section class="user-risk-c-section-card">
      <div class="user-risk-c-section-head">
        <div class="user-risk-c-section-index">1</div>
        <div class="user-risk-c-section-copy">
          <div class="user-risk-c-section-title">配置风险检测</div>
          <div class="user-risk-c-section-tip">选择需要检测的风险行为，勾选检测项将使用于线上风险评估</div>
        </div>
      </div>
      <div class="user-risk-c-table-toolbar">
        <div class="user-risk-c-score-panel">
          <div class="user-risk-c-score-summary">
            <span class="user-risk-c-score-label">${getUserRiskCTotalScoreText(draft)}</span>
          </div>
        </div>
      </div>
      <div class="user-risk-c-table-wrap">
        <table class="user-risk-c-behavior-table">
          <thead>
            <tr>
              <th>风险行为</th>
              <th>风险描述</th>
              <th>风险分</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${visibleRows.length
              ? visibleRows
              .map(
                (item) => `
                  <tr>
                    <td>${escapeHtml(item.displayName)}</td>
                    <td>${escapeHtml(item.description)}</td>
                    <td>${escapeHtml(`${item.scoreMin} ~ ${item.scoreMax}`)}</td>
                    <td><button class="user-risk-c-link-btn" type="button" data-c-view-rule="${item.cardId}">查看规则</button></td>
                  </tr>
                `
              )
              .join("")
              : '<tr><td colspan="4" class="user-risk-c-empty-cell">暂无已配置的风险检测项</td></tr>'}
          </tbody>
        </table>
      </div>
      ${isReadonly ? "" : '<button class="user-risk-c-config-btn" type="button" id="user-risk-c-open-behavior-config">＋ 配置风险检测项</button>'}
    </section>
  `;
}

function renderUserRiskCAxis(draft) {
  const blocks = getUserRiskCBlocksForRender(draft);
  const axisMax = getUserRiskCAxisMax(draft.behaviors, draft.blocks);
  const activeIndex = getUserRiskCActiveBlockIndex(draft);
  const isReadonly = isUserRiskCReadonly();
  const nodeButtons = blocks
    .slice(0, -1)
    .map((block, index) => {
      const value = Number(block.max || 0);
      const left = `${(value / axisMax) * 100}%`;
      return `<button class="user-risk-c-axis-node ${index === activeIndex ? "active" : ""}" type="button" style="left:${left}" data-c-axis-node="${index}" title="${value}" ${isReadonly ? "disabled" : ""}></button>`;
    })
    .join("");
  const labels = blocks
    .map((block, index) => {
      const min = Number(block.min || 0);
      const max = index === blocks.length - 1 ? axisMax : Number(block.max || 0);
      const mid = ((min + max) / 2 / axisMax) * 100;
      return `<button class="user-risk-c-axis-tag ${index === activeIndex ? "active" : ""}" type="button" style="left:${mid}%" data-c-axis-tag="${block.id}">${escapeHtml(`${min}~${max}`)}</button>`;
    })
    .join("");
  const tickValues = Array.from(new Set([0, ...blocks.slice(0, -1).map((item) => Number(item.max || 0)), axisMax])).sort((a, b) => a - b);

  return `
    <div class="user-risk-c-axis-wrap">
      <div class="user-risk-c-axis-head">
        <div class="user-risk-c-section-head">
          <div class="user-risk-c-section-index">2</div>
          <div class="user-risk-c-section-copy">
            <div class="user-risk-c-section-title">匹配处置动作</div>
            <div class="user-risk-c-section-tip">依据风险总分，划定风险等级，匹配处置动作</div>
          </div>
        </div>
        <div class="user-risk-c-axis-help user-risk-c-help-anchor">
          ${state.userRiskWorkbenchCAxisHintVisible ? '<div class="user-risk-c-axis-tooltip">点击横轴添加节点，拖拽节点调整数值，拖出拖拽范围或删除键即可移除。最多支持配置5个节点。</div>' : ""}
          <button class="user-risk-c-axis-help-link" type="button" id="user-risk-c-axis-help">ⓘ 区间配置说明</button>
        </div>
      </div>
      <div class="user-risk-c-axis-ticks">
        ${tickValues.map((value) => `<span style="left:${(value / axisMax) * 100}%">${value}</span>`).join("")}
      </div>
      <div class="user-risk-c-axis-bar" id="user-risk-c-axis-bar">
        <div class="user-risk-c-axis-gradient"></div>
        ${nodeButtons}
      </div>
    </div>
  `;
}

function renderUserRiskCBlockCards(draft) {
  const blocks = getUserRiskCBlocksForRender(draft);
  const activeIndex = getUserRiskCActiveBlockIndex(draft);
  const block = blocks[activeIndex];
  const isReadonly = isUserRiskCReadonly();
  if (!block) return "";
  const tabHtml = blocks
    .map((item, index) => `
      <button class="user-risk-c-card-tab ${index === activeIndex ? "active" : ""}" type="button" data-c-card-tab="${item.id}">
        ${escapeHtml(`${item.min}~${item.displayMax}`)}
      </button>
    `)
    .join("");
  return `
    <section class="user-risk-c-risk-card">
      <div class="user-risk-c-risk-card-tabs">
        <div class="user-risk-c-risk-card-tab-list">${tabHtml}</div>
      </div>
      <div class="user-risk-c-card-divider"></div>
      <div class="user-risk-c-config-grid">
        <div class="user-risk-c-config-field action-row">
          <div class="user-risk-c-config-field-label">处置动作：</div>
          <div class="user-risk-c-inline-action-group">
            ${getUserRiskCActionOptions()
              .map((action) => {
                const meta = getUserRiskCActionCardMeta(action);
                return `
                  <button class="user-risk-c-inline-action ${block.defaultAction === action ? "active" : ""}" type="button" data-c-block-action="${block.id}" data-c-action-value="${action}" ${isReadonly ? "disabled" : ""}>
                    <span class="user-risk-c-inline-action-icon">${meta.icon}</span>
                    <span>${meta.title}</span>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>
        <div class="user-risk-c-config-field extra-row">
          <div class="user-risk-c-config-field-label">附加动作：</div>
          <div class="user-risk-c-inline-extra-group">
            ${getUserRiskCExtraActionOptions()
              .map(
                (action) => `
                  <label class="user-risk-c-inline-extra">
                    <input type="checkbox" data-c-extra-action="${block.id}" data-c-extra-action-value="${action}" ${block.extraActions.includes(action) ? "checked" : ""} ${isReadonly ? "disabled" : ""} />
                    <span>${action}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="user-risk-c-config-entry">
          <button class="user-risk-c-tag-entry ${block.rules.length ? "has-rules" : ""}" type="button" data-c-edit-rule-block="${block.id}" ${isReadonly ? "disabled" : ""}>
            <span class="user-risk-c-tag-entry-icon" aria-hidden="true"><span class="user-risk-c-tag-entry-glyph"></span></span>
            <span class="user-risk-c-tag-entry-copy">${escapeHtml(getWorkbenchTagRuleSummaryText(block))}</span>
            <span class="user-risk-c-tag-entry-arrow">›</span>
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderUserRiskStrategyCPage() {
  const draft = ensureUserRiskCState();
  const strategy = getUserRiskCActiveStrategy();
  if (!draft || !strategy) {
    pageContent.innerHTML = `<section class="placeholder-panel">当前入口暂无策略配置。</section>`;
    return;
  }

  const entry = state.userRiskWorkbenchEntry;
  const isReadonly = isUserRiskCReadonly();
  const statusHelpText = "策略关闭时，系统仍会检测风险，但不会执行拦截、验证等实际处置动作。";

  pageContent.innerHTML = `
    <section class="user-risk-workbench-page user-risk-editor-page user-risk-c-page ${isReadonly ? "is-readonly" : ""}">
      <section class="user-risk-editor-header">
        <div class="user-risk-editor-header-main">
          <div class="user-risk-editor-title-row">
            <h1 class="user-risk-editor-title">用户风控策略</h1>
            <p class="user-risk-editor-desc">支持根据风险分和用户标签，配置安全处置措施，覆盖登录、注册等业务场景。</p>
          </div>
          <div class="user-risk-editor-toolbar">
            <div class="user-risk-workbench-entry-tabs user-risk-entry-segment">
              ${[
                { key: "登录", label: "账号登录" },
                { key: "注册", label: "账号注册" }
              ]
                .map((item) => `<button class="user-risk-workbench-entry-tab ${entry === item.key ? "active" : ""}" type="button" data-c-entry="${item.key}">${item.label}</button>`)
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="user-risk-workbench-shell user-risk-editor-shell">
        <section class="user-risk-workbench-panel user-risk-c-panel">
          <section class="user-risk-c-topbar">
            <div class="user-risk-c-inline-form">
              <label class="user-risk-c-inline-field">
                <span>策略名称：</span>
                <input id="user-risk-c-name" value="${escapeHtml(draft.name)}" ${isReadonly ? "readonly" : ""} />
              </label>
              <label class="user-risk-c-inline-field compact">
                <span class="user-risk-c-status-copy">策略状态：<span class="user-risk-c-status-help">ⓘ<span class="user-risk-c-status-tooltip">${statusHelpText}</span></span></span>
                <span class="user-risk-c-switch-row"><button class="switch ${draft.enabled ? "on" : ""}" id="user-risk-c-switch" type="button" ${isReadonly ? "disabled" : ""}></button><span class="user-risk-c-switch-text">${draft.enabled ? "启用" : "停用"}</span></span>
              </label>
            </div>
            <div class="user-risk-c-topbar-actions">
              ${
                isReadonly
                  ? '<button class="primary-btn" type="button" id="user-risk-c-edit">编辑</button>'
                  : '<button class="secondary-btn" type="button" id="user-risk-c-cancel">取消</button><button class="primary-btn" type="button" id="user-risk-c-publish">保存策略</button>'
              }
            </div>
          </section>

          ${renderUserRiskCBehaviorTable(draft)}

          <section class="user-risk-c-section-card">
            ${renderUserRiskCAxis(draft)}
            <div class="user-risk-c-risk-card-list">
              ${renderUserRiskCBlockCards(draft)}
            </div>
          </section>
        </section>
      </section>
    </section>
  `;

  bindUserRiskStrategyCEvents(draft);
}

function bindUserRiskStrategyCEvents(draft) {
  const isReadonly = isUserRiskCReadonly();
  ensureUserRiskCHintDismissHandlers();
  ensureUserRiskCDeleteKeyHandler();
  pageContent.querySelectorAll("[data-c-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.userRiskWorkbenchEntry = button.dataset.cEntry;
      state.userRiskWorkbenchCDraft = null;
      state.userRiskWorkbenchCMode = "view";
      state.userRiskWorkbenchCSourceId = "";
      state.userRiskWorkbenchCSearch = "";
      state.userRiskWorkbenchCActiveBlockId = "";
      renderUserRiskStrategyCPage();
    });
  });

  pageContent.querySelector("#user-risk-c-name")?.addEventListener("input", (event) => {
    draft.name = event.target.value;
  });

  pageContent.querySelector("#user-risk-c-switch")?.addEventListener("click", () => {
    if (isReadonly) return;
    draft.enabled = !draft.enabled;
    renderUserRiskStrategyCPage();
  });

  pageContent.querySelector("#user-risk-c-axis-help")?.addEventListener("click", () => {
    state.userRiskWorkbenchCScoreHintVisible = false;
    state.userRiskWorkbenchCAxisHintVisible = !state.userRiskWorkbenchCAxisHintVisible;
    renderUserRiskStrategyCPage();
  });

  pageContent.querySelector("#user-risk-c-cancel")?.addEventListener("click", () => {
    const source = getUserRiskWorkbenchStrategyById(state.userRiskWorkbenchCSourceId || draft.sourceId);
    if (!source) return;
    state.userRiskWorkbenchCDraft = createUserRiskCDraft(source);
    state.userRiskWorkbenchCMode = "view";
    state.userRiskWorkbenchCActiveBlockId = "";
    renderUserRiskStrategyCPage();
  });

  pageContent.querySelector("#user-risk-c-publish")?.addEventListener("click", () => {
    commitUserRiskCDraft();
    showToast("策略已更新");
    renderUserRiskStrategyCPage();
  });

  pageContent.querySelector("#user-risk-c-edit")?.addEventListener("click", () => {
    state.userRiskWorkbenchCMode = "edit";
    renderUserRiskStrategyCPage();
  });

  pageContent.querySelector("#user-risk-c-open-behavior-config")?.addEventListener("click", () => {
    state.modalOpen = true;
    state.modalKind = "user-risk-c-behavior-config";
    state.userRiskWorkbenchCBehaviorModalDraft = deepClone(draft.behaviors);
    state.userRiskWorkbenchCBehaviorModalSearch = "";
    renderOverlay();
  });

  pageContent.querySelectorAll("[data-c-view-rule]").forEach((button) => {
    button.addEventListener("click", () => openUserRiskCBehaviorRuleView(button.dataset.cViewRule));
  });

  pageContent.querySelectorAll("[data-c-axis-tag]").forEach((button) => {
    button.addEventListener("click", () => {
      state.userRiskWorkbenchCActiveBlockId = button.dataset.cAxisTag;
      renderUserRiskStrategyCPage();
    });
  });

  pageContent.querySelectorAll("[data-c-card-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.userRiskWorkbenchCActiveBlockId = button.dataset.cCardTab;
      renderUserRiskStrategyCPage();
    });
  });

  pageContent.querySelectorAll("[data-c-block-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const block = draft.blocks.find((item) => item.id === button.dataset.cBlockAction);
      if (!block) return;
      block.defaultAction = button.dataset.cActionValue;
      renderUserRiskStrategyCPage();
    });
  });

  pageContent.querySelectorAll("[data-c-extra-action]").forEach((field) => {
    field.addEventListener("change", () => {
      const block = draft.blocks.find((item) => item.id === field.dataset.cExtraAction);
      if (!block) return;
      const action = field.dataset.cExtraActionValue;
      const next = new Set(block.extraActions || []);
      if (field.checked) {
        next.add(action);
      } else {
        next.delete(action);
      }
      block.extraActions = Array.from(next);
      renderUserRiskStrategyCPage();
    });
  });

  pageContent.querySelectorAll("[data-c-remove-rule]").forEach((button) => {
    button.addEventListener("click", () => {
      if (isReadonly) return;
      const block = draft.blocks.find((item) => item.id === button.dataset.cRemoveRuleBlock);
      if (!block) return;
      block.rules = block.rules.filter((rule) => rule.id !== button.dataset.cRemoveRule);
      renderUserRiskStrategyCPage();
    });
  });

  pageContent.querySelectorAll("[data-c-edit-rule-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (isReadonly) return;
      openBlockRuleModal(button.dataset.cEditRuleBlock, "user-risk-engine", "edit");
    });
  });

  pageContent.querySelectorAll("[data-c-remove-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!removeWorkbenchMiddleBlock(draft.blocks, button.dataset.cRemoveBlock)) return;
      state.userRiskWorkbenchCActiveBlockId = draft.blocks[Math.max(0, getUserRiskCActiveBlockIndex(draft) - 1)]?.id || draft.blocks[0]?.id || "";
      renderUserRiskStrategyCPage();
    });
  });

  const axisBar = pageContent.querySelector("#user-risk-c-axis-bar");
  axisBar?.addEventListener("click", (event) => {
    if (isReadonly) return;
    if (event.target instanceof Element && event.target.closest(".user-risk-c-axis-node")) return;
    if (draft.blocks.filter((item) => item.max !== "+∞").length >= 5) {
      showToast("最多支持配置5个节点");
      return;
    }
    const rect = axisBar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const axisMax = getUserRiskCAxisMax(draft.behaviors, draft.blocks);
    const value = Math.round(axisMax * ratio);
    if (!insertUserRiskCBlockAtValue(draft, value)) return;
    const inserted = draft.blocks.find((item) => item.min === String(value));
    state.userRiskWorkbenchCActiveBlockId = inserted?.id || "";
    renderUserRiskStrategyCPage();
  });

  pageContent.querySelectorAll("[data-c-axis-node]").forEach((button) => {
    button.addEventListener("click", () => {
      const boundaryIndex = Number(button.dataset.cAxisNode);
      state.userRiskWorkbenchCActiveBlockId = draft.blocks[boundaryIndex + 1]?.id || draft.blocks[boundaryIndex]?.id || "";
      renderUserRiskStrategyCPage();
    });
    button.addEventListener("mousedown", (event) => {
      if (isReadonly) return;
      if (event.button !== 0) return;
      event.preventDefault();
      state.userRiskWorkbenchCNodeDragging = {
        boundaryIndex: Number(button.dataset.cAxisNode)
      };
      const moveHandler = (moveEvent) => {
        const axis = pageContent.querySelector("#user-risk-c-axis-bar");
        if (!axis || !state.userRiskWorkbenchCNodeDragging) return;
        const rect = axis.getBoundingClientRect();
        const index = state.userRiskWorkbenchCNodeDragging.boundaryIndex;
        const removable = index > 0 && index < draft.blocks.length - 1;
        const outOfBounds = moveEvent.clientX < rect.left - 12 || moveEvent.clientX > rect.right + 12 || moveEvent.clientY < rect.top - 12 || moveEvent.clientY > rect.bottom + 12;
        if (outOfBounds && removable) {
          removeUserRiskCBoundaryAtIndex(draft.blocks, index);
          state.userRiskWorkbenchCActiveBlockId = draft.blocks[Math.min(index, draft.blocks.length - 1)]?.id || "";
          state.userRiskWorkbenchCNodeDragging = null;
          window.removeEventListener("mousemove", moveHandler);
          window.removeEventListener("mouseup", upHandler);
          renderUserRiskStrategyCPage();
          return;
        }
        const ratio = Math.min(1, Math.max(0, (moveEvent.clientX - rect.left) / rect.width));
        const axisMax = getUserRiskCAxisMax(draft.behaviors, draft.blocks);
        const prevMin = Number(draft.blocks[index].min || 0);
        const nextMax = draft.blocks[index + 1]?.max === "+∞" ? axisMax : Number(draft.blocks[index + 1]?.max || axisMax);
        const nextValue = Math.max(prevMin + 1, Math.min(nextMax - 1, Math.round(axisMax * ratio)));
        syncUserRiskCAdjacentBounds(draft.blocks, index, nextValue);
        state.userRiskWorkbenchCActiveBlockId = draft.blocks[index + 1]?.id || draft.blocks[index]?.id || "";
        renderUserRiskStrategyCPage();
      };
      const upHandler = () => {
        state.userRiskWorkbenchCNodeDragging = null;
        window.removeEventListener("mousemove", moveHandler);
        window.removeEventListener("mouseup", upHandler);
      };
      window.addEventListener("mousemove", moveHandler);
      window.addEventListener("mouseup", upHandler);
    });
  });
}

function renderUserRiskCBehaviorConfigModal() {
  const rows = getUserRiskCBehaviorModalVisibleRows();
  const summary = getUserRiskCBehaviorModalSummary();
  drawerRoot.innerHTML = `
    <div class="drawer-overlay user-risk-c-modal-overlay">
      <div class="user-risk-c-behavior-modal">
        <div class="user-risk-c-behavior-modal-head">
          <h3>添加风险行为检测项</h3>
          <button class="user-risk-c-modal-close" type="button" id="user-risk-c-behavior-modal-close">×</button>
        </div>
        <div class="user-risk-c-behavior-modal-body">
          <div class="user-risk-c-behavior-modal-note">
            <div class="user-risk-c-behavior-modal-note-title">配置说明</div>
            <p>勾选哪些风险行为作为检测项，系统就依据这些项评估风险。最终风险总分等于所有勾选项的分数之和。</p>
          </div>
          <div class="user-risk-c-behavior-modal-toolbar">
            <label class="user-risk-c-search modal">
              <span class="user-risk-c-search-icon">⌕</span>
              <input id="user-risk-c-behavior-modal-search" value="${escapeHtml(state.userRiskWorkbenchCBehaviorModalSearch || "")}" placeholder="搜索风险行为" />
            </label>
            <div class="user-risk-c-behavior-modal-summary">已选${summary.selectedCount}项，风险总分=${summary.total}</div>
          </div>
          <div class="user-risk-c-behavior-modal-table-wrap">
            <table class="user-risk-c-behavior-table modal">
              <thead>
                <tr>
                  <th></th>
                  <th>风险行为</th>
                  <th>风险描述</th>
                  <th>风险分</th>
                </tr>
              </thead>
              <tbody>
                ${rows
                  .map(
                    (item) => `
                      <tr>
                        <td><input type="checkbox" data-c-behavior-modal-toggle="${item.id}" ${item.selected ? "checked" : ""} /></td>
                        <td>${escapeHtml(item.displayName)}</td>
                        <td>${escapeHtml(item.description)}</td>
                        <td>${escapeHtml(`${item.scoreMin} ~ ${item.scoreMax}`)}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
        <div class="user-risk-c-behavior-modal-footer">
          <button class="primary-btn" type="button" id="user-risk-c-behavior-modal-confirm">确认</button>
          <button class="secondary-btn" type="button" id="user-risk-c-behavior-modal-cancel">取消</button>
        </div>
      </div>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".user-risk-c-modal-overlay");
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector("#user-risk-c-behavior-modal-close")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#user-risk-c-behavior-modal-cancel")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#user-risk-c-behavior-modal-search")?.addEventListener("input", (event) => {
    state.userRiskWorkbenchCBehaviorModalSearch = event.target.value;
    renderOverlay();
  });
  drawerRoot.querySelectorAll("[data-c-behavior-modal-toggle]").forEach((field) => {
    field.addEventListener("change", () => {
      const row = (state.userRiskWorkbenchCBehaviorModalDraft || []).find((item) => item.id === field.dataset.cBehaviorModalToggle);
      if (!row) return;
      row.selected = field.checked;
      renderOverlay();
    });
  });
  drawerRoot.querySelector("#user-risk-c-behavior-modal-confirm")?.addEventListener("click", () => {
    const draft = getUserRiskCDraft();
    if (!draft || !state.userRiskWorkbenchCBehaviorModalDraft) return;
    draft.behaviors = deepClone(state.userRiskWorkbenchCBehaviorModalDraft);
    closeModal();
    renderUserRiskStrategyCPage();
  });
}

function getPaymentRiskCActionOptions() {
  return ["直接放行", "滑块验证", "验证码验证", "支付拦截"];
}

function getPaymentRiskCExtraActionOptions() {
  return ["风控日志标记风险", "发送提示短信/邮件"];
}

function getPaymentRiskCActionCardMeta(action) {
  const map = {
    直接放行: { icon: "✓", title: "直接放行", desc: "允许用户继续支付流程" },
    滑块验证: { icon: "◫", title: "滑块验证", desc: "用户需先完成滑块验证" },
    验证码验证: { icon: "#", title: "验证码验证", desc: "发送验证码到绑定手机进行校验" },
    支付拦截: { icon: "!", title: "支付拦截", desc: "立即中断支付流程，并拦截异常风险" }
  };
  return map[action] || { icon: "•", title: action, desc: "" };
}

function createPaymentRiskCDesignBlocks(sourceBlocks = []) {
  if (sourceBlocks.length) {
    return deepClone(sourceBlocks).map((block) => {
      const extraActions = normalizeStrategyExtraActions(Array.isArray(block.extraActions) ? deepClone(block.extraActions) : []);
      let defaultAction = normalizeStrategyExtraAction(block.defaultAction || getPaymentRiskCActionOptions()[0]);
      if (getPaymentRiskCExtraActionOptions().includes(defaultAction)) {
        if (!extraActions.includes(defaultAction)) extraActions.push(defaultAction);
        defaultAction = getPaymentRiskCActionOptions()[0];
      }
      return createUserRiskWorkbenchBlock({
        ...block,
        defaultAction,
        extraActions,
        rules: deepClone(block.rules || [])
      });
    });
  }
  return [
    createUserRiskWorkbenchBlock({ min: "0", max: "30", defaultAction: "直接放行", extraActions: [] }),
    createUserRiskWorkbenchBlock({ min: "30", max: "70", defaultAction: "滑块验证", extraActions: ["风控日志标记风险"] }),
    createUserRiskWorkbenchBlock({ min: "70", max: "+∞", defaultAction: "支付拦截", extraActions: ["风控日志标记风险", "发送提示短信/邮件"] })
  ];
}

function createPaymentRiskCDraft(strategy) {
  const cards = getPaymentBehaviorCardsByEntry();
  const selectedSet = new Set((strategy.selectedBehaviors || []).map((item) => item));
  return {
    id: strategy.id,
    sourceId: strategy.id,
    entry: strategy.entry,
    name: strategy.name,
    enabled: strategy.enabled,
    effectiveChannels: deepClone(strategy.effectiveChannels || []),
    behaviors: cards.map((card, index) => {
      const scoreRange = parseBehaviorScoreRange(getBehaviorCardScoreRange(card.name));
      return {
        id: `payment-risk-c-behavior-${strategy.id}-${index}`,
        cardId: card.id,
        sourceName: card.name,
        displayName: card.displayName || card.name,
        description: card.description || "",
        scoreMin: scoreRange.min,
        scoreMax: scoreRange.max,
        selected: selectedSet.has(card.name) || selectedSet.has(card.displayName || card.name)
      };
    }),
    blocks: createPaymentRiskCDesignBlocks(strategy.blocks || [])
  };
}

function getPaymentRiskCDraft() {
  return state.paymentRiskWorkbenchCDraft || null;
}

function getPaymentRiskCActiveStrategy() {
  return getPaymentRiskWorkbenchActiveStrategy();
}

function ensurePaymentRiskCState() {
  ensurePaymentRiskWorkbenchState();
  const strategy = getPaymentRiskCActiveStrategy();
  if (!strategy) return null;
  if (!state.paymentRiskWorkbenchCDraft || state.paymentRiskWorkbenchCDraft.sourceId !== strategy.id) {
    state.paymentRiskWorkbenchCDraft = createPaymentRiskCDraft(strategy);
    state.paymentRiskWorkbenchCMode = "view";
    state.paymentRiskWorkbenchCSourceId = strategy.id;
    state.paymentRiskWorkbenchCBehaviorModalDraft = null;
    state.paymentRiskWorkbenchCBehaviorModalSearch = "";
    state.paymentRiskWorkbenchCNodeDragging = null;
    state.paymentRiskWorkbenchCAxisHintVisible = false;
    state.paymentRiskWorkbenchCActiveBlockId = "";
  }
  return state.paymentRiskWorkbenchCDraft;
}

function getPaymentRiskCVisibleBehaviors(draft) {
  return draft.behaviors.filter((item) => item.selected);
}

function getPaymentRiskCTotalScoreText(draft) {
  return `风险总分：0~${calculateUserRiskCTotalScore(draft.behaviors)}`;
}

function getPaymentRiskCBehaviorModalVisibleRows() {
  const rows = state.paymentRiskWorkbenchCBehaviorModalDraft || [];
  const keyword = (state.paymentRiskWorkbenchCBehaviorModalSearch || "").trim().toLowerCase();
  if (!keyword) return rows;
  return rows.filter((item) => item.displayName.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword));
}

function getPaymentRiskCBehaviorModalSummary() {
  const rows = state.paymentRiskWorkbenchCBehaviorModalDraft || [];
  const selected = rows.filter((item) => item.selected);
  return {
    selectedCount: selected.length,
    total: calculateUserRiskCTotalScore(rows)
  };
}

function getPaymentRiskCBlocksForRender(draft) {
  const axisMax = getUserRiskCAxisMax(draft.behaviors, draft.blocks);
  return draft.blocks.map((block, index) => ({
    ...block,
    displayMax: index === draft.blocks.length - 1 ? axisMax : Number(block.max || 0),
    extraActions: Array.isArray(block.extraActions) ? block.extraActions : []
  }));
}

function getPaymentRiskCActiveBlockIndex(draft) {
  const blocks = getPaymentRiskCBlocksForRender(draft);
  if (!blocks.length) return -1;
  const savedIndex = blocks.findIndex((item) => item.id === state.paymentRiskWorkbenchCActiveBlockId);
  if (savedIndex >= 0) return savedIndex;
  state.paymentRiskWorkbenchCActiveBlockId = blocks[0]?.id || "";
  return 0;
}

function insertPaymentRiskCBlockAtValue(draft, value) {
  const blocks = draft.blocks;
  const finiteNodeCount = blocks.filter((item) => item.max !== "+∞").length;
  if (finiteNodeCount >= 5) return false;
  const axisMax = getUserRiskCAxisMax(draft.behaviors, blocks);
  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    const blockMin = Number(block.min || 0);
    const blockMax = block.max === "+∞" ? axisMax : Number(block.max || 0);
    if (value <= blockMin + 1 || value >= blockMax - 1) continue;
    if (block.max === "+∞") {
      const next = createUserRiskWorkbenchBlock({
        min: String(value),
        max: "+∞",
        defaultAction: block.defaultAction,
        extraActions: deepClone(block.extraActions || []),
        rules: deepClone(block.rules || [])
      });
      block.max = String(value);
      blocks.splice(index + 1, 0, next);
      return true;
    }
    const next = createUserRiskWorkbenchBlock({
      min: String(value),
      max: block.max,
      defaultAction: block.defaultAction,
      extraActions: deepClone(block.extraActions || []),
      rules: deepClone(block.rules || [])
    });
    block.max = String(value);
    blocks.splice(index + 1, 0, next);
    return true;
  }
  return false;
}

function commitPaymentRiskCDraft() {
  const draft = getPaymentRiskCDraft();
  if (!draft) return;
  const target = getPaymentRiskWorkbenchStrategyById(draft.sourceId);
  if (!target) return;
  target.name = draft.name;
  target.enabled = draft.enabled;
  target.effectiveChannels = deepClone(draft.effectiveChannels || []);
  target.selectedBehaviors = draft.behaviors.filter((item) => item.selected).map((item) => item.displayName);
  target.blocks = deepClone(draft.blocks).map((block, index, list) => ({
    ...block,
    min: String(block.min || (index === 0 ? "0" : list[index - 1].max || "0")),
    max: index === list.length - 1 ? "+∞" : String(block.max || ""),
    extraActions: normalizeStrategyExtraActions(block.extraActions || []),
    rules: deepClone(block.rules || [])
  }));
  target.savedAt = formatDateTime(new Date());
  target.savedBy = "wangjian02@dobest.com";
  state.paymentRiskWorkbenchDraft = deepClone(target);
  state.paymentRiskWorkbenchSourceId = target.id;
  state.paymentRiskWorkbenchCDraft = createPaymentRiskCDraft(target);
  state.paymentRiskWorkbenchCMode = "view";
  state.paymentRiskWorkbenchCSourceId = target.id;
}

function openPaymentRiskCBehaviorRuleView(cardId) {
  const direct = paymentBehaviorCards.find((item) => item.id === cardId);
  if (direct) {
    openBehaviorRuleModal(direct.id, "view");
    return;
  }
  const draft = getPaymentRiskCDraft();
  const row = draft?.behaviors?.find((item) => item.cardId === cardId);
  const fallback = row ? paymentBehaviorCards.find((item) => item.name === row.sourceName || item.name === row.displayName) : null;
  if (!fallback) return;
  openBehaviorRuleModal(fallback.id, "view");
}

function renderPaymentRiskCBehaviorTable(draft) {
  const visibleRows = getPaymentRiskCVisibleBehaviors(draft);
  const isReadonly = isPaymentRiskCReadonly();
  return `
    <section class="user-risk-c-section-card">
      <div class="user-risk-c-section-head">
        <div class="user-risk-c-section-index">1</div>
        <div class="user-risk-c-section-copy">
          <div class="user-risk-c-section-title">配置风险检测</div>
          <div class="user-risk-c-section-tip">选择需要检测的支付风险行为，检测项将参与支付风险评估</div>
        </div>
      </div>
      <div class="user-risk-c-table-toolbar">
        <div class="user-risk-c-score-panel">
          <div class="user-risk-c-score-summary">
            <span class="user-risk-c-score-label">${getPaymentRiskCTotalScoreText(draft)}</span>
          </div>
        </div>
      </div>
      <div class="user-risk-c-table-wrap">
        <table class="user-risk-c-behavior-table">
          <thead>
            <tr>
              <th>风险行为</th>
              <th>风险描述</th>
              <th>风险分</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${visibleRows.length
              ? visibleRows.map((item) => `
                  <tr>
                    <td>${escapeHtml(item.displayName)}</td>
                    <td>${escapeHtml(item.description)}</td>
                    <td>${escapeHtml(`${item.scoreMin} ~ ${item.scoreMax}`)}</td>
                    <td><button class="user-risk-c-link-btn" type="button" data-payment-c-view-rule="${item.cardId}">查看规则</button></td>
                  </tr>
                `).join("")
              : '<tr><td colspan="4" class="user-risk-c-empty-cell">暂无已配置的风险检测项</td></tr>'}
          </tbody>
        </table>
      </div>
      ${isReadonly ? "" : '<button class="user-risk-c-config-btn" type="button" id="payment-risk-c-open-behavior-config">＋ 配置风险检测项</button>'}
    </section>
  `;
}

function renderPaymentRiskCAxis(draft) {
  const blocks = getPaymentRiskCBlocksForRender(draft);
  const axisMax = getUserRiskCAxisMax(draft.behaviors, draft.blocks);
  const activeIndex = getPaymentRiskCActiveBlockIndex(draft);
  const isReadonly = isPaymentRiskCReadonly();
  const nodeButtons = blocks.slice(0, -1).map((block, index) => {
    const value = Number(block.max || 0);
    const left = `${(value / axisMax) * 100}%`;
    return `<button class="user-risk-c-axis-node ${index === activeIndex ? "active" : ""}" type="button" style="left:${left}" data-payment-c-axis-node="${index}" title="${value}" ${isReadonly ? "disabled" : ""}></button>`;
  }).join("");
  const tickValues = Array.from(new Set([0, ...blocks.slice(0, -1).map((item) => Number(item.max || 0)), axisMax])).sort((a, b) => a - b);

  return `
    <div class="user-risk-c-axis-wrap">
      <div class="user-risk-c-axis-head">
        <div class="user-risk-c-section-head">
          <div class="user-risk-c-section-index">2</div>
          <div class="user-risk-c-section-copy">
            <div class="user-risk-c-section-title">匹配处置动作</div>
            <div class="user-risk-c-section-tip">依据风险总分，划定风险分区间，匹配支付处置动作</div>
          </div>
        </div>
        <div class="user-risk-c-axis-help user-risk-c-help-anchor">
          ${state.paymentRiskWorkbenchCAxisHintVisible ? '<div class="user-risk-c-axis-tooltip">单击横轴可新增节点，拖拽节点可修改数值，拖出横轴或删除键即可移除。最多支持配置5个节点。</div>' : ""}
          <button class="user-risk-c-axis-help-link" type="button" id="payment-risk-c-axis-help">ⓘ 区间配置说明</button>
        </div>
      </div>
      <div class="user-risk-c-axis-ticks">
        ${tickValues.map((value) => `<span style="left:${(value / axisMax) * 100}%">${value}</span>`).join("")}
      </div>
      <div class="user-risk-c-axis-bar" id="payment-risk-c-axis-bar">
        <div class="user-risk-c-axis-gradient"></div>
        ${nodeButtons}
      </div>
    </div>
  `;
}

function renderPaymentRiskCBlockCards(draft) {
  const blocks = getPaymentRiskCBlocksForRender(draft);
  const activeIndex = getPaymentRiskCActiveBlockIndex(draft);
  const block = blocks[activeIndex];
  const isReadonly = isPaymentRiskCReadonly();
  if (!block) return "";
  const tabHtml = blocks.map((item, index) => `
      <button class="user-risk-c-card-tab ${index === activeIndex ? "active" : ""}" type="button" data-payment-c-card-tab="${item.id}">
        ${escapeHtml(`${item.min}~${item.displayMax}`)}
      </button>
    `).join("");
  return `
    <section class="user-risk-c-risk-card">
      <div class="user-risk-c-risk-card-tabs">
        <div class="user-risk-c-risk-card-tab-list">${tabHtml}</div>
      </div>
      <div class="user-risk-c-card-divider"></div>
      <div class="user-risk-c-config-grid">
        <div class="user-risk-c-config-field action-row">
          <div class="user-risk-c-config-field-label">处置动作：</div>
          <div class="user-risk-c-inline-action-group">
            ${getPaymentRiskCActionOptions()
              .map((action) => {
                const meta = getPaymentRiskCActionCardMeta(action);
                return `
                  <button class="user-risk-c-inline-action ${block.defaultAction === action ? "active" : ""}" type="button" data-payment-c-block-action="${block.id}" data-payment-c-action-value="${action}" ${isReadonly ? "disabled" : ""}>
                    <span class="user-risk-c-inline-action-icon">${meta.icon}</span>
                    <span>${meta.title}</span>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>
        <div class="user-risk-c-config-field extra-row">
          <div class="user-risk-c-config-field-label">附加动作：</div>
          <div class="user-risk-c-inline-extra-group">
            ${getPaymentRiskCExtraActionOptions()
              .map(
                (action) => `
                  <label class="user-risk-c-inline-extra">
                    <input type="checkbox" data-payment-c-extra-action="${block.id}" data-payment-c-extra-action-value="${action}" ${block.extraActions.includes(action) ? "checked" : ""} ${isReadonly ? "disabled" : ""} />
                    <span>${action}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="user-risk-c-config-entry">
          <button class="user-risk-c-tag-entry ${block.rules.length ? "has-rules" : ""}" type="button" data-payment-c-edit-rule-block="${block.id}" ${isReadonly ? "disabled" : ""}>
            <span class="user-risk-c-tag-entry-icon" aria-hidden="true"><span class="user-risk-c-tag-entry-glyph"></span></span>
            <span class="user-risk-c-tag-entry-copy">${escapeHtml(getWorkbenchTagRuleSummaryText(block))}</span>
            <span class="user-risk-c-tag-entry-arrow">›</span>
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderPaymentRiskStrategyCPage() {
  const draft = ensurePaymentRiskCState();
  const strategy = getPaymentRiskCActiveStrategy();
  if (!draft || !strategy) {
    pageContent.innerHTML = `<section class="placeholder-panel">当前入口暂无支付策略配置。</section>`;
    return;
  }
  const isReadonly = isPaymentRiskCReadonly();
  const statusHelpText = "策略关闭时，系统仍会检测风险，但不会执行拦截、验证等实际处置动作。";
  pageContent.innerHTML = `
    <section class="user-risk-workbench-page user-risk-editor-page user-risk-c-page ${isReadonly ? "is-readonly" : ""}">
      <section class="user-risk-editor-header">
        <div class="user-risk-editor-header-main">
          <div class="user-risk-editor-title-row">
            <h1 class="user-risk-editor-title">支付风控策略</h1>
            <p class="user-risk-editor-desc">支持根据支付风险分与区间配置处置动作，覆盖支付下单等业务场景。</p>
          </div>
        </div>
      </section>
      <section class="user-risk-workbench-shell user-risk-editor-shell">
        <section class="user-risk-workbench-panel user-risk-c-panel">
          <section class="user-risk-c-topbar">
            <div class="user-risk-c-inline-form">
              <label class="user-risk-c-inline-field">
                <span>策略名称：</span>
                <input id="payment-risk-c-name" value="${escapeHtml(draft.name)}" ${isReadonly ? "readonly" : ""} />
              </label>
              <label class="user-risk-c-inline-field compact">
                <span class="user-risk-c-status-copy">策略状态：<span class="user-risk-c-status-help">ⓘ<span class="user-risk-c-status-tooltip">${statusHelpText}</span></span></span>
                <span class="user-risk-c-switch-row"><button class="switch ${draft.enabled ? "on" : ""}" id="payment-risk-c-switch" type="button" ${isReadonly ? "disabled" : ""}></button><span class="user-risk-c-switch-text">${draft.enabled ? "启用" : "停用"}</span></span>
              </label>
            </div>
            <div class="user-risk-c-topbar-actions">
              ${
                isReadonly
                  ? '<button class="primary-btn" type="button" id="payment-risk-c-edit">编辑</button>'
                  : '<button class="secondary-btn" type="button" id="payment-risk-c-cancel">取消</button><button class="primary-btn" type="button" id="payment-risk-c-publish">保存策略</button>'
              }
            </div>
          </section>
          ${renderPaymentRiskCBehaviorTable(draft)}
          <section class="user-risk-c-section-card">
            ${renderPaymentRiskCAxis(draft)}
            <div class="user-risk-c-risk-card-list">
              ${renderPaymentRiskCBlockCards(draft)}
            </div>
          </section>
        </section>
      </section>
    </section>
  `;
  bindPaymentRiskStrategyCEvents(draft);
}

function bindPaymentRiskStrategyCEvents(draft) {
  const isReadonly = isPaymentRiskCReadonly();
  ensureUserRiskCHintDismissHandlers();
  ensureUserRiskCDeleteKeyHandler();
  pageContent.querySelector("#payment-risk-c-name")?.addEventListener("input", (event) => {
    draft.name = event.target.value;
  });
  pageContent.querySelector("#payment-risk-c-switch")?.addEventListener("click", () => {
    if (isReadonly) return;
    draft.enabled = !draft.enabled;
    renderPaymentRiskStrategyCPage();
  });
  pageContent.querySelector("#payment-risk-c-axis-help")?.addEventListener("click", () => {
    state.paymentRiskWorkbenchCAxisHintVisible = !state.paymentRiskWorkbenchCAxisHintVisible;
    renderPaymentRiskStrategyCPage();
  });
  pageContent.querySelector("#payment-risk-c-cancel")?.addEventListener("click", () => {
    const source = getPaymentRiskWorkbenchStrategyById(state.paymentRiskWorkbenchCSourceId || draft.sourceId);
    if (!source) return;
    state.paymentRiskWorkbenchCDraft = createPaymentRiskCDraft(source);
    state.paymentRiskWorkbenchCMode = "view";
    state.paymentRiskWorkbenchCActiveBlockId = "";
    renderPaymentRiskStrategyCPage();
  });
  pageContent.querySelector("#payment-risk-c-publish")?.addEventListener("click", () => {
    commitPaymentRiskCDraft();
    showToast("策略已更新");
    renderPaymentRiskStrategyCPage();
  });
  pageContent.querySelector("#payment-risk-c-edit")?.addEventListener("click", () => {
    state.paymentRiskWorkbenchCMode = "edit";
    renderPaymentRiskStrategyCPage();
  });
  pageContent.querySelector("#payment-risk-c-open-behavior-config")?.addEventListener("click", () => {
    state.modalOpen = true;
    state.modalKind = "payment-risk-c-behavior-config";
    state.paymentRiskWorkbenchCBehaviorModalDraft = deepClone(draft.behaviors);
    state.paymentRiskWorkbenchCBehaviorModalSearch = "";
    renderOverlay();
  });
  pageContent.querySelectorAll("[data-payment-c-view-rule]").forEach((button) => {
    button.addEventListener("click", () => openPaymentRiskCBehaviorRuleView(button.dataset.paymentCViewRule));
  });
  pageContent.querySelectorAll("[data-payment-c-axis-tag]").forEach((button) => {
    button.addEventListener("click", () => {
      state.paymentRiskWorkbenchCActiveBlockId = button.dataset.paymentCAxisTag;
      renderPaymentRiskStrategyCPage();
    });
  });
  pageContent.querySelectorAll("[data-payment-c-card-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.paymentRiskWorkbenchCActiveBlockId = button.dataset.paymentCCardTab;
      renderPaymentRiskStrategyCPage();
    });
  });
  pageContent.querySelectorAll("[data-payment-c-block-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const block = draft.blocks.find((item) => item.id === button.dataset.paymentCBlockAction);
      if (!block) return;
      block.defaultAction = button.dataset.paymentCActionValue;
      renderPaymentRiskStrategyCPage();
    });
  });
  pageContent.querySelectorAll("[data-payment-c-extra-action]").forEach((field) => {
    field.addEventListener("change", () => {
      const block = draft.blocks.find((item) => item.id === field.dataset.paymentCExtraAction);
      if (!block) return;
      const action = field.dataset.paymentCExtraActionValue;
      const next = new Set(block.extraActions || []);
      if (field.checked) next.add(action);
      else next.delete(action);
      block.extraActions = Array.from(next);
      renderPaymentRiskStrategyCPage();
    });
  });
  pageContent.querySelectorAll("[data-payment-c-remove-rule]").forEach((button) => {
    button.addEventListener("click", () => {
      if (isReadonly) return;
      const block = draft.blocks.find((item) => item.id === button.dataset.paymentCRemoveRuleBlock);
      if (!block) return;
      block.rules = block.rules.filter((rule) => rule.id !== button.dataset.paymentCRemoveRule);
      renderPaymentRiskStrategyCPage();
    });
  });
  pageContent.querySelectorAll("[data-payment-c-edit-rule-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (isReadonly) return;
      openBlockRuleModal(button.dataset.paymentCEditRuleBlock, "payment-risk-engine", "edit");
    });
  });
  const axisBar = pageContent.querySelector("#payment-risk-c-axis-bar");
  axisBar?.addEventListener("click", (event) => {
    if (isReadonly) return;
    if (event.target instanceof Element && event.target.closest(".user-risk-c-axis-node")) return;
    if (draft.blocks.filter((item) => item.max !== "+∞").length >= 5) {
      showToast("最多支持配置5个节点");
      return;
    }
    const rect = axisBar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const axisMax = getUserRiskCAxisMax(draft.behaviors, draft.blocks);
    const value = Math.round(axisMax * ratio);
    if (!insertPaymentRiskCBlockAtValue(draft, value)) return;
    const inserted = draft.blocks.find((item) => item.min === String(value));
    state.paymentRiskWorkbenchCActiveBlockId = inserted?.id || "";
    renderPaymentRiskStrategyCPage();
  });
  pageContent.querySelectorAll("[data-payment-c-axis-node]").forEach((button) => {
    button.addEventListener("click", () => {
      const boundaryIndex = Number(button.dataset.paymentCAxisNode);
      state.paymentRiskWorkbenchCActiveBlockId = draft.blocks[boundaryIndex + 1]?.id || draft.blocks[boundaryIndex]?.id || "";
      renderPaymentRiskStrategyCPage();
    });
    button.addEventListener("mousedown", (event) => {
      if (isReadonly) return;
      if (event.button !== 0) return;
      event.preventDefault();
      state.paymentRiskWorkbenchCNodeDragging = { boundaryIndex: Number(button.dataset.paymentCAxisNode) };
      const moveHandler = (moveEvent) => {
        const axis = pageContent.querySelector("#payment-risk-c-axis-bar");
        if (!axis || !state.paymentRiskWorkbenchCNodeDragging) return;
        const rect = axis.getBoundingClientRect();
        const index = state.paymentRiskWorkbenchCNodeDragging.boundaryIndex;
        const removable = index > 0 && index < draft.blocks.length - 1;
        const outOfBounds = moveEvent.clientX < rect.left - 12 || moveEvent.clientX > rect.right + 12 || moveEvent.clientY < rect.top - 12 || moveEvent.clientY > rect.bottom + 12;
        if (outOfBounds && removable) {
          removeUserRiskCBoundaryAtIndex(draft.blocks, index);
          state.paymentRiskWorkbenchCActiveBlockId = draft.blocks[Math.min(index, draft.blocks.length - 1)]?.id || "";
          state.paymentRiskWorkbenchCNodeDragging = null;
          window.removeEventListener("mousemove", moveHandler);
          window.removeEventListener("mouseup", upHandler);
          renderPaymentRiskStrategyCPage();
          return;
        }
        const ratio = Math.min(1, Math.max(0, (moveEvent.clientX - rect.left) / rect.width));
        const axisMax = getUserRiskCAxisMax(draft.behaviors, draft.blocks);
        const prevMin = Number(draft.blocks[index].min || 0);
        const nextMax = draft.blocks[index + 1]?.max === "+∞" ? axisMax : Number(draft.blocks[index + 1]?.max || axisMax);
        const nextValue = Math.max(prevMin + 1, Math.min(nextMax - 1, Math.round(axisMax * ratio)));
        syncUserRiskCAdjacentBounds(draft.blocks, index, nextValue);
        state.paymentRiskWorkbenchCActiveBlockId = draft.blocks[index + 1]?.id || draft.blocks[index]?.id || "";
        renderPaymentRiskStrategyCPage();
      };
      const upHandler = () => {
        state.paymentRiskWorkbenchCNodeDragging = null;
        window.removeEventListener("mousemove", moveHandler);
        window.removeEventListener("mouseup", upHandler);
      };
      window.addEventListener("mousemove", moveHandler);
      window.addEventListener("mouseup", upHandler);
    });
  });
}

function renderPaymentRiskCBehaviorConfigModal() {
  const rows = getPaymentRiskCBehaviorModalVisibleRows();
  const summary = getPaymentRiskCBehaviorModalSummary();
  drawerRoot.innerHTML = `
    <div class="drawer-overlay user-risk-c-modal-overlay">
      <div class="user-risk-c-behavior-modal">
        <div class="user-risk-c-behavior-modal-head">
          <h3>添加风险行为检测项</h3>
          <button class="user-risk-c-modal-close" type="button" id="payment-risk-c-behavior-modal-close">×</button>
        </div>
        <div class="user-risk-c-behavior-modal-body">
          <div class="user-risk-c-behavior-modal-note">
            <div class="user-risk-c-behavior-modal-note-title">配置说明</div>
            <p>勾选哪些支付风险行为作为检测项，系统就依据这些项评估支付风险。最终风险总分等于所有勾选项的分数之和。</p>
          </div>
          <div class="user-risk-c-behavior-modal-toolbar">
            <label class="user-risk-c-search modal">
              <span class="user-risk-c-search-icon">⌕</span>
              <input id="payment-risk-c-behavior-modal-search" value="${escapeHtml(state.paymentRiskWorkbenchCBehaviorModalSearch || "")}" placeholder="搜索风险行为" />
            </label>
            <div class="user-risk-c-behavior-modal-summary">已选${summary.selectedCount}项，风险总分=${summary.total}</div>
          </div>
          <div class="user-risk-c-behavior-modal-table-wrap">
            <table class="user-risk-c-behavior-table modal">
              <thead>
                <tr>
                  <th></th>
                  <th>风险行为</th>
                  <th>风险描述</th>
                  <th>风险分</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map((item) => `
                      <tr>
                        <td><input type="checkbox" data-payment-c-behavior-modal-toggle="${item.id}" ${item.selected ? "checked" : ""} /></td>
                        <td>${escapeHtml(item.displayName)}</td>
                        <td>${escapeHtml(item.description)}</td>
                        <td>${escapeHtml(`${item.scoreMin} ~ ${item.scoreMax}`)}</td>
                      </tr>
                    `).join("")}
              </tbody>
            </table>
          </div>
        </div>
        <div class="user-risk-c-behavior-modal-footer">
          <button class="primary-btn" type="button" id="payment-risk-c-behavior-modal-confirm">确认</button>
          <button class="secondary-btn" type="button" id="payment-risk-c-behavior-modal-cancel">取消</button>
        </div>
      </div>
    </div>
  `;
  const overlay = drawerRoot.querySelector(".user-risk-c-modal-overlay");
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector("#payment-risk-c-behavior-modal-close")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#payment-risk-c-behavior-modal-cancel")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#payment-risk-c-behavior-modal-search")?.addEventListener("input", (event) => {
    state.paymentRiskWorkbenchCBehaviorModalSearch = event.target.value;
    renderOverlay();
  });
  drawerRoot.querySelectorAll("[data-payment-c-behavior-modal-toggle]").forEach((field) => {
    field.addEventListener("change", () => {
      const row = (state.paymentRiskWorkbenchCBehaviorModalDraft || []).find((item) => item.id === field.dataset.paymentCBehaviorModalToggle);
      if (!row) return;
      row.selected = field.checked;
      renderOverlay();
    });
  });
  drawerRoot.querySelector("#payment-risk-c-behavior-modal-confirm")?.addEventListener("click", () => {
    const draft = getPaymentRiskCDraft();
    if (!draft || !state.paymentRiskWorkbenchCBehaviorModalDraft) return;
    draft.behaviors = deepClone(state.paymentRiskWorkbenchCBehaviorModalDraft);
    closeModal();
    renderPaymentRiskStrategyCPage();
  });
}

function renderPaymentRiskStrategyPage() {
  ensurePaymentRiskWorkbenchState();
  const entry = state.paymentRiskWorkbenchEntry;
  const strategy = getPaymentRiskWorkbenchActiveStrategy(entry);
  if (!strategy) {
    pageContent.innerHTML = `<section class="placeholder-panel">当前入口暂无支付策略配置。</section>`;
    return;
  }

  if (!state.paymentRiskWorkbenchDraft || state.paymentRiskWorkbenchDraft.id !== strategy.id) {
    state.paymentRiskWorkbenchDraft = deepClone(strategy);
    state.paymentRiskWorkbenchSourceId = strategy.id;
  }

  const draft = state.paymentRiskWorkbenchDraft;
  const behaviorDisplay = getPaymentRiskBehaviorDisplayConfig(draft);
  const renderConfig = getPaymentRiskWorkbenchRenderConfig();

  pageContent.innerHTML = `
    <section class="user-risk-workbench-page user-risk-editor-page">
      <section class="user-risk-editor-header">
        <div class="user-risk-editor-header-main">
          <div class="user-risk-editor-title-row">
            <h1 class="user-risk-editor-title">支付风控策略</h1>
            <p class="user-risk-editor-desc">支持根据风险分和用户标签，配置支付安全处置措施，覆盖支付下单等业务场景。</p>
          </div>
          <div class="user-risk-editor-toolbar">
            <div class="user-risk-workbench-entry-tabs user-risk-entry-segment">
              <button class="user-risk-workbench-entry-tab active" type="button" data-payment-workbench-entry="支付下单">支付下单</button>
            </div>
          </div>
        </div>
      </section>

      <section class="user-risk-workbench-shell user-risk-editor-shell">
        <section class="user-risk-workbench-panel user-risk-editor-panel">
          <section class="user-risk-editor-group">
            <div class="user-risk-workbench-card-head user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">基础信息配置</div>
              </div>
              <div class="user-risk-editor-page-actions user-risk-editor-page-actions-inline">
                <button class="primary-btn user-risk-editor-page-action" type="button" id="payment-risk-workbench-save">更新保存</button>
                <button class="secondary-btn user-risk-editor-page-action user-risk-editor-page-action-secondary" type="button" id="payment-risk-workbench-cancel">取消</button>
              </div>
            </div>
            <div class="user-risk-editor-basic-list">
              <label class="user-risk-workbench-field user-risk-workbench-switch-field user-risk-switch-row">
                <div class="user-risk-field-label-row">
                  <span>策略开关</span>
                  <span class="user-risk-field-label-tip">策略开启后，5分钟后线上生效</span>
                </div>
                <button class="switch ${draft.enabled ? "on" : ""}" id="payment-risk-workbench-switch" type="button"></button>
              </label>
              <label class="user-risk-workbench-field user-risk-editor-name-field">
                <span>策略名称</span>
                <input id="payment-risk-workbench-name" value="${escapeHtml(draft.name)}" />
              </label>
              <label class="user-risk-workbench-field">
                <div class="user-risk-field-label-row">
                  <span>生效渠道</span>
                  <span class="user-risk-field-label-tip">同一渠道下，仅允许生效一条风控策略</span>
                </div>
                <button class="user-risk-multi-select-trigger" type="button" id="payment-risk-effective-channels">
                  <span>已选择${(draft.effectiveChannels || []).length}项</span>
                  <span class="user-risk-multi-select-caret">⌄</span>
                </button>
              </label>
            </div>
          </section>

          <section class="user-risk-editor-group">
            <div class="user-risk-workbench-card-head simple user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">风险识别配置</div>
              </div>
            </div>
            <div class="user-risk-editor-behavior-row">
              <div class="user-risk-editor-behavior-label">识别风险行为</div>
              <div class="user-risk-editor-behavior-tip">选中的风险行为识别，将实时应用于线上支付业务场景</div>
            </div>
            <div class="user-risk-workbench-behavior-select-line user-risk-editor-selected-row">
              <div class="user-risk-workbench-behavior-selected">已选择${draft.selectedBehaviors.length}项</div>
              <span class="user-risk-workbench-behavior-selected-caret">⌄</span>
            </div>
            <div class="user-risk-workbench-behavior-grid user-risk-editor-behavior-grid">
              ${behaviorDisplay.cards.map((card) => renderUserRiskBehaviorPickerCard(card, { ...draft, selectedBehaviors: behaviorDisplay.cards.map((item) => item.displayName || item.name) })).join("")}
            </div>
            <div class="user-risk-workbench-score-notice">
              <span class="user-risk-workbench-score-notice-icon">💡</span>
              <span class="user-risk-workbench-score-notice-text">${escapeHtml(behaviorDisplay.summary)}</span>
            </div>
          </section>

          <section class="user-risk-editor-group user-risk-editor-action-card">
            <div class="user-risk-workbench-card-head simple user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">处置动作配置</div>
              </div>
            </div>
            <section class="user-risk-workbench-block-list user-risk-editor-block-list">
              ${draft.blocks.map((block, index) => renderWorkbenchBlock(block, index, draft.blocks.length, renderConfig)).join("")}
            </section>
          </section>
        </section>
      </section>
    </section>
  `;

  bindPaymentRiskWorkbenchEvents(draft, renderConfig);
}

function renderPaymentRiskStrategyBPage() {
  ensurePaymentRiskWorkbenchState();
  const entry = state.paymentRiskWorkbenchEntry;
  const strategy = getPaymentRiskWorkbenchActiveStrategy(entry);
  if (!strategy) {
    pageContent.innerHTML = `<section class="placeholder-panel">当前入口暂无支付策略配置。</section>`;
    return;
  }

  if (!state.paymentRiskWorkbenchDraft || state.paymentRiskWorkbenchDraft.id !== strategy.id) {
    state.paymentRiskWorkbenchDraft = deepClone(strategy);
    state.paymentRiskWorkbenchSourceId = strategy.id;
  }

  const draft = state.paymentRiskWorkbenchDraft;
  const behaviorDisplay = getPaymentRiskBehaviorDisplayConfig(draft);
  const renderConfig = getPaymentRiskWorkbenchRenderConfig();
  const isEditMode = state.paymentRiskWorkbenchBMode === "edit";

  pageContent.innerHTML = `
    <section class="user-risk-workbench-page user-risk-editor-page user-risk-b-page ${isEditMode ? "is-editing" : "is-readonly"}">
      <section class="user-risk-editor-header">
        <div class="user-risk-editor-header-main">
          <div class="user-risk-editor-title-row">
            <h1 class="user-risk-editor-title">支付风控策略B</h1>
            <p class="user-risk-editor-desc">管理支付下单风控策略，并以轻量列表与弹窗方式编排处置动作。</p>
          </div>
          <div class="user-risk-editor-toolbar">
            <div class="user-risk-workbench-entry-tabs user-risk-entry-segment">
              <button class="user-risk-workbench-entry-tab active" type="button" data-payment-workbench-entry="支付下单">支付下单</button>
            </div>
          </div>
        </div>
      </section>

      <section class="user-risk-workbench-shell user-risk-editor-shell">
        <section class="user-risk-workbench-panel user-risk-editor-panel">
          <section class="user-risk-editor-group">
            <div class="user-risk-workbench-card-head user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">基础信息配置</div>
              </div>
              <div class="user-risk-editor-page-actions user-risk-editor-page-actions-inline">
                ${
                  isEditMode
                    ? `
                      <button class="primary-btn user-risk-editor-page-action" type="button" id="payment-risk-workbench-save">保存更新</button>
                      <button class="secondary-btn user-risk-editor-page-action user-risk-editor-page-action-secondary" type="button" id="payment-risk-workbench-cancel">取消</button>
                    `
                    : `<button class="primary-btn user-risk-editor-page-action" type="button" id="payment-risk-workbench-edit">编辑风控</button>`
                }
              </div>
            </div>
            <div class="user-risk-editor-basic-list">
              <label class="user-risk-workbench-field user-risk-workbench-switch-field user-risk-switch-row">
                <div class="user-risk-field-label-row">
                  <span>策略开关</span>
                  <span class="user-risk-field-label-tip">策略开启后，5分钟后线上生效</span>
                </div>
                <button class="switch ${draft.enabled ? "on" : ""}" id="payment-risk-workbench-switch" type="button" ${isEditMode ? "" : "disabled"}></button>
              </label>
              <label class="user-risk-workbench-field user-risk-editor-name-field">
                <span>策略名称</span>
                <input id="payment-risk-workbench-name" value="${escapeHtml(draft.name)}" ${isEditMode ? "" : "readonly"} />
              </label>
              <label class="user-risk-workbench-field">
                <div class="user-risk-field-label-row">
                  <span>生效渠道</span>
                  <span class="user-risk-field-label-tip">同一渠道下，仅允许生效一条风控策略</span>
                </div>
                <button class="user-risk-multi-select-trigger" type="button" id="payment-risk-effective-channels" ${isEditMode ? "" : "disabled"}>
                  <span>已选择${(draft.effectiveChannels || []).length}项</span>
                  <span class="user-risk-multi-select-caret">⌄</span>
                </button>
              </label>
            </div>
          </section>

          <section class="user-risk-editor-group user-risk-b-behavior-group">
            <div class="user-risk-workbench-card-head simple user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">风险识别配置</div>
              </div>
            </div>
            <div class="user-risk-editor-behavior-row">
              <div class="user-risk-editor-behavior-label">识别风险行为</div>
              <div class="user-risk-editor-behavior-tip">选中的风险行为识别，将实时应用于线上支付业务场景</div>
            </div>
            <div class="user-risk-workbench-behavior-select-line user-risk-editor-selected-row user-risk-b-selected-row">
              <div class="user-risk-workbench-behavior-selected">已选择${draft.selectedBehaviors.length}项</div>
              <span class="user-risk-workbench-behavior-selected-caret">⌄</span>
            </div>
            <div class="user-risk-workbench-score-notice user-risk-b-formula-notice">
              <span class="user-risk-workbench-score-notice-icon">💡</span>
              <span class="user-risk-workbench-score-notice-text">${escapeHtml(behaviorDisplay.previewSummary || draft.scoreNotice)}</span>
            </div>
          </section>

          <section class="user-risk-editor-group user-risk-b-action-group">
            <div class="user-risk-workbench-card-head simple user-risk-editor-section-head">
              <div class="user-risk-editor-section-title-wrap">
                <div class="user-risk-workbench-card-title">处置动作配置</div>
                <div class="user-risk-workbench-card-subtitle">支持根据风险分值区间，配置默认处置动作</div>
              </div>
            </div>
            ${renderWorkbenchBActionTable(draft, renderConfig, isEditMode)}
          </section>
        </section>
      </section>
    </section>
  `;

  bindPaymentRiskWorkbenchBEvents(draft, renderConfig);
}

function bindPaymentRiskWorkbenchBEvents(draft, renderConfig = getPaymentRiskWorkbenchRenderConfig()) {
  const isEditMode = state.paymentRiskWorkbenchBMode === "edit";
  pageContent.querySelectorAll("[data-payment-workbench-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.paymentRiskWorkbenchEntry = button.dataset.paymentWorkbenchEntry;
      state.paymentRiskWorkbenchDraft = null;
      state.paymentRiskWorkbenchBMode = "view";
      renderPaymentRiskStrategyBPage();
    });
  });

  pageContent.querySelector("#payment-risk-workbench-edit")?.addEventListener("click", () => {
    const source = getPaymentRiskWorkbenchStrategyById(state.paymentRiskWorkbenchSourceId || draft.id);
    state.paymentRiskWorkbenchDraft = source ? deepClone(source) : deepClone(draft);
    state.paymentRiskWorkbenchBMode = "edit";
    renderPaymentRiskStrategyBPage();
  });

  if (!isEditMode) return;

  pageContent.querySelector("#payment-risk-workbench-name")?.addEventListener("input", (event) => {
    draft.name = event.target.value;
  });

  pageContent.querySelector("#payment-risk-workbench-switch")?.addEventListener("click", () => {
    draft.enabled = !draft.enabled;
    const source = getPaymentRiskWorkbenchStrategyById(draft.id);
    if (source) source.enabled = draft.enabled;
    renderPaymentRiskStrategyBPage();
    showToast(draft.enabled ? "支付策略已生效" : "支付策略已停用");
  });

  pageContent.querySelector("#payment-risk-workbench-save")?.addEventListener("click", () => {
    upsertPaymentRiskWorkbenchDraft();
    state.paymentRiskWorkbenchBMode = "view";
    showToast("支付策略已保存");
    renderPaymentRiskStrategyBPage();
  });

  pageContent.querySelector("#payment-risk-workbench-cancel")?.addEventListener("click", () => {
    const source = getPaymentRiskWorkbenchStrategyById(state.paymentRiskWorkbenchSourceId || draft.id);
    state.paymentRiskWorkbenchDraft = source ? deepClone(source) : deepClone(draft);
    state.paymentRiskWorkbenchBMode = "view";
    renderPaymentRiskStrategyBPage();
  });

  pageContent.querySelectorAll("[data-workbench-add-block]").forEach((button) => {
    button.addEventListener("click", () => {
      openBlockRuleModal(button.dataset.workbenchAddBlock, "payment-risk-engine-b", "create-after");
    });
  });

  pageContent.querySelectorAll("[data-workbench-remove-block]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!removeWorkbenchMiddleBlock(draft.blocks, button.dataset.workbenchRemoveBlock)) return;
      renderPaymentRiskStrategyBPage();
    });
  });

  pageContent.querySelectorAll("[data-b-workbench-edit-rule]").forEach((button) => {
    button.addEventListener("click", () => {
      openBlockRuleModal(button.dataset.bWorkbenchEditRule, "payment-risk-engine-b", "edit");
    });
  });
}

function getUserRiskStrategySceneLabel(strategy, index) {
  if (strategy.entry === "登录") {
    return ["官包防盗号", "联运包防盗号"][index] || strategy.name || `登录场景${index + 1}`;
  }
  return ["官包注册保护", "联运包注册保护"][index] || strategy.name || `注册场景${index + 1}`;
}

function getUserRiskBehaviorWeightLabel(name) {
  const range = getBehaviorCardScoreRange(name);
  const matches = String(range).match(/\d+(?:\.\d+)?/g) || [];
  if (!matches.length) return "1.0";
  return `${Number(matches[matches.length - 1]).toFixed(1)}`;
}

function getUserRiskSelectedBehaviorCards(entry, selectedBehaviors) {
  const cards = getBehaviorCardsByEntry(entry);
  return selectedBehaviors.map((name, index) => {
    const existing = cards.find((item) => item.name === name);
    if (existing) return existing;
    return {
      id: `selected-behavior-${entry}-${index}`,
      name
    };
  });
}

function renderUserRiskStrategyDetailPage(strategyId) {
  const strategy = getUserRiskStrategyWorkingCopy() && state.userRiskStrategyDraft.id === strategyId
    ? state.userRiskStrategyDraft
    : getUserRiskStrategyById(strategyId);
  if (!strategy) {
    state.userRiskStrategyView = { mode: "list", activeId: "" };
    renderUserRiskStrategyPage();
    return;
  }
  const issues = validateUserRiskStrategyDraft(strategy);
  const warnings = getUserRiskStrategyWarnings(strategy);
  const preview = createUserRiskPreviewResult(strategy);

  pageContent.innerHTML = `
    <section class="user-risk-strategy-detail-page">
      <div class="user-risk-strategy-detail-topbar">
        <button class="secondary-btn" type="button" id="user-risk-strategy-back">返回列表</button>
        <div class="user-risk-strategy-detail-topbar-actions">
          <button class="secondary-btn" type="button" id="user-risk-strategy-save-draft">保存草稿</button>
          <button class="primary-btn" type="button" id="user-risk-strategy-publish">发布生效</button>
        </div>
      </div>

      <section class="admin-page-card user-risk-strategy-detail-card">
        <div class="admin-card-title">基本信息</div>
        <div class="user-risk-strategy-detail-grid">
          <label class="admin-filter-item">
            <span>场景名称</span>
            <input id="user-risk-detail-name" value="${escapeHtml(strategy.name)}" placeholder="请输入场景名称" />
          </label>
          <label class="admin-filter-item">
            <span>所属入口</span>
            <select id="user-risk-detail-entry">${optionHtml(["登录", "注册", "自定义业务"], strategy.entry)}</select>
          </label>
          <label class="admin-filter-item">
            <span>状态</span>
            <select id="user-risk-detail-enabled">${optionHtml(["启用", "停用"], strategy.enabled ? "启用" : "停用")}</select>
          </label>
          <label class="admin-filter-item">
            <span>场景优先级</span>
            <input id="user-risk-detail-priority" type="number" value="${escapeHtml(strategy.priority)}" />
          </label>
          <label class="admin-filter-item full-span">
            <span>场景说明</span>
            <textarea id="user-risk-detail-description" rows="3" placeholder="请输入场景说明">${escapeHtml(strategy.description)}</textarea>
          </label>
        </div>
        <div class="user-risk-strategy-version-row">
          <span class="user-risk-strategy-draft-badge ${strategy.hasDraft ? "active" : ""}">${strategy.hasDraft ? "有未发布变更" : "已与发布版本一致"}</span>
          <span>生效版本：${escapeHtml(getUserRiskStrategyPublishInfo(strategy))}</span>
        </div>
      </section>

      <section class="admin-page-card user-risk-strategy-detail-card">
        <div class="admin-card-title">执行配置</div>
        <div class="user-risk-strategy-detail-grid">
          <label class="admin-filter-item full-span">
            <span>同步检测范围</span>
            <input id="user-risk-detail-sync" value="${escapeHtml((strategy.syncBehaviors || []).join("、"))}" placeholder="多个风险行为请用顿号分隔" />
          </label>
          <label class="admin-filter-item full-span">
            <span>异步补充项</span>
            <input id="user-risk-detail-async" value="${escapeHtml((strategy.asyncBehaviors || []).join("、"))}" placeholder="多个风险行为请用顿号分隔" />
          </label>
          <label class="admin-filter-item full-span">
            <span>默认动作</span>
            <select id="user-risk-detail-default-action">${optionHtml(["直接放行", "标记风险", "验证码验证", "滑块验证", "拦截登录", "拦截注册", "封禁", "通知提醒"], strategy.defaultAction)}</select>
          </label>
        </div>
      </section>

      <section class="admin-page-card user-risk-strategy-detail-card">
        <div class="admin-card-title">风险行为引用</div>
        <label class="admin-filter-item full-span">
          <span>风险行为列表</span>
          <input id="user-risk-detail-behaviors" value="${escapeHtml((strategy.behaviors || []).join("、"))}" placeholder="多个风险行为请用顿号分隔" />
        </label>
        <div class="user-risk-strategy-pill-list">${renderUserRiskStrategyPills(strategy.behaviors, "未引用风险行为")}</div>
      </section>

      <section class="admin-page-card user-risk-strategy-detail-card">
        <div class="admin-card-title">标签引用</div>
        <label class="admin-filter-item full-span">
          <span>标签列表</span>
          <input id="user-risk-detail-tags" value="${escapeHtml((strategy.tags || []).join("、"))}" placeholder="多个标签请用顿号分隔" />
        </label>
        <div class="user-risk-strategy-pill-list">${renderUserRiskStrategyPills(strategy.tags, "未引用标签")}</div>
      </section>

      <section class="admin-page-card user-risk-strategy-detail-card">
        <div class="admin-card-title">分层配置</div>
        ${strategy.layers.length ? `<div class="user-risk-layer-grid">${strategy.layers.slice().sort((a, b) => a.priority - b.priority).map(renderUserRiskLayerCard).join("")}</div>` : `<div class="empty-panel">当前场景还没有策略层，请先新增第一层。</div>`}
        <div class="user-risk-layer-toolbar">
          <button class="primary-btn" type="button" id="user-risk-add-layer">新增层</button>
        </div>
      </section>

      <section class="admin-page-card user-risk-strategy-detail-card">
        <div class="admin-card-title">决策预览</div>
        <div class="user-risk-preview-result">
          <div>命中层：${escapeHtml(preview.finalLayer?.name || "未命中任何层")}</div>
          <div>最终动作：${escapeHtml(preview.finalAction)}</div>
          <div>命中链路：${escapeHtml(preview.matchedLayers.map((layer) => layer.name).join(" → ") || "-")}</div>
        </div>
        <div class="user-risk-preview-actions">
          <button class="secondary-btn" type="button" id="user-risk-open-log">查看命中记录</button>
        </div>
      </section>

      <section class="admin-page-card user-risk-strategy-detail-card">
        <div class="admin-card-title">校验与提醒</div>
        <div class="user-risk-warning-list ${issues.length ? "has-issues" : ""}">
          ${issues.length ? issues.map((issue) => `<div class="user-risk-warning-item issue">${escapeHtml(issue)}</div>`).join("") : `<div class="user-risk-warning-item success">当前草稿配置完整。</div>`}
          ${warnings.map((warning) => `<div class="user-risk-warning-item warning">${escapeHtml(warning)}</div>`).join("")}
        </div>
      </section>
    </section>
  `;

  bindUserRiskStrategyDetailEvents(strategy.id);
}

function renderUserRiskStrategyPills(items, emptyText) {
  if (!items.length) return `<span class="user-risk-strategy-pill empty">${emptyText}</span>`;
  return items.map((item) => `<span class="user-risk-strategy-pill">${escapeHtml(item)}</span>`).join("");
}

function renderUserRiskLayerCard(layer) {
  return `
    <article class="user-risk-layer-card">
      <div class="user-risk-layer-card-head">
        <div>
          <div class="user-risk-layer-card-title">${escapeHtml(layer.name)}</div>
          <div class="user-risk-layer-card-meta">优先级 ${escapeHtml(layer.priority)} · ${layer.enabled ? "启用" : "停用"}</div>
        </div>
        <span class="user-risk-layer-card-action-tag">${escapeHtml(layer.action || "未配置动作")}</span>
      </div>
      <div class="user-risk-layer-card-summary">${escapeHtml(summarizeUserRiskLayerConditions(layer) || "未配置命中条件")}</div>
      <div class="user-risk-layer-card-note">${escapeHtml(layer.note || "暂无说明")}</div>
      <div class="user-risk-layer-card-foot">最近命中量：${escapeHtml(layer.hits || "0")}</div>
      <div class="user-risk-layer-card-tools">
        <button type="button" data-user-risk-layer-action="edit" data-layer-id="${layer.id}">编辑</button>
        <button type="button" data-user-risk-layer-action="copy" data-layer-id="${layer.id}">复制</button>
        <button type="button" data-user-risk-layer-action="delete" data-layer-id="${layer.id}">删除</button>
      </div>
    </article>
  `;
}

function handleUserRiskStrategyCardAction(action, id) {
  const strategy = getUserRiskStrategyById(id);
  if (!strategy) return;
  if (action === "toggle") {
    strategy.enabled = !strategy.enabled;
    strategy.updatedAt = formatDateTime(new Date());
    strategy.updatedBy = "wangjian02@dobest.com";
    renderUserRiskStrategyPage();
    return;
  }
  const next = action === "copy" ? deepClone(strategy) : strategy;
  if (action === "copy") {
    next.id = uid();
    next.name = `${strategy.name}-副本`;
    next.enabled = false;
    next.hasDraft = true;
    next.draftVersion = 1;
    next.publishedVersion = 0;
    next.publishedAt = "";
    next.publishedBy = "";
    next.layers = next.layers.map((layer, index) => createUserRiskStrategyLayer({ ...layer, id: uid(), priority: index + 1 }));
    state.userRiskStrategySourceId = "";
    state.userRiskStrategyDraft = next;
    state.userRiskStrategyView = { mode: "detail", activeId: next.id };
    renderUserRiskStrategyPage();
    return;
  }
  state.userRiskStrategySourceId = strategy.id;
  state.userRiskStrategyDraft = deepClone(strategy);
  state.userRiskStrategyView = { mode: "detail", activeId: strategy.id };
  renderUserRiskStrategyPage();
}

function bindUserRiskStrategyDetailEvents(strategyId) {
  const strategy = getUserRiskStrategyWorkingCopy();
  if (!strategy || strategy.id !== strategyId) return;

  pageContent.querySelector("#user-risk-strategy-back")?.addEventListener("click", () => {
    state.userRiskStrategyView = { mode: "list", activeId: "" };
    state.userRiskStrategyDraft = null;
    state.userRiskStrategySourceId = "";
    resetUserRiskStrategyLayerModal();
    renderUserRiskStrategyPage();
  });

  pageContent.querySelector("#user-risk-detail-name")?.addEventListener("input", (event) => {
    strategy.name = event.target.value;
  });
  pageContent.querySelector("#user-risk-detail-entry")?.addEventListener("change", (event) => {
    strategy.entry = event.target.value;
  });
  pageContent.querySelector("#user-risk-detail-enabled")?.addEventListener("change", (event) => {
    strategy.enabled = event.target.value === "启用";
  });
  pageContent.querySelector("#user-risk-detail-priority")?.addEventListener("input", (event) => {
    strategy.priority = Number(event.target.value) || strategy.priority;
  });
  pageContent.querySelector("#user-risk-detail-description")?.addEventListener("input", (event) => {
    strategy.description = event.target.value;
  });
  pageContent.querySelector("#user-risk-detail-sync")?.addEventListener("input", (event) => {
    strategy.syncBehaviors = splitStrategyInputValue(event.target.value);
  });
  pageContent.querySelector("#user-risk-detail-async")?.addEventListener("input", (event) => {
    strategy.asyncBehaviors = splitStrategyInputValue(event.target.value);
  });
  pageContent.querySelector("#user-risk-detail-behaviors")?.addEventListener("input", (event) => {
    strategy.behaviors = splitStrategyInputValue(event.target.value);
  });
  pageContent.querySelector("#user-risk-detail-tags")?.addEventListener("input", (event) => {
    strategy.tags = splitStrategyInputValue(event.target.value);
  });
  pageContent.querySelector("#user-risk-detail-default-action")?.addEventListener("change", (event) => {
    strategy.defaultAction = event.target.value;
  });
  pageContent.querySelector("#user-risk-strategy-save-draft")?.addEventListener("click", () => {
    upsertUserRiskStrategyDraft();
    showToast("草稿已保存");
    renderUserRiskStrategyDetailPage(strategy.id);
  });
  pageContent.querySelector("#user-risk-strategy-publish")?.addEventListener("click", () => {
    const result = publishUserRiskStrategyDraft();
    showToast(result.message);
    renderUserRiskStrategyDetailPage(strategy.id);
  });
  pageContent.querySelector("#user-risk-add-layer")?.addEventListener("click", () => {
    openUserRiskLayerModal();
  });
  pageContent.querySelector("#user-risk-open-log")?.addEventListener("click", () => {
    state.currentPage = "login-log";
    renderApp();
  });

  pageContent.querySelectorAll("[data-user-risk-layer-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleUserRiskLayerAction(button.dataset.userRiskLayerAction, button.dataset.layerId);
    });
  });

  if (state.userRiskLayerModal.open) {
    renderUserRiskLayerModal();
  } else {
    drawerRoot.innerHTML = "";
    document.body.style.overflow = "";
  }
}

function splitStrategyInputValue(value) {
  return String(value || "")
    .split(/[、,，\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function openUserRiskLayerModal(layerId = "") {
  const strategy = getUserRiskStrategyWorkingCopy();
  if (!strategy) return;
  const sourceLayer = layerId ? strategy.layers.find((item) => item.id === layerId) : null;
  state.userRiskLayerModal = {
    open: true,
    mode: sourceLayer ? "edit" : "create",
    layerId,
    form: sourceLayer
      ? deepClone(sourceLayer)
      : createUserRiskStrategyLayer({ priority: strategy.layers.length + 1, enabled: true })
  };
  renderUserRiskLayerModal();
}

function handleUserRiskLayerAction(action, layerId) {
  const strategy = getUserRiskStrategyWorkingCopy();
  if (!strategy) return;
  const index = strategy.layers.findIndex((item) => item.id === layerId);
  if (index < 0) return;
  if (action === "edit") {
    openUserRiskLayerModal(layerId);
    return;
  }
  if (action === "copy") {
    const cloned = createUserRiskStrategyLayer({ ...deepClone(strategy.layers[index]), id: uid(), name: `${strategy.layers[index].name}-副本`, priority: strategy.layers.length + 1 });
    strategy.layers.push(cloned);
    renderUserRiskStrategyDetailPage(strategy.id);
    return;
  }
  if (action === "delete") {
    strategy.layers.splice(index, 1);
    strategy.layers.forEach((layer, order) => {
      layer.priority = order + 1;
    });
    renderUserRiskStrategyDetailPage(strategy.id);
  }
}

function renderUserRiskLayerModal() {
  const modal = state.userRiskLayerModal;
  const form = modal.form;
  if (!modal.open || !form) {
    drawerRoot.innerHTML = "";
    document.body.style.overflow = "";
    return;
  }
  document.body.style.overflow = "hidden";
  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <div class="drawer user-risk-layer-drawer">
        <div class="drawer-head">
          <h2 class="drawer-title">${modal.mode === "edit" ? "编辑策略层" : "新增策略层"}</h2>
          <button class="close-btn" type="button" id="user-risk-layer-close">×</button>
        </div>
        <div class="user-risk-layer-form-grid">
          <label class="admin-filter-item">
            <span>层名称</span>
            <input id="user-risk-layer-name" value="${escapeHtml(form.name)}" placeholder="请输入层名称" />
          </label>
          <label class="admin-filter-item">
            <span>优先级</span>
            <input id="user-risk-layer-priority" type="number" value="${escapeHtml(form.priority)}" />
          </label>
          <label class="admin-filter-item">
            <span>状态</span>
            <select id="user-risk-layer-enabled">${optionHtml(["启用", "停用"], form.enabled ? "启用" : "停用")}</select>
          </label>
          <label class="admin-filter-item full-span">
            <span>风险分条件</span>
            <input id="user-risk-layer-score" value="${escapeHtml(form.scoreCondition)}" placeholder="如 >=80 或 40-79" />
          </label>
          <label class="admin-filter-item full-span">
            <span>命中标签</span>
            <input id="user-risk-layer-tag-include" value="${escapeHtml(form.tagInclude.join("、"))}" placeholder="多个标签请用顿号分隔" />
          </label>
          <label class="admin-filter-item full-span">
            <span>排除标签</span>
            <input id="user-risk-layer-tag-exclude" value="${escapeHtml(form.tagExclude.join("、"))}" placeholder="多个标签请用顿号分隔" />
          </label>
          <label class="admin-filter-item full-span">
            <span>风险行为条件</span>
            <input id="user-risk-layer-behavior" value="${escapeHtml(form.behaviorInclude.join("、"))}" placeholder="多个风险行为请用顿号分隔" />
          </label>
          <label class="admin-filter-item full-span">
            <span>基础属性条件</span>
            <input id="user-risk-layer-base" value="${escapeHtml(form.baseConditions.join("、"))}" placeholder="如 设备=工作室设备、IP=代理IP/VPN" />
          </label>
          <label class="admin-filter-item full-span">
            <span>处置动作</span>
            <select id="user-risk-layer-action">${optionHtml(["", "直接放行", "标记风险", "验证码验证", "滑块验证", "拦截登录", "拦截注册", "封禁", "通知提醒"], form.action, "请选择处置动作")}</select>
          </label>
          <label class="admin-filter-item full-span">
            <span>动作参数</span>
            <input id="user-risk-layer-action-params" value="${escapeHtml(form.actionParams)}" placeholder="如 封禁 30 分钟" />
          </label>
          <label class="admin-filter-item full-span">
            <span>命中说明</span>
            <textarea id="user-risk-layer-note" rows="3" placeholder="请输入命中说明">${escapeHtml(form.note)}</textarea>
          </label>
        </div>
        <div class="drawer-foot user-risk-layer-drawer-foot">
          <button class="secondary-btn" type="button" id="user-risk-layer-cancel">取消</button>
          <button class="primary-btn" type="button" id="user-risk-layer-save">保存</button>
        </div>
      </div>
    </div>
  `;

  drawerRoot.querySelector("#user-risk-layer-close")?.addEventListener("click", () => {
    resetUserRiskStrategyLayerModal();
    renderUserRiskStrategyDetailPage(getUserRiskStrategyWorkingCopy().id);
  });
  drawerRoot.querySelector("#user-risk-layer-cancel")?.addEventListener("click", () => {
    resetUserRiskStrategyLayerModal();
    renderUserRiskStrategyDetailPage(getUserRiskStrategyWorkingCopy().id);
  });
  drawerRoot.querySelector("#user-risk-layer-name")?.addEventListener("input", (event) => {
    form.name = event.target.value;
  });
  drawerRoot.querySelector("#user-risk-layer-priority")?.addEventListener("input", (event) => {
    form.priority = Number(event.target.value) || form.priority;
  });
  drawerRoot.querySelector("#user-risk-layer-enabled")?.addEventListener("change", (event) => {
    form.enabled = event.target.value === "启用";
  });
  drawerRoot.querySelector("#user-risk-layer-score")?.addEventListener("input", (event) => {
    form.scoreCondition = event.target.value;
  });
  drawerRoot.querySelector("#user-risk-layer-tag-include")?.addEventListener("input", (event) => {
    form.tagInclude = splitStrategyInputValue(event.target.value);
  });
  drawerRoot.querySelector("#user-risk-layer-tag-exclude")?.addEventListener("input", (event) => {
    form.tagExclude = splitStrategyInputValue(event.target.value);
  });
  drawerRoot.querySelector("#user-risk-layer-behavior")?.addEventListener("input", (event) => {
    form.behaviorInclude = splitStrategyInputValue(event.target.value);
  });
  drawerRoot.querySelector("#user-risk-layer-base")?.addEventListener("input", (event) => {
    form.baseConditions = splitStrategyInputValue(event.target.value);
  });
  drawerRoot.querySelector("#user-risk-layer-action")?.addEventListener("change", (event) => {
    form.action = event.target.value;
  });
  drawerRoot.querySelector("#user-risk-layer-action-params")?.addEventListener("input", (event) => {
    form.actionParams = event.target.value;
  });
  drawerRoot.querySelector("#user-risk-layer-note")?.addEventListener("input", (event) => {
    form.note = event.target.value;
  });
  drawerRoot.querySelector("#user-risk-layer-save")?.addEventListener("click", () => {
    saveUserRiskLayerModal();
  });
}

function saveUserRiskLayerModal() {
  const strategy = getUserRiskStrategyWorkingCopy();
  const modal = state.userRiskLayerModal;
  if (!strategy || !modal.form) return;
  if (!modal.form.name.trim()) {
    showToast("请填写层名称");
    return;
  }
  if (!modal.form.action) {
    showToast("请选择处置动作");
    return;
  }
  if (!hasUserRiskLayerConditions(modal.form)) {
    showToast("至少需要一个命中条件");
    return;
  }
  const layer = createUserRiskStrategyLayer({ ...modal.form, id: modal.mode === "edit" ? modal.form.id : uid() });
  if (modal.mode === "edit") {
    const index = strategy.layers.findIndex((item) => item.id === modal.layerId);
    if (index >= 0) strategy.layers[index] = layer;
  } else {
    strategy.layers.push(layer);
  }
  strategy.layers
    .slice()
    .sort((a, b) => a.priority - b.priority)
    .forEach((item, index) => {
      item.priority = index + 1;
    });
  resetUserRiskStrategyLayerModal();
  renderUserRiskStrategyDetailPage(strategy.id);
}

function renderRiskBehaviorSections() {
  const filters = state.behaviorFilters ||= createDefaultBehaviorFilters();
  if (!state.behaviorFilterDraft) {
    state.behaviorFilterDraft = cloneFilters(filters);
  }
  const draftFilters = state.behaviorFilterDraft;
  const availableTabs = ["全部风险行为", "登录风险行为", "注册风险行为", "支付风险行为"];
  if (!availableTabs.includes(state.behaviorCardTab)) {
    state.behaviorCardTab = "全部风险行为";
  }

  const allUserCards = userBehaviorSections.find((section) => section.key === "all")?.cards || [];
  const loginCards = userBehaviorSections.find((section) => section.key === "login")?.cards || [];
  const registerCards = userBehaviorSections.find((section) => section.key === "register")?.cards || [];
  let sourceCards = [...allUserCards, ...paymentBehaviorCards];
  if (state.behaviorCardTab === "登录风险行为") {
    sourceCards = loginCards;
  } else if (state.behaviorCardTab === "注册风险行为") {
    sourceCards = registerCards;
  } else if (state.behaviorCardTab === "支付风险行为") {
    sourceCards = paymentBehaviorCards;
  }
  const keyword = filters.keyword.trim().toLowerCase();
  const visibleCards = sourceCards.filter((card) => {
    if (!keyword) return true;
    return card.name.toLowerCase().includes(keyword) || card.description.toLowerCase().includes(keyword);
  });

  pageContent.innerHTML = `
    <section class="behavior-management-page">
      <section class="behavior-management-search-panel">
        <div class="behavior-management-search-row">
          <label class="behavior-management-search-field">
            <span>风险行为名称/描述</span>
            <input id="behavior-search" value="${escapeHtml(draftFilters.keyword)}" placeholder="请输入风险行为名称或描述" />
          </label>
          <div class="behavior-management-search-actions">
            <button class="secondary-btn behavior-management-btn" type="button" id="behavior-filter-reset">重置</button>
            <button class="primary-btn behavior-management-btn" type="button" id="behavior-filter-apply">查询</button>
          </div>
        </div>
      </section>
      <section class="behavior-management-board">
        <div class="behavior-management-tabs">
          ${availableTabs
            .map(
              (tab) => `
                <button class="behavior-management-tab ${state.behaviorCardTab === tab ? "active" : ""}" type="button" data-behavior-card-tab="${tab}">
                  ${tab}
                </button>
              `
            )
            .join("")}
        </div>
        ${
          visibleCards.length
            ? `
              <div class="behavior-management-grid">
                ${visibleCards
                  .map(
                    (card) => {
                      const managedRule = isManagedBehaviorRule(card);
                      const configLabel = managedRule ? "配置规则" : "查看规则";
                      const statusText = card.enabled ? "生效中" : "已停用";
                      return `
                      <article class="behavior-management-card" data-tag-card="${card.id}">
                        <div class="behavior-management-card-body">
                          <div class="behavior-management-card-head">
                            <h3 class="behavior-management-card-title">${escapeHtml(card.name)}</h3>
                            <span class="behavior-management-card-status ${card.enabled ? "enabled" : "disabled"}"><span class="behavior-management-card-status-dot"></span>${statusText}</span>
                          </div>
                          <p class="behavior-management-card-desc">${escapeHtml(card.description)}</p>
                          <div class="behavior-management-card-stats">
                            <div class="behavior-management-card-stat">
                              <div class="behavior-management-card-stat-label">当日触发数</div>
                              <div class="behavior-management-card-stat-value">${card.coverage}</div>
                            </div>
                            <div class="behavior-management-card-stat">
                              <div class="behavior-management-card-stat-label">当日触发占比</div>
                              <div class="behavior-management-card-stat-value">${card.triggerRate || "0.00%"}</div>
                            </div>
                          </div>
                        </div>
                        <div class="behavior-management-card-actions">
                          <button class="behavior-management-card-action" type="button" data-behavior-detail="${card.id}" aria-label="查看规则" title="查看规则">
                            ${renderBehaviorCardActionIcon("detail")}
                          </button>
                          <button class="behavior-management-card-action" type="button" data-tag-view="${card.id}" aria-label="${configLabel}" title="${configLabel}">
                            ${renderBehaviorCardActionIcon("config")}
                          </button>
                        </div>
                      </article>
                    `;
                    }
                  )
                  .join("")}
              </div>
            `
            : `<section class="empty-panel behavior-management-empty">未找到符合筛选条件的风险行为，请尝试重置条件。</section>`
        }
      </section>
    </section>
  `;

  pageContent.querySelector("#behavior-search")?.addEventListener("input", (event) => {
    state.behaviorFilterDraft.keyword = event.target.value;
  });
  pageContent.querySelector("#behavior-filter-reset")?.addEventListener("click", () => {
    state.behaviorFilterDraft = createDefaultBehaviorFilters();
    const searchInput = pageContent.querySelector("#behavior-search");
    if (searchInput) searchInput.value = "";
  });
  pageContent.querySelector("#behavior-filter-apply")?.addEventListener("click", () => {
    state.behaviorFilters = cloneFilters(state.behaviorFilterDraft);
    renderRiskBehaviorSections();
  });
  pageContent.querySelectorAll("[data-behavior-card-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.behaviorCardTab = button.dataset.behaviorCardTab;
      renderRiskBehaviorSections();
    });
  });
  pageContent.querySelectorAll("[data-behavior-detail]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openBehaviorRuleModal(button.dataset.behaviorDetail, "view");
    });
  });
  pageContent.querySelectorAll("[data-tag-view]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const card = findTagCard(button.dataset.tagView);
      openBehaviorRuleModal(button.dataset.tagView, isManagedBehaviorRule(card) ? "config" : "view");
    });
  });
  pageContent.querySelectorAll("[data-tag-card]").forEach((card) => {
    card.addEventListener("click", () => {
      openBehaviorRuleModal(card.dataset.tagCard, "view");
    });
  });
}

function renderBehaviorCardActionIcon(kind) {
  if (kind === "detail") {
    return `
      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M1.5 8c1.9-3 4.06-4.5 6.5-4.5S12.6 5 14.5 8c-1.9 3-4.06 4.5-6.5 4.5S3.4 11 1.5 8Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
        <circle cx="8" cy="8" r="1.9" fill="none" stroke="currentColor" stroke-width="1.2"></circle>
      </svg>
    `;
  }
  return `
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M9.74 1.5 10.1 3a5.52 5.52 0 0 1 1.15.48l1.28-.77 1.15 1.98-1.23.82c.14.37.24.76.3 1.17l1.45.36v2.32l-1.45.35c-.06.41-.16.8-.3 1.17l1.23.82-1.15 1.98-1.28-.77c-.36.2-.74.36-1.15.48l-.36 1.5H6.26L5.9 13a5.52 5.52 0 0 1-1.15-.48l-1.28.77-1.15-1.98 1.23-.82a5.58 5.58 0 0 1-.3-1.17L1.8 9.97V7.65l1.45-.35c.06-.41.16-.8.3-1.17l-1.23-.82 1.15-1.98 1.28.77c.36-.2.74-.36 1.15-.48l.36-1.5h3.48Z" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"></path>
      <circle cx="8" cy="8" r="2.05" fill="none" stroke="currentColor" stroke-width="1.1"></circle>
    </svg>
  `;
}

function renderTagSections() {
  const filters = state.tagFilters ||= createDefaultTagFilters();
  if (!state.tagFilterDraft) {
    state.tagFilterDraft = cloneFilters(filters);
  }
  const draftFilters = state.tagFilterDraft;
  const tagTabs = ["全部标签", "设备标签", "账号标签", "IP标签"];
  if (!tagTabs.includes(state.tagCardTab)) {
    state.tagCardTab = "全部标签";
  }
  const visibleCards = tagSections
    .filter((section) => state.tagCardTab === "全部标签" || state.tagCardTab === section.title)
    .flatMap((section) => {
      const keyword = filters.keyword.trim().toLowerCase();
      return section.cards
        .filter((card) => {
          return (
            !keyword ||
            card.name.toLowerCase().includes(keyword) ||
            card.description.toLowerCase().includes(keyword)
          );
        })
        .map((card) => ({ ...card, sectionType: section.type, sectionTitle: section.title }));
    });

  pageContent.innerHTML = `
    <section class="user-tag-page">
      <section class="user-tag-search-card">
        <div class="user-tag-search-row">
          <label class="user-tag-search-field">
            <span>标签名称/描述</span>
            <input id="tag-search" value="${escapeHtml(draftFilters.keyword)}" placeholder="请输入标签名称或描述" />
          </label>
          <div class="user-tag-search-actions">
            <button class="secondary-btn" type="button" id="tag-filter-reset">重置</button>
            <button class="primary-btn" type="button" id="tag-filter-apply">查询</button>
          </div>
        </div>
      </section>
      <section class="user-tag-panel">
        <div class="user-tag-tabs">
          ${tagTabs
            .map(
              (tab) => `
                <button class="user-tag-tab ${state.tagCardTab === tab ? "active" : ""}" type="button" data-tag-card-tab="${tab}">
                  ${tab}
                </button>
              `
            )
            .join("")}
        </div>
        ${
          visibleCards.length
            ? `
                <div class="user-tag-grid">
                ${visibleCards
                  .map((card) => {
                    const coverageLabel = getTagCoverageLabel(card.sectionType);
                    return `
                      <article class="user-tag-card">
                        <div class="user-tag-card-top">
                          <div class="user-tag-card-title">${escapeHtml(card.name)}</div>
                        </div>
                        <p class="user-tag-card-desc">${escapeHtml(card.description)}</p>
                        <div class="user-tag-card-stats">
                          <div class="user-tag-card-stat">
                            <div class="metric-label">${coverageLabel}</div>
                            <div class="metric-value">${card.coverage}</div>
                          </div>
                          <div class="user-tag-card-stat">
                            <div class="metric-label">更新方式</div>
                            <div class="metric-value small">${getTagUpdateModeDisplay(card)}</div>
                          </div>
                        </div>
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            `
            : `<section class="empty-panel">未找到符合筛选条件的标签，请尝试重置条件。</section>`
        }
      </section>
    </section>`;

  pageContent.querySelector("#tag-search")?.addEventListener("input", (event) => {
    state.tagFilterDraft.keyword = event.target.value;
  });
  pageContent.querySelector("#tag-filter-reset")?.addEventListener("click", () => {
    state.tagFilters = createDefaultTagFilters();
    state.tagFilterDraft = createDefaultTagFilters();
    renderTagSections();
  });
  pageContent.querySelector("#tag-filter-apply")?.addEventListener("click", () => {
    state.tagFilters = cloneFilters(state.tagFilterDraft);
    renderTagSections();
  });
  pageContent.querySelectorAll("[data-tag-card-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tagCardTab = button.dataset.tagCardTab;
      renderTagSections();
    });
  });
}

function renderPortraitPage() {
  renderPortraitSearchPage();
}

function renderPortraitSearchPage() {
  state.portraitContextPage = state.currentPage;
  const config = portraitConfigs[state.currentPage];
  const placeholder = config.inputPlaceholder[state.portraitMode];
  const examples = config.examples[state.portraitMode];

  pageContent.innerHTML = `
    <section class="portrait-search-shell">
      <div class="portrait-search-card">
        <div class="portrait-query-head">
          <h2>${config.title}</h2>
          <p>${config.subtitle}</p>
        </div>
        <div class="portrait-tab-row">
          ${config.tabs
            .map(
              (tab) => `
                <button class="portrait-tab ${state.portraitMode === tab.key ? "active" : ""}" type="button" data-portrait-tab="${tab.key}">
                  ${tab.label}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="portrait-search-row">
          <input id="portrait-query-input" class="portrait-search-input" value="${escapeHtml(
            state.portraitKeyword
          )}" placeholder="${placeholder}" />
          <button class="primary-btn portrait-submit-btn" id="portrait-search-submit" type="button">${config.searchButton}</button>
        </div>
        <div class="portrait-helper-row">
          <span class="portrait-helper-label">支持按账号、设备、IP 进行精确查询，并展示关联关系链。</span>
        </div>
        <div class="portrait-chip-row">
          <span class="portrait-chip-label">常用查询</span>
          ${examples
            .map(
              (value) => `
                <button class="portrait-chip" type="button" data-portrait-example="${value}">
                  ${value}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;

  pageContent.querySelectorAll("[data-portrait-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.portraitMode = button.dataset.portraitTab;
      state.portraitKeyword = "";
      renderPage();
    });
  });
  pageContent.querySelectorAll("[data-portrait-example]").forEach((button) => {
    button.addEventListener("click", () => {
      state.portraitKeyword = button.dataset.portraitExample;
      executePortraitQuery(button.dataset.portraitExample);
    });
  });

  const input = pageContent.querySelector("#portrait-query-input");
  input.addEventListener("input", (event) => {
    state.portraitKeyword = event.target.value;
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") executePortraitQuery(event.target.value);
  });
  pageContent.querySelector("#portrait-search-submit").addEventListener("click", () => {
    executePortraitQuery(input.value);
  });
}

function renderPortraitResultPage() {
  const profile = state.portraitResult;
  if (!profile) return;
  const config = portraitConfigs[state.currentPage] || portraitConfigs.multi-query;
  const pageSize = 10;
  const activeLogTab = state.portraitLogTab || profile.defaultLogTab || "user";
  const dataset = getExpandedPortraitLogs(profile, 1244, activeLogTab);
  const total = dataset.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.max(1, Math.min(pageCount, state.portraitLogPage));
  const start = (currentPage - 1) * pageSize;
  const rows = dataset.slice(start, start + pageSize);
  const pagerItems = buildPagerItems(currentPage, pageCount);

  pageContent.innerHTML = buildPortraitResultMarkup(profile, config, rows, total, pagerItems, currentPage, pageCount, pageSize, "portrait-reset-btn");

  pageContent.querySelector("#portrait-reset-btn").addEventListener("click", resetPortraitQuery);
  pageContent.querySelectorAll("[data-portrait-log-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.portraitLogTab = button.dataset.portraitLogTab;
      state.portraitLogPage = 1;
      renderPage();
    });
  });
  bindCopyActions(pageContent);
  pageContent.querySelectorAll("[data-portrait-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.portraitLogPage = Number(button.dataset.portraitPage);
      renderPage();
    });
  });
  pageContent.querySelectorAll("[data-portrait-page-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.portraitPageNav === "first") state.portraitLogPage = 1;
      if (button.dataset.portraitPageNav === "prev") state.portraitLogPage = Math.max(1, currentPage - 1);
      if (button.dataset.portraitPageNav === "next") state.portraitLogPage = Math.min(pageCount, currentPage + 1);
      if (button.dataset.portraitPageNav === "last") state.portraitLogPage = pageCount;
      renderPage();
    });
  });
  pageContent.querySelectorAll("[data-portrait-log]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = rows[Number(button.dataset.portraitLog)];
      alert(`${item.time}\n${item.actionType}\n${item.account || ""}\n${item.deviceId || ""}\n${item.ip || ""}`);
    });
  });
}

function renderPortraitResultModal() {
  const profile = state.portraitResult;
  if (!profile) return;
  const config = portraitConfigs["multi-query"];
  const pageSize = 10;
  const activeLogTab = state.portraitLogTab || profile.defaultLogTab || "user";
  const allLogs = getExpandedPortraitLogs(profile, 1244, activeLogTab);
  const dataset = allLogs;
  const total = dataset.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.max(1, Math.min(pageCount, state.portraitLogPage));
  const start = (currentPage - 1) * pageSize;
  const rows = dataset.slice(start, start + pageSize);
  const pagerItems = buildPagerItems(currentPage, pageCount);

  drawerRoot.innerHTML = `
    <div class="drawer-overlay portrait-modal-overlay">
      <div class="portrait-result-modal">
        <div class="portrait-result-modal-content">
          ${buildPortraitResultMarkup(profile, config, rows, total, pagerItems, currentPage, pageCount, pageSize, "portrait-reset-btn")}
          ${renderPortraitRelationMapOverlay(profile)}
        </div>
      </div>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector("#portrait-reset-btn").addEventListener("click", resetPortraitQuery);
  drawerRoot.querySelectorAll("[data-portrait-log-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.portraitLogTab = button.dataset.portraitLogTab;
      state.portraitLogPage = 1;
      renderPortraitResultModal();
    });
  });
  bindCopyActions(drawerRoot);
  drawerRoot.querySelectorAll("[data-portrait-relation-expand]").forEach((button) => {
    button.addEventListener("click", () => {
      state.portraitRelationMap = buildPortraitRelationMap(profile);
      renderPortraitResultModal();
    });
  });
  drawerRoot.querySelectorAll("[data-portrait-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.portraitLogPage = Number(button.dataset.portraitPage);
      renderPortraitResultModal();
    });
  });
  drawerRoot.querySelectorAll("[data-portrait-page-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.portraitPageNav === "first") state.portraitLogPage = 1;
      if (button.dataset.portraitPageNav === "prev") state.portraitLogPage = Math.max(1, currentPage - 1);
      if (button.dataset.portraitPageNav === "next") state.portraitLogPage = Math.min(pageCount, currentPage + 1);
      if (button.dataset.portraitPageNav === "last") state.portraitLogPage = pageCount;
      renderPortraitResultModal();
    });
  });
  drawerRoot.querySelectorAll("[data-portrait-log]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = rows[Number(button.dataset.portraitLog)];
      alert(`${item.time}\n${item.actionType}\n${item.account || ""}\n${item.deviceId || ""}\n${item.ip || ""}`);
    });
  });
  const relationOverlay = drawerRoot.querySelector("#portrait-map-overlay");
  if (relationOverlay) {
    relationOverlay.addEventListener("click", (event) => {
      if (event.target === relationOverlay) {
        state.portraitRelationMap = null;
        renderPortraitResultModal();
      }
    });
    drawerRoot.querySelector("#portrait-map-close").addEventListener("click", () => {
      state.portraitRelationMap = null;
      renderPortraitResultModal();
    });
    drawerRoot.querySelector("#portrait-map-shrink").addEventListener("click", () => {
      state.portraitRelationMap = null;
      renderPortraitResultModal();
    });
    drawerRoot.querySelectorAll("[data-relation-expand-node]").forEach((button) => {
      button.addEventListener("click", () => {
        const nodeId = button.dataset.relationExpandNode;
        const target = state.portraitRelationMap?.nodes.find((item) => item.id === nodeId);
        if (!target || !state.portraitRelationMap) return;
        state.portraitRelationMap.highlightedId = nodeId;
        const hasChildren = getRelationNodeChildren(state.portraitRelationMap, nodeId).length > 0;
        if (hasChildren && target.depth < 5 && !state.portraitRelationMap.expandedIds.includes(nodeId)) {
          state.portraitRelationMap.expandedIds.push(nodeId);
        }
        renderPortraitResultModal();
      });
    });
  }
}

function executePortraitQuery(rawValue) {
  const keyword = String(rawValue || "").trim();
  if (!keyword) {
    alert("请输入查询内容");
    return;
  }
  state.portraitKeyword = keyword;
  state.portraitContextPage = currentPortraitConfigPage();
  const root = buildPortraitTrailItemByMode(state.portraitMode, keyword);
  state.portraitTrail = [root];
  state.portraitResult = createPortraitProfile(state.portraitContextPage, root);
  state.portraitView = "result";
  state.portraitLogPage = 1;
  state.portraitLogTab = state.portraitResult.defaultLogTab || "user";
  state.portraitLogQuickFilter = "all";
  state.modalOpen = true;
  state.modalKind = "portrait-result";
  renderOverlay();
}

function openPortraitResultModal(mode, value, contextPage = "login-query") {
  state.portraitContextPage = contextPage === "payment-query" ? "payment-query" : "login-query";
  state.portraitMode = mode;
  state.portraitKeyword = value;
  const root = buildPortraitTrailItemByMode(mode, value);
  state.portraitTrail = [root];
  state.portraitResult = createPortraitProfile(state.portraitContextPage, root);
  state.portraitView = "result";
  state.portraitLogPage = 1;
  state.portraitLogTab = state.portraitResult.defaultLogTab || "user";
  state.modalOpen = true;
  state.modalKind = "portrait-result";
  renderOverlay();
}

function openPortraitFromExternal(mode, value) {
  const contextPage = state.currentPage.includes("payment") ? "payment-query" : "login-query";
  openPortraitInNewWindow(mode, value, contextPage);
}

function resetPortraitQuery() {
  state.portraitRelationMap = null;
  closeModal();
}

function resetPortraitState() {
  state.portraitKeyword = "";
  state.portraitView = "search";
  state.portraitResult = null;
  state.portraitTrail = [];
  state.portraitLogPage = 1;
  state.portraitLogTab = "user";
  state.portraitRelationMap = null;
}

function currentPortraitConfigPage() {
  if (state.currentPage === "payment-query" || state.currentPage === "login-query" || state.currentPage === "multi-query") {
    return state.currentPage;
  }
  return state.portraitContextPage || "multi-query";
}

function buildPortraitTrailItemByMode(mode, value) {
  if (mode === "device") return { type: "设备", label: "设备", value };
  if (mode === "ip") return { type: "IP", label: "IP", value };
  return { type: "账号", label: "账号", value };
}

function buildPortraitTrailItem(rawId) {
  const [type, value] = rawId.split("-");
  if (type === "device") return { type: "设备", label: "设备", value };
  if (type === "ip") return { type: "IP", label: "IP", value };
  return { type: "账号", label: "账号", value };
}

function buildPortraitQueryUrl(mode, value, contextPage = currentPortraitConfigPage()) {
  const token = `portrait-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  localStorage.setItem(`portraitWindow:${token}`, JSON.stringify({ page: contextPage, mode, value }));
  const url = new URL(window.location.href);
  url.searchParams.set("portraitToken", token);
  return url.toString();
}

function openPortraitInNewWindow(mode, value, contextPage = currentPortraitConfigPage()) {
  const nextWindow = window.open(buildPortraitQueryUrl(mode, value, contextPage), "_blank");
  if (nextWindow) nextWindow.focus();
}

function renderPortraitJumpLabel(mode, value, secondary = "") {
  return `
    <div class="portrait-query-jump">
      <span>${escapeHtml(value)}</span>
      <button class="portrait-query-icon" type="button" data-copy-text="${escapeHtml(value)}" aria-label="复制${mode === "device" ? "设备" : mode === "ip" ? "IP" : "账号"}">⧉</button>
    </div>
    ${secondary ? `<div class="portrait-table-sub">${escapeHtml(secondary)}</div>` : ""}
  `;
}

function getPortraitHeaderLabel() {
  const current = state.portraitResult;
  if (!current) return "";
  return `${current.headerPrefix}${current.headerValue}`;
}

function initializePortraitWindowFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("portraitToken");
  if (!token) return;
  const cacheKey = `portraitWindow:${token}`;
  const raw = localStorage.getItem(cacheKey);
  if (!raw) return;
  try {
    const payload = JSON.parse(raw);
    const sourcePage = payload.page === "payment-query" ? "payment-query" : "login-query";
    state.currentPage = "multi-query";
    state.portraitContextPage = sourcePage;
    state.portraitMode = payload.mode;
    state.portraitKeyword = payload.value;
    const root = buildPortraitTrailItemByMode(payload.mode, payload.value);
    state.portraitTrail = [root];
    state.portraitResult = createPortraitProfile(sourcePage, root);
    state.portraitView = "result";
    state.portraitLogPage = 1;
    state.portraitLogTab = state.portraitResult.defaultLogTab || "user";
    state.modalOpen = true;
    state.modalKind = "portrait-result";
    localStorage.removeItem(cacheKey);
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.delete("portraitToken");
    window.history.replaceState({}, "", nextUrl.toString());
  } catch (error) {
    localStorage.removeItem(cacheKey);
  }
}

function appendPortraitDrill(mode, value) {
  const target = buildPortraitTrailItemByMode(mode, value);
  const last = state.portraitTrail[state.portraitTrail.length - 1];
  if (!last || last.type !== target.type || last.value !== target.value) {
    state.portraitTrail.push(target);
  }
  state.portraitResult = createPortraitProfile(currentPortraitConfigPage(), target);
  state.portraitView = "result";
  state.portraitLogPage = 1;
  state.portraitLogTab = state.portraitResult.defaultLogTab || "user";
  state.portraitLogQuickFilter = "all";
  if (state.modalKind === "portrait-result") {
    renderOverlay();
    return;
  }
  renderPage();
}

function openCreateModal(scene) {
  state.modalOpen = true;
  state.modalKind = "config";
  state.mode = "create";
  state.sourceId = null;
  state.statsStrategyId = null;
  state.form = createStrategyDraft(scene);
  ensureActiveRule(state.form);
  state.formSnapshot = snapshotStrategy(state.form);
  renderOverlay();
}

function openStrategy(id, mode) {
  const strategy = strategyStore.find((item) => item.id === id);
  if (!strategy) return;
  state.modalOpen = true;
  state.modalKind = "config";
  state.mode = mode;
  state.sourceId = id;
  state.statsStrategyId = null;
  state.form = deepClone(strategy);
  state.form.readOnly = mode === "view";
  ensureActiveRule(state.form);
  state.formSnapshot = snapshotStrategy(state.form);
  renderOverlay();
}

function openStatsModal(id) {
  state.modalOpen = true;
  state.modalKind = "stats";
  state.statsStrategyId = id;
  state.sourceId = id;
  const strategy = strategyStore.find((item) => item.id === id);
  state.statsCompareVersion = strategy?.stats?.compareOptions?.[0]?.key || "";
  renderOverlay();
}

function openLogDetailModal(id) {
  state.modalOpen = true;
  state.modalKind = "log-detail";
  state.logDetailId = id;
  state.logDetailPage ||= state.currentPage === "payment-log" ? "payment-log" : "login-log";
  renderOverlay();
}

function openTagCreateModal(type) {
  state.modalOpen = true;
  state.modalKind = "tag-create";
  state.activeTagSection = type;
  state.tagForm = {
    name: "",
    type,
    description: "",
    mode: "upload",
    fileName: "",
    manualContent: ""
  };
  renderOverlay();
}

function openBehaviorRuleModal(cardId, mode = "view") {
  const card = findTagCard(cardId);
  if (!card) return;
  state.modalOpen = true;
  state.modalKind = "behavior-rule";
  state.activeTagCardId = cardId;
  state.behaviorRuleModalMode = mode;
  state.behaviorRuleEnabledDraft = !!card.enabled;
  state.behaviorRuleDraft = mode === "config" && isManagedBehaviorRule(card)
    ? cloneBehaviorRuleSpec(getManagedBehaviorRuleSpec(card))
    : null;
  renderOverlay();
}

function openTagUserList(cardId) {
  const card = findTagCard(cardId);
  state.activeBehaviorLevelId = card?.type === "IP" && card?.levels?.length ? "__all__" : card?.levels?.[0]?.id || null;
  state.modalOpen = true;
  state.modalKind = "tag-users";
  state.activeTagCardId = cardId;
  state.tagListQuery = "";
  state.tagListPage = 1;
  renderOverlay();
}

function closeModal() {
  const closingPortraitResult = state.modalKind === "portrait-result";
  const shouldRefreshRiskWorkbench =
    state.userRiskRefreshAfterBehaviorRuleModal &&
    (state.currentPage === "user-risk-engine" ||
      state.currentPage === "user-risk-engine-b" ||
      state.currentPage === "payment-risk-engine" ||
      state.currentPage === "payment-risk-engine-b");
  hideLogHeaderTooltip();
  state.modalOpen = false;
  state.modalKind = "";
  state.overviewPicker = null;
  state.form = null;
  state.formSnapshot = "";
  state.sourceId = null;
  state.statsStrategyId = null;
  state.logDetailId = null;
  state.tagForm = null;
  state.activeTagCardId = null;
  state.activeBehaviorLevelId = null;
  state.behaviorRuleModalMode = "view";
  state.behaviorRuleDraft = null;
  state.behaviorRuleEnabledDraft = false;
  state.behaviorTagDate = getTodayDateValue();
  state.behaviorLevelForm = null;
  state.tagListQuery = "";
  state.userRiskRefreshAfterBehaviorRuleModal = false;
  state.userRiskWorkbenchCBehaviorModalDraft = null;
  state.userRiskWorkbenchCBehaviorModalSearch = "";
  state.paymentRiskWorkbenchCBehaviorModalDraft = null;
  state.paymentRiskWorkbenchCBehaviorModalSearch = "";
  state.blockRuleModalDraft = null;
  state.blockRuleModalNextBlockSnapshot = null;
  state.blockRuleModalMode = "edit";
  state.activeBlockRuleId = "";
  state.blockRuleInsertAfterId = "";
  state.blockRuleModalSourcePage = "";
  state.conditionPicker = null;
  state.conditionSubtagForm = null;
  state.portraitLogQuickFilter = "all";
  state.statsCompareVersion = "";
  drawerRoot.innerHTML = "";
  document.body.style.overflow = "";
  if (closingPortraitResult) {
    state.portraitView = "search";
    state.portraitResult = null;
    state.portraitTrail = [];
    state.portraitLogPage = 1;
  }
  if (shouldRefreshRiskWorkbench) {
    renderApp();
  }
}

function renderOverviewChannelPicker() {
  const picker = state.overviewPicker;
  if (!picker) return;
  const visibleChannels = getOverviewVisibleChannels();
  const selectedIds = new Set(picker.selectedChannelIds || []);
  const selectedChannels = overviewChannelItems.filter((item) => selectedIds.has(item.id));
  drawerRoot.innerHTML = `
    <div class="drawer-overlay overview-picker-overlay">
      <div class="overview-channel-modal">
        <div class="overview-channel-modal-head">筛选渠道</div>
        <div class="overview-channel-modal-body">
          <aside class="overview-channel-sidebar">
            ${overviewChannelCategories
              .map(
                (item) => `
                  <button class="overview-channel-sidebar-item ${picker.category === item ? "active" : ""}" type="button" data-overview-channel-category="${item}">
                    <span>${item}</span>
                    ${item === "官方渠道" || item === "联运渠道" ? '<span>›</span>' : ""}
                  </button>
                `
              )
              .join("")}
          </aside>
          <section class="overview-channel-main">
            <div class="overview-channel-main-head">
              <div class="overview-channel-terminal-tabs">
                ${overviewChannelTerminals
                  .map(
                    (item) => `
                      <button class="overview-channel-terminal-tab ${picker.terminal === item ? "active" : ""}" type="button" data-overview-channel-terminal="${item}">${item}</button>
                    `
                  )
                  .join("")}
              </div>
              <label class="overview-channel-search">
                <span>⌕</span>
                <input type="text" value="${picker.search || ""}" placeholder="搜索渠道名称 / ID" id="overview-channel-search-input" />
              </label>
            </div>
            <div class="overview-channel-list">
              <label class="overview-channel-item overview-channel-item-all">
                <div class="overview-channel-item-check">
                  <input type="checkbox" ${visibleChannels.length > 0 && visibleChannels.every((item) => selectedIds.has(item.id)) ? "checked" : ""} data-overview-channel-toggle-all />
                </div>
                <div class="overview-channel-item-meta">
                  <div class="overview-channel-item-title">全选</div>
                </div>
              </label>
              ${visibleChannels
                .map(
                  (item) => `
                    <label class="overview-channel-item">
                      <div class="overview-channel-item-check">
                        <input type="checkbox" ${selectedIds.has(item.id) ? "checked" : ""} data-overview-channel-id="${item.id}" />
                      </div>
                      <div class="overview-channel-item-meta">
                        <div class="overview-channel-item-title">${item.name}<span>${item.id}</span></div>
                        <div class="overview-channel-item-desc">ID: 1000301、1000302、100030...</div>
                      </div>
                    </label>
                  `
                )
                .join("")}
            </div>
          </section>
          <aside class="overview-channel-selection">
            <div class="overview-channel-selection-head">
              <span>已选${selectedChannels.length}个</span>
              <button class="overview-channel-clear" type="button" id="overview-channel-clear">清空</button>
            </div>
            <div class="overview-channel-selection-list">
              ${selectedChannels
                .map(
                  (item) => `
                    <div class="overview-channel-selection-item">
                      <span>${item.name}</span>
                      <span>${item.id}</span>
                      <button type="button" data-overview-channel-remove="${item.id}">🗑</button>
                    </div>
                  `
                )
                .join("")}
            </div>
          </aside>
        </div>
        <div class="overview-channel-modal-foot">
          <div class="overview-channel-footnote">当前显示平台统一的渠道ID，项目渠道ID可查看 <span>渠道映射表</span></div>
          <div class="overview-channel-actions">
            <button class="filter-btn primary-btn" type="button" id="overview-channel-confirm">确认</button>
            <button class="filter-btn secondary-btn" type="button" id="overview-channel-cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  `;
  const overlay = drawerRoot.querySelector(".overview-picker-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelectorAll("[data-overview-channel-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.overviewPicker = { ...state.overviewPicker, category: button.dataset.overviewChannelCategory };
      renderOverlay();
    });
  });
  drawerRoot.querySelectorAll("[data-overview-channel-terminal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.overviewPicker = { ...state.overviewPicker, terminal: button.dataset.overviewChannelTerminal };
      renderOverlay();
    });
  });
  drawerRoot.querySelector("#overview-channel-search-input")?.addEventListener("input", (event) => {
    state.overviewPicker = { ...state.overviewPicker, search: event.target.value };
    renderOverlay();
  });
  drawerRoot.querySelectorAll("[data-overview-channel-id]").forEach((input) => {
    input.addEventListener("change", () => toggleOverviewChannelSelection(input.dataset.overviewChannelId));
  });
  drawerRoot.querySelector("[data-overview-channel-toggle-all]")?.addEventListener("change", (event) => {
    state.overviewPicker = {
      ...state.overviewPicker,
      selectedChannelIds: event.target.checked ? visibleChannels.map((item) => item.id) : []
    };
    renderOverlay();
  });
  drawerRoot.querySelectorAll("[data-overview-channel-remove]").forEach((button) => {
    button.addEventListener("click", () => toggleOverviewChannelSelection(button.dataset.overviewChannelRemove));
  });
  drawerRoot.querySelector("#overview-channel-clear")?.addEventListener("click", () => {
    state.overviewPicker = { ...state.overviewPicker, selectedChannelIds: [] };
    renderOverlay();
  });
  drawerRoot.querySelector("#overview-channel-cancel")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#overview-channel-confirm")?.addEventListener("click", applyOverviewPicker);
}

function renderOverviewTimePicker() {
  const picker = state.overviewPicker;
  if (!picker) return;
  const startLabel = `2026-04-${String(Math.min(Math.max(picker.startDay, 1), 30)).padStart(2, "0")}`;
  const endLabel = `2026-04-${String(Math.min(Math.max(picker.endDay, 1), 30)).padStart(2, "0")}`;
  drawerRoot.innerHTML = `
    <div class="drawer-overlay overview-picker-overlay overview-time-overlay">
      <div class="overview-time-modal">
        <div class="overview-time-range-inputs">
          <button class="overview-time-range-input ${picker.selectingEdge === "start" ? "active" : ""}" type="button" data-overview-time-edge="start">${startLabel}</button>
          <span>~</span>
          <button class="overview-time-range-input ${picker.selectingEdge === "end" ? "active" : ""}" type="button" data-overview-time-edge="end">${endLabel}</button>
          <span class="overview-time-range-icon">🗓</span>
        </div>
        <div class="overview-time-modal-body">
          <div class="overview-time-calendar">
            <div class="overview-time-calendar-head">
              <button type="button">«</button>
              <button type="button">‹</button>
              <strong>2026 年 4 月</strong>
              <button type="button">›</button>
              <button type="button">»</button>
            </div>
            <div class="overview-time-calendar-weekdays">
              <span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span>
            </div>
            <div class="overview-time-calendar-grid">
              ${overviewCalendarMeta
                .map((item) => {
                  const minSelected = Math.min(picker.startDay, picker.endDay);
                  const maxSelected = Math.max(picker.startDay, picker.endDay);
                  const isSelected = item.monthOffset === 0 && item.day >= minSelected && item.day <= maxSelected;
                  return `
                    <button class="overview-time-day ${item.monthOffset !== 0 ? "muted" : ""}${isSelected ? " selected" : ""}" type="button" data-overview-time-day="${item.monthOffset === 0 ? item.day : ""}" ${item.monthOffset !== 0 ? "disabled" : ""}>
                      ${item.day}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </div>
          <div class="overview-time-clock">
            <div class="overview-time-scroll-col">
              ${overviewTimeHours.map((item) => `<button class="${picker.startHour === item ? "active" : ""}" type="button" data-overview-time-hour-start="${item}">${item}</button>`).join("")}
            </div>
            <div class="overview-time-scroll-col">
              ${overviewTimeMinutes.filter((_, index) => index < 12).map((item) => `<button class="${picker.startMinute === item ? "active" : ""}" type="button" data-overview-time-minute-start="${item}">${item}</button>`).join("")}
            </div>
            <div class="overview-time-scroll-col">
              ${overviewTimeHours.map((item) => `<button class="${picker.endHour === item ? "active" : ""}" type="button" data-overview-time-hour-end="${item}">${item}</button>`).join("")}
            </div>
            <div class="overview-time-scroll-col">
              ${overviewTimeMinutes.filter((_, index) => index < 12).map((item) => `<button class="${picker.endMinute === item ? "active" : ""}" type="button" data-overview-time-minute-end="${item}">${item}</button>`).join("")}
            </div>
          </div>
        </div>
        <div class="overview-time-modal-foot">
          <div class="overview-time-presets">
            ${["近7天", "近15天", "近30天", "自定义"]
              .map((item) => `<button class="${picker.timePreset === item ? "active" : ""}" type="button" data-overview-time-preset="${item}">${item}</button>`)
              .join("")}
          </div>
          <div class="overview-time-actions">
            <button class="filter-btn primary-btn" type="button" id="overview-time-confirm">确认</button>
            <button class="filter-btn secondary-btn" type="button" id="overview-time-cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  `;
  const overlay = drawerRoot.querySelector(".overview-picker-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelectorAll("[data-overview-time-edge]").forEach((button) => {
    button.addEventListener("click", () => {
      state.overviewPicker = { ...state.overviewPicker, selectingEdge: button.dataset.overviewTimeEdge };
      renderOverlay();
    });
  });
  drawerRoot.querySelectorAll("[data-overview-time-day]").forEach((button) => {
    button.addEventListener("click", () => {
      const day = Number(button.dataset.overviewTimeDay);
      if (!day) return;
      state.overviewPicker = state.overviewPicker.selectingEdge === "start"
        ? { ...state.overviewPicker, startDay: day, timePreset: "自定义", selectingEdge: "end" }
        : { ...state.overviewPicker, endDay: day, timePreset: "自定义" };
      renderOverlay();
    });
  });
  drawerRoot.querySelectorAll("[data-overview-time-hour-start],[data-overview-time-minute-start],[data-overview-time-hour-end],[data-overview-time-minute-end],[data-overview-time-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextState = { ...state.overviewPicker };
      if (button.dataset.overviewTimeHourStart) nextState.startHour = button.dataset.overviewTimeHourStart;
      if (button.dataset.overviewTimeMinuteStart) nextState.startMinute = button.dataset.overviewTimeMinuteStart;
      if (button.dataset.overviewTimeHourEnd) nextState.endHour = button.dataset.overviewTimeHourEnd;
      if (button.dataset.overviewTimeMinuteEnd) nextState.endMinute = button.dataset.overviewTimeMinuteEnd;
      if (button.dataset.overviewTimePreset) {
        nextState.timePreset = button.dataset.overviewTimePreset;
        if (nextState.timePreset === "近7天") {
          nextState.startDay = 22;
          nextState.endDay = 28;
        }
        if (nextState.timePreset === "近15天") {
          nextState.startDay = 14;
          nextState.endDay = 28;
        }
        if (nextState.timePreset === "近30天") {
          nextState.startDay = 1;
          nextState.endDay = 28;
        }
      }
      state.overviewPicker = nextState;
      renderOverlay();
    });
  });
  drawerRoot.querySelector("#overview-time-cancel")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#overview-time-confirm")?.addEventListener("click", applyOverviewPicker);
}

function renderOverlay() {
  if (!state.modalOpen) {
    drawerRoot.innerHTML = "";
    document.body.style.overflow = "";
    return;
  }
  document.body.style.overflow = "hidden";

  if (state.modalKind === "config") {
    renderStrategyModal();
    return;
  }
  if (state.modalKind === "stats") {
    renderStatsModal();
    return;
  }
  if (state.modalKind === "log-detail") {
    renderLogDetailModal();
    return;
  }
  if (state.modalKind === "portrait-result") {
    renderPortraitResultModal();
    return;
  }
  if (state.modalKind === "overview-channel-picker") {
    renderOverviewChannelPicker();
    return;
  }
  if (state.modalKind === "overview-time-picker") {
    renderOverviewTimePicker();
    return;
  }
  if (state.modalKind === "behavior-rule") {
    renderBehaviorRuleModal();
    return;
  }
  if (state.modalKind === "user-risk-c-behavior-config") {
    renderUserRiskCBehaviorConfigModal();
    return;
  }
  if (state.modalKind === "payment-risk-c-behavior-config") {
    renderPaymentRiskCBehaviorConfigModal();
    return;
  }
  if (state.modalKind === "block-rule") {
    renderBlockRuleModal();
    return;
  }
  if (state.modalKind === "tag-create") {
    renderTagCreateModal();
    return;
  }
  if (state.modalKind === "tag-users") {
    renderTagUserListModal();
  }
}
function renderStrategyModal() {
  const form = state.form;
  if (form.scene === "支付下单") {
    form.rules.forEach((rule) => {
      if (rule.action.type === "登录拦截") rule.action.type = "补款提醒";
    });
  }
  const activeRule = getActiveRule();
  const readOnly = form.readOnly;
  const validationIssues = readOnly ? [] : validateStrategyForm(form);
  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <div class="drawer fullscreen config-drawer ${readOnly ? "readonly" : ""}">
        <div class="drawer-head">
          <h2 class="drawer-title">${state.mode === "create" ? "新增风控策略" : state.mode === "edit" ? "编辑风控策略" : "查看风控策略"}</h2>
          <button class="close-btn" type="button">×</button>
        </div>

        <div class="modal-grid">
          <div class="field full">
            <label>策略场景</label>
            <input value="${escapeHtml(form.scene)}" disabled />
          </div>
          <div class="field full">
            <label>策略名称</label>
            <input id="strategy-name" value="${escapeHtml(form.name)}" ${readOnly ? "disabled" : ""} />
          </div>
          <div class="field full">
            <label>策略描述</label>
            <textarea id="strategy-desc" ${readOnly ? "disabled" : ""}>${escapeHtml(form.description)}</textarea>
          </div>
        </div>

        ${
          validationIssues.length
            ? `
              <div class="form-warning-bar">
                <span class="form-warning-title">待完善项 ${validationIssues.length} 条</span>
                <span class="form-warning-text">${escapeHtml(validationIssues[0])}</span>
              </div>
            `
            : ""
        }

        <div class="tabs-bar">
          <div class="tabs">
            ${form.rules
              .map(
                (rule) => `
                  <button class="tab-btn ${form.activeRuleId === rule.id ? "active" : ""}" type="button" data-rule-tab="${rule.id}">
                    ${escapeHtml(rule.name)}
                  </button>
                `
              )
              .join("")}
          </div>
          ${readOnly ? "" : `<button class="light-btn" type="button" id="add-rule-btn">＋ 添加风控规则</button>`}
        </div>

        <div class="rule-panel">
          <div class="rule-panel-top">
            <div class="rule-tip">每条规则由判断条件 + 处置动作组成；多条规则将按配置顺序依次进行判断</div>
            ${readOnly ? "" : `
              <div class="rule-panel-actions">
                <button class="light-btn rule-mini-btn" type="button" id="clone-rule-btn">＋ 复制规则</button>
                <button class="light-btn rule-mini-btn" type="button" id="delete-rule-btn" ${form.rules.length === 1 ? "disabled" : ""}>＋ 删除规则</button>
              </div>
            `}
          </div>
          <div class="rule-meta">
            <div class="field">
              <label>规则名称</label>
              <input class="rule-name-input" id="rule-name-input" value="${escapeHtml(activeRule.name)}" ${readOnly ? "disabled" : ""} />
            </div>
          </div>

          <div class="section-label">判断条件</div>
          <div id="condition-editor" class="condition-editor"></div>

          <div class="section-label">处置动作</div>
          <div class="action-tabs">
            ${["封禁", sceneActionMap[form.scene], form.scene === "支付下单" ? "补款提醒" : "", "验证码验证", "滑块验证", "标记风险", "直接放行"]
              .filter((value, index, array) => array.indexOf(value) === index)
              .map(
                (action) => `
                  <button class="action-tab ${activeRule.action.type === action ? "active" : ""}" type="button" data-action="${action}" ${readOnly ? "disabled" : ""}>
                    ${action}
                  </button>
                `
              )
              .join("")}
          </div>
          <div class="section-label"></div>
          <div id="action-fields" class="action-fields"></div>

          <div class="rule-footer-meta">
            <div class="field rule-switch-field">
              <label>规则开关</label>
              <button class="switch ${activeRule.enabled ? "on" : ""}" id="rule-switch" type="button" ${readOnly ? "disabled" : ""}></button>
            </div>
          </div>
        </div>

        <div class="drawer-footer">
          <button class="secondary-btn" id="cancel-btn" type="button">${readOnly ? "关闭" : "取消"}</button>
          ${readOnly ? "" : `<button class="dark-btn" id="save-btn" type="button">保存策略</button>`}
        </div>
      </div>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) requestCloseModal();
  });
  drawerRoot.querySelector(".close-btn").addEventListener("click", requestCloseModal);
  drawerRoot.querySelector("#cancel-btn").addEventListener("click", requestCloseModal);

  if (!readOnly) {
    drawerRoot.querySelector("#strategy-name").addEventListener("input", (event) => {
      form.name = event.target.value;
    });
    drawerRoot.querySelector("#strategy-desc").addEventListener("input", (event) => {
      form.description = event.target.value;
    });
    drawerRoot.querySelector("#add-rule-btn")?.addEventListener("click", addRule);
    drawerRoot.querySelector("#clone-rule-btn")?.addEventListener("click", cloneActiveRule);
    drawerRoot.querySelector("#delete-rule-btn")?.addEventListener("click", deleteActiveRule);
    drawerRoot.querySelector("#rule-switch").addEventListener("click", toggleActiveRule);
    drawerRoot.querySelector("#rule-name-input").addEventListener("input", (event) => {
      activeRule.name = event.target.value;
      renderStrategyModal();
    });
    drawerRoot.querySelector("#save-btn")?.addEventListener("click", saveStrategy);
    drawerRoot.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", () => {
        activeRule.action.type = button.dataset.action;
        renderStrategyModal();
      });
    });
  }

  drawerRoot.querySelectorAll("[data-rule-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      form.activeRuleId = button.dataset.ruleTab;
      renderStrategyModal();
    });
  });

  renderConditionEditor();
  renderActionFields();
  renderConditionSubtagModal();
  renderBehaviorLevelForm();
}

function getActiveRule() {
  return state.form.rules.find((rule) => rule.id === state.form.activeRuleId) || state.form.rules[0];
}

function updateScene(scene) {
  const form = state.form;
  form.scene = scene;
  form.sectionTitle = sceneSectionMap[scene];
  form.rules.forEach((rule) => {
    if (!["封禁", "验证码验证", "滑块验证", "标记风险", "直接放行", "登录拦截", "补款提醒"].includes(rule.action.type)) {
      rule.action.type = sceneActionMap[scene];
    }
    if (scene === "支付下单" && rule.action.type === "登录拦截") {
      rule.action.type = "补款提醒";
    }
    rule.action.event = getSceneEventLabel(scene);
  });
  renderStrategyModal();
}

function addRule() {
  if (state.form.rules.length >= 5) return;
  const rule = createRule(`规则 ${state.form.rules.length + 1}`, state.form.scene, [createCondition()]);
  state.form.rules.push(rule);
  state.form.activeRuleId = rule.id;
  renderStrategyModal();
}

function cloneActiveRule() {
  if (state.form.rules.length >= 5) return;
  const cloned = deepClone(getActiveRule());
  cloned.id = uid();
  cloned.name = `规则 ${state.form.rules.length + 1}`;
  rewriteGroupIds(cloned.conditions);
  state.form.rules.push(cloned);
  state.form.activeRuleId = cloned.id;
  renderStrategyModal();
}

function deleteActiveRule() {
  if (state.form.rules.length === 1) return;
  const activeRule = getActiveRule();
  state.form.rules = state.form.rules.filter((rule) => rule.id !== activeRule.id);
  state.form.activeRuleId = state.form.rules[0]?.id || "";
  renderStrategyModal();
}

function rewriteGroupIds(group) {
  group.items.forEach((item) => {
    item.id = uid();
    if (item.children?.length) {
      rewriteGroupIds({ items: item.children });
    }
  });
}

function toggleActiveRule() {
  const activeRule = getActiveRule();
  activeRule.enabled = !activeRule.enabled;
  renderStrategyModal();
}

function renderConditionEditor() {
  const activeRule = getActiveRule();
  const container = drawerRoot.querySelector("#condition-editor");
  container.innerHTML = "";
  container.appendChild(
    buildGroupNode(activeRule.conditions, 0, (nextJoiner) => {
      activeRule.conditions.joiner = nextJoiner;
    })
  );
}

function renderConditionSubtagModal() {
  const form = state.conditionSubtagForm;
  if (!form) return;

  const holder = document.createElement("div");
  holder.className = "condition-subtag-overlay";
  holder.innerHTML = `
    <div class="condition-subtag-modal">
      <div class="modal-card-head">
        <h2 class="modal-card-title">新增子标签</h2>
        <button class="close-btn" type="button">×</button>
      </div>
      <div class="modal-form">
        <div class="field">
          <label class="required">标签分类</label>
          <input value="${escapeHtml(form.category)}" disabled />
        </div>
        <div class="field">
          <label class="required">父标签</label>
          <input value="${escapeHtml(form.parent)}" disabled />
        </div>
        <div class="field">
          <label class="required">规则</label>
          ${renderBehaviorDescriptionEditor(form)}
        </div>
        <div class="field">
          <label>规则表达式预览</label>
          <div class="subtag-preview" id="subtag-preview">${escapeHtml(buildSubtagLabel(form))}</div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="secondary-btn" type="button" id="subtag-cancel">取消</button>
        <button class="primary-btn" type="button" id="subtag-save">确定</button>
      </div>
    </div>
  `;
  drawerRoot.appendChild(holder);

  const syncPreview = () => {
    if (drawerRoot.querySelector("#behavior-layer-dimension")) form.dimension = drawerRoot.querySelector("#behavior-layer-dimension").value;
    if (drawerRoot.querySelector("#behavior-layer-template")) form.template = drawerRoot.querySelector("#behavior-layer-template").value;
    if (drawerRoot.querySelector("#behavior-layer-window")) form.window = drawerRoot.querySelector("#behavior-layer-window").value;
    if (drawerRoot.querySelector("#behavior-layer-unit")) form.unit = drawerRoot.querySelector("#behavior-layer-unit").value;
    if (drawerRoot.querySelector("#behavior-layer-threshold")) form.threshold = drawerRoot.querySelector("#behavior-layer-threshold").value;
    if (drawerRoot.querySelector("#behavior-layer-expression")) form.expression = drawerRoot.querySelector("#behavior-layer-expression").value;
    drawerRoot.querySelector("#subtag-preview").textContent = buildSubtagLabel(form);
  };

  holder.addEventListener("click", (event) => {
    if (event.target === holder) state.conditionSubtagForm = null, renderStrategyModal();
  });
  holder.querySelector(".close-btn").addEventListener("click", () => {
    state.conditionSubtagForm = null;
    renderStrategyModal();
  });
  holder.querySelector("#subtag-cancel").addEventListener("click", () => {
    state.conditionSubtagForm = null;
    renderStrategyModal();
  });
  holder.querySelector("#behavior-layer-dimension")?.addEventListener("change", syncPreview);
  holder.querySelector("#behavior-layer-template")?.addEventListener("change", syncPreview);
  holder.querySelector("#behavior-layer-window")?.addEventListener("input", syncPreview);
  holder.querySelector("#behavior-layer-window")?.addEventListener("change", syncPreview);
  holder.querySelector("#behavior-layer-unit")?.addEventListener("change", syncPreview);
  holder.querySelector("#behavior-layer-threshold")?.addEventListener("input", syncPreview);
  holder.querySelector("#behavior-layer-expression")?.addEventListener("input", syncPreview);
  holder.querySelector("#subtag-save").addEventListener("click", saveConditionSubtag);
}

function buildGroupNode(group, depth, onToggle) {
  const wrap = document.createElement("div");
  const showJoiner = group.items.length > 1;
  wrap.className = `condition-group ${showJoiner ? "has-joiner" : "single-item"}`;

  if (showJoiner) {
    const topRow = document.createElement("div");
    topRow.className = "condition-group-top";
    const joiner = document.createElement("button");
    joiner.type = "button";
    joiner.className = "group-joiner";
    joiner.innerHTML = `
      <span class="joiner-option ${group.joiner === "且" ? "active" : ""}">且</span>
      <span class="joiner-option ${group.joiner === "或" ? "active" : ""}">或</span>
    `;
    if (state.form.readOnly) {
      joiner.disabled = true;
    } else {
      joiner.addEventListener("click", () => {
        const nextJoiner = group.joiner === "且" ? "或" : "且";
        if (onToggle) onToggle(nextJoiner);
        renderStrategyModal();
      });
    }
    topRow.appendChild(joiner);
    wrap.appendChild(topRow);
  }

  const list = document.createElement("div");
  list.className = "condition-group-list";
  group.items.forEach((condition, index) => {
    list.appendChild(buildConditionNode(group, condition, index, depth));
  });
  wrap.appendChild(list);
  return wrap;
}

function buildConditionNode(group, condition, index, depth) {
  if (condition.isGroupCarrier) {
    const carrier = document.createElement("div");
    carrier.className = "condition-carrier";
    const childGroup = buildGroupNode(
      { joiner: condition.childJoiner || "且", items: condition.children || [] },
      depth + 1,
      (nextJoiner) => {
        condition.childJoiner = nextJoiner;
      }
    );
    carrier.appendChild(childGroup);
    return carrier;
  }

  const template = document.querySelector("#condition-row-template");
  const node = template.content.firstElementChild.cloneNode(true);
  const row = node.querySelector(".condition-row");
  if (depth > 0) row.classList.add("nested-row");
  const typeWrap = node.querySelector(".condition-type-wrap");
  const oldSelect = node.querySelector(".condition-type");
  oldSelect.remove();
  typeWrap.innerHTML = "";

  const fieldsWrap = node.querySelector(".condition-fields");
  fieldsWrap.innerHTML = "";
  fieldsWrap.style.gridColumn = "2";
  node.querySelector(".condition-separator")?.remove();
  node.querySelector(".condition-tools").style.gridColumn = "3";

  condition.operator = normalizeConditionOperator(condition.operator);
  if (condition.operator !== "不是") {
    condition.operator = "是";
  }

  const copyButton = node.querySelector(".copy");
  const deleteButton = node.querySelector(".delete");
  const nestedButtonLabel = node.querySelector(".nested");
  const appendButton = node.querySelector(".append");

  copyButton.innerHTML = `<span class="tool-btn-icon">⧉</span><span>复制</span>`;
  deleteButton.innerHTML = `<span class="tool-btn-icon">✕</span><span>删除</span>`;
  nestedButtonLabel.innerHTML = `<span class="tool-btn-icon">⊞</span><span>添加嵌套规则</span>`;
  appendButton.innerHTML = `<span class="tool-btn-icon">＋</span><span>添加规则</span>`;

  copyButton.setAttribute("data-tooltip", "快速复制创建相同规则到同一层级");
  deleteButton.setAttribute("data-tooltip", "删除该规则");
  nestedButtonLabel.setAttribute("data-tooltip", "新增一条规则，与当前规则组成嵌套规则，该组嵌套规则独立配置“与/或”关系");
  appendButton.setAttribute("data-tooltip", "新增一条规则，与当前规则处于同一层级，独立生效");

  const openPicker = (preferredType = condition.type) => {
    if (state.form.readOnly) return;
    const category = preferredType || condition.type || "行为";
    state.conditionPicker = {
      conditionId: condition.id,
      ...createPickerStateByCategory(
        category,
        condition.selected && condition.type === category ? condition.label : ""
      )
    };
    renderStrategyModal();
  };

  const objectSelect = document.createElement("select");
  objectSelect.className = "chip-select condition-object-select";
  [
    { value: "", label: "请选择判断对象" },
    ...conditionTypeOptions.map((item) => ({ value: item, label: item }))
  ].forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    option.selected = item.value === (condition.type || "");
    objectSelect.appendChild(option);
  });
  objectSelect.disabled = state.form.readOnly;
  objectSelect.addEventListener("change", (event) => {
    const nextType = event.target.value;
    const typeChanged = condition.type !== nextType;
    condition.type = nextType;
    condition.operator = nextType ? (condition.operator === "不是" ? "不是" : "是") : "是";
    if (typeChanged) {
      condition.label = "";
      condition.selected = false;
    }
    renderStrategyModal();
  });
  typeWrap.appendChild(objectSelect);

  const operatorSelect = document.createElement("select");
  operatorSelect.className = "chip-select condition-operator-select";
  ["是", "不是"].forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    option.selected = item === normalizeConditionOperator(condition.operator || "是");
    operatorSelect.appendChild(option);
  });
  operatorSelect.disabled = state.form.readOnly;
  operatorSelect.addEventListener("change", (event) => {
    condition.operator = event.target.value;
  });
  fieldsWrap.appendChild(operatorSelect);

  const labelWrap = document.createElement("div");
  labelWrap.className = "condition-label-wrap";

  const labelButton = document.createElement("button");
  labelButton.type = "button";
  labelButton.className = `condition-label-trigger ${condition.selected ? "selected" : "pending"}`;
  const emptyLabelText = condition.type === "行为" && isPaymentRiskEnginePage() ? "请选择风险行为" : "请选择标签";
  labelButton.innerHTML = `<span>${condition.label || emptyLabelText}</span><span class="picker-caret">⌄</span>`;
  labelButton.disabled = state.form.readOnly || !condition.type;
  labelButton.addEventListener("click", () => openPicker(condition.type));
  labelWrap.appendChild(labelButton);
  fieldsWrap.appendChild(labelWrap);

  row.classList.add(condition.selected ? "condition-selected" : "condition-pending");

  if (state.form.readOnly) {
    node.querySelector(".condition-tools").remove();
  } else {
    node.querySelector(".copy").addEventListener("click", () => {
      const copied = deepClone(condition);
      rewriteConditionIds(copied);
      group.items.splice(index + 1, 0, copied);
      renderStrategyModal();
    });
    node.querySelector(".delete").addEventListener("click", () => {
      if (group.items.length === 1 && depth === 0) return;
      group.items.splice(index, 1);
      renderStrategyModal();
    });
    node.querySelector(".append").addEventListener("click", () => {
      group.items.splice(index + 1, 0, createCondition());
      renderStrategyModal();
    });
    const nestedButton = node.querySelector(".nested");
    if (group.items.length <= 1) {
      nestedButton.remove();
    } else {
      nestedButton.addEventListener("click", () => {
        const preserved = deepClone(condition);
        rewriteConditionIds(preserved);
        const newCondition = createCondition();
        condition.isGroupCarrier = true;
        condition.type = "";
        condition.operator = "是";
        condition.label = "";
        condition.selected = false;
        condition.children = [preserved, newCondition];
        condition.childJoiner = "且";
        renderStrategyModal();
      });
    }
  }

  const childGroup = node.querySelector(".child-group");
  if (state.conditionPicker?.conditionId === condition.id && !state.form.readOnly) {
    labelWrap.appendChild(buildConditionPickerPanel(condition));
  }
  if (condition.children?.length) {
    childGroup.appendChild(
      buildGroupNode(
        { joiner: condition.childJoiner || "且", items: condition.children },
        depth + 1,
        (nextJoiner) => {
          condition.childJoiner = nextJoiner;
        }
      )
    );
  }
  return node;
}

function rewriteConditionIds(condition) {
  condition.id = uid();
  if (condition.children?.length) {
    condition.children.forEach((child) => rewriteConditionIds(child));
  }
}

function buildConditionPickerPanel(condition) {
  const picker = state.conditionPicker;
  const category = picker?.category || condition.type || "行为";
  return buildTagPickerPanel({
    category,
    selectedLabel: condition.label,
    includeCategoryMenu: false,
    allowQuickAdd: true,
    onParentSearch: (value) => {
      state.conditionPicker = { ...state.conditionPicker, conditionId: condition.id, parentQuery: value };
      renderStrategyModal();
    },
    onChildSearch: (value) => {
      state.conditionPicker = { ...state.conditionPicker, conditionId: condition.id, childQuery: value };
      renderStrategyModal();
    },
    onParentSelect: (parentName) => {
      const parentItem = getConditionPickerItems(category).find((item) => item.name === parentName);
      if (parentItem?.children?.length) {
        state.conditionPicker = { ...state.conditionPicker, conditionId: condition.id, parent: parentName, childQuery: "" };
        renderStrategyModal();
        return;
      }
      applyConditionSelection(condition, category, parentName);
    },
    onChildSelect: (label) => {
      applyConditionSelection(condition, category, label);
    },
    onQuickAdd: (parentName) => {
      if (category === "行为") {
        const sourceCard = getBehaviorSourceCards().find((card) => card.name === parentName);
        if (!sourceCard) return;
        state.behaviorLevelForm = {
          ...createBehaviorLevelForm(sourceCard),
          conditionId: condition.id
        };
        renderStrategyModal();
        return;
      }
      const preset = getSubtagPreset(category, parentName);
      state.conditionSubtagForm = {
        conditionId: condition.id,
        category,
        parent: parentName,
        dimension: preset.dimension || "",
        template: preset.template || getBehaviorLevelTemplateOptions(parentName)[0] || parentName || "",
        window: preset.window,
        unit: preset.unit,
        threshold: preset.threshold,
        metric: preset.metric,
        expression: ""
      };
      renderStrategyModal();
    }
  });
}

function applyConditionSelection(condition, type, label) {
  condition.type = type;
  condition.label = label;
  condition.operator = condition.operator === "不是" ? "不是" : "是";
  condition.selected = true;
  state.conditionPicker = null;
  renderStrategyModal();
}

function findPickerParent(type, label) {
  const parent = getConditionPickerItems(type).find((item) => item.name === label || item.children?.includes(label));
  return parent?.name || "";
}

function canQuickAddConditionSubtag(category, parent) {
  if (category !== "行为") return false;
  return getBehaviorSourceCards().some((card) => card.name === parent) && Boolean(getBehaviorRuleConfig(parent));
}

function buildSubtagLabel(form) {
  if (form.category === "行为") {
    return buildBehaviorLevelExpression(form);
  }
  return `${form.parent} 阈值 ≥ ${form.threshold}`;
}

function getSubtagPreset(category, parent) {
  if (category !== "行为") {
    return { window: "30", unit: "秒", threshold: "1", metric: "标签阈值" };
  }
  const config = getBehaviorRuleConfig(parent);
  return {
    dimension: config.defaultDimension || config.dimensions?.[0] || "",
    template: getBehaviorLevelTemplateOptions(parent)[0] || parent,
    window: config.defaultWindow || "30",
    unit: config.defaultUnit || config.unitOptions?.[0] || "分钟",
    threshold: config.defaultThreshold || "1",
    metric: config.metricLabel || "标签阈值",
    expression: ""
  };
}

function saveConditionSubtag() {
  const form = state.conditionSubtagForm;
  if (!form) return;
  if (form.category === "行为") {
    const config = getBehaviorRuleConfig(form.parent);
    if (config.mode === "window-threshold" && (!String(form.window).trim() || !String(form.threshold).trim())) {
      alert("请完善规则配置");
      return;
    }
    if (config.mode === "recently-unseen" && !String(form.window).trim()) {
      alert("请完善规则配置");
      return;
    }
    if (config.mode === "speed-threshold" && !String(form.threshold).trim()) {
      alert("请完善规则配置");
      return;
    }
  } else if (!String(form.threshold).trim()) {
    alert("请完善阈值配置");
    return;
  }

  const label = buildSubtagLabel(form);
  const isPaymentBehavior = form.category === "行为" && isPaymentRiskEnginePage();
  const parentItem = isPaymentBehavior
    ? null
    : (conditionPickerCatalog[form.category] || []).find((item) => item.name === form.parent);
  if (!isPaymentBehavior && !parentItem) return;
  if (parentItem) {
    parentItem.children ||= [];
    if (!parentItem.children.includes(label)) {
      parentItem.children.push(label);
    }
  }
  if (!conditionTagLibrary[form.category].includes(label)) {
    conditionTagLibrary[form.category].push(label);
  }
  if (isPaymentBehavior) {
    const paymentCard = paymentBehaviorCards.find((card) => card.name === form.parent);
    if (!paymentCard) return;
    if (!paymentCard.levels.some((level) => level.expression === label)) {
      paymentCard.levels.push(createBehaviorLevel(label, paymentCard.levels.length, paymentCard.name));
      refreshBehaviorTagCard(paymentCard);
    }
  }
  syncConditionTagSections();

  const activeRule = getActiveRule();
  const target = findConditionById(activeRule.conditions, form.conditionId);
  if (target) {
    target.type = form.category;
    target.operator = normalizeConditionOperator(target.operator || "是");
    target.label = label;
    target.selected = true;
  }

  state.conditionSubtagForm = null;
  state.conditionPicker = null;
  renderStrategyModal();
}

function findConditionById(group, conditionId) {
  for (const item of group.items) {
    if (item.id === conditionId) return item;
    if (item.children?.length) {
      const nested = findConditionById({ items: item.children }, conditionId);
      if (nested) return nested;
    }
  }
  return null;
}

function renderActionFields() {
  const activeRule = getActiveRule();
  const wrap = drawerRoot.querySelector("#action-fields");
  const action = activeRule.action;
  action.event = getSceneEventLabel(state.form.scene);
  const disabled = state.form.readOnly ? "disabled" : "";

  if (action.type === "直接放行") {
    wrap.innerHTML = `<span class="helper-text">直接放行无需配置额外表达式</span>`;
    return;
  }

  if (state.form.scene === "支付下单" && action.type === "补款提醒") {
    wrap.innerHTML = `<span class="helper-text">账号后续登录时，触发登录拦截并引导用户前往补款</span>`;
    return;
  }

  wrap.innerHTML = `
    <select class="chip-select" data-action-key="object" ${disabled}>${optionHtml(["登录设备", "登录账号", "网络IP"], action.object)}</select>
    <span class="action-token">在</span>
    <span class="chip-input static readonly-chip" title="该环节由顶部风控场景自动联动">${action.event}</span>
    <span class="action-token">时触发</span>
    <span class="chip-input">${action.type}</span>
    ${["验证码验证", "滑块验证", "标记风险"].includes(action.type)
      ? ""
      : `
      <span class="action-token">，持续</span>
      <input class="chip-input" data-action-key="duration" value="${escapeHtml(action.duration)}" ${disabled} />
      <select class="chip-select" data-action-key="unit" ${disabled}>${optionHtml(["秒", "分钟", "小时", "天"], action.unit)}</select>
    `}
  `;

  if (state.form.readOnly) return;
  wrap.querySelectorAll("[data-action-key]").forEach((element) => {
    element.addEventListener("input", (event) => {
      activeRule.action[event.target.dataset.actionKey] = event.target.value;
    });
    element.addEventListener("change", (event) => {
      activeRule.action[event.target.dataset.actionKey] = event.target.value;
    });
  });
}

function renderStatsModal() {
  const strategy = strategyStore.find((item) => item.id === state.statsStrategyId);
  if (!strategy) return;
  const stats = strategy.stats;
  const statsView = buildStatsPresentation(strategy);
  const versionCompare = buildStatsVersionCompare(strategy);

  drawerRoot.innerHTML = `
    <div class="drawer-overlay stats-modal-overlay">
      <div class="stats-modal">
        <div class="stats-modal-head">
          <div>
            <div class="stats-title-row">
              <h2 class="drawer-title">策略数据概览</h2>
              <span class="stats-badge">${escapeHtml(strategy.name)}</span>
            </div>
            <p class="stats-subtitle">多维度评估风控策略的命中与处置效果，辅助持续优化策略。</p>
          </div>
          <div class="stats-head-actions">
            <select class="stats-range-select"><option>${stats.range}</option></select>
            ${
              stats.compareOptions?.length
                ? `
                  <select class="stats-range-select" id="stats-compare-select">
                    ${stats.compareOptions
                      .map((item) => `<option value="${item.key}" ${item.key === state.statsCompareVersion ? "selected" : ""}>${item.label}</option>`)
                      .join("")}
                  </select>
                `
                : ""
            }
            <button class="close-btn" type="button">×</button>
          </div>
        </div>

        <div class="stats-summary-grid">
          ${statsView.summary
            .map(
              (item) => `
                <section class="stats-summary-card">
                  <div class="stats-summary-icon ${item.icon}"></div>
                  <div class="stats-summary-label">${item.label}</div>
                  <div class="stats-summary-value">${item.value}</div>
                  <div class="stats-summary-note">${item.note}</div>
                </section>
              `
            )
            .join("")}
        </div>
        ${
          versionCompare
            ? `
              <section class="stats-compare-card">
                <div class="stats-compare-head">
                  <div>
                    <div class="chart-card-title">版本对比</div>
                    <div class="stats-subtitle">当前版本 ${versionCompare.currentVersion} 对比 ${versionCompare.compareLabel}</div>
                  </div>
                  <span class="list-badge">${versionCompare.publishedAt}</span>
                </div>
                <div class="stats-compare-grid">
                  <div><span>规则变更</span><strong>${versionCompare.changedRules} 项</strong></div>
                  <div><span>触发变化</span><strong class="${versionCompare.triggerDiff >= 0 ? "accent-orange" : ""}">${versionCompare.triggerDiff >= 0 ? "+" : ""}${formatNumber(versionCompare.triggerDiff)}</strong></div>
                  <div><span>拦截变化</span><strong class="${versionCompare.blockedDiff >= 0 ? "accent-red" : ""}">${versionCompare.blockedDiff >= 0 ? "+" : ""}${formatNumber(versionCompare.blockedDiff)}</strong></div>
                </div>
                <div class="stats-compare-notes">
                  ${versionCompare.notes.map((item) => `<span class="portrait-conclusion-chip">${item}</span>`).join("")}
                </div>
              </section>
            `
            : ""
        }
        <div class="stats-chart-grid">
          <section class="chart-card">
            <div class="chart-card-title">策略触发情况趋势</div>
            <div class="legend-row">
              <span class="legend-item blue">业务请求</span>
              <span class="legend-item orange">策略触发</span>
            </div>
            ${renderLineChart(stats.dates, [stats.business, stats.triggered], ["#2664ff", "#f59e0b"], 60000)}
          </section>
          <section class="chart-card">
            <div class="chart-card-title">处置动作分布趋势</div>
            ${renderLineChart(
              stats.dates,
              statsView.actionSeries.map((item) => item.values),
              statsView.actionSeries.map((item) => item.color),
              1200
            )}
            <div class="legend-row bottom">
              ${statsView.actionSeries
                .map((item) => `<span class="legend-item ${legendClassByColor(item.color)}">${item.label}</span>`)
                .join("")}
            </div>
          </section>
        </div>

        <section class="stats-table-card">
          <div class="stats-table-head">
            <div class="chart-card-title">每日统计明细</div>
            <button class="light-btn" type="button">导出</button>
          </div>
          <table class="stats-table">
            <thead>
              <tr>
                <th>日期</th>
                <th>业务请求总数</th>
                <th>策略触发数</th>
                <th>触发率</th>
                <th>风险标记</th>
                <th>二次验证</th>
                <th>拦截次数</th>
              </tr>
            </thead>
            <tbody>
              ${stats.dates
                .map(
                  (date, index) => `
                    <tr>
                      <td>${date}</td>
                      <td>${formatNumber(stats.business[index])}</td>
                      <td class="accent-orange">${formatNumber(stats.triggered[index])}</td>
                      <td><span class="rate-pill">${((stats.triggered[index] / stats.business[index]) * 100).toFixed(2)}%</span></td>
                      <td>${formatNumber(stats.risk[index])}</td>
                      <td>${formatNumber(stats.slider[index])}</td>
                      <td class="accent-red">${formatNumber(stats.blocked[index])}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector(".close-btn").addEventListener("click", closeModal);
  drawerRoot.querySelector("#stats-compare-select")?.addEventListener("change", (event) => {
    state.statsCompareVersion = event.target.value;
    renderStatsModal();
  });
}

function renderLogDetailModal() {
  const pageKey = state.logDetailPage === "payment-log" ? "payment-log" : "login-log";
  const row = getExpandedRiskLogRows(pageKey).find((item) => item.id === state.logDetailId);
  if (!row) return;
  const sections = buildLogDetailSections(row);
  const detailTitle = "数据详情";

  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <aside class="log-detail-drawer">
        <div class="log-detail-drawer-head">
          <h2 class="modal-card-title">${detailTitle}</h2>
          <button class="close-btn" type="button">×</button>
        </div>
        <div class="log-detail-drawer-body">
          ${sections
            .map(
              (section) => `
                <section class="log-detail-section">
                  <div class="log-detail-section-title">${section.title}</div>
                  <div class="log-detail-info-grid">
                    ${section.fields
                      .map(
                        (field) => `
                          <div class="log-detail-field${field.full ? " full" : ""}">
                            <span class="log-detail-field-label">${field.label}</span>
                            ${renderLogDetailFieldValue(row, field)}
                          </div>
                        `
                      )
                      .join("")}
                  </div>
                </section>
              `
            )
            .join("")}
        </div>
      </aside>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector(".close-btn").addEventListener("click", closeModal);
  bindCopyActions(drawerRoot);
}

function renderBehaviorTagModal() {
  const card = findTagCard(state.activeTagCardId);
  if (!card) return;
  const activeLevel = card.levels.find((level) => level.id === state.activeBehaviorLevelId) || card.levels[0];
  if (!activeLevel) return;
  state.activeBehaviorLevelId = activeLevel.id;
  const selectedDate = state.behaviorTagDate || getTodayDateValue();
  const filteredRecords = activeLevel.records
    .filter((item) => item.triggeredAt.startsWith(selectedDate))
    .sort((a, b) => b.triggeredAt.localeCompare(a.triggeredAt));
  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <div class="behavior-tag-modal">
        <div class="modal-card-head">
          <div>
            <div class="user-list-title-wrap">
              <h2 class="drawer-title">${escapeHtml(card.name)}</h2>
              <span class="list-badge">今日触发 ${activeLevel.todayTriggers}</span>
            </div>
            <div class="behavior-tag-subtitle">同一标签下可按阈值拆分多个分层，方便运营查看不同风险等级的命中情况。</div>
          </div>
          <button class="close-btn" type="button">×</button>
        </div>

        <div class="behavior-level-tabs">
          <div class="behavior-level-tab-list">
            ${card.levels
              .map(
                (level) => `
                  <button class="behavior-level-tab ${level.id === activeLevel.id ? "active" : ""}" type="button" data-behavior-level="${level.id}">
                    ${level.name}
                  </button>
                `
              )
              .join("")}
          </div>
          ${canAddBehaviorLevel(card) ? `<button class="light-btn" type="button" id="behavior-level-add">＋ 新增分层</button>` : ""}
        </div>

        <div class="behavior-expression-box">
          <div class="behavior-expression-label">规则</div>
          <div class="behavior-expression-value">${escapeHtml(activeLevel.expression)}</div>
        </div>

        <div class="behavior-trigger-toolbar">
          <div class="field">
            <label>时间筛选</label>
            <input id="behavior-date-filter" type="date" value="${selectedDate}" />
          </div>
          <div class="behavior-trigger-meta">按时间倒序展示触发情况，共 ${filteredRecords.length} 条</div>
        </div>

        <div class="behavior-trigger-table-wrap">
          <table class="behavior-trigger-table">
            <thead>
              <tr>
                <th>触发时间</th>
                <th>账号</th>
                <th>设备</th>
                <th>IP</th>
                <th>关联策略</th>
                <th>处置结果</th>
              </tr>
            </thead>
            <tbody>
              ${
                filteredRecords.length
                  ? filteredRecords
                      .map(
                        (row) => `
                          <tr>
                            <td>${row.triggeredAt}</td>
                            <td>${row.account}</td>
                            <td>${row.device}</td>
                            <td>${row.ip}</td>
                            <td>${row.strategy}</td>
                            <td>${row.result}</td>
                          </tr>
                        `
                      )
                      .join("")
                  : `<tr><td colspan="6" class="behavior-trigger-empty">当前日期暂无触发记录</td></tr>`
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector(".close-btn").addEventListener("click", closeModal);
  drawerRoot.querySelectorAll("[data-behavior-level]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeBehaviorLevelId = button.dataset.behaviorLevel;
      renderBehaviorTagModal();
    });
  });
  drawerRoot.querySelector("#behavior-date-filter").addEventListener("change", (event) => {
    state.behaviorTagDate = event.target.value;
    renderBehaviorTagModal();
  });
  drawerRoot.querySelector("#behavior-level-add")?.addEventListener("click", () => {
    state.behaviorLevelForm = createBehaviorLevelForm(card);
    renderBehaviorTagModal();
  });

  renderBehaviorLevelForm();
}

function setBehaviorRuleDraftValue(path, value) {
  if (!state.behaviorRuleDraft) return;
  const keys = path.split(".");
  let cursor = state.behaviorRuleDraft;
  keys.slice(0, -1).forEach((key) => {
    cursor = cursor[key];
  });
  cursor[keys[keys.length - 1]] = value;

   if (keys.length === 3 && keys[2] === "max") {
    const [sectionKey, rowIndexText] = keys;
    const rowIndex = Number(rowIndexText);
    const rows = state.behaviorRuleDraft[sectionKey];
    if (Array.isArray(rows) && rowIndex >= 0 && rowIndex < rows.length - 1) {
      rows[rowIndex + 1].min = value;
    }
  }
}

function addBehaviorRuleDraftRow(sectionKey, kind) {
  if (!state.behaviorRuleDraft || !Array.isArray(state.behaviorRuleDraft[sectionKey])) return;
  const rows = state.behaviorRuleDraft[sectionKey];
  if (rows.length < 2) return;
  const prevRow = rows[rows.length - 2];
  const lastRow = rows[rows.length - 1];
  const nextMin = prevRow.max;
  const nextMax = lastRow.min;
  const nextRow =
    kind === "location" || kind === "speed-threshold"
      ? { id: uid(), min: nextMin, max: nextMax, score: "0" }
      : { id: uid(), min: nextMin, max: nextMax, score: "0", note: "" };
  lastRow.min = nextMax;
  rows.splice(rows.length - 1, 0, nextRow);
}

function removeBehaviorRuleDraftRow(sectionKey, rowId) {
  if (!state.behaviorRuleDraft || !Array.isArray(state.behaviorRuleDraft[sectionKey])) return;
  const rows = state.behaviorRuleDraft[sectionKey];
  const index = rows.findIndex((row) => row.id === rowId);
  if (index <= 0 || index >= rows.length - 1) return;
  const prevRow = rows[index - 1];
  const nextRow = rows[index + 1];
  prevRow.max = nextRow.min;
  rows.splice(index, 1);
}

function saveBehaviorRuleDraft(card) {
  const spec = getManagedBehaviorRuleSpec(card);
  if (spec && state.behaviorRuleDraft) {
    managedBehaviorRuleSpecs[spec.key] = cloneBehaviorRuleSpec(state.behaviorRuleDraft);
  }
  card.enabled = !!state.behaviorRuleEnabledDraft;
  if (state.userRiskRefreshAfterBehaviorRuleModal && (state.currentPage === "user-risk-engine" || state.currentPage === "payment-risk-engine")) {
    const draft = getUserRiskWorkbenchDraft();
    if (draft?.selectedBehaviors?.includes(card.name)) {
      draft.scoreNotice = buildUserRiskScoreNotice(draft.selectedBehaviors);
    }
    const paymentDraft = getPaymentRiskWorkbenchDraft();
    if (paymentDraft?.selectedBehaviors?.includes(card.name)) {
      paymentDraft.scoreNotice = getPaymentRiskBehaviorDisplayConfig(paymentDraft).summary;
    }
  }
}

function getBehaviorRuleDetectionNote(card) {
  if (card?.sceneType === "register") return "开启后，风控系统在每次注册时实时执行检测";
  if (card?.sceneType === "payment") return "开启后，风控系统在每次支付时实时执行检测";
  return "开启后，风控系统在每次登录时实时执行检测";
}

function renderBehaviorRuleSwitchSection(card, readonly = true) {
  const enabled = !!state.behaviorRuleEnabledDraft;
  return `
    <section class="behavior-rule-panel behavior-rule-switch-panel">
      <div class="behavior-rule-panel-title">1. 检测开关</div>
      <div class="behavior-rule-switch-row">
        <button class="switch ${enabled ? "on" : ""}" id="behavior-rule-switch" type="button" ${readonly ? "disabled" : ""}></button>
        <span class="behavior-rule-switch-text ${enabled ? "enabled" : "disabled"}">${enabled ? "启用" : "停用"}</span>
        <span class="behavior-rule-switch-note">${escapeHtml(getBehaviorRuleDetectionNote(card))}</span>
      </div>
    </section>
  `;
}

function renderBehaviorRuleInlineValue(path, value, suffix = "", width = 48, readonly = false) {
  if (state.behaviorRuleModalMode === "config") {
    return `
      <span class="behavior-rule-inline-field">
        <input class="behavior-rule-inline-input ${readonly ? "readonly" : ""}" data-rule-path="${path}" value="${escapeHtml(value)}" style="width:${width}px" ${readonly ? "readonly tabindex=\"-1\"" : ""} />
        ${suffix ? `<span class="behavior-rule-inline-suffix">${escapeHtml(suffix)}</span>` : ""}
      </span>
    `;
  }
  return `<span class="behavior-rule-inline-value" style="width:${width}px">${escapeHtml(value)}</span>${suffix ? `<span class="behavior-rule-inline-suffix">${escapeHtml(suffix)}</span>` : ""}`;
}

function renderBehaviorRuleSummaryCard(spec) {
  return `
    <section class="behavior-rule-summary-card">
      <div class="behavior-rule-summary-card-title"><span class="behavior-rule-summary-card-icon">i</span>${escapeHtml(spec.summaryCard.title)}</div>
      <div class="behavior-rule-summary-card-body">
        <p>判断条件：${escapeHtml(spec.summaryCard.condition)}</p>
        <p>场景举例：${escapeHtml(spec.summaryCard.example)}</p>
      </div>
    </section>
  `;
}

function renderBehaviorRuleMetricSection(spec) {
  if (spec.kind === "location") {
    return `
      <section class="behavior-rule-panel">
        <div class="behavior-rule-panel-title">2. 统计指标</div>
        <div class="behavior-rule-metric-line">
          <span>本次登录城市，到</span>
          ${renderBehaviorRuleInlineValue("metric.windowDays", spec.metric.windowDays, "天内", 48)}
          <span>常用登录城市（登录次数最多的前</span>
          ${renderBehaviorRuleInlineValue("metric.cityCount", spec.metric.cityCount, "", 40)}
          <span>名城市）的</span>
          <span>最短距离（km）</span>
        </div>
      </section>
    `;
  }
  if (spec.kind === "speed-threshold") {
    return `
      <section class="behavior-rule-panel">
        <div class="behavior-rule-panel-title">2. 统计指标</div>
        <div class="behavior-rule-metric-line">
          <span>本次登录城市到</span>
          ${renderBehaviorRuleInlineValue("metric.windowDays", spec.metric.windowDays, "天内", 48)}
          <span>常用登录城市的最短距离（km）÷ 本次登录时间与上次登录的时间差（h）</span>
        </div>
      </section>
    `;
  }
  if (spec.kind === "device-anomaly") {
    return `
      <section class="behavior-rule-panel">
        <div class="behavior-rule-panel-title">2. 统计指标</div>
        <div class="behavior-rule-metric-line">
          <span>本次登录使用的设备，是否为近</span>
          ${renderBehaviorRuleInlineValue("metric.windowDays", spec.metric.windowDays, "天内", 48)}
          <span>的历史登录设备</span>
        </div>
      </section>
    `;
  }
  return `
    <section class="behavior-rule-panel">
      <div class="behavior-rule-panel-title">2. 统计指标</div>
      <div class="behavior-rule-metric-line">
        <span>${escapeHtml(spec.metric.subject)}，在过去</span>
        ${renderBehaviorRuleInlineValue("metric.windowValue", spec.metric.windowValue, spec.metric.windowUnit, 48)}
        <span>内，${escapeHtml(spec.metric.actionLabel || "登录的")}${escapeHtml(spec.metric.countLabel || spec.countLabel)}</span>
      </div>
    </section>
  `;
}

function renderBehaviorRuleLocationTable(spec) {
  const editable = state.behaviorRuleModalMode === "config";
  return `
    <section class="behavior-rule-panel">
      <div class="behavior-rule-panel-title">3. 得分规则</div>
      <div class="behavior-rule-helper">
        <p>登录地异常分 = 距离变化分 × 城市集中度</p>
        ${spec.notes[0].paragraphs.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
      </div>
      <div class="behavior-rule-table-wrap">
        <table class="behavior-rule-table behavior-rule-config-table">
          <thead>
            <tr>
              <th>最小值</th>
              <th>统计指标</th>
              <th>最大值</th>
              <th>风险分</th>
              ${editable ? "<th>操作</th>" : ""}
            </tr>
          </thead>
          <tbody>
            ${spec.distanceRows
              .map(
                (row, index) => `
                  <tr>
                    <td>${renderBehaviorRuleInlineValue(`distanceRows.${index}.min`, row.min, "", 90, true)}</td>
                    <td><span class="behavior-rule-readonly-text">≤ 距离(km) ＜</span></td>
                    <td>${renderBehaviorRuleInlineValue(`distanceRows.${index}.max`, row.max, "", 90, index === spec.distanceRows.length - 1)}</td>
                    <td>${renderBehaviorRuleInlineValue(`distanceRows.${index}.score`, row.score, "", 90)}</td>
                    ${
                      editable
                        ? `<td>${index === 0 || index === spec.distanceRows.length - 1 ? '<span class="behavior-rule-row-link disabled">删除</span>' : `<button class="behavior-rule-row-link danger" type="button" data-rule-delete-section="distanceRows" data-rule-row-id="${row.id}">删除</button>`}<button class="behavior-rule-row-link" type="button" data-rule-add="distanceRows">添加</button></td>`
                        : ""
                    }
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderBehaviorRuleBatchTable(spec, sectionKey = "rows") {
  const editable = state.behaviorRuleModalMode === "config";
  const rangeLabel = spec.rangeLabel || spec.countLabel || "账号数";
  return `
    <section class="behavior-rule-panel">
      <div class="behavior-rule-panel-title">3. 得分规则</div>
      ${spec.notes?.length ? `<div class="behavior-rule-helper">${spec.notes[0].paragraphs.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}</div>` : ""}
      <div class="behavior-rule-table-wrap">
        <table class="behavior-rule-table behavior-rule-config-table">
          <thead>
            <tr>
              <th>最小值</th>
              <th>统计指标</th>
              <th>最大值</th>
              <th>风险分</th>
              ${editable ? "<th>操作</th>" : ""}
            </tr>
          </thead>
          <tbody>
            ${spec.rows
              .map(
                (row, index) => `
                  <tr>
                    <td>${renderBehaviorRuleInlineValue(`${sectionKey}.${index}.min`, row.min, "", 90, true)}</td>
                    <td><span class="behavior-rule-readonly-text">≤ ${escapeHtml(rangeLabel)} ＜</span></td>
                    <td>${renderBehaviorRuleInlineValue(`${sectionKey}.${index}.max`, row.max, "", 90, index === spec.rows.length - 1)}</td>
                    <td>${renderBehaviorRuleInlineValue(`${sectionKey}.${index}.score`, row.score, "", 90)}</td>
                    ${
                      editable
                        ? `<td>${index === 0 || index === spec.rows.length - 1 ? '<span class="behavior-rule-row-link disabled">删除</span>' : `<button class="behavior-rule-row-link danger" type="button" data-rule-delete-section="${sectionKey}" data-rule-row-id="${row.id}">删除</button>`}<button class="behavior-rule-row-link" type="button" data-rule-add="${sectionKey}">添加</button></td>`
                        : ""
                    }
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderBehaviorRuleDeviceAnomaly(spec) {
  return `
    <section class="behavior-rule-panel">
      <div class="behavior-rule-panel-title">3. 得分规则</div>
      <div class="behavior-rule-helper">
        <p>登录设备异常分 = 新设备分 × 设备集中度</p>
        ${spec.notes[0].paragraphs.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
      </div>
      <div class="behavior-rule-metric-line behavior-rule-metric-line-compact">
        <span>若不为历史登录设备，则新设备分 =</span>
        ${renderBehaviorRuleInlineValue("metric.newDeviceScore", spec.metric.newDeviceScore, "", 90)}
        <span>分</span>
      </div>
      <div class="behavior-rule-metric-line behavior-rule-metric-line-compact">
        <span>若为历史登录设备，则新设备分 =</span>
        ${renderBehaviorRuleInlineValue("metric.knownDeviceScore", spec.metric.knownDeviceScore, "", 90)}
        <span>分</span>
      </div>
    </section>
  `;
}

function renderManagedBehaviorRuleContent(spec) {
  if (spec.kind === "location") return renderBehaviorRuleLocationTable(spec);
  if (spec.kind === "speed-threshold") return renderBehaviorRuleSpeedThresholdTable(spec);
  if (spec.kind === "device-anomaly") return renderBehaviorRuleDeviceAnomaly(spec);
  return renderBehaviorRuleBatchTable(spec);
}

function renderBehaviorRuleSpeedThresholdTable(spec) {
  const editable = state.behaviorRuleModalMode === "config";
  return `
    <section class="behavior-rule-panel">
      <div class="behavior-rule-panel-title">3. 得分规则</div>
      <div class="behavior-rule-helper">
        ${spec.notes[0].paragraphs.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
      </div>
      <div class="behavior-rule-table-wrap">
        <table class="behavior-rule-table behavior-rule-config-table">
          <thead>
            <tr>
              <th>最小值</th>
              <th>统计指标</th>
              <th>最大值</th>
              <th>风险分</th>
              ${editable ? "<th>操作</th>" : ""}
            </tr>
          </thead>
          <tbody>
            ${spec.speedRows
              .map(
                (row, index) => `
                  <tr>
                    <td>${renderBehaviorRuleInlineValue(`speedRows.${index}.min`, row.min, "", 90, true)}</td>
                    <td><span class="behavior-rule-readonly-text">≤ 速度(km/h) ＜</span></td>
                    <td>${renderBehaviorRuleInlineValue(`speedRows.${index}.max`, row.max, "", 90, index === spec.speedRows.length - 1)}</td>
                    <td>${renderBehaviorRuleInlineValue(`speedRows.${index}.score`, row.score, "", 90)}</td>
                    ${
                      editable
                        ? `<td>${index === 0 || index === spec.speedRows.length - 1 ? '<span class="behavior-rule-row-link disabled">删除</span>' : `<button class="behavior-rule-row-link danger" type="button" data-rule-delete-section="speedRows" data-rule-row-id="${row.id}">删除</button>`}<button class="behavior-rule-row-link" type="button" data-rule-add="speedRows">添加</button></td>`
                        : ""
                    }
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function bindManagedBehaviorRuleModal(card) {
  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector(".close-btn")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#behavior-rule-cancel")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#behavior-rule-switch")?.addEventListener("click", () => {
    if (state.behaviorRuleModalMode !== "config") return;
    state.behaviorRuleEnabledDraft = !state.behaviorRuleEnabledDraft;
    renderBehaviorRuleModal();
  });
  drawerRoot.querySelectorAll("[data-rule-path]").forEach((input) => {
    input.addEventListener("input", (event) => {
      setBehaviorRuleDraftValue(input.dataset.rulePath, event.target.value);
    });
  });
  drawerRoot.querySelectorAll("[data-rule-add]").forEach((button) => {
    button.addEventListener("click", () => {
      addBehaviorRuleDraftRow(button.dataset.ruleAdd, state.behaviorRuleDraft?.kind);
      renderBehaviorRuleModal();
    });
  });
  drawerRoot.querySelectorAll("[data-rule-delete-section]").forEach((button) => {
    button.addEventListener("click", () => {
      removeBehaviorRuleDraftRow(button.dataset.ruleDeleteSection, button.dataset.ruleRowId);
      renderBehaviorRuleModal();
    });
  });
  drawerRoot.querySelector("#behavior-rule-confirm")?.addEventListener("click", () => {
    if (state.behaviorRuleModalMode === "config") {
      saveBehaviorRuleDraft(card);
      closeModal();
      if (state.currentPage === "user-risk-behavior" || state.currentPage === "payment-risk-behavior") {
        renderRiskBehaviorSections();
      }
      return;
    }
    closeModal();
  });
}

function renderManagedBehaviorRuleModal(card) {
  const readonly = state.behaviorRuleModalMode === "view";
  const spec = readonly ? getManagedBehaviorRuleSpec(card) : state.behaviorRuleDraft;
  if (!spec) return;
  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <div class="behavior-rule-modal">
        <div class="behavior-rule-modal-head">
          <h2 class="behavior-rule-modal-title">${readonly ? "查看风险规则" : "配置风险规则"}</h2>
          <button class="close-btn" type="button">×</button>
        </div>
        <div class="behavior-rule-modal-body">
          ${renderBehaviorRuleSummaryCard(spec)}
          ${renderBehaviorRuleSwitchSection(card, readonly)}
          ${renderBehaviorRuleMetricSection(spec)}
          ${renderManagedBehaviorRuleContent(spec)}
        </div>
        <div class="behavior-rule-modal-footer">
          <button class="primary-btn behavior-rule-modal-btn" type="button" id="behavior-rule-confirm">确认</button>
          <button class="secondary-btn behavior-rule-modal-btn" type="button" id="behavior-rule-cancel">取消</button>
        </div>
      </div>
    </div>
  `;
  bindManagedBehaviorRuleModal(card);
}

function renderLegacyBehaviorRuleSection(section) {
  if (section.type === "choice") {
    return `
      <section class="behavior-rule-section">
        <div class="behavior-rule-section-head">
          <span class="behavior-rule-section-title">${escapeHtml(section.label)}：</span>
          <div class="behavior-rule-choice-group">
            ${section.options
              .map(
                (option) => `
                  <span class="behavior-rule-choice ${section.active === option ? "active" : ""}">
                    <span class="behavior-rule-choice-dot"></span>
                    <span>${escapeHtml(option)}</span>
                  </span>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }
  if (section.type === "table") {
    return `
      <section class="behavior-rule-section">
        ${
          section.title || section.description
            ? `
              <div class="behavior-rule-block-head">
                ${section.title ? `<div class="behavior-rule-section-title">${escapeHtml(section.title)}</div>` : ""}
                ${section.description ? `<p class="behavior-rule-section-desc">${escapeHtml(section.description)}</p>` : ""}
              </div>
            `
            : ""
        }
        <div class="behavior-rule-table-wrap">
          <table class="behavior-rule-table">
            <thead>
              <tr>
                ${section.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${section.rows
                .map(
                  (row) => `
                    <tr>
                      ${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }
  if (section.type === "tip") {
    return `
      <section class="behavior-rule-section">
        <div class="behavior-rule-tip">
          <div class="behavior-rule-section-title">${escapeHtml(section.title)}</div>
          <ul class="behavior-rule-tip-list">
            ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      </section>
    `;
  }
  return `
    <section class="behavior-rule-section">
      <div class="behavior-rule-note">
        <span class="behavior-rule-note-label">${escapeHtml(section.label)}：</span>
        <span>${escapeHtml(section.value)}</span>
      </div>
    </section>
  `;
}

function renderLegacyBehaviorRuleModal(card) {
  if (!card) return;
  const spec = getBehaviorRuleSpec(card);
  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <div class="behavior-rule-modal">
        <div class="behavior-rule-modal-head">
          <h2 class="behavior-rule-modal-title">查看风险规则</h2>
          <button class="close-btn" type="button">×</button>
        </div>
        <div class="behavior-rule-modal-body">
          <div class="behavior-rule-summary">
            <div class="behavior-rule-summary-text">
              <span class="behavior-rule-summary-name">${escapeHtml(card.name)}</span>
              <span>得分规则：${escapeHtml(spec.summary)}</span>
            </div>
            ${
              spec.linkLabel
                ? `<button class="behavior-rule-summary-link" type="button">${escapeHtml(spec.linkLabel)} →</button>`
                : ""
            }
          </div>
          ${renderBehaviorRuleSwitchSection(card, true)}
          <div class="behavior-rule-content">
            ${spec.sections.map((section) => renderLegacyBehaviorRuleSection(section)).join("")}
          </div>
        </div>
        <div class="behavior-rule-modal-footer">
          <button class="primary-btn behavior-rule-modal-btn" type="button" id="behavior-rule-confirm">确认</button>
          <button class="secondary-btn behavior-rule-modal-btn" type="button" id="behavior-rule-cancel">取消</button>
        </div>
      </div>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector(".close-btn")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#behavior-rule-confirm")?.addEventListener("click", closeModal);
  drawerRoot.querySelector("#behavior-rule-cancel")?.addEventListener("click", closeModal);
  drawerRoot.querySelector(".behavior-rule-summary-link")?.addEventListener("click", () => {
    drawerRoot.querySelector(".behavior-rule-content")?.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderBehaviorRuleModal() {
  const card = findTagCard(state.activeTagCardId);
  if (!card) return;
  if (isManagedBehaviorRule(card)) {
    renderManagedBehaviorRuleModal(card);
    return;
  }
  renderLegacyBehaviorRuleModal(card);
}

function renderBehaviorLevelForm() {
  const form = state.behaviorLevelForm;
  if (!form) return;
  const card = findTagCard(form.cardId);
  if (!card) return;
  const preview = buildBehaviorLevelExpression(form);
  const holder = document.createElement("div");
  holder.className = "condition-subtag-overlay";
  holder.innerHTML = `
    <div class="condition-subtag-modal behavior-level-form-modal">
      <div class="modal-card-head">
        <h2 class="modal-card-title">新增分层</h2>
        <button class="close-btn" type="button">×</button>
      </div>
      <div class="modal-form">
        <div class="field">
          <label class="required">分层名称</label>
          <input id="behavior-layer-name" value="${escapeHtml(form.name)}" />
        </div>
        <div class="field">
          <label class="required">规则</label>
          ${renderBehaviorDescriptionEditor(form)}
        </div>
        <div class="field">
          <label>规则表达式预览</label>
          <div class="subtag-preview" id="behavior-layer-preview">${escapeHtml(preview)}</div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="secondary-btn" type="button" id="behavior-layer-cancel">取消</button>
        <button class="primary-btn" type="button" id="behavior-layer-save">确定</button>
      </div>
    </div>
  `;
  drawerRoot.appendChild(holder);

  const closeBehaviorLevelForm = () => {
    state.behaviorLevelForm = null;
    if (form.conditionId) {
      renderStrategyModal();
      return;
    }
    renderBehaviorTagModal();
  };

  const syncPreview = () => {
    form.name = drawerRoot.querySelector("#behavior-layer-name").value;
    if (drawerRoot.querySelector("#behavior-layer-dimension")) form.dimension = drawerRoot.querySelector("#behavior-layer-dimension").value;
    if (drawerRoot.querySelector("#behavior-layer-template")) form.template = drawerRoot.querySelector("#behavior-layer-template").value;
    if (drawerRoot.querySelector("#behavior-layer-window")) form.window = drawerRoot.querySelector("#behavior-layer-window").value;
    if (drawerRoot.querySelector("#behavior-layer-unit")) form.unit = drawerRoot.querySelector("#behavior-layer-unit").value;
    if (drawerRoot.querySelector("#behavior-layer-threshold")) form.threshold = drawerRoot.querySelector("#behavior-layer-threshold").value;
    if (drawerRoot.querySelector("#behavior-layer-expression")) form.expression = drawerRoot.querySelector("#behavior-layer-expression").value;
    drawerRoot.querySelector("#behavior-layer-preview").textContent = buildBehaviorLevelExpression(form);
  };

  holder.addEventListener("click", (event) => {
    if (event.target === holder) {
      closeBehaviorLevelForm();
    }
  });
  holder.querySelector(".close-btn").addEventListener("click", () => {
    closeBehaviorLevelForm();
  });
  holder.querySelector("#behavior-layer-cancel").addEventListener("click", () => {
    closeBehaviorLevelForm();
  });
  holder.querySelector("#behavior-layer-name").addEventListener("input", syncPreview);
  holder.querySelector("#behavior-layer-dimension")?.addEventListener("change", syncPreview);
  holder.querySelector("#behavior-layer-template")?.addEventListener("change", syncPreview);
  holder.querySelector("#behavior-layer-window")?.addEventListener("input", syncPreview);
  holder.querySelector("#behavior-layer-window")?.addEventListener("change", syncPreview);
  holder.querySelector("#behavior-layer-unit")?.addEventListener("change", syncPreview);
  holder.querySelector("#behavior-layer-threshold")?.addEventListener("input", syncPreview);
  holder.querySelector("#behavior-layer-expression")?.addEventListener("input", syncPreview);
  holder.querySelector("#behavior-layer-save").addEventListener("click", saveBehaviorLevel);
}

function renderTagCreateModal() {
  const form = state.tagForm;
  const manualFieldMeta = getManualTagFieldMeta(form.type);
  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <div class="tag-form-modal">
        <div class="modal-card-head">
          <h2 class="modal-card-title">新建标签</h2>
          <button class="close-btn" type="button">×</button>
        </div>

        <div class="modal-form">
          <div class="field">
            <label class="required">标签类型</label>
            <input value="${escapeHtml(form.type)}" disabled />
          </div>
          <div class="field">
            <label class="required">标签名称</label>
            <input id="tag-name" value="${escapeHtml(form.name)}" placeholder="请输入标签名称" />
          </div>
          <div class="field">
            <label>标签描述</label>
            <textarea id="tag-desc" placeholder="请输入标签描述">${escapeHtml(form.description)}</textarea>
          </div>
          <div class="field">
            <label class="required">生成方式</label>
            <div class="segmented">
              <button class="segmented-btn ${form.mode === "manual" ? "active" : ""}" type="button" data-tag-mode="manual">手动添加</button>
              <button class="segmented-btn ${form.mode === "upload" ? "active" : ""}" type="button" data-tag-mode="upload">文件上传</button>
            </div>
            <div class="helper-text">如需增加系统自动计算的用户标签，请联系 SDK 部门进行添加</div>
          </div>
          <div class="field ${form.mode === "manual" ? "" : "hidden"}" id="manual-field">
            <label class="required">${manualFieldMeta.label}</label>
            <div class="manual-input-box">
              <textarea id="tag-manual-content" placeholder="${manualFieldMeta.placeholder}">${escapeHtml(form.manualContent || "")}</textarea>
            </div>
          </div>
          <div class="field ${form.mode === "upload" ? "" : "hidden"}" id="upload-field">
            <label>上传文件</label>
            <div class="upload-box">
              <div>
                <div class="upload-icon">⇪</div>
                <strong>支持 CSV、XLSX 文件格式</strong>
                <label class="secondary-btn upload-btn" for="tag-file-input">选择文件</label>
                <input id="tag-file-input" type="file" accept=".csv,.xlsx" />
                <div class="selected-file ${form.fileName ? "" : "hidden"}">${escapeHtml(form.fileName)}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="secondary-btn" id="tag-cancel" type="button">取消</button>
          <button class="primary-btn" id="tag-save" type="button">确定</button>
        </div>
      </div>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector(".close-btn").addEventListener("click", closeModal);
  drawerRoot.querySelector("#tag-cancel").addEventListener("click", closeModal);
  drawerRoot.querySelector("#tag-name").addEventListener("input", (event) => {
    form.name = event.target.value;
  });
  drawerRoot.querySelector("#tag-desc").addEventListener("input", (event) => {
    form.description = event.target.value;
  });
  drawerRoot.querySelector("#tag-manual-content")?.addEventListener("input", (event) => {
    form.manualContent = event.target.value;
  });
  drawerRoot.querySelectorAll("[data-tag-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      form.mode = button.dataset.tagMode;
      renderTagCreateModal();
    });
  });
  drawerRoot.querySelector("#tag-file-input")?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    form.fileName = file ? file.name : "";
    renderTagCreateModal();
  });
  drawerRoot.querySelector("#tag-save").addEventListener("click", saveTag);
}

function saveTag() {
  const form = state.tagForm;
  if (!form.name.trim()) {
    alert("请输入标签名称");
    return;
  }
  const targetSection = tagSections.find((section) => section.type === form.type);
  if (!targetSection) return;
  if (form.mode === "manual" && form.type !== "行为" && !form.manualContent.trim()) {
    alert(`请输入${getManualTagFieldMeta(form.type).label}`);
    return;
  }
  const updateMode = form.type === "行为" ? "系统实时计算" : form.mode === "upload" ? "人工手动上传" : "手动添加";
  const nextName = form.name.trim();
  if (form.type === "行为") {
    if (!conditionPickerCatalog.行为.some((item) => item.name === nextName)) {
      conditionPickerCatalog.行为.unshift({ name: nextName });
    }
    syncBehaviorTagSection();
    const sectionCard = targetSection.cards.find((card) => card.name === nextName);
    if (sectionCard) {
      sectionCard.description = form.description.trim() || "新建行为标签";
      sectionCard.updateMode = "系统实时计算";
      refreshBehaviorTagCard(sectionCard);
    }
  } else {
    targetSection.cards.unshift(createTagCard(nextName, form.description.trim() || "新建用户标签", "12,543", updateMode, { type: form.type }));
  }
  if (!conditionTagLibrary[form.type].includes(nextName)) {
    conditionTagLibrary[form.type].push(nextName);
  }
  closeModal();
  if (state.currentPage !== "user-tags") state.currentPage = "user-tags";
  renderApp();
}

function saveBehaviorLevel() {
  const form = state.behaviorLevelForm;
  if (!form) return;
  const card = findTagCard(form.cardId);
  if (!card) return;
  const expression = buildBehaviorLevelExpression(form);
  if (!String(form.name).trim()) {
    alert("请输入分层名称");
    return;
  }
  if (!expression.trim()) {
    alert("请完善规则表达式");
    return;
  }
  if (card.levels.some((level) => level.expression === expression)) {
    alert("当前分层表达式已存在，请勿重复新增");
    return;
  }

  const nextLevel = createBehaviorLevel(expression, card.levels.length, card.name, form.name.trim());
  nextLevel.name = form.name.trim();
  card.levels.push(nextLevel);
  refreshBehaviorTagCard(card);

  const catalogItem = conditionPickerCatalog.行为.find((item) => item.name === card.name);
  if (catalogItem) {
    catalogItem.children ||= [];
    if (!catalogItem.children.includes(expression)) {
      catalogItem.children.push(expression);
    }
  }
  if (!conditionTagLibrary.行为.includes(expression)) {
    conditionTagLibrary.行为.push(expression);
  }

  syncBehaviorTagSection();
  const refreshed = findTagCard(card.id);
  const activeLevel = refreshed?.levels.find((level) => level.expression === expression);
  state.activeBehaviorLevelId = activeLevel?.id || refreshed?.levels.at(-1)?.id || null;
  state.behaviorLevelForm = null;
  if (form.conditionId) {
    const activeRule = getActiveRule();
    const target = findConditionById(activeRule.conditions, form.conditionId);
    if (target) {
      target.type = "行为";
      target.operator = normalizeConditionOperator(target.operator || "是");
      target.label = expression;
      target.selected = true;
    }
    state.conditionPicker = null;
    renderStrategyModal();
    return;
  }
  renderBehaviorTagModal();
}

function renderTagUserListModal() {
  const card = findTagCard(state.activeTagCardId);
  if (!card) return;
  const listTitle = card.type === "账号" ? "账号列表" : card.type === "设备" ? "设备列表" : card.type === "IP" ? "IP列表" : "用户列表";
  const idLabel = card.type === "账号" ? "账号ID" : card.type === "设备" ? "设备ID" : card.type === "IP" ? "IP" : "编号ID";
  const useLevelSelect = card.type === "IP" && card.levels?.length;
  const activeLevel =
    card.levels?.find((level) => level.id === state.activeBehaviorLevelId) ||
    (!useLevelSelect ? card.levels?.[0] : null) ||
    null;
  if (card.levels?.length && activeLevel && !useLevelSelect) {
    state.activeBehaviorLevelId = activeLevel.id;
  }
  if (useLevelSelect && !state.activeBehaviorLevelId) {
    state.activeBehaviorLevelId = "__all__";
  }
  const baseUsers = useLevelSelect
    ? state.activeBehaviorLevelId === "__all__"
      ? card.users
      : activeLevel?.users || []
    : activeLevel?.users || card.users;
  const filtered = baseUsers.filter((item) => item.id.toLowerCase().includes(state.tagListQuery.toLowerCase()));
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  state.tagListPage = Math.min(state.tagListPage, pageCount);
  const start = (state.tagListPage - 1) * pageSize;
  const rows = filtered.slice(start, start + pageSize);

  drawerRoot.innerHTML = `
    <div class="drawer-overlay">
      <div class="user-list-modal">
        <div class="user-list-head">
          <div class="user-list-title-wrap">
            <h2 class="drawer-title">${card.levels?.length ? `${card.name}分层详情` : listTitle}</h2>
            <span class="list-badge">${
              card.levels?.length
                ? `${useLevelSelect && state.activeBehaviorLevelId === "__all__" ? card.name : activeLevel?.expression} · 覆盖用户数 ${filtered.length}`
                : `覆盖用户数 ${filtered.length}`
            }</span>
          </div>
          <button class="close-btn" type="button">×</button>
        </div>

        ${
          card.levels?.length
            ? useLevelSelect
              ? `
                <div class="layered-user-select">
                  <label class="field">
                    <span>分层筛选</span>
                    <select id="tag-level-select">
                      <option value="__all__" ${state.activeBehaviorLevelId === "__all__" ? "selected" : ""}>${card.name}</option>
                      ${card.levels
                        .map(
                          (level) => `
                            <option value="${level.id}" ${level.id === activeLevel?.id ? "selected" : ""}>${level.expression}</option>
                          `
                        )
                        .join("")}
                    </select>
                  </label>
                </div>
              `
              : `
              <div class="layered-user-tabs">
                ${card.levels
                  .map(
                    (level) => `
                      <button class="behavior-level-tab ${level.id === activeLevel?.id ? "active" : ""}" type="button" data-tag-level="${level.id}">
                        ${level.expression}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            `
            : ""
        }

        <div class="user-list-toolbar">
          <div class="search-wrap">
            <span class="search-icon">⌕</span>
            <input id="tag-search" value="${escapeHtml(state.tagListQuery)}" placeholder="${getTagSearchPlaceholder(card)}" />
          </div>
          <div class="toolbar-actions">
            <button class="secondary-btn" type="button">导入</button>
            <button class="secondary-btn" type="button">导出</button>
          </div>
        </div>

        <div class="user-table-wrap">
          <table class="user-table">
            <thead>
              <tr>
                <th>${idLabel}</th>
                <th>标签添加时间</th>
                <th>标签失效时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  (item) => `
                    <tr>
                      <td>${item.id}</td>
                      <td>${item.addedAt}</td>
                      <td>${item.expiredAt}</td>
                      <td><button class="link-btn" type="button" data-user-detail="${item.id}">详情</button></td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <div class="user-list-footer">
          <span>共 ${filtered.length} 条数据</span>
          <div class="pager">
            <span>${state.tagListPage} / ${pageCount}</span>
            <button class="pager-btn" type="button" id="page-prev" ${state.tagListPage === 1 ? "disabled" : ""}>‹</button>
            <button class="pager-btn" type="button" id="page-next" ${state.tagListPage === pageCount ? "disabled" : ""}>›</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const overlay = drawerRoot.querySelector(".drawer-overlay");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });
  drawerRoot.querySelector(".close-btn").addEventListener("click", closeModal);
  drawerRoot.querySelectorAll("[data-tag-level]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeBehaviorLevelId = button.dataset.tagLevel;
      state.tagListPage = 1;
      renderTagUserListModal();
    });
  });
  drawerRoot.querySelector("#tag-level-select")?.addEventListener("change", (event) => {
    state.activeBehaviorLevelId = event.target.value;
    state.tagListPage = 1;
    renderTagUserListModal();
  });
  drawerRoot.querySelector("#tag-search").addEventListener("input", (event) => {
    state.tagListQuery = event.target.value;
    state.tagListPage = 1;
    renderTagUserListModal();
  });
  drawerRoot.querySelector("#page-prev").addEventListener("click", () => {
    state.tagListPage = Math.max(1, state.tagListPage - 1);
    renderTagUserListModal();
  });
  drawerRoot.querySelector("#page-next").addEventListener("click", () => {
    state.tagListPage = Math.min(pageCount, state.tagListPage + 1);
    renderTagUserListModal();
  });
  drawerRoot.querySelectorAll("[data-user-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.userDetail;
      const mode = card.type === "设备" ? "device" : card.type === "IP" ? "ip" : "account";
      openPortraitResultModal(mode, value, state.currentPage.includes("payment") ? "payment-query" : "login-query");
    });
  });
}

function findTagCard(cardId) {
  for (const section of [...userBehaviorSections, ...tagSections]) {
    const found = section.cards.find((card) => card.id === cardId);
    if (found) return found;
  }
  const paymentFound = paymentBehaviorCards.find((card) => card.id === cardId);
  if (paymentFound) return paymentFound;
  return null;
}

function renderOverviewTrendChart(chart) {
  const width = 1360;
  const height = 290;
  const left = 66;
  const right = 60;
  const top = 16;
  const bottom = 42;
  const maxBar = chart.barMax || Math.max(...chart.bars);
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const barWidth = chart.labels.length > 14 ? Math.max(10, Math.floor(plotWidth / chart.labels.length / 2.4)) : 32;
  const groupGap = plotWidth / chart.labels.length;
  const yTicks = [0, Math.round(maxBar * 0.25), Math.round(maxBar * 0.5), Math.round(maxBar * 0.75), Math.round(maxBar)];
  const rightTicks = [0, 25, 50, 75, 100];
  const visibleLabelIndexes =
    chart.labels.length >= 28 ? new Set([0, 4, 8, 12, 16, 20, 24, chart.labels.length - 1]) : new Set(chart.labels.map((_, index) => index));

  const linePath = (values) =>
    values
      .map((value, index) => {
        const x = left + groupGap * index + groupGap / 2;
        const y = top + plotHeight - (value / 100) * plotHeight;
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

  const hoverZones = chart.labels
    .map((label, index) => {
      const zoneLeft = left + groupGap * index;
      return `
        <div class="overview-chart-hover-zone" style="left:${zoneLeft}px;width:${groupGap}px;">
          ${renderOverviewTrendTooltip(formatOverviewChartTooltipTitle(label), chart.tooltipRows)}
        </div>
      `;
    })
    .join("");

  return `
    <div class="overview-chart-wrap">
      <svg class="overview-chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="用户安全趋势图">
        ${yTicks
          .map((tick) => {
            const y = top + plotHeight - (tick / maxBar) * plotHeight;
            return `
              <line x1="${left}" y1="${y}" x2="${width - right}" y2="${y}" stroke="#edf2f7" stroke-dasharray="4 4"></line>
              <text x="${left - 10}" y="${y + 4}" text-anchor="end" font-size="12" fill="#98a2b3">${tick}</text>
            `;
          })
          .join("")}
        ${rightTicks
          .map((tick) => {
            const y = top + plotHeight - (tick / 100) * plotHeight;
            return `<text x="${width - right + 14}" y="${y + 4}" font-size="12" fill="#98a2b3">${tick}%</text>`;
          })
          .join("")}
        ${chart.bars
          .map((value, index) => {
            const x = left + groupGap * index + groupGap / 2 - barWidth / 2;
            const y = top + plotHeight - (value / maxBar) * plotHeight;
            const h = (value / maxBar) * plotHeight;
            return `<rect x="${x}" y="${y}" width="${barWidth}" height="${h}" rx="1.5" fill="#2664ff"></rect>`;
          })
          .join("")}
        ${chart.lines
          .map(
            (line) => `
              <path d="${linePath(line.values)}" fill="none" stroke="${line.color}" stroke-width="2" ${line.dashed ? 'stroke-dasharray="6 4"' : ""}></path>
            `
          )
          .join("")}
        ${chart.labels
          .map((label, index) => {
            if (!visibleLabelIndexes.has(index)) {
              return "";
            }
            const x = left + groupGap * index + groupGap / 2;
            const parts = getOverviewChartLabelParts(label);
            return `
              <text x="${x}" y="${height - 24}" text-anchor="middle" font-size="12" fill="#98a2b3">${parts.date}</text>
              <text x="${x}" y="${height - 8}" text-anchor="middle" font-size="12" fill="#98a2b3">${parts.time}</text>
            `;
          })
          .join("")}
      </svg>
      <div class="overview-chart-hover-layer">${hoverZones}</div>
    </div>
  `;
}

function renderOverviewPieCard(pie) {
  if (pie.renderMode === "bar") {
    return `
      <article class="overview-pie-card overview-bar-card ${pie.extraLabel ? "has-extra-column" : ""}">
        <div class="overview-pie-head">
          <span class="overview-pie-accent" style="background:${pie.accent}"></span>
          <span class="overview-pie-title">${pie.title}</span>
        </div>
        ${renderOverviewBarTable(pie)}
      </article>
    `;
  }
  const segments = [];
  let offset = 0;
  const total = pie.items.reduce((sum, item) => sum + Number(String(item.value).replace(/,/g, "")), 0) || 1;
  pie.items.forEach((item) => {
    const numericValue = Number(String(item.value).replace(/,/g, ""));
    const slice = (numericValue / total) * 100;
    segments.push(`${item.color} ${offset}% ${offset + slice}%`);
    offset += slice;
  });

  return `
    <article class="overview-pie-card">
      <div class="overview-pie-head">
        <span class="overview-pie-accent" style="background:${pie.accent}"></span>
        <span class="overview-pie-title">${pie.title}</span>
      </div>
      <div class="overview-pie-body">
        <div class="overview-donut" style="background: conic-gradient(${segments.join(", ")})">
          <div class="overview-donut-hole">
            <span class="overview-donut-center-label">${pie.centerLabel}</span>
            <strong class="overview-donut-center-value">${pie.centerValue}</strong>
          </div>
        </div>
        <div class="overview-pie-rank">
          <div class="overview-pie-rank-head">
            <span>排名</span>
            <span>${pie.typeLabel || pie.title.replace("Top5", "类型").replace("Top4", "类型")}</span>
            <span>数量</span>
          </div>
          ${pie.items
            .map(
              (item) => `
                <div class="overview-pie-rank-item">
                  <span class="overview-rank-badge" style="background:${item.color}">${item.rank}</span>
                  <span class="overview-rank-label">${item.label}</span>
                  <span class="overview-rank-value">${item.value}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderOverviewBarTable(pie) {
  const maxValue = Math.max(...pie.items.map((item) => Number(String(item.value).replace(/,/g, ""))), 1);
  return `
    <div class="overview-bar-body">
      <div class="overview-bar-rank">
        <div class="overview-bar-rank-head ${pie.extraLabel ? "has-extra-column" : ""}">
          <span>排名</span>
          <span>${pie.typeLabel || pie.title.replace("Top5", "类型").replace("Top4", "类型")}</span>
          <span></span>
          <span>${pie.valueLabel || "数量"}</span>
          ${pie.extraLabel ? `<span>${pie.extraLabel}</span>` : ""}
        </div>
        <div class="overview-bar-rank-list">
          ${pie.items
            .map((item) => {
              const width = Math.max((Number(String(item.value).replace(/,/g, "")) / maxValue) * 100, 12);
              const infoIcon =
                item.showInfo === false
                  ? ""
                  : renderOverviewInfoBadge(item.infoText);
              return `
                <div class="overview-bar-rank-item ${pie.extraLabel ? "has-extra-column" : ""}">
                  <span class="overview-bar-rank-number${item.rank <= 3 ? " top-three" : ""}">${item.rank}</span>
                  <span class="overview-rank-label">${item.label}${infoIcon}</span>
                  <div class="overview-bar-track">
                    <div class="overview-bar-fill" style="width:${width}%;${item.color ? `background:${item.color};` : ""}"></div>
                  </div>
                  <span class="overview-rank-value">${item.value}</span>
                  ${pie.extraLabel ? `<span class="overview-rank-value">${item.extraValue || "-"}</span>` : ""}
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderOverviewTrendTooltip(title, rows) {
  return `
    <div class="overview-trend-tooltip">
      <div class="overview-trend-tooltip-title">${title}</div>
      <div class="overview-trend-tooltip-head">
        <span></span>
        <span>数量</span>
        <span>占比</span>
      </div>
      ${rows
        .map(
          (row) => `
            <div class="overview-trend-tooltip-row">
              <span class="overview-trend-tooltip-label"><i style="background:${row.color}"></i>${row.label}</span>
              <span>${row.value}</span>
              <span>${row.percent}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderLineChart(labels, series, colors, maxValue) {
  const width = 525;
  const height = 220;
  const left = 56;
  const right = 12;
  const top = 12;
  const bottom = 34;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const ticks = 4;
  const yLines = Array.from({ length: ticks + 1 }, (_, index) => {
    const value = maxValue - (maxValue / ticks) * index;
    const y = top + (plotHeight / ticks) * index;
    return { value, y };
  });

  const polyline = (values) =>
    values
      .map((value, index) => {
        const x = left + (plotWidth / (values.length - 1)) * index;
        const y = top + plotHeight - (value / maxValue) * plotHeight;
        return `${x},${y}`;
      })
      .join(" ");

  const dots = (values, color) =>
    values
      .map((value, index) => {
        const x = left + (plotWidth / (values.length - 1)) * index;
        const y = top + plotHeight - (value / maxValue) * plotHeight;
        return `<circle cx="${x}" cy="${y}" r="3" fill="${color}" stroke="#fff" stroke-width="2"></circle>`;
      })
      .join("");

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="chart">
      ${yLines
        .map(
          ({ value, y }) => `
            <line x1="${left}" y1="${y}" x2="${width - right}" y2="${y}" stroke="#eef2f7" stroke-dasharray="4 4"></line>
            <text x="${left - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="#98a2b3">${Math.round(value)}</text>
          `
        )
        .join("")}
      ${labels
        .map((label, index) => {
          const x = left + (plotWidth / (labels.length - 1)) * index;
          return `<text x="${x}" y="${height - 4}" text-anchor="middle" font-size="11" fill="#98a2b3">${label}</text>`;
        })
        .join("")}
      ${series
        .map(
          (values, index) => `
            <polyline fill="none" stroke="${colors[index]}" stroke-width="2" points="${polyline(values)}"></polyline>
            ${dots(values, colors[index])}
          `
        )
        .join("")}
    </svg>
  `;
}

function saveStrategy() {
  const form = state.form;
  const issues = validateStrategyForm(form);
  if (issues.length) {
    alert(`策略仍有待完善项：\n${issues.map((item, index) => `${index + 1}. ${item}`).join("\n")}`);
    return;
  }

  const payload = deepClone(form);
  delete payload.readOnly;

  if (state.mode === "create") {
    payload.id = uid();
    strategyStore.push(payload);
  } else {
    const index = strategyStore.findIndex((item) => item.id === state.sourceId);
    if (index >= 0) strategyStore[index] = { ...strategyStore[index], ...payload };
  }

  state.formSnapshot = snapshotStrategy(payload);
  closeModal();
  renderApp();
}

function optionHtml(options, current, emptyLabel = "") {
  return options
    .map((item) => {
      const label = item === "" ? emptyLabel : item;
      return `<option value="${item}" ${item === current ? "selected" : ""}>${label}</option>`;
    })
    .join("");
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function formatNumber(value) {
  return Number(value).toLocaleString("en-US");
}

function legendClassByColor(color) {
  if (color === "#2664ff") return "blue";
  if (color === "#f59e0b") return "orange";
  if (color === "#7c3aed") return "purple";
  return "red";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

initializePortraitWindowFromQuery();
renderApp();
