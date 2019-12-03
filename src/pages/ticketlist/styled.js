import styled from "styled-components";

export const TicketListContainer = styled.div`
    padding-bottom:.5rem;
    
    .on {
    color: #ff344d;
    border-bottom: .015rem solid #ff344d;
        }
    .search_header{
        top:0;left:0;right:0;
        position:fixed;
        padding:0 10px;
        color:#fff;
        height:.37rem;
        background:#ff344d;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .left{
            font-size:20px;
            line-height:.36rem
        }
        .input{
            img{
                width:20px;
            }
            display:flex;
            justify-content:center;
            align-items:center;
            height:.26rem;
            background:#fff;
            input{
                border:none;
                color: #898989;
            }
        }
    }
    .couponProduct-wrapper{
        position: absolute;
        width: 100%;
        top: .37rem;
       
        overflow: auto;
        .sort-wrapper{
            font-size:12px;
            display: flex;
            height: .35rem;
            justify-content: space-around;
            border-bottom: 1px solid #dadada;
            background-color: #fff;
            line-height:.35rem;
            position:fixed;
            top:.37rem;
            left:0;
            right:0px;
            li{

                padding:0 0.09rem;
                span{
                    position: relative;
                }
                span{
                    .top{
                        position:absolute;
                        top:-.04rem;
                        border:solid 5px transparent;
                        border-bottom-color:#000;
                        left:.05rem;
                    }
                    .bottom{
                       
                        position:absolute;
                        top:.08rem;
                        border:solid 5px transparent;
                        border-top-color:#000;
                        left:.05rem;
                    }
                }
               
            }

        }
    }
    .content{
        .noresult{
            margin:0 .3rem;
            margin-bottom: .08rem;
            line-height: .16rem;
            font-size: .13rem;
            color: #898989;
           
        }
        a{
                display: block;
                margin:.18rem auto 0;
                width: 1.88rem;
                height: .3rem;
                line-height: .3rem;
                text-align: center;
                border: 1px solid #ff344d;
                border-radius: .04rem;
                color: #ff344d;
                font-size: .13rem;
                background-color: #fff;
                text-decoration: none;
            }
        padding-top:.72rem;
        ul{
            li{
               
                display: flex;
                margin-top: .08rem;
                padding: 0 .16rem .08rem;
                justify-content: space-between;
                background-color: #fff;
                overflow: hidden;
                .img{
                   
                    margin-top: .09rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        height:.85rem;
                        width:.85rem;
                    }
                }
                .right{
                    margin-top: .08rem;
                        width: 1.96rem;
                        .product-name {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            text-overflow: ellipsis;
                            height: .34rem;
                            line-height: .18rem;
                            font-size: .12rem;
                            color: #181818;
                            overflow: hidden;
                            .label {
                                margin-right: .04rem;
                                
                                width: .26rem;
                                height: .13rem;
                                line-height: .13rem;
                                text-align: center;
                                font-size: .1rem;
                                border-radius: .02rem;
                                color: #92c876;
                                border: 1px solid #92c876   ;
                            }
                        }
                        .desc{
                            height: .16rem;
                            font-size: .11rem;
                            color: #898989;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        .specification {
                            height: .16rem;
                            font-size: .11rem;
                            color: #898989;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        .promotions {
                            margin-top: .07rem;
                            display: flex;
                            height: .2rem;
                            align-items: center;
                            overflow: hidden;
                        }
                        .otherInfo {
                            margin-top: .04rem;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            width: 100%;
                            height: .24rem;
                            .price {
                                display: inline-flex;
                                padding: 0 .05rem 0 .09rem;
                                justify-content: space-between;
                                align-items: center;
                                width:1.5rem;
                                background-color: #f2f2f2;
                                border-radius: .08rem;
                                height: .24rem;
                                .sell-price {
                                    margin-left: -0.01rem;
                                    font-size: .13rem;
                                    color: #ff344d;
                                    font-family: arial;
                                    vertical-align: middle;
                                }
                                .old-price {
                                    font-size: .12rem;
                                    text-decoration: line-through;
                                    color: #9a9a9a;
                                }
                            }
                            .btn-cart{
                                width:.24rem;
                                height:.24rem;
                                background:#ff344d;
                                color:#fff;
                                font-size:20px;
                                line-height:.24rem;
                                text-align:center;
                                border-radius:5px;
                            }
                        }
                }
            }
        }
    }
`