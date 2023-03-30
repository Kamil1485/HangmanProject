import React from 'react';

<<<<<<< HEAD
const Header = ({secilenTahmin,hatalıHarfler,score}) => {
    console.log(secilenTahmin)
    return (
        <div>
            <h1>Adam Asmaca Oyunu</h1>
            <h3>{secilenTahmin.ipucu} ?</h3>
            <p>Hata Sayısı:{hatalıHarfler.length}/6</p>
            <span>Skor:{score}</span>
=======
const Header = ({secilenTahmin,hatalıHarfler}) => {
    //console.log(secilenTahim)
    return (
        <div>
            <h1>Adam Asmaca Oyunu</h1>
            <h3>{secilenTahmin?.ipucu} ?</h3>
            <p>Hata Sayısı:{hatalıHarfler.length}/6</p>
>>>>>>> c18f8fd631e9c6801a9dc0e70dfa6e0b12addf49
        </div>
    );
}

export default Header;
