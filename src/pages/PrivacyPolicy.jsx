import React from "react";


const PrivacyPolicy = () => {
  return (
    <div className="container my-5">
      <h1 className="privacy-title mb-4">Gizlilik Politikası</h1>

      <p>
        Web sitemizi ziyaret ettiğinizde, gizliliğinizi korumak ve kişisel
        verilerinizi güvenli bir şekilde işlemek en öncelikli
        sorumluluklarımızdandır.
      </p>

      <h4 className="text-green mt-4">1. Toplanan Bilgiler</h4>
      <p>
        Sitemizi kullanırken ad, e-posta, telefon numarası gibi bilgiler
        toplanabilir. Bu bilgiler, hizmet sunumu ve iletişim amaçlı
        kullanılmaktadır.
      </p>

      <h4 className="text-green mt-4">2. Bilgi Kullanımı</h4>
      <p>
        Toplanan bilgiler yalnızca hizmet kalitemizi artırmak ve sizinle daha
        iyi iletişim kurmak amacıyla kullanılmaktadır. Üçüncü taraflarla
        paylaşılmaz.
      </p>

      <h4 className="text-green mt-4">3. Çerezler</h4>
      <p>
        Web sitemizde çerezler kullanılmaktadır. Bu çerezler, kullanıcı
        deneyimini geliştirmek ve site trafiğini analiz etmek için kullanılır.
      </p>

      <h4 className="text-green mt-4">4. Güvenlik</h4>
      <p>
        Kişisel bilgilerinizin gizliliğini korumak için gerekli tüm teknik ve
        organizasyonel güvenlik önlemlerini alıyoruz.
      </p>

      <h4 className="text-green mt-4">5. Haklarınız</h4>
      <p>
        KVKK kapsamında kişisel verilerinizle ilgili erişim, düzeltme, silme ve
        itiraz etme haklarına sahipsiniz.
      </p>

      <p className="mt-5 text-muted small">
        Bu gizlilik politikası {new Date().toLocaleDateString("tr-TR")} tarihinde güncellenmiştir.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
