import { styled } from "styled-components";

const Wrapper = styled.nav`
    display:flex;
    align-item:center;
    justify-content:space-between;
    background:#474746;
    padding:20px 80px;
    .header_left{
        color:#fff;
    }
    .menu{
        display:flex;
        align-item:center;
        justify-content:center;
        li{
            list-style:none;
            padding:8px 20px;
            position:relative;
        }
        a{
            text-decoration:none;
            color:#fff;
            font-size:1rem;
            font-weight:600;
            transition:0.3s ease-in-out;
        }
        a:hover{
            color:#292;
        }
        .logout{
            border:none;
            padding:2px 4px;
            color:#fff;
            // background:#292;
        }
    }
    .hamburger-icon{
        display:none;
    }
    @media screen and (max-width:769px){
        .menu.open{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:flex-start;
            position:absolute;
            top:62px;
            right:0px;
            width:200px;
            transition:0.3s ease-in-out;
            height:100vh-100px;
            opacity:1;
            z-index:1;
            background:#474647;
            padding:40px 0 0 10px;
            li{
                margin-top:10px;
            }
        }
        .menu{
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:flex-start;
            position:fixed;
            top:62px;
            right:-300px;
            transition:0.3s ease-in-out;
            z-index:1;
            opacity:0.5;
            width:200px;
            height:100vh;
            background:#474647;
            padding:40px 0 0 10px;
            li{
                margin-top:10px;
            }
            
        }
        .hamburger-icon{
            display:block;
        }
    }
`
export default Wrapper
