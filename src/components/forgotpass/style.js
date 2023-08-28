import { styled } from "styled-components";


const Wrapper = styled.section`
margin:50px 0px;
.inner{
    h1{
        text-align:center;
    }
    input{
        width:100%;
        padding:10px;
        box-sizing:border-box;
        margin-top:10px;
        &[type=submit]{
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
        &[type=submit]:hover{
            cursor:pointer;
        }
    }
}
`
export default Wrapper;