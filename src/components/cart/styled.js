import styled from "styled-components";
export const Container = styled.div`
    .mask{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:rgba(0,0,0,.5);
        z-index:100;
    }
    .box{
        z-index:101;
        position:fixed;
        top:50%;
        left:50%;
        right:0;
        bottom:0;
        height:1.2rem;
        width:2.2rem;
        margin-top:-0.6rem;
        margin-left:-1.1rem;
        background:#fff;
        border-radius:.05rem;
        overflow:hidden;
        p{
            text-align:center;
            line-height:.8rem;

        }
        a{border-top:solid 1px #ededed;
            display:block;
            float:left;
            width:50%;
            height:.4rem;
            text-align:center;
            line-height:.4rem;
            border-right:solid 1px #ededed;
            color: #ff344d;
        }
    }

`