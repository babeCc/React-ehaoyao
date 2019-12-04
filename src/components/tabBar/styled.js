import styled from "styled-components";

export const TabBarContainer = styled.div`
    .home_footer{
        height:50px;
        bottom:0;
        left:0;
        right:0;
        position: fixed;
        padding-top:6px;
        background:#fff;
        z-index:100;
        border-top: 1px solid #e5e5e5;
       ul{
        display:flex;
        justify-content:space-around;
        align-items:center;
        text-align:center;
            li{
               i{} 
                p{
                    font-size:10px;
                    
                }
            }
        
       }
       ul>i{
           position:absolute;
           bottom:25px;
           background:#ff344d;
            color: white;
            width: .13rem;
            height: .13rem;
            line-height: .13rem;
            font-size: .1rem;
            font-style: normal;
            border-radius:50%;
            right:23%;
       }

    }


`