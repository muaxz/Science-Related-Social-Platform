import React from 'react'
import styled from "styled-components"
import Mainlayout from '../containers/Layout/mainlayout'

const Div = styled.div`
text-align:center;
padding-top:50px;
`

export default function Error404() {
    return (
        <Div>
            <p style={{fontWeight:"bold",fontSize:"20px"}}>Üzgünüz, bu sayfaya ulaşılamıyor.</p>
            <p>Bu sayfa kaldırılmış veya yanlış bir adres girmiş olabilirsin.<br></br>Lütfen ana sayfaya dön.</p>
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

