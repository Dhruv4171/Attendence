import { styled } from "styled-components";


export const Wrapper = styled.section`


input[type=search]{
    width : 100%;
    border : none;
    padding : 10px;
    margin:10px auto;
    box-shadow:2px 2px 2px #464546; 
}
.subjects{
    display : flex;
    flex-wrap : wrap;
    margin:auto 5px;
    padding: 5px;
}

.subject{
    min-width : 120px;
    min-height : 120px;
    text-align : center;
    line-height : 100px;
    flex : 1;
    margin:5px;
    border : solid thin #ccc;
    font-size : 1.2rem;
}
.subject:hover{
    cursor: pointer;
}
h1 {
    text-align: center;
}
`