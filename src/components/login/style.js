const { styled } = require("styled-components");

 const Wrapper = styled.form`
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
        .forgot_text{
            margin-top:10px;
            text-align:right;
            a{
                text-decoration:none;
                color:#000;
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