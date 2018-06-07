export default {
    "list": [{
        "key": "dispatch",
        "icon": "logout",
        "title": "水库调度",
        "children": [{
            "key": "/dispatch/make",
            "name": "方案制作"
        },{
            "key": "/dispatch/administration",
            "name": "方案管理"
        },{
            "key": "/dispatch/contrast",
            "name": "方案对比"
        }]
    },{
        "key": "prediction",
        "icon": "line-chart",
        "title": "洪水预报",
        "children": [{
            "key": "/prediction/programManagement",
            "name": "模型方案管理"
        },{
            "key": "/prediction/jobForecast",
            "name": "实时作业预报"
        },{
            "key": "/prediction/resultManagement",
            "name": "预报结果管理"
        }]
    },{
        "key": "settinglist",
        "icon": "appstore-o",
        "title": "配置列表",
        "children": [{
            "key": "/settinglist/objectSetting",
            "name": "对象配置"
        },{
            "key": "/settinglist/moduleSetting",
            "name": "模块配置"
        },{
            "key": "/settinglist/modelSetting",
            "name": "模型配置"
        }]
    }]
}