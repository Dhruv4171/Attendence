import { styled } from 'styled-components';
const Wrapper = styled.div`
    margin : 50px 0;
    .inner{
        .personal_container{
            width:350px;
            margin:0px auto;
            border-bottom:1px solid #3568AC;
            img{
                widht:150px;
                border-radius:50%;
                height:150px;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        }
        .address_container{  
            width:350px;
            margin:0px auto;
            border-bottom:1px solid #3568AC;
        }
        .contact_container{
            width:350px;
            margin:0px auto;
            border-bottom:1px solid #3568AC;
        }
        h1{
            font-size: 20px;
            height:30px;
            widht:84px;
            color:#2F80ED;
            text-align:left;
        }
        .top_info{
            font-size:15px;
            font-wieght:600px;
            opacity:0.5;
        }
        .user_info{
            font-size:18px;
            font-weight:700px;
        }
    }
`
export default Wrapper