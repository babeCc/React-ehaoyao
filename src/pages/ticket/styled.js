import styled from "styled-components";

export const TicketContainer = styled.div`
    overflow:hidden;
    font-size:12px;
    padding-top:.37rem;
    background:#ededed;
    .coupon-code-box{
        display: flex;
        
        margin-bottom:.09rem;
        width: 3rem;
        height: .3rem;
        align-items: center;
        background-color: #fff;
        border-radius: .05rem;
    }
    .ticket_content{
       margin:.1rem .1rem  0 .1rem;
        input{
            flex: 1;
            height: .3rem;
            border: 0;
            text-indent: .09rem;
            font-size: .1rem;
        }
        .btn_active{
            display: inline-flex;
            width: .5rem;
            height: .3rem;
            align-items: center;
            justify-content: center;
            font-size: .12rem;
            color: #fff;
            background-color: #ff344d;
            border-radius: .04rem;
        }
        ul{
        li{
            display: flex;
            margin-bottom: .1rem;
            width: 100%;
            height: .78rem;
            background-color: #fff;
            border-radius: .04rem;
            overflow:hidden;
            .left{
                border-right:5px dashed #ededed;
                padding: .07rem .13rem;
                    width: 2rem;
                    .c-title {
                        display: flex;
                        height: .16rem;
                        font-size: .11rem;
                        color: #494949;
                        overflow: hidden;
                        .icon-type {
                            margin-right: .09rem;
                            display: inline-flex;
                            justify-content: center;
                            align-items: center;
                            width: .5rem;
                            font-size: .1rem;
                            color: #3782ed;
                            border: 1px solid #3782ed;
                            border-radius: .1rem;
                        }
                        .blue{
                            color: #3782ed;
                            border-color: #3782ed;
                        }
                        .content {
                            flex: 1;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                    }
                    .c-use-condition {
                        height: .15rem;
                        line-height: .15rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-top: .03rem;
                        font-size: .10rem;
                        color: #868487;
                    }
                    .c-user-time {
                        font-size: .1rem;
                        color: #a5a5a5;
                        height: .15rem;
                        line-height: .15rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    .c-use-money {
                        margin-top: .03rem;
                        height: .16rem;
                        font-size: .1rem;
                        color: #ff344d;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
            }
            .right{
                
                flex: 1;
                padding-top: .15rem;
                padding-left: .07rem;
                .coupon-money {
                    width: 100%;
                    height: .27rem;
                    font-size: .12rem;
                    color: #ff344d;
                    text-align: center;
                    .num {
                        font-size: .22rem;
                    }
                }
                 .btn-get {
                    
                        margin: .07rem auto 0;
                        width: .6rem;
                        color: #fff;
                        background-color: #ff344d;
                        border-radius: .13rem;
                        height: .17rem;
                        line-height: .17rem;
                        text-align: center;
                        font-size: .10rem;
                    }
                }
                .product-canuse-list{
                    height: .17rem;
                    width: .6rem;
                    line-height: .17rem;
                    text-align: center;
                    font-size: .1rem;
                 
                  display:flex;
                  justify-content:space-between;
                   
                    color: #ff344d;
                    font-weight: 300;
                   
                   
                    
                    span{
                        background:#ff344d;
                        color:#fff;
                        border-radius:50%;
                       padding:0 .03rem;
                       text-align:center;
                      
                      
                        
                    }
                }
                }
            }
        }
        
    
    
`