import React from 'react';

const Header = ({secilenTahim,hatalıHarfler}) => {
    //console.log(secilenTahim)
    return (
        <div>
            <h1>Adam Asmaca Oyunu</h1>
            <h3>{secilenTahim.ipucu} ?</h3>
            <p>Hata Sayısı:{hatalıHarfler.length}/{secilenTahim.kelime.length}</p>
        </div>
    );
}

export default Header;
