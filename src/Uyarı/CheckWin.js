
const CheckWin = (dogruHarfler,hatalıHarfler,secilenKelime) => {
    let status = 'kazandı';

    // Check for win
    secilenKelime.split('').forEach(letter => {
      if(!dogruHarfler.includes(letter)){
        status = '';
      }
    });
    
    // Check for lose
    if(hatalıHarfler.length>=6) status = 'kaybetti';
    //hata  yapma hakkı kelime uzunlugu kadar olur
  
    return status
  }
  export default CheckWin;