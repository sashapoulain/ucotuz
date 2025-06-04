import React from "react";

const faqItems = [
  {
    question: "Ürünü nasıl sipariş verebilirim?",
    answer: "İlgilendiğiniz ürün sayfasında yer alan 'Teklif Gönder' ya da 'Satıcıyla İletişime Geç' butonlarını kullanarak sipariş sürecini başlatabilirsiniz.",
  },
  {
    question: "Kargo ve teslimat süresi nedir?",
    answer: "Teslimat süresi ürünün bulunduğu konuma ve satıcıya göre değişmektedir. Detaylı bilgi için satıcıyla iletişime geçebilirsiniz.",
  },
  {
    question: "İade şartları nelerdir?",
    answer: "İade koşulları her satıcıya göre farklılık gösterebilir. Lütfen ürün detaylarında iade bilgilerini kontrol ediniz.",
  },
  {
    question: "Ürün garantisi var mı?",
    answer: "Garanti durumu ürün açıklamalarında belirtilmiştir. Ek bilgi için satıcıya danışabilirsiniz.",
  },
];

const FaqSection = ({ showTitle = false }) => {
  return (
    <div className="my-5">
      {showTitle && (
        <h4 className="fw-bold mb-4 text-success text-center">
          Sıkça Sorulan Sorular
        </h4>
      )}
      <div className="accordion" id="faqAccordion">
        {faqItems.map((item, index) => (
          <div className="accordion-item border rounded mb-3" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed bg-white text-success fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body text-secondary">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
