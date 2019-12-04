import styled from "styled-components"



export const Header = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:0.38rem;
    background-color: #ff344d;
    text-align:center;
    line-height:0.38rem;
    color:white;
    font-size:.14rem;
    .anticon-left{
        padding-right:0.1rem;
    }
    .anticon-search{
        padding:0 0.06rem;
    }
    &>div{
        border-radius: .02rem;
        display:flex;
        align-items: center;
        width:2.44rem;
        height:0.24rem;
        background:white;
        color: #898989;
    }
    span{
        font-size:0.12rem;
    }
    .anticon-pic-right{
        margin-left:8px;
    }
`
export const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 0.38rem;
    bottom: 0.38rem;
    height:auto;
    overflow:auto;
    font-size:0.12rem;
    background:#ededed;
    p{
        margin-bottom:0;
    }
    .navTop{
        height:auto;
        width:100%;
        overflow:hidden;
        z-index:999
    }
    .navTop ul{
        z-index:999;
        width:100%;
        position:fixed;
        top:0.38rem;
        display:flex;
        justify-content:space-around;
        align-items: center;
        height:0.307rem;
        border-bottom: 1px solid #dadada;
        background-color: #fff;
        margin-bottom:0;
        li{
            height:100%;
            padding:0 0.085rem;
            line-height:29.7px;
        }
        span{
            position:relative
            
        }
        .anticon-caret-up{
            position:absolute;
            left:0.02rem;
        
        }
        .anticon-caret-down{
            position:absolute;
            top:0.06rem;
            left:0.02rem;
        }
        .active{
            border-bottom:.02rem solid #ff344d;
        }

    }
    .product{
        
        padding:3px 12px;
        background-color: #f5f5f5;
        height:auto;
        overflow:auto;
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
        padding-top:0.26rem;
        display:flex;
        flex-wrap:wrap
        li{
            width:48%;
            border: 1px solid #d0d0d0;
            margin-top:0.08rem;
            
            
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
            width: 1rem;
            height: 1rem;
            align-items: center;
            justify-content: center;
            background:white;
            img{
                display: block;
                width: 0.92rem;
                height: 0.92rem;
            }
        }
        .content{
            padding:0.08rem;
        }
        .content>p{
            color: #898989;
            line-height:0.10rem;
            width:1.24rem;
            height:0.153rem;
            font-size:0.11rem;
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
            margin-top:0.52rem;
            display:flex;
            justify-content:space-between;
            align-items: center;
            p{
                line-height: .16rem;
                font-size: .13rem;
                font-family: arial;
                color: #ff344d;
                vertical-align: middle;
            }
            .p2{
                font-size: .12rem;
                text-decoration: line-through;
                color: #9a9a9a;
            }
            h2{
                display:inline-block;
                width: .24rem;
                height: .24rem;
                font-weight:normal;
                background:#ff344d;
                border-radius:30%;
                text-align:center;
                line-height:.19rem;
                font-size:0.22rem;
                color:rgb(233, 233, 233);
                margin-bottom:0;

            }
        }
        
        
    }
    

    

`