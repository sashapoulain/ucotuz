import React from 'react';

const ReturnPolicyPage = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-success">İade Politikası</h2>

      <p>
        Müşteri memnuniyetini ön planda tutuyoruz. Satın aldığınız ürünleri aşağıdaki şartlara uygun şekilde iade edebilirsiniz:
      </p>

      <h5 className="mt-4">İade Süresi</h5>
      <p>
        Siparişinizi teslim aldıktan sonra 14 gün içerisinde iade talebinde bulunabilirsiniz.
      </p>

      <h5 className="mt-4">İade Koşulları</h5>
      <ul>
        <li>Ürün kullanılmamış ve tekrar satılabilir durumda olmalıdır.</li>
        <li>Orijinal ambalajı ve tüm aksesuarları ile birlikte gönderilmelidir.</li>
        <li>Faturasız ürün iadeleri kabul edilmemektedir.</li>
      </ul>

      <h5 className="mt-4">İade Süreci</h5>
      <ol>
        <li>Hesabınıza giriş yaparak siparişlerim bölümünden iade talebi oluşturun.</li>
        <li>Ürünü, kargo firması aracılığıyla tarafımıza gönderin.</li>
        <li>Ürün elimize ulaştıktan sonra 3 iş günü içinde iade işleminiz tamamlanır.</li>
      </ol>

      <h5 className="mt-4">İade Adresi</h5>
      <p>
        Örnek Mah. İade Sok. No:12 Kat:3 Şişli / İstanbul  
      </p>

      <p className="mt-4">
        Daha fazla bilgi için <a href="/#/yardim">Yardım & Destek</a> sayfamızı ziyaret edebilirsiniz.
      </p>
    </div>
  );
};

export default ReturnPolicyPage;
