import { styled } from 'styled-components';
const Wrapper = styled.div`
    margin : 50px 0;
    .inner{ 
        display: flex;
       justify-content: center;
       align-items: center;
       min-height: 100vh;
       background-color: #f0f0f0;
       ${'' /* padding: 20px; */}

        .personal_container{
            width:350px;
            margin-bottom: 20px;
            border-bottom:1px solid #3568AC;
            img{
                width:150px;
                border-radius:50%;
                height:150px;
                display: block;
                margin: 0 auto;
                object-fit: cover;
            }
        }
        .address_container{  
            width:350px;
            margin-bottom: 20px;
            border-bottom:1px solid #3568AC;
        }
        .contact_container{
            width:350px;
            margin-bottom: 20px;
            border-bottom:1px solid #3568AC;
        }
        h1{
            font-size: 20px;
            margin-bottom: 10px;
            color:black;
            text-align:center;
        }
        .top_info{
            margin-top: 15px;
            font-weight:bold;
            
        }
        .user_info{
            margin-top: 5px;
        }
    }
`
export default Wrapper