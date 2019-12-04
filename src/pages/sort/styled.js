import styled from "styled-components";
// import logo from "../../assets/booksLogo.jpg"

// const move = keyframes`
//     0%{
//         transform:rotate(0deg);
//     }
//     100%{
//         transform:rotate(720deg);
//     }
// `

// export const Container = styled.div`
//     width:200px;
//     height:200px;
//     background-color:red;
//     background-image:url(${logo});
//     animation:${move} 2s 0s;
// `

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
`
export const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 0.38rem;
    bottom: 0.38rem;
    height:100%;
    .active{
        background-color: #fff;
        border-right-color: #fff !important ;
        border-left:solid 3px #ff344d  !important;
        color: #ff344d;
        
    }
    .category-wrapper{
        height:100%;
        display:flex;
    }
    .category-wrapper .navleft{
        height:3.5rem;
        overflow:auto;
        border-left: 1px solid #f0f2f5;
        width: 0.7rem;
        background-color: #f0f2f5;
        ::-webkit-scrollbar {
                display: none;
            }
    }
    .navleft {
       
        ul{
            font-size:0.1rem;
            
        }
    }
    .navleft li{
        text-align:center;
        line-height:0.42rem;
        border-left: 1px solid #f0f2f5;
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }
    .subject{
        flex:1;
        font-size:0.1rem;
        padding-top: .04rem;
        height:auto;
        overflow:scroll;
    }
    .label-list{
        padding-left:0.04rem;
        height:auto;
        overflow:hidden;
        position:relation;
    }
    .label-list a{
        float: left;
        margin-right: .07rem;
        margin-bottom: .07rem;
        padding: 0 .04rem;
        width: 0.54rem;
        height: 0.3rem;
        line-height: .3rem;
        font-size: .1rem;
        color: #898989;
        border: 1px solid #a4a4a4;
        border-radius: .03rem;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
        overflow: hidden;
        display:inline-block;
    }
    dl{
      padding-top: .06rem;
      height:auto;
        overflow:hidden;
    }
    dt{
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: .12rem;
        color: #898989;
        text-align: center;
    }
    dt:before,dt:after{
        display: inline-block;
        margin-top: -1px;
        height: 1px;
        width: .3rem;
        content: "";
        border-bottom: 1px solid #e5e5e5;
        vertical-align: middle;
    }
    dt:before{
        margin-right: .1rem;
    }
    dt:after{
        margin-left: .1rem;
    }
    dd{
        width:33.3%;
        text-align:center;
        float:left;
        padding-top: .1rem;
        margin:0;
    }
    dd img{
        margin: 0 .14rem;
        width:0.51rem;
    }
    .anticon-vertical-align-top{
        position:fixed;
        right: .1rem;
        bottom: 1.266667rem;
        width: .24rem;
        height: .24rem;
        line-height: .24rem;
        border-radius: 50%;
        color:white;
        background:rgba(0,0,0,.4)
    }


`
// export const MovieHeader = styled(Header)`
//     border-radius:4px;
// `
// export const SearchInput = styled.input.attrs({
//     type:"text",
//     value:props=>props.value
// })`
//     width:100%;
//     height:.8rem;
//     border:0;
//     border-bottom:1px solid #000;
//     font-size:.26rem;
// `


