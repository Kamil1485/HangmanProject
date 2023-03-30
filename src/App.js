import React,{useState,useEffect} from 'react';

import './App.css';
import Header from './componentler/Header';
import Figure from "./componentler/Figure"
import Word from './componentler/Word';
import Popup from "./componentler/Popup";
import Notification from "./componentler/Notification";
import WrongLetters from "./componentler/WrongLetters";
//19-
import Show from "./Uyarı/Show"
   //8-
  // const kelimeler=["kratos","thor","jenna","spartacus","gannıcus","joel"]
   const kelimetahmin=[
    {ipucu:"God Of War Karakteri",kelime:"kratos"},
    {ipucu:"Days Gone Karakteri",kelime:"boozer"},
    {ipucu:"Last of Us Karakteri",kelime:"ellıe"},
    {ipucu:"Read Dead Redamption Karakteri",kelime:"arthur"},
    {ipucu:"Resident Evil Karakteri",kelime:"ada"},
    {ipucu:"Futbolda hem orta yuvarlak hem başlama vuruşu anlamlarına gelen söz",kelime:"santra"},
    {ipucu:"Takım çalışmalarında ekip elemanlarının sorumluluk ve yükümlülükleri paylaşması",kelime:"ısbolumu"},
    {ipucu:"Hastane, ev, fabrika gibi yerlerden kullanılmış ve kullanıcının artık işine yaramayan maddelerin tümü",kelime:"atık"},
   ]
  
   //let secilenKelime=kelimeler[Math.floor(Math.random()*kelimeler.length)];
   
   //28-
   let secilenTahmin=kelimetahmin[Math.floor(Math.random()*kelimetahmin.length)];
   let secilenKelime=secilenTahmin.kelime;
   
   function App() {
    //9-
const[oyunOyna,setOyunOyna]=useState(true);//oyunoynama durumu true yapıyoruz false oldugunda oyun oynananamaz.
const[dogruHarfler,setDogruHarfler]=useState([])//dogru kelimeleri tutan  bir dizi olusturduk.
const[hatalıHarfler,setHatalıHarfler]=useState([]);
//18-
const[uyarıGoster,setUyarıGoster]=useState(false);

//27-
const[score,setScore]=useState(0);
//14-
useEffect(()=>{
  const tusaBasma=(event)=>{
    const{key,keyCode}=event;
    
    if (oyunOyna && keyCode >= 65 && keyCode <= 90) {
      const harf=key.toLowerCase();
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

  }
  
  window.addEventListener("keydown",tusaBasma);
  return()=>window.removeEventListener("keydown",tusaBasma);
  
// eslint-disable-next-line react-hooks/exhaustive-deps
},[dogruHarfler,hatalıHarfler,oyunOyna])
//26-

function TekrarOyna(e) {
  e.preventDefault();
  setOyunOyna(true);

  // Empty Arrays
  setDogruHarfler([]);
  setHatalıHarfler([]);

  secilenTahmin=kelimetahmin[Math.floor(Math.random()*kelimetahmin.length)];
  secilenKelime=secilenTahmin.kelime;
  setScore(0);
}

return (
    
    <div>
    <Header secilenTahmin={secilenTahmin} hatalıHarfler={hatalıHarfler} score={score}/>
    <div className={`game-container ${oyunOyna}`}>
      {/*16 */}
      <Figure hatalıHarfler={hatalıHarfler}/>
      {/**12 */} 
      <WrongLetters hatalıHarfler={hatalıHarfler} />
      {/*10*/}
      <Word  secilenKelime={secilenKelime} dogruHarfler={dogruHarfler} setDogruHarfler={setDogruHarfler} setHatalıHarfler={setHatalıHarfler} hatalıHarfler={hatalıHarfler} setScore={setScore} score={score}/>
    </div>
    {/*21 */}
    <Popup dogruHarfler={dogruHarfler} hatalıHarfler={hatalıHarfler} secilenKelime={secilenKelime} setOyunOyna={setOyunOyna} TekrarOyna={TekrarOyna}/>
    <Notification uyarıGoster={uyarıGoster} />
    
    </div>
  );
}

export default App;
