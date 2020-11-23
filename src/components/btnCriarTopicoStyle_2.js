import styled from "styled-components";

 const  Bt_CriarTopico = styled.button`

    display:flex;

    align-items:center;
    justify-content:center;

    background: #ED7839;
    border-radius: 4px;

    max-width:235,15px;
    max-height:32px;

    font: Roboto;
    font-weight: 600;
    font-size: 16px;

    color: #FFFFFF;

    margin:0px;


    background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;


    .imgBtnTopico{
        margin-right:7px;
        width:20px;
        height:20px;
    }
`;

export default Bt_CriarTopico