import styled from "styled-components";

export const SearchContainer = styled.div`
     
    .search_header{
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
    
    .search_wrapper{
        overflow:hidden;
       
        .hot-search{
            margin:0px;
        padding: 0 .12rem;
        width: 100%;
        height: auto;
        background-color: #fff;
            .title{
            
            height: .36rem;
            line-height: .36rem;
            font-size: .12rem;
            color: #181818;
        }
        dd{
            display: inline-block;
            margin: 0 .11rem .08rem 0;
            padding: 0 .12rem;
            height: .32rem;
            line-height: .32rem;
            background-color: #f0f2f5;
            font-size: .12rem;
            color: #4e4e4e;
            border-radius: 3px;
        }
        }
        
    }
    .search-result{
        padding-left:.1rem;
        background:#fff;
        li{
            height: .4rem;
            line-height: .4rem;
            font-size: .12rem;
            color: #4e4e4e;
            border-bottom: 1px solid #dadada;
         }
    }
    
`