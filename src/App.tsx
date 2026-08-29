import React, { useState } from 'react';

// Simple UI Component Definitions to replace missing files
export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'about' | 'program' | 'contact'>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerType, setRegisterType] = useState<'regular' | 'trial' | 'reading_package'>('regular');

  const handleOpenRegister = (type: 'regular' | 'trial' | 'reading_package' = 'regular') => {
    setRegisterType(type);
    setIsRegisterOpen(true);
  };

  const handleSelectTab = (tab: 'home' | 'about' | 'program' | 'contact') => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] font-sans antialiased">
      
      {/* 1. FIXED NAVIGATION BAR */}
      <nav className="bg-white shadow-sm border-b border-gray-100 fixed top-0 left-0 right-0 h-20 z-50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Image 1: Logo */}
            <img 
              src="/ptinteleksukses/logo.jpeg.jpeg" 
              alt="Logo" 
              className="h-10 w-auto object-contain rounded"
            />
            <span className="text-xl font-bold text-blue-900 tracking-wide">Intelek Sukses</span>
          </div>
          <div className="flex items-center gap-6 font-medium text-gray-600">
            <button onClick={() => handleSelectTab('home')} className={`hover:text-blue-600 transition ${currentTab === 'home' ? 'text-blue-600 font-bold' : ''}`}>Utama</button>
            <button onClick={() => handleSelectTab('about')} className={`hover:text-blue-600 transition ${currentTab === 'about' ? 'text-blue-600 font-bold' : ''}`}>Tentang Kami</button>
            <button onClick={() => handleSelectTab('program')} className={`hover:text-blue-600 transition ${currentTab === 'program' ? 'text-blue-600 font-bold' : ''}`}>Program</button>
            <button onClick={() => handleSelectTab('contact')} className={`hover:text-blue-600 transition ${currentTab === 'contact' ? 'text-blue-600 font-bold' : ''}`}>Hubungi</button>
            <button onClick={() => handleOpenRegister('regular')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">Daftar</button>
          </div>
        </div>
      </nav>

      {/* MAIN DYNAMIC CONTENT */}
      <main className="flex-1 pt-20">
        
        {/* TAB 1: HOME PAGE */}
        {currentTab === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* Hero Sub-section */}
            <header className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full inline-block mb-6">
                  Pusat Tuisyen Intelek Sukses
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Memperkasa Minda Muda, <br />
                  <span className="text-blue-600">Mencapai Kecemerlangan</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Sertai bimbingan eksklusif bersama pendidik berpengalaman untuk menguasai subjek teras dengan yakin dan cemerlang.
                </p>
                <div className="mt-8 flex gap-4">
                  <button onClick={() => handleOpenRegister('trial')} className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Cuba Kelas Percuma
                  </button>
                  <button onClick={() => handleSelectTab('program')} className="bg-white text-gray-700 font-semibold px-6 py-3 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition">
                    Lihat Program Kurikulum
                  </button>
                </div>
              </div>
              <div className="relative">
                {/* Image 2: Cikgu Raliya Hero Illustration */}
                <img 
                  src="/ptinteleksukses/cikguralliya.png.png" 
                  alt="Sesi Pembelajaran Cikgu Raliya" 
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
              </div>
            </header>

            {/* Features Sub-section */}
            <section className="bg-white py-16 border-t border-gray-100">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  {/* Image 3: Classroom Overview */}
                  <img 
                    src="/ptinteleksukses/classroom.jpeg.jpeg" 
                    alt="Suasana Kelas Kondusif" 
                    className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi & Visi Akademik Kami</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Kami menyediakan persekitaran pembelajaran kelas fizikal dan dalam talian yang interaktif, berfokus kepada teknik pemahaman pantas subjek kritikal.
                  </p>
                  <ul className="space-y-3 text-gray-700 font-medium">
                    <li className="flex items-center gap-2">✅ Nota Ringkas & Padat Berformat SPM/UASA</li>
                    <li className="flex items-center gap-2">✅ Kelas Bimbingan Intensif Kecil</li>
                    <li className="flex items-center gap-2">✅ Guru Pakar Berpengalaman Luas</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: ABOUT PAGE */}
        {currentTab === 'about' && (
          <div className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tentang Pusat Tuisyen Kami</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8">
              {/* Image 4: Alex & Cikgu Raliya Showcase */}
              <img 
                src="/ptinteleksukses/alex_ralliya.png.png" 
                alt="Alex bersama Cikgu Raliya" 
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Bimbingan Profesional & Mesra</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Di Pusat Tuisyen Intelek Sukses, barisan pendidik berdedikasi kami komited sepenuhnya untuk membantu anak-anak anda melonjakkan prestasi akademik dari tahap biasa ke tahap cemerlang melalui modul pembelajaran sistematik.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PROGRAM LIST PAGE */}
        {currentTab === 'program' && (
          <div className="max-w-6xl mx-auto px-6 py-16 animate-in fade-in duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Pakej Program & Kurikulum</h2>
            <p className="text-center text-gray-600 mb-12">Pilih pakej bimbingan akademik bersesuaian dengan tahap pendidikan anak anda.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900">Pakej Sekolah Rendah (UASA)</h4>
                <p className="text-gray-500 mt-2 text-sm">Bimbingan asas Bahasa Melayu, Bahasa Inggeris, Matematik & Sains.</p>
                <button onClick={() => handleOpenRegister('regular')} className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">Daftar Pakej</button>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-blue-500 shadow-md relative">
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">PILIHAN RAMAI</span>
                <h4 className="text-xl font-bold text-gray-900">Pakej Menengah Atas (SPM)</h4>
                <p className="text-gray-500 mt-2 text-sm">Fokus skor A+ Matematik Tambahan, Fizik, Kimia, Perakaunan & Sejarah.</p>
                <button onClick={() => handleOpenRegister('regular')} className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">Daftar Pakej</button>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900">Pakej Membaca Intensif</h4>
                <p className="text-gray-500 mt-2 text-sm">Modul khas pembacaan pantas interaktif bagi kanak-kanak prasekolah.</p>
                <button onClick={() => handleOpenRegister('reading_package')} className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">Daftar Pakej</button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONTACT PAGE */}
        {currentTab === 'contact' && (
          <div className="max-w-md mx-auto px-6 py-16 animate-in fade-in duration-300">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Hubungi Pejabat Kami</h2>
          <p className="text-gray-500 text-sm mb-6">Hantarkan mesej pertanyaan langsung kepada pegawai khidmat pelanggan kami.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Pertanyaan anda berjaya dihantar!'); }} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Penuh</label>
              <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombor Telefon</label>
              <input type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Mesej Pertanyaan</label>
              <textarea rows={4} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition">
              Hantar Pertanyaan Mesej
            </button>
          </form>
        )}
      </main>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#28A745] hover:bg-[#218838] text-white px-5 py-3.5 rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-105"
        title="Hubungi Kami Melalui WhatsApp"
      >
        <span className="text-xs font-bold">WhatsApp Bantuan Pendaftaran</span>
      </a>

      {/* INTERACTIVE REGISTRATION MODAL */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 relative shadow-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Borang Pendaftaran Terbuka</h3>
            <p className="text-xs text-gray-500 mb-4">Jenis Kelas Terpilih: <span className="font-bold text-blue-600 uppercase">{registerType}</span></p>
            <div className="space-y-3">
              <input type="text" placeholder="Nama Pelajar" className="w-full p-2 border rounded-lg text-sm" />
              <input type="text" placeholder="Tingkatan / Darjah" className="w-full p-2 border rounded-lg text-sm" />
              <button onClick={() => { setIsRegisterOpen(false); alert('Pendaftaran berjaya disimpan! Kami akan menghubungi anda via WhatsApp.'); }} className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg text-sm hover:bg-green-700 transition mt-2">
                Sahkan Hantar Pendaftaran
              </button>
              <button onClick={() => setIsRegisterOpen(false)} className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-200 transition">
                Tutup Borang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SIMPLE FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-xs border-t border-gray-800">
        <p className="font-semibold text-white mb-2">Pusat Tuisyen Intelek Sukses</p>
        <p>&copy; {new Date().getFullYear()} Semua Hak Cipta Terpelihara.</p>
      </footer>
