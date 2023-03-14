const urls = [
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_baidu.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://www.baidu.com/",
        "linkName": "百度"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_resou.png",
        "linkType": 2,
        "isEntertainment": true,
        "address": "https://s.weibo.com/top/summary?cate=realtimehot",
        "linkName": "微博热搜"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_itzhijia.png",
        "linkType": 2,
        "isEntertainment": true,
        "address": "https://ithome.com/",
        "linkName": "IT之家"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_bing.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "http://cn.bing.com/",
        "linkName": "Bing搜索"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_bingfanyi.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "http://cn.bing.com/translator/",
        "linkName": "Bing翻译"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_gaodeditu.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://www.amap.com/",
        "linkName": "高德地图"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_zaixiangongju.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://tool.lu/",
        "linkName": "在线工具"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_xuexinwang.png",
        "linkType": 8,
        "isEntertainment": false,
        "address": "https://www.chsi.com.cn/",
        "linkName": "学信网"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_yanzhaowang.png",
        "linkType": 8,
        "isEntertainment": false,
        "address": "https://yz.chsi.com.cn/",
        "linkName": "研招网"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_taobao.png",
        "linkType": 1,
        "isEntertainment": true,
        "address": "https://www.taobao.com/",
        "linkName": "淘宝"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_jingdong.png",
        "linkType": 1,
        "isEntertainment": true,
        "address": "https://www.jd.com/",
        "linkName": "京东"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_weibo.png",
        "linkType": 1,
        "isEntertainment": true,
        "address": "https://weibo.com/",
        "linkName": "微博"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_tianmao.png",
        "linkType": 1,
        "isEntertainment": true,
        "address": "https://www.tmall.com/",
        "linkName": "天猫"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_aiqiyi.png",
        "linkType": 4,
        "isEntertainment": true,
        "address": "http://www.iqiyi.com/",
        "linkName": "爱奇艺"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_youku.png",
        "linkType": 4,
        "isEntertainment": true,
        "address": "https://www.youku.com/",
        "linkName": "优酷"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_tengxunshipin.png",
        "linkType": 4,
        "isEntertainment": true,
        "address": "https://v.qq.com/",
        "linkName": "腾讯视频"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_bilibili.png",
        "linkType": 4,
        "isEntertainment": true,
        "address": "https://www.bilibili.com/",
        "linkName": "Bilibili"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_douyu.png",
        "linkType": 4,
        "isEntertainment": true,
        "address": "https://www.douyu.com/",
        "linkName": "斗鱼"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_wangyiyun.png",
        "linkType": 4,
        "isEntertainment": true,
        "address": "https://music.163.com/",
        "linkName": "网易云音乐"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_bdfilm.png",
        "linkType": 7,
        "isEntertainment": true,
        "address": "https://www.bd2020.com/",
        "linkName": "BD影视"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_dianyingtiantang.png",
        "linkType": 7,
        "isEntertainment": true,
        "address": "https://www.dytt8.net/",
        "linkName": "电影天堂"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_xiecheng.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://www.ctrip.com/",
        "linkName": "携程"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_feizhu.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://www.fliggy.com/",
        "linkName": "飞猪"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_12306.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://www.12306.cn/index/",
        "linkName": "12306"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_bosszhipin.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://www.zhipin.com/",
        "linkName": "Boss直聘"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_qqyouxiang.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://mail.qq.com/",
        "linkName": "QQ邮箱"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_office.png",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://www.office.com/",
        "linkName": "Office"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_github.png",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://github.com/",
        "linkName": "GitHub"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_w3school.png",
        "linkType": 6,
        "isEntertainment": false,
        "address": "http://www.w3school.com.cn/",
        "linkName": "W3school"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_aliyun.png",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://www.aliyun.com/",
        "linkName": "阿里云"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_tengxunyun.png",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://cloud.tencent.com/",
        "linkName": "腾讯云"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_alitubiaoku.png",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://www.iconfont.cn/",
        "linkName": "阿里图标库"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_bmob.png",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://www.bmob.cn/",
        "linkName": "Bmob"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_huanxin.png",
        "linkType": 6,
        "isEntertainment": false,
        "address": "http://www.easemob.com/",
        "linkName": "环信"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_renminwang.png",
        "linkType": 3,
        "isEntertainment": true,
        "address": "http://www.people.com.cn/",
        "linkName": "人民网"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_coding.png",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://coding.net/",
        "linkName": "Coding"
    },
    {
        "linkIcon": "https://image.dustray.cn/vicold/web_icon/32px/ic_huya.png",
        "linkType": 4,
        "isEntertainment": true,
        "address": "https://www.huya.com/",
        "linkName": "虎牙"
    },
    {
        "linkIcon": "https://next.itellyou.cn",
        "linkType": 7,
        "isEntertainment": false,
        "address": "http://msdn.itellyou.cn/",
        "linkName": "ITellYou"
    },
    {
        "linkIcon": "",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://www.json.cn/",
        "linkName": "Json校验"
    },
    {
        "linkIcon": "",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://netease.im/",
        "linkName": "网易云信"
    },
    {
        "linkIcon": "",
        "linkType": 5,
        "isEntertainment": false,
        "address": "https://www.deepl.com/translator",
        "linkName": "DeepL翻译"
    },
    {
        "linkIcon": "",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://gitee.com/",
        "linkName": "码云"
    },
    {
        "linkIcon": "",
        "linkType": 6,
        "isEntertainment": false,
        "address": "https://iconpark.bytedance.com/official",
        "linkName": "IconPark"
    },
    {
        "linkIcon": "",
        "linkType": 6, 
        "isEntertainment": false,
        "address": "https://my.vultr.com/",
        "linkName": "Vultr"
    },
    {
        "linkIcon": "",
        "linkType": 4,
        "isEntertainment": true,
        "address": "https://www.douyin.com/",
        "linkName": "抖音"
    }
]