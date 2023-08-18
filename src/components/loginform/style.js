const { styled } = require("styled-components");

 const Wrapper = styled.div` 
 background-color: #cfe2f3;
// width:400px;
// max-width:400px;
// border:2px solid #000;
// box-shadow:0px 0px 10px rgba(0,0,0,0.2);
// margin:0px auto;
// h1{
//     text-align:center;
//     widht:107px;
//     height:36px;
//     font-size:30px;
// }
// p{
//     font-size:16px;
//     font-weight:600px;
// }
/* Illustration */

position: absolute;
left: -0.23%;
right: -0.23%;
top: -0.64%;
bottom: 58.48%;

background: url(illustration-3-transparent.png);
mix-blend-mode: luminosity;

form{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    box-shadow:0px 0px 10px rgba(0,0,0,0.2);
    border:1px solid white; 
    box-sizing: border-box;
    padding: 20px 40px;
    width: 430px; 
    height: 686px;
    background-color: #D6D6D6;
    border-radius: 8px;

//     select{
//         width:380px;   
//         height:59.34px;
//         border-radius:10px;
//         border:1px solid #000;
//         margin: 0px auto; 
//     }
//     input[type='text'],input[type='email'],input[type='password']{
//         width:200px;   
//         height:50px;
//         border-radius:10px;
//         border:1px solid #000;
//         margin:0px auto;
//     }
//     input[type='button']{
//         width:200px;
//         height:50px;
//         border-radius:10px;
//         background: #2F80ED;
//         color:#fff;
//         font-size:16px;
//         margin: 0px auto;
//         border:1px solid #2F80ED;
//     }
// } 
// .bottom_text{
//     text-align:center;
//     width:380px;
//     font-size:16px;
//     a{
//         text-decoration:none;
//         color:#000;
//     }
// } 
`
 export default Wrapper