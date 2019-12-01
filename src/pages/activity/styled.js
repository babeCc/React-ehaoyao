import styled from "styled-components"
export const ActivityContainer = styled.div`
    padding-top:.4rem;
    background:#ededed;
    font-size:12px;
    color: #181818;
    .content_banner{
        img{
            width:320px;
           
        }
    }
    .countdown{
        background-color: #fff;
        font-size:12px;
        padding:5px 10px;
       display:flex;
       justify-content:space-between;
       align-items:center;
       border-bottom:1px solid #e5e5e5;
       margin-bottom:5px;
        .time_title{
            color:#ff3c54;
            
        }
    }
    .seckill-list{
        li{
            display: flex;
            margin-bottom: 5px;
            padding: 9px 12px 0;
            width: 100%;
            height: 110px;
            background-color: #fff;
            justify-content: space-between;
            .img{
                img{
                    width:86px;
                }
            }
            .right{
                display: inline-flex;
                flex-flow: column;
                justify-content: space-between;
                width: 1.93rem;
                padding-bottom: .85rem;
                div{
                    .p-name{
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        vertical-align: text-bottom;
                     
                        line-height: .2rem;
                        
                        color: #181818;
                        overflow: hidden;
                    }
                    .p-specifications{
                        color: #898989;
                    }
                }
                div{
                    .has-sale{
                        display: flex;
                        height: .22rem;
                        font-size: .1rem;
                        color: #4e4e4e;
                        align-items: center;
                        .progress-bar {
                            display: inline-flex;
                            margin-left: .06rem;
                            padding: .01rem .03rem;
                            width: .7rem;
                            height: .08rem;
                            border: 1px solid #ffa7b8;
                            border-radius: .266667rem;
                            align-items: center;
                            .percentage{
                                display: inline-block;
                               
                                height: .06rem;
                                background-color: #ffa7b8;
                                border-radius: .04rem;
                            }
                        }
                    }
                    .opt{
                        display: flex;
                        height: .24rem;
                        justify-content: space-between;
                        align-items: center;
                        overflow: hidden;
                        .price {
                            flex: 1;
                            font-size: .16rem;
                            color: #ff344d;
                            .old-price{
                                padding-left: .15rem;
                                font-size: .10rem;
                                color: #9a9a9a;
                                text-decoration: line-through;
                            }
                        }
                        .price>i {
                            font-size: .12rem;
                            font-style: normal;
                        }
                        .btn_base {
                            display: inline-block;
                            width: .64rem;
                            height: .23rem;
                            line-height: .23rem;
                            text-align: center;
                            font-size: .11rem;
                            background-color: #ff344d;
                            color: #fff;
                            border-radius: .03rem;
                        }
                    }
                }
            }
        }
    }
`