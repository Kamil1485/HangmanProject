import React from 'react';

const Word = ({secilenKelime,dogruHarfler}) => {//4
  
    return (
        //11-
        <div className='word' id="word">
        {secilenKelime.split("").map((harf,index)=>{
            return(//Kelime bizim gönderdigimz harfi iceriyorsa o kısım ekrana yazılır
            <span className="letter" key={index}>
            {dogruHarfler.includes(harf) ? harf : ''}
          </span>
            )
        })}
        </div>
    );
}

export default Word;
