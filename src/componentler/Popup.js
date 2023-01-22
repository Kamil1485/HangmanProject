import React,{useEffect} from 'react';
import CheckWin from "../Uyarı/CheckWin";
//23- setOyunOyna side effect oldugu için useeffect içinde kullanacagız render ederken sorun yaşatır yoksa

const Popup = ({dogruHarfler,hatalıHarfler,secilenKelime,setOyunOyna,TekrarOyna}) => {//5 //Oyun Sonu Container


    let oyunSonuMesajı="";
   let kelimeGoster="";
   let OyunOynama=true;
   //kazanma durumu fonksiyonundan dönen degere göre if else olustur.
   if(CheckWin(dogruHarfler,hatalıHarfler,secilenKelime)==="kazandı"){
    oyunSonuMesajı="Tebrikler Adamı Kurtardınız!"
    OyunOynama=false;  
}
   if(CheckWin(dogruHarfler,hatalıHarfler,secilenKelime)==="kaybetti"){
    oyunSonuMesajı="Maalesef Adam Kurtulamadı";
    OyunOynama=false;  
   
}
   kelimeGoster=`Aranılan Kelime: ${secilenKelime}`;
//24
   useEffect(()=>{
    setOyunOyna(OyunOynama)
    })

 

    return (
        <div className="popup-container" style={oyunSonuMesajı !== '' ? {display:'flex'} :{}}>
        <div className='popup'>
        <form >
        <h2>{oyunSonuMesajı}</h2>
           <h2>{kelimeGoster}</h2>
           {/**25 */}
        <button id="play-button"  type="submit" onClick={TekrarOyna}>Tekrar Oyna</button>
        {/**Callback kullanma */}
        </form>
          
        </div>
            
        </div>
    );
}

export default Popup;
