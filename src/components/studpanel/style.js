import { styled } from "styled-components";


export const Wrapper = styled.section`
img_container{
    width: 50%;
    min-widht:80px;
}
img{
    width: 40%;
    min-widht:80px;
    border-radius:50%;
    height:150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
h1, h2, h3{
    padding: 10px 20px;
    text-align:center;
}
input{
    width:100%;
    padding:10px;
    box-sizing:border-box;
    margin-top:10px;
    &[type=button]{
        width : 200px;
        margin : 30px auto;
        display : block;
        border : none;
        background : #292;
        color : #fff;
        font-weight : bold;
        border-bottom : solid 3px #070;
        border-radius : 3px;
    }
    &[type=button]:hover{
        cursor:pointer;
    }
}

`