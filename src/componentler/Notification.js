import React from 'react';
//Uyarı  Mesajı
const Notification = ({uyarıGoster}) => {//6
    return (
        <div className='notification-container'>
    {uyarıGoster && <div >Bu harfi daha önce girdiniz!</div>}
        </div>
    );
}

export default Notification;
