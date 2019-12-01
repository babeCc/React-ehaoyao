import styled from "styled-components";

export const HeaderContainer= styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    
    .doctor_header{
        z-index:100;
        height:.38rem;
        display:flex;
        justify-content:space-around;
        background:#ff344d;
        color:#fff;
        line-height:.38rem;
        font-size:.25rem;
        .header_title{
            font-size:16px;
        }
        .header_right{
            line-height:.26rem;
        }
    }
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
`