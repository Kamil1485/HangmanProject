import React from 'react';

const Header = ({secilenTahmin,hatalıHarfler}) => {
    //console.log(secilenTahim)
    return (
        <div>
            <h1>Adam Asmaca Oyunu</h1>
            <h3>{secilenTahmin.ipucu} ?</h3>
            <p>Hata Sayısı:{hatalıHarfler.length}/{secilenTahmin.kelime.length}</p>
        </div>
    );
}

export default Header;
