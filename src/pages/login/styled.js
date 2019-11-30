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
    font-size:.13.6rem;
    a{  
        color:white;
        font-size:0.119rem;
    }
    
    .anticon-left{
        padding-right:0.1rem;
    }
    div{
        padding:0 0.66rem;
    }
`

export const Container=styled.div`
        position: absolute;
        width: 100%;
        top: 0.38rem;
        height:100%;
        overflow:auto;
        background-color: #f5f5f5;
        
        .mes{
            margin-top:14.5px;
            padding: 0 10px;
        }
        input{
            border:0;
            background:white;
            height:0.34rem;
            margin-bottom:10.2px;
            width:100%;
            font-size: .12rem;
            padding-left: .08rem;
            

        }
        .forgetmm{
            display:flex;
            justify-content:space-between;
            font-size:10.24px;
        }
        .deng{
            display:block;
            width:2.66rem;
            height:0.3rem;
            line-height:0.3rem;
            background-color: #ff344d;
            color: #fff;
            border-radius: .04rem;
            border:0;
            margin:0.17rem auto 0;
        }
        h2{
            font-size:0.13rem;
            text-align:center;
            margin-top:23px;
        }
        .login-third{
            padding:0 0.1rem;
        }
        div>img{
            width:100%;
            
        }
        


`



