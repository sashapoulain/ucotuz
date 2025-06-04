import React from 'react';

const HelpPage = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-success">Yardım & Destek</h2>
      
      <div className="mb-3">
        <h5>Sıkça Sorulan Sorular</h5>
        <p>Ürün iadesi, kargo süreçleri, sipariş durumu gibi sık sorulan sorulara <a href="/#/sss">buradan</a> ulaşabilirsiniz.</p>
      </div>

      <div className="mb-3">
        <h5>Bizimle İletişime Geçin</h5>
        <p>Her türlü soru ve öneriniz için aşağıdaki kanallardan bize ulaşabilirsiniz:</p>
        <ul>
          <li><strong>E-posta:</strong> destek@siteadi.com</li>
          <li><strong>Telefon:</strong> 0850 123 45 67</li>
          <li><strong>Canlı Destek:</strong> Hafta içi 09:00 – 18:00</li>
        </ul>
      </div>

      <div className="mb-3">
        <h5>Yardım Konuları</h5>
        <ul>
          <li><a href="#">Sipariş Takibi</a></li>
          <li><a href="#">İade & Değişim</a></li>
          <li><a href="#">Kargo Bilgileri</a></li>
          <li><a href="#">Ödeme Seçenekleri</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HelpPage;
