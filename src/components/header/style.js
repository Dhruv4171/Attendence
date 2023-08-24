import { styled } from "styled-components";

const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    background-color:#474746;
    margin:0px auto;
    widht:500px;
    .header_left{
        display:flex;
        color:#fff;
        gap:15px;
        button{
            background-color:#474746; 
            border:1px solid #474746;
        }
        h1{
            margin-top:5px;   
        }
    }
    .header_right{
        display:flex;
        gap:15px;
        a{
            text-decoration:none;
            color:#fff;
            font-size:1rem;
            background-color:#474746;
            margin:5px 2px;
            padding:5px;
            border-radius:3px;
        }
        a:hover{
            background-color:#292;
        }
    }
`
export default Wrapper