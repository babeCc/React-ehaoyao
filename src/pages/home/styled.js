import styled from "styled-components";


export const HomeContainer = styled.div`
    #home{
 
  padding-bottom:50px;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  overflow-y:auto;
  padding-top: 40px;
 
    }
`
export const HomeContentContainer = styled.div`
    .content_goods{
        img{
            width:1.45rem;

        }
        background:#fff;
        margin-bottom:.1rem;
            .content_title{
                height: .5rem;
                line-height: .5rem;
                text-align: center;
                font-size: .16rem;
                
            }
            .content{
                padding:0 .15rem;
              display:flex;
                justify-content:center;
            }
    }
    .bottom_box{
        img{
            display:block;
            margin:.1rem auto;
            
        }
    }
    .home_content{
        overflow-x:hidden;
        background-color: #ededed;
       .content_promise{
           ul{
               background:#fff;
               display:flex;
               justify-content:space-around;
             
               align-items:center;
               li{  display:flex;
                align-items:center;
                    height:.3rem;
                    font-size:12px;
                    img{
                        
                        width:.15rem;
                    }
               }
           }
           
       }
       .content_list{
           ul{
            background:#fff;
            display:flex;
            justify-content:space-around;
            align-items:center;
            text-align:center;
                
               flex-wrap:wrap;
                font-size:12px;

               li{
                   width:25%;
                  
                   img{
                       margin:.05rem;
                       width:.38rem;
                   }
                   p{
                    margin:.05rem;
                   }
               }
           }
       }
       .little_banner{

           height:30px;
            margin:5px 10px;
            background:#fff;
           display:flex;
           justify-content:space-around;
           align-items:center;
           .img_container{
              img{
                  width:80px;
                  
              }
           }
           .swiper-wrapper{
                overflow:hidden;
               a{
                   line-height:30px;
                   font-size:14px;
                   color:#000;
               }
           }
       }
       .content_time{
        background:#fff;
           .time_container{
            
            display:flex;
            justify-content:space-around;
            padding:0 10px;
            font-size:12px;
           }
       
         
        img{
            width:.50rem;
            height:.16rem;
            margin-right:10px;
        }
        .activity_more{
            color:#ff344d;
            font-weight:bold;
           
        }
        .activity_goods{
            height:130px;
            overflow:auto;
            overflow-y:hidden;
            margin-bottom:.1rem;
            ::-webkit-scrollbar {
                display: none;
            }
            ul{
               
                height:140px;
                display:flex;
                justify-content:space-between;
                align-items:center;
                li{
                  
                    margin-left:.05rem;
                    margin-right:.1rem;
                   text-align:center;
                    img{
                        margin-right:0;
                        width:.52rem;
                        height:.52rem;
                       display:block;
                    }
                    .goods_activity{
                        display: inline-flex;
                    padding: 0 .1rem;
                    height: .2rem;
                    background-color: #ff3c54;
                    font-size: .12rem;
                    font-weight: 200;
                    color: #fff;
                    align-items: center;
                    }
                    .goods_price{
                        margin-top: .05rem;
                        line-height: .22rem;
                        font-size: .12rem;
                        color: #ff4040;
                        font-weight: 700;
                    }
                    .goods_oldPrice{
                        line-height: .12rem;
                        font-size: .12rem;
                        color: #bebebe;
                        text-decoration: line-through;
                        padding-bottom:.1rem;
                    }
                }
            }
        }
        
       }
       .content_shop{
           background:#fff;
            .content_title{
                height: .5rem;
                line-height: .5rem;
                text-align: center;
                font-size: .16rem;
                
            }
            ul{
                display:flex;
                flex-wrap:wrap;
                justify-content:space-between;
                align-items:center;
                li{
                    width:24%;
                    img{
                        width:.8rem;
                    }
                }
            }
            
        }

    }


   

`
export const HomeHeaderContainer = styled.div`
 .home_header{
        z-index:100;
     height:40px;
     left:0;
     top:0;
     right:0;
     position:fixed;
     
     display:flex;
     background-color: #ff344d;
     padding:3px 8px;
    justify-content:space-around;
    align-items:center;
     .header_logo{
        
         width:31px;
         height:37px;   
         background:url("img/logo.png");
         background-size:cover;
         background-color: #ff344d;
     }
     .header_search{
         height:29px;
         width:210px;
         background:#fff;
        padding-left:8px;
        padding-right:36px;
        display:flex;
        align-items:center;
        position: relative;
         input{
             width:170px;
             height:20px;
             border:none;
             line-height:20px;
             border-right:solid 1px #bebebe;
         }
        div{
            background:url("img/search.png");
            position:absolute;
            top:2px;
            left:178px;
            width:26px;
            height:26px;
            background-size:cover;
           
        }
            
         
     }
     .header_login{
         color:#fff;
         font-size:12px;
         padding:5px;
      
     }
 }`
