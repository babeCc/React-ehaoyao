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