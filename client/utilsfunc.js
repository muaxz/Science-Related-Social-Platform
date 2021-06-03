export const calculatedate=(previousdate)=>{

    const Prevdate=new Date(previousdate);
    const difference=Math.abs(Date.now()-Prevdate);
    const second=Math.ceil(difference/1000);

    if(second<60){

        return {time:second,express:"Saniye"}

     }
     else if(second>60 && second<3600){

       return {time:Math.ceil(second/60),express:"Dakika"}
     }
     else if(second>3600 && second<86400){

        return {time:Math.ceil(second/(60*60)),express:"Saat"}
     }
     else if(second>86400 && second<262974383){

       return {time:Math.ceil(second/(60*60*24)),express:"Gün"}

     }

}