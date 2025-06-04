import React, { useState } from 'react';

const LoginRegister = () => {
   const [activeTab, setActiveTab] = useState('login');

   return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", backgroundColor: "#f8f9fa" }}>
         <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>

            <div className="d-flex">
               <div
                  className={`w-50 text-center py-2 fw-semibold ${activeTab === 'login' ? 'bg-white text-dark border-bottom border-dark' : 'bg-secondary-subtle text-secondary'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveTab('login')}
               >
                  Giriş Yap
               </div>
               <div
                  className={`w-50 text-center py-2 fw-semibold ${activeTab === 'register' ? 'bg-white text-dark border-bottom border-dark' : 'bg-secondary-subtle text-secondary'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveTab('register')}
               >
                  Üye Ol
               </div>
            </div>

            <div className="card-body">
               {activeTab === 'login' ? (
                  <>
                     <div className="mb-3">
                        <label htmlFor="username" className="form-label">Kullanıcı Adı</label>
                        <input type="text" className="form-control border-success" id="username" />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="password" className="form-label">Şifre</label>
                        <input type="password" className="form-control border-success" id="password" />
                     </div>
                     <button className="btn btn-success text-white w-100 mb-2">Giriş Yap</button>

                     <div className="text-center mb-3">
                        <a href="#" className="text-success text-decoration-none" style={{ fontSize: '0.9rem' }}>
                           Şifremi Unuttum
                        </a>
                     </div>

                     <div className="text-center">
                        <button className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2 mb-2">
                           <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="20" height="20" />
                           Google ile Giriş Yap
                        </button>
                        <button className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2 mb-2">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" width="20" height="20" />
                           Facebook ile Giriş Yap
                        </button>
                        <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" width="20" height="20" />
                           Apple ile Giriş Yap
                        </button>
                     </div>
                  </>
               ) : (
                  <>
                     <div className="mb-3">
                        <label htmlFor="name" className="form-label">Ad Soyad</label>
                        <input type="text" className="form-control border-success" id="name" />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Telefon Numarası</label>
                        <input type="tel" className="form-control border-success" id="phone" />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="registerEmail" className="form-label">E-posta</label>
                        <input type="email" className="form-control border-success" id="registerEmail" />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="registerPassword" className="form-label">Şifre</label>
                        <input type="password" className="form-control border-success" id="registerPassword" />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Şifreyi Tekrar Girin</label>
                        <input type="password" className="form-control border-success" id="confirmPassword" />
                     </div>
                     <button className="btn btn-success w-100">Üye Ol</button>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default LoginRegister;
