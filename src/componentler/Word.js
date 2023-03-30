import React,{useState} from "react";
import Show from "../Uyarı/Show"
const Word = ({secilenKelime,dogruHarfler,setDogruHarfler,setHatalıHarfler,hatalıHarfler,setScore,score}) => {//4
  let alfabe=["a","b","c","d","e","f","g","h","e","ı","g","j","k","l","m","n","r","o","p","r","s","t","y","z","x","w"]
  const[uyarıGoster,setUyarıGoster]=useState(false);
const handleAnswer=(harfim)=>{
    const harf=harfim;
        if(secilenKelime.includes(harf)){
            if(!dogruHarfler.includes(harf)){
              setDogruHarfler(curr=>[...curr,harf])
              setScore(score+(secilenKelime.length)*10);
            }else{
            Show(setUyarıGoster);
            }
        }else{
            if(!hatalıHarfler.includes(harf)){
              setHatalıHarfler(curr=>[...curr,harf]);
              setScore(score-(secilenKelime.length)*5);
            }else{
              Show(setUyarıGoster)
            }
        }
}
  return (
        //11-
        <div >
        <div className='word' id="word">
         {secilenKelime.split("").map((harf,index)=>{
            return(//Kelime bizim gönderdigimz harfi iceriyorsa o kısım ekrana yazılır
            <span className="letter" key={index}>
            {dogruHarfler.includes(harf) ? harf : ''}
            
          </span>
          
          
            )
        })}</div>
       
     
       <div className='word2'> 
       {alfabe.map((harf,index)=>{
            return<span className='letter2'key={index} onClick={()=>{handleAnswer(harf)}}>{harf}</span>
        })}
        {uyarıGoster && <div>Bu harfi daha önce girdiniz!</div> }
       </div>


        </div>
    );
}

export default Word;
