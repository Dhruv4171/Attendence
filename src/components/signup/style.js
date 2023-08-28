const { styled } = require("styled-components");

const Wrapper = styled.div`
margin : 50px 0;
.inner{
    h1{
        text-align:center;
    }
    input,select{
        width : 100%;
        padding : 10px;
        box-sizing : border-box;
        margin-top : 10px;
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
    .bottom_text{
        text-align:center;
        a{
            margin-top:10px;
            text-decoration:none;
            color:#000;
        }
    }
}
`
export default Wrapper