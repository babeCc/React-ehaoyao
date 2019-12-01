import styled from "styled-components"


export const Header = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    width:100%;
    height:0.38rem;
    background-color: #ff344d;
    text-align:center;
    line-height:0.38rem;
    color:white;
    font-size:.14rem;
    span{
        font-size:0.119rem;
    }
    span:nth-of-type(1){
        position: relative;
        i{
            position:absolute;
            background:white;
            color: #ff344d;
            width: .13rem;
            height: .13rem;
            line-height: .13rem;
            font-size: .1rem;
            font-style: normal;
            border-radius:50%;
            top:4px;
            right:-7px;
        }
    }
    .anticon-left{
        padding-right:0.1rem;
    }
    &>div{
        display:flex;
        align-items: center;
        justify-content:space-around;
        width:1.8rem;
        // padding-left:30px;
    }
`


export const Container = styled.div`
        position: absolute;
        width: 100%;
        top: 0.38rem;
        bottom: 0.38rem;
        height:auto;
        overflow:auto;
        background-color: #f5f5f5;
        .cart-list{
            padding-top:10px;
            background-color: #f5f5f5;
            font-size:0.119rem;
            .Top{
                padding:0 0.12rem;
                line-height:31px;
                display:flex;
                align-items: center;
                justify-content:space-between;
                // .selectAll{
                //     position:relative;
                //     width:0.14rem;
                //     height:0.14rem;
                //     border-radius:50%;
                //     border:1px solid rgb(211, 211, 211);
                //     display:inline-block;
                // }
                .selectAll{
                    .am-checkbox.am-checkbox-checked .am-checkbox-inner {
                        border-color:#ff344d;
                        background:#ff344d;
                    }
                    .am-checkbox{
                        width:0.14rem;
                        height:0.14rem;

                    }
                    .am-list-item {
                        padding-left: 2px;
                        min-height: 0px;
                    }
                    .am-list-thumb{
                        margin-right:0px;
                    }
                    .am-list-line{
                        padding-right:0px;
                    }
                    .am-checkbox-inner {
                        width:0.14rem;
                        height:0.14rem;
                        :after{
                            top: 0.5px;
                            right: 4.1px;
                            z-index: 999;
                            width: 3px;
                            height: 7px;
                        }
                    }
                   
                }
                .city{
                    margin-left:-38px;
                }
                .you{
                    font-size:0.102rem;
                    color: #ff344d;
                    margin-right:4px;
                }
                p{  
                    width: 0.4rem;
                    color: #ff344d;
                    margin-bottom:0
                    .anticon-right{
                       margin-left:3px;
                    }
                }
            }
           
        }
        .mainCart{
            ul{
                margin-bottom:0.07rem;
            }
           
            padding:0.1rem 0.12rem 0;
            li{
                padding-top:0.1rem;
                display:flex;
                align-items: center;
                justify-content:space-between;
                // padding-bottom: .133333rem;
                border-bottom: 1px solid #e5e5e5;
            }
            .selectEach{
                margin-top:-36px;
                .am-checkbox.am-checkbox-checked .am-checkbox-inner {
                    border-color:#ff344d;
                    background:#ff344d;
                }
                .am-checkbox{
                    width:0.14rem;
                    height:0.14rem;

                }
                .am-list-item {
                    padding-left: 2px;
                    min-height: 0px;
                }
                .am-list-thumb{
                    margin-right:0px;
                }
                .am-list-line{
                    padding-right:0px;
                }
                .am-checkbox-inner {
                    width:0.14rem;
                    height:0.14rem;
                    :after{
                        top: 0.5px;
                        right: 4.1px;
                        z-index: 999;
                        width: 3px;
                        height: 7px;
                    }
                }
            }
            .to {
                overflow: hidden;
                text-overflow: ellipsis;
                vertical-align: middle;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            li>img{
                width:0.64rem;
                vertical-align: top;
                margin-top:-35px;
                
            }

            .right{
                width:1.95rem;
            }
            h2{
                width:1.95rem;
                font-size:0.119rem;
                font-weight:normal;
                height:0.3rem;
                line-height:0.15rem;
                margin-bottom:0
               
            }
            h3{
                font-weight:normal;
                font-size: .1024rem;
                color: #999;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .number{
                display:flex;
                justify-content:space-between;
                padding-top:20px;
                padding-bottom:20px;
                p{
                    color: #ed4443;
                    font-size: .102rem;
                    span{
                        font-size: 0.134rem;
                    }
                }
                
            }
            .number>div{
                margin-top:-10px;

            }
            .pri{
                
                height:0.187rem;
                display: inline-flex;
                width: 0.7rem;
                align-items: center;
                background-color: #fff;
                border-radius: .03rem;
                border: 1px solid #e5e5e5;
                vertical-align: middle;
                
                
            }
            .number input{
                display:inline-block;
                width:0.29rem;
                height:100%;
                
                font-size: .1rem;
                color: #333;
                text-align: center;
                background-color: #f3f5f7;
                vertical-align: middle;
                border: 0;
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
            }
            .anticon-plus{
                width:0.194rem;
                text-align:center;
            }
            .anticon-minus{
                width:0.194rem;
                text-align:center;
            }
            .anticon-rest{
                padding-left:10px;
                margin-top:10px;
                
            }

        }
        .recommendWrapper>.title{
            text-align:center;
            line-height:0.21rem;
            font-weight: bolder;
            font-size: .12rem;
            color: #333;
            margin-bottom:0;
        }
        .recommendWrapper{
            
            .product{
                
                padding:3px 12px;
                background-color: #f5f5f5;
                height:auto;
                overflow:auto;
                p{
                    margin-bottom:0;
                }
                .to {
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                    /* width:100%; */
                }
            }
            .product ul{
                // padding-top:0.26rem;
                display:flex;
                flex-wrap:wrap
                li{
                    width:48%;
                    margin-top:0.08rem;
                    background:white;
                }
                li:nth-of-type(2n+1){
                    margin-right:0.1rem;
                }
                .borderimg{
                    background:white;
                }
                .image{
                    position: relative;
                    display: flex;
                    margin: 0 auto;
                    padding: .04rem 0;
                    width: 1.44rem;
                    height: 1.44rem;
                    align-items: center;
                    justify-content: center;
                    background:white;
                    img{
                        display: block;
                        width:100%
                    }
                }
                .content{
                    padding:0 0.08rem;
                }
                .content>p{
                    color: #898989;
                    line-height:0.10rem;
                    width:1.24rem;
                    height:0.153rem;
                    font-size:0.102rem;
                    span{
                        margin-right: .06rem;
                        display: inline-block;
                        width: .3rem;
                        height: .15rem;
                        line-height: .15rem;
                        text-align: center;
                        font-size: .1rem;
                        border-radius: .02rem;
                        color: #0075c1;
                        border: 1px solid #0075c1;
                    }
                    
                }
                .proPrice{
                    margin-top:0.19rem;
                    padding-bottom:0.04rem;
                    display:flex;
                    justify-content:space-between;
                    align-items: center;
                    p{
                        line-height: .16rem;
                        font-size: .136rem;
                        font-family: arial;
                        color: #ff344d;
                        vertical-align: middle;
                    }
                    .p2{
                        font-size: .102rem;
                        text-decoration: line-through;
                        color: #9a9a9a;
                    }
                    h2{
                        display:inline-block;
                        width: .153rem;
                        height: .153rem;
                        font-weight:normal;
                        background:#ff344d;
                        border-radius:30%;
                        text-align:center;
                        line-height:.12rem;
                        font-size:0.14rem;
                        color:rgb(233, 233, 233);
                        margin-bottom:0;
                        margin-top:0.04rem;
        
                    }
                }
                
                
            }

        }
        .cart-footer{
            position: fixed;
            width:100%;
            bottom: 0.4rem;
            background-color:pink;
            z-index: 2;
            display:flex;
            align-items: center;
            justify-content:space-between;
            height:0.4rem;
            
            p{
                padding-left:0.12rem;
                font-size: .102rem;
                span{
                    font-size: .12rem;
                }
                margin-bottom:0;
            }
            h5{
                display:inline-block;
                width:0.96rem;
                height:100%;
                text-align:center;
                line-height:0.4rem;
                background-color: #ff344d;
                color: #fff;
                margin-bottom:0;
            
            }
                
        }
        
        
   
`