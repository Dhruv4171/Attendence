import { styled } from "styled-components";

const Wrapper = styled.div`
height: 100vh;
padding: 30px 10px;

.student-info{
    padding: 5px 10px;
}
        .student-info img{
            display: block;
            margin: 40px auto;
            width: 50%;
            border-radius: 50%;  
        }
        h2 {
            padding: 5px 10px;  
            text-align: center;
            font-size: 1.4rem;   
        }
        .attendance-buttons{
            padding: 10px 30px;
            display: flex;
            justify-content: space-evenly;
        }
            .attendance-buttons>button{
                width: 40%;
                border-radius: 5px;
                padding: 5px 5px;
                // width : 200px;
                margin : 30px auto;
                display : block;
                border : none;
                background : #292;
                color : #fff;
                font-weight : bold;
                border-bottom : solid 3px #070;
                
            }
            .attendance-buttons>button:hover{
                cursor: pointer;
            }
            .final-attendance{
                padding: 10px 30px;
            }
            .final-attendance h3{
                text-align: center;
            }
            .attendance-summary p, ul{
                margin-left: 20px;
            }
            .attendance-summary ul{
                list-style: none;
                padding: 5px;
            }
            .final-attendance input[type=button]{
                paddin: 2px 3px;
                width : 40%;
                margin : 30px auto;
                border : none;
                background : #292;
                color : #fff;
                font-weight : bold;
                border-bottom : solid 3px #070;
                border-radius : 3px;
            }
            .submitattd-buttons{
                display: flex;
                justify-content: space-evenly;
            }
            .final-attendance input[type=button]:hover{
                cursor:pointer;
            }
`
export default Wrapper