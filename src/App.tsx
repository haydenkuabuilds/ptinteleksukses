import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-sans antialiased">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* 💡 Logo with double extension mapped */}
            <img 
              src="/ptinteleksukses/logo.jpeg.jpeg" 
              alt="Logo Pusat Tuisyen Intelek Sukses" 
              className="h-10 w-auto object-contain rounded"
            />
            <span className="text-xl font-bold text-blue-900 tracking-wide hidden sm:inline">
              Intelek Sukses
            </span>
          </div>
          <div className="space-x-6 font-medium text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition">Tentang Kami</a>
            <a href="#programs" className="hover:text-blue-600 transition">Program</a>
            <a href="#contact" className="hover:text-blue-600 transition">Hubungi</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
          <div className="mt-8">
            <a href="#contact" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:bg-blue-700 transition inline-block">
              Daftar Kelas Sekarang
            </a>
          </div>
        </div>
        <div className="relative">
          {/* 💡 Hero with double extension mapped */}
          <img 
            src="/ptinteleksukses/cikguralliya.png.png" 
            alt="Sesi Pembelajaran Cikgu Raliya" 
            className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
          />
        </div>
      </header>

      {/* Features & Team Section */}
      <section id="about" className="bg-white py-16 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* 💡 Classroom with double extension mapped */}
            <img 
              src="/ptinteleksukses/classroom.jpeg.jpeg" 
              alt="Suasana Kelas Kondusif" 
              className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kenapa Memilih Kami?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Kami menyediakan persekitaran pembelajaran yang kondusif, interaktif, dan berfokuskan kepada pemahaman menyeluruh setiap pelajar.
            </p>
            
            {/* Showcase Row */}
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
              {/* 💡 Team with double extension mapped */}
              <img 
                src="/ptinteleksukses/alex_ralliya.png.png" 
                alt="Alex bersama Cikgu Raliya" 
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 flex-shrink-0"
              />
              <div>
                <h4 className="font-bold text-gray-900">Bimbingan Mesra Pendidik</h4>
                <p className="text-sm text-gray-500">Bersama barisan pengajar berdedikasi seperti Cikgu Raliya.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg font-semibold text-white mb-2">Pusat Tuisyen Intelek Sukses</p>
          <p className="text-sm text-gray-400 mb-6">Hubungi kami hari ini untuk slot percubaan atau pendaftaran sesi akademik.</p>
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Pusat Tuisyen Intelek Sukses. Hak Cipta Terpelihara.</p>
        </div>
      </footer>
    </div>
  );
}
