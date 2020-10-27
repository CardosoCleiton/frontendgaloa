import styled from "styled-components";

export const Bt_Download = styled.button`

display:flex;
align-items:center;
justify-content:center;

background: #ED7839;
border-radius: 4px;

Width:120px;
Height:31px;

font: Roboto;
font-weight: 600;
font-size: 16px;

color: #FFFFFF;

margin:2px;

 img{
    margin-right:1px;
 }
`;

export const BtStar = styled(Bt_Download)`
   Width:43px;
   Height:31px;
`;

export const BtDoi = styled(Bt_Download)`
   Width:43px;
   Height:31px;
`;


export const Bts = styled.div`
   position: absolute;  
   display:flex;
   margin-top:-2px;
   top:0;
   right:0;
   
/* Tablet em retrato a paisagem e desktop */
 @media (min-width: 320px) and (max-width: 480px) {

   position: relative;  
   margin-left:10px;
   margin-top:-2px;
}
`;



