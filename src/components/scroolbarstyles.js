import styled from "styled-components";

export const Scroll = styled.div`
    width: 230px;
    height:360px;
    overflow: auto;
    background:none;
    border-radius:3px;

    padding-left:10px;
    padding-right:10px;

    text-align:justify;


    margin-top:5px;
    margin-left:3px;

::-webkit-scrollbar{
    width:3px;
    height:367px;
    border-radius:3px;
}

::-webkit-scrollbar-track{
    background-color:#E7E7E7;
    border-radius:3px;
}
::-webkit-scrollbar-thumb{
    background-color:#BFBFBF;
    border-radius:3px;
}

::-webkit-scrollbar-thumb:hover{
    background-color:#ED7839;
}
`;

export const ScrollScrenBack = styled.div`
    margin-bottom:0.1px;
    width: 240px;
    height: 392px;
    background:white;
`;

