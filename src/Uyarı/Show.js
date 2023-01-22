import React from 'react';
//20 Show a setUyarıGoster metodunu gönderiyoruz uyarıgoster statini true yapıyoruz 2sn sonra false a döndürüyoruz.
const Show = (setUyarıGoster) => {
    setUyarıGoster(true);
    setTimeout(() => {
        setUyarıGoster(false);
    }, 2000);
}

export default Show;
