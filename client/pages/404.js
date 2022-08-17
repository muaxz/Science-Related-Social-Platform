import React from 'react'
import styled from "styled-components"
import Mainlayout from '../containers/Layout/mainlayout'
import {NightLightP} from "../components/styledcomponents/Globalstyles"

const Div = styled.div`
text-align:center;
padding-top:100px;
`

export default function Error404() {
    return (
        <Div>
            <NightLightP style={{fontWeight:"bold",fontSize:"20px"}}>Üzgünüz, bu sayfaya ulaşılamıyor.</NightLightP>
            <NightLightP>Bu sayfa kaldırılmış veya yanlış bir adres girmiş olabilirsin.<br></br>Lütfen ana sayfaya dön.</NightLightP>
        </Div>
    )
}

Error404.layout=(children)=>{
   return (
       <Mainlayout>
           {children}
       </Mainlayout>
   )
};

