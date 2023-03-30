import React from 'react';

const Header = ({secilenTahmin,hatalıHarfler,score}) => {
    console.log(secilenTahmin)
    return (
        <div>
            <h1>Adam Asmaca Oyunu</h1>
            <h3>{secilenTahmin.ipucu} ?</h3>
            <p>Hata Sayısı:{hatalıHarfler.length}/6</p>
            <span>Skor:{score}</span>
        </div>
    );
}

export default Header;
