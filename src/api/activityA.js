import Http from "utils/request";

//登录注册

export const registerApi = (username,password)=>Http.post({
    url:"/users/register",
    method:"post",
    data:{
        username,
        password
    }

})

export const loginApi = (username,password)=>Http.post({
    url:"/users/login",
    method:"post",
    data:{
        username,
        password  
    }
})
//限时抢购
export const activityApi = (coonType = "5", cityId = "027") => Http.get({
    url: "/api/mds/api/app/apiv3_0/getBuyingGoodsMSite.json",
    data: {
        coonType: coonType,
        cityId: cityId
    }
})
export const activityListApi = (goodsId = "843041") => Http.get({
    url: "/api/mds/api/app/apiv3_0/listBuyingGoodsBySceneIdMSite.json",
    data: {
        sceneId: "781",
        goodsId: goodsId,
        coonType: "5",
        cityId: "027",
    }
})

//问好药师
export const doctorApi = (connType = "5", cityId = "027") => Http.get({
    url: "/api/mds/api/app/apiv3_0/consultDoctor.json",
    data: {
        coonType: "5",
        cityId: "027"
    }
})

//模糊查询关键字

export const goodsKeysApi = (connType = "5", cityId = "027") => Http.get({

    url: "/api/mobile/goodsKeys/listXSKeys.json",
    data: {
        coonType: "5",
        cityId: "027"
    }
})

//模糊查询
export const searchApi = (name, connType = "5", cityId = "027") => Http.get({
    url: "/api/bigdata/search.json",
    data: {
        name: name,
        coonType: connType,
        cityId: cityId,

    }
})

//列表页

export const listApi = (connType = "5", cityId = "027") => Http.get({
    url: "/api/mds/api/app/apiv2_4/thirdLevelCategorynew.json",
    data: {
        connType: connType,
        cityId: cityId
    }
})

//功能很多的页面 

export const sortApi = (id=845,page=1) =>Http.get({
    url:"/api/mds/api/app/apiv3_0/GoodsListByKeywordPc.json",
    data:{
        isSelf:"",
        isStore: 0,
        type: 1,
        descs: "",
        cid: id,
        searchGoodsBrief:"", 
        page: page,
        rows: 10,
        brandId: "",
        plngLat: "114.19683,30.54626",
        memberId: "",
        wordType: "cats_id",
        coonType: 5,
        cityId: "027"
    }
})
//获取link
export const linkApi = (link, connType = "5", cityId = "027") => Http.get({
    url: "/api/convert/selectNewByOldThreeType",
    data: {
        link: link,
        connType: connType,
        cityId: cityId
    }
})
//详情页
export const detailApi = (goodsId) => Http.get({
    url: "/api/mds/api/app/apiv3_0/goodsBaseInfoMsite.json",
    data: {

        groupId: goodsId,
        memberId: "",
        pharmacyId: "25",
        coonType: 5,
        cityId: "027"
    }
})
//领券
export const ticketApi = ()=>Http.get({
    url:"/api/mds/api/app/apiv3_0/getGivingCoupons.json",
    data:{
        pharmacyId: 25,
        coonType: 5
    }
})

export const getApi = (Id) =>Http.get({
    url:"/api/mobile/memberCoupon/getMemberCouponByCouponId.json",
    data:{
        couponId:Id,
        coonType:5
    }
})

//购物车推荐
export const cartCommandApi = (page_no=1) => Http.post({
    url: "/front_api/recommend/order-cart",
    method:"post",
    data: {
       data:{ cityId: "027",
       coonType: "5",
       make_up: true,
       page_no:page_no,
       page_size: 6,
       type: "default",
       user_id: "PAlBQ1hbAK40ctxtHUo0geJYm5y0RK1A"  }
      }
})


export const ticketListApi = (id) =>Http.get({
    url:"api/mds/api/app/apiv3_0/goodsPmtList.json",
    data:{
        couponId: id,
        pharmacyId: 25,
        page: 1,
        rows: 5,
        type: 1,
        descs:"",
        longitude: 114.19683,
        latitude: 30.54626,
        isB2cGoods: 1,
        coonType: 5,
        cityId: "027"
    }
})
