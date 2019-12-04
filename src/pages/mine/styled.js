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
    span{
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
        bottom: 0.38rem;
        height:auto;
        overflow:auto;
        background-color: #f5f5f5;
        .title-box{
            .picBox{
                display:block;
                overflow:hidden;
                border-radius:50%;
                height:.54rem;
                width:.54rem;
            }
          
            position: relative;
            height: 1.335rem;
            padding: .22rem .14rem 0;
            border-top: 1px solid #e5e5e5;
            background-color: #ff344d;
            display:flex;
            justify-content:space-between;
            color:white;
            img{
                width:0.5418rem;
                height:0.5418rem;
            }
            h4{
                color:white;
                margin:6px 0 0 -84px;
            }
            span{
                font-size:.119rem;
                margin:10px 0 0 0px;
            }
        
        }
        .fbox{
            position:absolute;
            width:3rem;
            
            z-index:10;
            margin-top:64px;
            left:50%;
            margin-left:-1.5rem;
            
            img{
                width:100%;
                height:64px;
            }
        }
        .internal{
            height:auto;
            overflow:hidden;
            padding:0 10.2px;
        }
        ul{
            background:white;
            height:auto;
            overflow:hidden;
            width:100%;
            margin-top:23px;
        }
        li{
            
            height:0.58rem;
            float: left;
            display:inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:25%;
            span{
                font-size:.12rem;
                // display: block;
                
                height: .2;
                line-height: .2rem;
            }
            p{
                font-size:.102rem;
                margin-top:5px;
                margin-bottom:0;
            }
        }
        .internal>div>img{
            width:100%;
        }


`