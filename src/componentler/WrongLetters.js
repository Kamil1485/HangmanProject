import React from 'react';

const WrongLetters = ({hatalıHarfler}) => { //3
    //13 Hatalı Harf girildikce Hatalı Harf baslıgı altına , ile ayrılmış olarak harfleri yazdır.
   
    return (
        <div className='wrong-letters-container'>
        <div className='wrong-letters'>
            {hatalıHarfler.length>0 && <p>Hatalı Harf</p>}
            {hatalıHarfler.map((harf,index)=><span key={index}>{`${harf},`}</span>)}
        </div>
            
        </div>
    );
}

export default WrongLetters;
