const { styled } = require("styled-components");

const Wrapper = styled.div`
width:400px;
max-widht:400px;
margin:0px auto;
h1{
    text-align:center;
    widht:107px;
    height:36px;
    font-size:30px;
}
p{
    font-size:16px;
    font-wieght:600px;
}
form{
    display:flex;
    flex-direction:column;
    gap:15px;
    select{
        width:380px;   
        height:59.34px;
        border-radius:10px;
        border:1px solid #000;
        margin: 0px auto;
    }
    input[type='text'],input[type='email'],input[type='password']{
        width:380px;   
        height:59.34px;
        border-radius:10px;
        border:1px solid #000;
        margin:0px auto;
    }
    input[type='button']{
        width:380px;
        height:59.34px;
        border-radius:10px;
        background: #2F80ED;
        color:#fff;
        font-size:16px;
        margin: 0px auto;
        
    }
}  
.bottom_text{
    text-align:center;
    width:380px;
    font-size:16px;
    a{
        text-decoration:none;
        color:#000;
    }
} 
`
export default Wrapper