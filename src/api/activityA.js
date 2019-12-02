import Http from "utils/request";

export const activityApi = (coonType="5",cityId="027")=>Http.get({
    url:"/api/mds/api/app/apiv3_0/getBuyingGoodsMSite.json",
    data:{
        coonType: coonType,
        cityId: cityId
    }
})
export const activityListApi = (goodsId="843041")=>Http.get({
    url:"/api/mds/api/app/apiv3_0/listBuyingGoodsBySceneIdMSite.json",
  data:{
    sceneId: "781",
    goodsId: goodsId,
    coonType: "5",
    cityId: "027",
  }
})

//问好药师
export const doctorApi = (connType="5",cityId="027")=>Http.get({
    url:"/api/mds/api/app/apiv3_0/consultDoctor.json",
    data:{
        coonType: "5",
        cityId: "027"
    }
})

//模糊查询关键字

export const goodsKeysApi = (connType="5",cityId="027")=>Http.get({

    url:"/api/mobile/goodsKeys/listXSKeys.json",
    data:{
        coonType: "5",
        cityId: "027"
    }
})

//模糊查询
export const searchApi= (name,connType="5",cityId="027")=>Http.get({
    url:"/api/bigdata/search.json",
    data:{
        name:name,
        coonType: connType,
        cityId: cityId,
       
    }
})

//列表页

export const listApi = (connType="5",cityId="027") =>Http.get({
    url:"/api/mds/api/app/apiv2_4/thirdLevelCategorynew.json",
    data:{
        connType:connType,
        cityId:cityId
    }
})

//功能很多的页面 

export const sortApi = (id=845) =>Http.get({
    url:"/api/mds/api/app/apiv3_0/GoodsListByKeywordPc.json",
    data:{
        isSelf:"",
        isStore: 0,
        type: 1,
        descs: "",
        cid: id,
        searchGoodsBrief:"", 
        page: 1,
        rows: 10,
        brandId:"",
        plngLat:"114.19683,30.54626",
        memberId:"", 
        wordType: "cats_id",
        coonType: 5,
        cityId: "027"
    }
})
//获取link
export const linkApi = (link,connType="5",cityId="027") =>Http.get({
    url:"/api/convert/selectNewByOldThreeType",
    data:{
        link:link,
        connType:connType,
        cityId:cityId
    }
})
//详情页
export const detailApi = (goodsId)=>Http.get({
    url:"/api/mds/api/app/apiv3_0/goodsBaseInfoMsite.json",
    data:{
  
        groupId: goodsId,
        memberId:"",
        pharmacyId: "25",
        coonType: 5,
        cityId: "027"
    }
})

