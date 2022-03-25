import React,{useState} from 'react';
import styled from "styled-components"
import {ArrowRight,ArrowLeft} from "@material-ui/icons"
import {Homereq} from "../../../Api/requests"

const ExteriorDiv = styled.div`
position:absolute;
top:350px;
left:50%;
height:150px;
max-width:1270px;
transform:translateX(-50%);
width:90%;
border-radius:5px;
z-index:100;
overflow-x:hidden;
`

const Controllers = styled.div`
position:absolute;
top:50%;
transform:translateY(-50%);
left:${({PositionX})=>PositionX}px;
right:${({PositionRight})=>PositionRight}px;
height:40px;
width:20px;
border-radius:3px;
background-color:white;
z-index:150;
display:flex;
justify-content:center;
align-items:center;
opacity:0;
`

const InnerDiv = styled.div`
position:relative;
border-radius:10px;
height:100%;
width:100%;
display:flex;
padding:10px;
align-items:center;
&:hover ${Controllers}{
opacity:1;
}
`


const BoxName = styled.span`
position:absolute;
top:calc(50% + 25px);
color:white;
font-weight:bold;
opacity:${({activeSelect})=>!activeSelect ? "0" : "1"};
left:10px;
transition-duration:0.4s;
`

const ImgInBox = styled.img`
width:100%;
height:100%;
border-radius:3px;
object-fit:cover;
transition-duration:0.4s;
`

const Cover = styled.div`
position:absolute;
transition-duration:0.5s;
opacity:0;
width:100%;
height:100%;
border-radius:5px;
background-color:rgba(0, 0, 0, 0.35)
`

const SectionBoxes = styled.div`
position:relative;
width:200px;
border:4px solid ${({activeSelect})=>!activeSelect ? "white" : "#5463FF"};
height:120px;
margin-right:10px;
box-shadow: -5px 0px 50px 5px white;
border-radius:5px;
flex-shrink:0;
transition-duration:0.3s;
&:hover {
   cursor:pointer;
   border:4px solid #FF7BA9;
}
&:hover ${BoxName}{
    opacity:1;
    left:15px;
}

&:hover ${ImgInBox}{
    object-fit:cover;
    object-position:10px 10px 10px 10px;
}

&:hover ${Cover}{
    opacity:1;
}
`





//flex-shrink flex boxun icindeki elemanlara verilecek


function Selection({listContent,setListContent,setSelectedKey,keyName}){

    const [error,seterror] = useState(null)
    const [selectionList,setselectionList] = useState({
        Felsefe:{
            display:"/boxSpace.jpg",
            selected:false,
            stoprequesting:false,
        },
        Metafizik:{
            display:"/boxChess.jpg",
            selected:false,
            stoprequesting:false,
        },
        Uzay:{
            display:"/boxChess.jpg",
            selected:false,
            stoprequesting:false,
        },
        Biyoloji:{
            display:"/boxBiology.jpg",
            selected:false,
            stoprequesting:false,
        },   
        Space1:{
            display:"/boxSpace.jpg",
            selected:false,
            stoprequesting:false,
        },
        Space2:{
            display:"/boxSpace.jpg",
            selected:false,
            stoprequesting:false,
        },
        Space3:{
            display:"/boxSpace.jpg",
            selected:false,
            stoprequesting:false,
        },
       
    
    })

    const RequestForSelection=(keyname)=>{

        const selections = {...selectionList};
        selections[keyname].stoprequesting = false;
        setselectionList(selectionList);

        Homereq({
            currentdata:listContent,
            setcontentdata:setListContent,
            setselection:setselectionList,
            selectionlist:selectionList,
            order:0,
            category:keyname,
            paignation:false,
            seterrmsg:seterror,
        })
        
    }


    const Selectionhander = (keyOfthisComponent) =>{
        
       
        if(keyOfthisComponent !== keyName){
            
             const Mutated = {...selectionList};
 
             for (const key in Mutated) {
                 Mutated[key].selected=false;
             }

             Mutated[keyOfthisComponent].selected = true;
     
             setselectionList(Mutated);
             setSelectedKey(keyOfthisComponent)
             RequestForSelection(keyOfthisComponent)
        }
       
       
     }


    return ( <ExteriorDiv>
                   
               <InnerDiv>
                    <Controllers PositionRight={""} PositionX={20}>
                       <ArrowLeft/>
                    </Controllers>
                    <Controllers PositionRight={20} PositionX={""}>
                       <ArrowRight/>
                    </Controllers>
                   {
                       Object.keys(selectionList).map((item,index)=>{
                           return (<SectionBoxes onClick={()=>Selectionhander(item)} activeSelect={selectionList[item].selected} key={index}>
                               <Cover></Cover>
                               <ImgInBox src={selectionList[item].display}></ImgInBox>
                               <BoxName activeSelect={selectionList[item].selected}>{item}</BoxName>
                           </SectionBoxes>)
                       })
                   }
               </InnerDiv>
             </ExteriorDiv> );
}

export default Selection;