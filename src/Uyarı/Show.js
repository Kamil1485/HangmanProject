<<<<<<< HEAD
//20 Show a setUyarıGoster metodunu gönderiyoruz uyarıgoster statini true yapıyoruz 2sn sonra false a döndürüyoruz.
=======
//20 Show a setUyarıGoster metodunu gönderiyoruz uyarıgoster statini true yapıyoruz uyarıyı gösteriyoruz,2sn sonra false a döndürüyoruz.
>>>>>>> c18f8fd631e9c6801a9dc0e70dfa6e0b12addf49
const Show = (setUyarıGoster) => {
    setUyarıGoster(true);
    setTimeout(() => {
        setUyarıGoster(false);
    }, 2000);
}

export default Show;
