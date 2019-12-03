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
    .header_box{
        .mask{
            background:rgba(0,0,0,.5);
            position:fixed;
            top:.38rem;
            left:0;
            right:0;
            bottom:0;
            z-index:99;
        }
        .menu_list{
            
            top:.56rem;
            position:absolute;
            right:.05rem;
            z-index:200;
           
            ul{
            background:#fff;
            border-radius:.05rem;
            li{
                padding:.1rem .5rem ;
                border-bottom: 1px solid #c1c1c1;
            }
          }
        }
        .menu_list::before{
                content:"";
                z-index:200;
                top:-0.2rem;
                right:0;
                right:.32rem;
                position:absolute;
                 width:0;
                
                border:solid 10px transparent;
                border-bottom-color: #fff;
           
        }
    }
    .anticon-left{
        padding-right:0.1rem;
    }
    .anticon-search{
        margin-right:-0.1rem;
        
    }
    .anticon-search{
        font-size:15px;

    }
    &>div{
        display:flex;
        align-items: center;
        justify-content:space-around;
        width:1.8rem;
        padding-left:30px;
    }
    span{
        font-size:0.136rem;

    }
    .anticon-dash{
        margin-right:8px;
    }
`
export const Container=styled.div`
    position: absolute;
    width: 100%;
    top: 0.38rem;
    bottom: 0.38rem;
    height:auto;
    overflow:auto;
    background-color: #f5f5f5;
    .HTML{
        img{
            width:3.2rem;
        }
    }
    p{
        margin-bottom:0
        
    }
  
    .gallery-container{
        background:white;
        height:auto;
        overflow:hidden;
        padding-bottom:0.4rem;
        .bannerimg{
            width:2.3rem;
            height:2.3rem;
            margin:0 auto;
            background:white;
            padding:0.4rem 0;
            img{
                width:100%;
            }
        }

    }
    .menu-list{
        background:white;
        padding:0.2rem 0.1rem 0 0.12rem;
    }
    .main-title{
        font-family: arial;
        display:flex;
        align-items: center;
        justify-content:space-around;
        
        text-align:center;
    }
    .main-title p:nth-of-type(1){
        line-height: 0.4rem;
        font-size: .20rem;
        color: #ed4443;
        i{
            font-size: 0.136rem;
            font-style:normal;
            padding-right:3px;
        }
        span{
            font-size: 0.119rem;
        }

    }
    .main-title p:nth-of-type(2){
        text-align:left;
        margin-left: .01rem;
        font-size: .11rem;
        color: #999;
        text-decoration: line-through;
        flex:1;
        padding-left:4px;
        padding-top:4px

    }
    .main-title p:nth-of-type(3){
        width:0.3rem;
        // margin-left: .01rem;
        font-size: .096rem;
        span{
            width:0.3rem;
            display:inline-block;
        }

    }
    .main-title p:nth-of-type(4){
        width:0.3rem;
        margin-left: .1rem;
        font-size: .096rem;
        span{
            width:0.3rem;
            display:inline-block;
        }
    }
    .main-info{
        background:white;
        padding-top:5px;
        p{  
            color:black;
            font-size:0.136rem;
            span{
                display:inline-block;
                padding:.5px 3px;
                font-size:0.01rem;
                color:white;
                background:rgb(12, 85, 187);
                border-radius:10%;
                margin-right:4px;
            }
            
        }
        
    }
    .main-info h5{
        font-size:0.11rem;
        color:#898989;
        padding-top:5px;

    }
    .spec-info{
       
        line-height:0.32rem;
        background:white;
        display:flex;
        justify-content:space-between;
        font-size:0.1rem;
        margin:.076rem 0;
        span:nth-of-type(1){
            color: #828282;
        }
    }
    .recommend>p{
        font-size:0.1rem;
        line-height: .3rem;
        border-bottom: .004rem solid #e5e5e5;
        padding-left: .1rem;

    }
    .recommend-item{
        height:auto;
        overflow:hidden;
        padding:0.1rem;
        border-bottom: 1px solid #e5e5e5;
        img{
            width: 0.5rem;
            height: 0.5rem;
            float:left;
        }
        div{
            float:left;
            font-size:0.1rem;
            padding-left:0.08rem;
            
            h5{
                font-size:0.1rem;
                margin-top: .02rem;
            }
            i{
                font-style:normal;
                color: #999;
                margin-top: .02rem;
            }
            p{
                color: #ff344d;
                span{   
                    margin-left: .02rem;
                    font-size: .13rem;

                }
                
            }
        } 
    }
    .pharmacy-box{
        line-height:0.32rem;
        background:white;
        display:flex;
        justify-content:space-between;
        font-size:0.1rem;
        margin-top:.076rem;
        border-bottom: 1px solid #e5e5e5;
        span:nth-of-type(1){
            color: #828282;
        }

    }
    .promise-box{
        margin-bottom:0;
        display:flex;
        justify-content:space-around;
        line-height: .31rem;
        font-size: .11rem;
        color: #f40940;
        li .anticon-check-circle{
            padding-right:2px;
        }

    }
    .recommendWrapper{
        .to {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: middle;
            /* width:100%; */
        }
        font-size: 0.096rem;
        .tabTitle{
            p{
                display:flex;
                justify-content:center;
                font-size: .119rem;
                border-bottom: 1px solid #e5e5e5;


            }
            span{
                line-height: 0.4rem;
                width:50%;
                text-align:center;
            }
        }
        .tabContent{
            height:auto;
            overflow:hidden;
            li{
                padding: 0 .11rem;
                width:33.3%;
                float:left;
            }
            li>img{
                width:100%;
            }
            h5{
                width:0.85rem;
                height:0.21rem;
            }
            li>div{
                padding-top:0.17rem;
                display:flex;
                justify-content:space-between;
                span{
                    font-size:0.10rem;
                    color: #ed4443;

                }

            }
            h2{
                display:inline-block;
                width: .15rem;
                height: .15rem;
                font-weight:normal;
                background:#ff344d;
                border-radius:30%;
                text-align:center;
                line-height:.13rem;
                font-size:0.15rem;
                color:rgb(233, 233, 233);
                margin-bottom:0;

            }
        }
        
    }
    .goods_2{
        .details-nav{
            p{
                display:flex;
                justify-content:center;
                font-size: .119rem;
                border-bottom: 1px solid #e5e5e5;
            }
            span{
                line-height: 0.4rem;
                width:50%;
                text-align:center;
            }
            span:nth-of-type(1){
                border-right: 1px solid #e5e5e5;
            }
        }
        .details h4{
            font-size: .102rem;
            line-height:0.136rem;

        }
        .details ul li{
            width:100%;
            img{
                width:100%;
            }
        }
    }

`
export const Footer=styled.div`
background:white;
    width:100%;
    position:fixed;
    bottom:0;
    font-size:0.096rem;
    color:#999;
    border-top: 1px solid #e5e5e5;
    ul{
        height:auto;
        overflow:hidden;
        margin-bottom:0;
    }
    a{
            color:#999;
        }
    li{
       
        cursor: pointer;
        border-right: 1px solid #e5e5e5;
        float: left;

        display: inline-flex;
        width: 16%;
        height: 0.4rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .addCart{
        width:26%;
        font-size:0.12rem;
        color: #ff344d;
        border:0;
    }
    .rightPerchase{
        font-size:0.12rem;
        border:0;
        color:white;
        width:26%;
        background:#ff344d;

    }
 



`