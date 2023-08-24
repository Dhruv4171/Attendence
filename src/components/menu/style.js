import { styled } from "styled-components";

const Wrapper = styled.div`
    .menu{
        position: fixed;
        top: 0;
        right: -250px; 
        width: 250px;
        height: 100vh;
        background-color: #000;
        padding: 20px;
        transition: right 0.3s ease;
    }
    &.open{
        right:0;
    }
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
`
export default Wrapper 